import { Grid, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const LabelVerification = ({ data, onChange }: any) => {
  const [dashboardImage, setDashboardImage] = useState(null);
  const [copyRightImage, setCoyRightImage] = useState(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    onChange("label", { ...data?.label, [name]: value });
  };

  const handleDashboardImageImageUpload = (event: any) => {
    const file = event.target.files[0];

    setDashboardImage(file as any);
    onChange("label", { ...data?.label, dashboardImage: file });
  };

  const handleCopyRightImage = (event: any) => {
    const file = event.target.files[0];
    setCoyRightImage(file as any);
    onChange("label", { ...data?.label, copyRightImage: file });
  };

  const handleDashboardRemoveImage = () => {
    setDashboardImage(null);
    onChange("label", { ...data?.label, dashboardImage: null });
  };

  const handleCopyRightRemoveImage = () => {
    setCoyRightImage(null);
    onChange("label", { ...data?.label, copyRightImage: null });
  };

  return (
    <form>
      <Grid container spacing={3}>
        <div className="flex justify-around items-center w-full">
          {/* Profile Picture */}
          <div className="image_upload flex items-center justify-center flex-col p-3">
            <h4 className="mb-2 text-sm">Upload Dashboard Image</h4>
            {dashboardImage ? (
              <div className="relative w-3/4">
                <img
                  src={URL.createObjectURL(dashboardImage)}
                  alt="Dashboard Picture"
                  className="w-[350px] h-[200px]"
                />
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  onClick={handleDashboardRemoveImage}
                >
                  <MdClose />
                </button>
              </div>
            ) : (
              <label
                htmlFor="dashboard_upload"
                className="upload w-[350px] hover:bg-green-100 transition flex justify-center shadow-md rounded-md p-12 text-5xl cursor-pointer"
              >
                <input
                  id="dashboard_upload"
                  type="file"
                  accept="image/*"
                  name="dashboardImage"
                  style={{ display: "none" }}
                  onChange={handleDashboardImageImageUpload}
                />
                <BsCloudUpload />
              </label>
            )}
          </div>

          {/* NID Front Image Uploader */}
          <div className="image_upload flex items-center justify-center flex-col p-3">
            <h4 className="mb-2 text-sm">Upload Copyright Image</h4>
            {copyRightImage ? (
              <div className="relative w-3/4">
                <img
                  src={URL.createObjectURL(copyRightImage)}
                  alt="Copyright Image"
                  className="w-[350px] h-[200px]"
                />
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  onClick={handleCopyRightRemoveImage}
                >
                  <MdClose />
                </button>
              </div>
            ) : (
              <label
                htmlFor="copyright"
                className="upload w-[350px] hover:bg-green-100 transition flex justify-center shadow-md rounded-md p-12 text-5xl cursor-pointer"
              >
                <input
                  id="copyright"
                  type="file"
                  accept="image/*"
                  name="copyRightImage"
                  style={{ display: "none" }}
                  onChange={handleCopyRightImage}
                  required
                />
                <BsCloudUpload />
              </label>
            )}
          </div>
        </div>
        <Grid item xs={6}>
          <TextField
            name="companyName"
            label="Company Name"
            variant="outlined"
            fullWidth
            value={data?.label.companyName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="labelName"
            label="Label Name"
            variant="outlined"
            fullWidth
            value={data?.label.labelName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="youtubeChannel"
            label="YouTube Channel Link"
            variant="outlined"
            fullWidth
            value={data.label.youtubeChannel}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="subscriber"
            label="Total Subscriber"
            variant="outlined"
            fullWidth
            value={data.label.subscriber}
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
