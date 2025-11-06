import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./ProjectCard.css"; // Import the CSS file

const ProjectCard = (props) => {
  return (
    <Card className="project-card-view modern-card">

      {/* Image Container */}
      <div className="card-img-container">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={props.title}
          className="card-img-top"
        />
        <div className="img-overlay"></div>
      </div>

      {/* Card Body */}
      <Card.Body className="card-body-modern">
        {/* Title with Gradient */}
        <Card.Title className="gradient-title">{props.title}</Card.Title>

        {/* Description */}
        <Card.Text className="card-description">
          {props.description}
        </Card.Text>

        {/* Tech Stack Tags */}
        {props.techStack && props.techStack.length > 0 && (
          <div className="tech-stack-container">
            {props.techStack.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Buttons Container */}
        <div className="buttons-container">
          <Button
            variant="outline-light"
            href={props.ghLink}
            target="_blank"
            className="github-btn"
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="demo-btn"
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;