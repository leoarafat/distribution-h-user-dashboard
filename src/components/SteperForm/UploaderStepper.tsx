/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useEffect } from "react";
import {
  Button,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Grid,
} from "@material-ui/core";

import { useNavigate } from "react-router-dom";
import AudioDetails from "../uploads/Single/AudioDetails";
import ReleaseInformation from "../uploads/Single/ReleaseInformation";
import TracksInformation from "../uploads/Single/TracksInformation";
import Countries from "../uploads/Single/Countries";
import SingleReviewPage from "../uploads/Single/SingleReviewPage";
import { useUploadSingleAudioMutation } from "@/redux/slices/uploadVideoAudio/uploadVideoAudioApi";
import toast from "react-hot-toast";

const steps = [
  { title: "Release Information", component: ReleaseInformation },
  { title: "Audio & Cover", component: AudioDetails },
  { title: "Tracks Details", component: TracksInformation },
  { title: "Territories", component: Countries },
  { title: "Review Details", component: SingleReviewPage },
];

const UploaderStepperForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    audio: {},
    releaseInformation: {},
    trackDetails: {},
    countries: [],
    previewPage: {},
  });

  const [uploadAudio, { isLoading }] = useUploadSingleAudioMutation();
  const navigate = useNavigate();

  console.log(formData);
  const handleNext = async () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleDataChange = (step: any, data: any) => {
    const updatedFormData = { ...formData, [step]: data };
    setFormData(updatedFormData);
  };

  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();

      formDataToSend.append("cLine", formData.releaseInformation?.cLine || "");
      formDataToSend.append(
        "subtitle",
        formData.releaseInformation?.version || ""
      );
      formDataToSend.append(
        "catalogNumber",
        formData.releaseInformation?.catalogNumber || ""
      );
      formDataToSend.append(
        "featuringArtists",
        formData.releaseInformation?.featuringArtists?.join(",") || ""
      );
      formDataToSend.append(
        "format",
        formData.releaseInformation?.format || ""
      );
      formDataToSend.append("genre", formData.releaseInformation?.genre || "");
      formDataToSend.append("label", formData.releaseInformation?.label || "");
      formDataToSend.append("pLine", formData.releaseInformation?.pLine || "");
      formDataToSend.append(
        "primaryArtist",
        formData.releaseInformation?.primaryArtists
      );
      formDataToSend.append(
        "productionYear",
        formData.releaseInformation?.productionYear || ""
      );
      formDataToSend.append(
        "releaseDate",
        formData.releaseInformation?.releaseDate || ""
      );
      formDataToSend.append(
        "releaseTitle",
        formData.releaseInformation?.releaseTitle || ""
      );
      formDataToSend.append(
        "subGenre",
        formData.releaseInformation?.subgenre || ""
      );
      formDataToSend.append("upc", formData.releaseInformation?.upc || "");
      formDataToSend.append(
        "variousArtists",
        formData.releaseInformation?.variousArtists || ""
      );

      // Append trackDetails fields
      formDataToSend.append("arranger", formData.trackDetails?.arranger || "");
      formDataToSend.append(
        "askToGenerateISRC",
        formData.trackDetails?.askToGenerateISRC || ""
      );
      formDataToSend.append("author", formData.trackDetails?.author || "");
      formDataToSend.append("composer", formData.trackDetails?.composer || "");
      formDataToSend.append(
        "contentType",
        formData.trackDetails?.contentType || ""
      );
      formDataToSend.append(
        "instrumental",
        formData.trackDetails?.instrumental || ""
      );
      formDataToSend.append("isrc", formData.trackDetails?.isrc || "");
      formDataToSend.append("lyrics", formData.trackDetails?.lyrics || "");
      formDataToSend.append(
        "lyricsLanguage",
        formData.trackDetails?.lyricsLanguage || ""
      );
      formDataToSend.append(
        "parentalAdvisory",
        formData.trackDetails?.parentalAdvisory || ""
      );
      formDataToSend.append(
        "previewStart",
        formData.trackDetails?.previewStart || ""
      );
      formDataToSend.append("price", formData.trackDetails?.price || "");
      formDataToSend.append(
        "primaryTrackType",
        formData.trackDetails?.primaryTrackType || ""
      );
      formDataToSend.append("producer", formData.trackDetails?.producer || "");
      formDataToSend.append(
        "publisher",
        formData.trackDetails?.publisher || ""
      );
      formDataToSend.append("remixer", formData.trackDetails?.remixer || "");
      formDataToSend.append(
        "secondaryTrackType",
        formData.trackDetails?.secondaryTrackType || ""
      );
      formDataToSend.append("title", formData.trackDetails?.title || "");
      formDataToSend.append(
        "trackTitleLanguage",
        formData.trackDetails?.trackTitleLanguage || ""
      );

      formDataToSend.append("audio", formData.audio?.audioFile || "");
      formDataToSend.append("image", formData.audio?.coverImage || "");

      formDataToSend.append("countries", formData.countries?.join(",") || "");

      const res = await uploadAudio(formDataToSend);
      console.log(res);
      if (res?.data?.success === true) {
        localStorage.removeItem("releaseFormData");
        localStorage.removeItem("tracksInformation");
        toast.success("Song Upload Successful");
        navigate("/my-uploads/pending-track");
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
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
        <StepComponent data={formData} onChange={handleDataChange} />
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
            Save & Go Next
          </Button>
        )}
        {activeStep === steps.length - 1 && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ marginLeft: 10 }}
          >
            {isLoading ? "Uploading..." : "Let's Upload"}
          </Button>
        )}
      </div>
    </Grid>
  );
};

export default UploaderStepperForm;
