import { CircularProgress, Stack, LinearProgress } from "@mui/material";
const LessonProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
      <CircularProgress color="primary" />
      <CircularProgress variant="determinate" value={25} color="primary" />
      <LinearProgress variant="determinate" value={25} color="success" />
    </Stack>
  );
};

export default LessonProgress;
