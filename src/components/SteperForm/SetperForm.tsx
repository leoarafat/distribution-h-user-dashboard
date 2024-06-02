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
  useAddressVerifyMutation,
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
  const [selectedProfileImage, setSelectedProfileImage] = useState(null);
  const [nidFront, setNidFront] = useState(null);
  const [nidBack, setNidBack] = useState(null);
  const [copyRightImage, setCopyRightImage] = useState(null);
  const [dashboardImage, setDashboardImage] = useState(null);
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhone] = useState("");

  useEffect(() => {
    if (formData.profile) {
      setSelectedProfileImage(formData.profile.profileImage);
      setNidFront(formData.profile.nidFront);
      setNidBack(formData.profile.nidBack);
      setUserName(formData.profile.name);
      setPhone(formData.profile.phoneNumber);
    }

    if (formData.label) {
      setCopyRightImage(formData.label.copyRightImage);
      setDashboardImage(formData.label.dashboardImage);
    }
  }, [formData]);
  console.log(formData);
  const [verifyProfile] = useProfileVerifyMutation();
  const [labelVerify] = useLabelVerifyMutation();
  const [addressVerify] = useAddressVerifyMutation();

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
        const profileFormData = new FormData();
        profileFormData.append("image", selectedProfileImage);
        profileFormData.append("nidFront", nidFront);
        profileFormData.append("nidBack", nidBack);
        profileFormData.append("name", userName);
        profileFormData.append("phoneNumber", phoneNumber);

        const result = await verifyProfile(profileFormData).unwrap();

        if (result?.success === true) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
          toast.error("Please update required fields");
        }
      } catch (error: any) {
        toast.error("Profile verification failed:", error?.message);
      }
    }

    if (activeStep === 1 && formData.address) {
      try {
        const result = await addressVerify(formData.address);

        if (result?.data?.success === true) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
          toast.error("Failed to update address");
        }
      } catch (error: any) {
        toast.error("Error updating address:", error?.message);
      }
    }

    if (
      activeStep === 2 &&
      formData.label?.channelUrl &&
      formData.label?.channelName &&
      formData.label?.subscribeCount &&
      formData.label?.videosCount
    ) {
      try {
        const labelFormData = new FormData();
        labelFormData.append("subscribeCount", formData.label.subscribeCount);
        labelFormData.append("videosCount", formData.label.videosCount);
        labelFormData.append("channelName", formData.label.channelName);
        labelFormData.append("channelUrl", formData.label.channelUrl);
        labelFormData.append("copyrightNoticeImage", copyRightImage);
        labelFormData.append("dashboardScreenShot", dashboardImage);

        const result = await labelVerify(labelFormData).unwrap();

        if (result?.success === true) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
          toast.error("Please provide required fields");
        }
      } catch (error: any) {
        toast.error("Label verification failed:", error?.message);
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleDataChange = (step, data) => {
    const updatedFormData = { ...formData, [step]: data };
    setFormData(updatedFormData);
  };

  const handleSubmit = () => {
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
