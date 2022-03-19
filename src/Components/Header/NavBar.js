import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import { Typography } from "@mui/material";

function NavBar() {
  return (
    <>
      <Navbar id="nav" sticky="top" expand="lg" bg="dark" variant="dark">
        <Container className="Container">
          <Typography
            variant="h4"
            color="initial"
            style={{ color: "white" }}
            component={Link}
            to="/Home"
          >
            SAMEER BHATTI
          </Typography>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Resume">Resume</Link>
            </li>
            <li>
              <Link to="/Portflio">Portflio</Link>
            </li>
            <li>
              <Link to="/Github">Github</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          {/* <Nav className="me-auto">
                        <Link to="/Resume">Resume</Link>
                        <Link to="/Live_Projects">Live Projects</Link>
                        <Link to="/Github">Github</Link>
                    </Nav> */}
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
