import { Link, Box } from "@mui/material";
const LessonLink = () => {
  return (
    <Box>
      <Link href="https://mui.com/material-ui/react-link/">web siteye git</Link>
      <Link href="https://mui.com/material-ui/react-link/" color="error">
        web siteye git
      </Link>
      <Link
        href="https://mui.com/material-ui/react-link/"
        color="error"
        variant="body2"
      >
        web siteye git
      </Link>
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        Button Link
      </Link>
    </Box>
  );
};

export default LessonLink;
