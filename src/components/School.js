import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Paper, Stack } from "@mui/material";
import about from "./images/about.jpg";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import TextD from "./TextD";
import "./School.css";

export default function School() {
	return (
		<>
			<h3 className="text">
				Schools <span className="highlight"> at your fingertips</span>
			</h3>
			<Box
				sx={{
					width: "100%",
					marginTop: "15%",
					paddingLeft: "5%",
					marginBottom: "5%",
				}}
			>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid item lg={9} xs={11}>
						<Card>
							<Card.Body>
								<Card.Title>Special title treatment</Card.Title>
								<Card.Text>
									With supporting text below as a natural lead-in to additional
									content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
						<Card>
							<Card.Body>
								<Card.Title>Special title treatment</Card.Title>
								<Card.Text>
									With supporting text below as a natural lead-in to additional
									content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
						<Card>
							<Card.Body>
								<Card.Title>Special title treatment</Card.Title>
								<Card.Text>
									With supporting text below as a natural lead-in to additional
									content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
						<Card>
							<Card.Body>
								<Card.Title>Special title treatment</Card.Title>
								<Card.Text>
									With supporting text below as a natural lead-in to additional
									content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
						<Card>
							<Card.Body>
								<Card.Title>Special title treatment</Card.Title>
								<Card.Text>
									With supporting text below as a natural lead-in to additional
									content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Grid>
					<Grid item lg={3}>
						<div className="alignment">
							<TextD />
						</div>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}
