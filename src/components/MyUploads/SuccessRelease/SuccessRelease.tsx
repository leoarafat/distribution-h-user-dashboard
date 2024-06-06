/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import { Box, Typography, TextField, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
import PublicIcon from "@mui/icons-material/Public";
import StoreIcon from "@mui/icons-material/Store"; // Added StoreIcon import
import { rows } from "@/MockData/BankData";
import StoreModal from "../Modal/StoreModal";
import CountryModal from "../Modal/CountryModal";

function SuccessRelease() {
  const [searchText, setSearchText] = useState("");
  const [filteredRows, setFilteredRows] = useState(rows);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [open, setOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);

  const handleSearch = () => {
    const filteredData = rows.filter(
      (row) =>
        row.title.toLowerCase().includes(searchText.toLowerCase()) ||
        row.artist.toLowerCase().includes(searchText.toLowerCase()) ||
        row.label.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRows(filteredData);
  };
  const handleStoreModal = async (payload: any) => {
    setOpen(true);
    setSelectedAlbum(payload);
  };
  const handleCountryModal = async (payload: any) => {
    setCountryOpen(true);
    setSelectedCountry(payload);
  };
  const columns = [
    {
      field: "cover",
      headerName: "",
      width: 80,
      renderCell: (params) => (
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
      renderCell: (params) => (
        <div>
          <Typography style={{ fontWeight: "bold", color: "#007BFF" }}>
            {params.value}
          </Typography>
          <Typography>{params.row.artist}</Typography>
        </div>
      ),
    },
    { field: "label", headerName: "Label", width: 150 },
    { field: "releaseDate", headerName: "Release Date", width: 150 },
    { field: "upc", headerName: "UPC", width: 200 },
    { field: "catNo", headerName: "Cat#", width: 100 },
    { field: "tracks", headerName: "Tracks", width: 100 },

    {
      field: "territories",
      headerName: "Territories",
      width: 230,
      renderCell: (params: any) => (
        <div
          onClick={() => handleCountryModal(params.row)}
          className="cursor-pointer"
        >
          <Box display="flex" alignItems="center">
            <PublicIcon style={{ marginRight: 8 }} />
            <Typography>{params.value}</Typography>
          </Box>
        </div>
      ),
    },
    {
      field: "stores",
      headerName: "Stores",
      width: 120,
      renderCell: (params: any) => (
        <div
          onClick={() => handleStoreModal(params.row)}
          className="cursor-pointer"
        >
          <Box display="flex" alignItems="center">
            <StoreIcon style={{ marginRight: 8 }} />
            <Typography>{params.value}</Typography>
          </Box>
        </div>
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
          Success Release
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
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          //@ts-ignore
          pageSize={10}
          rowsPerPageOptions={[10, 20, 50]}
          autoHeight
          disableSelectionOnClick
          checkboxSelection={false}
          pagination
        />
      </div>
      <StoreModal open={open} setOpen={setOpen} selectedAlbum={selectedAlbum} />
      <CountryModal
        open={countryOpen}
        setOpen={setCountryOpen}
        selectedCountry={selectedCountry}
      />
    </>
  );
}

export default SuccessRelease;
