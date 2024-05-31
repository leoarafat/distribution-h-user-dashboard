import { Grid, TextField } from "@material-ui/core";
import { useEffect } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const LabelVerification = ({ data, onChange }: any) => {
  // useEffect(() => {
  //   // Set initial form values
  // }, []);

  // const handleChange = (e: { target: { name: any; value: any } }) => {
  //   const { name, value } = e.target;
  //   onChange("label", { ...data.label, [name]: value });
  // };
  const [selectedProfileImage, setSelectedProfileImage] = useState(null);
  const [nidFront, setNidFront] = useState(null);
  const [nidBack, setNidBack] = useState(null);

  useEffect(() => {
    if (data.profile.profileImage) {
      const file = data.profile.profileImage;
      if (file instanceof Blob) {
        file.preview = URL.createObjectURL(file);
        setSelectedProfileImage(file);
      }
    }
    if (data.profile.nidFront) {
      const file = data.profile.nidFront;
      if (file instanceof Blob) {
        file.preview = URL.createObjectURL(file);
        setNidFront(file);
      }
    }
    if (data.profile.nidBack) {
      const file = data.profile.nidBack;
      if (file instanceof Blob) {
        file.preview = URL.createObjectURL(file);
        setNidBack(file);
      }
    }

    return () => {
      if (selectedProfileImage && selectedProfileImage.preview) {
        URL.revokeObjectURL(selectedProfileImage.preview);
      }
      if (nidFront && nidFront.preview) {
        URL.revokeObjectURL(nidFront.preview);
      }
      if (nidBack && nidBack.preview) {
        URL.revokeObjectURL(nidBack.preview);
      }
    };
  }, [data.profile, nidBack, nidFront, selectedProfileImage]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    onChange("label", { ...data.label, [name]: value });
  };

  const handleProfileImageUpload = (event: any) => {
    const file = event.target.files[0];
    if (file instanceof Blob) {
      file.preview = URL.createObjectURL(file);
      setSelectedProfileImage(file as any);
      onChange("profile", { ...data.profile, profileImage: file });
    }
  };

  const handleNidFront = (event: any) => {
    const file = event.target.files[0];
    if (file instanceof Blob) {
      file.preview = URL.createObjectURL(file);
      setNidFront(file as any);
      onChange("profile", { ...data.profile, nidFront: file });
    }
  };

  const handleProfileRemoveImage = () => {
    if (selectedProfileImage) {
      URL.revokeObjectURL(selectedProfileImage.preview);
      setSelectedProfileImage(null);
      onChange("profile", { ...data.profile, profileImage: null });
    }
  };

  const handleFrontRemoveImage = () => {
    if (nidFront) {
      URL.revokeObjectURL(nidFront.preview);
      setNidFront(null);
      onChange("profile", { ...data.profile, nidFront: null });
    }
  };

  return (
    <form>
      <Grid container spacing={3}>
        <div className="flex justify-between items-center w-full">
          {/* Profile Picture */}
          <div className="image_upload flex items-center justify-center flex-col p-3">
            <h4 className="mb-2 text-sm">Upload Profile Picture</h4>
            {selectedProfileImage ? (
              <div className="relative w-3/4">
                <img
                  src={selectedProfileImage?.preview}
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
                  src={nidFront.preview}
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
        </div>
        <Grid item xs={12}>
          <TextField
            name="companyName"
            label="Company Name"
            variant="outlined"
            fullWidth
            value={data.label.companyName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="labelName"
            label="Label Name"
            variant="outlined"
            fullWidth
            value={data.label.labelName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="youtubeChannel"
            label="YouTube Channel Link"
            variant="outlined"
            fullWidth
            value={data.label.youtubeChannel}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={data.label.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="phoneNumber"
            label="Phone Number"
            variant="outlined"
            fullWidth
            value={data.label.phoneNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="address"
            label="Address"
            variant="outlined"
            fullWidth
            value={data.label.address}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default LabelVerification;
