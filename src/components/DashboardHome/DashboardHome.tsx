/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, Grid } from "@mui/material";
import FinancialCharts from "../Financial/FinancialCharts";
import RevenueComponent from "../Financial/RevenueComponent";
import LastSixApproved from "./LastSixApproved";
import News from "./News";
import CorrectionRequest from "./CorrectionRequest";

const DashboardHome = () => {
  // const token: any | null = useAppSelector(useCurrentAccessToken);
  // const navigate = useNavigate();

  // const isVerified = useAppSelector(useIsVerified);
  // console.log(isVerified);
  // if (!isVerified) {
  //   navigate("/verify");
  // }
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
