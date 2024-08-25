import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Box, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { years } from "@/utils/languages";
import { imageURL } from "@/redux/api/baseApi";

const StoreAnalytics = () => {
  // const [selectedMonths, setSelectedMonth] = useState(
  //   new Date().getMonth() + 1
  // );
  // const selectedMonth = selectedMonths - 1 || 12;
  // const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  // const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const currentMonth = new Date().getMonth();
    return currentMonth === 0 ? 12 : currentMonth;
  });
  const [selectedYear, setSelectedYear] = useState(() => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    return currentMonth === 0 ? currentYear - 1 : currentYear;
  });
  const [dataStore, setDataStore] = useState([]);
  const [countryDataStore, setcountryDataStore] = useState([]);
  const [colorsStore, setColorsStore] = useState([]);
  const [colorsRegion, setColorsRegion] = useState([]);

  const fetchData = async (month, year) => {
    try {
      const response = await axios.get(
        `${imageURL}/statics/financial-by-store`,
        {
          params: {
            month,
            year,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const { data } = response.data;

      setDataStore(data);

      const storeColors = generateColors(data);
      setColorsStore(storeColors);
      setColorsRegion(storeColors);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchCountryData = async (month, year) => {
    try {
      const response = await axios.get(
        `${imageURL}/statics/financial-analytics-country`,
        {
          params: {
            month,
            year,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const { data } = response.data;

      setcountryDataStore(data);

      const storeColors = generateColors(data);
      setColorsStore(storeColors);
      setColorsRegion(storeColors);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(selectedMonth, selectedYear);
    fetchCountryData(selectedMonth, selectedYear);
  }, [selectedMonth, selectedYear]);

  const generateColors = (data) => {
    const colors = [];
    for (let i = 0; i < data.length; i++) {
      const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      colors.push(color);
    }
    return colors;
  };

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
            {[...Array(12).keys()].map((month) => (
              <MenuItem key={month + 1} value={month + 1}>
                {new Date(0, month).toLocaleString("en", { month: "long" })}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Select Year</InputLabel>
          <Select
            value={selectedYear}
            onChange={handleYearChange}
            label="Select Year"
          >
            {years?.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
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
          <h2>Revenue by Country | {`${selectedYear}-${selectedMonth}`}</h2>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={countryDataStore}
                dataKey="value"
                nameKey="name"
                outerRadius={150}
                fill="#8884d8"
              >
                {countryDataStore.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colorsRegion[index]} />
                ))}
              </Pie>
              <Tooltip />
              {/* <Legend /> */}
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default StoreAnalytics;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import { Box, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
// import { years } from "@/utils/languages";
// import { imageURL } from "@/redux/api/baseApi";

// const StoreAnalytics = () => {
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
//   const [dataStore, setDataStore] = useState([]);
//   const [countryDataStore, setcountryDataStore] = useState([]);
//   const [colorsStore, setColorsStore] = useState([]);
//   const [colorsRegion, setColorsRegion] = useState([]);

//   const fetchData = async (month, year) => {
//     try {
//       const response = await axios.get(
//         `${imageURL}/statics/financial-by-store`,
//         {
//           params: {
//             month,
//             year,
//           },
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//           },
//         }
//       );
//       const { data } = response.data;

//       setDataStore(data);

//       const storeColors = generateColors(data);
//       setColorsStore(storeColors);
//       setColorsRegion(storeColors);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//   const fetchCountryData = async (month, year) => {
//     try {
//       const response = await axios.get(
//         `${imageURL}/statics/financial-analytics-country`,
//         {
//           params: {
//             month,
//             year,
//           },
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//           },
//         }
//       );
//       const { data } = response.data;

//       setcountryDataStore(data);

//       const storeColors = generateColors(data);
//       setColorsStore(storeColors);
//       setColorsRegion(storeColors);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData(selectedMonth, selectedYear);
//     fetchCountryData(selectedMonth, selectedYear);
//   }, [selectedMonth, selectedYear]);

//   const generateColors = (data) => {
//     const colors = [];
//     for (let i = 0; i < data.length; i++) {
//       const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//       colors.push(color);
//     }
//     return colors;
//   };

//   const handleMonthChange = (event) => {
//     setSelectedMonth(event.target.value);
//   };

//   const handleYearChange = (event) => {
//     setSelectedYear(event.target.value);
//   };

//   return (
//     <Box>
//       <Box display="flex" justifyContent="center" m={2}>
//         <FormControl sx={{ mr: 2 }}>
//           <InputLabel>Select Month</InputLabel>
//           <Select
//             value={selectedMonth}
//             onChange={handleMonthChange}
//             label="Select Month"
//           >
//             {[...Array(12).keys()].map((month) => (
//               <MenuItem key={month + 1} value={month + 1}>
//                 {new Date(0, month).toLocaleString("en", { month: "long" })}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <FormControl>
//           <InputLabel>Select Year</InputLabel>
//           <Select
//             value={selectedYear}
//             onChange={handleYearChange}
//             label="Select Year"
//           >
//             {years?.map((year) => (
//               <MenuItem key={year} value={year}>
//                 {year}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </Box>
//       <Box display="flex" justifyContent="space-around">
//         <Box width="45%">
//           <h2>Revenue by store | {`${selectedYear}-${selectedMonth}`}</h2>
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
//           <h2>Revenue by Country | {`${selectedYear}-${selectedMonth}`}</h2>
//           <ResponsiveContainer width="100%" height={400}>
//             <PieChart>
//               <Pie
//                 data={countryDataStore}
//                 dataKey="value"
//                 nameKey="name"
//                 outerRadius={150}
//                 fill="#8884d8"
//               >
//                 {countryDataStore.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={colorsRegion[index]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               {/* <Legend /> */}
//             </PieChart>
//           </ResponsiveContainer>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default StoreAnalytics;
