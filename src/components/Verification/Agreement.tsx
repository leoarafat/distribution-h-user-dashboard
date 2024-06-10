import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Paper, Grid, Button, Divider } from "@mui/material";
import SignatureCanvas from "react-signature-canvas";
import { useProfileQuery } from "@/redux/slices/admin/userApi";

const AgreementPage = ({ data, onChange }: any) => {
  const [signature, setSignature] = useState(null);
  const sigCanvas = useRef<SignatureCanvas>(null);
  const { data: profileData } = useProfileQuery({});
  const [initialSetupDone, setInitialSetupDone] = useState(false);

  useEffect(() => {
    if (profileData?.data && !initialSetupDone) {
      const initialProfileData = {
        signature: profileData.data.signature || null,
      };

      onChange("agreement", initialProfileData);
      setSignature(profileData.data.signature || null);

      setInitialSetupDone(true);
    }
  }, [profileData, initialSetupDone, onChange]);

  const clearSignature = () => {
    sigCanvas.current?.clear();
    setSignature(null);
  };

  const handleSignatureChange = async () => {
    if (sigCanvas.current) {
      const signatureDataUrl = sigCanvas.current
        .getTrimmedCanvas()
        .toDataURL("image/png");
      const blob = await (await fetch(signatureDataUrl)).blob();
      onChange("agreement", { ...data?.agreement, signature: blob });
    }
  };

  const mockData = {
    name: "John Doe",
    phoneNumber: "+1234567890",
    nidNumber: "12345678901234",
    channelName: "JohnDoeMusic",
    channelUrl: "https://youtube.com/johndoemusic",
    companyOwnerName: "Hasanuzzaman",
    ownerDesignation: "CEO",
    companyName: "Be Musix Limited",
    companyAddress: "123 Music Avenue, City, Country",
    createdDate: "2023-01-01",
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Paper sx={{ padding: 3, maxWidth: 800, margin: "0 auto" }}>
        <Typography variant="h4" gutterBottom>
          Music Distribution Agreement
        </Typography>
        <Typography variant="body1" paragraph>
          This Music Distribution Agreement ("Agreement") is entered into as of
          [Date] between {mockData.companyName}, having its principal place of
          business at {mockData.companyAddress} ("Company") and {mockData.name},
          having its principal place of business at [Artist Address] ("Artist").
        </Typography>
        <Typography variant="body1" paragraph>
          The Company agrees to distribute the Artist's music under the terms
          and conditions set forth in this Agreement.
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Artist Information
            </Typography>
            <Box
              sx={{ border: "1px solid black", padding: 2, borderRadius: 1 }}
            >
              <Typography variant="body1">
                <strong>Name:</strong> {mockData.name}
              </Typography>
              <Typography variant="body1">
                <strong>Phone Number:</strong> {mockData.phoneNumber}
              </Typography>
              <Typography variant="body1">
                <strong>NID Number:</strong> {mockData.nidNumber}
              </Typography>
              <Typography variant="body1">
                <strong>Channel Name:</strong> {mockData.channelName}
              </Typography>
              <Typography variant="body1">
                <strong>Channel URL:</strong>{" "}
                <a
                  href={mockData.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {mockData.channelUrl}
                </a>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Company Information
            </Typography>
            <Box
              sx={{ border: "1px solid black", padding: 2, borderRadius: 1 }}
            >
              <Typography variant="body2" align="center">
                For and on behalf of {mockData.companyName}
              </Typography>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: 1,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "cursive", fontSize: 24 }}
                >
                  Hasan
                </Typography>
                <Divider sx={{ width: "100%", marginY: 1 }} />
                <Typography variant="body1">
                  <strong>Name:</strong> {mockData.companyOwnerName}
                </Typography>
                <Typography variant="body1">
                  <strong>Designation:</strong> {mockData.ownerDesignation},{" "}
                  {mockData.companyName}
                </Typography>
                <Typography variant="body1">
                  <strong>Date:</strong> {mockData.createdDate}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="h6" gutterBottom>
          Signature
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <SignatureCanvas
              ref={sigCanvas}
              penColor="black"
              canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
              onEnd={handleSignatureChange}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: 2,
              }}
            >
              <Button
                variant="outlined"
                color="secondary"
                onClick={clearSignature}
              >
                Clear
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              textAlign: "right",
            }}
          >
            <Typography variant="body1">
              <strong>{mockData.companyOwnerName}</strong>
            </Typography>
            <Typography variant="body1">{mockData.ownerDesignation}</Typography>
            <Typography variant="body1">{mockData.companyName}</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default AgreementPage;
