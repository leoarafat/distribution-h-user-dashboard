import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Autocomplete from "@mui/material/Autocomplete";

const genres = [
  "Rock",
  "Pop",
  "Jazz",
  // Add more genres as needed
];

const subgenres = [
  "Classic Rock",
  "Hard Rock",
  // Add more subgenres as needed
];

const formats = [
  "CD",
  "Vinyl",
  // Add more formats as needed
];

const labels = [
  "Label 1",
  "Label 2",
  // Add more labels as needed
];

const artists = [
  "Artist 1",
  "Artist 2",
  "Artist 3",
  // Add more artists as needed
];

const years = Array.from(
  new Array(50),
  (val, index) => new Date().getFullYear() - index
).map(String); // Convert years to strings for Autocomplete

const AlbumReleaseInformation = () => {
  const [primaryArtists, setPrimaryArtists] = useState([""]);
  const [featuringArtists, setFeaturingArtists] = useState([""]);

  const addPrimaryArtist = () => setPrimaryArtists([...primaryArtists, ""]);
  const addFeaturingArtist = () =>
    setFeaturingArtists([...featuringArtists, ""]);

  const removePrimaryArtist = (index: any) => {
    const newPrimaryArtists = [...primaryArtists];
    newPrimaryArtists.splice(index, 1);
    setPrimaryArtists(newPrimaryArtists);
  };

  const removeFeaturingArtist = (index: any) => {
    const newFeaturingArtists = [...featuringArtists];
    newFeaturingArtists.splice(index, 1);
    setFeaturingArtists(newFeaturingArtists);
  };

  const handlePrimaryArtistChange = (index: any, value: any) => {
    const newPrimaryArtists = [...primaryArtists];
    newPrimaryArtists[index] = value;
    setPrimaryArtists(newPrimaryArtists);
  };

  const handleFeaturingArtistChange = (index: any, value: any) => {
    const newFeaturingArtists = [...featuringArtists];
    newFeaturingArtists[index] = value;
    setFeaturingArtists(newFeaturingArtists);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Release Title"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Version/Subtitle" variant="outlined" />
          </Grid>
          {primaryArtists.map((artist, index) => (
            <Grid
              item
              xs={12}
              key={index}
              container
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={12}>
                <Autocomplete
                  options={artists}
                  value={artist}
                  onChange={(event, newValue) =>
                    handlePrimaryArtistChange(index, newValue)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Primary Artist"
                      variant="outlined"
                    />
                  )}
                  freeSolo
                />
              </Grid>
              <Grid item className="flex justify-between">
                <IconButton
                  onClick={() => removePrimaryArtist(index)}
                  disabled={primaryArtists.length === 1}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
                {index === primaryArtists.length - 1 && (
                  <IconButton onClick={addPrimaryArtist}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          ))}
          {featuringArtists.map((artist, index) => (
            <Grid
              item
              xs={12}
              key={index}
              container
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={12}>
                <Autocomplete
                  options={artists}
                  value={artist}
                  onChange={(event, newValue) =>
                    handleFeaturingArtistChange(index, newValue)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Featuring"
                      variant="outlined"
                    />
                  )}
                  freeSolo
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  onClick={() => removeFeaturingArtist(index)}
                  disabled={featuringArtists.length === 1}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
                {index === featuringArtists.length - 1 && (
                  <IconButton onClick={addFeaturingArtist}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox />}
              label="Various Artists / Compilation"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              options={genres}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Genre"
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              options={subgenres}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Subgenre"
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              options={labels}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Label Name"
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              options={formats}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Format"
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Physical/Original Release Date"
              variant="outlined"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Ⓟ Line" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="© Line" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={4}>
            <Autocomplete
              options={years}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Production Year"
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="UPC/EAN" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Producer Catalogue Number"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AlbumReleaseInformation;
