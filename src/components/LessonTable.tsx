import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
const rows = [
  { name: "frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "ıce cream", calories: 246, fat: 3.0, carbs: 32, protein: 4.0 },
  { name: "eclair", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "cupcake", calories: 29, fat: 12.0, carbs: 34, protein: 12.0 },
  { name: "Marshmallow", calories: 456, fat: 3.1, carbs: 24, protein: 8.0 },
];
const LessonTable = () => {
  return (
    <Table>
      <TableHead>
        {" "}
        <TableRow>
          <TableCell>Desert</TableCell>
          <TableCell>calories</TableCell>
          <TableCell>fat</TableCell>
          <TableCell>carbs</TableCell>
          <TableCell>protein</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.fat}</TableCell>
            <TableCell>{row.carbs}</TableCell>
            <TableCell>{row.carbs}</TableCell>
            <TableCell>{row.protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default LessonTable;
