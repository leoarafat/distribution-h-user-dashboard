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

const ArtistChannelRequestTable = ({ searchQuery, statusFilter }: any) => {
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
      channelLink: "http://www.arafat.com",
      topicLink: "http://www.arafat.com",
      upc1: "AP101",
      upc2: "AP101",
      upc3: "AP101",
      status: "pending",
    },
    {
      id: 2,
      channelLink: "http://www.arafat.com",
      topicLink: "http://www.arafat.com",
      upc1: "AP101",
      upc2: "AP101",
      upc3: "AP101",
      status: "approved",
    },
    {
      id: 3,
      channelLink: "http://www.arafat.com",
      topicLink: "http://www.arafat.com",
      upc1: "AP101",
      upc2: "AP101",
      upc3: "AP101",
      status: "rejected",
    },
  ];

  const filteredRows = rows.filter(
    (row) =>
      (row.channelLink.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.upc2.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.topicLink.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (statusFilter === "" || row.status === statusFilter)
  );

  return (
    <>
      <Paper sx={{ mt: 3 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Channel Link</TableCell>
                <TableCell>Topic Link</TableCell>
                <TableCell>UPC1</TableCell>
                <TableCell>UPC2</TableCell>
                <TableCell>UPC3</TableCell>
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
                    <TableCell>{row.channelLink}</TableCell>
                    <TableCell>{row.topicLink}</TableCell>
                    <TableCell>{row.upc1}</TableCell>
                    <TableCell>{row.upc2}</TableCell>
                    <TableCell>{row.upc3}</TableCell>
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

export default ArtistChannelRequestTable;