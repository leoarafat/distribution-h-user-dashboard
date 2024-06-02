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
import ProfileVerification from "../Verification/ProfileVerification";
import AddressInformation from "../Verification/AddressInformation";
import LabelVerification from "../Verification/LabelVerification";
import ReviewConfirm from "../Verification/ReviewConfirm";

import {
  useLabelVerifyMutation,
  useProfileVerifyMutation,
} from "@/redux/slices/admin/userApi";
import toast from "react-hot-toast";

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
  const labelFormData = new FormData();
  const [selectedProfileImage, setSelectedProfileImage] = useState(null);
  const [nidFront, setNidFront] = useState(null);
  const [nidBack, setNidBack] = useState(null);
  const [copyRightImage, setCopyRightImage] = useState(null);
  const [dashboardImage, setDashboardImage] = useState(null);
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const profileFormData = new FormData();
  console.log(formData.profile);
  useEffect(() => {
    if (formData.profile) {
      //@ts-ignore
      setSelectedProfileImage(formData.profile.profileImage);
      //@ts-ignore
      setNidFront(formData.profile.nidFront);
      //@ts-ignore
      setNidBack(formData.profile.nidBack);
      //@ts-ignore
      setUserName(formData.profile.name);
      //@ts-ignore
      setPhone(formData.profile.phoneNumber);
    }

    if (formData.label) {
      //@ts-ignore
      setCopyRightImage(formData.label.copyRightImage);
      //@ts-ignore
      setDashboardImage(formData.label.dashboardImage);
    }
  }, [formData]);

  // console.log(selectedProfileImage, nidBack, nidFront);
  const [verifyProfile, { isLoading: profileLoading }] =
    useProfileVerifyMutation();
  const [labelVerify, { isLoading: labelLoading }] = useLabelVerifyMutation();
  if (selectedProfileImage) {
    profileFormData.append("image", selectedProfileImage);
  }
  if (nidFront) {
    profileFormData.append("nidFront", nidFront);
  }
  if (nidBack) {
    profileFormData.append("nidBack", nidBack);
  }
  if (copyRightImage) {
    labelFormData.append("copyrightNoticeImage", copyRightImage);
  }
  if (dashboardImage) {
    labelFormData.append("dashboardScreenShot", dashboardImage);
  }
  if (userName) {
    profileFormData.append("name", userName);
  }
  if (phoneNumber) {
    profileFormData.append("phoneNumber", phoneNumber);
  }

  const handleNext = async () => {
    if (
      activeStep === 0 &&
      selectedProfileImage &&
      nidFront &&
      nidBack &&
      userName &&
      phoneNumber
    ) {
      try {
        const result = await verifyProfile(profileFormData).unwrap();

        if (result?.success === true) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
          toast.error("Please update required fields");
        }
      } catch (error: any) {
        toast.error("Profile verification failed:", error?.message);
        // return;
      }
    }

    if (activeStep === 2 && copyRightImage && dashboardImage) {
      const labelFormData = new FormData();
      labelFormData.append("copyrightNoticeImage", copyRightImage);
      labelFormData.append("dashboardScreenShot", dashboardImage);

      try {
        const result = await labelVerify(labelFormData).unwrap();
        if (result?.success === true) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
          toast.error("Please provide required fields");
        }
      } catch (error: any) {
        toast.error("Label verification failed:", error);
        return;
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
