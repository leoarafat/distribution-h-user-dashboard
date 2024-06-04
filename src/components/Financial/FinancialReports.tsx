import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import { Pagination } from "@mui/material";
import {
  PictureAsPdf as PdfIcon,
  Description as CsvIcon,
} from "@mui/icons-material";
import jsPDF from "jspdf";
import { CSVLink } from "react-csv";

const FinancialReports = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const financialHistory = [
    { id: 1, date: "2023-01-01", description: "Transaction 1", amount: 100 },
    { id: 2, date: "2023-01-02", description: "Transaction 2", amount: 200 },
    { id: 3, date: "2023-01-03", description: "Transaction 3", amount: 300 },
    { id: 4, date: "2023-01-04", description: "Transaction 4", amount: 400 },
    { id: 5, date: "2023-01-05", description: "Transaction 5", amount: 500 },
    { id: 6, date: "2023-01-06", description: "Transaction 6", amount: 600 },
    { id: 7, date: "2023-01-07", description: "Transaction 7", amount: 700 },
    { id: 8, date: "2023-01-08", description: "Transaction 8", amount: 800 },
    { id: 9, date: "2023-01-09", description: "Transaction 9", amount: 900 },
    { id: 10, date: "2023-01-10", description: "Transaction 10", amount: 1000 },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const downloadPdf = (rowData) => {
    const doc = new jsPDF();
    const formattedData = rowData.map(
      (row) => `${row.date} | ${row.description} | ${row.amount}`
    );
    doc.text("Financial History", 10, 10);
    doc.text(formattedData.join("\n"), 10, 20);
    doc.save("financial_history.pdf");
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Financial Overview
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Paper sx={{ padding: 2 }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Amount ($)</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {financialHistory
                    .slice(
                      (page - 1) * rowsPerPage,
                      (page - 1) * rowsPerPage + rowsPerPage
                    )
                    .map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.description}</TableCell>
                        <TableCell align="right">{row.amount}</TableCell>
                        <TableCell>
                          <IconButton onClick={() => downloadPdf([row])}>
                            <PdfIcon />
                          </IconButton>
                          <CSVLink
                            data={[row]}
                            headers={[
                              { label: "Date", key: "date" },
                              { label: "Description", key: "description" },
                              { label: "Amount ($)", key: "amount" },
                            ]}
                            filename={"transaction_data.csv"}
                          >
                            <IconButton>
                              <CsvIcon />
                            </IconButton>
                          </CSVLink>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
              <Pagination
                count={Math.ceil(financialHistory.length / rowsPerPage)}
                page={page}
                onChange={handleChangePage}
                variant="outlined"
                shape="rounded"
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FinancialReports;
