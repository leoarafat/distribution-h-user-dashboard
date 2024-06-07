/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from "react";
import {
  TextField,
  Box,
  IconButton,
  Autocomplete,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const years = Array.from(new Array(125), (val, index) => 2024 - index).map(
  String
);

const TracksInformation = () => {
  const [additionalFields, setAdditionalFields] = useState([]);

  const handleAddField = () => {
    //@ts-ignore
    setAdditionalFields([...additionalFields, { type: "", value: "" }]);
  };

  const handleRemoveField = (index: any) => {
    setAdditionalFields(additionalFields.filter((_, i) => i !== index));
  };

  const handleFieldChange = (index: any, key: any, value: any) => {
    const updatedFields = [...additionalFields];
    //@ts-ignore
    updatedFields[index][key] = value;
    setAdditionalFields(updatedFields);
  };

  return (
    <Container maxWidth="md">
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              fullWidth
              options={["Audio", "Video"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Content Type"
                  variant="outlined"
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Autocomplete
              fullWidth
              options={["Music"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Primary Track Type"
                  variant="outlined"
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Autocomplete
              fullWidth
              options={[
                "Original",
                "Karaoke",
                "Medley",
                "Cover",
                "Cover by cover band",
              ]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Secondary Track Type"
                  variant="outlined"
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Autocomplete
              fullWidth
              options={["Yes", "No"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Instrumental"
                  variant="outlined"
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth variant="outlined" label="Title" required />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth variant="outlined" label="Remixer" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth variant="outlined" label="Author" required />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth variant="outlined" label="Composer" required />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth variant="outlined" label="Arranger" />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth variant="outlined" label="Producer" />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth variant="outlined" label="℗ Line" required />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Autocomplete
              fullWidth
              options={years}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Production Year"
                  variant="outlined"
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth variant="outlined" label="Publisher" />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth variant="outlined" label="ISRC" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Autocomplete
              fullWidth
              options={["Yes", "No"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Ask to generate an ISRC"
                  variant="outlined"
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth variant="outlined" label="Price" required />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Producer Catalogue Number"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Autocomplete
              fullWidth
              options={["Yes", "No", "Cleaned"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Parental Advisory"
                  variant="outlined"
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth variant="outlined" label="Preview Start" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Autocomplete
              fullWidth
              options={["English", "Spanish", "French", "German"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Track Title Language"
                  variant="outlined"
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Autocomplete
              fullWidth
              options={["English", "Spanish", "French", "German"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Lyrics Language"
                  variant="outlined"
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Lyrics"
              multiline
              rows={4}
            />
          </Grid>

          {additionalFields.map((field, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box display="flex" alignItems="center">
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Field Type"
                  //@ts-ignore
                  value={field.type}
                  onChange={(e) =>
                    handleFieldChange(index, "type", e.target.value)
                  }
                  sx={{ mr: 1 }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Field Value"
                  //@ts-ignore
                  value={field.value}
                  onChange={(e) =>
                    handleFieldChange(index, "value", e.target.value)
                  }
                  sx={{ mr: 1 }}
                />
                <IconButton onClick={() => handleRemoveField(index)}>
                  <RemoveCircleOutlineIcon />
                </IconButton>
              </Box>
            </Grid>
          ))}
        </Grid>
      </form>
    </Container>
  );
};

export default TracksInformation;
