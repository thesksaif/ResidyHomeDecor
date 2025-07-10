import PropTypes from 'prop-types';
import * as React from 'react';
import { useEffect } from 'react';

// material-ui
import {
    Box,
    Checkbox,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableSortLabel,
    TableRow,
    Toolbar,
    Tooltip,
    Typography,
    Stack,
    Chip,
    CircularProgress,
    Alert,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    FormControlLabel,
    Switch,
    Grid,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Snackbar
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { CSVExport } from '../TableExports';
import axios from 'utils/axios';

// assets
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RefreshIcon from '@mui/icons-material/Refresh';

// API data transformation
const transformApiData = (apiData) => {
    return apiData.map((contact) => ({
        id: contact._id,
        name: contact.fullName,
        email: contact.email,
        phone: contact.phoneNumber,
        subject: contact.serviceDescription,
        message: contact.message,
        status: contact.status || 'New',
        date: new Date(contact.submittedAt).toLocaleDateString(),
        whatsapp: Boolean(contact.whatsapp),
        mobileVerified: Boolean(contact.mobileVerified),
        submittedAt: contact.submittedAt
    }));
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
        id: 'subject',
        numeric: false,
        disablePadding: false,
        label: 'Subject'
    },
    {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 'Status'
    },
    {
        id: 'mobileVerified',
        numeric: false,
        disablePadding: false,
        label: 'Mobile Verified'
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
                            'aria-label': 'select all leads'
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

// ==============================|| TABLE - TOOLBAR ||============================== //

const EnhancedTableToolbar = ({ numSelected }) => (
    <Toolbar
        sx={{
            p: 0,
            pl: 1,
            pr: 1,
            ...(numSelected > 0 && {
                color: (theme) => theme.palette.secondary.main
            })
        }}
    >
        {numSelected > 0 ? (
            <Typography color="inherit" variant="subtitle1">
                {numSelected} selected
            </Typography>
        ) : (
            <Typography variant="h6" id="tableTitle" component="div">
                Contact Leads
            </Typography>
        )}
    </Toolbar>
);

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired
};

// ==============================|| TABLE - ENHANCED ||============================== //

export default function ContactLeads() {
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
    const [editDialogOpen, setEditDialogOpen] = React.useState(false);
    const [itemToEdit, setItemToEdit] = React.useState(null);
    const [editLoading, setEditLoading] = React.useState(false);
    const [editFormData, setEditFormData] = React.useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        serviceDescription: '',
        message: '',
        whatsapp: false,
        status: 'New',
        mobileVerified: false
    });
    const [snackbar, setSnackbar] = React.useState({
        open: false,
        message: '',
        severity: 'success'
    });
    const [updatedRowId, setUpdatedRowId] = React.useState(null);

    // Fetch contacts from API
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await axios.get('/api/contact');

                if (response.data && response.data.status === 200) {
                    const transformedData = transformApiData(response.data.data);
                    setRows(transformedData);
                } else {
                    throw new Error('Failed to fetch contacts');
                }
            } catch (err) {
                console.error('Error fetching contacts:', err);
                setError(err.response?.data?.message || 'Failed to fetch contacts. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);

    const handleRefresh = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await axios.get('/api/contact');

            if (response.data && response.data.status === 200) {
                const transformedData = transformApiData(response.data.data);
                setRows(transformedData);
            } else {
                throw new Error('Failed to fetch contacts');
            }
        } catch (err) {
            console.error('Error fetching contacts:', err);
            setError(err.response?.data?.message || 'Failed to fetch contacts. Please try again.');
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

            const response = await axios.delete(`/api/contact/${itemToDelete.id}`);

            if (response.data && response.data.status === 200) {
                // Remove the deleted item from the rows
                setRows((prevRows) => prevRows.filter((row) => row.id !== itemToDelete.id));
                setDeleteDialogOpen(false);
                setItemToDelete(null);
                showSnackbar('Contact deleted successfully!', 'success');
            } else {
                throw new Error('Failed to delete contact');
            }
        } catch (err) {
            console.error('Error deleting contact:', err);
            const errorMessage = err.response?.data?.message || 'Failed to delete contact. Please try again.';
            showSnackbar(errorMessage, 'error');
        } finally {
            setDeleteLoading(false);
        }
    };

    const handleDeleteCancel = () => {
        setDeleteDialogOpen(false);
        setItemToDelete(null);
    };

    // Edit functions
    const handleEditClick = (item) => {
        setItemToEdit(item);
        setEditFormData({
            fullName: item.name || '',
            email: item.email || '',
            phoneNumber: item.phone || '',
            serviceDescription: item.subject || '',
            message: item.message || '',
            whatsapp: Boolean(item.whatsapp),
            status: item.status || 'New',
            mobileVerified: Boolean(item.mobileVerified)
        });
        setEditDialogOpen(true);
    };

    const handleEditFormChange = (field, value) => {
        setEditFormData((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    const handleEditConfirm = async () => {
        if (!itemToEdit) return;

        try {
            setEditLoading(true);

            const response = await axios.put(`/api/contact/${itemToEdit.id}`, editFormData);

            if (response.data && response.data.status === 200) {
                // Update the item in the rows using the response data if available
                setRows((prevRows) =>
                    prevRows.map((row) =>
                        row.id === itemToEdit.id
                            ? {
                                  ...row,
                                  name: editFormData.fullName,
                                  email: editFormData.email,
                                  phone: editFormData.phoneNumber,
                                  subject: editFormData.serviceDescription,
                                  message: editFormData.message,
                                  whatsapp: Boolean(editFormData.whatsapp),
                                  status: editFormData.status,
                                  mobileVerified: Boolean(editFormData.mobileVerified)
                              }
                            : row
                    )
                );

                // Set the updated row ID for visual feedback
                setUpdatedRowId(itemToEdit.id);
                setTimeout(() => setUpdatedRowId(null), 3000); // Clear after 3 seconds

                setEditDialogOpen(false);
                setItemToEdit(null);
                setEditFormData({
                    fullName: '',
                    email: '',
                    phoneNumber: '',
                    serviceDescription: '',
                    message: '',
                    whatsapp: false,
                    status: 'New',
                    mobileVerified: false
                });
                showSnackbar('Contact updated successfully!', 'success');
            } else {
                throw new Error('Failed to update contact');
            }
        } catch (err) {
            console.error('Error updating contact:', err);
            const errorMessage = err.response?.data?.message || 'Failed to update contact. Please try again.';
            showSnackbar(errorMessage, 'error');
        } finally {
            setEditLoading(false);
        }
    };

    const handleEditCancel = () => {
        setEditDialogOpen(false);
        setItemToEdit(null);
        setEditFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            serviceDescription: '',
            message: '',
            whatsapp: false,
            status: 'New',
            mobileVerified: false
        });
    };

    // Snackbar functions
    const showSnackbar = (message, severity = 'success') => {
        setSnackbar({
            open: true,
            message,
            severity
        });
    };

    const handleSnackbarClose = () => {
        setSnackbar((prev) => ({
            ...prev,
            open: false
        }));
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

    // Status options for dropdown
    const statusOptions = ['New', 'Pending', 'Process', 'Success', 'Failed', 'Reject', 'False Data'];

    const getStatusColor = (status) => {
        switch (status) {
            case 'New':
                return 'primary';
            case 'Pending':
                return 'warning';
            case 'Process':
                return 'info';
            case 'Success':
                return 'success';
            case 'Failed':
                return 'error';
            case 'Reject':
                return 'error';
            case 'False Data':
                return 'error';
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

    const header = [
        { label: 'Name', key: 'name' },
        { label: 'Email', key: 'email' },
        { label: 'Phone', key: 'phone' },
        { label: 'Subject', key: 'subject' },
        { label: 'Status', key: 'status' },
        { label: 'Mobile Verified', key: 'mobileVerified' },
        { label: 'Date', key: 'date' }
    ];

    // Show loading state
    if (loading) {
        return (
            <MainCard content={false} title="Contact Leads">
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
                    <CircularProgress />
                </Box>
            </MainCard>
        );
    }

    // Show error state
    if (error) {
        return (
            <MainCard content={false} title="Contact Leads">
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
                title="Contact Leads"
                secondary={
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Tooltip title="Refresh Data">
                            <IconButton onClick={handleRefresh} color="primary" disabled={loading}>
                                <RefreshIcon />
                            </IconButton>
                        </Tooltip>
                        <CSVExport data={rows} filename="contact-leads.csv" header={header} />
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
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.id}
                                            selected={isItemSelected}
                                            sx={{
                                                backgroundColor: updatedRowId === row.id ? 'rgba(76, 175, 80, 0.1)' : 'inherit',
                                                transition: 'background-color 0.3s ease'
                                            }}
                                        >
                                            <TableCell padding="checkbox" sx={{ pl: 3 }}>
                                                <Checkbox
                                                    color="primary"
                                                    size="small"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId
                                                    }}
                                                    onClick={(event) => handleClick(event, row.id)}
                                                />
                                            </TableCell>
                                            <TableCell align="center">{page * rowsPerPage + index + 1}</TableCell>
                                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                                {row.name}
                                            </TableCell>
                                            <TableCell>{row.email}</TableCell>
                                            <TableCell>
                                                <Stack direction="row" spacing={1} alignItems="center">
                                                    <Typography>{row.phone}</Typography>
                                                    {row.whatsapp && (
                                                        <Chip
                                                            label="WhatsApp"
                                                            size="small"
                                                            color="success"
                                                            sx={{ fontSize: '0.7rem', height: '20px' }}
                                                        />
                                                    )}
                                                </Stack>
                                            </TableCell>
                                            <TableCell>{row.subject}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={row.status}
                                                    color={getStatusColor(row.status)}
                                                    size="small"
                                                    sx={{
                                                        color: getStatusTextColor(row.status),
                                                        fontWeight: 'bold'
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                {console.log(
                                                    'Rendering mobileVerified for row:',
                                                    row.id,
                                                    'Value:',
                                                    row.mobileVerified,
                                                    'Type:',
                                                    typeof row.mobileVerified
                                                )}
                                                <Chip
                                                    label={row.mobileVerified ? 'Verified' : 'Not Verified'}
                                                    color={row.mobileVerified ? 'success' : 'default'}
                                                    size="small"
                                                    sx={{
                                                        fontSize: '0.75rem',
                                                        height: 20,
                                                        px: 1,
                                                        minWidth: 80
                                                    }}
                                                />
                                                <Typography
                                                    variant="caption"
                                                    display="block"
                                                    sx={{ fontSize: '0.6rem', color: 'text.secondary' }}
                                                >
                                                    {/* Raw: {String(row.mobileVerified)} */}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>{row.date}</TableCell>
                                            <TableCell>
                                                <Stack direction="row" spacing={0.5}>
                                                    <Tooltip title="View Details">
                                                        <IconButton size="small" color="primary" sx={{ padding: '4px' }}>
                                                            <VisibilityIcon sx={{ fontSize: '16px' }} />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="Edit Lead">
                                                        <IconButton
                                                            size="small"
                                                            color="secondary"
                                                            sx={{ padding: '4px' }}
                                                            onClick={() => handleEditClick(row)}
                                                        >
                                                            <EditIcon sx={{ fontSize: '16px' }} />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="Delete Lead">
                                                        <IconButton
                                                            size="small"
                                                            color="error"
                                                            sx={{ padding: '4px' }}
                                                            onClick={() => handleDeleteClick(row)}
                                                        >
                                                            <DeleteIcon sx={{ fontSize: '16px' }} />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Stack>
                                            </TableCell>
                                        </TableRow>
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
                    <Typography>Are you sure you want to delete this contact lead?</Typography>
                    {itemToDelete && (
                        <Box mt={2}>
                            <Typography variant="body2" color="textSecondary">
                                <strong>Name:</strong> {itemToDelete.name}
                                <br />
                                <strong>Subject:</strong> {itemToDelete.subject}
                                <br />
                                <strong>Phone:</strong> {itemToDelete.phone}
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

            {/* Edit Contact Modal */}
            <Dialog
                open={editDialogOpen}
                onClose={handleEditCancel}
                aria-labelledby="edit-dialog-title"
                aria-describedby="edit-dialog-description"
                maxWidth="md"
                fullWidth
            >
                <DialogTitle id="edit-dialog-title">Edit Contact Lead</DialogTitle>
                <DialogContent>
                    <Box sx={{ pt: 2 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Full Name"
                                    value={editFormData.fullName}
                                    onChange={(e) => handleEditFormChange('fullName', e.target.value)}
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    type="email"
                                    value={editFormData.email}
                                    onChange={(e) => handleEditFormChange('email', e.target.value)}
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    value={editFormData.phoneNumber}
                                    onChange={(e) => handleEditFormChange('phoneNumber', e.target.value)}
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Service Description"
                                    value={editFormData.serviceDescription}
                                    onChange={(e) => handleEditFormChange('serviceDescription', e.target.value)}
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Message"
                                    value={editFormData.message}
                                    onChange={(e) => handleEditFormChange('message', e.target.value)}
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth size="small">
                                    <InputLabel id="status-label">Status</InputLabel>
                                    <Select
                                        labelId="status-label"
                                        value={editFormData.status}
                                        label="Status"
                                        onChange={(e) => handleEditFormChange('status', e.target.value)}
                                    >
                                        {statusOptions.map((status) => (
                                            <MenuItem key={status} value={status}>
                                                {status}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={editFormData.whatsapp}
                                            onChange={(e) => handleEditFormChange('whatsapp', e.target.checked)}
                                            color="primary"
                                        />
                                    }
                                    label="WhatsApp Contact"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={editFormData.mobileVerified}
                                            onChange={(e) => handleEditFormChange('mobileVerified', e.target.checked)}
                                            color="primary"
                                        />
                                    }
                                    label="Mobile Verified"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEditCancel} color="primary" disabled={editLoading}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleEditConfirm}
                        color="primary"
                        variant="contained"
                        disabled={editLoading}
                        startIcon={editLoading ? <CircularProgress size={16} /> : null}
                    >
                        {editLoading ? 'Updating...' : 'Update Contact'}
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Snackbar for notifications */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity={snackbar.severity}
                    sx={{
                        width: '100%',
                        backgroundColor: snackbar.severity === 'success' ? '#4caf50' : '#f44336',
                        color: '#ffffff',
                        '& .MuiAlert-icon': {
                            color: '#ffffff'
                        }
                    }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </>
    );
}
