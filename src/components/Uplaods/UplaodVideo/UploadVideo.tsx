// /* eslint-disable @typescript-eslint/ban-ts-comment */

// import { useState } from "react";
// import { useForm, useFieldArray, Controller } from "react-hook-form";
// import {
//   Button,
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Grid,
//   Card,
//   CardContent,
//   IconButton,
//   Box,
//   Container,
//   Autocomplete,
//   Dialog,
//   DialogTitle,
//   Typography,
//   DialogContent,
//   FormControlLabel,
//   Checkbox,
//   DialogActions,
// } from "@mui/material";
// import { Add, Remove, PhotoCamera, YouTube } from "@mui/icons-material";
// import { MdClose } from "react-icons/md";
// import { genres } from "@/MockData/MockData";
// import { UploadIcon } from "lucide-react";
// import {
//   useGetArtistsQuery,
//   useGetApprovedLabelsQuery,
// } from "@/redux/slices/ArtistAndLabel/artistLabelApi";
// import { useUploadVideoMutation } from "@/redux/slices/uploadVideoAudio/uploadVideoAudioApi";
// import { Link, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { allLanguage } from "@/utils/languages";

// const UploadVideo = () => {
//   const { control, handleSubmit, watch, setValue } = useForm({
//     defaultValues: {
//       video: null,
//       thumbnail: null,
//       videoType: "",
//       title: "",
//       primaryArtist: [{ primaryArtistName: "", _id: "" }],
//       writer: [{ writerName: "" }],
//       composer: [{ composerName: "" }],
//       musicDirector: [{ musicDirectorName: "" }],
//       label: "",
//       genre: "",
//       subGenre: "",
//       language: "",
//       isrc: "",
//       upc: "",
//       description: "",
//       storeReleaseDate: "",
//     },
//   });
//   const [openModal, setOpenModal] = useState(false);
//   const [conditionsAccepted, setConditionsAccepted] = useState({
//     condition1: false,
//     condition2: false,
//     condition3: false,
//   });
//   const [thumbnail, setThumbnail] = useState(null);
//   const [videoFile, setVideoFile] = useState(null);
//   const [thumbnailError, setThumbnailError] = useState("");
//   const [selectedGenre, setSelectedGenre] = useState("");
//   const [selectedSubgenre, setSelectedSubgenre] = useState("");
//   const navigate = useNavigate();
//   const [uploadVideo, { isLoading }] = useUploadVideoMutation();

//   const { data: labelData } = useGetApprovedLabelsQuery({});
//   const { data: artistData } = useGetArtistsQuery({});

//   const artistOptions =
//     //@ts-ignore
//     artistData?.data?.data?.map((artist: any) => ({
//       label: artist.primaryArtistName,
//       value: artist._id,
//     })) || [];

//   const labelOptions =
//     //@ts-ignore
//     labelData?.data?.data?.map((label: any) => ({
//       label: label.labelName,
//       value: label._id,
//     })) || [];
//   const handleSubmitWithConditions = (data: any) => {
//     if (
//       conditionsAccepted.condition1 &&
//       conditionsAccepted.condition2 &&
//       conditionsAccepted.condition3
//     ) {
//       onSubmit(data);
//     } else {
//       setOpenModal(true);
//     }
//   };
//   const onSubmit = async (data: any) => {
//     if (
//       !conditionsAccepted.condition1 ||
//       !conditionsAccepted.condition2 ||
//       !conditionsAccepted.condition3
//     ) {
//       setOpenModal(true);
//       return;
//     }
//     console.log(conditionsAccepted);

//     try {
//       const formData = new FormData();
//       if (videoFile) {
//         formData.append("video", videoFile);
//       }
//       if (thumbnail) {
//         formData.append("image", thumbnail);
//       }

//       formData.append("videoType", data.videoType);
//       formData.append("title", data.title);
//       formData.append("label", data.label);
//       formData.append("genre", selectedGenre);
//       formData.append("subGenre", selectedSubgenre);
//       formData.append("language", data.language);
//       formData.append("isrc", data.isrc);
//       formData.append("upc", data.upc);
//       formData.append("description", data.description);
//       formData.append("storeReleaseDate", data.storeReleaseDate);

//       const formattedPrimaryArtists = data.primaryArtist.map(
//         (artist: any) => artist._id
//       );

//       formData.append("primaryArtist", JSON.stringify(formattedPrimaryArtists));
//       const res = await uploadVideo(formData);

//       if (res?.data?.success === true) {
//         toast.success("Video Upload Successful");
//         navigate("/my-uploads/pending-videos");
//       }
//     } catch (error: any) {
//       console.log(error?.message);
//     }
//   };
//   const handleOpenModal = () => {
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };
//   const handleAcceptCondition = (condition: string) => (event: any) => {
//     setConditionsAccepted({
//       ...conditionsAccepted,
//       [condition]: event.target.checked,
//     });
//   };
//   const handleGenreChange = (event: any, value: any) => {
//     setSelectedGenre(value);
//     setSelectedSubgenre("");
//   };

//   const handleSubgenreChange = (event: any, value: any) => {
//     setSelectedSubgenre(value);
//   };

//   const getSubgenres = () => {
//     const genreObj = genres?.find((genre) => genre.name === selectedGenre);
//     return genreObj ? genreObj.subgenres : [];
//   };

//   const handleThumbnailUpload = (event: any) => {
//     const file = event.target.files[0];

//     if (file) {
//       if (file.type !== "image/jpeg") {
//         setThumbnailError("Please upload a JPG image.");
//         return;
//       }

//       const img = new Image();
//       const objectUrl = URL.createObjectURL(file);

//       img.onload = () => {
//         if (img.width === 1920 && img.height === 1080) {
//           setValue("thumbnail", file);
//           setThumbnail(file);
//           setThumbnailError("");
//         } else {
//           setThumbnailError("Image must be 1920x1080 pixels.");
//         }

//         URL.revokeObjectURL(objectUrl);
//       };

//       img.onerror = () => {
//         setThumbnailError("Invalid image file.");
//       };

//       img.src = objectUrl;
//     }
//   };

//   const handleVideoUpload = (event: any) => {
//     const file = event.target.files[0];
//     setValue("video", file);
//     setVideoFile(file);
//   };

//   const handleThumbnailRemoveImage = () => {
//     setThumbnail(null);
//     setThumbnailError("");
//   };

//   const handleVideoRemove = () => {
//     setVideoFile(null);
//   };

//   const renderArrayFields = (
//     fieldArrayName: any,
//     label: any,
//     name: any,
//     isAutocomplete: boolean = false
//   ) => {
//     const { fields, append, remove } = useFieldArray({
//       control,
//       name: fieldArrayName,
//     });

//     return (
//       <>
//         {fields.map((field, index) => (
//           <Grid key={field.id} container spacing={2} alignItems="center">
//             <Grid item xs={12}>
//               <Controller
//                 //@ts-ignore
//                 name={`${fieldArrayName}[${index}].primaryArtistName`}
//                 control={control}
//                 render={({ field }) =>
//                   isAutocomplete ? (
//                     //@ts-ignore
//                     <Autocomplete
//                       {...field}
//                       options={artistOptions.map((option: any) => option.label)}
//                       getOptionLabel={(option) => option || ""}
//                       isOptionEqualToValue={(option, value) => option === value}
//                       onChange={(event, value) => {
//                         field.onChange(value);
//                         const selectedArtist = artistOptions.find(
//                           (artist: any) => artist.label === value
//                         );
//                         setValue(
//                           //@ts-ignore
//                           `${fieldArrayName}[${index}]._id`,
//                           selectedArtist?.value || null
//                         );
//                       }}
//                       renderInput={(params) => (
//                         <TextField
//                           required
//                           {...params}
//                           fullWidth
//                           label={label}
//                           variant="outlined"
//                           margin="normal"
//                         />
//                       )}
//                       freeSolo
//                     />
//                   ) : (
//                     <TextField
//                       {...field}
//                       fullWidth
//                       label={label}
//                       variant="outlined"
//                       margin="normal"
//                     />
//                   )
//                 }
//               />
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   marginTop: "8px",
//                 }}
//               >
//                 <IconButton
//                   color="secondary"
//                   onClick={() => remove(index)}
//                   size="large"
//                 >
//                   <Remove />
//                 </IconButton>
//                 <IconButton
//                   color="primary"
//                   onClick={() => append({ primaryArtistName: "", _id: "" })}
//                   size="large"
//                 >
//                   <Add />
//                 </IconButton>
//               </div>
//             </Grid>
//           </Grid>
//         ))}
//       </>
//     );
//   };

//   return (
//     <Container>
//       <Card>
//         <CardContent>
//           <form onSubmit={handleSubmit(handleSubmitWithConditions)}>
//             <Grid container spacing={3}>
//               <div className="flex justify-around items-center w-full p-3">
//                 <div className="image_upload flex items-center justify-center flex-col p-3">
//                   <h4 className="mb-2 text-sm font-semibold">Upload Cover</h4>
//                   <p className="mb-2 text-xs">
//                     Please ensure that your cover meets the following <br />
//                     specifications: the image size should be 1920 by 1080 <br />
//                     pixels, and the format must be in JPG.
//                   </p>
//                   {thumbnail ? (
//                     <div className="relative w-3/4">
//                       <img
//                         //@ts-ignore
//                         src={thumbnail ? URL.createObjectURL(thumbnail) : null}
//                         alt="PROFILE IMAGE"
//                         className="w-[350px] h-[200px]"
//                       />
//                       <button
//                         type="button"
//                         className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
//                         onClick={handleThumbnailRemoveImage}
//                       >
//                         <MdClose />
//                       </button>
//                     </div>
//                   ) : (
//                     <label
//                       htmlFor="thumbnail"
//                       className="upload w-[350px] hover:bg-green-100 transition flex justify-center shadow-md rounded-md p-12 text-5xl cursor-pointer"
//                     >
//                       <input
//                         id="thumbnail"
//                         type="file"
//                         accept="image/*"
//                         name="thumbnail"
//                         style={{ display: "none" }}
//                         onChange={handleThumbnailUpload}
//                         required
//                       />
//                       <PhotoCamera
//                         style={{ fontSize: 100, color: "#03008D" }}
//                       />
//                     </label>
//                   )}
//                   {thumbnailError && (
//                     <p style={{ color: "red", marginTop: "10px" }}>
//                       {thumbnailError}
//                     </p>
//                   )}
//                 </div>
//                 <div className="flex flex-col items-center justify-center">
//                   <div className="image_upload flex items-center justify-center flex-col p-3">
//                     <h4 className="mb-2 text-sm font-semibold">
//                       Upload Your Video
//                     </h4>
//                     <p className="mb-2 text-xs">
//                       We recommended mp4 video format & must be without any logo
//                     </p>
//                     {videoFile ? (
//                       <div className="relative">
//                         <video
//                           //@ts-ignore
//                           src={videoFile ? URL.createObjectURL(videoFile) : ""}
//                           className="w-[350px] h-[200px]"
//                           controls
//                         />
//                         <button
//                           type="button"
//                           className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
//                           onClick={handleVideoRemove}
//                         >
//                           <MdClose />
//                         </button>
//                       </div>
//                     ) : (
//                       <label
//                         htmlFor="video"
//                         className="upload w-[350px] hover:bg-green-100 transition flex justify-center shadow-md rounded-md p-12 text-5xl cursor-pointer"
//                       >
//                         <input
//                           id="video"
//                           type="file"
//                           accept="video/*"
//                           name="video"
//                           style={{ display: "none" }}
//                           onChange={handleVideoUpload}
//                           required
//                         />
//                         <YouTube style={{ fontSize: 100, color: "#03008D" }} />
//                       </label>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <Grid item xs={12} md={6}>
//                 <Controller
//                   name="videoType"
//                   control={control}
//                   render={({ field }) => (
//                     <FormControl
//                       fullWidth
//                       required
//                       variant="outlined"
//                       margin="normal"
//                     >
//                       <InputLabel>Video Type</InputLabel>
//                       <Select {...field} label="Video Type" required>
//                         <MenuItem value="music-video">Music Video</MenuItem>
//                         <MenuItem value="entertainment">Entertainment</MenuItem>
//                         <MenuItem value="lyrical-video">Lyrical Video</MenuItem>
//                       </Select>
//                     </FormControl>
//                   )}
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <Controller
//                   name="title"
//                   control={control}
//                   render={({ field }) => (
//                     <TextField
//                       {...field}
//                       fullWidth
//                       label="Title"
//                       variant="outlined"
//                       margin="normal"
//                       required
//                     />
//                   )}
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 {renderArrayFields(
//                   "primaryArtist",
//                   "Primary Artist",
//                   "name",
//                   true
//                 )}
//               </Grid>

//               <Grid item xs={12}>
//                 <Controller
//                   name="label"
//                   control={control}
//                   render={({ field }) => (
//                     <Autocomplete
//                       {...field}
//                       options={labelOptions}
//                       getOptionLabel={(option) => option.label || ""}
//                       value={
//                         labelOptions.find(
//                           (option: any, value: any) =>
//                             option.value === value.label
//                         ) || null
//                       }
//                       onChange={(event, value) => {
//                         field.onChange(value?.label || "");
//                         setValue("label", value?.value || null);
//                       }}
//                       renderInput={(params) => (
//                         <TextField
//                           {...params}
//                           fullWidth
//                           label="Label"
//                           variant="outlined"
//                           margin="normal"
//                           required
//                         />
//                       )}
//                       freeSolo
//                     />
//                   )}
//                 />
//               </Grid>

//               <Grid item xs={12} md={6}>
//                 <Autocomplete
//                   options={genres.map((genre) => genre.name)}
//                   getOptionLabel={(option) => option}
//                   value={selectedGenre}
//                   onChange={handleGenreChange}
//                   renderInput={(params) => (
//                     <TextField
//                       {...params}
//                       fullWidth
//                       label="Genre"
//                       variant="outlined"
//                       margin="normal"
//                       required
//                     />
//                   )}
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <Autocomplete
//                   options={getSubgenres()}
//                   getOptionLabel={(option) => option}
//                   value={selectedSubgenre}
//                   onChange={handleSubgenreChange}
//                   renderInput={(params) => (
//                     <TextField
//                       {...params}
//                       fullWidth
//                       required
//                       label="Subgenre"
//                       variant="outlined"
//                       margin="normal"
//                     />
//                   )}
//                 />
//               </Grid>

//               {/* <Grid item xs={12}>
//                 <Controller
//                   name="language"
//                   control={control}
//                   render={({ field }) => (
//                     <TextField
//                       {...field}
//                       fullWidth
//                       label="Language"
//                       variant="outlined"
//                       margin="normal"
//                       required
//                     />
//                   )}
//                 />
//               </Grid> */}
//               <Grid item xs={12}>
//                 <Controller
//                   name="language"
//                   control={control}
//                   render={({ field }) => (
//                     <TextField
//                       {...field}
//                       fullWidth
//                       select
//                       required
//                       variant="outlined"
//                       label="Language"
//                       InputLabelProps={{ shrink: true }}
//                     >
//                       {!field.value && (
//                         <MenuItem value="">Select a language</MenuItem>
//                       )}
//                       {allLanguage.map((language) => (
//                         <MenuItem key={language} value={language}>
//                           {language}
//                         </MenuItem>
//                       ))}
//                     </TextField>
//                   )}
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <Controller
//                   name="isrc"
//                   control={control}
//                   render={({ field }) => (
//                     <TextField
//                       {...field}
//                       fullWidth
//                       label="ISRC"
//                       variant="outlined"
//                       margin="normal"
//                     />
//                   )}
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <Controller
//                   name="upc"
//                   control={control}
//                   render={({ field }) => (
//                     <TextField
//                       {...field}
//                       fullWidth
//                       label="UPC"
//                       variant="outlined"
//                       margin="normal"
//                     />
//                   )}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Controller
//                   name="description"
//                   control={control}
//                   render={({ field }) => (
//                     <TextField
//                       {...field}
//                       fullWidth
//                       label="Description"
//                       variant="outlined"
//                       margin="normal"
//                       multiline
//                       rows={4}
//                       required
//                     />
//                   )}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Controller
//                   name="storeReleaseDate"
//                   control={control}
//                   render={({ field }) => (
//                     <TextField
//                       {...field}
//                       fullWidth
//                       label="Release Date"
//                       variant="outlined"
//                       margin="normal"
//                       type="date"
//                       InputLabelProps={{ shrink: true }}
//                       required
//                     />
//                   )}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                   fullWidth
//                 >
//                   <UploadIcon className="pr-2" size={40} />
//                   {isLoading ? "Uploading..." : "Upload Video"}
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </CardContent>
//       </Card>
//       <Dialog
//         open={openModal}
//         onClose={handleCloseModal}
//         maxWidth="sm"
//         fullWidth
//       >
//         <DialogTitle>
//           <Typography variant="h6">Terms & Conditions</Typography>
//           <Typography variant="subtitle1">
//             Please confirm that you have understood and that you agree to the
//             following Terms & Conditions, and delivery guidelines.
//           </Typography>
//         </DialogTitle>
//         <DialogContent>
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={conditionsAccepted.condition1}
//                 onChange={handleAcceptCondition("condition1")}
//                 color="primary"
//               />
//             }
//             label={
//               <Typography variant="body1">
//                 I understand and agree to the ISRC Terms & Conditions.
//                 <Typography variant="body2">
//                   If you asked Be Musix to generate your ISRC codes, you hereby
//                   agree to{" "}
//                   <Link to="https://bemusix.com/" target="_blank">
//                     Be Musix's conditions for generating ISRCs.
//                   </Link>
//                 </Typography>
//               </Typography>
//             }
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={conditionsAccepted.condition2}
//                 onChange={handleAcceptCondition("condition2")}
//                 color="primary"
//               />
//             }
//             label={
//               <Typography variant="body1">
//                 I understand and agree to the Youtube Content Guidelines.
//                 <Typography variant="body2">
//                   Some content cannot be safely distributed and monetized on the
//                   platform. Please be sure you have read and follow the{" "}
//                   <Link to="https://bemusix.com/" target="_blank">
//                     Youtube Content Guidelines.
//                   </Link>
//                 </Typography>
//               </Typography>
//             }
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={conditionsAccepted.condition3}
//                 onChange={handleAcceptCondition("condition3")}
//                 color="primary"
//               />
//             }
//             label={
//               <Typography variant="body1">
//                 I understand and agree to the Be Musix Content Delivery
//                 Guidelines for Audio Stores.
//                 <Typography variant="body2">
//                   Some content is not eligible to be distributed on Apple Music,
//                   Spotify, and Youtube Audio Fingerprint. Please be sure you
//                   have read and understand the{" "}
//                   <Link to="https://bemusix.com/" target="_blank">
//                     Be Musix Content Delivery Guidelines for Audio Stores.
//                   </Link>
//                 </Typography>
//               </Typography>
//             }
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseModal} color="primary" variant="outlined">
//             Cancel
//           </Button>
//           <Button
//             onClick={handleSubmit(handleSubmitWithConditions)}
//             color="primary"
//             variant="contained"
//             disabled={
//               !conditionsAccepted.condition1 ||
//               !conditionsAccepted.condition2 ||
//               !conditionsAccepted.condition3 ||
//               isLoading
//             }
//           >
//             {isLoading ? "Uploading..." : "Agree and Submit"}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default UploadVideo;
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useEffect, useState } from "react";
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
  Container,
  Autocomplete,
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  FormControlLabel,
  Checkbox,
  DialogActions,
  LinearProgress,
} from "@mui/material";
import { Add, Remove, PhotoCamera, YouTube } from "@mui/icons-material";
import { MdClose } from "react-icons/md";
import { genres } from "@/MockData/MockData";
import { UploadIcon } from "lucide-react";
import {
  useGetArtistsQuery,
  useGetApprovedLabelsQuery,
} from "@/redux/slices/ArtistAndLabel/artistLabelApi";
import { useUploadVideoMutation } from "@/redux/slices/uploadVideoAudio/uploadVideoAudioApi";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { allLanguage } from "@/utils/languages";
import axios from "axios";
import { imageURL } from "@/redux/api/baseApi";

const UploadVideo = () => {
  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      video: null,
      thumbnail: null,
      videoType: "",
      title: "",
      primaryArtist: [{ primaryArtistName: "", _id: "" }],
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
  const [uploadProgress, setUploadProgress] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [conditionsAccepted, setConditionsAccepted] = useState({
    condition1: false,
    condition2: false,
    condition3: false,
  });
  const [thumbnail, setThumbnail] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailError, setThumbnailError] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedSubgenre, setSelectedSubgenre] = useState("");
  const navigate = useNavigate();
  const [uploadVideo, { isLoading }] = useUploadVideoMutation();

  const { data: labelData } = useGetApprovedLabelsQuery({});
  const { data: artistData } = useGetArtistsQuery({});

  const artistOptions =
    //@ts-ignore
    artistData?.data?.data?.map((artist: any) => ({
      label: artist.primaryArtistName,
      value: artist._id,
    })) || [];

  const labelOptions =
    //@ts-ignore
    labelData?.data?.data?.map((label: any) => ({
      label: label.labelName,
      value: label._id,
    })) || [];
  useEffect(() => {
    localStorage.removeItem("releaseFormData");
    localStorage.removeItem("tracksInformation");
  }, []);
  const handleSubmitWithConditions = (data: any) => {
    if (
      conditionsAccepted.condition1 &&
      conditionsAccepted.condition2 &&
      conditionsAccepted.condition3
    ) {
      onSubmit(data);
    } else {
      setOpenModal(true);
    }
  };
  const onSubmit = async (data: any) => {
    if (
      !conditionsAccepted.condition1 ||
      !conditionsAccepted.condition2 ||
      !conditionsAccepted.condition3
    ) {
      setOpenModal(true);
      return;
    }
    setOpenModal(false);

    try {
      const formData = new FormData();
      if (videoFile) {
        formData.append("video", videoFile);
      }
      if (thumbnail) {
        formData.append("image", thumbnail);
      }

      formData.append("videoType", data.videoType);
      formData.append("title", data.title);
      formData.append("label", data.label);
      formData.append("genre", selectedGenre);
      formData.append("subGenre", selectedSubgenre);
      formData.append("language", data.language);
      formData.append("isrc", data.isrc);
      formData.append("upc", data.upc);
      formData.append("description", data.description);
      formData.append("storeReleaseDate", data.storeReleaseDate);

      const formattedPrimaryArtists = data.primaryArtist.map(
        (artist: any) => artist._id
      );

      formData.append("primaryArtist", JSON.stringify(formattedPrimaryArtists));
      // const res = await uploadVideo(formData);
      const res = await axios.post(`${imageURL}/video/upload`, formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(progress);
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (res?.data?.success === true) {
        toast.success("Video Upload Successful");
        navigate("/my-uploads/pending-videos");
      }
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleAcceptCondition = (condition: string) => (event: any) => {
    setConditionsAccepted({
      ...conditionsAccepted,
      [condition]: event.target.checked,
    });
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
      if (file.type !== "image/jpeg") {
        setThumbnailError("Please upload a JPG image.");
        return;
      }

      const img = new Image();
      const objectUrl = URL.createObjectURL(file);

      img.onload = () => {
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
                name={`${fieldArrayName}[${index}].primaryArtistName`}
                control={control}
                render={({ field }) =>
                  isAutocomplete ? (
                    //@ts-ignore
                    <Autocomplete
                      {...field}
                      options={artistOptions.map((option: any) => option.label)}
                      getOptionLabel={(option) => option || ""}
                      isOptionEqualToValue={(option, value) => option === value}
                      onChange={(event, value) => {
                        field.onChange(value);
                        const selectedArtist = artistOptions.find(
                          (artist: any) => artist.label === value
                        );
                        setValue(
                          //@ts-ignore
                          `${fieldArrayName}[${index}]._id`,
                          selectedArtist?.value || null
                        );
                      }}
                      renderInput={(params) => (
                        <TextField
                          required
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
                  onClick={() => append({ primaryArtistName: "", _id: "" })}
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
          <form onSubmit={handleSubmit(handleSubmitWithConditions)}>
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
                      <PhotoCamera
                        style={{ fontSize: 100, color: "#03008D" }}
                      />
                    </label>
                  )}
                  {thumbnailError && (
                    <p style={{ color: "red", marginTop: "10px" }}>
                      {thumbnailError}
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="image_upload flex items-center justify-center flex-col p-3">
                    <h4 className="mb-2 text-sm font-semibold">
                      Upload Your Video
                    </h4>
                    <p className="mb-2 text-xs">
                      We recommended mp4 video format & must be without any logo
                    </p>
                    {videoFile ? (
                      <div className="relative">
                        <video
                          //@ts-ignore
                          src={videoFile ? URL.createObjectURL(videoFile) : ""}
                          className="w-[350px] h-[200px]"
                          controls
                        />
                        <button
                          type="button"
                          className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                          onClick={handleVideoRemove}
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
                        <YouTube style={{ fontSize: 100, color: "#03008D" }} />
                      </label>
                    )}
                  </div>
                </div>
              </div>
              <Grid item xs={12} md={6}>
                <Controller
                  name="videoType"
                  control={control}
                  render={({ field }) => (
                    <FormControl
                      fullWidth
                      required
                      variant="outlined"
                      margin="normal"
                    >
                      <InputLabel>Video Type</InputLabel>
                      <Select {...field} label="Video Type" required>
                        <MenuItem value="music-video">Music Video</MenuItem>
                        <MenuItem value="entertainment">Entertainment</MenuItem>
                        <MenuItem value="lyrical-video">Lyrical Video</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Title"
                      variant="outlined"
                      margin="normal"
                      required
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                {renderArrayFields(
                  "primaryArtist",
                  "Primary Artist",
                  "name",
                  true
                )}
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="label"
                  control={control}
                  render={({ field }) => (
                    <Autocomplete
                      {...field}
                      options={labelOptions}
                      getOptionLabel={(option) => option.label || ""}
                      value={
                        labelOptions.find(
                          (option: any, value: any) =>
                            option.value === value.label
                        ) || null
                      }
                      onChange={(event, value) => {
                        field.onChange(value?.label || "");
                        setValue("label", value?.value || null);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          label="Label"
                          variant="outlined"
                          margin="normal"
                          required
                        />
                      )}
                      freeSolo
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Autocomplete
                  options={genres.map((genre) => genre.name)}
                  getOptionLabel={(option) => option}
                  value={selectedGenre}
                  onChange={handleGenreChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      label="Genre"
                      variant="outlined"
                      margin="normal"
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  options={getSubgenres()}
                  getOptionLabel={(option) => option}
                  value={selectedSubgenre}
                  onChange={handleSubgenreChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      required
                      label="Subgenre"
                      variant="outlined"
                      margin="normal"
                    />
                  )}
                />
              </Grid>

              {/* <Grid item xs={12}>
                <Controller
                  name="language"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Language"
                      variant="outlined"
                      margin="normal"
                      required
                    />
                  )}
                />
              </Grid> */}
              <Grid item xs={12}>
                <Controller
                  name="language"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      select
                      required
                      variant="outlined"
                      label="Language"
                      InputLabelProps={{ shrink: true }}
                    >
                      {!field.value && (
                        <MenuItem value="">Select a language</MenuItem>
                      )}
                      {allLanguage.map((language) => (
                        <MenuItem key={language} value={language}>
                          {language}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name="isrc"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="ISRC"
                      variant="outlined"
                      margin="normal"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name="upc"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="UPC"
                      variant="outlined"
                      margin="normal"
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
                      margin="normal"
                      multiline
                      rows={4}
                      required
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
                      label="Release Date"
                      variant="outlined"
                      margin="normal"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <LinearProgress
                  className="py-2 my-2"
                  variant="determinate"
                  value={uploadProgress}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  <UploadIcon className="pr-2" size={40} />
                  {isLoading ? "Uploading..." : "Upload Video"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Typography variant="h6">Terms & Conditions</Typography>
          <Typography variant="subtitle1">
            Please confirm that you have understood and that you agree to the
            following Terms & Conditions, and delivery guidelines.
          </Typography>
        </DialogTitle>
        <DialogContent>
          <FormControlLabel
            control={
              <Checkbox
                checked={conditionsAccepted.condition1}
                onChange={handleAcceptCondition("condition1")}
                color="primary"
              />
            }
            label={
              <Typography variant="body1">
                I understand and agree to the ISRC Terms & Conditions.
                <Typography variant="body2">
                  If you asked Be Musix to generate your ISRC codes, you hereby
                  agree to{" "}
                  <Link to="https://bemusix.com/" target="_blank">
                    Be Musix's conditions for generating ISRCs.
                  </Link>
                </Typography>
              </Typography>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={conditionsAccepted.condition2}
                onChange={handleAcceptCondition("condition2")}
                color="primary"
              />
            }
            label={
              <Typography variant="body1">
                I understand and agree to the Youtube Content Guidelines.
                <Typography variant="body2">
                  Some content cannot be safely distributed and monetized on the
                  platform. Please be sure you have read and follow the{" "}
                  <Link to="https://bemusix.com/" target="_blank">
                    Youtube Content Guidelines.
                  </Link>
                </Typography>
              </Typography>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={conditionsAccepted.condition3}
                onChange={handleAcceptCondition("condition3")}
                color="primary"
              />
            }
            label={
              <Typography variant="body1">
                I understand and agree to the Be Musix Content Delivery
                Guidelines for Audio Stores.
                <Typography variant="body2">
                  Some content is not eligible to be distributed on Apple Music,
                  Spotify, and Youtube Audio Fingerprint. Please be sure you
                  have read and understand the{" "}
                  <Link to="https://bemusix.com/" target="_blank">
                    Be Musix Content Delivery Guidelines for Audio Stores.
                  </Link>
                </Typography>
              </Typography>
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit(handleSubmitWithConditions)}
            color="primary"
            variant="contained"
            disabled={
              !conditionsAccepted.condition1 ||
              !conditionsAccepted.condition2 ||
              !conditionsAccepted.condition3 ||
              isLoading
            }
          >
            {isLoading ? "Uploading..." : "Agree and Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default UploadVideo;
