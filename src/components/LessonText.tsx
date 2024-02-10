import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
const LessonText = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="ad" />
        <TextField label="ad" variant="outlined" />
        <TextField label="ad" variant="filled" />
        <TextField label="ad" variant="standard" />
        <TextField label="ad" variant="outlined" color="error" size="small" />
        <TextField
          label="ad"
          variant="outlined"
          helperText="lütfen adınızı giriniz"
          size="small"
        />
        <TextField
          InputProps={{ readOnly: true }}
          type="password"
          label="ad"
          variant="outlined"
          helperText="lütfen adınızı giriniz"
          size="small"
        />
        <TextField
          InputProps={{
            startAdornment: <InputAdornment position="end">TL</InputAdornment>,
          }}
          label="Toplam"
          variant="outlined"
        />
      </Stack>
      <Stack direction="row">
        {" "}
        <TextField
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="password"
          label="şifre"
          color={value ? "success" : "error"}
          variant="outlined"
          helperText={!value ? "lütfen şifreyi giriniz" : "başarılı"}
        />
      </Stack>
    </Stack>
  );
};

export default LessonText;
