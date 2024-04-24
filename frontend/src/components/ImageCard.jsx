import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImageCard(spaceProps) {
  const { title, description, imageUrl, time } = spaceProps;

  return (
    <div style={{ margin: "5rem" }}>
      <Card sx={{ background: "rgba(0, 0, 0, 0.5)", maxWidth: 545 }}>
        <CardMedia sx={{ height: 340 }} image={imageUrl} title={title} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              color: "#fff",
              fontFamily: "Nunito",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#ddd",
              fontFamily: "Nunito",
              fontWeight: "bold",
              fontSize: "1.1rem",
            }}
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </div>
  );
}
