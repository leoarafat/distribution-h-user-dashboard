// // /* eslint-disable @typescript-eslint/ban-ts-comment */
// // import React, { useState, useEffect, useCallback } from "react";
// // import { Grid, TextField } from "@material-ui/core";
// // import { MdClose } from "react-icons/md";
// // import { BsCloudUpload } from "react-icons/bs";
// // import AudiotrackIcon from "@mui/icons-material/Audiotrack";
// // const AudioDetails = ({ data, onChange }: any) => {
// //   const [coverImage, setCoverImage] = useState(null);
// //   const [audioFile, setAudioFile] = useState(null);

// //   const handleCoverImageUpload = (event: any) => {
// //     const file = event.target.files[0];

// //     setCoverImage(file as any);
// //     onChange("audio", { ...data?.audio, coverImage: file });
// //   };

// //   const handleAudioUpload = (event: any) => {
// //     const file = event.target.files[0];
// //     setAudioFile(file as any);
// //     onChange("audio", { ...data?.audio, audioFile: file });
// //   };

// //   const handleCoverImageRemoveImage = () => {
// //     setCoverImage(null);
// //     onChange("audio", { ...data?.audio, coverImage: null });
// //   };

// //   const handleAudioRemove = () => {
// //     setAudioFile(null);
// //     onChange("audio", { ...data?.audio, audioFile: null });
// //   };

// //   return (
// //     <form>
// //       <Grid container spacing={3} alignItems="center">
// //         <div className="flex justify-center items-center w-full">
// //           <div className="image_upload flex items-center justify-center flex-col p-3">
// //             <h4 className="mb-2 text-sm">Upload Cover Image</h4>
// //             {coverImage ? (
// //               <div className="relative w-3/4">
// //                 <img
// //                   //@ts-ignore
// //                   src={coverImage ? URL.createObjectURL(coverImage) : null}
// //                   alt="COVER IMAGE"
// //                   className="w-[300px] h-[200px]"
// //                 />
// //                 <button
// //                   type="button"
// //                   className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
// //                   onClick={handleCoverImageRemoveImage}
// //                 >
// //                   <MdClose />
// //                 </button>
// //               </div>
// //             ) : (
// //               <label
// //                 htmlFor="cover-image-upload"
// //                 className="upload w-[230px] hover:bg-green-100 transition flex justify-center shadow-md rounded-md p-12 text-5xl cursor-pointer"
// //               >
// //                 <input
// //                   id="cover-image-upload"
// //                   type="file"
// //                   accept="image/*"
// //                   name="coverImage"
// //                   style={{ display: "none" }}
// //                   onChange={handleCoverImageUpload}
// //                   required
// //                 />
// //                 <BsCloudUpload style={{ fontSize: 100 }} />
// //               </label>
// //             )}
// //           </div>

// //           {/* Audio File Uploader */}
// //           <div className="image_upload flex items-center justify-center flex-col p-3">
// //             <h4 className="mb-2 text-sm">Upload Audio</h4>
// //             {audioFile ? (
// //               <div className="relative w-3/4">
// //                 <audio controls style={{ display: "block", marginTop: "10px" }}>
// //                   <source
// //                     src={URL.createObjectURL(audioFile)}
// //                     type="audio/mpeg"
// //                   />
// //                   Your browser does not support the audio tag.
// //                 </audio>
// //                 <button
// //                   type="button"
// //                   className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
// //                   onClick={handleAudioRemove}
// //                 >
// //                   <MdClose />
// //                 </button>
// //               </div>
// //             ) : (
// //               <label
// //                 htmlFor="audio-upload"
// //                 className="upload w-[230px] hover:bg-green-100 transition flex justify-center shadow-md rounded-md p-12 text-5xl cursor-pointer"
// //               >
// //                 <input
// //                   id="audio-upload"
// //                   type="file"
// //                   accept="audio/*"
// //                   name="audioFile"
// //                   style={{ display: "none" }}
// //                   onChange={handleAudioUpload}
// //                   required
// //                 />
// //                 <AudiotrackIcon style={{ fontSize: 100 }} />
// //               </label>
// //             )}
// //           </div>
// //         </div>
// //       </Grid>
// //     </form>
// //   );
// // };

// // export default AudioDetails;
// /* eslint-disable @typescript-eslint/ban-ts-comment */
// import React, { useState } from "react";
// import { Grid } from "@material-ui/core";
// import { MdClose } from "react-icons/md";
// import { BsCloudUpload } from "react-icons/bs";
// import AudiotrackIcon from "@mui/icons-material/Audiotrack";

// const AudioDetails = ({ data, onChange }: any) => {
//   const [coverImage, setCoverImage] = useState<File | null>(null);
//   const [audioFile, setAudioFile] = useState<File | null>(null);

//   const handleCoverImageUpload = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const file = event.target.files ? event.target.files[0] : null;
//     if (file) {
//       setCoverImage(file);
//       onChange("audio", { ...data?.audio, coverImage: file });
//     }
//   };

//   const handleAudioUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files ? event.target.files[0] : null;
//     if (file) {
//       setAudioFile(file);
//       onChange("audio", { ...data?.audio, audioFile: file });
//     }
//   };

//   const handleCoverImageRemoveImage = () => {
//     setCoverImage(null);
//     onChange("audio", { ...data?.audio, coverImage: null });
//   };

//   const handleAudioRemove = () => {
//     setAudioFile(null);
//     onChange("audio", { ...data?.audio, audioFile: null });
//   };

//   return (
//     <form>
//       <Grid container spacing={3} alignItems="center">
//         <div className="flex justify-center items-center w-full">
//           <div className="image_upload flex items-center justify-center flex-col p-3">
//             <h4 className="mb-2 text-sm">Upload Cover Image</h4>
//             {coverImage ? (
//               <div className="relative w-3/4">
//                 <img
//                   //@ts-ignore
//                   src={URL.createObjectURL(coverImage)}
//                   alt="Cover"
//                   className="w-[300px] h-[200px] object-cover rounded-md shadow-md"
//                 />
//                 <button
//                   type="button"
//                   className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 shadow-lg"
//                   onClick={handleCoverImageRemoveImage}
//                 >
//                   <MdClose size={20} />
//                 </button>
//               </div>
//             ) : (
//               <label
//                 htmlFor="cover-image-upload"
//                 className="upload w-[230px] hover:bg-green-100 transition flex justify-center shadow-md rounded-md p-12 text-5xl cursor-pointer"
//               >
//                 <input
//                   id="cover-image-upload"
//                   type="file"
//                   accept="image/*"
//                   name="coverImage"
//                   style={{ display: "none" }}
//                   onChange={handleCoverImageUpload}
//                   required
//                 />
//                 <BsCloudUpload style={{ fontSize: 100 }} />
//               </label>
//             )}
//           </div>

//           <div className="audio_upload flex items-center justify-center flex-col p-3">
//             <h4 className="mb-2 text-sm">Upload Audio</h4>
//             {audioFile ? (
//               <div className="relative w-3/4">
//                 <div className="audio-player flex items-center bg-gray-100 rounded-lg shadow-md p-2">
//                   <audio controls style={{ display: "block", width: "100%" }}>
//                     <source
//                       src={URL.createObjectURL(audioFile)}
//                       type="audio/mpeg"
//                     />
//                     Your browser does not support the audio tag.
//                   </audio>
//                   <button
//                     type="button"
//                     className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 shadow-lg"
//                     onClick={handleAudioRemove}
//                   >
//                     <MdClose size={20} />
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <label
//                 htmlFor="audio-upload"
//                 className="upload w-[230px] hover:bg-green-100 transition flex justify-center shadow-md rounded-md p-12 text-5xl cursor-pointer"
//               >
//                 <input
//                   id="audio-upload"
//                   type="file"
//                   accept="audio/*"
//                   name="audioFile"
//                   style={{ display: "none" }}
//                   onChange={handleAudioUpload}
//                   required
//                 />
//                 <AudiotrackIcon style={{ fontSize: 100 }} />
//               </label>
//             )}
//           </div>
//         </div>
//       </Grid>
//     </form>
//   );
// };

// export default AudioDetails;
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { MdClose } from "react-icons/md";
import { BsCloudUpload } from "react-icons/bs";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";

const AudioDetails = ({ data, onChange }: any) => {
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);

  const handleCoverImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setCoverImage(file);
      onChange("audio", { ...data?.audio, coverImage: file });
    }
  };

  const handleAudioUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setAudioFile(file);
      onChange("audio", { ...data?.audio, audioFile: file });
    }
  };

  const handleCoverImageRemoveImage = () => {
    setCoverImage(null);
    onChange("audio", { ...data?.audio, coverImage: null });
  };

  const handleAudioRemove = () => {
    setAudioFile(null);
    onChange("audio", { ...data?.audio, audioFile: null });
  };

  return (
    <Box component="form">
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Upload Cover Image
              </Typography>
              {coverImage ? (
                <Box position="relative">
                  <CardMedia
                    component="img"
                    height="200"
                    image={URL.createObjectURL(coverImage)}
                    alt="Cover"
                    style={{ objectFit: "cover" }}
                  />
                  <IconButton
                    onClick={handleCoverImageRemoveImage}
                    style={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "white",
                    }}
                  >
                    <MdClose />
                  </IconButton>
                </Box>
              ) : (
                <label htmlFor="cover-image-upload">
                  <input
                    id="cover-image-upload"
                    type="file"
                    accept="image/*"
                    name="coverImage"
                    style={{ display: "none" }}
                    onChange={handleCoverImageUpload}
                    required
                  />
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="200px"
                    border="2px dashed #ccc"
                    borderRadius="8px"
                    style={{ cursor: "pointer" }}
                  >
                    <BsCloudUpload style={{ fontSize: 60 }} />
                  </Box>
                </label>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Upload Audio
              </Typography>
              {audioFile ? (
                <Box position="relative">
                  <audio controls style={{ width: "100%" }}>
                    <source
                      src={URL.createObjectURL(audioFile)}
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio tag.
                  </audio>
                  <IconButton
                    onClick={handleAudioRemove}
                    style={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "white",
                    }}
                  >
                    <MdClose />
                  </IconButton>
                </Box>
              ) : (
                <label htmlFor="audio-upload">
                  <input
                    id="audio-upload"
                    type="file"
                    accept="audio/*"
                    name="audioFile"
                    style={{ display: "none" }}
                    onChange={handleAudioUpload}
                    required
                  />
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="200px"
                    border="2px dashed #ccc"
                    borderRadius="8px"
                    style={{ cursor: "pointer" }}
                  >
                    <AudiotrackIcon style={{ fontSize: 60 }} />
                  </Box>
                </label>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AudioDetails;
