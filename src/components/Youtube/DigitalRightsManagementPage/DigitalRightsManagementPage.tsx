import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { Facebook, YouTube } from "@mui/icons-material";
import { useState } from "react";
import TikTokClaim from "@/components/Legal/TikTok/TikTokClaim";
import YoutubeClaim from "@/components/Legal/Youtube/YoutubeClaim";
import FacebookClaim from "@/components/Legal/FaceBook/FaceBookClaim";

const services = [
  {
    icon: (
      <img
        className="ml-16 w-[60px] h-[60px]"
        src="https://img.freepik.com/premium-vector/set-tiktok-app-icons-social-media-logo-vector-illustration_277909-592.jpg"
      />
    ),
    title: "TikTok Manual Claim",
    type: "tiktok",
  },
  {
    icon: (
      <img
        className="ml-16 w-[60px] h-[60px]"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"
      />
    ),
    title: "Facebook Claim Release",
    type: "facebook",
  },
  {
    icon: (
      <img
        className="ml-16 w-[90px] h-[60px]"
        src="https://e7.pngegg.com/pngimages/125/937/png-clipart-youtube-logo-youtube-angle-logo-thumbnail.png"
      />
    ),
    title: "YouTube Claim Release",
    type: "youtube",
  },
];

const DigitalRightsManagementPage = () => {
  const [claimType, setClaimType] = useState("tiktok");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: "2rem 0",
        color: "#fff",
        height: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid
              onClick={() => setClaimType(service.type)}
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#f9f9f9",
                  cursor: "pointer",
                  color: "#000",
                  padding: 2,
                  boxShadow: 3,
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "transform 0.3s",
                  },
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  {service.icon}
                  <Typography variant="h6" component="div" gutterBottom>
                    {service.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {claimType === "tiktok" && <TikTokClaim />}
        {claimType === "facebook" && <FacebookClaim />}
        {claimType === "youtube" && <YoutubeClaim />}
      </Container>
    </Box>
  );
};

export default DigitalRightsManagementPage;
