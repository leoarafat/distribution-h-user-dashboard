import React from "react";

const ReviewConfirm = ({ data }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Label Details
        </h3>
        <p>
          <span className="font-medium text-gray-600">Company Names:</span>{" "}
          {data.label.companyName}
        </p>
        <p>
          <span className="font-medium text-gray-600">Label Names:</span>{" "}
          {data.label.labelName}
        </p>
        <p>
          <span className="font-medium text-gray-600">
            YouTube Channel Link:
          </span>{" "}
          <a
            href={data.label.youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {data.label.youtubeChannel}
          </a>
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Account Details
        </h3>
        <p>
          <span className="font-medium text-gray-600">Email:</span>{" "}
          {data.profile.email}
        </p>
        <p>
          <span className="font-medium text-gray-600">Phone:</span>{" "}
          {data.profile.phoneNumber}
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Address Details
        </h3>
        <p>
          <span className="font-medium text-gray-600">Address:</span>{" "}
          {data.address.address}
        </p>
        <p>
          <span className="font-medium text-gray-600">City:</span>{" "}
          {data.address.city}
        </p>
        <p>
          <span className="font-medium text-gray-600">State:</span>{" "}
          {data.address.state}
        </p>
        <p>
          <span className="font-medium text-gray-600">Country:</span>{" "}
          {data.address.country}
        </p>
        <p>
          <span className="font-medium text-gray-600">Post Code:</span>{" "}
          {data.address.postCode}
        </p>
      </div>
    </div>
  );
};

export default ReviewConfirm;
