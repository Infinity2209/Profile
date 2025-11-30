import React, { useState } from 'react';
import { Rocket, GraduationCap, Code, Briefcase, Lightbulb, Cloud, Trophy } from 'lucide-react';
import './JourneyPath.css';

const JourneyPath = () => {
    const [hoveredNode, setHoveredNode] = useState(null);

    const timelineNodes = [
        {
            id: 1,
            year: "2018",
            title: "10th Standard Completed",
            icon: Rocket,
            description: "Completed 10th standard, forming the base of my academic journey.",
            color: "#00d4ff"
        },
        {
            id: 2,
            year: "2020",
            title: "12th Science Completed",
            icon: Code,
            description: "Completed 12th Science with 88% from Oriental Public School, Malamunda.",
            color: "#ffaa00"
        },
        {
            id: 3,
            year: "2021",
            title: "B.Tech Journey Started",
            icon: Briefcase,
            description: "Started B.Tech in Computer Science and Engineering at GCE Kalahandi.",
            color: "#ff6b6b"
        },
        {
            id: 4,
            year: "2022",
            title: "Skill Foundation",
            icon: Lightbulb,
            description: "Built strong skills in JavaScript (ES6+), React, and the fundamentals of full-stack development.",
            color: "#a78bfa"
        },
        {
            id: 5,
            year: "2023",
            title: "First Job",
            icon: Cloud,
            description: "Joined INTELLIGENT AWS APPLICATION as Full-Stack Developer. Built scalable serverless architectures.",
            color: "#fbbf24"
        },
        {
            id: 6,
            year: "2024",
            title: "Certifications",
            icon: Trophy,
            description: "Completed multiple technical certifications including web development, cloud tools, and programming essentials.",
            color: "#f43f5e"
        },
        {
            id: 7,
            year: "2024-25",
            title: "Software Developer Trainee",
            icon: Code,
            description: "Interned at BWORKZLLC as Software Developer Trainee. Completed the internship successfully.",
            color: "#a78bfa"
        },
        {
            id: 8,
            year: "2025",
            title: "B.Tech Completed",
            icon: GraduationCap,
            description: "Successfully completed B.Tech in Computer Science and Engineering at GCE Kalahandi.",
            color: "#3b82f6"
        }
    ];


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
            <div className="journey-path">
                {timelineNodes.map((item, index) => {
                    const Icon = item.icon;
                    const isLeftCard = index % 2 === 0; // Even index: left, Odd index: right

                    return (
                        <div key={item.id} className="journey-node-wrapper">
                            <div
                                className="journey-node"
                                style={{ borderColor: item.color }}
                                onMouseEnter={() => setHoveredNode(item.id)}
                                onMouseLeave={() => setHoveredNode(null)}
                            >
                                <Icon size={32} color={item.color} />
                            </div>

                            {hoveredNode === item.id && (
                                <div
                                    className={`journey-detail-card ${isLeftCard ? 'left-card' : 'right-card'}`}
                                    style={{ borderColor: item.color }}
                                >
                                    <div
                                        className="journey-detail-arrow"
                                        style={{
                                            borderLeftColor: isLeftCard ? item.color : 'transparent',
                                            borderRightColor: isLeftCard ? 'transparent' : item.color
                                        }}
                                    />
                                    <h3 className="text-md font-bold mb-3" style={{ color: item.color }}>
                                        {item.year} - {item.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default JourneyPath;