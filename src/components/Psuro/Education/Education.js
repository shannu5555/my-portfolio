import React, { useState } from 'react';
import './Education.css';
import SkillModal from '../SkillModal/SkillModal';

const skillsList = [
    { skill: 'HTML', experience: '6 months', rating: 'Intermediate',image:'https://res.cloudinary.com/dth5uiebz/image/upload/v1725876546/pngegg_2_cyaxve.png' },
    { skill: 'CSS', experience: '6 months', rating: 'Intermediate' ,image:'https://res.cloudinary.com/dth5uiebz/image/upload/v1725876546/pngegg_4_slgqct.png' },
    { skill: 'JavaScript', experience: '1 year', rating: 'Advanced',image:'https://res.cloudinary.com/dth5uiebz/image/upload/v1725876547/pngegg_3_yvqfjw.png' },
    { skill: 'Python', experience: '2 years', rating: 'Expert',image:'https://res.cloudinary.com/dth5uiebz/image/upload/v1725876890/pngegg_5_coexdi.png' },
    { skill: 'React JS', experience: '2 years', rating: 'Expert',image:'https://res.cloudinary.com/dth5uiebz/image/upload/v1725876890/pngegg_7_hdoatu.png' },
    { skill: 'Django', experience: '2 years', rating: 'Expert',image:'https://res.cloudinary.com/dth5uiebz/image/upload/v1725877251/pngegg_11_gwdhln.png' },
    { skill: 'Php', experience: '2 years', rating: 'Expert',image:'https://res.cloudinary.com/dth5uiebz/image/upload/v1725876890/pngegg_9_v3hcwt.png' },
    { skill: 'SQL', experience: '2 years', rating: 'Expert',image:'https://res.cloudinary.com/dth5uiebz/image/upload/v1725876890/pngegg_6_m4zfbm.png' },
    { skill: 'Bootstrap', experience: '2 years', rating: 'Expert',image:'https://res.cloudinary.com/dth5uiebz/image/upload/v1725876890/pngegg_10_oo3gdd.png' },
];
const educationList = [
    { id: 1, title: 'SSC', college: 'Newera High School', percentage: 90, location: 'Hyderabad' },
    { id: 2, title: 'Intermediate', college: 'Narayana Junior College', percentage: 92, location: 'Hyderabad' },
    { id: 3, title: 'B.Tech', college: 'JNTU', percentage: 85, location: 'Hyderabad' },
];
const experienceList = [
    { companyName: 'Nxtwave', totalExperience: 6, domain: 'Web Development', workLocation: 'Hyderabad' },
    { companyName: 'ABC Corp', totalExperience: 3, domain: 'Software Development', workLocation: 'Bangalore' },
];

const Education = () => {
    const [activeTab, setActiveTab] = useState('Skills');

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);

    const openModal = (skill) => {
        setSelectedSkill(skill);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedSkill(null);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'Skills':
                return (
                    <div>
                    <ul className="skills-list">
                        {skillsList.map((skill, index) => (
                            <li key={index} className="skill-item" onClick={() => openModal(skill)}>
                                <h3>{skill.skill}</h3>
                                <img src={skill.image} alt='imgs' className='skill-logo'/>
                                <p>Experience: {skill.experience}</p>
                                <p>Rating: {skill.rating}</p>
                            </li>
                        ))}
                    </ul>
                    <SkillModal isOpen={modalIsOpen} onRequestClose={closeModal} skill={selectedSkill} />
                    </div>
                );
            case 'Education':
                return (
                    <div className="timeline">
                        {educationList.map((education, index) => (
                            <div key={education.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="timeline-content">
                                    <h2>{education.title}</h2>
                                    <h4>{education.college}</h4>
                                    <p>Percentage: {education.percentage}%</p>
                                    <p>Location: {education.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'Experience':
                return (
                    <div className="timeline">
                        {experienceList.map((experience, index) => (
                            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="timeline-content">
                                    <h2>{experience.companyName}</h2>
                                    <p>Total Experience: {experience.totalExperience} years</p>
                                    <p>Domain: {experience.domain}</p>
                                    <p>Work Location: {experience.workLocation}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="education-container">
            <nav className="education-nav">
                <ul>
                    <li className={activeTab === 'Skills' ? 'active' : ''} onClick={() => setActiveTab('Skills')}>SKILLS</li>
                    <li className={activeTab === 'Education' ? 'active' : ''} onClick={() => setActiveTab('Education')}>EDUCATION</li>
                    <li className={activeTab === 'Experience' ? 'active' : ''} onClick={() => setActiveTab('Experience')}>EXPERIENCE</li>
                </ul>
            </nav>
            <div className="content">
                {renderContent()}
            </div>
        </div>
    );
};

export default Education;
