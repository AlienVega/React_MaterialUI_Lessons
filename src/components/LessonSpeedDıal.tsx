import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";

import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
const LessonSpeedDıal = () => {
  return (
    <Box sx={{ width: "100px", height: "100px" }}>
      <SpeedDial
        ariaLabel="navigation"
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        <SpeedDialAction
          icon={<FileCopyIcon />}
          tooltipTitle="copy"
          tooltipOpen
        />
        <SpeedDialAction
          icon={<PrintIcon />}
          tooltipTitle="PrintIcon"
          tooltipOpen
        />
        <SpeedDialAction
          icon={<ShareIcon />}
          tooltipTitle="ShareIcon"
          tooltipOpen
        />
      </SpeedDial>
    </Box>
  );
};

export default LessonSpeedDıal;
