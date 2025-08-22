import React from "react";
import Card from "react-bootstrap/Card";

const CertificateCard = (props) => {
    const handleCardClick = () => {
        if (props.onClick) {
            props.onClick(props);
        }
    };

    return (
        <Card
            className="certificate-card-view"
            style={{
                border: "1.7px solid rgba(0, 250, 250, 0.8)",
                borderRadius: "15px",
                margin: "15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "transparent",
                boxShadow: "4px 5px 4px 3px rgba(0, 250, 250, 0.64)",
                maxWidth: "500px",
                height: "300px",
                cursor: "pointer",
                transition: "all 0.3s ease 0s",
            }}
            onClick={handleCardClick}
        >
            <Card.Img
                variant="top"
                src={props.imgPath}
                alt={props.title}
                style={{
                    height: "400px",
                    width: "95%",
                    alignSelf: "center",
                    objectFit: "cover",
                    padding: "5px",
                    borderRadius: "10px",
                    overflow: "hidden",
                }}
            />
            <Card.Body
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "15px"
                }}
            >
                <Card.Title
                    style={{
                        color: "#f3f5f7ff",
                        fontWeight: "bold",
                        fontSize: "20px",
                        textAlign: "center",
                        marginBottom: "10px"
                    }}
                >
                    {props.title}
                </Card.Title>
            </Card.Body>
        </Card>
    );
};

export default CertificateCard;
