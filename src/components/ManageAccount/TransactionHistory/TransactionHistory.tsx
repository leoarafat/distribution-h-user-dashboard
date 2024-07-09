import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  CircularProgress,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TextField,
  IconButton,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import dayjs from "dayjs";
import { transactions } from "@/MockData/MockData";
import PaymentMethodModal from "../PaymentMethodModal/PaymentMethodModal";
import { useGetMyBalanceQuery } from "@/redux/slices/financial/financialApi";

const TransactionHistory = () => {
  const [currentMonthBalance, setCurrentMonthBalance] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const { data: myBalance, isLoading } = useGetMyBalanceQuery({});

  useEffect(() => {
    if (myBalance) {
      setCurrentMonthBalance(myBalance.data?.clientTotalBalance);
    }
  }, [myBalance]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleRequestPayment = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <Box m={3} display="flex" flexDirection="column" alignItems="center">
      <Paper
        sx={{
          padding: 3,
          width: "100vw",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Available Balance
        </Typography>
        <Typography variant="h4" color="primary" gutterBottom>
          {currentMonthBalance !== null
            ? currentMonthBalance.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            : "$0.00"}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Available balance on {dayjs().format("DD MMMM YYYY")}
        </Typography>
        <Divider sx={{ width: "100%", my: 2 }} />
        <Typography variant="h6" gutterBottom>
          Be Musix
        </Typography>

        {currentMonthBalance === null ? (
          <CircularProgress />
        ) : (
          <>
            <Button
              variant="contained"
              color="primary"
              disabled={currentMonthBalance < 50}
              onClick={handleRequestPayment}
              sx={{ mt: 2, width: "50%" }}
            >
              Request Payment
            </Button>
            {currentMonthBalance < 50 && (
              <Typography
                variant="body2"
                color="error"
                sx={{ mt: 2, textAlign: "center" }}
              >
                <span className="font-bold">Payment not available:</span> your
                balance must exceed the contractual threshold of 50.00 $.
              </Typography>
            )}
          </>
        )}
        <Divider sx={{ width: "100%", my: 2 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            mb: 2,
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search…"
            size="small"
            value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <Search />
                </IconButton>
              ),
            }}
          />
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Operations</TableCell>
                <TableCell>Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTransactions
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((transaction, index) => (
                  <TableRow key={index}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.type}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.operations}</TableCell>
                    <TableCell>{transaction.balance}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredTransactions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <PaymentMethodModal open={modalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default TransactionHistory;
