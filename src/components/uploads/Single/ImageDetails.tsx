import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";

const ImageDetails: React.FC = () => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name="image"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Image URL"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        )}
      />
    </div>
  );
};

export default ImageDetails;
