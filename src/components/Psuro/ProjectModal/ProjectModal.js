import React from 'react';
import Modal from 'react-modal';
import './ProjectModal.css'; // Create this file for styling

const ProjectModal = ({ isOpen, onRequestClose, project }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="project-modal"
            overlayClassName="modal-overlay"
            ariaHideApp={false}
        >
            {project && (
                <div className="modal-content">
                    <img src={project.imageUrl} alt={project.appName} className="modal-image" />
                    <h2>{project.appName}</h2>
                    <p>{project.date}</p>
                    <div className="description">
                        <p2>{project.description}</p2>
                    </div>
                    <button onClick={() => window.open(project.url, '_blank')} className="visit-site-button">
                        Visit Site
                    </button>
                </div>
            )}
        </Modal>
    );
};

export default ProjectModal;
