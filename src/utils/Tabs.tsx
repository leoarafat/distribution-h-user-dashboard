import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ColorTabs({ value, handleChange }: any) {
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Label Manage" />
        <Tab value="two" label="Artist Manage" />
        <Tab value="three" label="VEVO Channel Manage" />
      </Tabs>
    </Box>
  );
}
