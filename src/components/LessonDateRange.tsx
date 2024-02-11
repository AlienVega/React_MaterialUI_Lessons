import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Box } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { DateRange } from "@mui/x-date-pickers-pro";
import { useState } from "react";
import { TextField } from "@mui/material";

export const LessonDateRange = () => {
  const [value, setValue] = useState<DateRange<Dayjs>>([null, null]);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: "başlangıç", end: "bitiş" }}
    >
      <DateRangePicker
        label="Time"
        value={value}
        onChange={(newvalue) => {
          setValue(newvalue);
        }}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box>e kadar</Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </LocalizationProvider>
  );
};
