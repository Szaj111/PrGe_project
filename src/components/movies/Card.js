import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Card.css";
function MediaCard({ title, image, description }) {
  return (
    <Card className="custom-card">
      <CardHeader className="custom-card-header" title={title} />
      <CardMedia component="img" height="180" image={image} alt={title} />
      <CardContent className="custom-card-content">
        <Typography variant="body2" className="custom-card-text">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button className="custom-card-button" size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
