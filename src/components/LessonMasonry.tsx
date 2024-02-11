import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Masonry from "@mui/lab/Masonry";
const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];
const data = [
  "deneme",
  "deneme2",
  "deneme3",
  "deneme",
  "deneme2",
  "deneme3",
  "deneme",
  "deneme",
  "deneme2",
  "denemeson",
];
const LessonMasonry = () => {
  return (
    <Masonry columns={3} spacing={2}>
      {heights.map((height, index) => (
        <Paper key={index}>
          <Accordion>
            <AccordionSummary
              sx={{ minHeight: { height } }}
              expandIcon={<ExpandMoreIcon />}
            >
              Accordion {index + 1}
            </AccordionSummary>
            <AccordionDetails>{data[index]}</AccordionDetails>
          </Accordion>
        </Paper>
      ))}
    </Masonry>
  );
};

export default LessonMasonry;
