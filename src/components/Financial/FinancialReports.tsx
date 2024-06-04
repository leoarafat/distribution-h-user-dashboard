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
  TextField,
} from "@mui/material";
import { Pagination } from "@mui/material";
import {
  PictureAsPdf as PdfIcon,
  Description as CsvIcon,
  AttachMoney as DollarIcon,
  ArrowDownward as ArrowDownwardIcon,
  ArrowUpward as ArrowUpwardIcon,
} from "@mui/icons-material";
import { CSVLink } from "react-csv";

const FinancialReports = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortedColumn, setSortedColumn] = useState("date");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setPage(0);
  };

  const handleSort = (column) => {
    if (sortedColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortedColumn(column);
      setSortDirection("asc");
    }
  };

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
    { id: 11, date: "2023-01-10", description: "Transaction 10", amount: 1000 },
    { id: 12, date: "2023-01-10", description: "Transaction 10", amount: 1000 },
    { id: 13, date: "2023-01-10", description: "Transaction 10", amount: 1000 },
  ];

  const filteredHistory = financialHistory.filter((row) =>
    Object.values(row).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const sortedHistory = filteredHistory.sort((a, b) => {
    const aValue = a[sortedColumn];
    const bValue = b[sortedColumn];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
  });

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Financial Overview
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Paper sx={{ padding: 2 }}>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={handleSearch}
            />
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell onClick={() => handleSort("date")}>
                      Date{" "}
                      {sortedColumn === "date" &&
                        (sortDirection === "asc" ? (
                          <ArrowDownwardIcon />
                        ) : (
                          <ArrowUpwardIcon />
                        ))}
                    </TableCell>
                    <TableCell onClick={() => handleSort("description")}>
                      Description{" "}
                      {sortedColumn === "description" &&
                        (sortDirection === "asc" ? (
                          <ArrowDownwardIcon />
                        ) : (
                          <ArrowUpwardIcon />
                        ))}
                    </TableCell>
                    <TableCell
                      align="right"
                      onClick={() => handleSort("amount")}
                    >
                      Amount ($){" "}
                      {sortedColumn === "amount" &&
                        (sortDirection === "asc" ? (
                          <ArrowDownwardIcon />
                        ) : (
                          <ArrowUpwardIcon />
                        ))}
                    </TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sortedHistory
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.description}</TableCell>
                        <TableCell align="right">
                          <DollarIcon /> {row.amount}
                        </TableCell>
                        <TableCell>
                          <IconButton onClick={() => {}}>
                            <PdfIcon />
                          </IconButton>
                          <CSVLink
                            data={[row]}
                            headers={[
                              { label: "Date", key: "date" },
                              { label: "Description", key: "description" },
                              { label: "Amount ($)", key: "amount" },
                            ]}
                            filename={`transaction_${row.id}.csv`}
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
                count={Math.ceil(sortedHistory.length / rowsPerPage)}
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
