import React, { useState } from 'react';

const AdminPanel = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image_url: '',
        link: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddProject = () => {
        const formDataObj = new FormData();
        Object.keys(formData).forEach(key => {
            formDataObj.append(key, formData[key]);
        });

        fetch('http://localhost/backend/addProject.php', {
            method: 'POST',
            body: formDataObj
        })
            .then(response => response.text())
            .then(data => alert(data))
            .catch(error => console.log('Error adding project:', error));
    };

    return (
        <div>
            <h2>Admin Panel</h2>
            <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleInputChange}
            />
            <textarea
                name="description"
                placeholder="Description"
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="image_url"
                placeholder="Image URL"
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="link"
                placeholder="Project Link"
                onChange={handleInputChange}
            />
            <button onClick={handleAddProject}>Add Project</button>
        </div>
    );
};

export default AdminPanel;
