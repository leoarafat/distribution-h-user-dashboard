import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

interface AddArtistModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddArtistModal: React.FC<AddArtistModalProps> = ({ open, setOpen }) => {
  const [artistName, setArtistName] = useState("");
  const [instagramId, setInstagramId] = useState("");
  const [spotifyId, setSpotifyId] = useState("");
  const [appleId, setAppleId] = useState("");
  const [facebookUrl, setFacebookUrl] = useState("");

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Artist</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="artist-name"
            label="Name"
            type="text"
            fullWidth
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="instagram-id"
            label="Instagram ID"
            type="text"
            fullWidth
            value={instagramId}
            onChange={(e) => setInstagramId(e.target.value)}
          />
          <TextField
            margin="dense"
            id="spotify-id"
            label="Spotify ID"
            type="text"
            fullWidth
            value={spotifyId}
            onChange={(e) => setSpotifyId(e.target.value)}
          />
          <TextField
            margin="dense"
            id="apple-id"
            label="Apple ID"
            type="text"
            fullWidth
            value={appleId}
            onChange={(e) => setAppleId(e.target.value)}
          />
          <TextField
            margin="dense"
            id="facebook-url"
            label="Facebook URL"
            type="text"
            fullWidth
            value={facebookUrl}
            onChange={(e) => setFacebookUrl(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddArtistModal;
