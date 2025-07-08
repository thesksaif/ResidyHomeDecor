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
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { format } from 'date-fns';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AddIcon from '@mui/icons-material/AddTwoTone';
import { useState } from 'react';

// Dummy review data
function createData(id, reviewer, email, rating, comment, status, date) {
  return { id, reviewer, email, rating, comment, status, date };
}

const rows = [
  createData(
    1,
    'Alice Smith',
    'alice@example.com',
    5,
    'Great product!',
    'Approved',
    '2024-06-01'
  ),
  createData(
    2,
    'Bob Johnson',
    'bob@example.com',
    4,
    'Very useful.',
    'Pending',
    '2024-05-28'
  ),
  createData(
    3,
    'Charlie Lee',
    'charlie@example.com',
    3,
    'Average experience.',
    'Rejected',
    '2024-05-25'
  ),
  createData(
    4,
    'Diana King',
    'diana@example.com',
    5,
    'Loved it!',
    'Approved',
    '2024-05-20'
  ),
  createData(
    5,
    'Evan Wright',
    'evan@example.com',
    2,
    'Not as expected.',
    'Pending',
    '2024-05-18'
  ),
];

const headCells = [
  { id: 'id', numeric: true, label: '#', align: 'center' },
  { id: 'reviewer', numeric: false, label: 'Reviewer', align: 'left' },
  { id: 'email', numeric: false, label: 'Email', align: 'left' },
  { id: 'rating', numeric: true, label: 'Rating', align: 'center' },
  { id: 'comment', numeric: false, label: 'Comment', align: 'left' },
  { id: 'status', numeric: false, label: 'Status', align: 'center' },
  { id: 'date', numeric: false, label: 'Date', align: 'left' },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

const getComparator = (order, orderBy) =>
  order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead({
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
}) {
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
          <TableCell
            key={headCell.id}
            align={headCell.align}
            sortDirection={orderBy === headCell.id ? order : false}
          >
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

const ReviewTable = () => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('date');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [openAdd, setOpenAdd] = useState(false);
  const [form, setForm] = useState({
    name: '',
    image: null,
    review: '',
    status: 'Active',
    date: new Date().toISOString().slice(0, 10),
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
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
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
      case 'Approved':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Rejected':
        return 'error';
      default:
        return 'default';
    }
  };

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <MainCard
      title="Testimonial Review"
      breadcrumb={false}
      secondary={
        <Tooltip title="Add Review">
          <Fab
            color="primary"
            size="small"
            sx={{ boxShadow: 'none' }}
            onClick={handleOpenAdd}
          >
            <AddIcon />
          </Fab>
        </Tooltip>
      }
    >
      {/* Add Review Modal */}
      <Dialog open={openAdd} onClose={handleCloseAdd} maxWidth="xs" fullWidth>
        <DialogTitle>Add Testimonial Review</DialogTitle>
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
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                { borderColor: 'error.main' },
            }}
          />
          <Button
            variant="outlined"
            component="label"
            fullWidth
            sx={{
              mt: 2,
              mb: 1,
              borderColor: 'error.main',
              color: 'error.main',
              '&:hover': {
                borderColor: 'error.dark',
                background: 'rgba(244,67,54,0.04)',
              },
              '&.Mui-focused': { borderColor: 'error.main' },
            }}
          >
            Upload Image
            <input
              type="file"
              name="image"
              accept="image/*"
              hidden
              onChange={handleFormChange}
            />
          </Button>
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
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                { borderColor: 'error.main' },
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
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                { borderColor: 'error.main' },
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
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                { borderColor: 'error.main' },
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
                  <TableRow
                    hover
                    key={row.id}
                    selected={isItemSelected}
                    aria-checked={isItemSelected}
                  >
                    <TableCell padding="checkbox" sx={{ pl: 3 }}>
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        onClick={(event) => handleClick(event, row.id)}
                      />
                    </TableCell>
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell>{row.reviewer}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell align="center">
                      <Chip label={row.rating} color="primary" size="small" />
                    </TableCell>
                    <TableCell>{row.comment}</TableCell>
                    <TableCell align="center">
                      <Chip
                        label={row.status}
                        color={getStatusColor(row.status)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      {format(new Date(row.date), 'yyyy-MM-dd')}
                    </TableCell>
                    <TableCell align="center">
                      <Stack
                        direction="row"
                        spacing={0.5}
                        justifyContent="center"
                      >
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

export default ReviewTable;
