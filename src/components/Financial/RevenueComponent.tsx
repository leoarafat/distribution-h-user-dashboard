import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import dayjs from "dayjs";

const RevenueComponent = () => {
  // Mock data for revenue
  const allTimeRevenue = 14619; // Total revenue (static for this example)
  const earnedSince = dayjs("2022-03-01"); // Earned since date (static for this example)
  const [currentMonthBalance, setCurrentMonthBalance] = useState(null); // Set to null for loading state

  useEffect(() => {
    // Simulate fetching current month balance
    setTimeout(() => {
      const mockBalance = Math.floor(Math.random() * 200); // Mock balance between 0 and 200
      setCurrentMonthBalance(mockBalance);
    }, 2000); // Simulate delay
  }, []);

  return (
    <Box
      m={3}
      display="flex"
      justifyContent="space-around"
      alignItems="stretch"
      width="100%"
    >
      <Paper
        sx={{
          padding: 2,
          width: "45%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Revenue of All Time
        </Typography>
        <Typography variant="h3" color="primary" gutterBottom>
          {allTimeRevenue.toLocaleString("en-US", {
            style: "currency",
            currency: "EUR",
          })}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Earned since <b>{earnedSince.format("MMMM, YYYY")}</b>
        </Typography>
      </Paper>
      <Paper
        sx={{
          padding: 2,
          width: "45%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Current Month Balance
        </Typography>
        {currentMonthBalance === null ? (
          <CircularProgress />
        ) : (
          <>
            <Typography
              variant="h4"
              color={currentMonthBalance >= 100 ? "success.main" : "error.main"}
              gutterBottom
            >
              {currentMonthBalance.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              disabled={currentMonthBalance < 100}
              onClick={() => alert("Payment Requested")}
              sx={{ mt: 2, width: "60%" }}
            >
              Request Payment
            </Button>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default RevenueComponent;
