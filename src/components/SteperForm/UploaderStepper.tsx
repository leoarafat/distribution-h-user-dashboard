import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, Typography } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import AudioDetails from "../uploads/Single/AudioDetails";
import ImageDetails from "../uploads/Single/ImageDetails";
import UserDetails from "../uploads/Single/UserDetails";
import TrackDetails from "../uploads/Single/TrackDetails";
import AdditionalDetails from "../uploads/Single/AdditionalDetails";

const steps = [
  "Audio Details",
  "Image Details",
  "User Details",
  "Track Details",
  "Additional Details",
];

const UploaderStepperForm: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const methods = useForm();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return <AudioDetails />;
      case 1:
        return <ImageDetails />;
      case 2:
        return <UserDetails />;
      case 3:
        return <TrackDetails />;
      case 4:
        return <AdditionalDetails />;
      default:
        return "Unknown step";
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <div>
            <Typography variant="h6">All steps completed</Typography>
            <Button onClick={handleBack}>Back</Button>
            <Button onClick={methods.handleSubmit(onSubmit)}>Submit</Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={
                  activeStep === steps.length - 1
                    ? methods.handleSubmit(onSubmit)
                    : handleNext
                }
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </form>
    </FormProvider>
  );
};

export default UploaderStepperForm;
