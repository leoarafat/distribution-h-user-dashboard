/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from "react";
import { Box, Typography, TextField, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
// Import the custom pagination component
import { rows } from "@/MockData/BankData";
import BasicPagination from "../BasicPagination";

function FinalizeMusic() {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 10;

  // Filtered rows based on search text
  const filteredRows = rows.filter(
    (row) =>
      row.title.toLowerCase().includes(searchText.toLowerCase()) ||
      row.artist.toLowerCase().includes(searchText.toLowerCase()) ||
      row.label.toLowerCase().includes(searchText.toLowerCase())
  );

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredRows.length / pageSize);

  // Handle search input change
  const handleSearchChange = (e: any) => {
    setCurrentPage(0); // Reset current page to 0 when search text changes
    setSearchText(e.target.value);
  };

  // Handle pagination change
  const handlePageChange = (page: any) => {
    setCurrentPage(page - 1); // Page index starts from 1, so decrement by 1
  };

  const columns = [
    {
      field: "cover",
      headerName: "",
      width: 80,
      renderCell: (params: any) => (
        <img
          src={params.value}
          alt="cover"
          style={{ width: "50px", height: "50px", borderRadius: "4px" }}
        />
      ),
    },
    {
      field: "title",
      headerName: "Title",
      width: 300,
      renderCell: (params: any) => (
        <div>
          <Typography style={{ fontWeight: "bold", color: "#007BFF" }}>
            {params.value}
          </Typography>
          <Typography>{params.row.artist}</Typography>
        </div>
      ),
    },
    { field: "label", headerName: "Label", flex: 1 },
    { field: "releaseDate", headerName: "Release Date", flex: 1 },
    { field: "upc", headerName: "UPC", flex: 1 },
    { field: "isrc", headerName: "ISRC", flex: 1 },
    { field: "tracks", headerName: "Tracks", flex: 1 },
  ];

  return (
    <>
      {/* Your search input */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
        mt={3}
      >
        <Typography variant="h4" fontWeight="bold">
          Pending Release
        </Typography>
        <Box display="flex" alignItems="center">
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            value={searchText}
            onChange={handleSearchChange}
            style={{ marginRight: 10 }}
          />
          <IconButton onClick={handleSearchChange}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Your data grid */}
      <div style={{ height: 600, width: "100%" }} className="mb-10">
        <DataGrid
          rows={filteredRows.slice(
            currentPage * pageSize,
            (currentPage + 1) * pageSize
          )}
          columns={columns}
          //@ts-ignore
          pageSize={pageSize}
          autoHeight
          disableSelectionOnClick
          checkboxSelection={false}
          rowCount={filteredRows.length}
          hideFooterPagination
        />
      </div>

      {/* Pagination */}
      <Box mt={3} display="flex" justifyContent="center">
        <BasicPagination
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Box>
    </>
  );
}

export default FinalizeMusic;
