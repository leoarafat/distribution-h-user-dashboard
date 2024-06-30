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

const WhiteListTable = ({ searchQuery, statusFilter }: any) => {
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
      whiteListUrl: "http://www.arafat.com",
      status: "pending",
      createdAt: "10-06-2024",
    },
    {
      id: 2,
      whiteListUrl: "http://www.arafat.com",
      status: "approved",
      createdAt: "10-06-2024",
    },
    {
      id: 3,
      whiteListUrl: "http://www.arafat.com",
      status: "rejected",
      createdAt: "10-06-2024",
    },
  ];

  const filteredRows = rows.filter(
    (row) =>
      (row.whiteListUrl.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.createdAt.toLowerCase().includes(searchQuery.toLowerCase())) &&
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
                <TableCell>White List URL</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.whiteListUrl}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.createdAt}</TableCell>
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

export default WhiteListTable;
