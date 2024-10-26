/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  TextField,
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Tooltip,
  Button,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Autocomplete from "@mui/material/Autocomplete";
import { genres } from "@/MockData/MockData";
import {
  useGetArtistsQuery,
  useGetApprovedLabelsQuery,
} from "@/redux/slices/ArtistAndLabel/artistLabelApi";
import { years } from "@/utils/languages";
import { useSearchParams } from "react-router-dom";
import { useGetDraftsSongQuery } from "@/redux/slices/myUploads/myUploadsApi";
import {
  AppleIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "lucide-react";
import { AddCircleOutline } from "@material-ui/icons";
import AddLabelModal from "@/components/ArtisLabelManagement/Label/AddLabelModa";
import AddArtistModal from "@/components/ArtisLabelManagement/Artist/AddArtistModal";

const formats: string[] = ["Single", "Album", "EP"];

interface ReleaseFormData {
  releaseTitle: string;
  version: string;
  primaryArtists: string[];
  featuringArtists: string[];
  variousArtists: boolean;
  genre: string;
  subgenre: string;
  label: string;
  format: string;
  releaseDate: string;
  pLine: string;
  cLine: string;
  productionYear: string;
  upc: string;
  catalogNumber: string;
}

interface Props {
  data: ReleaseFormData;
  onChange: (key: string, value: any) => void;
}

const ReleaseInformation: React.FC<Props> = ({ data, onChange }) => {
  const [formData, setFormData] = useState<ReleaseFormData>(() => {
    const storedData = localStorage.getItem("releaseFormData");
    if (storedData) {
      return JSON.parse(storedData);
    } else {
      return {
        releaseTitle: data.releaseTitle || "",
        version: data.version || "",
        primaryArtists: data.primaryArtists || [""],
        featuringArtists: data.featuringArtists || [""],
        variousArtists: data.variousArtists || false,
        genre: data.genre || "",
        subgenre: data.subgenre || "",
        label: data.label || "",
        format: data.format || "",
        releaseDate: data.releaseDate || "",
        pLine: data.pLine || "",
        cLine: data.cLine || "",
        productionYear: data.productionYear || "",
        upc: data.upc || "",
        catalogNumber: data.catalogNumber || "",
      };
    }
  });
  const { data: labelData } = useGetApprovedLabelsQuery({});
  const { data: artistData } = useGetArtistsQuery({});
  const [searchParams] = useSearchParams();

  const [open, setOpen] = useState(false);
  const [openArtist, setOpenArtist] = useState(false);

  const artistOptions =
    //@ts-ignore
    artistData?.data?.data?.map((artist: any) => ({
      label: artist.primaryArtistName,
      value: artist._id,
      socialLinks: {
        instagram: artist.primaryArtistInstagramId,
        facebook: artist.primaryArtistFacebookId,
        spotify: artist.primaryArtistSpotifyId,
        apple: artist.primaryArtistAppleId,
      },
    })) || [];

  const labelOptions =
    //@ts-ignore
    labelData?.data?.data?.map((label: any) => ({
      label: label.labelName,
      value: label._id,
    })) || [];

  useEffect(() => {
    localStorage.setItem("releaseFormData", JSON.stringify(formData));
    onChange("releaseInformation", formData);
  }, [formData]);
  // useEffect(() => {
  //   setFormData(draftData?.data);
  // }, [draftData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    // onChange("releaseInformation", { ...data.releaseInformation, [name]: value });
  };

  const handleGenreChange = (
    event: React.ChangeEvent<object>,
    value: string | null
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      genre: value || "",
      subgenre: "",
    }));
  };

  const handleSubgenreChange = (
    event: React.ChangeEvent<object>,
    value: string | null
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      subgenre: value || "",
    }));
  };

  const getSubgenres = () => {
    const genreObj = genres.find((genre) => genre.name === formData.genre);
    return genreObj ? genreObj.subgenres : [];
  };
  const showModal = () => {
    setOpen(true);
  };
  const showArtistModal = () => {
    setOpenArtist(true);
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

  const removePrimaryArtist = (index: number) => {
    const newPrimaryArtists = [...formData.primaryArtists];
    newPrimaryArtists.splice(index, 1);
    setFormData((prevData) => ({
      ...prevData,
      primaryArtists: newPrimaryArtists,
    }));
  };

  const removeFeaturingArtist = (index: number) => {
    const newFeaturingArtists = [...formData.featuringArtists];
    newFeaturingArtists.splice(index, 1);
    setFormData((prevData) => ({
      ...prevData,
      featuringArtists: newFeaturingArtists,
    }));
  };

  const handlePrimaryArtistChange = (index: number, value: any) => {
    const newPrimaryArtists = [...formData.primaryArtists];
    newPrimaryArtists[index] = value ? value.value : "";
    setFormData((prevData) => ({
      ...prevData,
      primaryArtists: newPrimaryArtists,
    }));
  };

  const handleFeaturingArtistChange = (index: number, value: any) => {
    const newFeaturingArtists = [...formData.featuringArtists];
    newFeaturingArtists[index] = value ? value.value : "";
    setFormData((prevData) => ({
      ...prevData,
      featuringArtists: newFeaturingArtists,
    }));
  };
  const handleLabelChange = (
    newValue: { label: string; value: string } | null
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      label: newValue ? newValue.value : "",
    }));
  };
  const renderSocialIcons = (socialLinks: any) => (
    <Box sx={{ paddingLeft: 1 }}>
      {socialLinks.instagram && (
        <Tooltip title="Instagram">
          <IconButton
            component="a"
            href={socialLinks.instagram}
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/arafatleo/image/upload/v1724052864/images_1_itgvfk.jpg"
              className="w-[20px] pl-[5px]"
              alt=""
            />
          </IconButton>
        </Tooltip>
      )}
      {socialLinks.facebook && (
        <Tooltip title="Facebook">
          <IconButton component="a" href={socialLinks.facebook} target="_blank">
            <img
              src="https://res.cloudinary.com/arafatleo/image/upload/v1724052864/pngtree-facebook-social-media-icon-png-image_6315968_nsae4o.png"
              className="w-[20px] pl-[5px]"
              alt=""
            />
          </IconButton>
        </Tooltip>
      )}
      {socialLinks.spotify && (
        <Tooltip title="Spotify">
          <IconButton component="a" href={socialLinks.spotify} target="_blank">
            <img
              src="https://res.cloudinary.com/arafatleo/image/upload/v1724052702/png-transparent-spotify-logo-spotify-computer-icons-podcast-music-apps-miscellaneous-angle-logo-thumbnail_awrfdl.png"
              className="w-[20px] pl-[5px]"
              alt=""
            />
          </IconButton>
        </Tooltip>
      )}
      {socialLinks.apple && (
        <Tooltip title="Apple Music">
          <IconButton component="a" href={socialLinks.apple} target="_blank">
            <img
              src="https://res.cloudinary.com/arafatleo/image/upload/v1724052864/154870_drnt3x.png"
              className="w-[20px] pl-[5px]"
              alt=""
            />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Tooltip
              title="Please enter a title for this release:
eg.: Appetite for Destruction, Thriller, etc..."
            >
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
            <TextField
              required
              fullWidth
              label="Release Title"
              variant="outlined"
              placeholder=" Please enter a title for this release: eg.: Appetite for Destruction, Thriller, etc..."
              name="releaseTitle"
              value={formData.releaseTitle}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Tooltip
              title="Please use version field to enter further information for the release.
eg.: Limited Edition, 25th Anniversary Edition, Karaoke Version, etc..."
            >
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
            <TextField
              // required
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
            <Grid item xs={12} md={6} key={index} container alignItems="center">
              <Grid item xs={12}>
                <Tooltip title="Select As Your Wish">
                  <span className="text-red-600 font-bold  cursor-pointer">
                    ?
                  </span>
                </Tooltip>
                <Autocomplete
                  options={artistOptions}
                  getOptionLabel={(option) => option.label}
                  value={
                    artistOptions.find(
                      (option: any) => option.value === artist
                    ) || null
                  }
                  onChange={(event, newValue) =>
                    handlePrimaryArtistChange(index, newValue)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      required
                      label="Primary Artist"
                      variant="outlined"
                    />
                  )}
                  renderOption={(props, option) => (
                    <Box
                      {...props}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span>{option.label}</span>
                      {renderSocialIcons(option.socialLinks)}
                    </Box>
                  )}
                  isOptionEqualToValue={(option, value) =>
                    option.value === value
                  }
                  freeSolo
                />
              </Grid>
              <Grid item className="flex justify-between">
                <IconButton
                  onClick={() => removePrimaryArtist(index)}
                  color="error"
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <IconButton onClick={addPrimaryArtist} color="primary">
                  <AddCircleOutlineIcon />
                </IconButton>
                <Button
                  sx={{
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    "& .MuiFilledInput-root": {
                      backgroundColor: "rgba(255, 255, 255, 0.85)",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                      },
                      "&.Mui-focused": {
                        backgroundColor: "rgba(255, 255, 255, 1)",
                      },
                    },
                    "& .MuiFormLabel-root": {
                      color: "#333",
                    },
                    "& .MuiInputBase-input": {
                      color: "#333",
                    },
                  }}
                  onClick={showArtistModal}
                >
                  Create Artist
                </Button>
              </Grid>
            </Grid>
          ))}
          {formData?.featuringArtists?.map((artist, index) => (
            <Grid item xs={12} md={6} key={index} container alignItems="center">
              <Grid item xs={12}>
                <Tooltip title="Select As Your Wish">
                  <span className="text-red-600 font-bold cursor-pointer">
                    ?
                  </span>
                </Tooltip>
                <Autocomplete
                  options={artistOptions}
                  getOptionLabel={(option) => option.label}
                  value={
                    artistOptions.find(
                      (option: any) => option.value === artist
                    ) || null
                  }
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
                  isOptionEqualToValue={(option, value) =>
                    option.value === value
                  }
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
            <Tooltip title="Select As Your Wish">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
            <Autocomplete
              options={genres?.map((genre: any) => genre.name) || []}
              value={formData.genre}
              onChange={handleGenreChange}
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  label="Genre"
                  variant="outlined"
                  name="genre"
                />
              )}
              freeSolo
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Tooltip title="Select As Your Wish">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
            <Autocomplete
              options={getSubgenres()}
              value={formData.subgenre}
              onChange={handleSubgenreChange}
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  label="Subgenre"
                  variant="outlined"
                  name="subgenre"
                />
              )}
              freeSolo
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Tooltip title="Select As Your Wish">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
            <Autocomplete
              options={labelOptions}
              getOptionLabel={(option) => option.label}
              value={
                labelOptions.find((opt) => opt.value === formData.label) || null
              }
              onChange={(event, newValue) => handleLabelChange(newValue)}
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  label="Label"
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />
            <div className="py-1" onClick={showModal}>
              <IconButton>
                <AddCircleOutline />
              </IconButton>
              <Button>Create Label</Button>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Tooltip title="Single: 1-2 Tracks, EP: 3-6 Tracks, Album: Ab 7 Tracks">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
            <Autocomplete
              options={formats}
              value={formData.format}
              onChange={(event, newValue) =>
                setFormData((prevData) => ({
                  ...prevData,
                  format: newValue || "",
                }))
              }
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  label="Format"
                  variant="outlined"
                />
              )}
              freeSolo
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Tooltip title="Indicate the original release date. If may be the release date of the physical version for instance. If there is none, use the same day as your digital release date.">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
            <TextField
              required
              fullWidth
              type="date"
              label="Release Date"
              variant="outlined"
              name="releaseDate"
              value={formData.releaseDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Tooltip title="The producer of the release (℗) is the rightowner that financed the recording of the track.">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
            <TextField
              required
              fullWidth
              label="P Line"
              variant="outlined"
              name="pLine"
              value={formData.pLine}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Tooltip title="The cover producer (©) is the rightowner that financed the production of the artwork/packaging.">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
            <TextField
              required
              fullWidth
              label="C Line"
              variant="outlined"
              name="cLine"
              value={formData.cLine}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Tooltip title="The year in which the release has been produced and recorded. If more than one, please indicate the final year of production.">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
            <Autocomplete
              options={years}
              value={formData.productionYear}
              onChange={(event, newValue) =>
                setFormData((prevData) => ({
                  ...prevData,
                  productionYear: newValue || "",
                }))
              }
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  label="Production Year"
                  variant="outlined"
                />
              )}
              freeSolo
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Tooltip title="Select As Your Wish">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
            <TextField
              fullWidth
              label="UPC"
              variant="outlined"
              name="upc"
              value={formData.upc}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Tooltip title="Select As Your Wish">
              <span className="text-red-600 font-bold pr-2 cursor-pointer">
                ?
              </span>
            </Tooltip>
            <TextField
              fullWidth
              label="Catalog Number"
              variant="outlined"
              name="catalogNumber"
              value={formData.catalogNumber}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>
      <AddLabelModal open={open} setOpen={setOpen} />
      <AddArtistModal open={openArtist} setOpen={setOpenArtist} />
    </Container>
  );
};

export default ReleaseInformation;
