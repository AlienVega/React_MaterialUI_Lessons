import { Drawer, Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const LessonDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <IconButton size="large" onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box width="250px" textAlign="center">
          <Typography variant="h6" component="div">
            Soldaki panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default LessonDrawer;
