import { useNavigate } from "react-router-dom";
import { Box, Grid, Paper, Typography, IconButton } from "@mui/material";
import {
  MusicNote as MusicNoteIcon,
  Album as AlbumIcon,
} from "@mui/icons-material";

const Uploads = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 2,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          padding: 10,
          width: "950px",
          height: "550px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            mb: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Add singles, entire albums.
          </Typography>
          <Typography variant="body2">
            It's also recommended to select and submit a cover for your
            publication.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Paper
              sx={{
                padding: 4,
                textAlign: "center",
                "&:hover": {
                  boxShadow: 6,
                  transition: "box-shadow 0.3s ease-in-out",
                },
                cursor: "pointer",
                backgroundColor: "#fff",
                borderRadius: "12px",
              }}
              onClick={() => navigate("/single")}
            >
              <IconButton
                sx={{
                  backgroundColor: "#e0e0e0",
                  color: "#616161",
                  width: 80,
                  height: 80,
                  marginBottom: 2,
                  "&:hover": {
                    backgroundColor: "#bdbdbd",
                  },
                }}
              >
                <MusicNoteIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <Typography variant="h6">Upload Single</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              sx={{
                padding: 4,
                textAlign: "center",
                "&:hover": {
                  boxShadow: 6,
                  transition: "box-shadow 0.3s ease-in-out",
                },
                cursor: "pointer",
                backgroundColor: "#fff",
                borderRadius: "12px",
              }}
              onClick={() => navigate("/album")}
            >
              <IconButton
                sx={{
                  backgroundColor: "#e0e0e0",
                  color: "#616161",
                  width: 80,
                  height: 80,
                  marginBottom: 2,
                  "&:hover": {
                    backgroundColor: "#bdbdbd",
                  },
                }}
              >
                <AlbumIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <Typography variant="h6">Upload Album</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Uploads;
