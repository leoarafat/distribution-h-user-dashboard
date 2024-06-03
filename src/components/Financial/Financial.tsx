import React, { useEffect, useState } from "react";
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
  CircularProgress,
} from "@mui/material";
import { Pagination } from "@mui/material";
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Loader from "@/utils/Loader";

const generateMonthlyData = () => {
  const currentYear = new Date().getFullYear();
  const months = [];
  for (let i = 1; i <= 12; i++) {
    let month = i < 10 ? "0" + i : i.toString();
    let date = `${currentYear}-${month}`;
    let amount = Math.floor(Math.random() * 5000) + 1000; // Random amount between 1000 to 6000
    months.push({ date, amount });
  }
  return months;
};

const generateFinancialHistory = (data) => {
  const financialHistory = [];
  data.forEach((month, index) => {
    financialHistory.push({
      id: index + 1,
      date: `${month.date}-01`,
      description: `Expense ${index + 1}`,
      amount: Math.floor(Math.random() * 500) + 100, // Random amount between 100 to 600
    });
  });
  return financialHistory;
};

const Financial = () => {
  const [financialData, setFinancialData] = useState([]);
  const [financialHistory, setFinancialHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const rowsPerPage = 5; // Number of rows per page

  useEffect(() => {
    // Simulating loading for demonstration
    setTimeout(() => {
      const generatedData = generateMonthlyData();
      setFinancialData(generatedData);
      setFinancialHistory(generateFinancialHistory(generatedData));
      setLoading(false);
    }, 2000); // Simulate loading for 2 seconds
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Financial Overview
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Monthly Financial Analytics
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart
                data={financialData}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="amount"
                  fill="#8884d8"
                  stroke="#8884d8"
                />
                <Line type="monotone" dataKey="amount" stroke="#ff7300" />
              </ComposedChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Financial History
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Amount ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(financialHistory
                    ? financialHistory.slice(
                        (page - 1) * rowsPerPage,
                        (page - 1) * rowsPerPage + rowsPerPage
                      )
                    : []
                  ).map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell align="right">{row.amount}</TableCell>
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

export default Financial;
