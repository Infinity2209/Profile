import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import {
  FaLinkedinIn,
  FaAward,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaTrophy,
  FaMapMarkerAlt,
  FaJava,
  FaReact,
  FaAws,
  FaNodeJs,
  FaRobot,
} from "react-icons/fa";
import "./About.css";
import JourneyPath from "./JourneyPath";

/* Counts up when the element scrolls into view */
const Counter = ({ end, suffix = "" }) => {
  const [n, setN] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        let i = 0;
        const step = Math.max(1, Math.ceil(end / 30));
        const t = setInterval(() => {
          i += step;
          if (i >= end) {
            i = end;
            clearInterval(t);
          }
          setN(i);
        }, 35);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
};

const About = () => {
  const highlights = [
    {
      icon: <FaBriefcase className="highlight-icon" />,
      title: "Experience",
      end: 2,
      suffix: "+ Years",
      subtitle: "Full-stack development, from AWS apps to enterprise engineering",
    },
    {
      icon: <FaCertificate className="highlight-icon" />,
      title: "Certifications",
      end: 3,
      suffix: "",
      subtitle: "GenAI, AI Agents & Gemini Enterprise Agent Development",
    },
    {
      icon: <FaTrophy className="highlight-icon" />,
      title: "Awards",
      end: 2,
      suffix: "",
      subtitle: "On The Spot Award & Learning Achievement Award",
    },
    {
      icon: <FaGraduationCap className="highlight-icon" />,
      title: "Education",
      text: "B.Tech CSE",
      subtitle: "CGPA 8.6",
    },
  ];

  const stack = [
    { icon: <FaJava />, label: "Backend", items: ["Core Java", "Spring Boot", "JDBC", "REST APIs"] },
    { icon: <FaReact />, label: "Frontend", items: ["React.js", "JavaScript", "HTML5", "CSS3"] },
    { icon: <FaNodeJs />, label: "Server", items: ["Node.js", "Express"] },
    { icon: <FaAws />, label: "Cloud", items: ["AWS", "Google Cloud"] },
    { icon: <FaRobot />, label: "Generative AI", items: ["GenAI", "AI Agents", "Gemini Enterprise"] },
  ];

  const achievements = [
    { tag: "Certification", title: "Gemini Enterprise Agent Development", meta: "Google Partner Specialist · Oct 2026" },
    { tag: "Certification", title: "AI Future Ready: GenAI Curriculum", meta: "TCS · Oct 2026" },
    { tag: "Certification", title: "AI Future Ready: AI Agents Curriculum", meta: "TCS · Oct 2026" },
    { tag: "Award", title: "Learning Achievement Award", meta: "TCS · Aug 2026" },
    { tag: "Award", title: "On The Spot Award", meta: "TCS · Jul 2026" },
  ];

  return (
    <Container fluid className="home-about-section" id="about">
      {/* Intro */}
      <Row className="home-about-row about-intro mb-5">
        <Col lg={7} md={12} className="home-about-description">
          <span className="about-eyebrow">
            <FaMapMarkerAlt /> Bhubaneswar, India
          </span>
          <h1 className="about-title">
            Hi, I'm <span className="yellow">Ananta Nag</span>
          </h1>
          <h3 className="about-role">
            Systems Engineer @ TCS · Java Full-Stack &amp; AWS Developer
          </h3>
          <p className="home-about-body">
            I build <b className="yellow">web applications, REST APIs and cloud-based solutions</b>{" "}
            with <b className="yellow">Java, Spring Boot, React.js, Node.js and AWS</b>. I started
            shipping full-stack apps on AWS in 2023, and today I'm engineering at Tata Consultancy
            Services while going deep into <b className="yellow">Generative AI and AI agents</b>,
            including Google's Gemini Enterprise Agent Development.
          </p>
          <p className="home-about-body">
            I enjoy turning ideas into reliable, scalable products and I'm always learning. I'm
            looking for <b className="yellow">Java Spring Boot full-stack and AWS-based projects</b>{" "}
            where I can contribute and keep growing.
          </p>
        </Col>

        <Col lg={5} md={12}>
          <Card className="highlight-card about-focus-card p-3">
            <Card.Body>
              <h5 className="mb-3">Currently</h5>
              <ul className="about-focus-list">
                <li>Engineer at Tata Consultancy Services</li>
                <li>Building AI agents with Gemini Enterprise</li>
                <li>Strengthening Java and cloud fundamentals</li>
                <li>Open to full-stack &amp; AWS opportunities</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Highlights */}
      <Row className="home-about-row mb-5">
        {highlights.map((item, index) => (
          <Col lg={3} md={6} sm={12} key={index} className="mb-4">
            <Card className="highlight-card p-3">
              <Card.Body className="text-center">
                {item.icon}
                <h5 className="mt-3 mb-2">{item.title}</h5>
                <h2 className="yellow mb-2">
                  {item.text ? item.text : <Counter end={item.end} suffix={item.suffix} />}
                </h2>
                <p className="mb-0">{item.subtitle}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Tech stack */}
      <Row className="home-about-row mb-5">
        <Col md={12}>
          <h2 className="about-section-title">
            Tech <span className="yellow">Toolbox</span>
          </h2>
        </Col>
        {stack.map((group) => (
          <Col lg={4} md={6} sm={12} key={group.label} className="mb-4">
            <Card className="highlight-card stack-card p-3">
              <Card.Body>
                <div className="stack-head">
                  <span className="stack-icon">{group.icon}</span>
                  <h5 className="mb-0">{group.label}</h5>
                </div>
                <div className="stack-chips">
                  {group.items.map((s) => (
                    <span className="stack-chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Achievements */}
      <Row className="home-about-row mb-5">
        <Col md={12}>
          <h2 className="about-section-title">
            Recognition &amp; <span className="yellow">Credentials</span>
          </h2>
        </Col>
        <Col md={12}>
          <div className="achievement-list">
            {achievements.map((a) => (
              <div className="achievement-item" key={a.title}>
                <span className={`achievement-tag ${a.tag === "Award" ? "award" : ""}`}>
                  {a.tag === "Award" ? <FaAward /> : <FaCertificate />} {a.tag}
                </span>
                <h5>{a.title}</h5>
                <small>{a.meta}</small>
              </div>
            ))}
          </div>
        </Col>
      </Row>

      {/* Journey */}
      <Row className="home-about-row mb-5">
        <JourneyPath />
      </Row>

      {/* Social Links */}
      <Row>
        <Col md={12} className="home-about-social">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="yellow">connect</span> with me and explore potential
            opportunities or collaborations.
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a href="https://github.com/Infinity2209" target="_blank" rel="noreferrer" className="icon-colour home-social-icons" aria-label="github">
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://twitter.com/AnantaNag917487" target="_blank" rel="noreferrer" className="icon-colour home-social-icons" aria-label="twitter">
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.linkedin.com/in/ananta-nag-126053263/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons" aria-label="linkedin">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;