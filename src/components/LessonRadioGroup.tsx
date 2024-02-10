import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
} from "@mui/material";
import { useState } from "react";
const LessonRadioGroup = () => {
  const [value, setValue] = useState("");

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setValue(event.target.value);
  //   };
  return (
    <FormControl>
      <FormLabel>Maaş Beklentiniz</FormLabel>
      <RadioGroup
        row
        name="extexted-salary"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <FormControlLabel
          color="secondary"
          label="2000$"
          value="2000"
          control={<Radio />}
        />
        <FormControlLabel
          color="secondary"
          label="3000$"
          value="3000"
          control={<Radio />}
        />
        <FormControlLabel
          color="secondary"
          label="4000$"
          value="4000"
          control={<Radio />}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default LessonRadioGroup;
