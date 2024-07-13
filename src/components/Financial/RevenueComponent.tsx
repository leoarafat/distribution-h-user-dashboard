import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import dayjs from "dayjs";
import PaymentMethodModal from "../ManageAccount/PaymentMethodModal/PaymentMethodModal";
import {
  useGetMyAllTimeBalanceQuery,
  useGetMyBalanceQuery,
} from "@/redux/slices/financial/financialApi";

const RevenueComponent = () => {
  const earnedSince = dayjs("2022-03-01");
  const [modalOpen, setModalOpen] = useState(false);
  const { data: myBalance, isLoading } = useGetMyBalanceQuery({});
  const { data: myAllTimeBalance } = useGetMyAllTimeBalanceQuery({});

  useEffect(() => {
    if (myBalance) {
      setCurrentMonthBalance(myBalance.data?.clientTotalBalance);
    }
  }, [myBalance]);

  const handleRequestPayment = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const [currentMonthBalance, setCurrentMonthBalance] = useState(null);

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
          {myAllTimeBalance?.data?.clientTotalBalance?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
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
          Current Balance
        </Typography>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <Typography
              variant="h4"
              color={currentMonthBalance >= 50 ? "success.main" : "error.main"}
              gutterBottom
            >
              {currentMonthBalance === null
                ? "0.00"
                : currentMonthBalance.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              disabled={currentMonthBalance < 50}
              onClick={handleRequestPayment}
              sx={{ mt: 2, width: "60%" }}
            >
              Request Payment
            </Button>
            {currentMonthBalance !== null && currentMonthBalance < 50 && (
              <Typography sx={{ mt: 2, width: "60%" }}>
                <span className="font-bold">Payment not available:</span> Your
                balance must exceed the contractual threshold of 50.00 $.
              </Typography>
            )}
          </>
        )}
      </Paper>
      <PaymentMethodModal open={modalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default RevenueComponent;
