import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
const LessonCard = () => {
  return (
    <Card
      sx={{
        width: "350px",
      }}
    >
      <CardMedia
        component="img"
        image="https://source.unsplash.com/random"
        height="194"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" components="div">
          başlığım
        </Typography>
        <Typography variant="body2" components="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ipsam
          porro! Voluptas quidem nulla suscipit perspiciatis itaque laborum
          porro impedit distinctio, id rem sapiente laudantium a consequuntur
          tenetur consequatur voluptates.
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="error">Temizle</Button>
        <Button color="success">Kaydet</Button>
      </CardActions>
    </Card>
  );
};

export default LessonCard;
