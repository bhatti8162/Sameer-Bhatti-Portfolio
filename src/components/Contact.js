import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <h5>Email: <a href="mailto:sameerbhatti8162@gmail.com" target="_blank" style={{color:"white", textDecoration:"none"}}>sameerbhatti8162@gmail.com</a> </h5>
                <h5>Upwork: <a href="https://www.upwork.com/freelancers/~016fc01c9c4889c1b2?viewMode=1" target="_blank" style={{color:"white", textDecoration:"none"}}>upwork.com/freelancers/~016fc01c9c4889c1b2</a> </h5>
                <h5>Linkedin: <a href="https://www.linkedin.com/in/sameer-bhatti-8a2256235/" target="_blank" style={{color:"white", textDecoration:"none"}}>linkedin.com/in/sameer-bhatti-8a2256235</a> </h5>
                <h5>Whatsapp: <a href="https://wa.me/message/RNLGOO5TNB4GC1" target="_blank" style={{color:"white", textDecoration:"none"}}>wa.me/message/RNLGOO5TNB4GC1</a></h5>

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
