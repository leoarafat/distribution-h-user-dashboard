// import { useEffect, useState } from "react";
// import { Upload, Input, Form, Row, Col } from "antd";
// import { UploadOutlined } from "@ant-design/icons";

// const ProfileVerification = ({ data, onChange }: any) => {
//   const [form] = Form.useForm();
//   const [profilePictureFileList, setProfilePictureFileList] = useState([]);
//   const [nidFrontFileList, setNidFrontFileList] = useState([]);
//   const [nidBackFileList, setNidBackFileList] = useState([]);
//   useEffect(() => {
//     form.setFieldsValue(data.profile);
//     if (data.profile.profilePicture && data.profile.profilePicture.fileList) {
//       setProfilePictureFileList(data.profile.profilePicture.fileList);
//     }
//     if (data.profile.nidFront && data.profile.nidFront.fileList) {
//       setNidFrontFileList(data.profile.nidFront.fileList);
//     }
//     if (data.profile.nidBack && data.profile.nidBack.fileList) {
//       setNidBackFileList(data.profile.nidBack.fileList);
//     }
//   }, [data.profile, form]);

//   const handleChange = (changedValues: any) => {
//     onChange("profile", { ...data.profile, ...changedValues });
//   };

//   return (
//     <Form layout="vertical" form={form} onValuesChange={handleChange}>
//       <Row
//         gutter={16}
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginBottom: "16px",
//         }}
//       >
//         <Col span={3}>
//           <Form.Item label="Upload Profile Picture" name="profilePicture">
//             <Upload
//               listType="picture-card"
//               beforeUpload={() => false}
//               maxCount={1}
//               fileList={profilePictureFileList}
//               style={{ width: "300px", height: "300px" }}
//             >
//               <div>
//                 <UploadOutlined style={{ fontSize: "40px" }} />{" "}
//                 <div style={{ fontSize: "20px" }}>Upload</div>{" "}
//               </div>
//             </Upload>
//           </Form.Item>
//         </Col>
//         <Col span={3}>
//           <Form.Item label="Upload NID (Front)" name="nidFront">
//             <Upload
//               listType="picture-card"
//               beforeUpload={() => false}
//               maxCount={1}
//               fileList={nidFrontFileList}
//             >
//               <div>
//                 <UploadOutlined style={{ fontSize: "40px" }} />
//                 <div style={{ fontSize: "20px" }}>Upload</div>
//               </div>
//             </Upload>
//           </Form.Item>
//         </Col>
//         <Col span={3}>
//           <Form.Item label="Upload NID (Back)" name="nidBack">
//             <Upload
//               listType="picture-card"
//               beforeUpload={() => false}
//               maxCount={1}
//               fileList={nidBackFileList}
//             >
//               <div>
//                 <UploadOutlined style={{ fontSize: "40px" }} />
//                 <div style={{ fontSize: "20px" }}>Upload</div>
//               </div>
//             </Upload>
//           </Form.Item>
//         </Col>
//       </Row>
//       <Row gutter={16}>
//         <Col span={12}>
//           <Form.Item label="Name" name="name">
//             <Input placeholder="Enter name" />
//           </Form.Item>
//         </Col>
//         <Col span={12}>
//           <Form.Item label="Phone Number" name="phoneNumber">
//             <Input placeholder="Enter phone number" />
//           </Form.Item>
//         </Col>
//       </Row>
//       <Row gutter={16}>
//         <Col span={24}>
//           <Form.Item label="Email" name="email">
//             <Input placeholder="Enter email" />
//           </Form.Item>
//         </Col>
//       </Row>
//     </Form>
//   );
// };

// export default ProfileVerification;
// import { Grid, TextField } from "@material-ui/core";
// import { useEffect, useState } from "react";

// import { MdClose, MdOutlineFileUpload } from "react-icons/md";
// const ProfileVerification = ({ data, onChange }) => {
//   const [selectedProfileImage, setSelectedProfileImage] = useState<File | null>(
//     null
//   );
//   const [nidFront, setNidFront] = useState<File | null>(null);
//   const [nidBack, setNidBack] = useState<File | null>(null);

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     onChange("profile", { ...data.profile, [name]: value });
//   };
//   const handleProfileImageUpload = (event: any) => {
//     const file = event.target.files[0];
//     setSelectedProfileImage(file);
//   };
//   const handleNidFront = (event: any) => {
//     const file = event.target.files[0];
//     setNidFront(file);
//   };
//   const handleNidBack = (event: any) => {
//     const file = event.target.files[0];
//     setNidBack(file);
//   };
//   const handleProfileRemoveImage = () => {
//     setSelectedProfileImage(null);
//   };
//   const handleFrontRemoveImage = () => {
//     setNidFront(null);
//   };
//   const handleBackRemoveImage = () => {
//     setNidBack(null);
//   };

//   return (
//     <form>
//       <Grid container spacing={3} alignItems="center">
//         <div className="flex justify-between items-center w-full">
//           {/* Profile Picture */}

//           <div className="image_upload flex items-center justify-center flex-col p-3">
//             <h4 className="mb-2 text-sm ">Upload Profile picture</h4>
//             {selectedProfileImage ? (
//               <div className="relative w-3/4">
//                 <img
//                   src={URL.createObjectURL(selectedProfileImage)}
//                   alt="Profile Picture"
//                   className="w-[300px] h-[200px] "
//                 />
//                 <button
//                   className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
//                   onClick={handleProfileRemoveImage}
//                 >
//                   <MdClose />
//                 </button>
//               </div>
//             ) : (
//               <label
//                 htmlFor="file-upload"
//                 className={`upload w-[230px] hover:bg-green-100 transition flex justify-center shadow-md rounded-md p-12 text-5xl cursor-pointer`}
//               >
//                 <input
//                   id="file-upload"
//                   type="file"
//                   accept="image/*"
//                   name="image"
//                   style={{ display: "none" }}
//                   onChange={handleProfileImageUpload}
//                   required
//                 />
//                 <MdOutlineFileUpload />
//               </label>
//             )}
//           </div>

//           {/* NID Front Image Uploader */}
//           <div className="image_upload flex items-center justify-center flex-col p-3">
//             <h4 className="mb-2 text-sm ">Upload Nid Front</h4>
//             {nidFront ? (
//               <div className="relative w-3/4">
//                 <img
//                   src={URL.createObjectURL(nidFront)}
//                   alt="Nid Front"
//                   className="w-[300px] h-[200px]"
//                 />
//                 <button
//                   className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
//                   onClick={handleFrontRemoveImage}
//                 >
//                   <MdClose />
//                 </button>
//               </div>
//             ) : (
//               <label
//                 htmlFor="file-upload"
//                 className={`upload w-[230px]  hover:bg-green-100 transition flex justify-center shadow-md rounded-md p-12 text-5xl cursor-pointer`}
//               >
//                 <input
//                   id="file-upload"
//                   type="file"
//                   accept="image/*"
//                   name="nidFront"
//                   style={{ display: "none" }}
//                   onChange={handleNidFront}
//                   required
//                 />
//                 <MdOutlineFileUpload />
//               </label>
//             )}
//           </div>
//           {/* NID Back Image Uploader */}
//           <div className=" flex items-center justify-center flex-col p-3">
//             <h4 className="mb-2 text-sm ">Upload Nid Back</h4>
//             {nidBack ? (
//               <div className="relative w-3/4">
//                 <img
//                   src={URL.createObjectURL(nidBack)}
//                   alt="Nid Back"
//                   className="w-[300px] h-[200px]"
//                 />
//                 <button
//                   className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
//                   onClick={handleBackRemoveImage}
//                 >
//                   <MdClose />
//                 </button>
//               </div>
//             ) : (
//               <label
//                 htmlFor="file-upload"
//                 className={`upload w-[230px]  hover:bg-green-100 transition flex justify-center shadow-md rounded-md p-12 text-5xl cursor-pointer`}
//               >
//                 <input
//                   id="file-upload"
//                   type="file"
//                   accept="image/*"
//                   name="nidBack"
//                   style={{ display: "none" }}
//                   onChange={handleNidBack}
//                   required
//                 />
//                 <MdOutlineFileUpload />
//               </label>
//             )}
//           </div>
//         </div>
//         <Grid item xs={12}>
//           <TextField
//             name="name"
//             label="Name"
//             variant="outlined"
//             fullWidth
//             value={data.profile.name}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             name="phoneNumber"
//             label="Phone Number"
//             variant="outlined"
//             fullWidth
//             value={data.profile.phoneNumber}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             name="email"
//             label="Email"
//             variant="outlined"
//             fullWidth
//             value={data.profile.email}
//             onChange={handleChange}
//           />
//         </Grid>
//       </Grid>
//     </form>
//   );
// };

// export default ProfileVerification;
import { useEffect, useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import { MdOutlineFileUpload, MdClose } from "react-icons/md";

const ProfileVerification = ({ data, onChange }) => {
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
  }, [data.profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange("profile", { ...data.profile, [name]: value });
  };

  const handleProfileImageUpload = (event) => {
    const file = event.target.files[0];
    if (file instanceof Blob) {
      file.preview = URL.createObjectURL(file);
      setSelectedProfileImage(file);
      onChange("profile", { ...data.profile, profileImage: file });
    }
  };

  const handleNidFront = (event) => {
    const file = event.target.files[0];
    if (file instanceof Blob) {
      file.preview = URL.createObjectURL(file);
      setNidFront(file);
      onChange("profile", { ...data.profile, nidFront: file });
    }
  };

  const handleNidBack = (event) => {
    const file = event.target.files[0];
    if (file instanceof Blob) {
      file.preview = URL.createObjectURL(file);
      setNidBack(file);
      onChange("profile", { ...data.profile, nidBack: file });
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

  const handleBackRemoveImage = () => {
    if (nidBack) {
      URL.revokeObjectURL(nidBack.preview);
      setNidBack(null);
      onChange("profile", { ...data.profile, nidBack: null });
    }
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
                <MdOutlineFileUpload />
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
                <MdOutlineFileUpload />
              </label>
            )}
          </div>

          {/* NID Back Image Uploader */}
          <div className="flex items-center justify-center flex-col p-3">
            <h4 className="mb-2 text-sm">Upload NID Back</h4>
            {nidBack ? (
              <div className="relative w-3/4">
                <img
                  src={nidBack.preview}
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
                <MdOutlineFileUpload />
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
            value={data.profile.email || ""}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default ProfileVerification;
