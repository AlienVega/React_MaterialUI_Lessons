import { Grid, Box } from "@mui/material";
const LessonGrid = () => {
  return (
    <Box>
      <Grid sx={{ border: "1px solid black" }} container>
        <Grid sx={{ border: "1px solid black" }} xs={12} md={8}>
          8 birimlik
        </Grid>
        <Grid sx={{ border: "1px solid black" }} xs={12} md={4}>
          4 birimlik
        </Grid>
        <Grid sx={{ border: "1px solid black" }} xs={12} md={8}>
          8 birimlik
        </Grid>
        <Grid sx={{ border: "1px solid black" }} xs={12} md={4}>
          4 birimlik
        </Grid>
      </Grid>
      {/* <Grid sx={{ border: "1px solid black" }} container>
        <Grid sx={{ border: "1px solid black" }} xs={8}>
          8 birimlik
        </Grid>
        <Grid sx={{ border: "1px solid black" }} xs={4}>
          4 birimlik
        </Grid>
        <Grid sx={{ border: "1px solid black" }} xs={8}>
          8 birimlik
        </Grid>
        <Grid sx={{ border: "1px solid black" }} xs={4}>
          4 birimlik
        </Grid>
      </Grid> */}
    </Box>
  );
};

export default LessonGrid;
