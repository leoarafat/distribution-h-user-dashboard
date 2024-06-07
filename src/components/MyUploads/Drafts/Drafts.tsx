/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import { Box, Typography, TextField, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { rows } from "@/MockData/BankData";
import BasicPagination from "../BasicPagination";

function Drafts() {
  const [searchText, setSearchText] = useState("");
  const [filteredRows, setFilteredRows] = useState(rows);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 10;
  const totalPages = Math.ceil(filteredRows.length / pageSize);

  const handleSearch = () => {
    const filteredData = rows.filter(
      (row) =>
        row.title.toLowerCase().includes(searchText.toLowerCase()) ||
        row.artist.toLowerCase().includes(searchText.toLowerCase()) ||
        row.label.toLowerCase().includes(searchText.toLowerCase())
    );
    setCurrentPage(0);
    setFilteredRows(filteredData);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page - 1); // Page index starts from 1, so decrement by 1
  };

  const handleEdit = (id: number) => {
    // Handle edit action
    console.log(`Edit row with id: ${id}`);
  };

  const handleDelete = (id: number) => {
    // Handle delete action
    console.log(`Delete row with id: ${id}`);
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
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params: any) => (
        <Box display="flex" justifyContent="space-between" width="100%">
          <IconButton onClick={() => handleEdit(params.id)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(params.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
        mt={3}
      >
        <Typography variant="h4" fontWeight="bold">
          Drafts
        </Typography>
        <Box display="flex" alignItems="center">
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ marginRight: 10 }}
          />
          <IconButton onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
      <div style={{ height: 600, width: "100%" }} className="mb-12">
        <DataGrid
          rows={filteredRows.slice(
            currentPage * pageSize,
            (currentPage + 1) * pageSize
          )}
          columns={columns}
          //@ts-ignore
          pageSize={10}
          rowsPerPageOptions={[10, 20, 50]}
          autoHeight
          disableSelectionOnClick
          checkboxSelection={false}
          pagination
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

export default Drafts;
