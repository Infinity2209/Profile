import React from "react";
import { Modal } from "react-bootstrap";

const CertificateModal = ({ show, onHide, certificate }) => {
    if (!certificate) return null;

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="certificate-modal"
            centered
            className="certificate-modal"
        >
            <Modal.Header className="certificate-modal-header">
                <Modal.Title
                    id="certificate-modal"
                    className="certificate-modal-title"
                >
                    {certificate.title}
                </Modal.Title>
                <button
                    type="button"
                    className="certificate-modal-close"
                    onClick={onHide}
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </Modal.Header>
            <Modal.Body className="certificate-modal-body">
                <img
                    src={certificate.imgPath}
                    alt={certificate.title}
                    className="certificate-modal-image"
                />
            </Modal.Body>
        </Modal>
    );
};

export default CertificateModal;
