import { Button, Stack, ButtonGroup } from "@mui/material";

export const LessonButtonGroup = () => {
  return (
    <Stack direction="row">
      <ButtonGroup variant="contained">
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined">
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical" variant="outlined">
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
      </ButtonGroup>
    </Stack>
  );
};
