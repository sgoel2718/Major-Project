import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Categories.css";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
	return (
		// <div classNameName="container-xxl py-5">
		// 	<div classNameName="container">
		// 		<div classNameName="col g-4">
		// 			<div classNameName="col-lg-3 col-sm-6">
		// 				<div
		// 					className="col-lg-3 col-sm-6 wow fadeInUp"
		// 					data-wow-delay="0.1s"
		// 					style={{
		// 						visibility: "visible",
		// 						animationDelay: "0.1s",
		// 						animationName: "fadeInUp",
		// 					}}
		// 				>
		// 					<div className="service-item text-center pt-3">
		// 						<div className="p-4">
		// 							<i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
		// 							<h5 className="mb-3">Skilled Instructors</h5>
		// 							<p>
		// 								Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
		// 								amet diam
		// 							</p>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 			<div classNameName="col-lg-3 col-sm-6">
		// 				<div
		// 					className="col-lg-3 col-sm-6 wow fadeInUp"
		// 					data-wow-delay="0.1s"
		// 					style={{
		// 						visibility: "visible",
		// 						animationDelay: "0.1s",
		// 						animationName: "fadeInUp",
		// 					}}
		// 				>
		// 					<div className="service-item text-center pt-3">
		// 						<div className="p-4">
		// 							<i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
		// 							<h5 className="mb-3">Skilled Instructors</h5>
		// 							<p>
		// 								Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
		// 								amet diam
		// 							</p>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>

		<Box
			sx={{
				marginLeft: "25%",
				marginRight: "25%",
				marginTop: "4%",
				marginBottom: "4%",
			}}
		>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid item lg={6} xs={12}>
					<div
						// className="col-lg-3 col-sm-6 wow fadeInUp"
						data-wow-delay="0.1s"
						style={{
							visibility: "visible",
							animationDelay: "0.1s",
							animationName: "fadeInUp",
						}}
					>
						<div className="service-item text-center pt-3">
							<div className="p-4">
								<i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
								<h5 className="mb-3">Skilled Instructors</h5>
								<p>
									Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
									amet diam
								</p>
							</div>
						</div>
					</div>
				</Grid>
				<Grid item lg={6} xs={12}>
					<div
						// className="col-lg-3 col-sm-6 wow fadeInUp"
						data-wow-delay="0.1s"
						style={{
							visibility: "visible",
							animationDelay: "0.1s",
							animationName: "fadeInUp",
						}}
					>
						<div className="service-item text-center pt-3">
							<div className="p-4">
								<i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
								<h5 className="mb-3">Skilled Instructors</h5>
								<p>
									Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
									amet diam
								</p>
							</div>
						</div>
					</div>
				</Grid>
			</Grid>
		</Box>
	);
}
