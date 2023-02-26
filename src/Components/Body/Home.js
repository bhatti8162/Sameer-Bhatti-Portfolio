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
            ? { alignSelf: "start", marginTop: "200px" }
            : { alignSelf: "start" }
        }
      >
        <small style={{ fontSize: "22px" }}>
          Python, Artificial Intelligence, Linux and CyberSecurity
          <br />
        </small>
      </h1>

      <pre style={{ alignSelf: "start" }}>
      Looking for a Python and AI end-to-end Project Expert? You're in the right place! With my extensive knowledge in Python, Artificial Intelligence, Data Science, and other technologies like Nodejs, C programming, BashScripting, Playwright Automation, React, and Css3.0 for Advanced Level Project Development and Linux Administration, I am confident that I am the right choice for your project.

      I offer advanced automation in Linux, artificial intelligence, and programming, and can also create secure and advanced websites in any niche with Reactjs, Css3.0, and any backend with MySQL, Django, Pandas, Numpy, Statsmodels, TensorFlow, Sklearn, Pytorch, and express.js. Additionally, I have extensive experience in managing Linux, Debian, Arch, and RedHat, and am well-versed in both defsec and offsec, with expert-level bugbounty experience and skills such as Kali Linux, Wireshark, Burpsuite, Nuclei, WAF, OWASP Top Ten, OSINT, automation scripting, and network security.

      With my services, your existing or startup business can boost up at high speed with guaranteed security. I offer a no upfront deposit policy, so you can place an order when you feel comfortable. Contact me today, and let's discuss how I can help you achieve your goals.
      </pre>
    </div>
  );
};

export default Home;
