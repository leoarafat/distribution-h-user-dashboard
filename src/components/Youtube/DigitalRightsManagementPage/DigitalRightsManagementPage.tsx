import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import {
  Facebook,
  YouTube,
  VideoLibrary,
  FacebookOutlined,
} from "@mui/icons-material";

const services = [
  {
    icon: (
      <img
        className="ml-16 w-[60px] h-[60px]"
        src="https://img.freepik.com/premium-vector/set-tiktok-app-icons-social-media-logo-vector-illustration_277909-592.jpg"
      />
    ),
    title: "TikTok Manual Claim",
  },
  {
    icon: <Facebook style={{ fontSize: 60 }} />,
    title: "Facebook Claim Release",
  },
  {
    icon: <YouTube style={{ fontSize: 60 }} />,
    title: "YouTube Claim Release",
  },
  //   {
  //     icon: <YouTube style={{ fontSize: 60 }} />,
  //     title: "YouTube Video Takedown",
  //   },
  //   {
  //     icon: <VideoLibrary style={{ fontSize: 60 }} />,
  //     title: "YouTube Manual Claim",
  //   },
  //   {
  //     icon: <FacebookOutlined style={{ fontSize: 60 }} />,
  //     title: "Facebook Page Whitelist",
  //   },
];

const DigitalRightsManagementPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: "2rem 0",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#f9f9f9",
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
      </Container>
    </Box>
  );
};

export default DigitalRightsManagementPage;
