import Carousel from "react-bootstrap/Carousel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import education from "./images/school.jpg";
import education1 from "./images/carousel-2.jpg";
import Cards from "./Cards";
import "./Education.css";
import about from "./images/about.jpg";

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

			<Box sx={{ width: "100%" }}>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid item xs={6}>
						<img className="imgg" src={about} alt="about" />
					</Grid>
					<Grid item xs={6}></Grid>
				</Grid>
			</Box>

			{/* <div className="container">
				<div className="row g-5">
					<div
						className="col-lg-8 fadeInUp"
						style={{
							visibility: "visible",
							minHeight: "400px",
							animationDelay: "0.1s",
							animationName: "fadeInUp",
						}}
					>
						<div className="">
							<img
								className="imgg"
								src={about}
								alt=""
								style={{ objectFit: "cover" }}
							></img>
						</div>
					</div>
				</div>
			</div> */}
		</>
	);
}

export default CarouselFadeExample;
