// /* eslint-disable @typescript-eslint/ban-ts-comment */
// import { useCallback, useState } from "react";
// import {
//   Container,
//   Grid,
//   TextField,
//   Box,
//   Checkbox,
//   FormControlLabel,
//   IconButton,
// } from "@mui/material";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
// import Autocomplete from "@mui/material/Autocomplete";
// import { genres } from "@/MockData/MockData";
// import {
//   useGetArtistsQuery,
//   useGetLabelsQuery,
// } from "@/redux/slices/ArtistAndLabel/artistLabelApi";

// const formats = ["CD", "Vinyl"];

// const artists = ["Artist 1", "Artist 2", "Artist 3"];

// const years = Array.from(
//   new Array(50),
//   (val, index) => new Date().getFullYear() - index
// ).map(String);

// const ReleaseInformation = ({ data, onChange }) => {
//   const [primaryArtists, setPrimaryArtists] = useState([""]);
//   const [featuringArtists, setFeaturingArtists] = useState([""]);
//   const [selectedGenre, setSelectedGenre] = useState("");
//   const [selectedSubgenre, setSelectedSubgenre] = useState("");
//   const { data: labelData } = useGetLabelsQuery({});
//   const { data: artistData } = useGetArtistsQuery({});

//   const handleGenreChange = (event: any, value: any) => {
//     setSelectedGenre(value);
//     setSelectedSubgenre(""); // Reset subgenre when genre changes
//   };

//   const handleSubgenreChange = (event: any, value: any) => {
//     setSelectedSubgenre(value);
//   };

//   const getSubgenres = () => {
//     const genreObj = genres.find((genre) => genre.name === selectedGenre);
//     return genreObj ? genreObj.subgenres : [];
//   };
//   const addPrimaryArtist = () => setPrimaryArtists([...primaryArtists, ""]);
//   const addFeaturingArtist = () =>
//     setFeaturingArtists([...featuringArtists, ""]);

//   const removePrimaryArtist = (index: any) => {
//     const newPrimaryArtists = [...primaryArtists];
//     newPrimaryArtists.splice(index, 1);
//     setPrimaryArtists(newPrimaryArtists);
//   };

//   const removeFeaturingArtist = (index: any) => {
//     const newFeaturingArtists = [...featuringArtists];
//     newFeaturingArtists.splice(index, 1);
//     setFeaturingArtists(newFeaturingArtists);
//   };

//   const handlePrimaryArtistChange = (index: any, value: any) => {
//     const newPrimaryArtists = [...primaryArtists];
//     newPrimaryArtists[index] = value;
//     setPrimaryArtists(newPrimaryArtists);
//   };

//   const handleFeaturingArtistChange = (index: any, value: any) => {
//     const newFeaturingArtists = [...featuringArtists];
//     newFeaturingArtists[index] = value;
//     setFeaturingArtists(newFeaturingArtists);
//   };
//   const artistOptions =
//     artistData?.data?.data?.map((artist: any) => artist.primaryArtistName) ||
//     [];
//   const labelOptions =
//     labelData?.data?.data?.map((label: any) => label.labelName) || [];

//   const handleChange = useCallback(
//     (e: any) => {
//       const { name, value } = e.target;
//       onChange("releaseInformation", {
//         ...data.releaseInformation,
//         [name]: value,
//       });
//     },
//     [onChange, data.releaseInformation]
//   );
//   return (
//     <Container maxWidth="md">
//       <Box sx={{ my: 4 }}>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <TextField
//               required
//               fullWidth
//               label="Release Title"
//               variant="outlined"
//               placeholder="Please use version field to enter further info for the release"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Version/Subtitle"
//               variant="outlined"
//               placeholder="Use this field to add further details to your release title"
//             />
//           </Grid>
//           {primaryArtists.map((artist, index) => (
//             <Grid
//               item
//               xs={12}
//               key={index}
//               container
//               alignItems="center"
//               spacing={1}
//             >
//               <Grid item xs={12}>
//                 <Autocomplete
//                   options={artistOptions}
//                   getOptionLabel={(option) => option.name}
//                   value={artist}
//                   onChange={(event, newValue) =>
//                     handlePrimaryArtistChange(index, newValue)
//                   }
//                   renderInput={(params) => (
//                     <TextField
//                       {...params}
//                       label="Primary Artist"
//                       variant="outlined"
//                     />
//                   )}
//                   freeSolo
//                 />
//               </Grid>
//               <Grid item className="flex justify-between">
//                 <IconButton
//                   onClick={() => removePrimaryArtist(index)}
//                   disabled={primaryArtists.length === 1}
//                 >
//                   <RemoveCircleOutlineIcon />
//                 </IconButton>
//                 {index === primaryArtists.length - 1 && (
//                   <IconButton onClick={addPrimaryArtist}>
//                     <AddCircleOutlineIcon />
//                   </IconButton>
//                 )}
//               </Grid>
//             </Grid>
//           ))}
//           {featuringArtists.map((artist, index) => (
//             <Grid
//               item
//               xs={12}
//               key={index}
//               container
//               alignItems="center"
//               spacing={1}
//             >
//               <Grid item xs={12}>
//                 <Autocomplete
//                   options={artists}
//                   getOptionLabel={(option) => option.name}
//                   value={artist}
//                   onChange={(event, newValue) =>
//                     handleFeaturingArtistChange(index, newValue)
//                   }
//                   renderInput={(params) => (
//                     <TextField
//                       {...params}
//                       label="Featuring"
//                       variant="outlined"
//                     />
//                   )}
//                   freeSolo
//                 />
//               </Grid>
//               <Grid item xs={2}>
//                 <IconButton
//                   onClick={() => removeFeaturingArtist(index)}
//                   disabled={featuringArtists.length === 1}
//                 >
//                   <RemoveCircleOutlineIcon />
//                 </IconButton>
//                 {index === featuringArtists.length - 1 && (
//                   <IconButton onClick={addFeaturingArtist}>
//                     <AddCircleOutlineIcon />
//                   </IconButton>
//                 )}
//               </Grid>
//             </Grid>
//           ))}
//           <Grid item xs={12}>
//             <FormControlLabel
//               control={<Checkbox />}
//               label="Various Artists / Compilation"
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Autocomplete
//               // options={genres}
//               options={genres?.map((genre: any) => genre.name)}
//               getOptionLabel={(option) => option.name}
//               value={selectedGenre}
//               onChange={handleGenreChange}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   label="Genre"
//                   variant="outlined"
//                   required
//                   fullWidth
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Autocomplete
//               // options={subgenres}
//               //@ts-ignore
//               options={getSubgenres()}
//               getOptionLabel={(option) => option.name}
//               value={selectedSubgenre}
//               onChange={handleSubgenreChange}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   label="Subgenre"
//                   variant="outlined"
//                   required
//                   fullWidth
//                   disabled={!selectedGenre}
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Autocomplete
//               options={labelOptions}
//               getOptionLabel={(option) => option.name}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   label="Label Name"
//                   variant="outlined"
//                   required
//                   fullWidth
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Autocomplete
//               options={formats}
//               getOptionLabel={(option) => option.name}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   label="Format"
//                   variant="outlined"
//                   required
//                   fullWidth
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Physical/Original Release Date"
//               variant="outlined"
//               type="date"
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <TextField fullWidth label="Ⓟ Line" variant="outlined" />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <TextField fullWidth label="© Line" variant="outlined" />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Autocomplete
//               options={years}
//               getOptionLabel={(option) => option.name}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   label="Production Year"
//                   variant="outlined"
//                   required
//                   fullWidth
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="UPC/EAN" variant="outlined" />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Producer Catalogue Number"
//               variant="outlined"
//             />
//           </Grid>
//         </Grid>
//       </Box>
//     </Container>
//   );
// };

// export default ReleaseInformation;
import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  TextField,
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Autocomplete from "@mui/material/Autocomplete";
import { genres } from "@/MockData/MockData";
import {
  useGetArtistsQuery,
  useGetLabelsQuery,
} from "@/redux/slices/ArtistAndLabel/artistLabelApi";

const formats = ["CD", "Vinyl"];
const years = Array.from(
  new Array(50),
  (val, index) => new Date().getFullYear() - index
).map(String);

const ReleaseInformation = ({ data, onChange }) => {
  const [formData, setFormData] = useState({
    releaseTitle: "",
    version: "",
    primaryArtists: [""],
    featuringArtists: [""],
    variousArtists: false,
    genre: "",
    subgenre: "",
    label: "",
    format: "",
    releaseDate: "",
    pLine: "",
    cLine: "",
    productionYear: "",
    upc: "",
    catalogNumber: "",
  });

  const { data: labelData } = useGetLabelsQuery({});
  const { data: artistData } = useGetArtistsQuery({});

  const artistOptions =
    artistData?.data?.data?.map((artist: any) => artist.primaryArtistName) ||
    [];
  const labelOptions =
    labelData?.data?.data?.map((label: any) => label.labelName) || [];

  useEffect(() => {
    onChange("releaseInformation", formData);
  }, [formData]);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleGenreChange = (event: any, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      genre: value,
      subgenre: "",
    }));
  };

  const handleSubgenreChange = (event: any, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      subgenre: value,
    }));
  };

  const getSubgenres = () => {
    const genreObj = genres.find((genre) => genre.name === formData.genre);
    return genreObj ? genreObj.subgenres : [];
  };

  const addPrimaryArtist = () =>
    setFormData((prevData) => ({
      ...prevData,
      primaryArtists: [...prevData.primaryArtists, ""],
    }));

  const addFeaturingArtist = () =>
    setFormData((prevData) => ({
      ...prevData,
      featuringArtists: [...prevData.featuringArtists, ""],
    }));

  const removePrimaryArtist = (index: any) => {
    const newPrimaryArtists = [...formData.primaryArtists];
    newPrimaryArtists.splice(index, 1);
    setFormData((prevData) => ({
      ...prevData,
      primaryArtists: newPrimaryArtists,
    }));
  };

  const removeFeaturingArtist = (index: any) => {
    const newFeaturingArtists = [...formData.featuringArtists];
    newFeaturingArtists.splice(index, 1);
    setFormData((prevData) => ({
      ...prevData,
      featuringArtists: newFeaturingArtists,
    }));
  };

  const handlePrimaryArtistChange = (index: any, value: any) => {
    const newPrimaryArtists = [...formData.primaryArtists];
    newPrimaryArtists[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      primaryArtists: newPrimaryArtists,
    }));
  };

  const handleFeaturingArtistChange = (index: any, value: any) => {
    const newFeaturingArtists = [...formData.featuringArtists];
    newFeaturingArtists[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      featuringArtists: newFeaturingArtists,
    }));
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              label="Release Title"
              variant="outlined"
              placeholder="Please use version field to enter further info for the release"
              name="releaseTitle"
              value={formData.releaseTitle}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Version/Subtitle"
              variant="outlined"
              placeholder="Use this field to add further details to your release title"
              name="version"
              value={formData.version}
              onChange={handleChange}
            />
          </Grid>
          {formData.primaryArtists.map((artist, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={index}
              container
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={12}>
                <Autocomplete
                  options={artistOptions}
                  value={artist}
                  onChange={(event, newValue) =>
                    handlePrimaryArtistChange(index, newValue)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Primary Artist"
                      variant="outlined"
                    />
                  )}
                  freeSolo
                />
              </Grid>
              <Grid item className="flex justify-between">
                <IconButton
                  onClick={() => removePrimaryArtist(index)}
                  disabled={formData.primaryArtists.length === 1}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
                {index === formData.primaryArtists.length - 1 && (
                  <IconButton onClick={addPrimaryArtist}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          ))}
          {formData.featuringArtists.map((artist, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={index}
              container
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={12}>
                <Autocomplete
                  options={artistOptions}
                  value={artist}
                  onChange={(event, newValue) =>
                    handleFeaturingArtistChange(index, newValue)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Featuring"
                      variant="outlined"
                    />
                  )}
                  freeSolo
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  onClick={() => removeFeaturingArtist(index)}
                  disabled={formData.featuringArtists.length === 1}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
                {index === formData.featuringArtists.length - 1 && (
                  <IconButton onClick={addFeaturingArtist}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="variousArtists"
                  checked={formData.variousArtists}
                  onChange={handleChange}
                />
              }
              label="Various Artists / Compilation"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              options={genres?.map((genre: any) => genre.name)}
              value={formData.genre}
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
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              options={getSubgenres()}
              value={formData.subgenre}
              onChange={handleSubgenreChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Subgenre"
                  variant="outlined"
                  required
                  fullWidth
                  disabled={!formData.genre}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              options={labelOptions}
              value={formData.label}
              onChange={(event, newValue) =>
                setFormData((prevData) => ({
                  ...prevData,
                  label: newValue,
                }))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Label"
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              options={formats}
              value={formData.format}
              onChange={(event, newValue) =>
                setFormData((prevData) => ({
                  ...prevData,
                  format: newValue,
                }))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Format"
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Physical/Original Release Date"
              variant="outlined"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              name="releaseDate"
              value={formData.releaseDate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              options={years}
              value={formData.productionYear}
              onChange={(event, newValue) =>
                setFormData((prevData) => ({
                  ...prevData,
                  productionYear: newValue,
                }))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Production Year"
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Ⓟ Line"
              variant="outlined"
              name="pLine"
              value={formData.pLine}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="© Line"
              variant="outlined"
              name="cLine"
              value={formData.cLine}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="UPC/EAN"
              variant="outlined"
              name="upc"
              value={formData.upc}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Producer Catalogue Number"
              variant="outlined"
              name="catalogNumber"
              value={formData.catalogNumber}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ReleaseInformation;
