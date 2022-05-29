import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
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
    top: "18%",
    right: "0",
  },
  blockimg1: {
    // width: "40vw",
    position: "absolute",
    top: "10%",
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
          width={mobileMedia ? "300px" : "400px"}
          alt="sameer bhatti blockchain"
          title="this photoshop edit for blockchain"
        />
      </div>
      <h1 style={{ alignSelf: "start" }}>
        SAMEER BHATTI || Fullstack BlockChain, <br />
        Nodejs, And Python Developer
        <hr style={{ width: "10vw" }} />
      </h1>

      <p style={{ alignSelf: "start" }}>
        Hi, there welcome this is my portfolio website,
        <br /> to let you know about my work and experience,
        <br /> I am a professional programmer working most popular technologies{" "}
        <br />
        like Python, Solidity, React, Nodejs, Css3.0 for advanced level <br />{" "}
        web and blockchain development,
        <br /> I can make any kind of advanced UI with React, Material UI, and{" "}
        <br />
        Css3.0, and can make backend with all MySQL, NoSQL, Django, and <br />
        express.js
        <br />
        <br />
        plus I am a Blockchain full-stack developer, smart contracts (ERC20,
        ERC72) with, web3.py, <br />
        web3.js, Brownie, chainlink and openzeppelin contract as well
        <br /> I can make any kind of smart contract as you require.
        <br />
        I have also good skills in Adobe Illustrator, and Adobe Photoshop,
        <br />
        to make any bussiness related graphic designing, cards, banners, web
        desgins
        <br />
        and NFT ARTS as well
      </p>
    </div>
  );
};

export default Home;
