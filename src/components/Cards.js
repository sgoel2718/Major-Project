import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./Cards.css";
import education from "./images/school.jpg";
import education1 from "./images/carousel-2.jpg";
import zIndex from "@mui/material/styles/zIndex";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
	return (
		<Box sx={{ width: "100%" }}>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid item xs={6}>
					<Card
						sx={{
							maxWidth: 345,
							position: "absolute",
							top: "120%",
							zIndex: "999999",
						}}
					>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140%"
								image={education}
								alt="green iguana"
							/>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={6}>
					<Card
						sx={{
							maxWidth: 345,
							position: "absolute",
							top: "120%",
							zIndex: "999999",
						}}
					>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={education1}
								alt="green iguana"
							/>
						</CardActionArea>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
}
