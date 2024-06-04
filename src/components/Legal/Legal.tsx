import { useState } from "react";
import { Box } from "@mui/material";
import YoutubeColorTabs from "../Youtube/YoutubeTabs";
import ClaimRelease from "../Youtube/ClaimRelease/ClaimRelease";
import ArtistChannelRequest from "../Youtube/ArtistChannelRequest/ArtistChannelRequest";
import WhiteListRequest from "../Youtube/WhiteListRequest/WhiteListRequest";

const Legal = () => {
  const [activeTab, setActiveTab] = useState("one");

  const handleTabChange = (event: any, newValue: any) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <YoutubeColorTabs value={activeTab} handleChange={handleTabChange} />
      <Box p={3}>
        {activeTab === "one" && <ClaimRelease />}
        {activeTab === "two" && <ArtistChannelRequest />}
        {activeTab === "three" && <WhiteListRequest />}
      </Box>
    </div>
  );
};

export default Legal;
