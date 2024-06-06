import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";

const AudioDetails: React.FC = () => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name="audio.path"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Audio Path"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        )}
      />
      <Controller
        name="audio.duration"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Audio Duration"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        )}
      />
    </div>
  );
};

export default AudioDetails;
