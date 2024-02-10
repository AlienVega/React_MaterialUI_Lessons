import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

const LessonSelect = () => {
  const [country, setCountry] = useState<string[]>([]);
  //   const handleChange = () => {};
  return (
    <Box width="250px">
      {/* <TextField
        label="ülke seçiniz"
        select
        fullWidth
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <MenuItem value="tr">Türkiye</MenuItem>
        <MenuItem value="fr">Fransa</MenuItem>
        <MenuItem value="usa">ABD</MenuItem>
      </TextField> */}

      <TextField
        SelectProps={{ multiple: true }}
        label="ülke seçiniz"
        select
        fullWidth
        value={country}
        onChange={(e) =>
          setCountry(
            Array.isArray(e.target.value) ? e.target.value : [e.target.value]
          )
        }
      >
        <MenuItem value="tr">Türkiye</MenuItem>
        <MenuItem value="fr">Fransa</MenuItem>
        <MenuItem value="usa">ABD</MenuItem>
      </TextField>
    </Box>
  );
};

export default LessonSelect;
