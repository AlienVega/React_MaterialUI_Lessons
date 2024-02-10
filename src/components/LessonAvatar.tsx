import { Stack, Avatar, AvatarGroup } from "@mui/material";
const LessonAvatar = () => {
  return (
    <Stack direction="row" spacing={4}>
      <AvatarGroup>
        <Avatar src="https://randomuser.me/api/portraits/men/57.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/men/56.jpg" />
      </AvatarGroup>
      <AvatarGroup max={2}>
        <Avatar
          variant="rounded"
          sx={{
            width: "50px",
            height: "50px",
            bgcolor: "skyblue",
          }}
        >
          emre
        </Avatar>
        <Avatar sx={{ bgcolor: "skyblue" }}>can</Avatar>
        <Avatar
          variant="rounded"
          sx={{
            width: "50px",
            height: "50px",
            bgcolor: "skyblue",
          }}
        >
          emre
        </Avatar>
        <Avatar sx={{ bgcolor: "skyblue" }}>can</Avatar>
        <Avatar
          variant="rounded"
          sx={{
            width: "50px",
            height: "50px",
            bgcolor: "skyblue",
            marginRight: 10,
          }}
        >
          emre
        </Avatar>
        <Avatar sx={{ bgcolor: "skyblue" }}>can</Avatar>
      </AvatarGroup>
    </Stack>
  );
};

export default LessonAvatar;
