import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiNetlify,
  SiCanva,
  SiGithub,
} from "react-icons/si";
import { FaFigma } from "react-icons/fa";

import { SiCloudflare } from "react-icons/si";

const Toolstack = () => {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiCanva />, name: "Canva" },
    { icon: <SiNetlify />, name: "Netlify" },
    { icon: <SiCloudflare />, name: "Cloudflare" },
    { icon: <SiGithub />, name: "GitHub" },
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
