import { makeStyles } from "@mui/styles";
import React from "react";
import freeelancer from "../img/freelancer-logo.svg";
import upwork from "../img/upwork-logo-png-transparent.png";

const useStyle = makeStyles((theme) => ({
  cont_box: {
    maxWidth: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
    textAlign: "left",
    padding: "3vmax",
  },
  hire_div: {
    display: "flex",
    justifyContent: "center",
    flex: "wrap",
    alignItems: "center",
    padding: "3vmax",
  },
  logo: {
    margin: "3vmax",
  },
  gardent01: {
    background:
      "linear-gradient(29deg, rgba(2,0,36,1) 24%, rgba(69,4,88,1) 71%, rgba(62,57,184,1) 100%)",
  },
}));

const Hire = () => {
  const classes = useStyle();
  return (
    <div className={`${classes.cont_box} ${classes.gardent01}`}>
      <div className={`${classes.hire_div}`}>
        <div>
          <a href="https://www.freelancer.com/u/sameer8162">
            <h1>Hire me</h1>
          </a>
        </div>
        <div className={`${classes.logo}`}>
          <a href="https://www.freelancer.com/u/sameer8162">
            <img src={freeelancer} width="250px" />
          </a>
        </div>
      </div>

      <div className={`${classes.hire_div}`}>
        <div>
          <a href="https://www.upwork.com/freelancers/~016fc01c9c4889c1b2?viewMode=1">
            <h1>Hire me</h1>
          </a>
        </div>
        <div className={`${classes.logo}`}>
          <a href="https://www.upwork.com/freelancers/~016fc01c9c4889c1b2?viewMode=1">
            <img src={upwork} width="250px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hire;
