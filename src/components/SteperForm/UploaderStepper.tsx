// /* eslint-disable @typescript-eslint/ban-ts-comment */
// import React, { useState, useEffect } from "react";
// import {
//   Button,
//   Typography,
//   Stepper,
//   Step,
//   StepLabel,
//   Grid,
// } from "@material-ui/core";

// import { useNavigate } from "react-router-dom";
// import AudioDetails from "../uploads/Single/AudioDetails";
// import ReleaseInformation from "../uploads/Single/ReleaseInformation";
// import TracksInformation from "../uploads/Single/TracksInformation";
// import Countries from "../uploads/Single/Countries";
// import SingleReviewPage from "../uploads/Single/SingleReviewPage";
// import { useUploadSingleAudioMutation } from "@/redux/slices/uploadVideoAudio/uploadVideoAudioApi";
// import toast from "react-hot-toast";
// interface ReleaseInformation {
//   cLine: string;
//   version: string;
//   catalogNumber: string;
//   featuringArtists: string[];
//   format: string;
//   genre: string;
//   label: string;
//   pLine: string;
//   primaryArtists: string[];
//   productionYear: string;
//   releaseDate: string;
//   releaseTitle: string;
//   subgenre: string;
//   upc: string;
//   variousArtists: string;
// }

// interface TrackDetails {
//   arranger: string;
//   askToGenerateISRC: string;
//   author: string;
//   composer: string;
//   contentType: string;
//   instrumental: string;
//   isrc: string;
//   lyrics: string;
//   lyricsLanguage: string;
//   parentalAdvisory: string;
//   previewStart: string;
//   price: string;
//   primaryTrackType: string;
//   producer: string;
//   publisher: string;
//   remixer: string;
//   secondaryTrackType: string;
//   title: string;
//   trackTitleLanguage: string;
// }

// interface AudioDetails {
//   audioFile: File;
//   coverImage: File;
// }

// interface FormData {
//   audio: AudioDetails;
//   releaseInformation: ReleaseInformation;
//   trackDetails: TrackDetails;
//   countries: string[];
//   previewPage: Record<string, unknown>;
// }
// const steps = [
//   { title: "Release Information", component: ReleaseInformation },
//   { title: "Audio & Cover", component: AudioDetails },
//   { title: "Tracks Details", component: TracksInformation },
//   { title: "Territories", component: Countries },
//   { title: "Review Details", component: SingleReviewPage },
// ];

// const UploaderStepperForm = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   // const [formData, setFormData] = useState<FormData>({
//   //   audio: {},
//   //   releaseInformation: {},
//   //   trackDetails: {},
//   //   countries: [],
//   //   previewPage: {},
//   // });
//   const [formData, setFormData] = useState<FormData>({
//     audio: { audioFile: new File([], ""), coverImage: new File([], "") },
//     releaseInformation: {
//       cLine: "",
//       version: "",
//       catalogNumber: "",
//       featuringArtists: [],
//       format: "",
//       genre: "",
//       label: "",
//       pLine: "",
//       primaryArtists: [],
//       productionYear: "",
//       releaseDate: "",
//       releaseTitle: "",
//       subgenre: "",
//       upc: "",
//       variousArtists: "",
//     },
//     trackDetails: {
//       arranger: "",
//       askToGenerateISRC: "",
//       author: "",
//       composer: "",
//       contentType: "",
//       instrumental: "",
//       isrc: "",
//       lyrics: "",
//       lyricsLanguage: "",
//       parentalAdvisory: "",
//       previewStart: "",
//       price: "",
//       primaryTrackType: "",
//       producer: "",
//       publisher: "",
//       remixer: "",
//       secondaryTrackType: "",
//       title: "",
//       trackTitleLanguage: "",
//     },
//     countries: [],
//     previewPage: {},
//   });
//   const [uploadAudio, { isLoading }] = useUploadSingleAudioMutation();
//   const navigate = useNavigate();

//   const handleNext = async () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleDataChange = (step: any, data: any) => {
//     const updatedFormData = { ...formData, [step]: data };
//     setFormData(updatedFormData);
//   };

//   const handleSubmit = async () => {
//     try {
//       const formDataToSend = new FormData();

//       formDataToSend.append("cLine", formData.releaseInformation?.cLine || "");
//       formDataToSend.append(
//         "subtitle",
//         formData.releaseInformation?.version || ""
//       );
//       formDataToSend.append(
//         "catalogNumber",
//         formData.releaseInformation?.catalogNumber || ""
//       );
//       formDataToSend.append(
//         "featuringArtists",
//         formData.releaseInformation?.featuringArtists?.join(",") || ""
//       );
//       formDataToSend.append(
//         "format",
//         formData.releaseInformation?.format || ""
//       );
//       formDataToSend.append("genre", formData.releaseInformation?.genre || "");
//       formDataToSend.append("label", formData.releaseInformation?.label || "");
//       formDataToSend.append("pLine", formData.releaseInformation?.pLine || "");
//       formDataToSend.append(
//         "primaryArtist",
//         formData.releaseInformation?.primaryArtists?.join(",") || ""
//       );
//       formDataToSend.append(
//         "productionYear",
//         formData.releaseInformation?.productionYear || ""
//       );
//       formDataToSend.append(
//         "releaseDate",
//         formData.releaseInformation?.releaseDate || ""
//       );
//       formDataToSend.append(
//         "releaseTitle",
//         formData.releaseInformation?.releaseTitle || ""
//       );
//       formDataToSend.append(
//         "subGenre",
//         formData.releaseInformation?.subgenre || ""
//       );
//       formDataToSend.append("upc", formData.releaseInformation?.upc || "");
//       formDataToSend.append(
//         "variousArtists",
//         formData.releaseInformation?.variousArtists || ""
//       );

//       // Append trackDetails fields
//       formDataToSend.append("arranger", formData.trackDetails?.arranger || "");
//       formDataToSend.append(
//         "askToGenerateISRC",
//         formData.trackDetails?.askToGenerateISRC || ""
//       );
//       formDataToSend.append("author", formData.trackDetails?.author || "");
//       formDataToSend.append("composer", formData.trackDetails?.composer || "");
//       formDataToSend.append(
//         "contentType",
//         formData.trackDetails?.contentType || ""
//       );
//       formDataToSend.append(
//         "instrumental",
//         formData.trackDetails?.instrumental || ""
//       );
//       formDataToSend.append("isrc", formData.trackDetails?.isrc || "");
//       formDataToSend.append("lyrics", formData.trackDetails?.lyrics || "");
//       formDataToSend.append(
//         "lyricsLanguage",
//         formData.trackDetails?.lyricsLanguage || ""
//       );
//       formDataToSend.append(
//         "parentalAdvisory",
//         formData.trackDetails?.parentalAdvisory || ""
//       );
//       formDataToSend.append(
//         "previewStart",
//         formData.trackDetails?.previewStart || ""
//       );
//       formDataToSend.append("price", formData.trackDetails?.price || "");
//       formDataToSend.append(
//         "primaryTrackType",
//         formData.trackDetails?.primaryTrackType || ""
//       );
//       formDataToSend.append("producer", formData.trackDetails?.producer || "");
//       formDataToSend.append(
//         "publisher",
//         formData.trackDetails?.publisher || ""
//       );
//       formDataToSend.append("remixer", formData.trackDetails?.remixer || "");
//       formDataToSend.append(
//         "secondaryTrackType",
//         formData.trackDetails?.secondaryTrackType || ""
//       );
//       formDataToSend.append("title", formData.trackDetails?.title || "");
//       formDataToSend.append(
//         "trackTitleLanguage",
//         formData.trackDetails?.trackTitleLanguage || ""
//       );

//       formDataToSend.append("audio", formData.audio?.audioFile || "");
//       formDataToSend.append("image", formData.audio?.coverImage || "");

//       formDataToSend.append("countries", formData.countries?.join(",") || "");

//       const res = await uploadAudio(formDataToSend);

//       if (res?.data?.success === true) {
//         localStorage.removeItem("releaseFormData");
//         localStorage.removeItem("tracksInformation");
//         toast.success("Song Upload Successful");
//         navigate("/my-uploads/pending-track");
//       }
//       if (res?.error) {
//         //@ts-ignore
//         toast.error(res?.error?.data?.message);
//       }
//     } catch (error: any) {
//       console.error("Error in handleSubmit:", error?.message);
//       toast.error(error?.message);
//     }
//   };

//   const StepComponent = steps[activeStep].component;

//   return (
//     <Grid container direction="column">
//       <Typography variant="h4" align="center" gutterBottom>
//         Let's Distribute Your Music With Be Musix
//       </Typography>
//       <Stepper activeStep={activeStep} alternativeLabel>
//         {steps.map((step) => (
//           <Step key={step.title}>
//             <StepLabel>{step.title}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       <div style={{ flexGrow: 1, marginBottom: 20 }}>
//         {
//           //@ts-ignore
//           <StepComponent data={formData} onChange={handleDataChange} />
//         }
//       </div>
//       <div style={{ textAlign: "right" }}>
//         <Button disabled={activeStep === 0} onClick={handleBack}>
//           Back
//         </Button>
//         {activeStep < steps.length - 1 && (
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleNext}
//             style={{ marginLeft: 10 }}
//           >
//             Save & Go Next
//           </Button>
//         )}
//         {activeStep === steps.length - 1 && (
//           <>
//             {" "}
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleSubmit}
//               style={{ marginLeft: 10 }}
//               disabled={isLoading}
//             >
//               {isLoading ? "Uploading..." : "Let's Upload"}
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleSubmit}
//               style={{ marginLeft: 10 }}
//               disabled={isLoading}
//             >
//               {isLoading ? "Uploading..." : "Drafts"}
//             </Button>
//           </>
//         )}
//       </div>
//     </Grid>
//   );
// };

// export default UploaderStepperForm;

//!

/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useEffect } from "react";
import {
  Button,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import AudioDetails from "../uploads/Single/AudioDetails";
import ReleaseInformation from "../uploads/Single/ReleaseInformation";
import TracksInformation from "../uploads/Single/TracksInformation";
import Countries from "../uploads/Single/Countries";
import SingleReviewPage from "../uploads/Single/SingleReviewPage";
import {
  useUploadDraftAudioMutation,
  useUploadSingleAudioMutation,
} from "@/redux/slices/uploadVideoAudio/uploadVideoAudioApi";
import toast from "react-hot-toast";
import { Checkbox, FormControlLabel, LinearProgress } from "@mui/material";
import axios from "axios";
import { imageURL } from "@/redux/api/baseApi";

interface ReleaseInformation {
  cLine: string;
  version: string;
  catalogNumber: string;
  featuringArtists: string[];
  format: string;
  genre: string;
  label: string;
  pLine: string;
  primaryArtists: string[];
  productionYear: string;
  releaseDate: string;
  releaseTitle: string;
  subgenre: string;
  upc: string;
  variousArtists: string;
}

interface TrackDetails {
  arranger: string;
  askToGenerateISRC: string;
  author: string;
  composer: string;
  contentType: string;
  instrumental: string;
  isrc: string;
  lyrics: string;
  lyricsLanguage: string;
  parentalAdvisory: string;
  previewStart: string;
  price: string;
  primaryTrackType: string;
  producer: string;
  publisher: string;
  remixer: string;
  secondaryTrackType: string;
  title: string;
  trackTitleLanguage: string;
}

interface AudioDetails {
  audioFile: File;
  coverImage: File;
}

interface FormData {
  audio: AudioDetails;
  releaseInformation: ReleaseInformation;
  trackDetails: TrackDetails;
  countries: string[];
  previewPage: Record<string, unknown>;
}

const steps = [
  { title: "Release Information", component: ReleaseInformation },
  { title: "Audio & Cover", component: AudioDetails },
  { title: "Tracks Details", component: TracksInformation },
  { title: "Territories", component: Countries },
  { title: "Review Details", component: SingleReviewPage },
];

const UploaderStepperForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    audio: { audioFile: new File([], ""), coverImage: new File([], "") },
    releaseInformation: {
      cLine: "",
      version: "",
      catalogNumber: "",
      featuringArtists: [],
      format: "",
      genre: "",
      label: "",
      pLine: "",
      primaryArtists: [],
      productionYear: "",
      releaseDate: "",
      releaseTitle: "",
      subgenre: "",
      upc: "",
      variousArtists: "",
    },
    trackDetails: {
      arranger: "",
      askToGenerateISRC: "",
      author: "",
      composer: "",
      contentType: "",
      instrumental: "",
      isrc: "",
      lyrics: "",
      lyricsLanguage: "",
      parentalAdvisory: "",
      previewStart: "",
      price: "",
      primaryTrackType: "",
      producer: "",
      publisher: "",
      remixer: "",
      secondaryTrackType: "",
      title: "",
      trackTitleLanguage: "",
    },
    countries: [],
    previewPage: {},
  });
  const [uploadProgress, setUploadProgress] = useState(0);
  // const [uploadAudio, { isLoading }] = useUploadSingleAudioMutation();
  const [isLoading, setIsLoading] = useState(false);
  const [uploadDrafts, { isLoading: draftsLoading }] =
    useUploadDraftAudioMutation();

  const [openModal, setOpenModal] = useState(false);
  const [conditionsAccepted, setConditionsAccepted] = useState({
    condition1: false,
    condition2: false,
    condition3: false,
  });
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleDataChange = (step: any, data: any) => {
    const updatedFormData = { ...formData, [step]: data };
    setFormData(updatedFormData);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
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
  //!
  const handleSubmit = async () => {
    setOpenModal(false);
    setIsLoading(true);
    try {
      const formDataToSend = new FormData();

      formDataToSend.append("cLine", formData.releaseInformation.cLine);
      formDataToSend.append("subtitle", formData.releaseInformation.version);
      formDataToSend.append(
        "catalogNumber",
        formData.releaseInformation.catalogNumber
      );
      formDataToSend.append(
        "featuringArtists",
        formData.releaseInformation.featuringArtists.join(",")
      );
      formDataToSend.append("format", formData.releaseInformation.format);
      formDataToSend.append("genre", formData.releaseInformation.genre);
      formDataToSend.append("label", formData.releaseInformation.label);
      formDataToSend.append("pLine", formData.releaseInformation.pLine);
      formDataToSend.append(
        "primaryArtist",
        formData.releaseInformation.primaryArtists.join(",")
      );
      formDataToSend.append(
        "productionYear",
        formData.releaseInformation.productionYear
      );
      formDataToSend.append(
        "releaseDate",
        formData.releaseInformation.releaseDate
      );
      formDataToSend.append(
        "releaseTitle",
        formData.releaseInformation.releaseTitle
      );
      formDataToSend.append("subGenre", formData.releaseInformation.subgenre);
      formDataToSend.append("upc", formData.releaseInformation.upc);
      formDataToSend.append(
        "variousArtists",
        formData.releaseInformation.variousArtists
      );

      // Append trackDetails fields
      formDataToSend.append("arranger", formData.trackDetails.arranger);
      formDataToSend.append(
        "askToGenerateISRC",
        formData.trackDetails.askToGenerateISRC
      );
      formDataToSend.append("author", formData.trackDetails.author);
      formDataToSend.append("composer", formData.trackDetails.composer);
      formDataToSend.append("contentType", formData.trackDetails.contentType);
      formDataToSend.append("instrumental", formData.trackDetails.instrumental);
      formDataToSend.append("isrc", formData.trackDetails.isrc);
      formDataToSend.append("lyrics", formData.trackDetails.lyrics);
      formDataToSend.append(
        "lyricsLanguage",
        formData.trackDetails.lyricsLanguage
      );
      formDataToSend.append(
        "parentalAdvisory",
        formData.trackDetails.parentalAdvisory
      );
      formDataToSend.append("previewStart", formData.trackDetails.previewStart);
      formDataToSend.append("price", formData.trackDetails.price);
      formDataToSend.append(
        "primaryTrackType",
        formData.trackDetails.primaryTrackType
      );
      formDataToSend.append("producer", formData.trackDetails.producer);
      formDataToSend.append("publisher", formData.trackDetails.publisher);
      formDataToSend.append("remixer", formData.trackDetails.remixer);
      formDataToSend.append(
        "secondaryTrackType",
        formData.trackDetails.secondaryTrackType
      );
      formDataToSend.append("title", formData.trackDetails.title);
      formDataToSend.append(
        "trackTitleLanguage",
        formData.trackDetails.trackTitleLanguage
      );

      formDataToSend.append("audio", formData.audio.audioFile);
      formDataToSend.append("image", formData.audio.coverImage);

      formDataToSend.append("countries", formData.countries.join(","));

      await axios
        .post(`${imageURL}/single-music/upload`, formDataToSend, {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(progress);
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then(({ data }) => {
          if (data?.success === true) {
            localStorage.removeItem("releaseFormData");
            localStorage.removeItem("tracksInformation");
            toast.success("Song Upload Successful");
            setIsLoading(false);
            navigate("/my-uploads/pending-track");
          }
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
          setIsLoading(false);
        });
    } catch (error: any) {
      console.error("Error in handleSubmit:", error?.message);
      toast.error(error?.message);
      setIsLoading(false);
    }
  };
  //!
  const handleDrafts = async () => {
    try {
      const formDataToSend = new FormData();

      const appendField = (key: any, value: any) => {
        if (value !== undefined && value !== null && value !== "") {
          formDataToSend.append(key, value);
        }
      };

      // Append releaseInformation fields
      appendField("cLine", formData.releaseInformation.cLine);
      appendField("subtitle", formData.releaseInformation.version);
      appendField("catalogNumber", formData.releaseInformation.catalogNumber);
      appendField(
        "featuringArtists",
        formData.releaseInformation.featuringArtists?.join(",")
      );
      appendField("format", formData.releaseInformation.format);
      appendField("genre", formData.releaseInformation.genre);
      appendField("label", formData.releaseInformation.label);
      appendField("pLine", formData.releaseInformation.pLine);
      appendField(
        "primaryArtist",
        formData.releaseInformation.primaryArtists?.join(",")
      );
      appendField("productionYear", formData.releaseInformation.productionYear);
      appendField("releaseDate", formData.releaseInformation.releaseDate);
      appendField("releaseTitle", formData.releaseInformation.releaseTitle);
      appendField("subGenre", formData.releaseInformation.subgenre);
      appendField("upc", formData.releaseInformation.upc);
      appendField("variousArtists", formData.releaseInformation.variousArtists);

      // Append trackDetails fields
      appendField("arranger", formData.trackDetails.arranger);
      appendField("askToGenerateISRC", formData.trackDetails.askToGenerateISRC);
      appendField("author", formData.trackDetails.author);
      appendField("composer", formData.trackDetails.composer);
      appendField("contentType", formData.trackDetails.contentType);
      appendField("instrumental", formData.trackDetails.instrumental);
      appendField("isrc", formData.trackDetails.isrc);
      appendField("lyrics", formData.trackDetails.lyrics);
      appendField("lyricsLanguage", formData.trackDetails.lyricsLanguage);
      appendField("parentalAdvisory", formData.trackDetails.parentalAdvisory);
      appendField("previewStart", formData.trackDetails.previewStart);
      appendField("price", formData.trackDetails.price);
      appendField("primaryTrackType", formData.trackDetails.primaryTrackType);
      appendField("producer", formData.trackDetails.producer);
      appendField("publisher", formData.trackDetails.publisher);
      appendField("remixer", formData.trackDetails.remixer);
      appendField(
        "secondaryTrackType",
        formData.trackDetails.secondaryTrackType
      );
      appendField("title", formData.trackDetails.title);
      appendField(
        "trackTitleLanguage",
        formData.trackDetails.trackTitleLanguage
      );

      appendField("audio", formData.audio.audioFile);
      appendField("image", formData.audio.coverImage);

      appendField("countries", formData.countries?.join(","));

      const res = await uploadDrafts(formDataToSend);

      if (res?.data?.success === true) {
        localStorage.removeItem("releaseFormData");
        localStorage.removeItem("tracksInformation");
        toast.success("Song Upload Successful");
        navigate("/my-uploads/drafts");
      } else if (res?.error) {
        //@ts-ignore
        toast.error(res?.error?.data?.message);
      }
    } catch (error: any) {
      console.error("Error in handleSubmit:", error?.message);
      toast.error(error?.message);
    }
  };

  const StepComponent = steps[activeStep].component;

  return (
    <Grid container direction="column">
      <Typography variant="h4" align="center" gutterBottom>
        Let's Distribute Your Music With Be Musix
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step) => (
          <Step key={step.title}>
            <StepLabel>{step.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div style={{ flexGrow: 1, marginBottom: 20 }}>
        {
          //@ts-ignore
          <StepComponent data={formData} onChange={handleDataChange} />
        }
      </div>
      <div style={{ textAlign: "right" }}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        {activeStep < steps.length - 1 && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            style={{ marginLeft: 10 }}
          >
            Next
          </Button>
        )}
        {activeStep === steps.length - 1 && (
          <>
            <LinearProgress
              className="py-2 my-2"
              variant="determinate"
              value={uploadProgress}
            />{" "}
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenModal}
              style={{ marginLeft: 10 }}
              disabled={isLoading}
            >
              Let's Upload
            </Button>
            <Button
              onClick={handleDrafts}
              variant="contained"
              color="primary"
              style={{ marginLeft: 10 }}
              disabled={draftsLoading}
            >
              Save Drafts
            </Button>
          </>
        )}
      </div>
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
                  <Link
                    className="text-blue-600 underline"
                    to="https://bemusix.com/"
                    target="_blank"
                  >
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
                  <Link
                    className="text-blue-600 underline"
                    to="https://bemusix.com/"
                    target="_blank"
                  >
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
                  <Link
                    className="text-blue-600 underline"
                    to="https://bemusix.com/"
                    target="_blank"
                  >
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
            onClick={handleSubmit}
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
    </Grid>
  );
};

export default UploaderStepperForm;
