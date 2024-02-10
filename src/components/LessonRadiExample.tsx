import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  Button,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
const LessonRadiExample = () => {
  const [value, setValue] = useState<string>("");
  const [helperText, setHelperText] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value == "canboz") {
      setHelperText(value);
      setError(false);
    } else if (value == "haydar") {
      setHelperText(`evet doğru ${value}`);
      setError(false);
    } else {
      setHelperText("Lütfen seçim yapınız");
      setError(true);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={error}>
        <FormLabel>En kapsamlı eğitim hangisi</FormLabel>
        <RadioGroup onChange={handleRadioChange}>
          <FormControlLabel value="canboz" label="canboz" control={<Radio />} />
          <FormControlLabel value="haydar" label="haydar" control={<Radio />} />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined">
          Gönder
        </Button>
      </FormControl>
    </form>
  );
};

export default LessonRadiExample;
