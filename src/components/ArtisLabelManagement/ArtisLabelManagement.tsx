import React, { useState } from "react";
import {
  Tabs,
  Tab,
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

const labelData = [
  { id: 150999, name: "Label 1" },
  { id: 150999, name: "Label 2" },
  { id: 150999, name: "Label 3" },
  { id: 150999, name: "Label 4" },
];

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

const ArtistLabelManagement = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [labelRowsPerPage, setLabelRowsPerPage] = useState(5);
  const [artistRowsPerPage, setArtistRowsPerPage] = useState(5);
  const [labelPage, setLabelPage] = useState(0);
  const [artistPage, setArtistPage] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleLabelPageChange = (event, newPage) => {
    setLabelPage(newPage);
  };

  const handleArtistPageChange = (event, newPage) => {
    setArtistPage(newPage);
  };

  const handleLabelRowsPerPageChange = (event) => {
    setLabelRowsPerPage(parseInt(event.target.value, 10));
    setLabelPage(0);
  };

  const handleArtistRowsPerPageChange = (event) => {
    setArtistRowsPerPage(parseInt(event.target.value, 10));
    setArtistPage(0);
  };

  const filteredLabelData = labelData.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredArtistData = artistData.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        aria-label="basic tabs example"
      >
        <Tab label="Label Manage" />
        <Tab label="Artist Manage" />
      </Tabs>

      {activeTab === 0 && (
        <div>
          <Typography variant="h4" component="h1" gutterBottom>
            Label Manage
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
                startAdornment: <SearchIcon position="start" />,
              }}
            />
            <Button variant="contained" color="primary" startIcon={<AddIcon />}>
              Add Label
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
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredLabelData
                  .slice(
                    labelPage * labelRowsPerPage,
                    labelPage * labelRowsPerPage + labelRowsPerPage
                  )
                  .map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>
                        <IconButton aria-label="edit">
                          <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredLabelData.length}
            rowsPerPage={labelRowsPerPage}
            page={labelPage}
            onPageChange={handleLabelPageChange}
            onRowsPerPageChange={handleLabelRowsPerPageChange}
          />
        </div>
      )}

      {activeTab === 1 && (
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
                startAdornment: <SearchIcon position="start" />,
              }}
            />
            <Button variant="contained" color="primary" startIcon={<AddIcon />}>
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
                  .slice(
                    artistPage * artistRowsPerPage,
                    artistPage * artistRowsPerPage + artistRowsPerPage
                  )
                  .map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.instagramId}</TableCell>
                      <TableCell>{row.spotifyId}</TableCell>
                      <TableCell>{row.appleId}</TableCell>
                      <TableCell>{row.facebookUrl}</TableCell>
                      <TableCell>
                        <IconButton aria-label="edit">
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredArtistData.length}
            rowsPerPage={artistRowsPerPage}
            page={artistPage}
            onPageChange={handleArtistPageChange}
            onRowsPerPageChange={handleArtistRowsPerPageChange}
          />
        </div>
      )}
    </div>
  );
};

export default ArtistLabelManagement;
