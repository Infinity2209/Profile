import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
        <Row className="gap-5 home-about-row">
          <Col lg={6} md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I'm <span className="yellow">Ananta Nag</span> from <span className="yellow">Bargarh, Odisha, India</span>.
              <br />
              <br />
              I have completed my Bachelor's degree in <b className="yellow">Computer Science and Engineering</b> at the Government College of Engineering, Kalahandi, <b className="yellow">Odisha, India</b>.
              <br />
              <br />
              I'm a passionate <b className="yellow">Full-Stack Developer</b> with hands-on experience in building end-to-end web applications. I enjoy solving real-world problems and constantly improving my technical and collaborative skills.
              <br />
              <br />
              My core stack includes <b className="yellow">HTML, CSS, JavaScript, and React</b>. I also work with <b className="yellow">Node.js</b> and serverless technologies using AWS.
              <br />
              <br />
              I'm familiar with programming languages such as <b className="yellow">Python, Java, and C</b>, and have practical experience with tools and platforms like <b className="yellow">AWS Amplify, S3, DynamoDB, and Serverless Framework</b>.
              <br />
              <br />
              I'm enthusiastic about building modern <b className="yellow">Web Technologies and Scalable Products</b>, and I’m curious about innovations in <b className="yellow">Artificial Intelligence</b>.
            </p>
          </Col>
          <Col lg={4} md={12} className="d-flex flex-column align-items-center mt-5">
            <div style={{ width: "100%", marginBottom: "20px" }}>
              <h3 style={{ color: "white", textAlign: "center" }}>College Location</h3>
              <div style={{ width: "100%", height: "300px" }}>
                <iframe
                  title="College Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.237795724791!2d83.10372987527153!3d19.914381681470527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a24ef3382020aa3%3A0x6720328dfbfd451a!2sGovernment%20College%20Of%20Engineering%2CKalahandi(Autonomous)!5e0!3m2!1sen!2sin!4v1749278419539!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
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
                  className="icon-colour  home-social-icons"
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
                  className="icon-colour  home-social-icons"
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
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
    </Container>
  );
}

export default About;
