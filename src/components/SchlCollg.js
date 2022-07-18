import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./SchlCollg.css";
import sc1 from "./images/sc1.jpg";
import sc2 from "./images/sc2.jpg";
import sc3 from "./images/sc3.jfif";
import sc4 from "./images/sc4.jpg";

export default function AutoGrid() {
	return (
		<>
			<Box
				sx={{
					marginLeft: "5%",
					marginRight: "5%",
					marginTop: "4%",
					marginBottom: "4%",
				}}
			>
				<h4>Categories</h4>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid item lg={6} xs={6}>
						<Grid item lg={6} xs={6}>
							<div
								// className="col-lg-3 col-sm-6 wow fadeInUp"
								data-wow-delay="0.1s"
								style={{
									visibility: "visible",
									animationDelay: "0.1s",
									animationName: "fadeInUp",
								}}
							>
								<div className="">
									<div className="">
										<i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
										<img src={sc1} style={{ width: "200%", height: "250px" }} />
									</div>
								</div>
							</div>
						</Grid>
						<Grid item lg={6} xs={6} rowSpacing={2}>
							<div
								// className="col-lg-3 col-sm-6 wow fadeInUp"
								data-wow-delay="0.1s"
								style={{
									visibility: "visible",
									animationDelay: "0.1s",
									animationName: "fadeInUp",
								}}
							>
								<div className="service-item">
									<div className="">
										<i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
										<img src={sc2} />
									</div>
								</div>
							</div>
						</Grid>
					</Grid>
					<Grid item lg={6} xs={6}>
						<div
							// className="col-lg-3 col-sm-6 wow fadeInUp"
							data-wow-delay="0.1s"
							style={{
								visibility: "visible",
								animationDelay: "0.1s",
								animationName: "fadeInUp",
							}}
						>
							<div className="service-item">
								<div className="">
									<i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
									<img src={sc3} style={{ height: "425px" }} />
								</div>
							</div>
						</div>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}
