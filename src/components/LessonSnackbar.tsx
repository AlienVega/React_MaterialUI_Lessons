import { Button, Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";

const LessonSnackbar = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleClick = () => {
    setOpenSnackbar(true);
  };
  const handleClose = () => {
    setOpenSnackbar(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        Geri Al
      </Button>
      <IconButton onClick={handleClose} sx={{ color: "white" }}>
        <CloseIcon />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
        autoHideDuration={3000}
        open={openSnackbar}
        onClose={handleClose}
        message="Hata mesajı aldınız"
        action={action}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </>
  );
};

export default LessonSnackbar;
