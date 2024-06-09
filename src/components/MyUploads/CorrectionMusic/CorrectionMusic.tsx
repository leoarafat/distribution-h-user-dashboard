// import { useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Grid,
//   IconButton,
//   Container,
//   Box,
//   TextField,
//   Select,
//   MenuItem,
//   Pagination,
// } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import VisibilityIcon from "@mui/icons-material/Visibility";

// const AlbumCard = ({ album }: any) => {
//   const handleEdit = () => {
//     console.log("Edit", album.name);
//   };

//   const handleDelete = () => {
//     console.log("Delete", album.name);
//   };

//   const handleView = () => {
//     console.log("View", album.name);
//   };

//   return (
//     <Card
//       sx={{
//         display: "flex",
//         flexDirection: "row",
//         marginBottom: 2,
//         boxShadow: 3,
//         width: "100%",
//       }}
//     >
//       <CardMedia
//         component="img"
//         sx={{ width: 150 }}
//         image={album.image}
//         alt="Album cover"
//       />
//       <CardContent
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           flexGrow: 1,
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <Typography component="div" variant="h5">
//             {album.name}
//           </Typography>
//           <Box>
//             <IconButton onClick={handleView}>
//               <VisibilityIcon />
//             </IconButton>
//             <IconButton onClick={handleEdit}>
//               <EditIcon />
//             </IconButton>
//             <IconButton onClick={handleDelete}>
//               <DeleteIcon />
//             </IconButton>
//           </Box>
//         </Box>
//         <Grid container spacing={1} sx={{ marginTop: 1 }}>
//           <Grid item xs={4}>
//             <Typography variant="subtitle1" color="text.secondary">
//               Created By:
//             </Typography>
//           </Grid>
//           <Grid item xs={8}>
//             <Typography variant="body2" color="text.secondary">
//               {album.createdBy}
//             </Typography>
//           </Grid>
//           <Grid item xs={4}>
//             <Typography variant="subtitle1" color="text.secondary">
//               Label:
//             </Typography>
//           </Grid>
//           <Grid item xs={8}>
//             <Typography variant="body2" color="text.secondary">
//               {album.label}
//             </Typography>
//           </Grid>
//           <Grid item xs={4}>
//             <Typography variant="subtitle1" color="text.secondary">
//               ISRC:
//             </Typography>
//           </Grid>
//           <Grid item xs={8}>
//             <Typography variant="body2" color="text.secondary">
//               {album.catalogNumber}
//             </Typography>
//           </Grid>
//           <Grid item xs={4}>
//             <Typography variant="subtitle1" color="text.secondary">
//               Stores:
//             </Typography>
//           </Grid>
//           <Grid item xs={8}>
//             <Typography variant="body2" color="text.secondary">
//               {album.stores}
//             </Typography>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };

// const AlbumList = ({ albums }: any) => {
//   return (
//     <Grid container direction="column">
//       {albums.map((album: any) => (
//         <AlbumCard key={album.catalogNumber} album={album} />
//       ))}
//     </Grid>
//   );
// };

// const CorrectionMusic = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortOption, setSortOption] = useState("name");
//   const [page, setPage] = useState(1);

//   const albums = [
//     {
//       image:
//         "https://img.freepik.com/premium-psd/jazz-concert-banner-template_23-2149016105.jpg?w=1380",
//       name: "Album Name",
//       createdBy: "jeancolc lasa",
//       label: "Taranga Electro center Jun 24,2024",
//       catalogNumber: "Cat#:TEC3001 744662925003 Release Id:416651",
//       stores: "220 terrs, 21 Stored",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-psd/music-concert-facebook-template_23-2149959353.jpg?w=1380&t=st=1717396042~exp=1717396642~hmac=3ed5b19d91dde372cbc75905a981b538a87285dca11a523ffec316eb090d4050",
//       name: "Album Name",
//       createdBy: "jeancolc lasa",
//       label: "Taranga Electro center Jun 24,2024",
//       catalogNumber: "Cat#:TEC3001 744662925003 Release Id:416651",
//       stores: "220 terrs, 21 Stored",
//     },
//     {
//       image:
//         "https://img.freepik.com/premium-psd/feel-music-event-banner-template-design-psd_394216-16.jpg?w=1380",
//       name: "Album Name",
//       createdBy: "jeancolc lasa",
//       label: "Taranga Electro center Jun 24,2024",
//       catalogNumber: "Cat#:TEC3001 744662925003 Release Id:416651",
//       stores: "220 terrs, 21 Stored",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-psd/music-festival-banner-template_23-2148911140.jpg?w=1380&t=st=1717396073~exp=1717396673~hmac=55f764269162dd468ebb21ef39305a74f8d061ae5eb180f9d22c0d061e28fcd4",
//       name: "Album Name",
//       createdBy: "jeancolc lasa",
//       label: "Taranga Electro center Jun 24,2024",
//       catalogNumber: "Cat#:TEC3001 744662925003 Release Id:416651",
//       stores: "220 terrs, 21 Stored",
//     },
//   ];

//   const handleSearchChange = (event: any) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSortChange = (event: any) => {
//     setSortOption(event.target.value);
//   };

//   const handlePageChange = (event: any, value: any) => {
//     setPage(value);
//   };

//   const filteredAlbums = albums
//     .filter((album) =>
//       album.name.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     .sort((a, b) => {
//       if (sortOption === "name") {
//         return a.name.localeCompare(b.name);
//       } else if (sortOption === "createdBy") {
//         return a.createdBy.localeCompare(b.createdBy);
//       }
//       return 0;
//     });

//   const albumsPerPage = 2;
//   const displayedAlbums = filteredAlbums.slice(
//     (page - 1) * albumsPerPage,
//     page * albumsPerPage
//   );

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Correction Release
//       </Typography>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginBottom: 2,
//         }}
//       >
//         <TextField
//           label="Search"
//           variant="outlined"
//           value={searchQuery}
//           onChange={handleSearchChange}
//           sx={{ width: "40%" }}
//         />
//         <Select
//           value={sortOption}
//           onChange={handleSortChange}
//           variant="outlined"
//           sx={{ width: "40%" }}
//         >
//           <MenuItem value="name">Sort by Name</MenuItem>
//           <MenuItem value="createdBy">Sort by Created By</MenuItem>
//         </Select>
//       </Box>
//       <AlbumList albums={displayedAlbums} />
//       <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
//         <Pagination
//           count={Math.ceil(filteredAlbums.length / albumsPerPage)}
//           page={page}
//           onChange={handlePageChange}
//           color="primary"
//         />
//       </Box>
//     </Container>
//   );
// };

// export default CorrectionMusic;
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from "react";
import { Box, Typography, TextField, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
// Import the custom pagination component
import { rows } from "@/MockData/MockData";
import BasicPagination from "../BasicPagination";

function CorrectionMusic() {
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
          Correction Release
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

export default CorrectionMusic;
