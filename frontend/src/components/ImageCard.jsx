import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ImageCard({ space }) {
  return (
    <Card sx={{ background: "rgba(0, 0, 0, 0.5)", maxWidth: 545 }}>
      <CardMedia
        sx={{ height: 340 }}
        image={space.image}
        title="green iguana"
      />
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
          {space.title}
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
          {space.desc}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
