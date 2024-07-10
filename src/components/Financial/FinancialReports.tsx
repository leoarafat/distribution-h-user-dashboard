/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from "react";
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

import {
  useGetMyBalanceQuery,
  useGetMyFilesQuery,
} from "@/redux/slices/financial/financialApi";
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

  const { data: myBalance, isLoading } = useGetMyBalanceQuery({});

  useEffect(() => {
    if (myBalance) {
      setCurrentMonthBalance(myBalance.data?.clientTotalBalance);
    }
  }, [myBalance]);
  const [currentMonthBalance, setCurrentMonthBalance] = useState(null);

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

  const handleCSVDownload = (row: any) => {
    const csvData = row?.data?.map((entry: any) => ({
      upc: entry.upc,
      isrc: entry.isrc,
      labelName: entry.labelName,
      artistName: entry.artistName,
      album: entry.album,
      trackTitle: entry.trackTitle,
      stream_quantity: entry.stream_quantity,
      revenue: entry.revenue,
      country: entry.country,
      releaseTitle: entry.releaseTitle,
      reportingMonth: entry.reportingMonth,
      salesMonth: entry.salesMonth,
      platForm: entry.platForm,
      clientShareRate: entry.clientShareRate,
    }));

    const headers = [
      { label: "UPC", key: "upc" },
      { label: "ISRC", key: "isrc" },
      { label: "Label Name", key: "labelName" },
      { label: "Artist Name", key: "artistName" },
      { label: "Album", key: "album" },
      { label: "Track Title", key: "trackTitle" },
      { label: "Stream Quantity", key: "stream_quantity" },
      { label: "Revenue", key: "revenue" },
      { label: "Country", key: "country" },
      { label: "Release Title", key: "releaseTitle" },
      { label: "Reporting Month", key: "reportingMonth" },
      { label: "Sales Month", key: "salesMonth" },
      { label: "Platform", key: "platForm" },
      { label: "Client Share Rate", key: "clientShareRate" },
    ];

    return (
      <CSVLink
        data={csvData}
        headers={headers}
        filename={"financial_data.csv"}
        className="btn btn-primary"
        target="_blank"
      >
        <CsvIcon /> Download CSV
      </CSVLink>
    );
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
                          <DollarIcon />{" "}
                          {currentMonthBalance === null
                            ? "0.00"
                            : //@ts-ignore
                              currentMonthBalance.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                              })}
                        </TableCell>
                        <TableCell>{handleCSVDownload(row)}</TableCell>
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
