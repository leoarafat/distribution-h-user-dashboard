/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Divider,
  Input,
} from "@mui/material";
import { useProfileQuery } from "@/redux/slices/admin/userApi";
import { imageURL } from "@/redux/api/baseApi";

const AgreementPage = ({ data, onChange }: any) => {
  const [signature, setSignature] = useState(null);
  console.log(signature);
  const { data: profileData } = useProfileQuery({});
  const [initialSetupDone, setInitialSetupDone] = useState(false);

  useEffect(() => {
    if (profileData?.data && !initialSetupDone) {
      const initialProfileData = {
        signature: profileData.data.signature || null,
      };

      onChange("label", initialProfileData);
      setSignature(profileData.data.signature || null);

      setInitialSetupDone(true);
    }
  }, [profileData, initialSetupDone, onChange]);

  const handleSignatureUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setSignature(file);
      onChange("agreement", { ...data?.agreement, signature: file });
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Paper sx={{ padding: 3, maxWidth: 800, margin: "0 auto" }}>
        <Typography variant="h4" gutterBottom>
          Music Distribution Agreement
        </Typography>
        <Typography variant="body1" paragraph>
          This Music Distribution Agreement ("Agreement") is entered into as of
          [Date] between [Your Company Name], having its principal place of
          business at [Your Company Address] ("Company") and [Artist Name],
          having its principal place of business at [Artist Address] ("Artist").
        </Typography>
        <Typography variant="body1" paragraph>
          The Company agrees to distribute the Artist's music under the terms
          and conditions set forth in this Agreement.
        </Typography>
        {/* Add more agreement text here */}
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="h6" gutterBottom>
          Artist Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Artist Name(Optional)"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date(Optional)"
              type="date"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Address(Optional)" variant="outlined" />
          </Grid>
        </Grid>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="h6" gutterBottom>
          Signature
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <Input
            type="file"
            onChange={handleSignatureUpload}
            inputProps={{ accept: "image/*" }}
          />
          {/* {copyRightImage || profileData?.data?.copyrightNoticeImage ? (
              <div className="relative w-3/4">
                {typeof copyRightImage === "object" ? (
                  <img
                    src={
                      copyRightImage
                        ? URL.createObjectURL(copyRightImage)
                        : null
                    }
                    alt="Copyright Image"
                    className="w-[350px] h-[200px]"
                  />
                ) : (
                  <img
                    src={`${imageURL}${profileData?.data?.copyrightNoticeImage}`}
                    alt="Copyright Image"
                    className="w-[350px] h-[200px]"
                  />
                )} */}
          {signature || profileData?.data?.signature ? (
            typeof signature === "object" ? (
              <Box
                component="img"
                //@ts-ignore
                src={signature ? URL.createObjectURL(signature) : null}
                alt="Signature"
                sx={{ height: 100, marginLeft: 2 }}
              />
            ) : (
              <Box
                component="img"
                src={`${imageURL}${profileData?.data?.signature}`}
                alt="Signature"
                sx={{ height: 100, marginLeft: 2 }}
              />
            )
          ) : null}
        </Box>
      </Paper>
    </Box>
  );
};

export default AgreementPage;
