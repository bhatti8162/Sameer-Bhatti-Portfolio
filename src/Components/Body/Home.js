import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import blockchainimg from "../img/Blockchain Sameer.png";
import upworklogo from "../img/upwork-logo-png-transparent.png";

const useStyles = makeStyles((theme) => ({
  cont_box: {
    maxWidth: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
    padding: "50px",
    wordBreak: "keep-all",
  },
  gardent01: {
    background:
      // "linear-gradient(160deg, rgba(0,0,0,1) 12%, rgba(17,17,48,1) 74%);",
      "linear-gradient(160deg, rgba(0,0,0,1) 30%, rgba(6,6,244,1) 74%)",
  },
  image: {
    width: "100%", // To make the image responsive
    maxWidth: "300px", // Set a maximum width for larger screens
    margin:"30px"
  },
  content: {
    textAlign: "center",
    wordBreak: "break-all",
  },
  pre: {
    wordWrap: "break-word", // Added to wrap long words within <pre> tag
    wordBreak: "keep-all",
  },
  pre_left: {
    textAlign: "left",
    wordWrap: "break-word", // Added to wrap long words within <pre> tag
    wordBreak: "keep-all",
  },
}));

const Home = () => {
  const mobileMedia = useMediaQuery("(max-width: 1080px)");
  const classes = useStyles();

  return (
    <div className={`${classes.cont_box} ${classes.gardent01}`}>
      <img
        src={blockchainimg}
        className={classes.image}
        alt="pip3lee101"
        title="pip3lee101"
      />
      <div className={classes.content}>
        <h1
          style={{
            fontSize: mobileMedia ? "30px" : "50px",
            wordBreak: "keep-all",
          }}
        >
          Entrepreneur and Hacker | Sameer Bhatti
          <br />
        </h1>
        <p className={classes.pre}>
          Meet Sameer Bhatti,a brilliant mind in the realms of cybersecurity and
          entrepreneurship, widely recognized as Lee101, CEO of <a href="https://lee101sec.com/">lee101sec.com</a> within the digital
          world. With an exceptional skill set and an unwavering passion for all
          things cyber, Sameer has earned his reputation as a formidable hacker
          and a seasoned entrepreneur.
          <br />
          Armed with an advanced level of cyber knowledge, Sameer fearlessly
          delves into the depths of intricate systems, unraveling
          vulnerabilities and devising ingenious solutions to protect against
          potential threats. His prowess in the field is demonstrated by his
          remarkable achievement of being ranked in the <b>Top 5%</b> percent
          on TryHackMe, a testament to his exceptional abilities and commitment
          to continuous improvement.
          <br />
          digital world finds a skilled defender and a visionary leader, making
          significant strides in securing our interconnected world while leaving
          an indelible mark on the technology industry.
        </p>
        
        <p>
          <h1>Contact US</h1>
          <h4>
            Company : &nbsp;
            <a href="https://lee101sec.com/" title="https://lee101sec.com/">
            https://lee101sec.com/
            </a>
          </h4>

          <h4>
            Email : &nbsp;
            <a href="mailto:lee101sec@gmail.com" title="https://lee101sec.com/">
              lee101sec@gmail.com
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
            TryHackMe : &nbsp;
            <a
              href="https://tryhackme.com/p/pip3lee101"
              title="sameer bhatti upwork"
            >
              https://tryhackme.com/p/pip3lee101
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
      
      <a
        href="https://www.upwork.com/freelancers/~016fc01c9c4889c1b2?viewMode=1"
        style={{
          position: "sticky",
          bottom: "10px",
          right: "0",
          left: "90%",
        }}
      >
        {" "}
        <img width={"200px"} src={upworklogo} alt="=UpWork"></img>
      </a>

      <a
        href="https://tryhackme.com/p/pip3lee101"
        style={{
          position: "sticky",
          bottom: "10px",
          right: "0",
          left: "90%",
        }}
      >
        {" "}
        <img
          src="https://tryhackme-badges.s3.amazonaws.com/pip3lee101.png"
          alt="TryHackMe"
        ></img>
      </a>

    </div>
  );
};

export default Home;
