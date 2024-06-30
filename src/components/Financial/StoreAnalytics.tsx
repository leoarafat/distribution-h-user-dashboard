// import React, { useState, useEffect } from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import { Box, TextField } from "@mui/material";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import dayjs from "dayjs";

// // Simulate fetching data from an API
// const fetchData = (date) => {
//   // Simulate data fetching based on the selected date
//   const month = date.month() + 1; // dayjs months are 0-indexed
//   const year = date.year();

//   const dataStore = [
//     { name: "TikTok", value: Math.floor(Math.random() * 1000) },
//     { name: "Youtube", value: Math.floor(Math.random() * 1000) },
//     { name: "Facebook", value: Math.floor(Math.random() * 1000) },
//     { name: "Spotify", value: Math.floor(Math.random() * 1000) },
//     { name: "Wynk Music", value: Math.floor(Math.random() * 1000) },
//     { name: "Others", value: Math.floor(Math.random() * 1000) },
//   ];

//   const dataRegion = [
//     { name: "Bangladesh", value: Math.floor(Math.random() * 1000) },
//     { name: "India", value: Math.floor(Math.random() * 1000) },
//     { name: "Saudi Arabia", value: Math.floor(Math.random() * 1000) },
//     { name: "Malaysia", value: Math.floor(Math.random() * 1000) },
//     { name: "United Arab Emirates", value: Math.floor(Math.random() * 1000) },
//     { name: "Others", value: Math.floor(Math.random() * 1000) },
//   ];

//   return { dataStore, dataRegion };
// };

// const generateColors = (data) => {
//   const colors = [];
//   for (let i = 0; i < data.length; i++) {
//     const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//     colors.push(color);
//   }
//   return colors;
// };

// const StoreAnalytics = () => {
//   const [selectedDate, setSelectedDate] = useState(dayjs());
//   const [dataStore, setDataStore] = useState([]);
//   const [dataRegion, setDataRegion] = useState([]);
//   const [colorsStore, setColorsStore] = useState([]);
//   const [colorsRegion, setColorsRegion] = useState([]);

//   const updateData = (date) => {
//     const { dataStore, dataRegion } = fetchData(date);
//     setDataStore(dataStore);
//     setDataRegion(dataRegion);
//     setColorsStore(generateColors(dataStore));
//     setColorsRegion(generateColors(dataRegion));
//   };

//   useEffect(() => {
//     updateData(selectedDate);
//   }, [selectedDate]);

//   const handleDateChange = (newValue) => {
//     setSelectedDate(newValue);
//   };

//   return (
//     <Box>
//       <Box display="flex" justifyContent="center" m={2}>
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <DatePicker
//             views={["year", "month"]}
//             label="Select Month"
//             value={selectedDate}
//             onChange={handleDateChange}
//             renderInput={(params) => (
//               <TextField {...params} helperText={null} />
//             )}
//           />
//         </LocalizationProvider>
//       </Box>
//       <Box display="flex" justifyContent="space-around">
//         <Box width="45%">
//           <h2>Revenue by store | {selectedDate.format("YYYY MMM")}</h2>
//           <ResponsiveContainer width="100%" height={400}>
//             <PieChart>
//               <Pie
//                 data={dataStore}
//                 dataKey="value"
//                 nameKey="name"
//                 outerRadius={150}
//                 fill="#8884d8"
//               >
//                 {dataStore.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={colorsStore[index]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </Box>
//         <Box width="45%">
//           <h2>
//             Revenue by country / region | {selectedDate.format("YYYY MMM")}
//           </h2>
//           <ResponsiveContainer width="100%" height={400}>
//             <PieChart>
//               <Pie
//                 data={dataRegion}
//                 dataKey="value"
//                 nameKey="name"
//                 outerRadius={150}
//                 fill="#8884d8"
//               >
//                 {dataRegion.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={colorsRegion[index]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default StoreAnalytics;
import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

// Simulate fetching data from an API
const fetchData = (month, year) => {
  // Simulate data fetching based on the selected month and year
  const dataStore = [
    { name: "TikTok", value: Math.floor(Math.random() * 1000) },
    { name: "Youtube", value: Math.floor(Math.random() * 1000) },
    { name: "Facebook", value: Math.floor(Math.random() * 1000) },
    { name: "Spotify", value: Math.floor(Math.random() * 1000) },
    { name: "Wynk Music", value: Math.floor(Math.random() * 1000) },
    { name: "Others", value: Math.floor(Math.random() * 1000) },
  ];

  const dataRegion = [
    { name: "Bangladesh", value: Math.floor(Math.random() * 1000) },
    { name: "India", value: Math.floor(Math.random() * 1000) },
    { name: "Saudi Arabia", value: Math.floor(Math.random() * 1000) },
    { name: "Malaysia", value: Math.floor(Math.random() * 1000) },
    { name: "United Arab Emirates", value: Math.floor(Math.random() * 1000) },
    { name: "Others", value: Math.floor(Math.random() * 1000) },
  ];

  return { dataStore, dataRegion };
};

const generateColors = (data) => {
  const colors = [];
  for (let i = 0; i < data.length; i++) {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    colors.push(color);
  }
  return colors;
};

const StoreAnalytics = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [dataStore, setDataStore] = useState([]);
  const [dataRegion, setDataRegion] = useState([]);
  const [colorsStore, setColorsStore] = useState([]);
  const [colorsRegion, setColorsRegion] = useState([]);

  const updateData = (month, year) => {
    const { dataStore, dataRegion } = fetchData(month, year);
    setDataStore(dataStore);
    setDataRegion(dataRegion);
    setColorsStore(generateColors(dataStore));
    setColorsRegion(generateColors(dataRegion));
  };

  useEffect(() => {
    updateData(selectedMonth, selectedYear);
  }, [selectedMonth, selectedYear]);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="center" m={2}>
        <FormControl sx={{ mr: 2 }}>
          <InputLabel>Select Month</InputLabel>
          <Select
            value={selectedMonth}
            onChange={handleMonthChange}
            label="Select Month"
          >
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
          <InputLabel>Select Year</InputLabel>
          <Select
            value={selectedYear}
            onChange={handleYearChange}
            label="Select Year"
          >
            <MenuItem value={2023}>2023</MenuItem>
            <MenuItem value={2024}>2024</MenuItem>
            {/* Add more years as needed */}
          </Select>
        </FormControl>
      </Box>
      <Box display="flex" justifyContent="space-around">
        <Box width="45%">
          <h2>Revenue by store | {`${selectedYear}-${selectedMonth}`}</h2>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={dataStore}
                dataKey="value"
                nameKey="name"
                outerRadius={150}
                fill="#8884d8"
              >
                {dataStore.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colorsStore[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Box>
        <Box width="45%">
          <h2>
            Revenue by country / region | {`${selectedYear}-${selectedMonth}`}
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={dataRegion}
                dataKey="value"
                nameKey="name"
                outerRadius={150}
                fill="#8884d8"
              >
                {dataRegion.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colorsRegion[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default StoreAnalytics;
