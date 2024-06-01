import React, { useState } from "react";

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  console.log(image);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {image ? (
        <img
          src={image}
          alt="Uploaded"
          className="mb-4 rounded-lg shadow-lg"
          style={{ maxWidth: "300px" }}
        />
      ) : (
        <div className="w-64 h-64 bg-gray-200 flex items-center justify-center rounded-lg shadow-lg mb-4">
          <span className="text-gray-400">No image selected</span>
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        id="imageUpload"
      />
      <label
        htmlFor="imageUpload"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg cursor-pointer"
      >
        Upload Image
      </label>
    </div>
  );
};

export default ImageUploader;
