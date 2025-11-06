import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import Tags from '../components/Home/Tags';

const PremiumHeroImage = ({ imageSrc }) => {
  return (
    <div className="d-flex align-items-center justify-content-center w-100 h-100" style={{ minHeight: '550px' }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.7; }
          100% { transform: scale(0.95); opacity: 1; }
        }
        
        @keyframes gradient-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes particle-ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .pulse-ring {
          animation: pulse-ring 2s ease-in-out infinite;
        }
        
        .gradient-border {
          animation: gradient-rotate 4s linear infinite;
        }
        
        .particle-ping {
          animation: particle-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .premium-image-container:hover .profile-image {
          transform: scale(1.05);
        }
        
        .profile-image {
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom right, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2));
          opacity: 0;
          transition: opacity 0.3s;
          border-radius: 50%;
        }
        
        .premium-image-container:hover .hover-overlay {
          opacity: 1;
        }

        .outer-gradient-ring {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          background: linear-gradient(45deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #667eea 75%, #764ba2 100%);
          padding: 4px;
          filter: blur(8px);
          opacity: 0.6;
          transform: scale(1.1);
        }

        .middle-pulse-ring {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          border: 4px solid rgba(192, 132, 252, 0.5);
          transform: scale(1.15);
        }

        .solid-border-ring {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 6px;
        }

        .solid-border-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #1a1a2e;
        }

        .circular-image-wrapper {
          position: relative;
          border-radius: 50%;
          overflow: hidden;
          width: 420px;
          height: 420px;
          border: 4px solid white;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        @media (min-width: 1200px) {
          .circular-image-wrapper {
            width: 500px;
            height: 500px;
          }
        }
        
        @media (min-width: 1600px) {
          .circular-image-wrapper {
            width: 580px;
            height: 580px;
          }
        }

        .particle {
          position: absolute;
          border-radius: 50%;
        }

        .particle-1 {
          top: 0;
          right: 0;
          width: 16px;
          height: 16px;
          background-color: #c084fc;
          animation-duration: 2s;
        }

        .particle-2 {
          bottom: 16px;
          left: 16px;
          width: 12px;
          height: 12px;
          background-color: #f472b6;
          animation-duration: 3s;
          animation-delay: 1s;
        }

        .particle-3 {
          top: 32px;
          left: 0;
          width: 8px;
          height: 8px;
          background-color: #60a5fa;
          animation-duration: 2.5s;
          animation-delay: 0.5s;
        }
      `}</style>

      <div className="premium-image-container position-relative float-animation">
        <div className="outer-gradient-ring gradient-border"></div>
        <div className="middle-pulse-ring pulse-ring"></div>
        <div className="solid-border-ring">
          <div className="solid-border-inner"></div>
        </div>
        <div className="circular-image-wrapper">
          <img
            src={imageSrc}
            alt="Profile"
            className="profile-image"
          />
          <div className="hover-overlay"></div>
        </div>

        {/* Decorative particles */}
        <div className="particle particle-1 particle-ping"></div>
        <div className="particle particle-2 particle-ping"></div>
        <div className="particle particle-3 particle-ping"></div>
      </div>
    </div>
  );
};

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
              <PremiumHeroImage imageSrc={require('../assets/Ananta.jpg')} />
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