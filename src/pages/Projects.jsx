import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import project from "../assets/projects/student.png";
import note from "../assets/projects/noteapp.png";
import internship from "../assets/projects/kickstart.png";
import DSA from "../assets/projects/dsa img.gif";
import ReactCalculator from "../assets/projects/Calculator.png";
import Tic from "../assets/projects/Tic-Tac-Toe.png";
import Rock from "../assets/projects/Rock.png";
import Stop from "../assets/projects/Stop.png";

const Projects = () => {
  const details = [
    {
      "imgPath": internship,
      "title": "Internship Project",
      "description": "During my internship, I actively contributed to various projects by collaborating with a team to implement code from various websites. I played a key role in designing user interfaces for multiple websites, ensuring they were visually appealing and user-friendly. Additionally, I developed new functionalities to enhance website performance and user engagement. Overall, my internship experience involved a diverse range of tasks, from coding and design to problem-solving and collaboration, contributing significantly to the success of multiple projects.",
      "ghLink": "https://github.com/Intelligent-Cloud-Applications"
    },
    {
      "imgPath": note,
      "title": "Note Taking App",
      "description": "The note-taking app provides users with a convenient platform to securely store and manage their important notes, documents, and images. Through seamless integration with AWS console, users can easily access their data from anywhere with an internet connection, ensuring flexibility and convenience. This app empowers users to efficiently organize their information, thereby enhancing productivity and offering peace of mind regarding data security.",
      "ghLink": "https://github.com/Infinity2209/serverless-stack-client"
    },
    {
      "imgPath": Tic,
      "title": "Tic-Tac-Toe Game",
      "description": `I developed a fully functional Tic Tac Toe game using HTML, CSS, and JavaScript. The game offers a simple and interactive interface where two players can take turns marking "X" or "O" on a 3x3 grid. The game dynamically updates based on the player's moves and determines the winner or if the game results in a draw. The core logic is powered by JavaScript, ensuring smooth gameplay, while the design and user interface are styled with CSS for a clean and responsive experience. This project showcases my ability to create engaging, real-time interactive applications using front-end technologies.`,
      "ghLink": "https://github.com/Infinity2209/Tic-Tac-Toe-Game"
    },
    {
      "imgPath": Stop,
      "title": "Stop Watch",
      "description": `This React-based stopwatch application provides users with an intuitive interface to track time with start, stop, reset, and lap functionalities. Built to demonstrate proficiency in React hooks and state management, the app efficiently tracks laps while ensuring accurate timing. The clean, responsive design enables easy use on both desktop and mobile devices. This project showcases effective use of React for dynamic component updates, as well as optimized performance for a smooth user experience, making it ideal for time-tracking needs in personal fitness or productivity.`,
      "ghLink": "https://github.com/Infinity2209/StopWatch"
    },
    {
      "imgPath": Rock,
      "title": "Rock Paper Scissor game",
      "description": `I developed a Rock Paper Scissor game using HTML, CSS, and JavaScript, creating a fun and interactive experience where players compete against the computer. The game features a simple and clean user interface, with real-time updates determining the winner based on the player’s choice. Through this project, I demonstrated my ability to implement game logic, handle DOM manipulation, and design a responsive interface that works seamlessly across various devices. This project highlights my skills in front-end development and user engagement.`,
      "ghLink": "https://github.com/Infinity2209/Rock-Paper-Scissors/tree/master"
    },
    {
      "imgPath": project,
      "title": "Student Dashboard",
      "description": "The Student Dashboard project offers students a comprehensive online platform to track their academic progress, including grades, attendance records, and upcoming assignments. Additionally, it facilitates convenient payment processes for tuition fees, library fines, and other expenses directly through the platform. By centralizing these functions, the project aims to streamline administrative processes, improve communication between students and educational institutions, and enable secure and efficient payment transactions.",
      "ghLink": "https://github.com/Infinity2209/Student_Dashboard"
    },
    {
      "imgPath": ReactCalculator,
      "title": "React Calculator",
      "description": "I have developed a fully functional calculator application using React, showcasing my proficiency in modern web development practices. This project includes standard arithmetic operations, a clear user interface, and responsive design principles to ensure usability across various devices. By leveraging React's component-based architecture, I have created a modular and maintainable codebase. This project demonstrates my ability to build interactive user interfaces, manage state effectively, and apply best practices in React development.",
      "ghLink": "https://github.com/Infinity2209/DSA"
    },
    {
      "imgPath": DSA,
      "title": "DSA Algorithms",
      "description": "I have undertaken an extensive project to code all the core algorithms and data structures in C programming language. This project involved designing, implementing, and optimizing various algorithms such as sorting, searching, and dynamic programming techniques, along with fundamental data structures including arrays, linked lists, stacks, queues, trees, graphs, and hash tables. Emphasis was placed on optimizing these implementations to enhance their efficiency in terms of time and space complexity. Each component is thoroughly documented and rigorously tested to ensure correctness and robustness, making this project a comprehensive showcase of my proficiency in both data structures and algorithms and the C programming language.",
      "ghLink": "https://github.com/Infinity2209/DSA"
    },
  ]
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
        <Row style={{ justifyContent: "space-between", paddingBottom: "10px" }}>
          {details.map((data, index) => (
            <Col md={5} className="project-card mx-4" key={index}>
              <ProjectCard
                imgPath={data.imgPath}
                title={data.title}
                description={data.description}
                ghLink={data.ghLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects