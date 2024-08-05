import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from '../components/Particle';
import Resumefile from '../assets/ANANTA-CV.pdf';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink = Resumefile;

const Resume = () => {
  const [width, setWidth] = useState(700);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.4} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <div className="download-container">
            <Button
              variant="primary"
              href={resumeLink}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download Resume
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
