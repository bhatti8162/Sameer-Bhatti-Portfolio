import { makeStyles } from "@mui/styles";
import React from "react";

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
  gardent01: {
    background:
      "linear-gradient(29deg, rgba(2,0,36,1) 24%, rgba(69,4,88,1) 71%, rgba(62,57,184,1) 100%)",
  },
}));

const Contact = () => {
  const classes = useStyle();
  return (
    <div className={`${classes.cont_box} ${classes.gardent01}`}>
      <p style={{ textAlign: "center" }}>
        <h2>
          Contact me for Website, App, Blockchain, and Graphic Designing
          Services,
          <br /> I Provide end-to-end Project Development, Feel Free to Contact
          Me, or you can Leave any Query on Whatsapp as well.
        </h2>
        <br />
        {/* <br /> */}
        <h4>
          Email :
          <br />
          <a
            href="mailto:hirefreelancersameer@gmail.com"
            title="sameer bhatti email"
          >
            hirefreelancersameer@gmail.com
          </a>
        </h4>
        <br />
        <h4>
          Phone and whatsapp :
          <br />
          <a href="tel:+923102683892" title="sameer bhatti phone">
            +923102683892
          </a>
        </h4>
        <br />
      </p>
    </div>
  );
};

export default Contact;
