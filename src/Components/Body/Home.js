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
    left: "5%",
  },
  blockimg1: {
    // width: "40vw",
    position: "absolute",
    top: "10%",
    marginBottom: "5vmax",
  },
  gardent01: {
    background:
    "radial-gradient(circle, rgba(0,0,0,0.8603816526610644) 0%, rgba(0,0,0,1) 9%, rgba(7,1,66,1) 100%)"
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
      <div style={{ alignSelf: "end", textAlign:"center" }}>
        <h1
          style={
            mobileMedia
              ? { alignSelf: "start", marginTop: "500px" }
              : { fontSize: "50px" }
          }
        >
          Entrepreneur and Hacker | Sameer Bhatti
            <br />
        </h1>

        <p>
        I am businessman and hacker.<br />
        i have skillset of Python, CyberSecurity, Artificial Intelligence, Data Science, <br />
        and technologies like Nodejs, C programming, Expoilt Development, <br />
        Social Engineering, Web Security, Network Security, <br />
        BashScripting, Playwright Automation, Reactjs, OS Development,<br />
        Kali, Arch, Fedora and Linux Administration,<br />
        <br />
        <br />
        <h4>
          Email : &nbsp;
          <a
            href="mailto:pip3lee101@gmail.com"
            title="sameer bhatti email"
          >
            pip3lee101@gmail.com
          </a>
        </h4>
        
        <h4>
          Linkedin : &nbsp;
          <a
            href="https://www.linkedin.com/in/sameer-bhatti-8a2256235/"
            title="sameer bhatti linkedin"
          >
            https://www.linkedin.com/in/sameer-bhatti-8a2256235/
          </a>
        </h4>

        <h4>
          Upwork : &nbsp;
          <a
            href="https://www.upwork.com/freelancers/~016fc01c9c4889c1b2?viewMode=1"
            title="sameer bhatti upwork"
          >
            https://www.upwork.com/freelancers/~016fc01c9c4889c1b2
          </a>
        </h4>

        <h4>
          Whatsapp : &nbsp;
          <a
            href="https://wa.me/message/RNLGOO5TNB4GC1"
            title="sameer bhatti upwork"
          >
            https://wa.me/message/RNLGOO5TNB4GC1
          </a>
        </h4>

        </p>
      </div>
    </div>
  );
};

export default Home;
