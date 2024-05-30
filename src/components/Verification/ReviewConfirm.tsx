// const ReviewConfirm = ({ data }: any) => {
//   return (
//     <div className="bg-white p-8 rounded-lg shadow-lg">
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold text-gray-800 mb-4">
//           Label Details
//         </h3>
//         <p>
//           <span className="font-medium text-gray-600">Company Names:</span>{" "}
//           {data.label.companyName}
//         </p>
//         <p>
//           <span className="font-medium text-gray-600">Label Names:</span>{" "}
//           {data.label.labelName}
//         </p>
//         <p>
//           <span className="font-medium text-gray-600">
//             YouTube Channel Link:
//           </span>{" "}
//           <a
//             href={data.label.youtubeChannel}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:underline"
//           >
//             {data.label.youtubeChannel}
//           </a>
//         </p>
//       </div>
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold text-gray-800 mb-4">
//           Account Details
//         </h3>
//         <p>
//           <span className="font-medium text-gray-600">Email:</span>{" "}
//           {data.profile.email}
//         </p>
//         <p>
//           <span className="font-medium text-gray-600">Phone:</span>{" "}
//           {data.profile.phoneNumber}
//         </p>
//       </div>
//       <div>
//         <h3 className="text-xl font-semibold text-gray-800 mb-4">
//           Address Details
//         </h3>
//         <p>
//           <span className="font-medium text-gray-600">Address:</span>{" "}
//           {data.address.address}
//         </p>
//         <p>
//           <span className="font-medium text-gray-600">City:</span>{" "}
//           {data.address.city}
//         </p>
//         <p>
//           <span className="font-medium text-gray-600">State:</span>{" "}
//           {data.address.state}
//         </p>
//         <p>
//           <span className="font-medium text-gray-600">Country:</span>{" "}
//           {data.address.country}
//         </p>
//         <p>
//           <span className="font-medium text-gray-600">Post Code:</span>{" "}
//           {data.address.postCode}
//         </p>
//       </div>
//     </div>
//   );
// };

import { Typography } from "@material-ui/core";

// export default ReviewConfirm;
const ReviewConfirm = ({ data }: any) => {
  return (
    <div>
      <Typography variant="h5">Label Details</Typography>
      <Typography>
        <strong>Company Names:</strong> {data.label.companyName}
      </Typography>
      <Typography>
        <strong>Label Names:</strong> {data.label.labelName}
      </Typography>
      <Typography>
        <strong>YouTube Channel Link:</strong>{" "}
        <a
          href={data.label.youtubeChannel}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.label.youtubeChannel}
        </a>
      </Typography>
      <Typography variant="h5">Account Details</Typography>
      <Typography>
        <strong>Email:</strong> {data.profile.email}
      </Typography>
      <Typography>
        <strong>Phone:</strong> {data.profile.phoneNumber}
      </Typography>
      <Typography variant="h5">Address Details</Typography>
      <Typography>
        <strong>Address:</strong> {data.address.address}
      </Typography>
      <Typography>
        <strong>City:</strong> {data.address.city}
      </Typography>
      <Typography>
        <strong>State:</strong> {data.address.state}
      </Typography>
      <Typography>
        <strong>Country:</strong> {data.address.country}
      </Typography>
      <Typography>
        <strong>Post Code:</strong> {data.address.postCode}
      </Typography>
    </div>
  );
};

export default ReviewConfirm;
