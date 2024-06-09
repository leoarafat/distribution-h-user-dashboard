/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  TextField,
  Button,
  TableSortLabel,
  TablePagination,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import AddArtistModal from "./AddArtistModal";

const artistData = [
  {
    id: 150999,
    name: "Emon Khan",
    instagramId: "Pending",
    spotifyId: "Pending",
    appleId: "Pending",
    facebookUrl: "Pending",
  },
  {
    id: 150999,
    name: "Emon Khan",
    instagramId: "-",
    spotifyId: "-",
    appleId: "-",
    facebookUrl: "-",
  },
  {
    id: 150999,
    name: "Emon Khan",
    instagramId: "-",
    spotifyId: "-",
    appleId: "-",
    facebookUrl: "-",
  },
  {
    id: 150999,
    name: "Emon Khan",
    instagramId: "-",
    spotifyId: "-",
    appleId: "-",
    facebookUrl: "-",
  },
];

const ArtistManage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handlePageChange = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const showModal = () => {
    setOpen(true);
  };
  const filteredArtistData = artistData.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Artist Manage
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            //@ts-ignore
            startAdornment: <SearchIcon position="start" />,
          }}
        />
        <Button
          onClick={showModal}
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Add Artist
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>
                <TableSortLabel>Name</TableSortLabel>
              </TableCell>
              <TableCell>Instagram ID</TableCell>
              <TableCell>Spotify ID</TableCell>
              <TableCell>Apple ID</TableCell>
              <TableCell>Facebook URL</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredArtistData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.instagramId}</TableCell>
                  <TableCell>{row.spotifyId}</TableCell>
                  <TableCell>{row.appleId}</TableCell>
                  <TableCell>{row.facebookUrl}</TableCell>
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredArtistData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
      <AddArtistModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default ArtistManage;
