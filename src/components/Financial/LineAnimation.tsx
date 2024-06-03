import * as React from "react";
import Typography from "@mui/material/Typography";

const LineAnimation = ({ financialData }) => {
  // Calculate the date range for the last 12 months
  const today = new Date();
  const last12Months = new Array(12).fill().map((_, index) => {
    const month = today.getMonth() - index;
    const year = today.getFullYear() - Math.floor(month / 12);
    return new Date(year, month % 12, 1);
  });

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Financial Data for the Last 12 Months
      </Typography>
      <ul>
        {last12Months.map((date, index) => {
          // Find financial data for each month
          const monthData = financialData.find((item) => {
            const itemDate = new Date(item.date);
            return (
              itemDate.getMonth() === date.getMonth() &&
              itemDate.getFullYear() === date.getFullYear()
            );
          });
          return (
            <li key={index}>
              <Typography>
                {date.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
                : {monthData ? `$${monthData.amount}` : "No data"}
              </Typography>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LineAnimation;
