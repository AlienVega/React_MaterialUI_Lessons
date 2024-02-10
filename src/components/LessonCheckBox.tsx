import {
  FormControl,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  FormLabel,
  Button,
  FormHelperText,
  Box,
  FormGroup,
} from "@mui/material";
import { useState } from "react";

const LessonCheckBox = () => {
  const [isAccept, setIsAccept] = useState<boolean>(false);
  const [knowled, setKnowled] = useState<string[]>([]);
  console.log(knowled);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAccept(e.target.checked);
  };
  const handleKnowledChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = knowled.indexOf(event.target.value);
    if (index === -1) {
      setKnowled([...knowled, event.target.value]);
    } else {
      setKnowled(knowled.filter((item) => item != event.target.value));
    }
  };
  return (
    <Box>
      {" "}
      <Box>
        <FormControl>
          <FormLabel>Eğitim Durumu</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="lise"
            />
            <FormControlLabel control={<Checkbox />} label="Üniversite" />
            <FormControlLabel control={<Checkbox />} label="İlkokul" />
          </FormGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          {/* <FormLabel>Kullanım koşullarını kabul ediyorum.</FormLabel> */}
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={isAccept} onChange={handleChange} />}
              label="kullanım koşullarını kabul ediyorum"
            />
          </FormGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Hangi teknolojileri biliyorsun</FormLabel>
          <FormGroup>
            <FormControlLabel
              value="react"
              control={
                <Checkbox
                  checked={knowled.includes("react")}
                  onChange={handleKnowledChange}
                />
              }
              label="React Js"
            />
            <FormControlLabel
              value="angular"
              control={
                <Checkbox
                  checked={knowled.includes("angular")}
                  onChange={handleKnowledChange}
                />
              }
              label="angular"
            />
            <FormControlLabel
              value="vue"
              control={
                <Checkbox
                  checked={knowled.includes("vue")}
                  onChange={handleKnowledChange}
                />
              }
              label="vue"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default LessonCheckBox;
