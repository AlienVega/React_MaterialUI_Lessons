import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import { useState } from "react";

const LessonDialog = () => {
  const [dialog, setDialog] = useState(false);

  const handleClickOpen = () => {
    setDialog(true);
  };
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.innerText);
    setDialog(false);
  };
  handleClose;
  return (
    <>
      <Button onClick={handleClickOpen}>Dialogu aç</Button>
      <Dialog open={dialog} onClose={handleClose}>
        <DialogTitle>Hangi yazılım teknolojisiyle ilgileniyorsun</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Front end Frameworklerinden hangisini seviyorsunuz
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleClose}>Angular</Button>
            <Button onClick={handleClose}>React Js</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LessonDialog;
