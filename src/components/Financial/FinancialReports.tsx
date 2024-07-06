/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TextField,
} from "@mui/material";
import { Pagination } from "@mui/material";
import {
  PictureAsPdf as PdfIcon,
  Description as CsvIcon,
  AttachMoney as DollarIcon,
  ArrowDownward as ArrowDownwardIcon,
  ArrowUpward as ArrowUpwardIcon,
} from "@mui/icons-material";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import { useGetMyFilesQuery } from "@/redux/slices/financial/financialApi";
import Loader from "@/utils/Loader";

const FinancialReports = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortedColumn, setSortedColumn] = useState("date");
  const [sortDirection, setSortDirection] = useState("asc");
  const { data: filesData } = useGetMyFilesQuery({});
  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };
  if (!filesData?.data) {
    return <Loader />;
  }

  const handleSearch = (event: any) => {
    setSearchQuery(event.target.value);
    setPage(0);
  };

  const handleSort = (column: any) => {
    if (sortedColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortedColumn(column);
      setSortDirection("asc");
    }
  };

  const filteredHistory = filesData?.data?.filter((row: any) =>
    Object.values(row).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const sortedHistory = filteredHistory?.sort((a: any, b: any) => {
    //@ts-ignore
    const aValue = a[sortedColumn];
    //@ts-ignore
    const bValue = b[sortedColumn];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
  });

  const handlePDFDownload = (row: any) => {
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
    const createdAt = new Date(row.createdAt).toLocaleString();
    pdf.text(`Date: ${createdAt}`, 10, y);
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
    pdf.text("Transaction Details", 10, y);
    y += 10;

    // Table header
    pdf.setFont("helvetica", "bold");
    pdf.text("Store", 10, y);
    pdf.text("Total", 150, y);
    y += 10;

    pdf.setFont("helvetica", "normal");

    // Data row
    pdf.text(row.filename, 10, y);
    pdf.text(String(row.totalAmount), 150, y);
    y += 10;

    y += 10;

    // Net revenue
    pdf.text("NET REVENUE", 10, y);
    pdf.text(String(row.totalAmount), 150, y);
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

    pdf.save(`transaction_${row._id?.slice(0, 6)}.pdf`);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Financial Overview
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Paper sx={{ padding: 2 }}>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={handleSearch}
            />
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell onClick={() => handleSort("createdAt")}>
                      Date{" "}
                      {sortedColumn === "createdAt" &&
                        (sortDirection === "asc" ? (
                          <ArrowDownwardIcon />
                        ) : (
                          <ArrowUpwardIcon />
                        ))}
                    </TableCell>
                    <TableCell onClick={() => handleSort("filename")}>
                      File Name{" "}
                      {sortedColumn === "filename" &&
                        (sortDirection === "asc" ? (
                          <ArrowDownwardIcon />
                        ) : (
                          <ArrowUpwardIcon />
                        ))}
                    </TableCell>
                    <TableCell
                      align="right"
                      onClick={() => handleSort("totalAmount")}
                    >
                      Amount ($){" "}
                      {sortedColumn === "totalAmount" &&
                        (sortDirection === "asc" ? (
                          <ArrowDownwardIcon />
                        ) : (
                          <ArrowUpwardIcon />
                        ))}
                    </TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sortedHistory
                    ?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    ?.map((row: any) => (
                      <TableRow key={row._id}>
                        <TableCell>
                          {new Date(row.createdAt).toLocaleString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </TableCell>

                        <TableCell>{row.filename}</TableCell>
                        <TableCell align="right">
                          <DollarIcon /> {row.totalAmount}
                        </TableCell>
                        <TableCell>
                          <IconButton onClick={() => handlePDFDownload(row)}>
                            <PdfIcon />
                          </IconButton>
                          <CSVLink
                            data={[row]}
                            headers={[
                              { label: "Date", key: "createdAt" },
                              { label: "File Name", key: "filename" },
                              { label: "Amount ($)", key: "totalAmount" },
                            ]}
                            filename={`transaction_${row.id}.csv`}
                          >
                            <IconButton>
                              <CsvIcon />
                            </IconButton>
                          </CSVLink>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
              <Pagination
                count={Math.ceil(sortedHistory.length / rowsPerPage)}
                page={page}
                onChange={handleChangePage}
                variant="outlined"
                shape="rounded"
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FinancialReports;
