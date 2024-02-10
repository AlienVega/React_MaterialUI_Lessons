import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const LessonAccordion = () => {
  const [expanded, setExpanded] = useState<string | boolean>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isexpanded: boolean) => {
      setExpanded(isexpanded ? panel : false);
    };
  return (
    <div>
      {/* <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>ilk bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          praesentium vero incidunt est. Neque nulla molestias aut illo, quidem
          mollitia. Vero, nobis consequatur suscipit veritatis ut vel aliquid
          quae voluptates.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>ikinci bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          praesentium vero incidunt est. Neque nulla molestias aut illo, quidem
          mollitia. Vero, nobis consequatur suscipit veritatis ut vel aliquid
          quae voluptates.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>üçüncü bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          praesentium vero incidunt est. Neque nulla molestias aut illo, quidem
          mollitia. Vero, nobis consequatur suscipit veritatis ut vel aliquid
          quae voluptates.
        </AccordionDetails>
      </Accordion> */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>ilk bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          praesentium vero incidunt est. Neque nulla molestias aut illo, quidem
          mollitia. Vero, nobis consequatur suscipit veritatis ut vel aliquid
          quae voluptates.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>ikinci bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          praesentium vero incidunt est. Neque nulla molestias aut illo, quidem
          mollitia. Vero, nobis consequatur suscipit veritatis ut vel aliquid
          quae voluptates.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>üçüncü bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          praesentium vero incidunt est. Neque nulla molestias aut illo, quidem
          mollitia. Vero, nobis consequatur suscipit veritatis ut vel aliquid
          quae voluptates.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default LessonAccordion;
