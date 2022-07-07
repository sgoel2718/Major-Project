import * as React from "react";
import job from "./tourss.jpg";
import agent from "./travel-agency.png";
import guide from "./tour-guide.png";
import restaurant from "./food.png";
import transportation from "./transportation.png";
import styles from "./Project.css";
import "./Project.css";

export default function Footer() {
  return (
    <>
      <div>
        <img src={job} alt="tour" />
        <h2>Discover the colourful world</h2>
        <h1>Buy Yourself The Freedom</h1>
      </div>
      <div className="container">
        <div className="left">
          <img className="size1" src={agent} alt="tour" />
          <h3>Travel Agent</h3>
          <img className="size2" src={transportation} alt="tour" />
          <h3>Transportation</h3>
          <img className="size3" src={guide} alt="tour" />
          <h3>Tourist Guide</h3>
          <img className="size4" src={restaurant} alt="tour" />
          <h3>Restaurants</h3>
        </div>
        <div className="right">hell01</div>
      </div>
    </>
  );
}
