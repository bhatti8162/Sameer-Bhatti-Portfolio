import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Typography, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import logo from "../../../img/BTisoft.png";
import { Navlink, ProfileLink } from "./NavLink";

const headerStyle = makeStyles({
  DexBar: {
    position: "fixed",
    width: "100%",
    marginBottom: "50px",
    backgroundColor: "#1E1926 !important",
  },
  DevA:{
    marginRight:"50px"
  },
  font01: {
    color: "white",
    "&:hover": {
      color: "#1A73E8",
    },
    whiteSpace: "nowrap !important",
  },
  display_block: {
    display: "block !important",
    margin: "1vmax !important",
    // backgroundColor:'red !important'
  },
});
const data = ProfileLink;

export const Dexknav = () => {
  const classes = headerStyle();

  return (
    <>
      <AppBar className={classes.DexBar}>
        <Toolbar>
          <Typography
            variant="h1"
            color="white"
            sx={{ wordWrap: "none", whiteSpace: "nowrap", fontSize: "40px" }}
          >
            SAMEER BHATTI
          </Typography>
          <div style={{ width: "100%" }}></div>
          {data.map((item, index) => (
            // <Button
            //   key={index}
            //   component={Link}
            //   to={data[index].to}
            //   className={classes.display_block}
            //   color="primary"
            // >
            //   <Typography className={classes.font01}>
            //     {data[index].name}
            //   </Typography>
            // </Button>
            <a href={data[index].to}  className={classes.DevA} >
              <Typography className={classes.font01}>
                {data[index].name}
              </Typography>
            </a>
          ))}
        </Toolbar>
      </AppBar>
    </>
  );
};
