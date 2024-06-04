/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Box,
  Typography,
  Paper,
  Grid,
  CircularProgress,
  IconButton,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import FinancialCharts from "../Financial/FinancialCharts";

const DashboardHome = () => {
  return (
    <Box sx={{ padding: 3 }}>
      {/* Analytics Visual */}
      <FinancialCharts />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {/* Last 6 Approved Tracks */}
          <Paper sx={{ padding: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 2,
              }}
            >
              <Typography variant="h6">Last 6 Approved Tracks</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 2,
                position: "relative",
              }}
            >
              <CircularProgress
                variant="determinate"
                value={100}
                size={60}
                sx={{ color: "green" }}
              />
              <Typography variant="h4" sx={{ position: "absolute" }}>
                06
              </Typography>
            </Box>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Album Name</TableCell>
                    <TableCell>Label Name</TableCell>
                    <TableCell>Store</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Array(6)
                    //@ts-ignore
                    .fill()
                    .map((_, index) => (
                      <TableRow key={index}>
                        <TableCell>Jan 15, 2024</TableCell>
                        <TableCell>Album Name</TableCell>
                        <TableCell>Label Name</TableCell>
                        <TableCell>Store</TableCell>
                        <TableCell align="right">
                          <IconButton size="small">
                            <Edit fontSize="small" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Correction Requested Songs */}
          <Paper sx={{ padding: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 2,
              }}
            >
              <Typography variant="h6">Correction Requested Songs</Typography>
            </Box>

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Album Name</TableCell>
                    <TableCell>Label Name</TableCell>
                    <TableCell>Store</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Array(7)
                    //@ts-ignore
                    .fill()
                    .map((_, index) => (
                      <TableRow key={index}>
                        <TableCell>Jan 15, 2024</TableCell>
                        <TableCell>Album Name</TableCell>
                        <TableCell>Label Name</TableCell>
                        <TableCell>Store</TableCell>
                        <TableCell align="right">
                          <IconButton size="small">
                            <Edit fontSize="small" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ marginTop: 3 }}>
        <Grid item xs={12} md={6}>
          {/* News */}
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">News</Typography>
            {Array(2)
              //@ts-ignore
              .fill()
              .map((_, index) => (
                <Box key={index} sx={{ marginBottom: 2 }}>
                  <Typography variant="body2" color="textSecondary">
                    Jan 15, 2024
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Divider sx={{ marginY: 1 }} />
                  <Typography variant="body2" align="right">
                    Regards, Be Musix
                  </Typography>
                </Box>
              ))}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          {/* Balance */}
          <Paper sx={{ padding: 2, textAlign: "center" }}>
            <Typography variant="h6">Balance</Typography>
            <Box sx={{ marginY: 2 }}>
              <CircularProgress
                variant="determinate"
                value={100}
                size={100}
                sx={{ color: "green" }}
              />
              <Typography variant="h4" sx={{ position: "relative", top: -75 }}>
                ₿100
              </Typography>
            </Box>
            <Button variant="contained" color="primary">
              My Balance
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardHome;
