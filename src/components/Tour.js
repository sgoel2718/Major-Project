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
        {/* <svg viewBox="0 0 200 200">
          <path
            id="curve"
            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          />
        </svg> */}
      </div>
      <div class="split left">
        <div class="centered">
          <Box
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
          </Box>
        </div>
      </div>

      <div class="split right">
        <div class="centered">
          <h2>John Doe</h2>
          <p>Some text here too.</p>
        </div>
      </div>
    </>
  );
}
