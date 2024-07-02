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

import AlbumAudioDetails from "../uploads/Album/AlbumAudioDetails";
import AlbumReleaseInformation from "../uploads/Album/AlbumReleaseInformation";
import AlbumAudioReview from "../uploads/Album/AlbumAudioReview";

const steps = [
  { title: "Release Information", component: AlbumReleaseInformation },
  { title: "Audio & Cover", component: AlbumAudioDetails },
  { title: "Review Details", component: AlbumAudioReview },
];

const AlbumStepperForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    releaseInformation: {},
    audios: {},
    previewPage: {},
  });
  const [selectCoverImage, setCoverImage] = useState(null);
  const [audio, setAudio] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    if (formData.audios) {
      //@ts-ignore
      setCoverImage(formData.audios.coverImage);
      //@ts-ignore
      setAudio(formData.audios.audio);
    }
    // localStorage.setItem("albumData", JSON.stringify(formData));
  }, [formData]);

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

  const handleSubmit = async () => {};

  const StepComponent = steps[activeStep].component;

  return (
    <Grid container direction="column">
      <Typography variant="h4" align="center" gutterBottom>
        Let's Distribute Your Music With Musix
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
            Let's Upload
          </Button>
        )}
      </div>
    </Grid>
  );
};

export default AlbumStepperForm;
