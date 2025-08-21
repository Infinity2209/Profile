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
      "imgPath": keeper,
      "title": "Keeper App",
      "description": "Our Image Conversion & Manipulation Tool simplifies real-time image format conversion, resizing, cropping, and optimization within React applications. Built with a component-based architecture, it leverages react-image-file-resizer, Jimp, and react-to-pdf for seamless processing. Secure AWS S3 storage and Lambda functions ensure scalability, while Base64 encoding enables real-time rendering. Designed for developers, this tool reduces server load and supports future enhancements like batch processing and AI-powered image recognition.",
      "ghLink": "https://github.com/Infinity2209/Keeper-App-Frontend-"
    },
    {
      "imgPath": notesSummarizer,
      "title": "Notes Summarizer",
      "description": "A smart web-based tool designed to simplify note-taking and studying. The application allows users to upload text or Word files containing notes and instantly generates a concise summary with just one click. The generated summary is editable, providing flexibility to refine the content as needed. Users can also copy the summarized text with a single click or send it directly to a predefined email address for easy sharing. This project demonstrates skills in file handling, text processing, and seamless integration of interactive features for improved productivity.",
      "ghLink": "https://github.com/Infinity2209/notes-summarizer"
    },
    {
      "imgPath": aiEmailGenerator,
      "title": "AI Email Generator",
      "description": "An AI-powered tool that streamlines professional communication by generating well-structured emails from simple prompts. The application takes a user-provided prompt as input and automatically creates both the email content and subject line. Users can edit the generated content for customization before sending. By entering a recipient’s email address and clicking “Send,” the application delivers the email directly to the specified inbox. This project highlights expertise in AI integration, natural language processing, and building interactive user-focused applications with editing and email delivery capabilities.",
      "ghLink": "https://github.com/Infinity2209/ai-email-generator"
    },
    {
      "imgPath": Abnormal,
      "title": "Abnormal Security Hub",
      "description": "A full-stack file management system built with Django REST Framework (backend) and React (frontend). The application allows users to upload, list, delete, and download files through an intuitive web interface. The backend handles secure file storage and management, while the frontend communicates with the API to provide a seamless user experience.The project is containerized using Docker Compose, enabling both backend and frontend services to run together effortlessly. Environment variables are configured to manage API communication, and CORS policies are set up for smooth development and deployment.This project highlights proficiency in full-stack development, RESTful API design, containerization, and integration of backend services with a modern frontend framework.",
      "ghLink": "https://github.com/Infinity2209/Abnormal-sequrity-hub"
    },
    {
      "imgPath": bikeVlog,
      "title": "Bike Vlog Template",
      "description": "A modern, responsive template website built using Next.js for bike vloggers to showcase their journeys and content in a professional way. The template is designed with a clean layout and intuitive navigation, featuring sections for blogs, video content, and an about page. With optimized file structuring and Next.js server-side rendering, the website ensures fast loading, SEO friendliness, and a smooth user experience. This project demonstrates skills in front-end development, reusable component design, and building scalable templates that can be easily customized for creators.",
      "ghLink": "https://github.com/Infinity2209/bike-vlog"
    },
    {
      "imgPath": book,
      "title": "Book Club Management System",
      "description": "Built a full-stack web application that enables users to discover and join book clubs, and allows organizers to manage clubs and book selections. Implemented features like club listing, real-time open spot updates, search/filter by genre and organizer, and admin tools for managing club details and current reads. Focused on user-friendly UI and efficient data handling.",
      "ghLink": "https://github.com/Infinity2209/Book-Club-Management-System"
    },
    {
      "imgPath": framer,
      "title": "Framer Design",
      "description": "Developed a multi-section React-based web application using Create React App, featuring reusable components like Navbar, Hero, Features, FAQ, Testimonials, and Footer. Focused on building a clean, responsive UI for showcasing services or products. Includes optimized production build setup and support for future scalability.",
      "ghLink": "https://github.com/Infinity2209/framer_design"
    },
    {
      "imgPath": health,
      "title": "Health Care Dashboard",
      "description": "Developed a responsive healthcare dashboard using React and Tailwind CSS to visualize health metrics and manage appointments. Features include an interactive human body model, health metric cards, activity charts, calendar views, and appointment tracking. Focused on delivering a clean UI and seamless user experience with modern React tools and testing using Jest and React Testing Library.",
      "ghLink": "https://github.com/Infinity2209/healthcareDashboard"
    },
    {
      "imgPath": hotel,
      "title": "Hotel Landing Page",
      "description": "Designed and developed a sleek, responsive hotel landing page using Next.js, showcasing elegant UI/UX for a seamless user experience. The template features an engaging hero section, intuitive navigation, dynamic content rendering, and optimized performance for fast loading speeds. Integrated modern design elements to enhance visual appeal while ensuring mobile responsiveness and accessibility. Perfect for hotels, resorts, or vacation rentals looking to establish a strong online presence.",
      "ghLink": "https://github.com/Infinity2209/Hotel-Landing-site"
    },
    {
      "imgPath": videoEditor,
      "title": "Video Editor Frontend Application",
      "description": `This project is a feature-rich, responsive web-based video editor built using Next.js, React, Redux Toolkit, and Tailwind CSS. It offers a clean, modular interface where users can:

📤 Upload videos in various formats (MP4, MOV, WebM, AVI) with real-time progress and preview.

🎞️ Edit timelines by trimming, arranging clips, and syncing elements visually with a dynamic timeline view.

✍️ Add and manage subtitles with styling options, and define start/end timestamps for precise control.

🖼️ Overlay images on the video and customize their position, size, rotation, opacity, and borders.

🔊 Control audio tracks, mute/unmute original audio, and add background music layers.

📦 Export final videos with options to choose resolution (up to 4K), format (MP4, WebM, GIF), and include overlays or subtitles.`,

      "ghLink": "https://github.com/Infinity2209/Vedio-Editing-Website"
    },
    {
      "imgPath": TODO,
      "title": "TODO LIST",
      "description": "A feature-rich web application built using React and Node.js, enabling users to efficiently manage tasks. Features include adding, editing, deleting tasks, status updates (To-Do, In Progress, Completed), sorting by due date or status, and filtering tasks. Integrated with a RESTful API for seamless backend operations, ensuring a smooth and user-friendly experience.",
      "ghLink": "https://github.com/Infinity2209/TODO-LIST"
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
    <Container fluid className="project-section w-full">
      <Particle />
      <Container fluid style={{ marginLeft: 0, marginRight: 0}}>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "space-between", paddingBottom: "10px" }}>
          {details.map((data, index) => (
            <Col md={4} className="project-card " key={index}>
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