/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import jsPDF from "jspdf";
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";
import { PictureAsPdf, Description } from "@mui/icons-material"; // Icons for PDF and CSV
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
    { name: "Week 1", stream: 400, revenue: 2400 },
    { name: "Week 2", stream: 300, revenue: 2210 },
    { name: "Week 3", stream: 200, revenue: 2290 },
    { name: "Week 4", stream: 278, revenue: 2000 },
  ],
  monthly: [
    { name: "Month 1", stream: 1200, revenue: 7000 },
    { name: "Month 2", stream: 1100, revenue: 6200 },
    { name: "Month 3", stream: 900, revenue: 5000 },
    { name: "Month 4", stream: 980, revenue: 4500 },
  ],
  yearly: [
    { name: "Year 1", stream: 5400, revenue: 34000 },
    { name: "Year 2", stream: 4800, revenue: 31000 },
    { name: "Year 3", stream: 4300, revenue: 28000 },
    { name: "Year 4", stream: 4000, revenue: 25000 },
  ],
};

const AnalyticsPage = () => {
  const [filter, setFilter] = useState("weekly");
  const [highlightedItem, setHighlightedItem] =
    useState<HighlightItemData | null>(null);

  const handleFilterChange = (event: any) => {
    setFilter(event.target.value);
  };

  const handlePDFDownload = () => {
    //@ts-ignore
    const currentChartData = data[filter];

    const pdf = new jsPDF();
    let y = 20;

    // Header
    pdf.setFontSize(30);
    pdf.setFont("helvetica", "bold");
    pdf.text("Be Musix.", 10, y);
    y += 10;

    pdf.setFontSize(14);
    pdf.setFont("helvetica", "normal");
    pdf.text("Distribution services", 10, y);
    y += 20;

    // Date
    pdf.setFontSize(12);
    pdf.text("Wednesday 01 November 2023", 10, y);
    y += 10;

    // Partner greeting
    pdf.text("Dear partner,", 10, y);
    y += 10;

    pdf.text(
      "Here is the total amount of royalties credited on your account (BE Musix) regarding",
      10,
      y
    );
    y += 10;
    pdf.text("the selected filters:", 10, y);
    y += 20;

    // Filter information
    pdf.text("September 2023", 10, y);
    y += 10;

    pdf.text("Labels filtered single report:", 10, y);
    y += 10;

    // Table header
    pdf.setFont("helvetica", "bold");
    pdf.text("Store", 10, y);
    pdf.text("Total", 150, y);
    y += 10;

    pdf.setFont("helvetica", "normal");

    // Data rows
    currentChartData.forEach((item: any) => {
      pdf.text(item.name, 10, y);
      pdf.text(String(item.value), 150, y);
      y += 10;
    });

    y += 10;

    // Net revenue
    pdf.text("NET REVENUE", 10, y);
    pdf.text(
      String(
        currentChartData.reduce((acc: number, item: any) => acc + item.value, 0)
      ),
      150,
      y
    );
    y += 20;

    // Footer
    pdf.text(
      "For any requests, please contact your local support team.",
      10,
      y
    );
    y += 10;

    pdf.text("Very best regards,", 10, y);
    y += 10;
    pdf.text("Royalty Accounting Team", 10, y);
    y += 10;
    pdf.text("Be Musix", 10, y);

    pdf.save("chart_data.pdf");
  };

  const handleCSVDownload = () => {
    //@ts-ignore
    const currentChartData = data[filter];

    // Prepend column headers
    const csvContent = `Store,Total\n${currentChartData
      .map((item: any) => `${item.name},${item.value}`)
      .join("\n")}`;

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "chart_data.csv";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    window.URL.revokeObjectURL(url);
  };
  //@ts-ignore
  const currentData = data[filter].map((d) => d.value);
  //@ts-ignore
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
        //@ts-ignore
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
        <Typography variant="h6">Total Stream and Revenue</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            //@ts-ignore
            data={viewsRevenueData[filter]}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="stream" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default AnalyticsPage;
