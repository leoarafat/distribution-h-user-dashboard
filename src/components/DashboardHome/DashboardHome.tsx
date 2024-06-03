// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Paper,
//   Grid,
//   CircularProgress,
//   IconButton,
//   Button,
//   Select,
//   MenuItem,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Divider,
// } from "@mui/material";
// import { Edit } from "@mui/icons-material";
// import Stack from "@mui/material/Stack";
// import { HighlightItemData } from "@mui/x-charts/context";
// import { BarChart as XBarChart, BarChartProps } from "@mui/x-charts/BarChart";
// import { PieChart, PieChartProps } from "@mui/x-charts/PieChart";
// import {
//   ResponsiveContainer,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   Bar,
//   ComposedChart,
//   BarChart,
// } from "recharts";

// const data = {
//   weekly: [
//     { name: "Spotify", value: 50 },
//     { name: "Tiktok", value: 45 },
//     { name: "Snap", value: 40 },
//     { name: "Facebook SRP", value: 35 },
//     { name: "Boomplay", value: 30 },
//     { name: "Youtube", value: 25 },
//     { name: "Saavn", value: 20 },
//   ],
//   monthly: [
//     { name: "Spotify", value: 150 },
//     { name: "Tiktok", value: 145 },
//     { name: "Snap", value: 140 },
//     { name: "Facebook SRP", value: 135 },
//     { name: "Boomplay", value: 130 },
//     { name: "Youtube", value: 125 },
//     { name: "Saavn", value: 120 },
//   ],
//   yearly: [
//     { name: "Spotify", value: 1150 },
//     { name: "Tiktok", value: 1145 },
//     { name: "Snap", value: 1140 },
//     { name: "Facebook SRP", value: 1135 },
//     { name: "Boomplay", value: 1130 },
//     { name: "Youtube", value: 1125 },
//     { name: "Saavn", value: 1120 },
//   ],
// };

// const viewsRevenueData = {
//   weekly: [
//     { name: "Week 1", views: 400, revenue: 2400 },
//     { name: "Week 2", views: 300, revenue: 2210 },
//     { name: "Week 3", views: 200, revenue: 2290 },
//     { name: "Week 4", views: 278, revenue: 2000 },
//   ],
//   monthly: [
//     { name: "Month 1", views: 1200, revenue: 7000 },
//     { name: "Month 2", views: 1100, revenue: 6200 },
//     { name: "Month 3", views: 900, revenue: 5000 },
//     { name: "Month 4", views: 980, revenue: 4500 },
//   ],
//   yearly: [
//     { name: "Year 1", views: 5400, revenue: 34000 },
//     { name: "Year 2", views: 4800, revenue: 31000 },
//     { name: "Year 3", views: 4300, revenue: 28000 },
//     { name: "Year 4", views: 4000, revenue: 25000 },
//   ],
// };

// const DashboardHome = () => {
//   const [filter, setFilter] = useState("weekly");
//   const [highlightedItem, setHighlightedItem] =
//     useState<HighlightItemData | null>(null);

//   const handleFilterChange = (event) => {
//     setFilter(event.target.value);
//   };

//   const currentData = data[filter].map((d) => d.value);
//   const currentLabels = data[filter].map((d) => d.name);

//   const barChartsProps: BarChartProps = {
//     series: [
//       {
//         data: currentData,
//         id: "sync",
//         highlightScope: { highlighted: "item", faded: "global" },
//       },
//     ],
//     xAxis: [{ scaleType: "band", data: currentLabels }],
//     height: 300,
//     slotProps: {
//       legend: {
//         hidden: true,
//       },
//     },
//   };

//   const pieChartProps: PieChartProps = {
//     series: [
//       {
//         id: "sync",
//         data: data[filter].map((d) => ({
//           value: d.value,
//           label: d.name,
//           id: d.name,
//         })),
//         highlightScope: { highlighted: "item", faded: "global" },
//       },
//     ],
//     height: 300,
//     slotProps: {
//       legend: {
//         hidden: true,
//       },
//     },
//   };

//   return (
//     <Box sx={{ padding: 3 }}>
//       {/* Analytics Visual */}
//       <Paper sx={{ padding: 2, marginBottom: 3 }}>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <Typography variant="h6">Analytics Visual</Typography>
//           <Select value={filter} onChange={handleFilterChange}>
//             <MenuItem value="weekly">Weekly</MenuItem>
//             <MenuItem value="monthly">Monthly</MenuItem>
//             <MenuItem value="yearly">Yearly</MenuItem>
//           </Select>
//         </Box>
//         <Typography variant="body2">
//           Total Improvements | Last 7 days
//         </Typography>
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <Typography variant="h4">Total 0.35</Typography>
//         </Box>
//         <Stack
//           direction={{ xs: "column", xl: "row" }}
//           spacing={1}
//           sx={{ width: "100%" }}
//         >
//           <XBarChart
//             {...barChartsProps}
//             highlightedItem={highlightedItem}
//             onHighlightChange={setHighlightedItem}
//           />
//           <PieChart
//             {...pieChartProps}
//             highlightedItem={highlightedItem}
//             onHighlightChange={setHighlightedItem}
//           />
//         </Stack>
//       </Paper>

//       {/* Total Views and Revenue */}
//       <Paper sx={{ padding: 2, marginBottom: 3 }}>
//         <Typography variant="h6">Total Views and Revenue</Typography>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart
//             data={viewsRevenueData[filter]}
//             margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="views" fill="#8884d8" />
//             <Bar dataKey="revenue" fill="#82ca9d" />
//           </BarChart>
//         </ResponsiveContainer>
//       </Paper>

//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           {/* Last 6 Approved Tracks */}
//           <Paper sx={{ padding: 2 }}>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 marginBottom: 2,
//               }}
//             >
//               <Typography variant="h6">Last 6 Approved Tracks</Typography>
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 marginBottom: 2,
//                 position: "relative",
//               }}
//             >
//               <CircularProgress
//                 variant="determinate"
//                 value={100}
//                 size={60}
//                 sx={{ color: "green" }}
//               />
//               <Typography variant="h4" sx={{ position: "absolute" }}>
//                 06
//               </Typography>
//             </Box>
//             <TableContainer component={Paper}>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Date</TableCell>
//                     <TableCell>Album Name</TableCell>
//                     <TableCell>Label Name</TableCell>
//                     <TableCell>Store</TableCell>
//                     <TableCell align="right">Actions</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {Array(6)
//                     .fill()
//                     .map((_, index) => (
//                       <TableRow key={index}>
//                         <TableCell>Jan 15, 2024</TableCell>
//                         <TableCell>Album Name</TableCell>
//                         <TableCell>Label Name</TableCell>
//                         <TableCell>Store</TableCell>
//                         <TableCell align="right">
//                           <IconButton size="small">
//                             <Edit fontSize="small" />
//                           </IconButton>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           {/* Correction Requested Songs */}
//           <Paper sx={{ padding: 2 }}>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 marginBottom: 2,
//               }}
//             >
//               <Typography variant="h6">Correction Requested Songs</Typography>
//             </Box>

//             <TableContainer component={Paper}>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Date</TableCell>
//                     <TableCell>Album Name</TableCell>
//                     <TableCell>Label Name</TableCell>
//                     <TableCell>Store</TableCell>
//                     <TableCell align="right">Actions</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {Array(7)
//                     .fill()
//                     .map((_, index) => (
//                       <TableRow key={index}>
//                         <TableCell>Jan 15, 2024</TableCell>
//                         <TableCell>Album Name</TableCell>
//                         <TableCell>Label Name</TableCell>
//                         <TableCell>Store</TableCell>
//                         <TableCell align="right">
//                           <IconButton size="small">
//                             <Edit fontSize="small" />
//                           </IconButton>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Paper>
//         </Grid>
//       </Grid>

//       <Grid container spacing={3} sx={{ marginTop: 3 }}>
//         <Grid item xs={12} md={6}>
//           {/* News */}
//           <Paper sx={{ padding: 2 }}>
//             <Typography variant="h6">News</Typography>
//             {Array(2)
//               .fill()
//               .map((_, index) => (
//                 <Box key={index} sx={{ marginBottom: 2 }}>
//                   <Typography variant="body2" color="textSecondary">
//                     Jan 15, 2024
//                   </Typography>
//                   <Typography variant="body2">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                     do eiusmod tempor incididunt ut labore et dolore magna
//                     aliqua.
//                   </Typography>
//                   <Divider sx={{ marginY: 1 }} />
//                   <Typography variant="body2" align="right">
//                     Regards, Be Musix
//                   </Typography>
//                 </Box>
//               ))}
//           </Paper>
//         </Grid>

//         <Grid item xs={12} md={6}>
//           {/* Balance */}
//           <Paper sx={{ padding: 2, textAlign: "center" }}>
//             <Typography variant="h6">Balance</Typography>
//             <Box sx={{ marginY: 2 }}>
//               <CircularProgress
//                 variant="determinate"
//                 value={100}
//                 size={100}
//                 sx={{ color: "green" }}
//               />
//               <Typography variant="h4" sx={{ position: "relative", top: -75 }}>
//                 ₿100
//               </Typography>
//             </Box>
//             <Button variant="contained" color="primary">
//               My Balance
//             </Button>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default DashboardHome;
import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  CircularProgress,
  IconButton,
  Button,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
} from "@mui/material";
import { Edit, PictureAsPdf, Description } from "@mui/icons-material"; // Icons for PDF and CSV
import Stack from "@mui/material/Stack";
import { HighlightItemData } from "@mui/x-charts/context";
import { BarChart as XBarChart, BarChartProps } from "@mui/x-charts/BarChart";
import { PieChart, PieChartProps } from "@mui/x-charts/PieChart";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ComposedChart,
  BarChart,
} from "recharts";

const data = {
  weekly: [
    { name: "Spotify", value: 50 },
    { name: "Tiktok", value: 45 },
    { name: "Snap", value: 40 },
    { name: "Facebook SRP", value: 35 },
    { name: "Boomplay", value: 30 },
    { name: "Youtube", value: 25 },
    { name: "Saavn", value: 20 },
  ],
  monthly: [
    { name: "Spotify", value: 150 },
    { name: "Tiktok", value: 145 },
    { name: "Snap", value: 140 },
    { name: "Facebook SRP", value: 135 },
    { name: "Boomplay", value: 130 },
    { name: "Youtube", value: 125 },
    { name: "Saavn", value: 120 },
  ],
  yearly: [
    { name: "Spotify", value: 1150 },
    { name: "Tiktok", value: 1145 },
    { name: "Snap", value: 1140 },
    { name: "Facebook SRP", value: 1135 },
    { name: "Boomplay", value: 1130 },
    { name: "Youtube", value: 1125 },
    { name: "Saavn", value: 1120 },
  ],
};

const viewsRevenueData = {
  weekly: [
    { name: "Week 1", views: 400, revenue: 2400 },
    { name: "Week 2", views: 300, revenue: 2210 },
    { name: "Week 3", views: 200, revenue: 2290 },
    { name: "Week 4", views: 278, revenue: 2000 },
  ],
  monthly: [
    { name: "Month 1", views: 1200, revenue: 7000 },
    { name: "Month 2", views: 1100, revenue: 6200 },
    { name: "Month 3", views: 900, revenue: 5000 },
    { name: "Month 4", views: 980, revenue: 4500 },
  ],
  yearly: [
    { name: "Year 1", views: 5400, revenue: 34000 },
    { name: "Year 2", views: 4800, revenue: 31000 },
    { name: "Year 3", views: 4300, revenue: 28000 },
    { name: "Year 4", views: 4000, revenue: 25000 },
  ],
};

const DashboardHome = () => {
  const [filter, setFilter] = useState("weekly");
  const [highlightedItem, setHighlightedItem] =
    useState<HighlightItemData | null>(null);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handlePDFDownload = () => {
    // Logic for downloading PDF
    console.log("PDF Download triggered.");
  };

  const handleCSVDownload = () => {
    // Logic for downloading CSV
    console.log("CSV Download triggered.");
  };

  const currentData = data[filter].map((d) => d.value);
  const currentLabels = data[filter].map((d) => d.name);

  const barChartsProps: BarChartProps = {
    series: [
      {
        data: currentData,
        id: "sync",
        highlightScope: { highlighted: "item", faded: "global" },
      },
    ],
    xAxis: [{ scaleType: "band", data: currentLabels }],
    height: 300,
    slotProps: {
      legend: {
        hidden: true,
      },
    },
  };

  const pieChartProps: PieChartProps = {
    series: [
      {
        id: "sync",
        data: data[filter].map((d) => ({
          value: d.value,
          label: d.name,
          id: d.name,
        })),
        highlightScope: { highlighted: "item", faded: "global" },
      },
    ],
    height: 300,
    slotProps: {
      legend: {
        hidden: true,
      },
    },
  };

  return (
    <Box sx={{ padding: 3 }}>
      {/* Analytics Visual */}
      <Paper sx={{ padding: 2, marginBottom: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Analytics Visual</Typography>
          <Stack direction="row" spacing={1}>
            <Select value={filter} onChange={handleFilterChange}>
              <MenuItem value="weekly">Weekly</MenuItem>
              <MenuItem value="monthly">Monthly</MenuItem>
              <MenuItem value="yearly">Yearly</MenuItem>
            </Select>
            {/* New Buttons for Downloading PDF and CSV */}
            <IconButton onClick={handlePDFDownload}>
              <PictureAsPdf />
            </IconButton>
            <IconButton onClick={handleCSVDownload}>
              <Description />
            </IconButton>
          </Stack>
        </Box>
        <Typography variant="body2">
          Total Improvements | Last 7 days
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4">Total 0.35</Typography>
        </Box>
        <Stack
          direction={{ xs: "column", xl: "row" }}
          spacing={1}
          sx={{ width: "100%" }}
        >
          <XBarChart
            {...barChartsProps}
            highlightedItem={highlightedItem}
            onHighlightChange={setHighlightedItem}
          />
          <PieChart
            {...pieChartProps}
            highlightedItem={highlightedItem}
            onHighlightChange={setHighlightedItem}
          />
        </Stack>
      </Paper>

      {/* Total Views and Revenue */}
      <Paper sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h6">Total Views and Revenue</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={viewsRevenueData[filter]}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="views" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>

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
