// /* eslint-disable @typescript-eslint/ban-ts-comment */
// import React, { useState } from "react";
// import {
//   Grid,
//   TextField,
//   Box,
//   Button,
//   Container,
//   Typography,
//   IconButton,
// } from "@material-ui/core";
// import { MdClose } from "react-icons/md";
// import { BsCloudUpload } from "react-icons/bs";
// import AudiotrackIcon from "@mui/icons-material/Audiotrack";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
// import Autocomplete from "@mui/material/Autocomplete";
// import Checkbox from "@mui/material/Checkbox";
// import FormControlLabel from "@mui/material/FormControlLabel";

// const genres = ["Rock", "Pop", "Jazz"];
// const subgenres = ["Classic Rock", "Hard Rock"];
// const formats = ["CD", "Vinyl"];
// const labels = ["Label 1", "Label 2"];
// const artists = ["Artist 1", "Artist 2", "Artist 3"];
// const years = Array.from(
//   new Array(50),
//   (val, index) => new Date().getFullYear() - index
// ).map(String);

// const AlbumAudioDetails = ({ data, onChange }: any) => {
//   const [songs, setSongs] = useState<any[]>([]);
//   const [coverImage, setCoverImage] = useState<File | null>(null);
//   const [audioFiles, setAudioFiles] = useState<
//     Array<{ file: File; id: number }>
//   >([]);

//   const [primaryArtists, setPrimaryArtists] = useState<string[]>([""]);
//   const [featuringArtists, setFeaturingArtists] = useState<string[]>([""]);

//   const handleCoverImageUpload = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === "image/jpeg") {
//       const img = new Image();
//       img.src = URL.createObjectURL(file);
//       img.onload = () => {
//         if (img.width === 1500 && img.height === 1500) {
//           setCoverImage(file);
//           onChange("audio", { ...data?.audio, coverImage: file });
//         } else {
//           alert("Image must be 1500x1500 pixels.");
//         }
//       };
//     } else {
//       alert("Only JPG format is accepted.");
//     }
//   };

//   const handleAudioUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setAudioFiles((prev) => [...prev, { file, id: Date.now() }]);
//     }
//   };

//   const handleCoverImageRemove = () => {
//     setCoverImage(null);
//     onChange("audio", { ...data?.audio, coverImage: null });
//   };

//   const handleAudioRemove = (id: number) => {
//     setAudioFiles((prev) => prev.filter((audio) => audio.id !== id));
//     setSongs((prev) => prev.filter((song) => song.id !== id));
//   };

//   const addPrimaryArtist = () => setPrimaryArtists([...primaryArtists, ""]);
//   const addFeaturingArtist = () =>
//     setFeaturingArtists([...featuringArtists, ""]);

//   const removePrimaryArtist = (index: number) => {
//     const newPrimaryArtists = [...primaryArtists];
//     newPrimaryArtists.splice(index, 1);
//     setPrimaryArtists(newPrimaryArtists);
//   };

//   const removeFeaturingArtist = (index: number) => {
//     const newFeaturingArtists = [...featuringArtists];
//     newFeaturingArtists.splice(index, 1);
//     setFeaturingArtists(newFeaturingArtists);
//   };

//   const handlePrimaryArtistChange = (index: number, value: string) => {
//     const newPrimaryArtists = [...primaryArtists];
//     newPrimaryArtists[index] = value;
//     setPrimaryArtists(newPrimaryArtists);
//   };

//   const handleFeaturingArtistChange = (index: number, value: string) => {
//     const newFeaturingArtists = [...featuringArtists];
//     newFeaturingArtists[index] = value;
//     setFeaturingArtists(newFeaturingArtists);
//   };

//   return (
//     <Container>
//       <Box mt={3}>
//         <Box mt={3} className="flex justify-center items-center w-full">
//           {/* Cover Image Uploader */}
//           <Box className="image_upload flex items-center justify-center flex-col p-3">
//             <Typography variant="h6" gutterBottom>
//               Upload Cover Image
//             </Typography>
//             {coverImage ? (
//               <Box position="relative" display="inline-block">
//                 <img
//                   src={URL.createObjectURL(coverImage)}
//                   alt="COVER IMAGE"
//                   style={{
//                     width: "300px",
//                     height: "300px",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <IconButton
//                   style={{ position: "absolute", top: 0, right: 0 }}
//                   onClick={handleCoverImageRemove}
//                 >
//                   <MdClose />
//                 </IconButton>
//               </Box>
//             ) : (
//               <label
//                 htmlFor="cover-image-upload"
//                 className="upload hover:bg-green-100 transition flex justify-center shadow-md rounded-md p-12 text-5xl cursor-pointer"
//               >
//                 <BsCloudUpload style={{ fontSize: 100 }} />
//                 <input
//                   id="cover-image-upload"
//                   type="file"
//                   accept="image/jpeg"
//                   style={{ display: "none" }}
//                   onChange={handleCoverImageUpload}
//                 />
//               </label>
//             )}
//           </Box>

//           {/* Audio File Uploader */}
//           <Box className="image_upload flex items-center justify-center flex-col p-3">
//             <Typography variant="h6" gutterBottom>
//               Upload Audio Files
//             </Typography>
//             <label
//               htmlFor="audio-upload"
//               className="upload hover:bg-green-100 transition flex justify-center shadow-md rounded-md p-12 text-5xl cursor-pointer"
//             >
//               <AudiotrackIcon style={{ fontSize: 100 }} />
//               <input
//                 id="audio-upload"
//                 type="file"
//                 accept="audio/*"
//                 style={{ display: "none" }}
//                 onChange={handleAudioUpload}
//               />
//             </label>
//           </Box>
//         </Box>

//         {audioFiles.map((audio, index) => (
//           <Box mt={4} key={audio.id} border={1} borderRadius={5} padding={2}>
//             <Box
//               display="flex"
//               justifyContent="space-between"
//               alignItems="center"
//             >
//               <Typography variant="h6">Audio {index + 1}</Typography>
//               <IconButton onClick={() => handleAudioRemove(audio.id)}>
//                 <MdClose />
//               </IconButton>
//             </Box>
//             <audio controls style={{ width: "100%", marginTop: "10px" }}>
//               <source src={URL.createObjectURL(audio.file)} type="audio/mpeg" />
//               Your browser does not support the audio tag.
//             </audio>
//             <Box mt={2}>
//               <Grid container spacing={3}>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     fullWidth
//                     label="Release Title"
//                     variant="outlined"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     label="Version/Subtitle"
//                     variant="outlined"
//                   />
//                 </Grid>
//                 {primaryArtists.map((artist, artistIndex) => (
//                   <Grid
//                     item
//                     xs={12}
//                     key={artistIndex}
//                     container
//                     alignItems="center"
//                     spacing={1}
//                   >
//                     <Grid item xs={11}>
//                       <Autocomplete
//                         options={artists}
//                         value={artist}
//                         onChange={(event, newValue) =>
//                           handlePrimaryArtistChange(artistIndex, newValue)
//                         }
//                         renderInput={(params) => (
//                           <TextField
//                             {...params}
//                             label="Primary Artist"
//                             variant="outlined"
//                           />
//                         )}
//                         freeSolo
//                       />
//                     </Grid>
//                     <Grid
//                       item
//                       xs={1}
//                       style={{ display: "flex", justifyContent: "center" }}
//                     >
//                       <IconButton
//                         onClick={() => removePrimaryArtist(artistIndex)}
//                         disabled={primaryArtists.length === 1}
//                       >
//                         <RemoveCircleOutlineIcon />
//                       </IconButton>
//                       {artistIndex === primaryArtists.length - 1 && (
//                         <IconButton onClick={addPrimaryArtist}>
//                           <AddCircleOutlineIcon />
//                         </IconButton>
//                       )}
//                     </Grid>
//                   </Grid>
//                 ))}
//                 {featuringArtists.map((artist, artistIndex) => (
//                   <Grid
//                     item
//                     xs={12}
//                     key={artistIndex}
//                     container
//                     alignItems="center"
//                     spacing={1}
//                   >
//                     <Grid item xs={11}>
//                       <Autocomplete
//                         options={artists}
//                         value={artist}
//                         onChange={(event, newValue) =>
//                           handleFeaturingArtistChange(artistIndex, newValue)
//                         }
//                         renderInput={(params) => (
//                           <TextField
//                             {...params}
//                             label="Featuring"
//                             variant="outlined"
//                           />
//                         )}
//                         freeSolo
//                       />
//                     </Grid>
//                     <Grid
//                       item
//                       xs={1}
//                       style={{ display: "flex", justifyContent: "center" }}
//                     >
//                       <IconButton
//                         onClick={() => removeFeaturingArtist(artistIndex)}
//                         disabled={featuringArtists.length === 1}
//                       >
//                         <RemoveCircleOutlineIcon />
//                       </IconButton>
//                       {artistIndex === featuringArtists.length - 1 && (
//                         <IconButton onClick={addFeaturingArtist}>
//                           <AddCircleOutlineIcon />
//                         </IconButton>
//                       )}
//                     </Grid>
//                   </Grid>
//                 ))}
//                 <Grid item xs={12}>
//                   <FormControlLabel
//                     control={<Checkbox />}
//                     label="Various Artists / Compilation"
//                   />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <Autocomplete
//                     options={genres}
//                     renderInput={(params) => (
//                       <TextField
//                         {...params}
//                         label="Genre"
//                         variant="outlined"
//                         required
//                         fullWidth
//                       />
//                     )}
//                   />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <Autocomplete
//                     options={subgenres}
//                     renderInput={(params) => (
//                       <TextField
//                         {...params}
//                         label="Subgenre"
//                         variant="outlined"
//                         required
//                         fullWidth
//                       />
//                     )}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Autocomplete
//                     options={labels}
//                     renderInput={(params) => (
//                       <TextField
//                         {...params}
//                         label="Label Name"
//                         variant="outlined"
//                         required
//                         fullWidth
//                       />
//                     )}
//                   />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <Autocomplete
//                     options={formats}
//                     renderInput={(params) => (
//                       <TextField
//                         {...params}
//                         label="Format"
//                         variant="outlined"
//                         required
//                         fullWidth
//                       />
//                     )}
//                   />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <TextField
//                     fullWidth
//                     label="Physical/Original Release Date"
//                     variant="outlined"
//                     type="date"
//                     InputLabelProps={{
//                       shrink: true,
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12} md={4}>
//                   <TextField fullWidth label="Ⓟ Line" variant="outlined" />
//                 </Grid>
//                 <Grid item xs={12} md={4}>
//                   <TextField fullWidth label="© Line" variant="outlined" />
//                 </Grid>
//                 <Grid item xs={12} md={4}>
//                   <Autocomplete
//                     options={years}
//                     renderInput={(params) => (
//                       <TextField
//                         {...params}
//                         label="Production Year"
//                         variant="outlined"
//                         required
//                         fullWidth
//                       />
//                     )}
//                   />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <TextField fullWidth label="UPC/EAN" variant="outlined" />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <TextField
//                     fullWidth
//                     label="Producer Catalogue Number"
//                     variant="outlined"
//                   />
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         ))}
//       </Box>
//     </Container>
//   );
// };

// export default AlbumAudioDetails;
