import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import project from "../assets/projects/student.png";
import note from "../assets/projects/noteapp.png";
import keeper from "../assets/projects/keeper.png";
import hotel from "../assets/projects/Hotel.png";
import internship from "../assets/projects/kickstart.png";
import DSA from "../assets/projects/dsa img.gif";
import ReactCalculator from "../assets/projects/Calculator.png";
import Tic from "../assets/projects/Tic-Tac-Toe.png";
import Rock from "../assets/projects/Rock.png";
import Stop from "../assets/projects/Stop.png";
import TODO from "../assets/projects/myTask.png";
import book from "../assets/projects/book.png";
import framer from "../assets/projects/framer.png";
import health from "../assets/projects/health.png";
import videoEditor from "../assets/projects/videoEditor.png";
import notesSummarizer from "../assets/projects/noteSummarizer.png";
import aiEmailGenerator from "../assets/projects/aiEmailGenerator.png";
import Abnormal from "../assets/projects/Abnormal.png";
import bikeVlog from "../assets/projects/bikeVlog.png";
import Ecommerce from "../assets/projects/e-commerce.png";
import weatherNow from "../assets/projects/weatherNow.png";
import contractDashboard from "../assets/projects/contractDashboard.png";
import chatPortal from "../assets/projects/chart-portal.png";
import rtigers from "../assets/projects/rtigers.png";
import user from "../assets/projects/user.png";

const Projects = () => {
  const details = [
    {
      imgPath: internship,
      title: "Internship Project",
      description: "Collaborated with a team to implement code from various websites, designed user interfaces, and developed new functionalities to enhance website performance and user engagement.",
      ghLink: "https://github.com/Intelligent-Cloud-Applications",
      techStack: ["React", "JavaScript", "HTML", "CSS", "Git", "UI Design"],
      demoLink: undefined,
    },
    {
      imgPath: user,
      title: "User and Product Management System",
      description: "A responsive React admin panel with secure JWT authentication and role-based access control.Built using Redux Toolkit, RTK Query, and Tailwind CSS for fast, optimized performance.Features complete user and product management, multilingual support, and dark mode.Designed with a clean UI, real-time updates, and a seamless mobile-friendly experience.",
      ghLink: "https://github.com/Infinity2209/user",
      techStack: ["React","Redux Toolkit","RTK Query","i18Next","JSON Server"],
      demoLink: "https://useandproduct-management.netlify.app",
    },
    {
      imgPath: note,
      title: "Note Taking App",
      description: "A secure note-taking platform integrated with AWS console, allowing users to store and manage notes, documents, and images from anywhere with seamless cloud accessibility.",
      ghLink: "https://github.com/Infinity2209/serverless-stack-client",
      techStack: ["React", "AWS Amplify", "DynamoDB", "S3", "JavaScript"],
      demoLink: "https://cosmic-zuccutto-8d31f5.netlify.app/",
    },
    {
      imgPath: keeper,
      title: "Keeper App",
      description: "Real-time image conversion and manipulation tool for React applications. Features format conversion, resizing, cropping, and optimization with AWS S3 storage integration.",
      ghLink: "https://github.com/Infinity2209/Keeper-App-Frontend-",
      techStack: ["React", "AWS S3", "Node.js", "JavaScript", "Image Processing"],
      demoLink: undefined,
    },
    {
      imgPath: rtigers,
      title: "RTigers Fitness Zone",
      description: "A modern, responsive fitness website built using React and Tailwind CSS. Showcases gym services, trainer profiles, membership plans, and contact details with dynamic components and dummy data integration for demonstration. Designed for seamless navigation and engaging user experience.",
      ghLink: "https://github.com/Infinity2209/rtigers-fitness-zone",
      techStack: ["React", "Tailwind CSS", "JavaScript"],
      demoLink: "https://rtiggersfitnessstudibpatna.netlify.app/",
    },
    {
      imgPath: chatPortal,
      title: "Chat Portal",
      description: "A full-stack web application for chat management and conversation analysis. Users can chat in real time, store conversations, and query past chats using intelligent search and summarization features.",
      ghLink: "https://github.com/Infinity2209/Chat-Summariser",
      techStack: ["Django REST Framework", "Python", "React", "Tailwind CSS", "JWT Authentication", "NLP"],
      demoLink: undefined,
    },
    {
      imgPath: weatherNow,
      title: "Weather Now",
      description: "Full-stack weather app providing real-time updates for any city worldwide. Features temperature, humidity, and wind details with Open-Meteo API integration.",
      ghLink: "https://github.com/Infinity2209/weather-now",
      techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "Open-Meteo API"],
      demoLink: "https://weathernow-city.netlify.app/"
    },
    {
      imgPath: contractDashboard,
      title: "Contract Management Dashboard",
      description: "Modern SaaS dashboard for contract management with file upload, advanced search filters, and AI-generated insights from contract clauses.",
      ghLink: "https://github.com/Infinity2209/Contract-management-dashboard",
      techStack: ["React", "Tailwind CSS", "Context API", "JavaScript"],
      demoLink: "https://contract-dashboard.netlify.app/"
    },
    {
      imgPath: Ecommerce,
      title: "E-Commerce Web App",
      description: "Full-stack e-commerce platform with JWT authentication, CRUD APIs, product filters, and persistent cart system that retains items even after logout.",
      ghLink: "https://github.com/Infinity2209/E-commerce-website",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
      demoLink: "https://e-commerce-websites-template.netlify.app/"
    },
    {
      imgPath: notesSummarizer,
      title: "Notes Summarizer",
      description: "Smart web tool that generates concise summaries from uploaded text or Word files. Features editable summaries with copy and email sharing capabilities.",
      ghLink: "https://github.com/Infinity2209/notes-summarizer",
      techStack: ["React", "Node.js", "Express.js", "NLP", "OpenAI API"]
    },
    {
      imgPath: aiEmailGenerator,
      title: "AI Email Generator",
      description: "AI-powered tool that generates professional emails from simple prompts. Creates both content and subject lines with editing capabilities before sending.",
      ghLink: "https://github.com/Infinity2209/ai-email-generator",
      techStack: ["React", "Node.js", "Express.js", "OpenAI API"],
      demoLink: "https://ai-email-gene.netlify.app/"
    },
    {
      imgPath: Abnormal,
      title: "Abnormal Security Hub",
      description: "Full-stack file management system with Django REST Framework backend and React frontend. Containerized with Docker Compose for seamless deployment.",
      ghLink: "https://github.com/Infinity2209/Abnormal-sequrity-hub",
      techStack: ["Django", "Django REST Framework", "React", "Docker", "PostgreSQL"]
    },
    {
      imgPath: bikeVlog,
      title: "Bike Vlog Template",
      description: "Modern, responsive Next.js template for bike vloggers with sections for blogs, videos, and about pages. Optimized for fast loading and SEO.",
      ghLink: "https://github.com/Infinity2209/bike-vlog",
      techStack: ["Next.js", "React", "Tailwind CSS", "SEO Optimization"],
      demoLink: "https://bike-vlog.netlify.app/"
    },
    {
      imgPath: book,
      title: "Book Club Management System",
      description: "Full-stack app for discovering and joining book clubs with real-time spot updates, search/filter by genre, and admin tools for managing clubs.",
      ghLink: "https://github.com/Infinity2209/Book-Club-Management-System",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "REST API"]
    },
    {
      imgPath: framer,
      title: "Framer Design",
      description: "Multi-section React application with reusable components including Navbar, Hero, Features, FAQ, and Testimonials. Clean, responsive UI for showcasing services.",
      ghLink: "https://github.com/Infinity2209/framer_design",
      techStack: ["React", "Tailwind CSS", "Component Design"],
      demoLink: "https://leadsvaults.netlify.app/"
    },
    {
      imgPath: health,
      title: "Health Care Dashboard",
      description: "Responsive healthcare dashboard with interactive body model, health metric cards, activity charts, calendar views, and appointment tracking.",
      ghLink: "https://github.com/Infinity2209/healthcareDashboard",
      techStack: ["React", "Tailwind CSS", "Chart.js", "JavaScript"],
      demoLink: "https://healthcareassignment.netlify.app/"
    },
    {
      imgPath: hotel,
      title: "Hotel Landing Page",
      description: "Sleek, responsive hotel landing page with engaging hero section, dynamic content rendering, and optimized performance for fast loading speeds.",
      ghLink: "https://github.com/Infinity2209/Hotel-Landing-site",
      techStack: ["Next.js", "React", "Tailwind CSS", "SEO Optimization"],
      demoLink: "https://hotel-template-web.netlify.app/"
    },
    {
      imgPath: videoEditor,
      title: "Video Editor Frontend",
      description: "Feature-rich web-based video editor with upload, timeline editing, subtitle management, image overlays, audio control, and export options up to 4K.",
      ghLink: "https://github.com/Infinity2209/Vedio-Editing-Website",
      techStack: ["Next.js", "React", "Redux Toolkit", "Tailwind CSS", "FFmpeg"]
    },
    {
      imgPath: TODO,
      title: "TODO LIST",
      description: "Task management app with add, edit, delete functionality, status updates, sorting by due date, and filtering. Integrated with RESTful API backend.",
      ghLink: "https://github.com/Infinity2209/TODO-LIST",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "REST API"]
    },
    {
      imgPath: Tic,
      title: "Tic-Tac-Toe Game",
      description: "Interactive two-player Tic Tac Toe game with dynamic updates, winner detection, and draw scenarios. Clean, responsive design.",
      ghLink: "https://github.com/Infinity2209/Tic-Tac-Toe-Game",
      techStack: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
      demoLink: "https://tic-tac-toegametest.netlify.app/"
    },
    {
      imgPath: Stop,
      title: "Stop Watch",
      description: "React-based stopwatch with start, stop, reset, and lap functionalities. Clean, responsive design with accurate timing and efficient state management.",
      ghLink: "https://github.com/Infinity2209/StopWatch",
      techStack: ["React", "JavaScript", "Hooks", "CSS"]
    },
    {
      imgPath: Rock,
      title: "Rock Paper Scissor Game",
      description: "Interactive game where players compete against the computer. Features real-time winner updates and responsive interface.",
      ghLink: "https://github.com/Infinity2209/Rock-Paper-Scissors/tree/master",
      techStack: ["HTML", "CSS", "JavaScript", "Game Logic"]
    },
    {
      imgPath: project,
      title: "Student Dashboard",
      description: "Comprehensive platform for students to track academic progress, grades, attendance, and assignments. Includes payment processing for tuition and fees.",
      ghLink: "https://github.com/Infinity2209/Student_Dashboard",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "REST API"]
    },
    {
      imgPath: ReactCalculator,
      title: "React Calculator",
      description: "Fully functional calculator with standard arithmetic operations, clear UI, and responsive design using React's component-based architecture.",
      ghLink: "https://github.com/Infinity2209/DSA",
      techStack: ["React", "JavaScript", "CSS"]
    },
    {
      imgPath: DSA,
      title: "DSA Algorithms",
      description: "Comprehensive implementation of core algorithms and data structures in C, including sorting, searching, trees, graphs, and hash tables with optimizations.",
      ghLink: "https://github.com/Infinity2209/DSA",
      techStack: ["C", "Algorithms", "Data Structures"]
    }
  ];

  return (
    <Container fluid className="project-section w-full">
      <Particle />
      <Container fluid style={{ marginLeft: 0, marginRight: 0 }}>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "space-between", paddingBottom: "10px" }}>
          {details.map((data, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={data.imgPath}
                title={data.title}
                description={data.description}
                ghLink={data.ghLink}
                techStack={data.techStack}
                demoLink={data.demoLink}
                isBlog={data.isBlog}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;