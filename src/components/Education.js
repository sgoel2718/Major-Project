import Carousel from "react-bootstrap/Carousel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import education from "./images/school.jpg";
import education1 from "./images/carousel-2.jpg";
import Cards from "./Cards";
import "./Education.css";
import about from "./images/about.jpg";
import { Button } from "react-bootstrap";
import Categories from "./Categories";
import SchlCollg from "./SchlCollg";

function CarouselFadeExample() {
	return (
		<>
			<Carousel fade>
				<Carousel.Item>
					<img className="d-block w-100" src={education} alt="First slide" />
					<Carousel.Caption>
						<h2>EDUCATION IS LIFE</h2>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={education1} alt="Second slide" />

					{/* <Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption> */}
				</Carousel.Item>
			</Carousel>
			{/* <Cards /> */}

			<Categories />

			<Box sx={{ width: "100%" }}>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid item lg={6}>
						<img className="imgg" src={about} alt="about" />
					</Grid>
					<Grid item lg={6}>
						<div className="alignment">
							<p className="size">About Us</p>
							<h3>Welcome to eDUCATION wORLD</h3>
							<p>Hey</p>
							<Button
								size="lg"
								style={{
									// backgroundColor: "#06BBCC",
									border: "none",
									fontWeight: "bold",
									width: "20%",
								}}
							>
								Read More
							</Button>
						</div>
					</Grid>
				</Grid>
			</Box>

			<SchlCollg />
		</>
	);
}

export default CarouselFadeExample;
