import React, { useState, useRef, useEffect, useCallback } from "react";
import "./JourneyPath.css";
import { Briefcase, Laptop, BookOpen, Building2, Sparkles } from "lucide-react";

/* Newest first. Facts follow the TCS resume. */
const nodes = [
    {
        year: "May 2026 – Present",
        title: "Systems Engineer — Tata Consultancy Services (TCS)",
        icon: Building2,
        desc: "Joined TCS in May 2026 through the Initial Learning Program (ILP) and now work as a Systems Engineer. Trained in Java, ReactJS and Generative AI, completed knowledge-transition and customer-communication programs, and was recognised with the On The Spot Award (Jul 2026) and the Learning Achievement Award (Aug 2026).",
        tags: ["TCS", "Core Java", "ReactJS", "On The Spot Award", "Learning Achievement Award", "Currently Working"],
        color: "#3b82f6",
        tagBg: "#dbeafe",
        tagColor: "#1d4ed8",
    },
    {
        year: "Oct 2026",
        title: "GenAI & AI Agents Specialisation",
        icon: Sparkles,
        desc: "Earned three AI credentials in a single month: Google Partner Specialist Certified in Gemini Enterprise Agent Development, plus TCS AI Future Ready certifications in the GenAI and AI Agents curricula. Also completed the Google Cloud 'Build with Gemini' lab, which puts agent building and cloud together.",
        tags: ["Gemini Enterprise", "AI Agents", "Generative AI", "Google Cloud", "3 Certifications"],
        color: "#8b5cf6",
        tagBg: "#ede9fe",
        tagColor: "#6d28d9",
    },
    {
        year: "Jan – Feb 2025",
        title: "Software Developer — BWORKZLLC",
        icon: Laptop,
        desc: "Improved existing backend services with Express.js and MongoDB for better performance and maintainability. Deployed production builds on AWS Amplify, ran CI/CD workflows for fast iteration, and added monitoring and logging to track API health and speed up debugging.",
        tags: ["Express.js", "MongoDB", "AWS Amplify", "CI/CD", "API Monitoring"],
        color: "#ec4899",
        tagBg: "#fce7f3",
        tagColor: "#9d174d",
    },
    {
        year: "Jul 2023 – Dec 2024",
        title: "Full-Stack Developer — Intelligent AWS Application",
        icon: Briefcase,
        desc: "My first professional role. Built backend APIs with Node.js, AWS Lambda and DynamoDB, improving data processing efficiency by 40%. Moved services to a serverless architecture that cut infrastructure costs by 30%, and set up GitHub Actions and AWS CI/CD pipelines that reduced downtime by 50%. Worked closely with frontend developers on clean API integration.",
        tags: ["AWS Lambda", "DynamoDB", "S3", "API Gateway", "Node.js", "Serverless", "GitHub Actions"],
        color: "#f97316",
        tagBg: "#ffedd5",
        tagColor: "#c2410c",
    },
    {
        year: "2021 – 2025",
        title: "B.Tech CSE — GCE Kalahandi",
        icon: BookOpen,
        desc: "Studied Computer Science & Engineering at Government College of Engineering, Kalahandi, graduating with a CGPA of 8.6. Built my base in C, Java, Python and SQL. Served as Vice President of both the Literary Club and the Nukkad Club, directed 10+ street plays on social causes, and published poems and shayaris in the college magazine.",
        tags: ["C", "Java", "Python", "SQL", "CGPA 8.6", "VP Literary Club", "VP Nukkad Club"],
        color: "#f59e0b",
        tagBg: "#fef3c7",
        tagColor: "#b45309",
    },
];

const N = nodes.length;
const CX = 320, CY = 220;
const INNER_R = 150;
const OUTER_R = 264;
const ICON_R = 200;
const GAP_DEG = 5.5;
const SLICE_DEG = 360 / N;
const AUTO_MS = 15000;

function polarToXY(cx, cy, r, angleDeg) {
    const rad = (angleDeg - 90) * (Math.PI / 180);
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}

function makeSlicePath(cx, cy, rInner, rOuter, startDeg, endDeg) {
    const [x1, y1] = polarToXY(cx, cy, rOuter, startDeg);
    const [x2, y2] = polarToXY(cx, cy, rOuter, endDeg);
    const [x3, y3] = polarToXY(cx, cy, rInner, endDeg);
    const [x4, y4] = polarToXY(cx, cy, rInner, startDeg);
    const large = endDeg - startDeg > 180 ? 1 : 0;
    return `M${x1} ${y1} A${rOuter} ${rOuter} 0 ${large} 1 ${x2} ${y2} L${x3} ${y3} A${rInner} ${rInner} 0 ${large} 0 ${x4} ${y4}Z`;
}

const JourneyPath = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const [orbitRot, setOrbitRot] = useState(0);

    const orbitRef = useRef(0);
    const activeIdxRef = useRef(0);
    const timerRef = useRef(null);
    const pausedRef = useRef(false);

    const snapToIcon = useCallback(function snap(targetIdx, currentRot) {
        const needed = (90 - targetIdx * SLICE_DEG + 360) % 360;
        const current = ((currentRot % 360) + 360) % 360;
        let diff = needed - current;
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;

        const snapped = currentRot + diff;
        orbitRef.current = snapped;
        activeIdxRef.current = targetIdx;
        setOrbitRot(snapped);
        setActiveIdx(targetIdx);

        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            if (pausedRef.current) {
                timerRef.current = setTimeout(() => snap(activeIdxRef.current, orbitRef.current), 3000);
                return;
            }
            snap((activeIdxRef.current + 1) % N, orbitRef.current);
        }, AUTO_MS);
    }, []);

    useEffect(() => {
        snapToIcon(0, window.innerWidth <= 768 ? 270 : 0);
        return () => clearTimeout(timerRef.current);
    }, [snapToIcon]);

    const activeNode = nodes[activeIdx];

    return (
        <div className="journey-path-wrapper">
            <div className="journey-regulator-side">
                <svg width="440" height="440" viewBox="0 0 440 440" className="journey-dial-svg" role="tablist" aria-label="Career timeline">
                    <g
                        className="journey-orbit-group"
                        style={{
                            transformOrigin: `${CX}px ${CY}px`,
                            transform: `rotate(${orbitRot}deg)`,
                            transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
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
                                    key={nd.title}
                                    role="tab"
                                    tabIndex={0}
                                    aria-selected={isActive}
                                    aria-label={nd.title}
                                    onClick={() => snapToIcon(i, orbitRef.current)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                            e.preventDefault();
                                            snapToIcon(i, orbitRef.current);
                                        }
                                    }}
                                    style={{ cursor: "pointer", outline: "none" }}
                                >
                                    <path
                                        d={makeSlicePath(CX, CY, INNER_R, OUTER_R, startAngle, endAngle)}
                                        fill={nd.color}
                                        fillOpacity={isActive ? 0.5 : 0.18}
                                        stroke={nd.color}
                                        strokeWidth={isActive ? 2 : 1}
                                        strokeOpacity={isActive ? 1 : 0.5}
                                        style={{ transition: "fill-opacity 0.2s, stroke-opacity 0.2s" }}
                                    />
                                    {/* counter-rotate so the icon stays upright */}
                                    <g transform={`rotate(${-orbitRot}, ${ix}, ${iy})`}>
                                        <foreignObject x={ix - 29} y={iy - 29} width={32} height={32} style={{ overflow: "visible" }}>
                                            <Icon size={50} color={nd.color} opacity={isActive ? 1 : 0.5} strokeWidth={2} />
                                        </foreignObject>
                                    </g>
                                </g>
                            );
                        })}
                    </g>
                </svg>
            </div>

            {/* key remounts the card so it fades in on each change */}
            <div
                key={activeIdx}
                className="journey-detail-card"
                style={{ "--accent": activeNode.color, "--tagBg": activeNode.tagBg, "--tagColor": activeNode.tagColor }}
                onMouseEnter={() => (pausedRef.current = true)}
                onMouseLeave={() => (pausedRef.current = false)}
            >
                <span className="journey-year-badge">{activeNode.year}</span>
                <h3 className="journey-detail-title">{activeNode.title}</h3>
                <p className="journey-detail-desc">{activeNode.desc}</p>
                <div className="journey-tags">
                    {activeNode.tags.map((tag) => (
                        <span key={tag} className="journey-tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JourneyPath;