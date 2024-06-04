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
  FormControlLabel,
} from "@mui/material";
import { Add, Remove, PhotoCamera, YouTube } from "@mui/icons-material";
import { MdClose } from "react-icons/md";
import { RadioGroup, FormLabel, Radio } from "@material-ui/core";

const UploadVideo = () => {
  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      video: null,
      thumbnail: null,
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

  const [thumbnail, setThumbnail] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleThumbnailUpload = (event: any) => {
    const file = event.target.files[0];
    setValue("thumbnail", file);
    setThumbnail(file);
  };

  const handleVideoUpload = (event: any) => {
    const file = event.target.files[0];
    setValue("video", file);
    setVideoFile(file);
  };

  const handleThumbnailRemoveImage = () => {
    setThumbnail(null);
  };

  const handleVideoRemove = () => {
    setVideoFile(null);
  };

  const renderArrayFields = (fieldArrayName: any, label: any, name: any) => {
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
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label={label}
                    variant="outlined"
                    margin="normal"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6} container spacing={2}>
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => append({ [name]: "" })}
                  startIcon={<Add />}
                >
                  Add
                </Button>
              </Grid>
              <Grid item>
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
          </Grid>
        ))}
      </>
    );
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <div className="flex justify-around items-center w-full">
              <div className="image_upload flex items-center justify-center flex-col p-3">
                <h4 className="mb-2 text-sm font-semibold">Upload Thumbnail</h4>
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
                    <PhotoCamera style={{ fontSize: 100 }} />
                  </label>
                )}
              </div>

              <div className="image_upload flex items-center justify-center flex-col p-3">
                <h4 className="mb-2 text-sm font-semibold">Upload video</h4>
                {videoFile ? (
                  <div className="relative w-3/4">
                    <video
                      controls
                      style={{ display: "block", marginTop: "10px" }}
                    >
                      <source
                        src={URL.createObjectURL(videoFile)}
                        type="video/mp4" // Common type, you can change to the correct type of your video
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
                    <YouTube style={{ fontSize: 100 }} />
                  </label>
                )}
              </div>
            </div>
            <Grid item xs={6}>
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
            <Grid item xs={6}>
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
            <Grid item xs={6}>
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
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Primary Artist</InputLabel>
                <Controller
                  name="primaryArtist"
                  control={control}
                  render={({ field }) => (
                    <Select {...field} multiple label="Primary Artist">
                      <MenuItem value="artist1">Artist 1</MenuItem>
                      <MenuItem value="artist2">Artist 2</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
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
            <Grid item xs={6}>
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
            <Grid item xs={6}>
              <Controller
                name="releaseId"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Release ID"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="genre"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Genre"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="upcEan"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="UPC/EAN"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="subGenre"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Sub Genre"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="producerCatalogNumber"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Producer Catalog Number"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="productionYear"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Production Year"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="label"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Label"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="publisher"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Publisher"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="youtubeUrl"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="YouTube URL"
                    variant="outlined"
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
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="catalogNumber"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Catalog Number"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="tiktokStartInSecond"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="TikTok Start in Second"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="trackLanguage"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Track Language"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="releaseDate"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Release Date"
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
                name="advancePurchaseDate"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Advance Purchase Date"
                    variant="outlined"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              {renderArrayFields("writer", "Writer Name", "writerName")}
            </Grid>
            <Grid item xs={6}>
              {renderArrayFields("composer", "Composer Name", "composerName")}
            </Grid>
            <Grid item xs={6}>
              {renderArrayFields(
                "musicDirector",
                "Music Director Name",
                "musicDirectorName"
              )}
            </Grid>
            <Grid item xs={6}>
              {renderArrayFields("producer", "Producer Name", "producerName")}
            </Grid>
            {/* Radio fields */}
            <Grid item xs={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Primary Track Type <span style={{ color: "red" }}>*</span>
                </FormLabel>
                <Controller
                  name="trackType"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup {...field}>
                      <FormControlLabel
                        value="Music"
                        control={<Radio />}
                        label="Music"
                      />
                      <FormControlLabel
                        value="Classical Music"
                        control={<Radio />}
                        label="Classical Music"
                      />
                      <FormControlLabel
                        value="Jazz Music"
                        control={<Radio />}
                        label="Jazz Music"
                      />
                    </RadioGroup>
                  )}
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Is this track considered a key track for the release{" "}
                  <span style={{ color: "red" }}>*</span>
                </FormLabel>
                <Controller
                  name="isRelease"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup {...field}>
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  )}
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Instrumental <span style={{ color: "red" }}>*</span>
                </FormLabel>
                <Controller
                  name="instrumental"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup {...field}>
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  )}
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Parental advisory <span style={{ color: "red" }}>*</span>
                </FormLabel>
                <Controller
                  name="parentalAdvisory"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup {...field}>
                      <FormControlLabel
                        value="Explicit"
                        control={<Radio />}
                        label="Explicit"
                      />
                      <FormControlLabel
                        value="Not Explicit"
                        control={<Radio />}
                        label="Not Explicit"
                      />
                      <FormControlLabel
                        value="Edited"
                        control={<Radio />}
                        label="Edited"
                      />
                    </RadioGroup>
                  )}
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Secondary Track Type <span style={{ color: "red" }}>*</span>
                </FormLabel>
                <Controller
                  name="secondaryTrackType"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup {...field}>
                      <FormControlLabel
                        value="Original"
                        control={<Radio />}
                        label="Original"
                      />
                      <FormControlLabel
                        value="Karaoke"
                        control={<Radio />}
                        label="Karaoke"
                      />
                      <FormControlLabel
                        value="Medly"
                        control={<Radio />}
                        label="Medly"
                      />
                      <FormControlLabel
                        value="Cover"
                        control={<Radio />}
                        label="Cover"
                      />
                      <FormControlLabel
                        value="Cover by cover band"
                        control={<Radio />}
                        label="Cover by cover band"
                      />
                    </RadioGroup>
                  )}
                />
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

export default UploadVideo;
