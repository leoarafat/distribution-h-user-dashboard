import React, { useEffect } from "react";
import {
  TextField,
  Autocomplete,
  Container,
  Grid,
  Tooltip,
} from "@mui/material";
import { allLanguage } from "@/utils/languages";

const TracksInformation = ({ data, onChange }: any) => {
  if (!data.trackDetails.contentType) {
    data.trackDetails.contentType = "Audio";
  }
  if (!data.trackDetails.price) {
    data.trackDetails.price = "Low Digital 45 : 1.29$";
  }
  if (!data.trackDetails.primaryTrackType) {
    data.trackDetails.primaryTrackType = "Music";
  }
  if (!data.trackDetails.instrumental) {
    data.trackDetails.instrumental = "No";
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange("trackDetails", { ...data.trackDetails, [name]: value });
  };

  useEffect(() => {
    localStorage.setItem("tracksInformation", JSON.stringify(data));
  }, [data]);
  return (
    <Container maxWidth="md">
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Tooltip title="Select as your wish">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
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
            <Tooltip title="Select as your wish">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
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
            <Tooltip title="Select as your wish">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
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
            <Tooltip title="Select as your wish">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
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
            <Tooltip title="Select as your wish">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
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
            <Tooltip title="Select as your wish">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
            <TextField
              // required
              fullWidth
              value={data.trackDetails.remixer}
              onChange={handleChange}
              variant="outlined"
              label="Remixer"
              name="remixer"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Tooltip title="Digital Music Stores require full first and last (family) name">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
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
            <Tooltip title="Digital Music Stores require full first and last (family) name">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
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
            <Tooltip title="Select as your wish">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
            <TextField
              fullWidth
              value={data.trackDetails.arranger}
              onChange={handleChange}
              variant="outlined"
              label="Arranger"
              name="arranger"
              // required
            />
          </Grid>

          <Grid item xs={12}>
            <Tooltip title="Select as your wish">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
            <TextField
              fullWidth
              value={data.trackDetails.producer}
              onChange={handleChange}
              variant="outlined"
              label="Producer"
              name="producer"
              // required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Tooltip title="Select as your wish">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
            <TextField
              fullWidth
              value={data.trackDetails.publisher}
              onChange={handleChange}
              variant="outlined"
              label="Publisher"
              name="publisher"
              // required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Tooltip title="Select as your wish">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
            <TextField
              fullWidth
              value={data.trackDetails.isrc}
              onChange={handleChange}
              variant="outlined"
              label="ISRC"
              name="isrc"
              // required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Tooltip title="Please specify the price you want for this track.">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
            <Autocomplete
              fullWidth
              options={[
                "Back: 0.69$ / 5HK$ / 0.98Sg$ / 15NT$ / 300Rp / 9₹",
                "Front: 1.29$ / 1.48g$ / 30NT$ / 7000Rp / 15₹",
                "Low Digital 45 : 1.29$",
              ]}
              value={data.trackDetails.price}
              onChange={(e, value) =>
                onChange("trackDetails", {
                  ...data.trackDetails,
                  price: value,
                })
              }
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  fullWidth
                  label="Price"
                  variant="outlined"
                  name="price"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Tooltip title="Please indicate when you want the 30 second pre-listen clip on your Player to start for this track. Please fill this field with seconds. i.e.: '180' for 3 minutes or '30' for 30 seconds.">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
            <TextField
              required
              fullWidth
              value={data.trackDetails.previewStart}
              onChange={handleChange}
              variant="outlined"
              label="Preview Start"
              name="previewStart"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Tooltip title="Choose 'cleaned' if this track is a cleaned-up version of a track originally explicit. If the original track does not contain explicit lyrics, choose no.">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
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
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Tooltip title="Please indicate the spelling language of the release title.">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
            <Autocomplete
              fullWidth
              options={allLanguage}
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
            <Tooltip title="Please indicate the language your release is in. If the release language is not listed, please select the closest provided.">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
            <Autocomplete
              fullWidth
              options={allLanguage}
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
            <Tooltip title="Please enter the track’s lyrics in this field, in UTF8 only. If your text is not accepted, please convert it in the accepted format.">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
            <TextField
              fullWidth
              value={data.trackDetails.lyrics}
              onChange={handleChange}
              variant="outlined"
              label="Lyrics"
              multiline
              rows={4}
              // required
              name="lyrics"
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default TracksInformation;
