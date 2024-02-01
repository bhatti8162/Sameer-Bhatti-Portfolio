import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import deepWebCyberSecurity from "../assets/img/Certificates/DeepWeb-CyberSecurity.png";
import Linux from "../assets/img/Certificates/Linux.png";
import appliedLiveForensics from "../assets/img/Certificates/Applied-Live-forensics.png";
import devSecOps from "../assets/img/Certificates/DevSecOps.png";
import cryptAnalysis from "../assets/img/Certificates/CryptAnalysis.png";
import appliedPythonCryptography from "../assets/img/Certificates/Applied-python-cryptography.png";
import droneForensics from "../assets/img/Certificates/Drone-Forensics.png";
import masterOFWifiHacking from "../assets/img/Certificates/Master-Wifi-EvilTwin.png";
import netcat from "../assets/img/Certificates/Netcat.png";
import bash from "../assets/img/Certificates/bash-shell-scripting.png";
import bugBounty from "../assets/img/Certificates/UncleRat-BugBounty-UC-30d46045-2920-4a9c-a476-0293618b2378.jpg";
import socialEngineering from "../assets/img/Certificates/Z-Security-Social-Engineering-UC-2a774ba1-0c93-4b57-aca4-da5a1687b232.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects1 = [
    {
      title: "Deep Web and Cyber Security",
      description: "End to End knowledge of Cyber And Deep Web",
      imgUrl: deepWebCyberSecurity,
    },
    {
      title: "Linux",
      description: "Complete Linux for Cybersecurity",
      imgUrl: Linux,
    },
    {
      title: "Applied Live Forensics",
      description: "DFIR and Forensics to get out of Diaster",
      imgUrl: appliedLiveForensics,
    },
    {
      title: "DevSecOps",
      description: "Process and Operations in Cyber Security",
      imgUrl: devSecOps,
    },
    {
      title: "CryptAnalysis",
      description: "CryptAnalysis is to Secure cryptography",
      imgUrl: cryptAnalysis,
    },
    {
      title: "Applied Python Cryptography",
      description: "Cryptography in python",
      imgUrl: appliedPythonCryptography,
    },
  ];
const projects2 = [
    {
      title: "MAster-Wifi-EvilTwin",
      description: "Master in Wifi hacking and Network Security",
      imgUrl: masterOFWifiHacking,
    },
    {
      title: "Drone Forensics",
      description: "Forensics for Drone (UAV)",
      imgUrl: droneForensics,
    },
    {
      title: "netcat",
      description: "Netcat in a linux utility for cyber Security",
      imgUrl: netcat,
    },
    {
      title: "Bash Shell Scripting",
      description: "Bash Scripting to automate Linux Administration",
      imgUrl: bash,
    },
    {
      title: "BugBounty",
      description: "Uncle RedHAt Web BugBounty",
      imgUrl: bugBounty,
    },
    {
      title: "Social Engineering",
      description: "Z-Security Social Engineering",
      imgUrl: socialEngineering,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects And Certifications</h2>
                  <p>
                    Armed with a robust arsenal of cybersecurity certificates,
                    From penetration testing to threat detection, my expertise
                    ensures airtight defenses against evolving cyber threats.
                    With a proven track record, I stand ready to safeguard the
                    digital realm, leveraging my extensive knowledge to fortify
                    and protect against the ever-changing cyber landscape.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Still Learning....
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
