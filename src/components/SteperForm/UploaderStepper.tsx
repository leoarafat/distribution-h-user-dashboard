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

import {
  useAddressVerifyMutation,
  useAgreementVerifyMutation,
  useLabelVerifyMutation,
  useProfileVerifyMutation,
  useVerifyUserMutation,
} from "@/redux/slices/admin/userApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/redux/hooks";
import { setIsVerified } from "@/redux/slices/auth/authSlice";
import AudioDetails from "../uploads/Single/AudioDetails";
import ReleaseInformation from "../uploads/Single/ReleaseInformation";
import TracksInformation from "../uploads/Single/TracksInformation";
import Countries from "../uploads/Single/Countries";
import SingleReviewPage from "../uploads/Single/SingleReviewPage";

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
    trackDetails: {},
    additionalDetails: {},
    previewPage: {},
  });
  const [selectCoverImage, setCoverImage] = useState(null);
  const [audio, setAudio] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    if (formData.audio) {
      //@ts-ignore
      setCoverImage(formData.audio.coverImage);
      //@ts-ignore
      setAudio(formData.audio.audio);
    }

    // if (formData.label) {
    //   //@ts-ignore
    //   setCopyRightImage(formData.label.copyRightImage);
    //   //@ts-ignore
    //   setDashboardImage(formData.label.dashboardImage);
    // }
    // if (formData?.agreement) {
    //   //@ts-ignore
    //   setSignature(formData?.agreement?.signature);
    // }
  }, [formData]);

  const [verifyProfile, { isLoading: profileLoading }] =
    useProfileVerifyMutation();
  const [labelVerify, { isLoading: labelLoading }] = useLabelVerifyMutation();
  const [addressVerify, { isLoading: addressLoading }] =
    useAddressVerifyMutation();
  const [verifyUser, { isLoading: verifyLoading }] = useVerifyUserMutation();
  const [agreementVerify, { isLoading: agreementLoading }] =
    useAgreementVerifyMutation();

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
  const dispatch = useAppDispatch();
  const handleSubmit = async () => {
    try {
      const result = await verifyUser({});
      if (result?.data?.success) {
        toast.success("Congratulations. Verify Successful");

        dispatch(setIsVerified({ isVerified: result?.data?.data?.isVerified }));
        navigate("/");
      } else {
        toast.error("Verification failed. Please try again later.");
      }
    } catch (error: any) {
      toast.error("An error occurred while verifying. Please try again later.");
      console.error("Error during verification:", error.message);
    }
  };

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
            {profileLoading ||
            labelLoading ||
            addressLoading ||
            agreementLoading
              ? "Saving.."
              : "Save & Go Next"}
          </Button>
        )}
        {activeStep === steps.length - 1 && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ marginLeft: 10 }}
          >
            {verifyLoading ? "Uploading..." : "Let's Upload"}
          </Button>
        )}
      </div>
    </Grid>
  );
};

export default UploaderStepperForm;
