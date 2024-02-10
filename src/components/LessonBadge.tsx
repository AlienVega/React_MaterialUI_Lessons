import { Badge, Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
const LessonBadge = () => {
  return (
    <Stack direction="row" spacing={3}>
      <Badge badgeContent={4} color="primary">
        <MailIcon color="secondary" />
      </Badge>
      <Badge badgeContent={50} max={10} color="primary">
        <MailIcon color="secondary" />
      </Badge>
      <Badge
        badgeContent={50}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        color="primary"
      >
        <MailIcon color="secondary" />
      </Badge>
    </Stack>
  );
};

export default LessonBadge;
