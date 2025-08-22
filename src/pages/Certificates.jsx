import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "../components/Certificates/CertificateCard";
import CertificateModal from "../components/Certificates/CertificateModal";
import Particle from "../components/Particle";

// Import sample certificate images (you can replace these with actual certificate images)
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

const Certificates = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleCertificateClick = (certificate) => {
        setSelectedCertificate(certificate);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCertificate(null);
    };

    const certificates = [
        {
            imgPath: internship,
            title: "Internship at BWORKZLLC Company",
        },
        {
            imgPath: internship2,
            title: "Internship at Intelligent AWS Application Company",
        },
        {
            imgPath: frontend,
            title: "Frontend Developer (React)",
        },
        {
            imgPath: JS,
            title: "JavaScript Developer",
        },
        {
            imgPath: UI,
            title: "UI/UX Designer",
        },
        {
            imgPath: software,
            title: "Software Engineer",
        },
        {
            imgPath: tata,
            title: "TATA Cyber Security",
        },
        {
            imgPath: AWS1,
            title: "Amazon Bedrock Certification",
        },
        {
            imgPath: AWS2,
            title: "Amazon Cloud Practitioner",
        },
        {
            imgPath: AWS3,
            title: "Amazon DevOps",
        },
    ];

    return (
        <Container fluid className="certificate-section w-full">
            <Particle />
            <Container fluid style={{ marginLeft: 0, marginRight: 0 }}>
                <h1 className="project-heading">
                    My <strong className="yellow">Certificates</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are some of the certifications I've earned throughout my learning journey.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {certificates.map((cert, index) => (
                        <Col md={3} className="certificate-card-col" key={index} style={{ marginBottom: "20px" }}>
                            <CertificateCard
                                imgPath={cert.imgPath}
                                title={cert.title}
                                onClick={handleCertificateClick}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
            
            {/* Certificate Modal */}
            <CertificateModal
                show={showModal}
                onHide={handleCloseModal}
                certificate={selectedCertificate}
            />
        </Container>
    );
};

export default Certificates;
