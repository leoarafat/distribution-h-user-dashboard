import React, { useState, useEffect } from "react";
import {
  Button,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Grid,
} from "@material-ui/core";
import ProfileVerification from "../Verification/ProfileVerification";
import AddressInformation from "../Verification/AddressInformation";
import LabelVerification from "../Verification/LabelVerification";
import ReviewConfirm from "../Verification/ReviewConfirm";
import { base64ToFile, fileToBase64 } from "./UtilsStepper";

const steps = [
  {
    title: "Profile Verification",
    component: ProfileVerification,
  },
  {
    title: "Address Information",
    component: AddressInformation,
  },
  {
    title: "Label Verification",
    component: LabelVerification,
  },
  {
    title: "Review & Confirm",
    component: ReviewConfirm,
  },
];

const StepperForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    profile: {},
    address: {},
    label: {},
  });
  const sendFormData = new FormData();
  const [selectedProfileImage, setSelectedProfileImage] = useState(null);
  const [nidFront, setNidFront] = useState(null);
  const [nidBack, setNidBack] = useState(null);

  useEffect(() => {
    setSelectedProfileImage(formData?.profile?.profileImage);
  }, [formData?.profile]);
  console.log(selectedProfileImage);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log(formData);
  };

  const handleBack = () => {
    if (activeStep === 1) {
      window.location.reload();
    } else if (activeStep === 3) {
      window.location.reload();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleDataChange = async (step: any, data: any) => {
    const updatedFormData = { ...formData, [step]: data };

    setFormData(updatedFormData);
  };
  const handleSubmit = async () => {
    localStorage.removeItem("formData");
  };

  const StepComponent = steps[activeStep].component;

  return (
    <Grid container direction="column">
      <Typography variant="h4" align="center" gutterBottom>
        Verification Process
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
            Next
          </Button>
        )}
        {activeStep === steps.length - 1 && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ marginLeft: 10 }}
          >
            Let's Verify
          </Button>
        )}
      </div>
    </Grid>
  );
};

export default StepperForm;
