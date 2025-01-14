import React from 'react';
import Modal from 'react-modal';
import './SkillModal.css'; // Create this file for styling

const SkillModal = ({ isOpen, onRequestClose, skill }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="skill-modal"
            overlayClassName="modal-overlay"
            ariaHideApp={false}
        >
            {skill && (
                <div className="modal-content">
                    <img src={skill.image} alt={skill.skill} className="modal-image" />
                    <h2>{skill.skill}</h2>
                    <p>Experience: {skill.experience}</p>
                    <p>Rating: {skill.rating}</p>
                </div>
            )}
        </Modal>
    );
};

export default SkillModal;
