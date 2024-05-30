import { Line } from "@antv/g2plot";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
} from "recharts";

const DailyRentChart = ({ data }) => {
  const testData = [
    { month: "January", bookingCounts: 30 },
    { month: "February", bookingCounts: 20 },
    { month: "March", bookingCounts: 40 },
    { month: "April", bookingCounts: 35 },
    { month: "May", bookingCounts: 50 },
    { month: "June", bookingCounts: 45 },
    { month: "July", bookingCounts: 60 },
    { month: "August", bookingCounts: 55 },
    { month: "September", bookingCounts: 70 },
    { month: "October", bookingCounts: 65 },
    { month: "November", bookingCounts: 75 },
    { month: "December", bookingCounts: 80 },
  ];

  return (
    <div
      style={{
        width: "100%",
        border: "3px solid #000",
        borderRadius: "15px",
        padding: "20px",
        backgroundColor: "#fff",
      }}
    >
      <h1 style={{ marginTop: "10px", marginBottom: "10px", color: "#000" }}>
        Monthly Booking Ratio
      </h1>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={testData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" fill="#000" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="bookingCounts" fill="#000" />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyRentChart;
