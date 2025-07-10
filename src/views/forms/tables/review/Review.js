import * as React from 'react';
import {
    Checkbox,
    IconButton,
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
    Stack,
    Fab,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    MenuItem,
    CircularProgress,
    Alert,
    Snackbar,
    Typography
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { format } from 'date-fns';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/EditTwoTone';
import AddIcon from '@mui/icons-material/AddTwoTone';
import { useState, useEffect, useCallback } from 'react';
import axiosServices from 'utils/axios';
import PropTypes from 'prop-types';

// API-based table structure
const headCells = [
    { id: 'name', numeric: false, label: 'Name', align: 'left' },
    { id: 'image', numeric: false, label: 'Image', align: 'center' },
    { id: 'review', numeric: false, label: 'Review', align: 'left' },
    { id: 'status', numeric: false, label: 'Status', align: 'center' },
    { id: 'date', numeric: false, label: 'Date', align: 'left' }
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) return -1;
    if (b[orderBy] > a[orderBy]) return 1;
    return 0;
}

const getComparator = (order, orderBy) =>
    order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

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
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all reviews' }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell key={headCell.id} align={headCell.align} sortDirection={orderBy === headCell.id ? order : false}>
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
                <TableCell align="center">Action</TableCell>
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    numSelected: PropTypes.number.isRequired,
    rowCount: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired
};

const ReviewTable = () => {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('date');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = useState([]); // API data
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Modal states
    const [openAdd, setOpenAdd] = useState(false);
    const [editId, setEditId] = useState(null);
    const [modalLoading, setModalLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        image: '',
        review: '',
        status: 'Active',
        date: new Date().toISOString().slice(0, 10)
    });

    // Confirmation and notification states
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

    // Step 1: Fetch reviews from API
    const fetchReviews = useCallback(async () => {
        try {
            setLoading(true);
            setError(''); // Clear any previous errors
            const res = await axiosServices.get('/api/reviews');
            console.log('API Response:', res.data); // Debug log
            const reviews = res.data.data || [];
            setRows(reviews);
        } catch (err) {
            console.error('Fetch error:', err); // Debug log
            setError('Failed to load reviews. Please try again later.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchReviews();
    }, [fetchReviews]);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n._id);
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

    // Status chip color
    const getStatusColor = (status) => {
        switch (status) {
            case 'Active':
                return 'success';
            case 'Inactive':
                return 'error';
            default:
                return 'default';
        }
    };

    // Step 2: Add review
    const handleAddReview = async () => {
        try {
            setModalLoading(true);
            console.log('Submitting form:', form); // Debug log
            const res = await axiosServices.post('/api/reviews', form);
            console.log('Add response:', res.data); // Debug log
            setSnackbar({ open: true, message: 'Review added successfully!', severity: 'success' });
            setOpenAdd(false);
            setForm({ name: '', image: '', review: '', status: 'Active', date: new Date().toISOString().slice(0, 10) });
            await fetchReviews(); // Refresh the list
        } catch (err) {
            console.error('Add error:', err); // Debug log
            setSnackbar({ open: true, message: 'Failed to add review.', severity: 'error' });
        } finally {
            setModalLoading(false);
        }
    };

    // Step 3: Update review
    const handleUpdateReview = async () => {
        try {
            setModalLoading(true);
            console.log('Updating review:', editId, form); // Debug log
            const res = await axiosServices.put(`/api/reviews/${editId}`, form);
            console.log('Update response:', res.data); // Debug log
            setSnackbar({ open: true, message: 'Review updated successfully!', severity: 'success' });
            setOpenAdd(false);
            setEditId(null);
            setForm({ name: '', image: '', review: '', status: 'Active', date: new Date().toISOString().slice(0, 10) });
            await fetchReviews(); // Refresh the list
        } catch (err) {
            console.error('Update error:', err); // Debug log
            setSnackbar({ open: true, message: 'Failed to update review.', severity: 'error' });
        } finally {
            setModalLoading(false);
        }
    };

    // Step 4: Delete review
    const handleDeleteReview = async () => {
        try {
            await axiosServices.delete(`/api/reviews/${deleteId}`);
            setSnackbar({ open: true, message: 'Review deleted successfully!', severity: 'success' });
            setConfirmOpen(false);
            setDeleteId(null);
            fetchReviews(); // Refresh the list
        } catch (err) {
            setSnackbar({ open: true, message: 'Failed to delete review.', severity: 'error' });
        }
    };

    // Modal handlers
    const handleOpenAdd = () => {
        setEditId(null);
        setForm({ name: '', image: '', review: '', status: 'Active', date: new Date().toISOString().slice(0, 10) });
        setOpenAdd(true);
    };

    const handleOpenEdit = (row) => {
        setEditId(row._id);
        setForm({
            name: row.name,
            image: row.image,
            review: row.review,
            status: row.status,
            date: row.date ? new Date(row.date).toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10)
        });
        setOpenAdd(true);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
        setEditId(null);
        setForm({ name: '', image: '', review: '', status: 'Active', date: new Date().toISOString().slice(0, 10) });
    };

    const handleDeleteClick = (id) => {
        setDeleteId(id);
        setConfirmOpen(true);
    };

    const handleConfirmDelete = () => {
        handleDeleteReview();
    };

    const handleCancelDelete = () => {
        setConfirmOpen(false);
        setDeleteId(null);
    };

    const handleSnackbarClose = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <MainCard
            title="Testimonial Review"
            breadcrumb={false}
            secondary={
                <Tooltip title="Add Review">
                    <Fab color="primary" size="small" sx={{ boxShadow: 'none' }} onClick={handleOpenAdd}>
                        <AddIcon />
                    </Fab>
                </Tooltip>
            }
        >
            {/* Add/Edit Review Modal */}
            <Dialog open={openAdd} onClose={handleCloseAdd} maxWidth="xs" fullWidth>
                <DialogTitle>{editId ? 'Edit Review' : 'Add Review'}</DialogTitle>
                <DialogContent dividers>
                    <TextField
                        margin="normal"
                        label="Name"
                        name="name"
                        value={form.name}
                        onChange={handleFormChange}
                        fullWidth
                        color="error"
                        sx={{
                            '& label.Mui-focused': { color: 'error.main' },
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'error.main' }
                        }}
                    />
                    <TextField
                        margin="normal"
                        label="Image URL"
                        name="image"
                        value={form.image}
                        onChange={handleFormChange}
                        fullWidth
                        placeholder="https://example.com/image.jpg"
                        color="error"
                        sx={{
                            '& label.Mui-focused': { color: 'error.main' },
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'error.main' }
                        }}
                    />
                    <TextField
                        margin="normal"
                        label="Review"
                        name="review"
                        value={form.review}
                        onChange={handleFormChange}
                        fullWidth
                        multiline
                        minRows={3}
                        color="error"
                        sx={{
                            '& label.Mui-focused': { color: 'error.main' },
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'error.main' }
                        }}
                    />
                    <TextField
                        margin="normal"
                        label="Status"
                        name="status"
                        value={form.status}
                        onChange={handleFormChange}
                        select
                        fullWidth
                        color="error"
                        sx={{
                            '& label.Mui-focused': { color: 'error.main' },
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'error.main' }
                        }}
                    >
                        <MenuItem value="Active">Active</MenuItem>
                        <MenuItem value="Inactive">Inactive</MenuItem>
                    </TextField>
                    <TextField
                        margin="normal"
                        label="Date"
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={handleFormChange}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        color="error"
                        sx={{
                            '& label.Mui-focused': { color: 'error.main' },
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'error.main' }
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAdd}>Cancel</Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={editId ? handleUpdateReview : handleAddReview}
                        disabled={modalLoading}
                    >
                        {editId ? 'Update' : 'Add'}
                    </Button>
                </DialogActions>
            </Dialog>
            {loading ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>
                    <CircularProgress />
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Loading reviews...
                    </Typography>
                </div>
            ) : error ? (
                <Alert severity="error" sx={{ m: 2 }}>
                    {error}
                </Alert>
            ) : (
                <TableContainer>
                    <Table>
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows || [], getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    if (!row || !row._id) return null; // Skip invalid rows
                                    const isItemSelected = isSelected(row._id);
                                    return (
                                        <TableRow hover key={row._id} selected={isItemSelected} aria-checked={isItemSelected}>
                                            <TableCell padding="checkbox" sx={{ pl: 3 }}>
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    onClick={(event) => handleClick(event, row._id)}
                                                />
                                            </TableCell>
                                            <TableCell>{row.name || '-'}</TableCell>
                                            <TableCell align="center">
                                                {row.image && (
                                                    <img
                                                        src={row.image}
                                                        alt={row.name || 'Customer'}
                                                        style={{ width: 50, height: 50, borderRadius: '50%', objectFit: 'cover' }}
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                        }}
                                                    />
                                                )}
                                            </TableCell>
                                            <TableCell>{row.review || '-'}</TableCell>
                                            <TableCell align="center">
                                                <Chip label={row.status || 'Unknown'} color={getStatusColor(row.status)} size="small" />
                                            </TableCell>
                                            <TableCell>{row.date ? format(new Date(row.date), 'yyyy-MM-dd') : '-'}</TableCell>
                                            <TableCell align="center">
                                                <Stack direction="row" spacing={0.5} justifyContent="center">
                                                    <Tooltip title="Edit">
                                                        <IconButton size="small" color="primary" onClick={() => row && handleOpenEdit(row)}>
                                                            <EditIcon fontSize="small" />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="Delete">
                                                        <IconButton
                                                            size="small"
                                                            color="error"
                                                            onClick={() => row && row._id && handleDeleteClick(row._id)}
                                                        >
                                                            <DeleteIcon fontSize="small" />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Stack>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

            {/* Confirmation Dialog */}
            <Dialog open={confirmOpen} onClose={handleCancelDelete}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>Are you sure you want to delete this review?</DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelDelete}>Cancel</Button>
                    <Button onClick={handleConfirmDelete} color="error" variant="contained">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Snackbar for notifications */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message={snackbar.message}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                ContentProps={{
                    style: { backgroundColor: snackbar.severity === 'success' ? '#43a047' : '#d32f2f', color: '#fff' }
                }}
            />
        </MainCard>
    );
};

export default ReviewTable;
