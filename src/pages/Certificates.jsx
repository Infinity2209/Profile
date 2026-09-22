import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "../components/Certificates/CertificateCard";
import CertificateModal from "../components/Certificates/CertificateModal";
import Particle from "../components/Particle";

import internship from "../assets/Certificate/internship.png";
import internship2 from "../assets/Certificate/internship2.png";
import AWS1 from "../assets/Certificate/AWS1.png";
import AWS2 from "../assets/Certificate/AWS2.png";
import AWS3 from "../assets/Certificate/AWS3.png";
import frontend from "../assets/Certificate/frontend.png";
import JS from "../assets/Certificate/JS.png";
import software from "../assets/Certificate/software.png";
import tata from "../assets/Certificate/TATA.png";
import UI from "../assets/Certificate/UX.png";
import ibm from "../assets/Certificate/IBM.png";
import jpMorgan from "../assets/Certificate/jpMorgan.png";
import AiEthics from "../assets/Certificate/AiEthics.png";
import AWS4 from "../assets/Certificate/AWS4.png";
import react1 from "../assets/Certificate/react1.png";
import react2 from "../assets/Certificate/react2.png";
import masterRAG from "../assets/Certificate/masterRAG.png";
import JAVA from "../assets/Certificate/JAVA.png";
import ILP from "../assets/Certificate/ILP.png";
import hitech from "../assets/Certificate/hitech.png";
import genAI from "../assets/Certificate/genAI.png";

const ALL_CERTIFICATES = [
    { imgPath: internship, title: "Internship at BWORKZLLC Company", category: "Internships" },
    { imgPath: internship2, title: "Internship at Intelligent AWS Application Company", category: "Internships" },
    { imgPath: jpMorgan, title: "Software Engineering Job Simulation", category: "Internships" },

    { imgPath: AWS1, title: "Amazon Bedrock Certification", category: "Cloud & AWS" },
    { imgPath: AWS2, title: "Amazon Cloud Practitioner", category: "Cloud & AWS" },
    { imgPath: AWS3, title: "Amazon DevOps", category: "Cloud & AWS" },
    { imgPath: AWS4, title: "AWS Introduction to Containers", category: "Cloud & AWS" },

    { imgPath: genAI, title: "GenAI : Generative AI for Developers", category: "AI & Gen AI" },
    { imgPath: masterRAG, title: "Master RAG", category: "AI & Gen AI" },
    { imgPath: AiEthics, title: "AI Ethics", category: "AI & Gen AI" },

    { imgPath: react1, title: "React JS Portfolio Project", category: "Web Development" },
    { imgPath: react2, title: "React 18 / 19", category: "Web Development" },
    { imgPath: frontend, title: "Frontend Developer (React)", category: "Web Development" },
    { imgPath: JS, title: "JavaScript Developer", category: "Web Development" },

    { imgPath: JAVA, title: "JAVA Programming", category: "Programming" },
    { imgPath: ILP, title: "ILP : Java Foundation Regular Curriculum", category: "Programming" },
    { imgPath: hitech, title: "HiTech : Software Product Engineering Foundation", category: "Programming" },
    { imgPath: software, title: "Software Engineer", category: "Programming" },

    { imgPath: ibm, title: "Cybersecurity Fundamentals", category: "Cybersecurity" },
    { imgPath: tata, title: "TATA Cyber Security", category: "Cybersecurity" },

    { imgPath: UI, title: "UI/UX Designer", category: "Design" },
];

const CATEGORIES = ["All", ...new Set(ALL_CERTIFICATES.map((c) => c.category))];

const Certificates = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [activeFilter, setActiveFilter] = useState("All");

    const handleCertificateClick = (certificate) => {
        setSelectedCertificate(certificate);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCertificate(null);
    };

    const visibleCertificates = useMemo(
        () =>
            activeFilter === "All"
                ? ALL_CERTIFICATES
                : ALL_CERTIFICATES.filter((c) => c.category === activeFilter),
        [activeFilter]
    );

    const countFor = (category) =>
        category === "All"
            ? ALL_CERTIFICATES.length
            : ALL_CERTIFICATES.filter((c) => c.category === category).length;

    return (
        <Container fluid className="certificate-section w-full">
            <Particle />
            <Container fluid style={{ marginLeft: 0, marginRight: 0 }}>
                <h1 className="project-heading">
                    Hall of<strong className="yellow"> Excellency</strong>
                </h1>
                <div className="certificate-filter-bar">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            type="button"
                            className={`certificate-filter-pill${activeFilter === category ? " active" : ""}`}
                            onClick={() => setActiveFilter(category)}
                        >
                            {category}
                            <span className="certificate-filter-count">{countFor(category)}</span>
                        </button>
                    ))}
                </div>

                <Row className="certificate-grid" key={activeFilter}>
                    {visibleCertificates.map((cert, index) => (
                        <Col
                            xs={12}
                            sm={6}
                            lg={4}
                            xl={3}
                            className="certificate-card-col"
                            key={cert.title}
                            style={{ animationDelay: `${index * 40}ms` }}
                        >
                            <CertificateCard
                                imgPath={cert.imgPath}
                                title={cert.title}
                                onClick={handleCertificateClick}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>

            <CertificateModal show={showModal} onHide={handleCloseModal} certificate={selectedCertificate} />
        </Container>
    );
};

export default Certificates;