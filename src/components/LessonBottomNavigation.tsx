import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
const LessonBottomNavigation = () => {
  const [nav, setNav] = useState<number>(0);

  return (
    <BottomNavigation
      showLabels
      value={nav}
      onChange={(_, newValue) => {
        setNav(newValue);
      }}
      sx={{ width: "100%", position: "absolute", bottom: 10 }}
    >
      <BottomNavigationAction label="Öncekiler" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Sevdiklerim" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Konumum" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
};

export default LessonBottomNavigation;
