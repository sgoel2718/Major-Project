import * as React from "react";
import job from "./job.png";
import "./Jobs.css";

export default function Footer() {
  return (
    <div>
      <img src={job} className="App-logo" alt="logo" />
      <h2>We have 85,000 great job offers you deserve</h2>
      <h1>
        <em>Your Dream Job is Waiting</em>
      </h1>
    </div>
  );
}
