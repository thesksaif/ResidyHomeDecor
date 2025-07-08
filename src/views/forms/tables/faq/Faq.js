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
    MenuItem
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { format } from 'date-fns';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AddIcon from '@mui/icons-material/AddTwoTone';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// Dummy FAQ data
function createData(id, question, answer, status, date) {
    return { id, question, answer, status, date };
}

const rows = [
    createData(1, 'What is your return policy?', 'You can return any item within 30 days.', 'Active', '2024-06-01'),
    createData(2, 'How do I track my order?', 'You can track your order from your account dashboard.', 'Active', '2024-05-28'),
    createData(3, 'Do you offer international shipping?', 'Yes, we ship worldwide.', 'Inactive', '2024-05-25'),
    createData(4, 'How can I contact support?', 'Email us at support@example.com.', 'Active', '2024-05-20'),
    createData(5, 'Can I change my delivery address?', 'Yes, before the order is shipped.', 'Inactive', '2024-05-18')
];

const headCells = [
    { id: 'id', numeric: true, label: '#', align: 'center' },
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

const FaqTable = () => {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('date');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [openAdd, setOpenAdd] = useState(false);
    const [form, setForm] = useState({
        question: '',
        answer: '',
        status: 'Active',
        date: new Date().toISOString().slice(0, 10)
    });

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

    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    const handleAnswerChange = (value) => {
        setForm((prev) => ({ ...prev, answer: value }));
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
            <Dialog open={openAdd} onClose={handleCloseAdd} maxWidth="xs" fullWidth>
                <DialogTitle>Add FAQ</DialogTitle>
                <DialogContent dividers>
                    <TextField
                        margin="normal"
                        label="Question"
                        name="question"
                        value={form.question}
                        onChange={handleFormChange}
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
                            value={form.answer}
                            onChange={handleAnswerChange}
                            style={{ height: 120, marginBottom: 32 }}
                        />
                    </div>
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
                    <Button variant="contained" color="error" onClick={handleCloseAdd}>
                        Submit
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
                                        <TableCell align="center">{row.id}</TableCell>
                                        <TableCell>{row.question}</TableCell>
                                        <TableCell>{row.answer}</TableCell>
                                        <TableCell align="center">
                                            <Chip label={row.status} color={getStatusColor(row.status)} size="small" />
                                        </TableCell>
                                        <TableCell>{format(new Date(row.date), 'yyyy-MM-dd')}</TableCell>
                                        <TableCell align="center">
                                            <Stack direction="row" spacing={0.5} justifyContent="center">
                                                <Tooltip title="View">
                                                    <IconButton size="small" color="primary">
                                                        <VisibilityIcon fontSize="small" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton size="small" color="error">
                                                        <DeleteIcon fontSize="small" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="More">
                                                    <IconButton size="small">
                                                        <MoreHorizOutlinedIcon fontSize="small" />
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
        </MainCard>
    );
};

export default FaqTable;
