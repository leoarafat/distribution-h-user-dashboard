import { useState } from "react";
import { Box } from "@mui/material";

import MyUploadsColorTabs from "../MyUploads/MyUploadsTabs";
import SuccessRelease from "./SuccessRelease/SuccessRelease";
import FinalizeMusic from "./FinalizeMusic/FinalizeMusic";
import CorrectionMusic from "./CorrectionMusic/CorrectionMusic";

const YoutubeManage = () => {
  const [activeTab, setActiveTab] = useState("one");

  const handleTabChange = (event: any, newValue: any) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <MyUploadsColorTabs value={activeTab} handleChange={handleTabChange} />
      <Box p={3}>
        {activeTab === "one" && <SuccessRelease />}
        {activeTab === "two" && <FinalizeMusic />}
        {activeTab === "three" && <CorrectionMusic />}
      </Box>
    </div>
  );
};

export default YoutubeManage;
