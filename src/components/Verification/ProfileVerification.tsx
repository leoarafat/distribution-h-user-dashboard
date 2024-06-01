import { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import { MdClose } from "react-icons/md";
import { BsCloudUpload } from "react-icons/bs";

const ProfileVerification = ({ data, onChange }) => {
  const [selectedProfileImage, setSelectedProfileImage] = useState(null);
  const [nidFront, setNidFront] = useState(null);
  const [nidBack, setNidBack] = useState(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    onChange("profile", { ...data?.profile, [name]: value });
  };

  const handleProfileImageUpload = (event: any) => {
    const file = event.target.files[0];
    setSelectedProfileImage(file);
    onChange("profile", { ...data?.profile, profileImage: file });
  };

  const handleNidFront = (event: any) => {
    const file = event.target.files[0];
    setNidFront(file as any);
    onChange("profile", { ...data?.profile, nidFront: file });
  };

  const handleNidBack = (event: any) => {
    const file = event.target.files[0];
    setNidBack(file as any);
    onChange("profile", { ...data?.profile, nidBack: file });
  };

  const handleProfileRemoveImage = () => {
    setSelectedProfileImage(null);
  };

  const handleFrontRemoveImage = () => {
    setNidFront(null);
  };

  const handleBackRemoveImage = () => {
    setNidBack(null);
  };

  return (
    <form>
      <Grid container spacing={3} alignItems="center">
        <div className="flex justify-between items-center w-full">
          {/* Profile Picture */}
          <div className="image_upload flex items-center justify-center flex-col p-3">
            <h4 className="mb-2 text-sm">Upload Profile Picture</h4>
            {selectedProfileImage ? (
              <div className="relative w-3/4">
                <img
                  src={URL.createObjectURL(selectedProfileImage)}
                  alt="Profile Picture"
                  className="w-[300px] h-[200px]"
                />
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  onClick={handleProfileRemoveImage}
                >
                  <MdClose />
                </button>
              </div>
            ) : (
              <label
                htmlFor="profile-upload"
                className="upload w-[230px] hover:bg-green-100 transition flex justify-center shadow-md rounded-md p-12 text-5xl cursor-pointer"
              >
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  name="profileImage"
                  style={{ display: "none" }}
                  onChange={handleProfileImageUpload}
                  required
                />
                <BsCloudUpload />
              </label>
            )}
          </div>

          {/* NID Front Image Uploader */}
          <div className="image_upload flex items-center justify-center flex-col p-3">
            <h4 className="mb-2 text-sm">Upload NID Front</h4>
            {nidFront ? (
              <div className="relative w-3/4">
                <img
                  src={URL.createObjectURL(nidFront)}
                  alt="NID Front"
                  className="w-[300px] h-[200px]"
                />
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  onClick={handleFrontRemoveImage}
                >
                  <MdClose />
                </button>
              </div>
            ) : (
              <label
                htmlFor="nid-front-upload"
                className="upload w-[230px] hover:bg-green-100 transition flex justify-center shadow-md rounded-md p-12 text-5xl cursor-pointer"
              >
                <input
                  id="nid-front-upload"
                  type="file"
                  accept="image/*"
                  name="nidFront"
                  style={{ display: "none" }}
                  onChange={handleNidFront}
                  required
                />
                <BsCloudUpload />
              </label>
            )}
          </div>

          {/* NID Back Image Uploader */}
          <div className="flex items-center justify-center flex-col p-3">
            <h4 className="mb-2 text-sm">Upload NID Back</h4>
            {nidBack ? (
              <div className="relative w-3/4">
                <img
                  src={URL.createObjectURL(nidBack)}
                  alt="NID Back"
                  className="w-[300px] h-[200px]"
                />
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  onClick={handleBackRemoveImage}
                >
                  <MdClose />
                </button>
              </div>
            ) : (
              <label
                htmlFor="nid-back-upload"
                className="upload w-[230px] hover:bg-green-100 transition flex justify-center shadow-md rounded-md p-12 text-5xl cursor-pointer"
              >
                <input
                  id="nid-back-upload"
                  type="file"
                  accept="image/*"
                  name="nidBack"
                  style={{ display: "none" }}
                  onChange={handleNidBack}
                  required
                />
                <BsCloudUpload />
              </label>
            )}
          </div>
        </div>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={data.profile.name || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="phoneNumber"
            label="Phone Number"
            variant="outlined"
            fullWidth
            value={data.profile.phoneNumber || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            disabled
            value={data.profile.email || ""}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default ProfileVerification;
