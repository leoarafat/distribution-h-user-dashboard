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
import { Trash2 } from "lucide-react";

const FacebookClaimRequestTable = ({ searchQuery, statusFilter }: any) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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
      upc: "AP101",
      status: "pending",
      facebookVideoUrl: "http://www.arafat.com",
    },
    {
      id: 2,
      email: "arafat@gmail.com",
      labelName: "Jao Pakhi",
      upc: "AP101",
      status: "approved",
      facebookVideoUrl: "http://www.arafat.com",
    },
    {
      id: 3,
      email: "arafat@gmail.com",
      labelName: "Jao Pakhi",
      upc: "AP101",
      status: "rejected",
      facebookVideoUrl: "http://www.arafat.com",
    },
  ];

  const filteredRows = rows.filter(
    (row) =>
      (row.labelName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.upc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.email.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (statusFilter ? row.status === statusFilter : true)
  );

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
                <TableCell>UPC</TableCell>
                <TableCell>Facebook Video URL</TableCell>
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
                    <TableCell>{row.upc}</TableCell>
                    <TableCell>{row.facebookVideoUrl}</TableCell>
                    <TableCell>{row.status}</TableCell>

                    <TableCell align="right">
                      <IconButton>
                        <Trash2 />
                      </IconButton>
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

export default FacebookClaimRequestTable;
