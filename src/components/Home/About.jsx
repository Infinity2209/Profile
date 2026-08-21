import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn, FaAward, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "./About.css";
// import { HiOutlineMail } from "react-icons/hi";
import JourneyPath from "./JourneyPath";

const About = () => {
  const highlights = [
    {
      icon: <FaGraduationCap className="highlight-icon" />,
      title: "Education",
      value: "B.Tech CSE",
      subtitle: "CGPA: 8.6"
    },
    {
      icon: <FaBriefcase className="highlight-icon" />,
      title: "Experience",
      value: "2+ Years",
      subtitle: "Full-Stack Software Developer & DevOps Engineer"
    },
    {
      icon: <FaAward className="highlight-icon" />,
      title: "Projects",
      value: "15+",
      subtitle: "Production Apps"
    }
  ];

  return (
    <Container fluid className="home-about-section" id="about">
      {/* Highlights Section */}
      <Row className="home-about-row mb-5">
        {highlights.map((item, index) => (
          <Col lg={4} md={6} sm={12} key={index} className="mb-4">
            <Card className="highlight-card m-4 p-3">
              <Card.Body className="text-center">
                {item.icon}
                <h5 className="mt-3 mb-2">{item.title}</h5>
                <h2 className="yellow mb-2">{item.value}</h2>
                <p className="text-white mb-0">{item.subtitle}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Main Introduction Section */}
      <Row className="home-about-row mb-5">
        <JourneyPath />
      </Row>

      {/* Social Links */}
      <Row>
        <Col md={12} className="home-about-social">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="yellow">connect</span> with me and explore potential opportunities or collaborations.
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/Infinity2209"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/AnantaNag917487"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ananta-nag-126053263/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                href="mailto:anantanag91@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="mail"
              >
                <HiOutlineMail />
              </a>
            </li> */}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default About;