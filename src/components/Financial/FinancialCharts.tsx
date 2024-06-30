// import React, { useEffect, useState } from "react";
// import {
//   Paper,
//   Typography,
//   Box,
//   TextField,
//   CircularProgress,
//   MenuItem,
//   FormControl,
//   Select,
//   InputLabel,
// } from "@mui/material";
// import {
//   ComposedChart,
//   Line,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import dayjs from "dayjs";

// const generateMonthlyData = (year) => {
//   const months = [];
//   for (let i = 1; i <= 12; i++) {
//     let month = i < 10 ? "0" + i : i.toString();
//     let date = `${year}-${month}`;
//     let amount = Math.floor(Math.random() * 5000) + 1000;
//     6000;
//     months.push({ date, amount });
//   }
//   return months;
// };

// const generateDailyData = (year, month) => {
//   const daysInMonth = dayjs(`${year}-${month}`).daysInMonth();
//   const days = [];
//   for (let i = 1; i <= daysInMonth; i++) {
//     let day = i < 10 ? "0" + i : i.toString();
//     let date = `${year}-${month}-${day}`;
//     let amount = Math.floor(Math.random() * 500) + 100;
//     days.push({ date, amount });
//   }
//   return days;
// };

// const FinancialCharts = () => {
//   const [selectedDate, setSelectedDate] = useState(dayjs());
//   const [timeRange, setTimeRange] = useState("year");
//   const [financialData, setFinancialData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const updateData = (date, range) => {
//     setLoading(true);
//     const year = date.year();
//     let data = [];
//     if (range === "year") {
//       data = generateMonthlyData(year);
//     } else if (range === "month") {
//       const month = date.month() + 1;
//       data = generateDailyData(year, month < 10 ? `0${month}` : month);
//     }
//     setFinancialData(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     updateData(selectedDate, timeRange);
//   }, [selectedDate, timeRange]);

//   const handleDateChange = (newValue) => {
//     setSelectedDate(newValue);
//   };

//   const handleTimeRangeChange = (event) => {
//     setTimeRange(event.target.value);
//   };

//   if (loading) {
//     return (
//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         minHeight="100vh"
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Box m={3}>
//       <Paper sx={{ padding: 3 }}>
//         <Box
//           display="flex"
//           justifyContent="space-between"
//           alignItems="center"
//           mb={2}
//         >
//           <Typography variant="h5" gutterBottom>
//             Financial Analytics
//           </Typography>
//           <Box display="flex" alignItems="center">
//             <FormControl sx={{ mr: 2 }}>
//               <InputLabel>Select Filter</InputLabel>
//               <Select
//                 value={timeRange}
//                 onChange={handleTimeRangeChange}
//                 label="Time Range"
//               >
//                 <MenuItem value="year">Year</MenuItem>
//                 <MenuItem value="month">Month</MenuItem>
//               </Select>
//             </FormControl>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <DatePicker
//                 views={timeRange === "year" ? ["year"] : ["year", "month"]}
//                 label={timeRange === "year" ? "Select Year" : "Select Month"}
//                 value={selectedDate}
//                 onChange={handleDateChange}
//                 renderInput={(params) => <TextField {...params} />}
//               />
//             </LocalizationProvider>
//           </Box>
//         </Box>
//         <ResponsiveContainer width="100%" height={400}>
//           <ComposedChart
//             data={financialData}
//             margin={{
//               top: 20,
//               right: 20,
//               bottom: 20,
//               left: 20,
//             }}
//           >
//             <CartesianGrid stroke="#f5f5f5" />
//             <XAxis dataKey={timeRange === "week" ? "week" : "date"} />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Area
//               type="monotone"
//               dataKey="amount"
//               fill="#8884d8"
//               stroke="#8884d8"
//             />
//             <Line type="monotone" dataKey="amount" stroke="#ff7300" />
//           </ComposedChart>
//         </ResponsiveContainer>
//       </Paper>
//     </Box>
//   );
// };

// export default FinancialCharts;
import React, { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  Box,
  CircularProgress,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
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
import dayjs from "dayjs";

const generateMonthlyData = (year) => {
  const months = [];
  for (let i = 1; i <= 12; i++) {
    let month = i < 10 ? "0" + i : i.toString();
    let date = `${year}-${month}`;
    let amount = Math.floor(Math.random() * 5000) + 1000;
    6000;
    months.push({ date, amount });
  }
  return months;
};

const generateDailyData = (year, month) => {
  const daysInMonth = dayjs(`${year}-${month}`).daysInMonth();
  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    let day = i < 10 ? "0" + i : i.toString();
    let date = `${year}-${month}-${day}`;
    let amount = Math.floor(Math.random() * 500) + 100;
    days.push({ date, amount });
  }
  return days;
};

const FinancialCharts = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [timeRange, setTimeRange] = useState("year");
  const [financialData, setFinancialData] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateData = (month, year, range) => {
    setLoading(true);
    let data = [];
    if (range === "year") {
      data = generateMonthlyData(year);
    } else if (range === "month") {
      const monthStr = month < 10 ? `0${month}` : month.toString();
      data = generateDailyData(year, monthStr);
    }
    setFinancialData(data);
    setLoading(false);
  };

  useEffect(() => {
    updateData(selectedMonth, selectedYear, timeRange);
  }, [selectedMonth, selectedYear, timeRange]);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    setTimeRange("month");
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setTimeRange("year");
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box m={3}>
      <Paper sx={{ padding: 3 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h5" gutterBottom>
            Financial Analytics
          </Typography>
          <Box display="flex" alignItems="center">
            <FormControl sx={{ mr: 2 }}>
              <Select value={selectedMonth} onChange={handleMonthChange}>
                <MenuItem value={1}>January</MenuItem>
                <MenuItem value={2}>February</MenuItem>
                <MenuItem value={3}>March</MenuItem>
                <MenuItem value={4}>April</MenuItem>
                <MenuItem value={5}>May</MenuItem>
                <MenuItem value={6}>June</MenuItem>
                <MenuItem value={7}>July</MenuItem>
                <MenuItem value={8}>August</MenuItem>
                <MenuItem value={9}>September</MenuItem>
                <MenuItem value={10}>October</MenuItem>
                <MenuItem value={11}>November</MenuItem>
                <MenuItem value={12}>December</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <Select value={selectedYear} onChange={handleYearChange}>
                <MenuItem value={2023}>2023</MenuItem>
                <MenuItem value={2024}>2024</MenuItem>
                {/* Add more years as needed */}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <ResponsiveContainer width="100%" height={400}>
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
    </Box>
  );
};

export default FinancialCharts;
