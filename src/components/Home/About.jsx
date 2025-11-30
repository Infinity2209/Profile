import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn, FaAward, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "./About.css";
import { HiOutlineMail } from "react-icons/hi";
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
        <Col lg={7} md={12} className="home-about-description">
          <h1 style={{ fontSize: "2.6em", marginBottom: "30px" }}>
            LET ME <span className="yellow"> INTRODUCE </span> MYSELF
          </h1>
          <p className="home-about-body">
            Hi, I'm <span className="yellow">Ananta Nag</span>, a <b className="yellow">Full-Stack Developer & DevOps Engineer</b> from <span className="yellow">Bargarh, Odisha, India</span>.
            <br />
            <br />
            I recently completed my Bachelor's degree in <b className="yellow">Computer Science and Engineering</b> at the Government College of Engineering, Kalahandi, with a <b className="yellow">CGPA of 8.6</b>.
            <br />
            <br />
            I have hands-on experience building scalable web applications and serverless architectures. I've worked with <b className="yellow">INTELLIGENT AWS APPLICATION</b> (July 2023 – Dec 2024) and currently interning at <b className="yellow">BWORKZLLC</b> (Jan 2025 – May 2025).
            <br />
            <br />
            My core stack includes <b className="yellow">JavaScript (ES6+), React, Next.js, and Node.js</b>. I specialize in <b className="yellow">AWS cloud services</b> including Lambda, DynamoDB, S3, and API Gateway.
            <br />
            <br />
            I'm proficient in <b className="yellow">Python, Java, and SQL</b>, and have extensive experience with <b className="yellow">Serverless Framework, AWS Amplify, Express.js, MongoDB, Tailwind CSS, and Bootstrap</b>.
            <br />
            <br />
            Beyond coding, I served as <b className="yellow">Vice President</b> of GCEK Literary & Nukkad Clubs, leading magazine publications and organizing 10+ street plays promoting social causes.
          </p>
        </Col>

        <Col lg={4} md={12} className="d-flex align-items-center justify-content-center mt-4 mt-lg-0">
            {/* Journey Path Section */}
            <Row>
              <Col md={12}>
                <JourneyPath />
              </Col>
            </Row>
        </Col>
      </Row>

      {/* College Location */}
      <Row className="mb-5 d-flex justify-content-center align-items-center">
        <Col
          md={5}
          style={{ height: "100%" }}
        >
          <h2 className="text-center p-4 text-white" style={{ fontSize: "2.2em" }}>
            MY <span className="yellow">COLLEGE</span> LOCATION
          </h2>
        </Col>
        <Col md={5}>
          <div className="map-container">
            <iframe
              title="College Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.237795724791!2d83.10372987527153!3d19.914381681470527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a24ef3382020aa3%3A0x6720328dfbfd451a!2sGovernment%20College%20Of%20Engineering%2CKalahandi(Autonomous)!5e0!3m2!1sen!2sin!4v1749278419539!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "15px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
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
            <li className="social-icons">
              <a
                href="mailto:anantanag91@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="mail"
              >
                <HiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default About;