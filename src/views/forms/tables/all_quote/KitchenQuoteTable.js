import PropTypes from 'prop-types';
import React from 'react';

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
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { CSVExport } from '../TableExports';

// assets
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// table data
function createData(
  id,
  name,
  email,
  phone,
  service,
  budget,
  status,
  date,
  details
) {
  return {
    id,
    name,
    email,
    phone,
    service,
    budget,
    status,
    date,
    details,
  };
}

const rows = [
  createData(
    1,
    'John Doe',
    'john@example.com',
    '+1234567890',
    'Kitchen Renovation',
    '$15,000 - $25,000',
    'New',
    '2024-01-15',
    [
      { field: 'Kitchen Size', value: '12x15 ft' },
      { field: 'Cabinets', value: 'Custom Wood' },
      { field: 'Countertop', value: 'Granite' },
      { field: 'Appliances', value: 'Stainless Steel' },
      { field: 'Timeline', value: '3-4 months' },
      { field: 'Additional Notes', value: 'Need modern design with island' },
    ]
  ),
  createData(
    2,
    'Sarah Wilson',
    'sarah@example.com',
    '+1234567893',
    'Kitchen Remodel',
    '$12,000 - $20,000',
    'New',
    '2024-01-12',
    [
      { field: 'Kitchen Size', value: '10x12 ft' },
      { field: 'Cabinets', value: 'MDF with Laminate' },
      { field: 'Countertop', value: 'Quartz' },
      { field: 'Appliances', value: 'Built-in' },
      { field: 'Timeline', value: '2-3 months' },
      { field: 'Additional Notes', value: 'Minimalist design' },
    ]
  ),
  createData(
    3,
    'Tom Miller',
    'tom@example.com',
    '+1234567896',
    'Kitchen Extension',
    '$25,000 - $35,000',
    'Completed',
    '2024-01-09',
    [
      { field: 'Kitchen Size', value: '15x20 ft' },
      { field: 'Cabinets', value: 'Premium Wood' },
      { field: 'Countertop', value: 'Marble' },
      { field: 'Appliances', value: 'High-end Built-in' },
      { field: 'Timeline', value: '4-5 months' },
      { field: 'Additional Notes', value: 'Open concept kitchen' },
    ]
  ),
  createData(
    4,
    'Anna Garcia',
    'anna@example.com',
    '+1234567899',
    'Kitchen Upgrade',
    '$18,000 - $28,000',
    'Completed',
    '2024-01-06',
    [
      { field: 'Kitchen Size', value: '14x16 ft' },
      { field: 'Cabinets', value: 'Custom Design' },
      { field: 'Countertop', value: 'Premium Quartz' },
      { field: 'Appliances', value: 'Smart Appliances' },
      { field: 'Timeline', value: '3-4 months' },
      { field: 'Additional Notes', value: 'Smart home integration' },
    ]
  ),
  createData(
    5,
    'David Brown',
    'david@example.com',
    '+1234567902',
    'Kitchen Redesign',
    '$20,000 - $30,000',
    'In Progress',
    '2024-01-03',
    [
      { field: 'Kitchen Size', value: '13x18 ft' },
      { field: 'Cabinets', value: 'Shaker Style' },
      { field: 'Countertop', value: 'Butcher Block' },
      { field: 'Appliances', value: 'Professional Grade' },
      { field: 'Timeline', value: '3-4 months' },
      { field: 'Additional Notes', value: 'Farmhouse style kitchen' },
    ]
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
              'aria-label': 'select all quotes',
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

// ==============================|| COLLAPSIBLE ROW ||============================== //

function Row({ row, index, page, rowsPerPage, isSelected, onSelectClick }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

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
              'aria-labelledby': `enhanced-table-checkbox-${index}`,
            }}
            onClick={onSelectClick}
          />
        </TableCell>
        <TableCell
          align="center"
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
        >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            sx={{ p: '2px', mr: 1 }}
          >
            {open ? (
              <KeyboardArrowUpIcon sx={{ fontSize: 16 }} />
            ) : (
              <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
            )}
          </IconButton>
          <span style={{ fontWeight: 500 }}>
            {page * rowsPerPage + index + 1}
          </span>
        </TableCell>
        <TableCell component="th" scope="row" padding="none">
          {row.name}
        </TableCell>
        <TableCell>{row.email}</TableCell>
        <TableCell>{row.phone}</TableCell>
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
              minWidth: 60,
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
              <IconButton
                size="small"
                color="secondary"
                sx={{ padding: '4px' }}
              >
                <EditIcon sx={{ fontSize: '16px' }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete Quote">
              <IconButton size="small" color="error" sx={{ padding: '4px' }}>
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
                      bgcolor:
                        theme.palette.mode === 'dark' ? 'dark.800' : 'grey.50',
                      mb: 2,
                    }}
                    title="Kitchen Quote Details"
                    content={false}
                    secondary={
                      <Stack direction="row" spacing={2} alignItems="center">
                        <CSVExport
                          data={row.details}
                          filename={`kitchen-quote-details-${row.id}.csv`}
                          header={[
                            { label: 'Field', key: 'field' },
                            { label: 'Value', key: 'value' },
                          ]}
                        />
                      </Stack>
                    }
                  >
                    <Table size="small" aria-label="kitchen quote details">
                      <TableHead>
                        <TableRow>
                          <TableCell>Field</TableCell>
                          <TableCell>Value</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {row.details?.map((detail, detailIndex) => (
                          <TableRow hover key={detailIndex}>
                            <TableCell
                              component="th"
                              scope="row"
                              sx={{ fontWeight: 'bold' }}
                            >
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
};

// ==============================|| TABLE - ENHANCED COLLAPSIBLE ||============================== //

export default function KitchenQuoteTable() {
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

  const header = [
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'Phone', key: 'phone' },
    { label: 'Service', key: 'service' },
    { label: 'Budget', key: 'budget' },
    { label: 'Status', key: 'status' },
    { label: 'Date', key: 'date' },
  ];

  return (
    <MainCard
      content={false}
      title="Kitchen Quote Requests"
      secondary={
        <Stack direction="row" spacing={2} alignItems="center">
          <CSVExport
            data={rows}
            filename="kitchen-quote-requests.csv"
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

                return (
                  <Row
                    key={row.id}
                    row={row}
                    index={index}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    isSelected={isItemSelected}
                    onSelectClick={(event) => handleClick(event, row.id)}
                  />
                );
              })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 53 * emptyRows,
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
  );
}
