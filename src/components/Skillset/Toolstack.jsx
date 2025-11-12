import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiNetlify,
  SiCanva,
  SiGithub,
  SiVercel,
  SiCloudflare,
} from "react-icons/si";
import { FaFigma, FaServer } from "react-icons/fa";
import { DiVisualstudio } from 'react-icons/di';

const Toolstack = () => {
  const tools = [
    { icon: <DiVisualstudio />, name: "VS Code" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiCanva />, name: "Canva" },
    { icon: <SiNetlify />, name: "Netlify" },
    { icon: <SiCloudflare />, name: "Cloudflare" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <FaServer />, name: "Render" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {tool.icon}
              </div>
              <div className="flip-card-back">
                {tool.name}
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;