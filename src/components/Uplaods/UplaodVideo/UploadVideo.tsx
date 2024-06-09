/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Card,
  CardContent,
  IconButton,
  Box,
  Container,
  Autocomplete,
} from "@mui/material";
import { Add, Remove, PhotoCamera, YouTube } from "@mui/icons-material";
import { MdClose } from "react-icons/md";
import { genres } from "@/MockData/MockData";

const primaryArtistOptions = [
  { label: "Artist 1", id: 1 },
  { label: "Artist 2", id: 2 },
  { label: "Artist 3", id: 3 },
  // Add more options as needed
];

const UploadVideo = () => {
  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      video: null,
      thumbnail: null,
      videoType: "",
      title: "",
      primaryArtist: [{ primaryArtistName: null }],
      writer: [{ writerName: "" }],
      composer: [{ composerName: "" }],
      musicDirector: [{ musicDirectorName: "" }],
      label: "",
      genre: "",
      subGenre: "",
      language: "",
      isrc: "",
      upc: "",
      description: "",
      storeReleaseDate: "",
    },
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailError, setThumbnailError] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedSubgenre, setSelectedSubgenre] = useState("");
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const handleGenreChange = (event: any, value: any) => {
    setSelectedGenre(value);
    setSelectedSubgenre("");
  };

  const handleSubgenreChange = (event: any, value: any) => {
    setSelectedSubgenre(value);
  };

  const getSubgenres = () => {
    const genreObj = genres?.find((genre) => genre.name === selectedGenre);
    return genreObj ? genreObj.subgenres : [];
  };
  const handleThumbnailUpload = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      // Check if file is a JPG
      if (file.type !== "image/jpeg") {
        setThumbnailError("Please upload a JPG image.");
        return;
      }

      const img = new Image();
      const objectUrl = URL.createObjectURL(file);

      img.onload = () => {
        // Check image dimensions
        if (img.width === 1920 && img.height === 1080) {
          setValue("thumbnail", file);
          setThumbnail(file);
          setThumbnailError("");
        } else {
          setThumbnailError("Image must be 1920x1080 pixels.");
        }

        URL.revokeObjectURL(objectUrl);
      };

      img.onerror = () => {
        setThumbnailError("Invalid image file.");
      };

      img.src = objectUrl;
    }
  };

  const handleVideoUpload = (event: any) => {
    const file = event.target.files[0];
    setValue("video", file);
    setVideoFile(file);
  };

  const handleThumbnailRemoveImage = () => {
    setThumbnail(null);
    setThumbnailError("");
  };

  const handleVideoRemove = () => {
    setVideoFile(null);
  };

  const renderArrayFields = (
    fieldArrayName: any,
    label: any,
    name: any,
    isAutocomplete: boolean = false
  ) => {
    const { fields, append, remove } = useFieldArray({
      control,
      name: fieldArrayName,
    });

    return (
      <>
        {fields.map((field, index) => (
          <Grid key={field.id} container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Controller
                //@ts-ignore
                name={`${fieldArrayName}[${index}].${name}`}
                control={control}
                render={({ field }) =>
                  isAutocomplete ? (
                    //@ts-ignore
                    <Autocomplete
                      {...field}
                      options={primaryArtistOptions}
                      //@ts-ignore
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) => field.onChange(value)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          label={label}
                          variant="outlined"
                          margin="normal"
                        />
                      )}
                      freeSolo
                    />
                  ) : (
                    <TextField
                      {...field}
                      fullWidth
                      label={label}
                      variant="outlined"
                      margin="normal"
                    />
                  )
                }
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8px",
                }}
              >
                <IconButton
                  color="secondary"
                  onClick={() => remove(index)}
                  size="large"
                >
                  <Remove />
                </IconButton>
                <IconButton
                  color="primary"
                  onClick={() => append({ [name]: isAutocomplete ? null : "" })}
                  size="large"
                >
                  <Add />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        ))}
      </>
    );
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <div className="flex justify-around items-center w-full p-3">
                <div className="image_upload flex items-center justify-center flex-col p-3">
                  <h4 className="mb-2 text-sm font-semibold">Upload Cover</h4>
                  <p className="mb-2 text-xs">
                    Please ensure that your cover meets the following <br />
                    specifications: the image size should be 1920 by 1080 <br />
                    pixels, and the format must be in JPG.
                  </p>
                  {thumbnail ? (
                    <div className="relative w-3/4">
                      <img
                        //@ts-ignore
                        src={thumbnail ? URL.createObjectURL(thumbnail) : null}
                        alt="PROFILE IMAGE"
                        className="w-[350px] h-[200px]"
                      />
                      <button
                        type="button"
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                        onClick={handleThumbnailRemoveImage}
                      >
                        <MdClose />
                      </button>
                    </div>
                  ) : (
                    <label
                      htmlFor="thumbnail"
                      className="upload w-[350px] hover:bg-green-100 transition flex justify-center shadow-md rounded-md p-12 text-5xl cursor-pointer"
                    >
                      <input
                        id="thumbnail"
                        type="file"
                        accept="image/*"
                        name="thumbnail"
                        style={{ display: "none" }}
                        onChange={handleThumbnailUpload}
                        required
                      />
                      <PhotoCamera style={{ fontSize: 100, color: "red" }} />
                    </label>
                  )}
                  {thumbnailError && (
                    <p style={{ color: "red", marginTop: "10px" }}>
                      {thumbnailError}
                    </p>
                  )}
                </div>

                <div className="image_upload flex items-center justify-center flex-col p-3">
                  <h4 className="mb-2 text-sm font-semibold">Upload Video</h4>
                  <p className="mb-2 text-xs">
                    Please note that only MP4 file is permitted for upload &
                    without any logo.
                    <br />
                    <br />
                  </p>
                  {videoFile ? (
                    <div className="relative w-3/4">
                      <video
                        controls
                        style={{ display: "block", marginTop: "10px" }}
                      >
                        <source
                          src={URL.createObjectURL(videoFile)}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>

                      <button
                        type="button"
                        className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full p-1"
                        onClick={handleVideoRemove}
                        style={{ transform: "translate(50%, -50%)" }}
                      >
                        <MdClose />
                      </button>
                    </div>
                  ) : (
                    <label
                      htmlFor="video"
                      className="upload w-[350px] hover:bg-green-100 transition flex justify-center shadow-md rounded-md p-12 text-5xl cursor-pointer"
                    >
                      <input
                        id="video"
                        type="file"
                        accept="video/*"
                        name="video"
                        style={{ display: "none" }}
                        onChange={handleVideoUpload}
                        required
                      />
                      <YouTube style={{ fontSize: 100, color: "#FF0000" }} />
                    </label>
                  )}
                </div>
              </div>

              <Grid item xs={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Video Type</InputLabel>
                  <Controller
                    name="videoType"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} label="Video Type">
                        <MenuItem value="Music Video">Music Video</MenuItem>
                        <MenuItem value="Entertainment">Entertainment</MenuItem>
                        <MenuItem value="Lyrical Video">Lyrical Video</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Title"
                      variant="outlined"
                      placeholder="Enter Title"
                    />
                  )}
                />
              </Grid>

              <Grid item xs={6}>
                {renderArrayFields(
                  "primaryArtist",
                  "Primary Artist",
                  "primaryArtistName",
                  true
                )}
              </Grid>

              <Grid item xs={6}>
                {renderArrayFields("writer", "Writer", "writerName")}
              </Grid>

              <Grid item xs={6}>
                {renderArrayFields("composer", "Composer", "composerName")}
              </Grid>

              <Grid item xs={6}>
                {renderArrayFields(
                  "musicDirector",
                  "Music Director",
                  "musicDirectorName"
                )}
              </Grid>

              <Grid item xs={6}>
                <Controller
                  name="label"
                  control={control}
                  render={({ field }) => (
                    <Autocomplete
                      isOptionEqualToValue={(option, value) =>
                        //@ts-ignore
                        option.value === value.value
                      }
                      {...field}
                      options={["Label1", "Label2", "Label3"]}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          label="Label"
                          variant="outlined"
                        />
                      )}
                      onChange={(_, value) => field.onChange(value)}
                      freeSolo
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Controller
                  name="genre"
                  control={control}
                  render={({ field }) => (
                    <Autocomplete
                      isOptionEqualToValue={(option, value) =>
                        option.value === value.value
                      }
                      {...field}
                      options={genres?.map((genre: any) => genre.name)}
                      value={selectedGenre}
                      onChange={handleGenreChange}
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
                  )}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Controller
                  name="subGenre"
                  control={control}
                  render={({ field }) => (
                    <Autocomplete
                      isOptionEqualToValue={(option, value) =>
                        //@ts-ignore
                        option.value === value.value
                      }
                      {...field}
                      //@ts-ignore
                      options={getSubgenres()}
                      value={selectedSubgenre}
                      onChange={handleSubgenreChange}
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
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="language"
                  control={control}
                  render={({ field }) => (
                    <Autocomplete
                      isOptionEqualToValue={(option, value) =>
                        //@ts-ignore
                        option.value === value.value
                      }
                      {...field}
                      options={["English", "Spanish", "French"]}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          label="Language"
                          variant="outlined"
                        />
                      )}
                      onChange={(_, value) => field.onChange(value)}
                      freeSolo
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="isrc"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="ISRC"
                      variant="outlined"
                      placeholder="Enter ISRC"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="upc"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="UPC"
                      variant="outlined"
                      placeholder="Enter UPC"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="storeReleaseDate"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Store Release Date"
                      variant="outlined"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Description"
                      variant="outlined"
                      placeholder="Enter Description"
                      multiline
                      rows={4}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default UploadVideo;
