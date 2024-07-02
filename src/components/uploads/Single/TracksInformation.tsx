// /* eslint-disable @typescript-eslint/ban-ts-comment */
// import React, { useCallback, useState } from "react";
// import {
//   TextField,
//   Box,
//   IconButton,
//   Autocomplete,
//   Container,
//   Grid,
// } from "@mui/material";

// import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

// const TracksInformation = ({ data, onChange }: any) => {
//   const [formData, setFormData] = useState({
//     contentType: "",
//     primaryTrackType: "",
//     secondaryTrackType: "",
//     instrumental: "",
//     title: "",
//     remixer: "",
//     author: "",
//     composer: "",
//     arranger: "",
//     producer: "",
//     publisher: "",
//     isrc: "",
//     askToGenerateISRC: "",
//     price: "",
//     parentalAdvisory: "",
//     previewStart: "",
//     trackTitleLanguage: "",
//     lyricsLanguage: "",
//     lyrics: "",
//     additionalFields: [],
//   });
//   const [additionalFields, setAdditionalFields] = useState([]);

//   const handleRemoveField = (index: any) => {
//     setAdditionalFields(additionalFields.filter((_, i) => i !== index));
//   };

//   const handleFieldChange = (index: any, key: any, value: any) => {
//     const updatedFields = [...additionalFields];
//     //@ts-ignore
//     updatedFields[index][key] = value;
//     setAdditionalFields(updatedFields);
//   };
//   const handleChange = useCallback(
//     (e: any) => {
//       const { name, value } = e.target;
//       onChange("trackDetails", { ...data.trackDetails, [name]: value });
//     },
//     [onChange, data.trackDetails]
//   );
//   return (
//     <Container maxWidth="md">
//       <form>
//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={6}>
//             <Autocomplete
//               fullWidth
//               options={["Audio", "Video"]}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   onChange={handleChange}
//                   label="Content Type"
//                   variant="outlined"
//                 />
//               )}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <Autocomplete
//               fullWidth
//               options={["Music"]}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   onChange={handleChange}
//                   label="Primary Track Type"
//                   variant="outlined"
//                 />
//               )}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <Autocomplete
//               fullWidth
//               options={[
//                 "Original",
//                 "Karaoke",
//                 "Medley",
//                 "Cover",
//                 "Cover by cover band",
//               ]}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   onChange={handleChange}
//                   label="Secondary Track Type"
//                   variant="outlined"
//                 />
//               )}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <Autocomplete
//               fullWidth
//               options={["Yes", "No"]}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   onChange={handleChange}
//                   label="Instrumental"
//                   variant="outlined"
//                 />
//               )}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               onChange={handleChange}
//               fullWidth
//               variant="outlined"
//               label="Title"
//               required
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               onChange={handleChange}
//               fullWidth
//               variant="outlined"
//               label="Remixer"
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               onChange={handleChange}
//               fullWidth
//               variant="outlined"
//               label="Author"
//               required
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               onChange={handleChange}
//               fullWidth
//               variant="outlined"
//               label="Composer"
//               required
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               onChange={handleChange}
//               fullWidth
//               variant="outlined"
//               label="Arranger"
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               onChange={handleChange}
//               fullWidth
//               variant="outlined"
//               label="Producer"
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               onChange={handleChange}
//               fullWidth
//               variant="outlined"
//               label="Publisher"
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               onChange={handleChange}
//               fullWidth
//               variant="outlined"
//               label="ISRC"
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <Autocomplete
//               fullWidth
//               options={["Yes", "No"]}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   onChange={handleChange}
//                   label="Ask to generate an ISRC"
//                   variant="outlined"
//                 />
//               )}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField fullWidth variant="outlined" label="Price" required />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <Autocomplete
//               fullWidth
//               options={["Yes", "No", "Cleaned"]}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   onChange={handleChange}
//                   label="Parental Advisory"
//                   variant="outlined"
//                 />
//               )}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField fullWidth variant="outlined" label="Preview Start" />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <Autocomplete
//               fullWidth
//               options={["English", "Spanish", "French", "German"]}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   onChange={handleChange}
//                   label="Track Title Language"
//                   variant="outlined"
//                 />
//               )}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <Autocomplete
//               fullWidth
//               options={["English", "Spanish", "French", "German"]}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   onChange={handleChange}
//                   label="Lyrics Language"
//                   variant="outlined"
//                 />
//               )}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               onChange={handleChange}
//               variant="outlined"
//               label="Lyrics"
//               multiline
//               rows={4}
//             />
//           </Grid>

//           {additionalFields.map((field, index) => (
//             <Grid item xs={12} sm={6} key={index}>
//               <Box display="flex" alignItems="center">
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   margin="normal"
//                   label="Field Type"
//                   //@ts-ignore
//                   value={field.type}
//                   onChange={(e) =>
//                     handleFieldChange(index, "type", e.target.value)
//                   }
//                   sx={{ mr: 1 }}
//                 />
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   margin="normal"
//                   label="Field Value"
//                   //@ts-ignore
//                   value={field.value}
//                   onChange={(e) =>
//                     handleFieldChange(index, "value", e.target.value)
//                   }
//                   sx={{ mr: 1 }}
//                 />
//                 <IconButton onClick={() => handleRemoveField(index)}>
//                   <RemoveCircleOutlineIcon />
//                 </IconButton>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </form>
//     </Container>
//   );
// };

// export default TracksInformation;
import React, { useEffect } from "react";
import { TextField, Autocomplete, Container, Grid } from "@mui/material";

const TracksInformation = ({ data, onChange }: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange("trackDetails", { ...data.trackDetails, [name]: value });
  };

  useEffect(() => {
    // Ensure any local state changes are reflected in the parent component
    onChange("trackDetails", data.trackDetails);
  }, [data.trackDetails]);

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
              options={["Music"]}
              value={data.trackDetails.primaryTrackType}
              onChange={(e, value) =>
                onChange("trackDetails", {
                  ...data.trackDetails,
                  primaryTrackType: value,
                })
              }
              renderInput={(params) => (
                <TextField
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
              name="lyrics"
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default TracksInformation;
