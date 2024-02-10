import Typography from "@mui/material/Typography";

export const LessonTypography = () => {
  return (
    <div>
      <Typography variant="body1">
        body1- Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptate fuga incidunt, beatae ex sequi minima delectus ab sint
        voluptatum sunt, molestias, autem possimus iste qui. Quod ipsam
        distinctio itaque dicta.
      </Typography>
      <Typography variant="body2">
        body2- Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptate fuga incidunt, beatae ex sequi minima delectus ab sint
        voluptatum sunt, molestias, autem possimus iste qui. Quod ipsam
        distinctio itaque dicta.
      </Typography>
      <Typography variant="h1">h1</Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h6">h6</Typography>

      <Typography variant="h1" component={"h6"}>
        h1
      </Typography>

      <Typography variant="h6" align="left">
        h1
      </Typography>
      <hr />
      <Typography variant="caption">altbaşlık1</Typography>

      <Typography variant="inherit">altbaşlık12</Typography>
    </div>
  );
};
