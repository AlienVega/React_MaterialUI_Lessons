import { Link, Breadcrumbs } from "@mui/material";
const LessonBreadcrumbs = () => {
  return (
    <Breadcrumbs maxItems={2} separator=">">
      <Link href="#" underline="hover">
        anasayfa
      </Link>
      <Link color="inherit">blog</Link>
      <Link>anasayfa</Link>
      <Link>blog</Link>
      <Link>anasayfa</Link>
      <Link>blog</Link>
      <Link>anasayfa</Link>
    </Breadcrumbs>
  );
};

export default LessonBreadcrumbs;
