import React from "react";
import TechGrid from "./TechGrid";
import { DiJavascript1, DiReact, DiNodejs, DiGit } from "react-icons/di";
import {
  SiHtml5, SiPython, SiAmazonwebservices, SiTailwindcss, SiNextdotjs,
  SiBootstrap, SiMongodb, SiSpringboot, SiExpress, SiAmazondynamodb,
  SiGithubactions, SiMysql, SiGooglecloud, SiPostman,
} from "react-icons/si";
import { FaCss3Alt, FaJava } from "react-icons/fa";
import { TbRobot } from "react-icons/tb";

const techs = [
  // target stack first
  { icon: <FaJava />, name: "Java" },
  { icon: <SiSpringboot />, name: "Spring Boot" },
  { icon: <DiReact />, name: "React" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <SiAmazonwebservices />, name: "AWS" },
  { icon: <TbRobot />, name: "Gen AI" },
  // backend and data
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiAmazondynamodb />, name: "DynamoDB" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "SQL" },
  // cloud and workflow
  { icon: <SiGooglecloud />, name: "Google Cloud" },
  { icon: <SiGithubactions />, name: "CI/CD" },
  { icon: <DiGit />, name: "Git" },
  { icon: <SiPostman />, name: "REST APIs" },
  // frontend and basics
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiPython />, name: "Python" },
  { icon: <span>C</span>, name: "C" },
];

const Techstack = () => <TechGrid items={techs} />;
export default Techstack;