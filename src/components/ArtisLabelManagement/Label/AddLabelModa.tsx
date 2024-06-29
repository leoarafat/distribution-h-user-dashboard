import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

interface AddLabelModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddLabelModal: React.FC<AddLabelModalProps> = ({ open, setOpen }) => {
  const [labelName, setLabelName] = useState("");
  const [youtubeChannel, setYoutubeChannel] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

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
        <DialogTitle id="form-dialog-title">Add Label</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="label-name"
            label="Label Name"
            type="text"
            fullWidth
            value={labelName}
            onChange={(e) => setLabelName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="channel"
            label="Youtube Channel"
            type="text"
            fullWidth
            value={youtubeChannel}
            onChange={(e) => setLabelName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="url"
            label="Youtube URL"
            type="text"
            fullWidth
            value={youtubeUrl}
            onChange={(e) => setLabelName(e.target.value)}
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

export default AddLabelModal;
