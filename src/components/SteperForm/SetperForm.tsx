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

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);

      if (parsedData.profile.profileImage) {
        parsedData.profile.profileImage = base64ToFile(
          parsedData.profile.profileImage,
          "profileImage",
          "image/jpeg"
        );
      }
      if (parsedData.profile.nidFront) {
        parsedData.profile.nidFront = base64ToFile(
          parsedData.profile.nidFront,
          "nidFront",
          "image/jpeg"
        );
      }
      if (parsedData.profile.nidBack) {
        parsedData.profile.nidBack = base64ToFile(
          parsedData.profile.nidBack,
          "nidBack",
          "image/jpeg"
        );
      }
      if (parsedData.label.dashboardImage) {
        parsedData.label.dashboardImage = base64ToFile(
          parsedData.label.dashboardImage,
          "dashboardImage",
          "image/jpeg"
        );
      }
      if (parsedData.label.copyRightImage) {
        parsedData.label.copyRightImage = base64ToFile(
          parsedData.label.copyRightImage,
          "copyRightImage",
          "image/jpeg"
        );
      }
      setFormData(parsedData);
    }
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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

    if (data.profileImage instanceof File) {
      data.profileImage = await fileToBase64(data.profileImage);
    }
    if (data.nidFront instanceof File) {
      data.nidFront = await fileToBase64(data.nidFront);
    }
    if (data.nidBack instanceof File) {
      data.nidBack = await fileToBase64(data.nidBack);
    }
    if (data.dashboardImage instanceof File) {
      data.dashboardImage = await fileToBase64(data.dashboardImage);
    }
    if (data.copyRightImage instanceof File) {
      data.copyRightImage = await fileToBase64(data.copyRightImage);
    }

    setFormData(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
  };
  const handleSubmit = async () => {
    // Process submission
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
