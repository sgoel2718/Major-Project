import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Project.css";
import { CardActionArea } from "@mui/material";
import logo from "../smart.jpg";

// const buttonGroupStyle = [
//   {
//     color: "white",
//     "&:hover": {
//     },
//   },
// ];

export default function RowAndColumnSpacing() {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Services we offer</h2>
      <hr />
      <br />
      <Box sx={{ width: "100%" }} p={6}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={3.5}>
            <div className="card">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image="/jobs.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Jobs
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions style={{ justifyContent: "center" }}>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </div>
          </Grid>
          <Grid item xs={3.5}>
            <div className="card">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  image="/education.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Education
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions style={{ justifyContent: "center" }}>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="card">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  image="/tourism.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tourism
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions style={{ justifyContent: "center" }}>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
