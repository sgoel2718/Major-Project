import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./ListData";
import Box from "@mui/material/Box";
import { Paper, Stack } from "@mui/material";
import "./Text.css";

function TextD() {
	const [inputText, setInputText] = useState("");
	let inputHandler = (e) => {
		//convert input text to lower case
		var lowerCase = e.target.value.toLowerCase();
		setInputText(lowerCase);
	};

	return (
		<div className="main">
			<div className="search">
				<h6>Search Schools</h6>
				<TextField
					id="outlined-basic"
					onChange={inputHandler}
					variant="outlined"
					label="Search"
					sx={{ width: "200%" }}
				/>
				<Box
					sx={{
						"& > :not(style)": {
							m: 1,
							width: 128,
							height: 128,
						},
					}}
				>
					<Paper elevation={3}>
						<h5>Categories</h5>
					</Paper>
				</Box>
			</div>
			<List input={inputText} />
		</div>
	);
}

export default TextD;
