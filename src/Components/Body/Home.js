import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import blockchainimg from "../img/Blockchain Sameer.png";

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
  cont_box1: {
    maxWidth: "100%",
    minHeight: "200vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
    textAlign: "left",
    padding: "3vmax",
  },
  blockimg: {
    width: "40vw",
    position: "absolute",
    top: "22%",
    right: "0",
  },
  blockimg1: {
    // width: "40vw",
    position: "absolute",
    top: "10%",
    marginBottom: "5vmax",
  },
  gardent01: {
    background:
      "linear-gradient(29deg, rgba(2,0,36,1) 24%, rgba(69,4,88,1) 71%, rgba(62,57,184,1) 100%)",
  },
}));

const Home = () => {
  const mobileMedia = useMediaQuery("(max-width:1080px)");
  const classes = useStyle();
  
  return (
    <div
      className={
        mobileMedia
          ? `${classes.cont_box1} ${classes.gardent01}`
          : `${classes.cont_box} ${classes.gardent01}`
      }
    >
      <div
        className={mobileMedia ? `${classes.blockimg1}` : `${classes.blockimg}`}
      >
        <img
          src={blockchainimg}
          width={mobileMedia ? "300px" : "440px"}
          alt="sameer bhatti blockchain"
          title="this photoshop edit for blockchain"
        />
      </div>
      <h1
        style={
          mobileMedia
            ? { alignSelf: "start", marginTop: "230px" }
            : { alignSelf: "start" }
        }
      >
        <small style={{ fontSize: "22px" }}>
          Fullstack Python, Nodejs, C Programming Engineer, Hacker<br />
          and Linux Administrator
        </small>
      </h1>

      <p style={{ alignSelf: "start" }}>
        Hi, there welcome this is my portfolio website,
        <br /> to let you know about my work,
        <br /> I am a professional programmer working most popular technologies,{" "}
        <br />
        like Python, Nodejs, C Exploit Development ShellScripting, BashScripting,
        <br /> Playwright Automation
         React, Css3.0 for Advanced Level <br />{" "}
        Development and Linux Administration,
        <br />Advanced automation in linux, and exploit development{" "}
        <br />
        i can make very secure and advance websites in any niche with reactjs,
        <br />
         Css3.0, and i can make any backend with all MySQL, NoSQL, Django, and <br />
        express.js
        <br />
        <br />
        plus I can manage any Linux, Debian, Arch, RedHat,<br />
        and also i am good at both defsec and offsec,<br />
        with expert level of bugbounty experience and
        <br />
        I have also good skills in software and web development.
        <br />
        with my services your existing or startup business can boostup at high speed
        with guarantee security
        <br />
      </p>
    </div>
  );
};

export default Home;
