import { Box } from "@mui/material";
const LessonBox = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        width: "200px",
        height: "200px",
        color: "white",
        padding: "50px",
        "&:hover": {
          backgroundColor: "secondary.main",
        },
      }}
    >
      LessonBox
    </Box>
  );
};

export default LessonBox;
