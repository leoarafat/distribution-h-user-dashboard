import React, { useEffect } from "react";
import { TextField, Autocomplete, Container, Grid } from "@mui/material";

const TracksInformation = ({ data, onChange }: any) => {
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   onChange("trackDetails", { ...data.trackDetails, [name]: value });
  // };

  // useEffect(() => {
  //   onChange("trackDetails", data.trackDetails);
  //   localStorage.setItem("tracksInformation", JSON.stringify(data));
  // }, [data]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange("trackDetails", { ...data.trackDetails, [name]: value });
  };

  useEffect(() => {
    // Update localStorage only when necessary
    localStorage.setItem("tracksInformation", JSON.stringify(data));
  }, [data]);
  return (
    <Container maxWidth="md">
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              fullWidth
              options={["Audio", "Video"]}
              value={data.trackDetails.contentType}
              onChange={(e, value) =>
                onChange("trackDetails", {
                  ...data.trackDetails,
                  contentType: value,
                })
              }
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  fullWidth
                  label="Content Type"
                  variant="outlined"
                  name="contentType"
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Autocomplete
              fullWidth
              options={["Music", "Classic Music", "Jazz Music"]}
              value={data.trackDetails.primaryTrackType}
              onChange={(e, value) =>
                onChange("trackDetails", {
                  ...data.trackDetails,
                  primaryTrackType: value,
                })
              }
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  fullWidth
                  label="Primary Track Type"
                  variant="outlined"
                  name="primaryTrackType"
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
              value={data.trackDetails.secondaryTrackType}
              onChange={(e, value) =>
                onChange("trackDetails", {
                  ...data.trackDetails,
                  secondaryTrackType: value,
                })
              }
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  fullWidth
                  label="Secondary Track Type"
                  variant="outlined"
                  name="secondaryTrackType"
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Autocomplete
              fullWidth
              options={["Yes", "No"]}
              value={data.trackDetails.instrumental}
              onChange={(e, value) =>
                onChange("trackDetails", {
                  ...data.trackDetails,
                  instrumental: value,
                })
              }
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  fullWidth
                  label="Instrumental"
                  variant="outlined"
                  name="instrumental"
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              value={data.trackDetails.title}
              onChange={handleChange}
              variant="outlined"
              label="Title"
              required
              name="title"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              value={data.trackDetails.remixer}
              onChange={handleChange}
              variant="outlined"
              label="Remixer"
              name="remixer"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              value={data.trackDetails.author}
              onChange={handleChange}
              variant="outlined"
              label="Author"
              required
              name="author"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              value={data.trackDetails.composer}
              onChange={handleChange}
              variant="outlined"
              label="Composer"
              required
              name="composer"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              value={data.trackDetails.arranger}
              onChange={handleChange}
              variant="outlined"
              label="Arranger"
              name="arranger"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              value={data.trackDetails.producer}
              onChange={handleChange}
              variant="outlined"
              label="Producer"
              name="producer"
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              value={data.trackDetails.publisher}
              onChange={handleChange}
              variant="outlined"
              label="Publisher"
              name="publisher"
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              value={data.trackDetails.isrc}
              onChange={handleChange}
              variant="outlined"
              label="ISRC"
              name="isrc"
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Autocomplete
              fullWidth
              options={["Yes", "No"]}
              value={data.trackDetails.askToGenerateISRC}
              onChange={(e, value) =>
                onChange("trackDetails", {
                  ...data.trackDetails,
                  askToGenerateISRC: value,
                })
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  label="Ask to generate an ISRC"
                  variant="outlined"
                  name="askToGenerateISRC"
                  required
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              value={data.trackDetails.price}
              onChange={handleChange}
              variant="outlined"
              label="Price"
              required
              name="price"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Autocomplete
              fullWidth
              options={["Yes", "No", "Cleaned"]}
              value={data.trackDetails.parentalAdvisory}
              onChange={(e, value) =>
                onChange("trackDetails", {
                  ...data.trackDetails,
                  parentalAdvisory: value,
                })
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  label="Parental Advisory"
                  variant="outlined"
                  name="parentalAdvisory"
                  required
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              value={data.trackDetails.previewStart}
              onChange={handleChange}
              variant="outlined"
              label="Preview Start"
              name="previewStart"
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Autocomplete
              fullWidth
              options={["English", "Spanish", "French", "German"]}
              value={data.trackDetails.trackTitleLanguage}
              onChange={(e, value) =>
                onChange("trackDetails", {
                  ...data.trackDetails,
                  trackTitleLanguage: value,
                })
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  label="Track Title Language"
                  variant="outlined"
                  name="trackTitleLanguage"
                  required
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Autocomplete
              fullWidth
              options={["English", "Spanish", "French", "German"]}
              value={data.trackDetails.lyricsLanguage}
              onChange={(e, value) =>
                onChange("trackDetails", {
                  ...data.trackDetails,
                  lyricsLanguage: value,
                })
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  label="Lyrics Language"
                  variant="outlined"
                  required
                  name="lyricsLanguage"
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              value={data.trackDetails.lyrics}
              onChange={handleChange}
              variant="outlined"
              label="Lyrics"
              multiline
              rows={4}
              required
              name="lyrics"
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default TracksInformation;
