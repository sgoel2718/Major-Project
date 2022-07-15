import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import job from "./tourss.jpg";
import styles from "./Project.css";

export default function Footer() {
	return (
		<>
			<div>
				<img src={job} alt="tour" />
				<h2>Discover the colourful world</h2>
				<h1>Buy Yourself The Freedom</h1>
			</div>
			<div className="container">
				<div className="left">hello</div>
				<div className="right">hello1</div>
			</div>
		</>
	);
}

{
	/* <Box
  sx={{
    display: "flex",
    flexWrap: "wrap",
    "& > :not(style)": {
      m: 1,
      width: 128,
      height: 128,
    },
  }}
>
  <Paper elevation={0} />
  <Paper />
  <Paper elevation={3} />
</Box>; */
}
