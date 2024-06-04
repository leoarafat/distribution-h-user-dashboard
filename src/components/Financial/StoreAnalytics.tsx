import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Box, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

// Simulate fetching data from an API
const fetchData = (date) => {
  // Simulate data fetching based on the selected date
  const month = date.month() + 1; // dayjs months are 0-indexed
  const year = date.year();

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
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [dataStore, setDataStore] = useState([]);
  const [dataRegion, setDataRegion] = useState([]);
  const [colorsStore, setColorsStore] = useState([]);
  const [colorsRegion, setColorsRegion] = useState([]);

  const updateData = (date) => {
    const { dataStore, dataRegion } = fetchData(date);
    setDataStore(dataStore);
    setDataRegion(dataRegion);
    setColorsStore(generateColors(dataStore));
    setColorsRegion(generateColors(dataRegion));
  };

  useEffect(() => {
    updateData(selectedDate);
  }, [selectedDate]);

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="center" m={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            views={["year", "month"]}
            label="Select Month"
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(params) => (
              <TextField {...params} helperText={null} />
            )}
          />
        </LocalizationProvider>
      </Box>
      <Box display="flex" justifyContent="space-around">
        <Box width="45%">
          <h2>Revenue by store | {selectedDate.format("YYYY MMM")}</h2>
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
            Revenue by country / region | {selectedDate.format("YYYY MMM")}
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
