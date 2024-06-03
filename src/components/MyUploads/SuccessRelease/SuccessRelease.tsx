import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Container,
  Box,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const AlbumCard = ({ album }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        marginBottom: 2,
        boxShadow: 3,
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
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>View</MenuItem>
            <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
            <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
          </Menu>
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

const AlbumList = ({ albums }) => {
  return (
    <Grid container direction="column">
      {albums.map((album) => (
        <AlbumCard key={album.catalogNumber} album={album} />
      ))}
    </Grid>
  );
};

const SuccessRelease = () => {
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

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Success Release
      </Typography>
      <AlbumList albums={albums} />
    </Container>
  );
};

export default SuccessRelease;
