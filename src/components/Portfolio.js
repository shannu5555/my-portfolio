import React, { useState, useEffect } from 'react';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost/backend/getProjects.php')  // URL to your PHP backend
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.log('Error fetching projects:', error));
    }, []);

    return (
        <div>
            <h2>My Projects</h2>
            <div className="project-list">
                {projects.map(project => (
                    <div key={project.id} className="project-item">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <img src={project.image_url} alt={project.title} />
                        <a href={project.link}>View Project</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
