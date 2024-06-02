import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Box,
} from "@mui/material";
import { Add, Remove, PhotoCamera, Audiotrack } from "@mui/icons-material";

const UploadSingle = () => {
  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      audio: null,
      image: null,
      user: "",
      status: false,
      trackType: "",
      isRelease: "",
      instrumental: "",
      songType: "single",
      storePlatform: [],
      secondaryTrackType: "",
      parentalAdvisory: "",
      releaseTitle: "",
      subtitle: "",
      line: "",
      primaryArtist: [],
      writer: [{ writerName: "" }],
      composer: [{ composerName: "" }],
      musicDirector: [{ musicDirectorName: "" }],
      producer: [{ producerName: "" }],
      actor: "",
      filmDirector: "",
      releaseId: "",
      genre: "",
      upcEan: "",
      subGenre: "",
      producerCatalogNumber: "",
      productionYear: "",
      label: "",
      publisher: "",
      youtubeUrl: "",
      isrc: "",
      catalogNumber: "",
      tiktokStartInSecond: "",
      trackLanguage: "",
      releaseDate: "",
      isAdvancePurchase: false,
      advancePurchaseDate: "",
      isApproved: "pending",
      correctionNote: [{ text: "", isRead: false }],
      tackDown: "",
      songStatus: "none",
      inspection: "none",
    },
  });

  const [audioPreview, setAudioPreview] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleAudioChange = (e) => {
    const file = e.target.files[0];
    setValue("audio", file);
    setAudioPreview(URL.createObjectURL(file));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setValue("image", file);
    setImagePreview(URL.createObjectURL(file));
  };

  const renderArrayFields = (fieldArrayName, label) => {
    const { fields, append, remove } = useFieldArray({
      control,
      name: fieldArrayName,
    });

    return (
      <>
        {fields.map((field, index) => (
          <Grid container spacing={2} key={field.id}>
            <Grid item xs={10}>
              <Controller
                name={`${fieldArrayName}[${index}].${fieldArrayName.slice(
                  0,
                  -1
                )}Name`}
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label={label}
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => remove(index)}
                startIcon={<Remove />}
              >
                Remove
              </Button>
            </Grid>
          </Grid>
        ))}
        <Button
          variant="contained"
          color="primary"
          onClick={() => append({ [`${fieldArrayName.slice(0, -1)}Name`]: "" })}
          startIcon={<Add />}
        >
          Add Another
        </Button>
      </>
    );
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Upload Single
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <input
                accept="audio/*"
                style={{ display: "none" }}
                id="audio-upload"
                type="file"
                onChange={handleAudioChange}
              />
              <label htmlFor="audio-upload">
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  startIcon={<Audiotrack />}
                >
                  Upload Audio
                </Button>
              </label>
              {audioPreview && (
                <audio controls style={{ display: "block", marginTop: "10px" }}>
                  <source src={audioPreview} type="audio/mpeg" />
                  Your browser does not support the audio tag.
                </audio>
              )}
            </Grid>
            <Grid item xs={12}>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="image-upload"
                type="file"
                onChange={handleImageChange}
              />
              <label htmlFor="image-upload">
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  startIcon={<PhotoCamera />}
                >
                  Upload Image
                </Button>
              </label>
              {imagePreview && (
                <Box mt={2} display="flex" justifyContent="center">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{ maxHeight: "200px" }}
                  />
                </Box>
              )}
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="releaseTitle"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Release Title"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="subtitle"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Subtitle"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="line"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Line"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Primary Artist</InputLabel>
                <Controller
                  name="primaryArtist"
                  control={control}
                  render={({ field }) => (
                    <Select {...field} multiple label="Primary Artist">
                      {/* Add options dynamically or statically */}
                      <MenuItem value="artist1">Artist 1</MenuItem>
                      <MenuItem value="artist2">Artist 2</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              {renderArrayFields("writer", "Writer Name")}
            </Grid>
            <Grid item xs={12}>
              {renderArrayFields("composer", "Composer Name")}
            </Grid>
            <Grid item xs={12}>
              {renderArrayFields("musicDirector", "Music Director Name")}
            </Grid>
            <Grid item xs={12}>
              {renderArrayFields("producer", "Producer Name")}
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="actor"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Actor"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="filmDirector"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Film Director"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <RadioGroup row>
                  <FormControlLabel
                    control={
                      <Controller
                        name="trackType"
                        control={control}
                        render={({ field }) => (
                          <Radio {...field} value="music" />
                        )}
                      />
                    }
                    label="Music"
                  />
                  <FormControlLabel
                    control={
                      <Controller
                        name="trackType"
                        control={control}
                        render={({ field }) => (
                          <Radio {...field} value="classic-music" />
                        )}
                      />
                    }
                    label="Classic Music"
                  />
                  <FormControlLabel
                    control={
                      <Controller
                        name="trackType"
                        control={control}
                        render={({ field }) => (
                          <Radio {...field} value="jazz-music" />
                        )}
                      />
                    }
                    label="Jazz Music"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <RadioGroup row>
                  <FormControlLabel
                    control={
                      <Controller
                        name="isRelease"
                        control={control}
                        render={({ field }) => <Radio {...field} value="yes" />}
                      />
                    }
                    label="Yes"
                  />
                  <FormControlLabel
                    control={
                      <Controller
                        name="isRelease"
                        control={control}
                        render={({ field }) => <Radio {...field} value="no" />}
                      />
                    }
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <RadioGroup row>
                  <FormControlLabel
                    control={
                      <Controller
                        name="instrumental"
                        control={control}
                        render={({ field }) => <Radio {...field} value="yes" />}
                      />
                    }
                    label="Yes"
                  />
                  <FormControlLabel
                    control={
                      <Controller
                        name="instrumental"
                        control={control}
                        render={({ field }) => <Radio {...field} value="no" />}
                      />
                    }
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <RadioGroup row>
                  <FormControlLabel
                    control={
                      <Controller
                        name="secondaryTrackType"
                        control={control}
                        render={({ field }) => (
                          <Radio {...field} value="original" />
                        )}
                      />
                    }
                    label="Original"
                  />
                  <FormControlLabel
                    control={
                      <Controller
                        name="secondaryTrackType"
                        control={control}
                        render={({ field }) => (
                          <Radio {...field} value="karaoke" />
                        )}
                      />
                    }
                    label="Karaoke"
                  />
                  <FormControlLabel
                    control={
                      <Controller
                        name="secondaryTrackType"
                        control={control}
                        render={({ field }) => (
                          <Radio {...field} value="melody" />
                        )}
                      />
                    }
                    label="Melody"
                  />
                  <FormControlLabel
                    control={
                      <Controller
                        name="secondaryTrackType"
                        control={control}
                        render={({ field }) => (
                          <Radio {...field} value="cover" />
                        )}
                      />
                    }
                    label="Cover"
                  />
                  <FormControlLabel
                    control={
                      <Controller
                        name="secondaryTrackType"
                        control={control}
                        render={({ field }) => (
                          <Radio {...field} value="cover-by-band" />
                        )}
                      />
                    }
                    label="Cover by Band"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <RadioGroup row>
                  <FormControlLabel
                    control={
                      <Controller
                        name="parentalAdvisory"
                        control={control}
                        render={({ field }) => (
                          <Radio {...field} value="explicit" />
                        )}
                      />
                    }
                    label="Explicit"
                  />
                  <FormControlLabel
                    control={
                      <Controller
                        name="parentalAdvisory"
                        control={control}
                        render={({ field }) => (
                          <Radio {...field} value="no-explicit" />
                        )}
                      />
                    }
                    label="No Explicit"
                  />
                  <FormControlLabel
                    control={
                      <Controller
                        name="parentalAdvisory"
                        control={control}
                        render={({ field }) => (
                          <Radio {...field} value="edited" />
                        )}
                      />
                    }
                    label="Edited"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            {/* Add more fields similarly... */}
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default UploadSingle;
