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
            ? { alignSelf: "start", marginTop: "260px" }
            : { alignSelf: "start" }
        }
      >
        <small style={{ fontSize: "22px" }}>
          Python, Artificial Intelligence, Linux and CyberSecurity
          <br />
        </small>
      </h1>

      <p style={{ alignSelf: "start" }}>
      Looking for a Python and AI end-to-end Project Expert?<br />
      You're in the right place! With my extensive knowledge in<br />
      Python, Artificial Intelligence, Data Science, <br />
      and other technologies like Nodejs, C programming, <br />
      BashScripting, Playwright Automation, React, <br />
      and Css3.0 for Advanced Level Project Development and Linux Administration,<br />
      I am confident that I am the right choice for your project. <br />
      <br />
      <br />
      I offer advanced automation in Linux, artificial intelligence,<br />
      and programming, and can also create secure and <br />
      advanced websites in any niche with Reactjs, Css3.0,<br />
      and any backend with MySQL, Django, Pandas, Numpy,<br />
      Statsmodels, TensorFlow, Sklearn, Pytorch, and express.js.<br />
      Additionally, I have extensive experience in managing Linux,<br />
      Debian, Arch, and RedHat, and am well-versed in both defsec <br />
      and offsec, with expert-level bugbounty experience and skills <br />
      such as Kali Linux, Wireshark, Burpsuite, Nuclei, WAF,<br />
      OWASP Top Ten, OSINT, automation scripting, and network security.<br />
      <br />
      <br />
      With my services, your existing or startup business<br />
      can boost up at high speed with guaranteed security.<br />
      I offer a no upfront deposit policy, <br />
      so you can place an order when you feel comfortable.<br />
      Contact me today, and let's discuss how I can help you achieve your goals.<br />
      </p>
    </div>
  );
};

export default Home;
