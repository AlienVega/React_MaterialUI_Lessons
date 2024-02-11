import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
const LessonTabs = () => {
  return (
    <Tabs aria-label="Basic tabs" defaultValue={0}>
      <TabList>
        <Tab>First tab</Tab>
        <Tab>Second tab</Tab>
        <Tab>Third tab</Tab>
      </TabList>
      <TabPanel value={0}>
        <b>First</b> tab panel
      </TabPanel>
      <TabPanel value={1}>
        <b>second</b> tab panel
      </TabPanel>
      <TabPanel value={2}>
        <b>third</b> tab panel
      </TabPanel>
    </Tabs>
  );
};

export default LessonTabs;
