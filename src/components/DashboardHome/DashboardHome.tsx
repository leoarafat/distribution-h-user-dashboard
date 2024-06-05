/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, Grid } from "@mui/material";
import FinancialCharts from "../Financial/FinancialCharts";
import RevenueComponent from "../Financial/RevenueComponent";
import LastSixApproved from "./LastSixApproved";
import News from "./News";

import CorrectionRequest from "./CorrectionRequest";
import { useNavigate } from "react-router-dom";
import useVerification from "@/utils/isVerified";
import { useEffect } from "react";

const DashboardHome = () => {
  const navigate = useNavigate();
  const { isVerified } = useVerification();

  useEffect(() => {
    if (!isVerified) {
      navigate("/verify");
    }
  }, [isVerified, navigate]);
  return (
    <Box sx={{ padding: 3 }}>
      <RevenueComponent />
      <FinancialCharts />
      <LastSixApproved />
      <CorrectionRequest />
      <Grid container spacing={3} sx={{ marginTop: 3 }}>
        <News />
      </Grid>
    </Box>
  );
};

export default DashboardHome;
