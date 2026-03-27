import React, { useState, useRef, useEffect, useCallback } from 'react';
import './JourneyPath.css';

import {
    GraduationCap, Briefcase, Award, Code2, Laptop, BookOpen, FlaskConical, Rocket
} from "lucide-react";

const nodes = [
    {
        year: "2025",
        title: "B.Tech Completed — Ready to Build",
        icon: GraduationCap,
        desc: "Successfully completed B.Tech in Computer Science & Engineering at Government College of Engineering, Kalahandi with a strong CGPA of 8.6. Emerged as a full-stack developer and DevOps engineer with real-world AWS production experience, 10+ shipped projects spanning AI tools, dashboards, video editors, and serverless platforms. Also served as Vice President of the Literary & Nukkad Clubs, published poems and shayaris in the college magazine, and directed 10+ street plays promoting social causes.",
        tags: ["Full-Stack", "DevOps", "AWS", "CGPA 8.6", "Open to Work 🚀"],
        color: "#14b8a6",
        bg: "#f0fdfa",
        darkBg: "#134e4a",
        tagBg: "#ccfbf1",
        tagColor: "#0f766e",
    },
    {
        year: "2024–25",
        title: "Software Developer Trainee — BWORKZLLC",
        icon: Laptop,
        desc: "Joined BWORKZLLC (Jan 2025 – May 2025) as a Software Developer Trainee. Enhanced existing backend services using Express.js and MongoDB for better performance and maintainability. Deployed production builds on AWS Amplify and executed CI/CD workflows for rapid iteration. Integrated monitoring and logging mechanisms to track API health and dramatically improve debugging efficiency across services.",
        tags: ["Express.js", "MongoDB", "AWS Amplify", "CI/CD", "API Monitoring"],
        color: "#ec4899",
        bg: "#fdf2f8",
        darkBg: "#831843",
        tagBg: "#fce7f3",
        tagColor: "#9d174d",
    },
    {
        year: "2024",
        title: "Certifications & Advanced Projects",
        icon: Award,
        desc: "Earned five industry certifications: AWS Cloud Practitioner Essentials, Full Stack Development (AWSAIAPP), JavaScript (Great Learning), UI/UX (Great Learning), and DCA (Diploma in Computer Applications). Built a diverse portfolio of advanced projects: an AI Email Generator using OpenAI API, a real-time Weather Now app with Open-Meteo API, a Video Editor Web App supporting uploads, trimming, subtitles, overlays, audio control, and 4K exports, a Health Care Dashboard with Jest-based testing, a Book Club Management System on the MERN stack, a Notes Summarizer with email sharing, and a Bike Vlog Template and Hotel Landing Page optimized for SEO using Next.js.",
        tags: ["AWS Certified", "UI/UX", "OpenAI API", "MERN Stack", "Redux Toolkit", "Jest", "Next.js"],
        color: "#8b5cf6",
        bg: "#f5f3ff",
        darkBg: "#4c1d95",
        tagBg: "#ede9fe",
        tagColor: "#6d28d9",
    },
    {
        year: "2023",
        title: "First Role — Full-Stack Developer (Intelligent AWS Application)",
        icon: Briefcase,
        desc: "Joined Intelligent AWS Application (Jul 2023 – Dec 2024) as a Part-Time Full-Stack Developer. Engineered backend APIs using Node.js, AWS Lambda, and DynamoDB, improving data processing efficiency by 40%. Enforced serverless architecture for scalable microservices, reducing infrastructure costs by 30%. Established GitHub Actions and AWS CI/CD automation for error tracking and deployment pipelines, cutting downtime by 50%. Built and streamlined RESTful APIs for frontend integration and collaborated with frontend developers on smooth API consumption and consistent UI/UX delivery.",
        tags: ["AWS Lambda", "DynamoDB", "S3", "API Gateway", "Node.js", "Serverless", "GitHub Actions"],
        color: "#f97316",
        bg: "#fff7ed",
        darkBg: "#7c2d12",
        tagBg: "#ffedd5",
        tagColor: "#c2410c",
    },
    {
        year: "2022",
        title: "Skill Foundation & First Projects",
        icon: Code2,
        desc: "Dove deep into JavaScript (ES6+), React, Node.js, Tailwind CSS, and full-stack development fundamentals. Explored cloud tools, REST API design, and database concepts with DynamoDB and MongoDB. Started building real projects including the Keeper App (AWS-based file management), Note-Taking Website with AWS S3 authentication, and Framer Design — a modular multi-section React website with reusable components like Navbar, Hero, Features, and FAQ.",
        tags: ["JavaScript ES6+", "React", "Node.js", "Tailwind CSS", "DynamoDB", "MongoDB", "REST APIs"],
        color: "#10b981",
        bg: "#ecfdf5",
        darkBg: "#064e3b",
        tagBg: "#d1fae5",
        tagColor: "#065f46",
    },
    {
        year: "2021",
        title: "B.Tech CSE Begins — GCE Kalahandi",
        icon: BookOpen,
        desc: "Enrolled in B.Tech Computer Science & Engineering at Government College of Engineering, Kalahandi (2021–2025). Began exploring programming languages including C, Java, Python, and SQL alongside core CS fundamentals. Took on leadership roles as Vice President of both the Literary Club and Nukkad Club — organizing literary events, magazine publications, and directing 10+ street plays promoting social causes. Also contributed poems and shayaris to the college magazine as a published writer.",
        tags: ["C", "Java", "Python", "SQL", "VP Literary Club", "VP Nukkad Club", "Published Writer"],
        color: "#f59e0b",
        bg: "#fffbeb",
        darkBg: "#78350f",
        tagBg: "#fef3c7",
        tagColor: "#b45309",
    },
    {
        year: "2020",
        title: "12th Science — 88% Score",
        icon: FlaskConical,
        desc: "Completed 12th Science with an 88% score from Oriental Public School, Malamunda, Bolangir (2018–2020). A strong performance in Physics, Chemistry, and Mathematics laid a solid analytical foundation and opened the path to engineering.",
        tags: ["Physics", "Chemistry", "Mathematics", "88%", "Science Stream"],
        color: "#0ea5e9",
        bg: "#e0f2fe",
        darkBg: "#0c4a6e",
        tagBg: "#bae6fd",
        tagColor: "#0369a1",
    },
    {
        year: "2018",
        title: "10th Standard — The Beginning",
        icon: Rocket,
        desc: "Completed 10th standard, marking the very beginning of an academic journey that would evolve into a passion for technology, problem-solving, and engineering. This milestone set the intellectual curiosity and work ethic that would define every step ahead.",
        tags: ["Academia", "Science", "Mathematics", "Foundation"],
        color: "#6366f1",
        bg: "#eef2ff",
        darkBg: "#312e81",
        tagBg: "#e0e7ff",
        tagColor: "#4338ca",
    },
];

const N = nodes.length;
const CX = 320, CY = 220;
const INNER_R = 200;
const OUTER_R = 374;
const ICON_R = 300;
const GAP_DEG = 5.5;
const SLICE_DEG = 360 / N;

function polarToXY(cx, cy, r, angleDeg) {
    const rad = (angleDeg - 90) * (Math.PI / 180);
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}

function makeSlicePath(cx, cy, rInner, rOuter, startDeg, endDeg) {
    const [x1, y1] = polarToXY(cx, cy, rOuter, startDeg);
    const [x2, y2] = polarToXY(cx, cy, rOuter, endDeg);
    const [x3, y3] = polarToXY(cx, cy, rInner, endDeg);
    const [x4, y4] = polarToXY(cx, cy, rInner, startDeg);
    const large = (endDeg - startDeg) > 180 ? 1 : 0;
    return `M${x1} ${y1} A${rOuter} ${rOuter} 0 ${large} 1 ${x2} ${y2} L${x3} ${y3} A${rInner} ${rInner} 0 ${large} 0 ${x4} ${y4}Z`;
}

const JourneyPath = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const [orbitRot, setOrbitRot] = useState(0);
    const [isSnapping, setIsSnapping] = useState(true);

    const regulatorRef = useRef(null);
    const orbitRef = useRef(0);
    const activeIdxRef = useRef(0);
    const autoRotateTimerRef = useRef(null);   // Main timer ref

    const snapToIcon = useCallback((targetIdx, currentRot) => {
        const base = targetIdx * SLICE_DEG;
        let needed = (90 - base + 360) % 360;
        let current = ((currentRot % 360) + 360) % 360;
        let diff = needed - current;
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;

        const snapped = currentRot + diff;

        setIsSnapping(true);
        setOrbitRot(snapped);
        orbitRef.current = snapped;
        setActiveIdx(targetIdx);

        // Reset auto-rotate timer whenever we snap (via click or auto)
        resetAutoRotateTimer();

    }, []);

    // Reset and start the 20-second auto-rotate timer
    const resetAutoRotateTimer = useCallback(() => {
        if (autoRotateTimerRef.current) {
            clearTimeout(autoRotateTimerRef.current);
        }

        autoRotateTimerRef.current = setTimeout(() => {
            const nextIdx = (activeIdxRef.current + 1) % N;
            snapToIcon(nextIdx, orbitRef.current);
        }, 15000); // 20 seconds
    }, [snapToIcon]);

    // Initial setup
    useEffect(() => {
        snapToIcon(0, 0);
    }, [snapToIcon]);

    // Keep activeIdxRef in sync
    useEffect(() => {
        activeIdxRef.current = activeIdx;
    }, [activeIdx]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (autoRotateTimerRef.current) {
                clearTimeout(autoRotateTimerRef.current);
            }
        };
    }, []);

    const handleSliceClick = (index) => {
        snapToIcon(index, orbitRef.current);
    };

    const activeNode = nodes[activeIdx];

    return (
        <div className="journey-path-wrapper">
            <div className="journey-regulator-side" ref={regulatorRef}>
                <svg
                    width="440"
                    height="440"
                    viewBox="0 0 440 440"
                    className="journey-dial-svg"
                >
                    <g
                        className="journey-orbit-group"
                        style={{
                            transformOrigin: `${CX}px ${CY}px`,
                            transform: `rotate(${orbitRot}deg)`,
                            transition: isSnapping
                                ? 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)'
                                : 'none',
                        }}
                    >
                        {nodes.map((nd, i) => {
                            const centerAngle = i * SLICE_DEG;
                            const startAngle = centerAngle - SLICE_DEG / 2 + GAP_DEG / 2;
                            const endAngle = centerAngle + SLICE_DEG / 2 - GAP_DEG / 2;
                            const [ix, iy] = polarToXY(CX, CY, ICON_R, centerAngle);
                            const Icon = nd.icon;
                            const isActive = i === activeIdx;

                            return (
                                <g
                                    key={i}
                                    onClick={() => handleSliceClick(i)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {/* Slice */}
                                    <path
                                        d={makeSlicePath(CX, CY, INNER_R, OUTER_R, startAngle, endAngle)}
                                        fill={nd.color}
                                        fillOpacity={isActive ? 0.5 : 0.18}
                                        stroke={nd.color}
                                        strokeWidth={isActive ? 2 : 1}
                                        strokeOpacity={isActive ? 1 : 0.5}
                                        style={{ transition: 'fill-opacity 0.2s, stroke-opacity 0.2s' }}
                                    />
                                    {/* Icon — counter-rotates to stay upright */}
                                    <g transform={`rotate(${-orbitRot}, ${ix}, ${iy})`}>
                                        <foreignObject
                                            x={ix - 29}
                                            y={iy - 29}
                                            width={32}
                                            height={32}
                                            style={{ overflow: 'visible' }}
                                        >
                                            <Icon
                                                size={70}
                                                color={nd.color}
                                                opacity={isActive ? 1 : 0.5}
                                                strokeWidth={2}
                                            />
                                        </foreignObject>
                                    </g>
                                </g>
                            );
                        })}
                    </g>
                </svg>
            </div>

            {/* Detail card */}
            <div
                className="journey-detail-card"
                style={{
                    '--accent': activeNode.color,
                    '--tagBg': activeNode.tagBg,
                    '--tagColor': activeNode.tagColor
                }}
            >
                <span className="journey-year-badge">{activeNode.year}</span>
                <h3 className="journey-detail-title">{activeNode.title}</h3>
                <p className="journey-detail-desc">{activeNode.desc}</p>
                <div className="journey-tags">
                    {activeNode.tags.map((tag, i) => (
                        <span key={i} className="journey-tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JourneyPath;