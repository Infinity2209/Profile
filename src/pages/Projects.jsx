import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import project from "../assets/projects/student.png";
import note from "../assets/projects/noteapp.png";
import internship from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={note}
              title="Note Taking App"
              description="The note-taking app provides users with a convenient platform to securely store and manage their important notes, documents, and images. Through seamless integration with AWS console, users can easily access their data from anywhere with an internet connection, ensuring flexibility and convenience. This app empowers users to efficiently organize their information, thereby enhancing productivity and offering peace of mind regarding data security."
              ghLink="https://github.com/Infinity2209/serverless-stack-client"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Student Dashboard"
              description="The Student Dashboard project offers students a comprehensive online platform to track their academic progress, including grades, attendance records, and upcoming assignments. Additionally, it facilitates convenient payment processes for tuition fees, library fines, and other expenses directly through the platform. By centralizing these functions, the project aims to streamline administrative processes, improve communication between students and educational institutions, and enable secure and efficient payment transactions."
              ghLink="https://github.com/Infinity2209/Student_Dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={internship}
              isBlog={false}
              title="Internship Project"
              description="During my internship, I actively contributed to various projects by collaborating with a team to implement code from various websites. I played a key role in designing user interfaces for multiple websites, ensuring they were visually appealing and user-friendly. Additionally, I developed new functionalities to enhance website performance and user engagement. Overall, my internship experience involved a diverse range of tasks, from coding and design to problem-solving and collaboration, contributing significantly to the success of multiple projects."
              ghLink="https://github.com/Intelligent-Cloud-Applications"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects