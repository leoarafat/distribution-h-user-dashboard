import { useState } from "react";
import { Container, Grid, TextField, Box, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Autocomplete from "@mui/material/Autocomplete";

const genres = ["Rock", "Pop", "Jazz"];

const subgenre = ["Classic Rock", "Hard Rock"];

const labels = ["Label 1", "Label 2"];

const artists = ["Artist 1", "Artist 2", "Artist 3"];

const years = Array.from(
  new Array(50),
  (val, index) => new Date().getFullYear() - index
).map(String);

const AlbumReleaseInformation = () => {
  const [primaryArtists, setPrimaryArtists] = useState([""]);

  const addPrimaryArtist = () => setPrimaryArtists([...primaryArtists, ""]);

  const removePrimaryArtist = (index: any) => {
    const newPrimaryArtists = [...primaryArtists];
    newPrimaryArtists.splice(index, 1);
    setPrimaryArtists(newPrimaryArtists);
  };

  const handlePrimaryArtistChange = (index: any, value: any) => {
    const newPrimaryArtists = [...primaryArtists];
    newPrimaryArtists[index] = value;
    setPrimaryArtists(newPrimaryArtists);
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
              options={subgenre}
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
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Store Release Date"
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

          <Grid item xs={12} md={12}>
            <TextField fullWidth label="Catalogue Number" variant="outlined" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AlbumReleaseInformation;
