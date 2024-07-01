/* eslint-disable @typescript-eslint/ban-ts-comment */
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
import { useGetFacebookClaimRequestQuery } from "@/redux/slices/claims/claimsApi";

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
  const { data: queryData } = useGetFacebookClaimRequestQuery({});
  //@ts-ignore
  const rows = queryData?.data?.data;

  const filteredRows = rows?.filter(
    (row: any) =>
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
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row._id?.slice(5, 9)}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.labelName}</TableCell>
                    <TableCell>{row.upc}</TableCell>
                    <TableCell>{row.url?.slice(0, 20)}</TableCell>
                    <TableCell>{row.approvedStatus}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredRows?.length}
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
