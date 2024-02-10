import { Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const LessonButton = () => {
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={3}>
        <Button variant="text">text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>
      <Stack direction={"row"} spacing={3}>
        <Button variant="text" color="primary">
          mavi
        </Button>
        <Button variant="text" color="secondary">
          mor
        </Button>
        <Button variant="text" color="success">
          Yeşil
        </Button>
        <Button variant="text" color="error">
          error
        </Button>
        <Button variant="text" color="info">
          info
        </Button>
      </Stack>
      <Stack direction={"row"} spacing={3}>
        <Button variant="outlined" color="primary">
          mavi
        </Button>
        <Button variant="outlined" color="secondary">
          mor
        </Button>
        <Button variant="outlined" color="success">
          Yeşil
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
      </Stack>
      <Stack direction={"row"} spacing={3}>
        <Button variant="contained" color="primary">
          mavi
        </Button>
        <Button variant="contained" color="secondary">
          mor
        </Button>
        <Button variant="contained" color="success">
          Yeşil
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
      </Stack>
      <Stack direction={"row"} display="block" spacing={3}>
        <Button variant="outlined" size="large">
          Butonum
        </Button>
        <Button variant="outlined" size="medium">
          Butonum
        </Button>
        <Button variant="outlined" size="small">
          Butonum
        </Button>
      </Stack>
      <Stack direction={"row"} spacing={3}>
        <AddIcon color="error" />
        <Button variant="contained" startIcon={<AddIcon />}>
          Ekle
        </Button>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={() => {
            alert("tıklandı");
          }}
        >
          Ekle
        </Button>
      </Stack>
    </Stack>
  );
};

export default LessonButton;
