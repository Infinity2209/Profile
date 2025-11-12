import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiHtml5,
  SiPython,
  SiAmazonwebservices,
  SiTailwindcss,
  SiNextdotjs,
  SiBootstrap,
  SiMongodb
} from "react-icons/si";
import { 
  FaCss3Alt,
  FaJava
} from "react-icons/fa";

const Techstack = () => {
  const techs = [
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <span>C</span>, name: "C" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiPython />, name: "Python" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiAmazonwebservices />, name: "AWS" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <SiMongodb />, name: "MongoDB" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {tech.icon}
              </div>
              <div className="flip-card-back">
                {tech.name}
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
