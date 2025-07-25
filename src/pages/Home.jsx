import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/about.png'
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import Tags from '../components/Home/Tags';

const Home = () => {
  const tags = ["Software Engineer", "Developer", " Website Designer", "Tech Enthusiast", "Full Stack Developer", "UI/UX Designer", "AI Enthusiast", "Web Developer", "Creative Thinker", "Writer", "Shayer"];

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container fluid className="home-content" style={{ marginLeft: 0, marginRight: 0 }}>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Ananta Nag</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="tag-compo">
        <Tags tags={tags} />
      </div>
      <About />
    </section>
  );
}

export default Home
