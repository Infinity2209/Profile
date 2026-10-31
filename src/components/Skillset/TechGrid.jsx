import React from "react";
import { Col, Row } from "react-bootstrap";

const TechGrid = ({ items }) => (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {items.map((item) => (
            <Col xs={4} md={2} className="tech-icons" key={item.name}>
                <div className="flip-card" tabIndex={0} aria-label={item.name}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">{item.icon}</div>
                        <div className="flip-card-back">{item.name}</div>
                    </div>
                </div>
            </Col>
        ))}
    </Row>
);

export default TechGrid;