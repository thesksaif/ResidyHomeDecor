import React, { useEffect, useState, useCallback } from 'react';
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
    Snackbar
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { format } from 'date-fns';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/AddTwoTone';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axiosServices from 'utils/axios';
import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/EditTwoTone';

// Remove dummy data, use API data
const headCells = [
    { id: 'question', numeric: false, label: 'Question', align: 'left' },
    { id: 'answer', numeric: false, label: 'Answer', align: 'left' },
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
                        inputProps={{ 'aria-label': 'select all faqs' }}
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

const FaqTable = () => {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('date');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [rows, setRows] = useState([]); // API data
    // Add these states for modal and editing
    const [editId, setEditId] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalForm, setModalForm] = useState({ question: '', answer: '', status: 'Active', date: new Date().toISOString().slice(0, 10) });
    const [modalLoading, setModalLoading] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    // Add state to store FAQ page ID
    const [faqPageId, setFaqPageId] = useState(null);

    // Step 6: Add function to update entire FAQ page
    // Remove unused updateFaqPage function

    // Step 1: Update to use new GET /api/faq endpoint
    // Step 5: Update to handle FAQ page creation if not found
    const fetchFaqQuestions = useCallback(async () => {
        try {
            // Use new FAQ API endpoint
            const res = await axiosServices.get('/api/faq');
            const questions = res.data.questions || [];
            setFaqPageId(res.data._id); // Store the FAQ page ID
            setRows(
                questions.map((q, idx) => ({
                    id: q._id || idx + 1,
                    question: q.question,
                    answer: q.answer,
                    status: q.status || 'Active',
                    date: q.date || new Date().toISOString().slice(0, 10)
                }))
            );
        } catch (err) {
            // If FAQ page not found, create a new one
            if (err && err.response && err.response.status === 404) {
                try {
                    const createRes = await axiosServices.post('/api/faq', {
                        title: 'Frequently Asked Questions',
                        bannerImage: '',
                        content: 'Find answers to common questions below.',
                        questions: []
                    });
                    setFaqPageId(createRes.data._id); // Store the new FAQ page ID
                    // Try fetching again after creation
                    fetchFaqQuestions();
                } catch (createErr) {
                    setSnackbar({ open: true, message: 'Failed to create FAQ page.', severity: 'error' });
                }
            } else {
                setSnackbar({ open: true, message: 'Failed to fetch FAQ questions.', severity: 'error' });
            }
        }
    }, [setRows, setSnackbar]);

    useEffect(() => {
        fetchFaqQuestions();
    }, [fetchFaqQuestions]);

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

    const filteredRows = rows;

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

    // Add this function for deleting a question
    const handleDeleteClick = (id) => {
        setDeleteId(id);
        setConfirmOpen(true);
    };
    // Step 3: Update to use new PUT /api/faq/questions/:questionId endpoint for editing
    const handleModalSubmit = async (e) => {
        e.preventDefault();
        setModalLoading(true);
        try {
            if (editId) {
                // Edit: Use new FAQ API endpoint
                await axiosServices.put(`/api/faq/questions/${editId}`, {
                    question: modalForm.question,
                    answer: modalForm.answer
                });
                setSnackbar({ open: true, message: 'Question updated!', severity: 'success' });
            } else {
                // Add: Use new FAQ API endpoint
                await axiosServices.post('/api/faq/questions', {
                    question: modalForm.question,
                    answer: modalForm.answer
                });
                setSnackbar({ open: true, message: 'Question added!', severity: 'success' });
            }
            setModalOpen(false);
            fetchFaqQuestions();
        } catch (err) {
            setSnackbar({ open: true, message: 'Failed to save question.', severity: 'error' });
        }
        setModalLoading(false);
    };

    // Step 4: Update to use new DELETE /api/faq/questions/:questionId endpoint for deleting
    const handleConfirmDelete = async () => {
        setConfirmOpen(false);
        try {
            // Delete: Use new FAQ API endpoint
            await axiosServices.delete(`/api/faq/questions/${deleteId}`);
            setSnackbar({ open: true, message: 'Question deleted!', severity: 'success' });
            fetchFaqQuestions();
        } catch (err) {
            setSnackbar({ open: true, message: 'Failed to delete question.', severity: 'error' });
        }
        setDeleteId(null);
    };
    // Cancel delete
    const handleCancelDelete = () => {
        setConfirmOpen(false);
        setDeleteId(null);
    };
    // Snackbar close
    const handleSnackbarClose = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    // Open modal for add
    const handleOpenAdd = () => {
        setEditId(null);
        setModalForm({ question: '', answer: '', status: 'Active', date: new Date().toISOString().slice(0, 10) });
        setModalOpen(true);
    };

    // Open modal for edit
    const handleOpenEdit = (row) => {
        setEditId(row.id);
        setModalForm({
            question: row.question,
            answer: row.answer,
            status: row.status,
            date: row.date
        });
        setModalOpen(true);
    };
    // Handle modal form change
    const handleModalFormChange = (e) => {
        const { name, value } = e.target;
        setModalForm((prev) => ({ ...prev, [name]: value }));
    };
    const handleModalAnswerChange = (value) => {
        setModalForm((prev) => ({ ...prev, answer: value }));
    };

    // Step 7: Add function to delete entire FAQ page
    const deleteFaqPage = async () => {
        if (!faqPageId) {
            setSnackbar({ open: true, message: 'FAQ page ID not found.', severity: 'error' });
            return;
        }

        try {
            await axiosServices.delete(`/api/faq/${faqPageId}`);
            setSnackbar({ open: true, message: 'FAQ page deleted!', severity: 'success' });
            setFaqPageId(null);
            setRows([]); // Clear the table
        } catch (err) {
            setSnackbar({ open: true, message: 'Failed to delete FAQ page.', severity: 'error' });
        }
    };

    // Optional: Add confirmation dialog for deleting entire FAQ page
    const [deletePageConfirmOpen, setDeletePageConfirmOpen] = useState(false);

    const handleConfirmDeletePage = async () => {
        setDeletePageConfirmOpen(false);
        await deleteFaqPage();
    };

    const handleCancelDeletePage = () => {
        setDeletePageConfirmOpen(false);
    };

    return (
        <MainCard
            title="FAQ Management"
            breadcrumb={false}
            secondary={
                <Tooltip title="Add FAQ">
                    <Fab color="primary" size="small" sx={{ boxShadow: 'none' }} onClick={handleOpenAdd}>
                        <AddIcon />
                    </Fab>
                </Tooltip>
            }
        >
            {/* Add FAQ Modal */}
            <Dialog open={modalOpen} onClose={() => setModalOpen(false)} maxWidth="xs" fullWidth>
                <DialogTitle>{editId ? 'Edit FAQ' : 'Add FAQ'}</DialogTitle>
                <DialogContent dividers>
                    <TextField
                        margin="normal"
                        label="Question"
                        name="question"
                        value={modalForm.question}
                        onChange={handleModalFormChange}
                        fullWidth
                        color="error"
                        sx={{
                            '& label.Mui-focused': { color: 'error.main' },
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'error.main' }
                        }}
                    />
                    <div style={{ marginTop: 16, marginBottom: 8 }}>
                        <ReactQuill
                            theme="snow"
                            value={modalForm.answer}
                            onChange={handleModalAnswerChange}
                            style={{ height: 120, marginBottom: 32 }}
                        />
                    </div>
                    <TextField
                        margin="normal"
                        label="Status"
                        name="status"
                        value={modalForm.status}
                        onChange={handleModalFormChange}
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
                        value={modalForm.date}
                        onChange={handleModalFormChange}
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
                    <Button onClick={() => setModalOpen(false)}>Cancel</Button>
                    <Button variant="contained" color="error" onClick={handleModalSubmit} disabled={modalLoading}>
                        {editId ? 'Update' : 'Add'}
                    </Button>
                </DialogActions>
            </Dialog>
            <TableContainer>
                <Table>
                    <EnhancedTableHead
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={filteredRows.length}
                    />
                    <TableBody>
                        {stableSort(filteredRows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                const isItemSelected = isSelected(row.id);
                                return (
                                    <TableRow hover key={row.id} selected={isItemSelected} aria-checked={isItemSelected}>
                                        <TableCell padding="checkbox" sx={{ pl: 3 }}>
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                onClick={(event) => handleClick(event, row.id)}
                                            />
                                        </TableCell>
                                        <TableCell>{row.question}</TableCell>
                                        <TableCell>{row.answer}</TableCell>
                                        <TableCell align="center">
                                            <Chip label={row.status} color={getStatusColor(row.status)} size="small" />
                                        </TableCell>
                                        <TableCell>{format(new Date(row.date), 'yyyy-MM-dd')}</TableCell>
                                        <TableCell align="center">
                                            <Stack direction="row" spacing={0.5} justifyContent="center">
                                                <Tooltip title="Edit">
                                                    <IconButton size="small" color="primary" onClick={() => handleOpenEdit(row)}>
                                                        <EditIcon fontSize="small" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton size="small" color="error" onClick={() => handleDeleteClick(row.id)}>
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
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <Dialog open={confirmOpen} onClose={handleCancelDelete}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>Are you sure you want to delete this question?</DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelDelete}>Cancel</Button>
                    <Button onClick={handleConfirmDelete} color="error" variant="contained">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={deletePageConfirmOpen} onClose={handleCancelDeletePage}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>Are you sure you want to delete the entire FAQ page?</DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelDeletePage}>Cancel</Button>
                    <Button onClick={handleConfirmDeletePage} color="error" variant="contained">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
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

export default FaqTable;
