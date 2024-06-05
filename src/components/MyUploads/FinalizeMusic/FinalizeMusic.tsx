import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  IconButton,
  Container,
  Box,
  TextField,
  Select,
  MenuItem,
  Pagination,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

const AlbumCard = ({ album }: any) => {
  const handleEdit = () => {
    console.log("Edit", album.name);
  };

  const handleDelete = () => {
    console.log("Delete", album.name);
  };

  const handleView = () => {
    console.log("View", album.name);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        marginBottom: 2,
        boxShadow: 3,
        width: "100%",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={album.image}
        alt="Album cover"
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography component="div" variant="h5">
            {album.name}
          </Typography>
          <Box>
            <IconButton onClick={handleView}>
              <VisibilityIcon />
            </IconButton>
            <IconButton onClick={handleEdit}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
        <Grid container spacing={1} sx={{ marginTop: 1 }}>
          <Grid item xs={4}>
            <Typography variant="subtitle1" color="text.secondary">
              Created By:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2" color="text.secondary">
              {album.createdBy}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1" color="text.secondary">
              Label:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2" color="text.secondary">
              {album.label}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1" color="text.secondary">
              Cat#:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2" color="text.secondary">
              {album.catalogNumber}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1" color="text.secondary">
              Stores:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2" color="text.secondary">
              {album.stores}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const AlbumList = ({ albums }: any) => {
  return (
    <Grid container direction="column">
      {albums.map((album: any) => (
        <AlbumCard key={album.catalogNumber} album={album} />
      ))}
    </Grid>
  );
};

const FinalizeMusic = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("name");
  const [page, setPage] = useState(1);

  const albums = [
    {
      image:
        "https://img.freepik.com/premium-psd/jazz-concert-banner-template_23-2149016105.jpg?w=1380",
      name: "Album Name",
      createdBy: "jeancolc lasa",
      label: "Taranga Electro center Jun 24,2024",
      catalogNumber: "Cat#:TEC3001 744662925003 Release Id:416651",
      stores: "220 terrs, 21 Stored",
    },
    {
      image:
        "https://img.freepik.com/free-psd/music-concert-facebook-template_23-2149959353.jpg?w=1380&t=st=1717396042~exp=1717396642~hmac=3ed5b19d91dde372cbc75905a981b538a87285dca11a523ffec316eb090d4050",
      name: "Album Name",
      createdBy: "jeancolc lasa",
      label: "Taranga Electro center Jun 24,2024",
      catalogNumber: "Cat#:TEC3001 744662925003 Release Id:416651",
      stores: "220 terrs, 21 Stored",
    },
    {
      image:
        "https://img.freepik.com/premium-psd/feel-music-event-banner-template-design-psd_394216-16.jpg?w=1380",
      name: "Album Name",
      createdBy: "jeancolc lasa",
      label: "Taranga Electro center Jun 24,2024",
      catalogNumber: "Cat#:TEC3001 744662925003 Release Id:416651",
      stores: "220 terrs, 21 Stored",
    },
    {
      image:
        "https://img.freepik.com/free-psd/music-festival-banner-template_23-2148911140.jpg?w=1380&t=st=1717396073~exp=1717396673~hmac=55f764269162dd468ebb21ef39305a74f8d061ae5eb180f9d22c0d061e28fcd4",
      name: "Album Name",
      createdBy: "jeancolc lasa",
      label: "Taranga Electro center Jun 24,2024",
      catalogNumber: "Cat#:TEC3001 744662925003 Release Id:416651",
      stores: "220 terrs, 21 Stored",
    },
  ];

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (event: any) => {
    setSortOption(event.target.value);
  };

  const handlePageChange = (event: any, value: any) => {
    setPage(value);
  };

  const filteredAlbums = albums
    .filter((album) =>
      album.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "createdBy") {
        return a.createdBy.localeCompare(b.createdBy);
      }
      return 0;
    });

  const albumsPerPage = 2;
  const displayedAlbums = filteredAlbums.slice(
    (page - 1) * albumsPerPage,
    page * albumsPerPage
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Finalize Release
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ width: "40%" }}
        />
        <Select
          value={sortOption}
          onChange={handleSortChange}
          variant="outlined"
          sx={{ width: "40%" }}
        >
          <MenuItem value="name">Sort by Name</MenuItem>
          <MenuItem value="createdBy">Sort by Created By</MenuItem>
        </Select>
      </Box>
      <AlbumList albums={displayedAlbums} />
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Pagination
          count={Math.ceil(filteredAlbums.length / albumsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default FinalizeMusic;
