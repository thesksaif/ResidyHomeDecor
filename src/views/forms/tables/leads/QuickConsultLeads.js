import PropTypes from 'prop-types';
import * as React from 'react';

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
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { CSVExport } from '../TableExports';

// assets
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

// table data
function createData(
  id,
  name,
  email,
  phone,
  service,
  budget,
  timeline,
  status,
  date
) {
  return {
    id,
    name,
    email,
    phone,
    service,
    budget,
    timeline,
    status,
    date,
  };
}

const rows = [
  createData(
    1,
    'John Doe',
    'john@example.com',
    '+1234567890',
    'Kitchen Renovation',
    '$10,000 - $15,000',
    '2-3 months',
    'New',
    '2024-01-15'
  ),
  createData(
    2,
    'Jane Smith',
    'jane@example.com',
    '+1234567891',
    'Wardrobe Design',
    '$5,000 - $8,000',
    '1-2 months',
    'In Progress',
    '2024-01-14'
  ),
  createData(
    3,
    'Mike Johnson',
    'mike@example.com',
    '+1234567892',
    'Living Room Design',
    '$8,000 - $12,000',
    '3-4 months',
    'Completed',
    '2024-01-13'
  ),
  createData(
    4,
    'Sarah Wilson',
    'sarah@example.com',
    '+1234567893',
    'Bathroom Remodel',
    '$6,000 - $10,000',
    '2-3 months',
    'New',
    '2024-01-12'
  ),
  createData(
    5,
    'David Brown',
    'david@example.com',
    '+1234567894',
    'Bedroom Furniture',
    '$3,000 - $6,000',
    '1 month',
    'In Progress',
    '2024-01-11'
  ),
  createData(
    6,
    'Lisa Davis',
    'lisa@example.com',
    '+1234567895',
    'Dining Room Setup',
    '$4,000 - $7,000',
    '1-2 months',
    'New',
    '2024-01-10'
  ),
  createData(
    7,
    'Tom Miller',
    'tom@example.com',
    '+1234567896',
    'Office Setup',
    '$7,000 - $11,000',
    '2-3 months',
    'Completed',
    '2024-01-09'
  ),
  createData(
    8,
    'Emma Wilson',
    'emma@example.com',
    '+1234567897',
    'Outdoor Furniture',
    '$5,000 - $9,000',
    '1-2 months',
    'In Progress',
    '2024-01-08'
  ),
  createData(
    9,
    'Chris Taylor',
    'chris@example.com',
    '+1234567898',
    'Home Office',
    '$4,000 - $8,000',
    '2 months',
    'New',
    '2024-01-07'
  ),
  createData(
    10,
    'Anna Garcia',
    'anna@example.com',
    '+1234567899',
    'Kitchen Cabinets',
    '$8,000 - $12,000',
    '2-3 months',
    'Completed',
    '2024-01-06'
  ),
];

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
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
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
    label: 'Sl No',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'phone',
    numeric: false,
    disablePadding: false,
    label: 'Phone',
  },
  {
    id: 'service',
    numeric: false,
    disablePadding: false,
    label: 'Service',
  },
  {
    id: 'budget',
    numeric: false,
    disablePadding: false,
    label: 'Budget',
  },
  {
    id: 'timeline',
    numeric: false,
    disablePadding: false,
    label: 'Timeline',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'date',
    numeric: false,
    disablePadding: false,
    label: 'Date',
  },
  {
    id: 'actions',
    numeric: false,
    disablePadding: false,
    label: 'Actions',
  },
];

// ==============================|| TABLE - HEADER ||============================== //

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
            size="small"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all leads',
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
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
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
  rowCount: PropTypes.number.isRequired,
};

// ==============================|| TABLE - TOOLBAR ||============================== //

const EnhancedTableToolbar = ({ numSelected }) => (
  <Toolbar
    sx={{
      p: 0,
      pl: 1,
      pr: 1,
      ...(numSelected > 0 && {
        color: (theme) => theme.palette.secondary.main,
      }),
    }}
  >
    {numSelected > 0 ? (
      <Typography color="inherit" variant="subtitle1">
        {numSelected} selected
      </Typography>
    ) : (
      <Typography variant="h6" id="tableTitle" component="div">
        Quick Consult Leads
      </Typography>
    )}
  </Toolbar>
);

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

// ==============================|| TABLE - ENHANCED ||============================== //

export default function QuickConsultLeads() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('date');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const getStatusColor = (status) => {
    switch (status) {
      case 'New':
        return 'primary';
      case 'In Progress':
        return 'warning';
      case 'Completed':
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

  const header = [
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'Phone', key: 'phone' },
    { label: 'Service', key: 'service' },
    { label: 'Budget', key: 'budget' },
    { label: 'Timeline', key: 'timeline' },
    { label: 'Status', key: 'status' },
    { label: 'Date', key: 'date' },
  ];

  return (
    <MainCard
      content={false}
      title="Quick Consult Leads"
      secondary={
        <Stack direction="row" spacing={2} alignItems="center">
          <CSVExport
            data={rows}
            filename="quick-consult-leads.csv"
            header={header}
          />
          <SecondaryAction link="https://next.material-ui.com/components/tables/" />
        </Stack>
      }
    >
      <TableContainer>
        <Table
          sx={{
            minWidth: 750,
            '& .MuiTableRow-root:nth-of-type(even)': {
              backgroundColor: 'rgba(0, 0, 0, 0.02)',
            },
            '& .MuiTableRow-root:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
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
                  >
                    <TableCell padding="checkbox" sx={{ pl: 3 }}>
                      <Checkbox
                        color="primary"
                        size="small"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                        onClick={(event) => handleClick(event, row.id)}
                      />
                    </TableCell>
                    <TableCell align="center">
                      {page * rowsPerPage + index + 1}
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell>{row.service}</TableCell>
                    <TableCell>{row.budget}</TableCell>
                    <TableCell>{row.timeline}</TableCell>
                    <TableCell>
                      <Chip
                        label={row.status}
                        color={getStatusColor(row.status)}
                        size="small"
                        sx={{
                          color: getStatusTextColor(row.status),
                          fontWeight: 'bold',
                        }}
                      />
                    </TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={0.5}>
                        <Tooltip title="View Details">
                          <IconButton
                            size="small"
                            color="primary"
                            sx={{ padding: '4px' }}
                          >
                            <VisibilityIcon sx={{ fontSize: '16px' }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit Lead">
                          <IconButton
                            size="small"
                            color="secondary"
                            sx={{ padding: '4px' }}
                          >
                            <EditIcon sx={{ fontSize: '16px' }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete Lead">
                          <IconButton
                            size="small"
                            color="error"
                            sx={{ padding: '4px' }}
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
                  height: 53 * emptyRows,
                }}
              >
                <TableCell colSpan={11} />
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
  );
}
