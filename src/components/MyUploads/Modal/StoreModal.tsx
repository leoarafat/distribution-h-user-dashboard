import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";

interface StoreModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedAlbum: any;
}

const StoreModal: React.FC<StoreModalProps> = ({
  open,
  setOpen,
  selectedAlbum,
}) => {
  const handleCancel = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
  };

  const staticStores = [
    {
      name: "Facebook",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhIStQW6CVwkxfySAEk7m-ixijfzEEnZs-w&s",
      status: "Delivered",
      link: "https://www.facebook.com",
    },
    {
      name: "YouTube",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
      status: "Delivered",
      link: "https://www.youtube.com",
    },
    {
      name: "TikTok",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnmLX4PrZhLb-xlyZ91i-mvwa9iLPp-BeyQ&s",
      status: "Takedown",
      link: "https://www.tiktok.com",
    },
    {
      name: "YouTube Music",
      image:
        "https://seeklogo.com/images/Y/youtube-music-logo-50422973B2-seeklogo.com.png",
      status: "Delivered",
      link: "https://music.youtube.com",
    },
    {
      name: "Spotify",
      image:
        "https://w7.pngwing.com/pngs/4/438/png-transparent-spotify-logo-spotify-mobile-app-computer-icons-app-store-music-free-icon-spotify-miscellaneous-logo-music-download-thumbnail.png",
      status: "Delivered",
      link: "https://www.spotify.com",
    },
    {
      name: "Instagram",
      image:
        "https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png",
      status: "Pending",
      link: "https://www.instagram.com",
    },
  ];

  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      aria-labelledby="form-dialog-title"
      maxWidth="md"
    >
      <DialogTitle id="form-dialog-title">Store Details</DialogTitle>
      <DialogContent>
        <Paper sx={{ padding: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            <Typography variant="h6">Store Details</Typography>
          </Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Store Name</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Link</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {staticStores.map((store, index) => (
                  <TableRow key={index}>
                    <TableCell>{store.name}</TableCell>
                    <TableCell>
                      <img
                        src={store.image}
                        alt={store.name}
                        style={{ width: 60, height: 60, borderRadius: "50%" }}
                      />
                    </TableCell>
                    <TableCell style={{ whiteSpace: "nowrap" }}>
                      {" "}
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "bold",
                          color:
                            store.status === "Delivered"
                              ? "green"
                              : store.status === "Pending"
                              ? "blue"
                              : "red",
                        }}
                      >
                        {store.status}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <a
                        href={store.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {store.link}
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StoreModal;
