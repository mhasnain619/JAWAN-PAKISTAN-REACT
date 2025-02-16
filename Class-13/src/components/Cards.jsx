import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function Cards({ cardId, title, desc, imgSrc }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={imgSrc} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {desc.slice(0, 87)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            navigate(`/singleproduct/${cardId}`);
          }}
          size="small"
        >
          View Cart
        </Button>
      </CardActions>
    </Card>
  );
}
