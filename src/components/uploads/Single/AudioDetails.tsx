/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useEffect, useCallback } from "react";
import { Grid, TextField } from "@material-ui/core";
import { MdClose } from "react-icons/md";
import { BsCloudUpload } from "react-icons/bs";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
const AudioDetails = ({ data, onChange }: any) => {
  const [coverImage, setCoverImage] = useState(null);
  const [audioFile, setAudioFile] = useState(null);

  const handleCoverImageUpload = (event: any) => {
    const file = event.target.files[0];

    setCoverImage(file as any);
    onChange("audio", { ...data?.audio, coverImage: file });
  };

  const handleAudioUpload = (event: any) => {
    const file = event.target.files[0];
    setAudioFile(file as any);
    onChange("audio", { ...data?.audio, audioFile: file });
  };

  const handleCoverImageRemoveImage = () => {
    setCoverImage(null);
    onChange("audio", { ...data?.audio, coverImage: null });
  };

  const handleAudioRemove = () => {
    setAudioFile(null);
    onChange("audio", { ...data?.audio, audioFile: null });
  };

  return (
    <form>
      <Grid container spacing={3} alignItems="center">
        <div className="flex justify-center items-center w-full">
          {/* Cover Image Uploader */}
          <div className="image_upload flex items-center justify-center flex-col p-3">
            {coverImage ? (
              <div className="relative w-3/4">
                <img
                  //@ts-ignore
                  src={coverImage ? URL.createObjectURL(coverImage) : null}
                  alt="COVER IMAGE"
                  className="w-[300px] h-[200px]"
                />
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  onClick={handleCoverImageRemoveImage}
                >
                  <MdClose />
                </button>
              </div>
            ) : (
              <label
                htmlFor="cover-image-upload"
                className="upload w-[230px] hover:bg-green-100 transition flex justify-center shadow-md rounded-md p-12 text-5xl cursor-pointer"
              >
                <input
                  id="cover-image-upload"
                  type="file"
                  accept="image/*"
                  name="coverImage"
                  style={{ display: "none" }}
                  onChange={handleCoverImageUpload}
                  required
                />
                <BsCloudUpload style={{ fontSize: 100 }} />
              </label>
            )}
          </div>

          {/* Audio File Uploader */}
          <div className="image_upload flex items-center justify-center flex-col p-3">
            <h4 className="mb-2 text-sm">Upload Audio</h4>
            {audioFile ? (
              <div className="relative w-3/4">
                <audio controls style={{ display: "block", marginTop: "10px" }}>
                  <source
                    src={URL.createObjectURL(audioFile)}
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio tag.
                </audio>
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  onClick={handleAudioRemove}
                >
                  <MdClose />
                </button>
              </div>
            ) : (
              <label
                htmlFor="audio-upload"
                className="upload w-[230px] hover:bg-green-100 transition flex justify-center shadow-md rounded-md p-12 text-5xl cursor-pointer"
              >
                <input
                  id="audio-upload"
                  type="file"
                  accept="audio/*"
                  name="audioFile"
                  style={{ display: "none" }}
                  onChange={handleAudioUpload}
                  required
                />
                <AudiotrackIcon style={{ fontSize: 100 }} />
              </label>
            )}
          </div>
        </div>
      </Grid>
    </form>
  );
};

export default AudioDetails;
