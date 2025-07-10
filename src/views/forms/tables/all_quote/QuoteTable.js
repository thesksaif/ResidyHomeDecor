import PropTypes from 'prop-types';
import React from 'react';
import { useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Checkbox,
    Collapse,
    IconButton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    Tooltip,
    Chip,
    CircularProgress,
    Alert,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { CSVExport } from '../TableExports';
import axios from 'utils/axios';

// assets
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import RefreshIcon from '@mui/icons-material/Refresh';

// API data transformation
const transformApiData = (apiData) => {
    return apiData.map((quote) => {
        // Create details array from quote data
        const details = [
            { field: 'BHK Type', value: quote.bhkType },
            { field: 'BHK Size', value: quote.bhkSize },
            { field: 'Package', value: quote.package },
            { field: 'Property Name', value: quote.propertyName },
            { field: 'WhatsApp', value: quote.whatsapp ? 'Yes' : 'No' },
            { field: 'OTP Verified', value: quote.otpVerified ? 'Yes' : 'No' },
            { field: 'Submitted At', value: new Date(quote.submittedAt).toLocaleString() }
        ];

        // Add rooms information
        if (quote.rooms && quote.rooms.length > 0) {
            quote.rooms.forEach((room, index) => {
                details.push({
                    field: `Room ${index + 1}`,
                    value: `${room.name} (${room.count} count)`
                });
            });
        }

        return {
            id: quote._id,
            name: quote.name,
            email: quote.email,
            phone: quote.phoneNumber,
            service: quote.propertyName,
            budget: quote.package, // Using package as budget
            status: quote.otpVerified ? 'Verified' : 'Pending',
            date: new Date(quote.submittedAt).toLocaleDateString(),
            details,
            whatsapp: quote.whatsapp,
            otpVerified: quote.otpVerified,
            bhkType: quote.bhkType,
            bhkSize: quote.bhkSize,
            package: quote.package,
            rooms: quote.rooms,
            submittedAt: quote.submittedAt
        };
    });
};

// table filter
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// table header
const headCells = [
    {
        id: 'slno',
        numeric: true,
        disablePadding: false,
        label: 'Sl No'
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Name'
    },
    {
        id: 'email',
        numeric: false,
        disablePadding: false,
        label: 'Email'
    },
    {
        id: 'phone',
        numeric: false,
        disablePadding: false,
        label: 'Phone'
    },
    {
        id: 'service',
        numeric: false,
        disablePadding: false,
        label: 'Service'
    },
    {
        id: 'budget',
        numeric: false,
        disablePadding: false,
        label: 'Budget'
    },
    {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 'Status'
    },
    {
        id: 'date',
        numeric: false,
        disablePadding: false,
        label: 'Date'
    },
    {
        id: 'actions',
        numeric: false,
        disablePadding: false,
        label: 'Actions'
    }
];

// ==============================|| TABLE - HEADER ||============================== //

function EnhancedTableHead({ onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort }) {
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox" sx={{ pl: 3 }}>
                    <Checkbox
                        color="primary"
                        size="small"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all quotes'
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : undefined}
                    >
                        {headCell.id === 'actions' ? (
                            headCell.label
                        ) : (
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        )}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
};

// ==============================|| COLLAPSIBLE ROW ||============================== //

function Row({ row, index, page, rowsPerPage, isSelected, onSelectClick, onDeleteClick }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending':
                return 'warning';
            case 'Verified':
                return 'success';
            default:
                return 'default';
        }
    };

    const getStatusTextColor = (status) => {
        switch (status) {
            case 'New':
                return '#ffffff';
            case 'In Progress':
                return '#ffffff';
            case 'Completed':
                return '#ffffff';
            default:
                return '#ffffff';
        }
    };

    return (
        <>
            <TableRow hover sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell padding="checkbox" sx={{ pl: 3 }}>
                    <Checkbox
                        color="primary"
                        size="small"
                        checked={isSelected}
                        sx={{ transform: 'scale(0.75)' }}
                        inputProps={{
                            'aria-labelledby': `enhanced-table-checkbox-${index}`
                        }}
                        onClick={onSelectClick}
                    />
                </TableCell>
                <TableCell align="center" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)} sx={{ p: '2px', mr: 1 }}>
                        {open ? <KeyboardArrowUpIcon sx={{ fontSize: 16 }} /> : <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />}
                    </IconButton>
                    <span style={{ fontWeight: 500 }}>{page * rowsPerPage + index + 1}</span>
                </TableCell>
                <TableCell component="th" scope="row" padding="none">
                    {row.name}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography>{row.phone}</Typography>
                        {row.whatsapp && <Chip label="WhatsApp" size="small" color="success" sx={{ fontSize: '0.7rem', height: '20px' }} />}
                    </Stack>
                </TableCell>
                <TableCell>{row.service}</TableCell>
                <TableCell>{row.budget}</TableCell>
                <TableCell>
                    <Chip
                        label={row.status}
                        color={getStatusColor(row.status)}
                        size="small"
                        sx={{
                            color: getStatusTextColor(row.status),
                            fontWeight: 'bold',
                            fontSize: '0.75rem',
                            height: 20,
                            px: 1,
                            minWidth: 60
                        }}
                    />
                </TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                    <Stack direction="row" spacing={0.5}>
                        <Tooltip title="View Details">
                            <IconButton size="small" color="primary" sx={{ padding: '4px' }}>
                                <VisibilityIcon sx={{ fontSize: '16px' }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit Quote">
                            <IconButton size="small" color="secondary" sx={{ padding: '4px' }}>
                                <EditIcon sx={{ fontSize: '16px' }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete Quote">
                            <IconButton size="small" color="error" sx={{ padding: '4px' }} onClick={() => onDeleteClick(row)}>
                                <DeleteIcon sx={{ fontSize: '16px' }} />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        {open && (
                            <Box sx={{ margin: 1 }}>
                                <TableContainer>
                                    <SubCard
                                        sx={{
                                            bgcolor: theme.palette.mode === 'dark' ? 'dark.800' : 'grey.50',
                                            mb: 2
                                        }}
                                        title="Quote Details"
                                        content={false}
                                        secondary={
                                            <Stack direction="row" spacing={2} alignItems="center">
                                                <CSVExport
                                                    data={row.details}
                                                    filename={`quote-details-${row.id}.csv`}
                                                    header={[
                                                        { label: 'Field', key: 'field' },
                                                        { label: 'Value', key: 'value' }
                                                    ]}
                                                />
                                            </Stack>
                                        }
                                    >
                                        <Table size="small" aria-label="quote details">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Field</TableCell>
                                                    <TableCell>Value</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {row.details?.map((detail, detailIndex) => (
                                                    <TableRow hover key={detailIndex}>
                                                        <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                                                            {detail.field}
                                                        </TableCell>
                                                        <TableCell>{detail.value}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </SubCard>
                                </TableContainer>
                            </Box>
                        )}
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

Row.propTypes = {
    row: PropTypes.object,
    index: PropTypes.number,
    page: PropTypes.number,
    rowsPerPage: PropTypes.number,
    isSelected: PropTypes.bool,
    onSelectClick: PropTypes.func,
    onDeleteClick: PropTypes.func
};

// ==============================|| TABLE - ENHANCED COLLAPSIBLE ||============================== //

export default function QuoteTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('date');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
    const [itemToDelete, setItemToDelete] = React.useState(null);
    const [deleteLoading, setDeleteLoading] = React.useState(false);

    // Fetch quotes from API
    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await axios.get('/api/quote');

                if (response.data && response.data.status === 200) {
                    const transformedData = transformApiData(response.data.data);
                    setRows(transformedData);
                } else {
                    throw new Error('Failed to fetch quotes');
                }
            } catch (err) {
                console.error('Error fetching quotes:', err);
                setError(err.response?.data?.message || 'Failed to fetch quotes. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchQuotes();
    }, []);

    const handleRefresh = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await axios.get('/api/quote');

            if (response.data && response.data.status === 200) {
                const transformedData = transformApiData(response.data.data);
                setRows(transformedData);
            } else {
                throw new Error('Failed to fetch quotes');
            }
        } catch (err) {
            console.error('Error fetching quotes:', err);
            setError(err.response?.data?.message || 'Failed to fetch quotes. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Delete functions
    const handleDeleteClick = (item) => {
        setItemToDelete(item);
        setDeleteDialogOpen(true);
    };

    const handleDeleteConfirm = async () => {
        if (!itemToDelete) return;

        try {
            setDeleteLoading(true);

            const response = await axios.delete(`/api/quote/${itemToDelete.id}`);

            if (response.data && response.data.status === 200) {
                // Remove the deleted item from the rows
                setRows((prevRows) => prevRows.filter((row) => row.id !== itemToDelete.id));
                setDeleteDialogOpen(false);
                setItemToDelete(null);
            } else {
                throw new Error('Failed to delete quote');
            }
        } catch (err) {
            console.error('Error deleting quote:', err);
            setError(err.response?.data?.message || 'Failed to delete quote. Please try again.');
        } finally {
            setDeleteLoading(false);
        }
    };

    const handleDeleteCancel = () => {
        setDeleteDialogOpen(false);
        setItemToDelete(null);
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const header = [
        { label: 'Name', key: 'name' },
        { label: 'Email', key: 'email' },
        { label: 'Phone', key: 'phone' },
        { label: 'Property Name', key: 'service' },
        { label: 'Package', key: 'budget' },
        { label: 'Status', key: 'status' },
        { label: 'Date', key: 'date' }
    ];

    // Show loading state
    if (loading) {
        return (
            <MainCard content={false} title="General Quote Requests">
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
                    <CircularProgress />
                </Box>
            </MainCard>
        );
    }

    // Show error state
    if (error) {
        return (
            <MainCard content={false} title="General Quote Requests">
                <Box p={3}>
                    <Alert severity="error">{error}</Alert>
                </Box>
            </MainCard>
        );
    }

    return (
        <>
            <MainCard
                content={false}
                title="General Quote Requests"
                secondary={
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Tooltip title="Refresh Data">
                            <IconButton onClick={handleRefresh} color="primary" disabled={loading}>
                                <RefreshIcon />
                            </IconButton>
                        </Tooltip>
                        <CSVExport data={rows} filename="general-quote-requests.csv" header={header} />
                        <SecondaryAction link="https://next.material-ui.com/components/tables/" />
                    </Stack>
                }
            >
                <TableContainer>
                    <Table
                        sx={{
                            minWidth: 750,
                            '& .MuiTableRow-root:nth-of-type(even)': {
                                backgroundColor: 'rgba(0, 0, 0, 0.02)'
                            },
                            '& .MuiTableRow-root:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.04)'
                            }
                        }}
                        aria-labelledby="tableTitle"
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.id);

                                    return (
                                        <Row
                                            key={row.id}
                                            row={row}
                                            index={index}
                                            page={page}
                                            rowsPerPage={rowsPerPage}
                                            isSelected={isItemSelected}
                                            onSelectClick={(event) => handleClick(event, row.id)}
                                            onDeleteClick={handleDeleteClick}
                                        />
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: 53 * emptyRows
                                    }}
                                >
                                    <TableCell colSpan={10} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </MainCard>

            {/* Delete Confirmation Dialog */}
            <Dialog
                open={deleteDialogOpen}
                onClose={handleDeleteCancel}
                aria-labelledby="delete-dialog-title"
                aria-describedby="delete-dialog-description"
            >
                <DialogTitle id="delete-dialog-title">Confirm Delete</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to delete this quote?</Typography>
                    {itemToDelete && (
                        <Box mt={2}>
                            <Typography variant="body2" color="textSecondary">
                                <strong>Name:</strong> {itemToDelete.name}
                                <br />
                                <strong>Property:</strong> {itemToDelete.service}
                                <br />
                                <strong>Package:</strong> {itemToDelete.budget}
                            </Typography>
                        </Box>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteCancel} color="primary" disabled={deleteLoading}>
                        No, Cancel
                    </Button>
                    <Button
                        onClick={handleDeleteConfirm}
                        color="error"
                        variant="contained"
                        disabled={deleteLoading}
                        startIcon={deleteLoading ? <CircularProgress size={16} /> : null}
                    >
                        {deleteLoading ? 'Deleting...' : 'Yes, Delete'}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
