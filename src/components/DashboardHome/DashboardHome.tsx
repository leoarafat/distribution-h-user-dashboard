/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, Grid } from "@mui/material";
import FinancialCharts from "../Financial/FinancialCharts";
import RevenueComponent from "../Financial/RevenueComponent";
import LastSixApproved from "./LastSixApproved";
import News from "./News";

import CorrectionRequest from "./CorrectionRequest";

const DashboardHome = () => {
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
