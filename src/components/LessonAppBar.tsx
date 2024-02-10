import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import { useState } from "react";

const LessonAppBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openControl = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          Header örneği
        </Typography>
        <Stack direction="row" sx={{ marginLeft: "auto" }}>
          <Button sx={{ color: "white" }}>Anasayfa</Button>
          <Button sx={{ color: "white" }}>Hakkımızda</Button>
          <Button sx={{ color: "white" }}>Ürünler</Button>
          <Button sx={{ color: "white" }}>Fiyatlar</Button>
          <Button sx={{ color: "white" }} onClick={handleClick}>
            İndirimdekiler
          </Button>
        </Stack>
        <Menu anchorEl={anchorEl} open={openControl} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Kitaplar</MenuItem>
          <MenuItem onClick={handleClose}>Defterler</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default LessonAppBar;
