// import React, { useEffect, useRef, useState } from "react";
// import { Box, Typography, Paper, Grid, Button, Divider } from "@mui/material";
// import SignatureCanvas from "react-signature-canvas";
// import { useProfileQuery } from "@/redux/slices/admin/userApi";

// const AgreementPage = ({ data, onChange }: any) => {
//   const [signature, setSignature] = useState(null);
//   const sigCanvas = useRef<SignatureCanvas>(null);
//   const { data: profileData } = useProfileQuery({});
//   const [initialSetupDone, setInitialSetupDone] = useState(false);

//   useEffect(() => {
//     if (profileData?.data && !initialSetupDone) {
//       const initialProfileData = {
//         signature: profileData.data.signature || null,
//       };

//       onChange("agreement", initialProfileData);
//       setSignature(profileData.data.signature || null);

//       setInitialSetupDone(true);
//     }
//   }, [profileData, initialSetupDone, onChange]);

//   const clearSignature = () => {
//     sigCanvas.current?.clear();
//     setSignature(null);
//   };

//   const handleSignatureChange = async () => {
//     if (sigCanvas.current) {
//       const signatureDataUrl = sigCanvas.current
//         .getTrimmedCanvas()
//         .toDataURL("image/png");
//       const blob = await (await fetch(signatureDataUrl)).blob();
//       onChange("agreement", { ...data?.agreement, signature: blob });
//     }
//   };

//   const mockData = {
//     name: "John Doe",
//     phoneNumber: "+1234567890",
//     nidNumber: "12345678901234",
//     channelName: "JohnDoeMusic",
//     channelUrl: "https://youtube.com/johndoemusic",
//     companyOwnerName: "Hasanuzzaman",
//     ownerDesignation: "CEO",
//     companyName: "Be Musix Limited",
//     companyAddress: "123 Music Avenue, City, Country",
//     createdDate: "2023-01-01",
//   };

//   return (
//     <Box sx={{ padding: 3 }}>
//       <Paper sx={{ padding: 3, maxWidth: 800, margin: "0 auto" }}>
//         <Typography variant="h4" gutterBottom>
//           Music Distribution Agreement
//         </Typography>
//         <Typography variant="body1" paragraph>
//           This Music Distribution Agreement ("Agreement") is entered into as of
//           [Date] between {mockData.companyName}, having its principal place of
//           business at {mockData.companyAddress} ("Company") and {mockData.name},
//           having its principal place of business at [Artist Address] ("Artist").
//         </Typography>
//         <Typography variant="body1" paragraph>
//           The Company agrees to distribute the Artist's music under the terms
//           and conditions set forth in this Agreement.
//         </Typography>
//         <Divider sx={{ marginY: 2 }} />
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <Typography variant="h6" gutterBottom>
//               Artist Information
//             </Typography>
//             <Box
//               sx={{ border: "1px solid black", padding: 2, borderRadius: 1 }}
//             >
//               <Typography variant="body1">
//                 <strong>Name:</strong> {mockData.name}
//               </Typography>
//               <Typography variant="body1">
//                 <strong>Phone Number:</strong> {mockData.phoneNumber}
//               </Typography>
//               <Typography variant="body1">
//                 <strong>NID Number:</strong> {mockData.nidNumber}
//               </Typography>
//               <Typography variant="body1">
//                 <strong>Channel Name:</strong> {mockData.channelName}
//               </Typography>
//               <Typography variant="body1">
//                 <strong>Channel URL:</strong>{" "}
//                 <a
//                   href={mockData.channelUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {mockData.channelUrl}
//                 </a>
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Typography variant="h6" gutterBottom>
//               Company Information
//             </Typography>
//             <Box
//               sx={{ border: "1px solid black", padding: 2, borderRadius: 1 }}
//             >
//               <Typography variant="body2" align="center">
//                 For and on behalf of {mockData.companyName}
//               </Typography>
//               <Divider />
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   marginTop: 1,
//                 }}
//               >
//                 <Typography
//                   variant="body1"
//                   sx={{ fontFamily: "cursive", fontSize: 24 }}
//                 >
//                   Hasan
//                 </Typography>
//                 <Divider sx={{ width: "100%", marginY: 1 }} />
//                 <Typography variant="body1">
//                   <strong>Name:</strong> {mockData.companyOwnerName}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Designation:</strong> {mockData.ownerDesignation},{" "}
//                   {mockData.companyName}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Date:</strong> {mockData.createdDate}
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//         <Divider sx={{ marginY: 2 }} />
//         <Typography variant="h6" gutterBottom>
//           Signature
//         </Typography>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             marginBottom: 2,
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <SignatureCanvas
//               ref={sigCanvas}
//               penColor="black"
//               canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
//               onEnd={handleSignatureChange}
//             />
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 width: "100%",
//                 marginTop: 2,
//               }}
//             >
//               <Button
//                 variant="outlined"
//                 color="secondary"
//                 onClick={clearSignature}
//               >
//                 Clear
//               </Button>
//             </Box>
//           </Box>
//           <Box
//             sx={{
//               textAlign: "right",
//             }}
//           >
//             <Typography variant="body1">
//               <strong>{mockData.companyOwnerName}</strong>
//             </Typography>
//             <Typography variant="body1">{mockData.ownerDesignation}</Typography>
//             <Typography variant="body1">{mockData.companyName}</Typography>
//           </Box>
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default AgreementPage;
import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Paper, Grid, Button, Divider } from "@mui/material";
import SignatureCanvas from "react-signature-canvas";
import { useProfileQuery } from "@/redux/slices/admin/userApi";

const AgreementPage = ({ data, onChange }: any) => {
  const [signature, setSignature] = useState(null);
  const sigCanvas = useRef<SignatureCanvas>(null);
  const { data: profileData } = useProfileQuery({});
  const [initialSetupDone, setInitialSetupDone] = useState(false);

  useEffect(() => {
    if (profileData?.data && !initialSetupDone) {
      const initialProfileData = {
        signature: profileData.data.signature || null,
      };

      onChange("agreement", initialProfileData);
      setSignature(profileData.data.signature || null);

      setInitialSetupDone(true);
    }
  }, [profileData, initialSetupDone, onChange]);

  const clearSignature = () => {
    sigCanvas.current?.clear();
    setSignature(null);
  };

  const handleSignatureChange = async () => {
    if (sigCanvas.current) {
      const signatureDataUrl = sigCanvas.current
        .getTrimmedCanvas()
        .toDataURL("image/png");
      const blob = await (await fetch(signatureDataUrl)).blob();
      onChange("agreement", { ...data?.agreement, signature: blob });
    }
  };

  const mockData = {
    name: "John Doe",
    phoneNumber: "+1234567890",
    nidNumber: "12345678901234",
    channelName: "JohnDoeMusic",
    channelUrl: "https://youtube.com/johndoemusic",
    companyOwnerName: "Hasanuzzaman",
    ownerDesignation: "CEO",
    companyName: "Be Musix Limited",
    companyAddress: "1-2 Holborn, London, EC1N 2LL, United Kingdom",
    createdDate: "2023-01-01",
  };
  const currentDate = new Date();
  return (
    <Box sx={{ padding: 3 }}>
      <Paper sx={{ padding: 3, maxWidth: 800, margin: "0 auto" }}>
        <Typography variant="h4" gutterBottom>
          Music Distribution Agreement
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="h6" gutterBottom>
          Agreement Date
        </Typography>
        <Typography variant="body1" paragraph>
          This Music Distribution Agreement ("Agreement") is entered into as of{" "}
          {currentDate.toDateString()} between {mockData.companyName}, having
          its principal place of business at {mockData.companyAddress}{" "}
          ("Company") and {mockData.name}, having its principal place of
          business at [Artist Address] ("Artist").
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="h6" gutterBottom>
          Distribution Terms
        </Typography>
        <Typography variant="body1" paragraph>
          The Company agrees to distribute the Artist's music under the terms
          and conditions set forth in this Agreement. The content includes all
          recordings, music videos, and ancillary material that the contractor
          owns or controls during the exclusive distribution period.
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="h6" gutterBottom>
          Worldwide Rights
        </Typography>
        <Typography variant="body1" paragraph>
          The agreement covers worldwide distribution rights. The initial period
          is three years from the date the first recording is delivered. This
          period can be automatically extended for successive one-year periods
          unless either party sends a termination notice three months before the
          start of an extended period. The contractor cannot terminate the
          agreement if their balance account is negative, except after 10 years
          from the initial period.
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="h6" gutterBottom>
          Financial Terms
        </Typography>
        <Typography variant="body1" paragraph>
          70% of the net receipts will be paid to the contractor by Be Musix
          Limited, after deductions for mechanical rights, duties, and taxes.
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="h6" gutterBottom>
          Exclusive Rights
        </Typography>
        <Typography variant="body1" paragraph>
          Be Musix Limited is granted exclusive rights to distribute and market
          the content, digitize, reproduce, and make the content available to
          the public and third parties. They also have non-exclusive rights to
          use the artist's name and likeness for promotion.
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="h6" gutterBottom>
          Agreement Modifications
        </Typography>
        <Typography variant="body1" paragraph>
          The agreement can be modified to adapt to the evolving digital music
          distribution market, with contractor approval via an opt-in process on
          the dashboard.
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="h6" gutterBottom>
          Warranties
        </Typography>
        <Typography variant="body1" paragraph>
          The contractor represents and warrants that they have the authority to
          enter the agreement, have exclusive rights to the artist's
          performances, and that the content does not infringe on third-party
          rights or applicable laws.
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="h6" gutterBottom>
          Third-Party Claims
        </Typography>
        <Typography variant="body1" paragraph>
          If a third party makes a claim against Be Musix Limited regarding the
          content, the contractor must take necessary actions to settle the
          claim. Be Musix Limited can also take measures to stop the claim,
          including suspending or terminating the agreement.
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="h6" gutterBottom>
          Audit Rights
        </Typography>
        <Typography variant="body1" paragraph>
          The contractor has the right to audit Be Musix Limited's records to
          verify the accuracy of financial statements once a year.
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography
              style={{ textAlign: "center" }}
              variant="h6"
              gutterBottom
            >
              Artist Information
            </Typography>
            <Box
              sx={{ border: "1px solid black", padding: 2, borderRadius: 1 }}
            >
              <Typography variant="body1">
                <strong>Name:</strong> {mockData.name}
              </Typography>
              <Typography variant="body1">
                <strong>Phone Number:</strong> {mockData.phoneNumber}
              </Typography>
              <Typography variant="body1">
                <strong>NID Number:</strong> {mockData.nidNumber}
              </Typography>
              <Typography variant="body1">
                <strong>Channel Name:</strong> {mockData.channelName}
              </Typography>
              <Typography variant="body1">
                <strong>Channel URL:</strong>{" "}
                <a
                  href={mockData.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {mockData.channelUrl}
                </a>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              style={{ textAlign: "center" }}
              variant="h6"
              gutterBottom
            >
              Company Information
            </Typography>
            <Box
              sx={{ border: "1px solid black", padding: 2, borderRadius: 1 }}
            >
              <Typography variant="body2" align="center">
                For and on behalf of {mockData.companyName}
              </Typography>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: 1,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "cursive", fontSize: 24 }}
                >
                  Hasan
                </Typography>
                <Divider sx={{ width: "100%", marginY: 1 }} />
                <Typography variant="body1">
                  <strong>Name:</strong> {mockData.companyOwnerName}
                </Typography>
                <Typography variant="body1">
                  <strong>Designation:</strong> {mockData.ownerDesignation},{" "}
                  {mockData.companyName}
                </Typography>
                <Typography variant="body1">
                  <strong>Date:</strong> {mockData.createdDate}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="h6" gutterBottom>
          Signature
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <SignatureCanvas
              ref={sigCanvas}
              penColor="black"
              canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
              onEnd={handleSignatureChange}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: 2,
              }}
            >
              <Button
                variant="outlined"
                color="secondary"
                onClick={clearSignature}
              >
                Clear
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              textAlign: "right",
            }}
          >
            <Typography variant="body1">
              <strong>{mockData.companyOwnerName}</strong>
            </Typography>
            <Typography variant="body1">{mockData.ownerDesignation}</Typography>
            <Typography variant="body1">{mockData.companyName}</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default AgreementPage;
