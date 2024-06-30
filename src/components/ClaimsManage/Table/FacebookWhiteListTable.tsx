import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const FacebookWhiteListTable = ({ searchQuery, statusFilter }: any) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedLabelId, setSelectedLabelId] = useState<number | null>(null);

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const rows = [
    {
      id: 1,
      email: "arafat@gmail.com",
      labelName: "Jao Pakhi",
      facebookUrl: "http://www.arafat.com",
      status: "pending",
    },
    {
      id: 2,
      email: "arafat@gmail.com",
      labelName: "Jao Pakhi",
      facebookUrl: "http://www.arafat.com",
      status: "approved",
    },
    {
      id: 3,
      email: "arafat@gmail.com",
      labelName: "Jao Pakhi",
      facebookUrl: "http://www.arafat.com",
      status: "rejected",
    },
  ];

  const filteredRows = rows.filter(
    (row) =>
      (row.labelName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.facebookUrl.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (statusFilter ? row.status === statusFilter : true)
  );

  const handleMenuClick = (
    event: React.MouseEvent<HTMLElement>,
    clientId: number
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedLabelId(clientId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedLabelId(null);
  };

  const handleMenuItemClick = (id: number) => {
    console.log(`id: ${id} on client ID: ${setSelectedLabelId}`);
    handleMenuClose();
  };

  return (
    <>
      <Paper sx={{ mt: 3 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Label Name</TableCell>
                <TableCell>Facebook Page URL</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.labelName}</TableCell>
                    <TableCell>{row.facebookUrl}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        onClick={(event) => handleMenuClick(event, row.id)}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl) && selectedLabelId === row.id}
                        onClose={handleMenuClose}
                      >
                        <MenuItem onClick={() => handleMenuItemClick(row.id)}>
                          Approve
                        </MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick(row.id)}>
                          Reject
                        </MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick(row.id)}>
                          Delete
                        </MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
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
      </Paper>
    </>
  );
};

export default FacebookWhiteListTable;
