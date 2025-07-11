import React, { useState } from 'react';
import './Projects.css';
import ProjectModal from '../ProjectModal/ProjectModal';



const tabsList = [
  { tabId: 'ALL', displayText: 'All' },
  { tabId: 'SOCIAL', displayText: 'Social' },
  { tabId: 'FOOD', displayText: 'Food' },
  { tabId: 'TOOLS', displayText: 'Tools' },
  { tabId: 'EDUCATION', displayText: 'Education' },
  { tabId: 'sagir', displayText: 'sagir' },
];

const appsList = [
  {
    appId: 0,
    appName: 'ExpenseTracker',
    imageUrl: 'https://res.cloudinary.com/dth5uiebz/image/upload/v1722953736/expenseTraker_mwtoo3.png',
    category: 'SOCIAL',
    url: 'https://roombill.ccbp.tech/',
    date: '2024-01-01',
    description: 'An expense tracker web application is a powerful tool that helps individuals and businesses effectively manage their finances. It provides a centralized platform to record, categorize, and analyze expenses, empowering users to make informed financial decisions and achieve their financial goals. This project aims to develop a user-friendly and efficient expense tracker web application using the React framework. The application will feature key features such as expense input, category management, budget tracking, reporting and analysis, data export, and user authentication. By leveraging the React framework and incorporating essential functionalities, this expense tracker will provide a valuable tool for users to track and manage their expenses effectively.',
  },
  {
    appId: 1,
    appName: 'Basic IPL 2023',
    imageUrl: 'https://res.cloudinary.com/dth5uiebz/image/upload/v1722953735/expenseTraker_1_vfmnch.png',
    category: 'SOCIAL',
    url: 'https://crcwebwsbar.ccbp.tech/',
    date: '2024-01-01',
    description: 'This app helps you track your expenses efficiently.',
  },
  {
    appId: 2,
    appName: 'Food Munch',
    imageUrl: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/foodmunch-banner-bg.png',
    category: 'FOOD',
    url: 'https://fm12.ccbp.tech/',
    date: '2024-01-01',
    description: 'This app helps you track your expenses efficiently.',
  },
  {
    appId: 3,
    appName: 'Calculator',
    imageUrl: 'https://res.cloudinary.com/dth5uiebz/image/upload/v1722953737/expenseTraker_2_knvwhe.png',
    category: 'TOOLS',
    url: 'https://calculator05.ccbp.tech/',
    date: '2024-01-01',
    description: 'This app helps you track your expenses efficiently.',
  },
  {
    appId: 4,
    appName: 'Portfolio',
    imageUrl: 'https://res.cloudinary.com/dth5uiebz/image/upload/v1722956284/expenseTraker_3_ezotct.png',
    category: 'SOCIAL',
    url: 'https://sagirshaikp2.ccbp.tech/',
    date: '2024-01-01',
    description: 'This app helps you track your expenses efficiently.',
  },
  {
    appId: 5,
    appName: 'Wiki Search',
    imageUrl: 'https://nkb-backend-otg-media-static.s3.ap-south-1.amazonaws.com/ccbp-dynamic-webapps/wiki-logo-img.png',
    category: 'EDUCATION',
    url: 'https://wikisearch22s.ccbp.tech/',
    date: '2024-01-01',
    description: 'This app helps you track your expenses efficiently.',
  },
  {
    appId: 6,
    appName: 'Portfolio by reactjs',
    imageUrl: 'https://res.cloudinary.com/dth5uiebz/image/upload/v1725904207/Portfolioly_qnis92.png',
    category: 'EDUCATION',
    url: 'https://res.cloudinary.com/dth5uiebz/image/upload/v1725904207/Portfolioly_qnis92.png',
    date: '2024-01-01',
    description: 'This app helps you track your expenses efficiently.',
  },
  {
    appId: 7,
    appName: 'Team Selection',
    imageUrl: 'https://res.cloudinary.com/dth5uiebz/image/upload/v1725905019/Portfolioly_1_aafrld.png',
    category: 'sagir',
    url: 'https://66f440b973d62319fb548e79--prismatic-wisp-348573.netlify.app/',
    date: '2024-01-01',
    description: 'This app helps you track your expenses efficiently.',
  },
  {
    appId: 8,
    appName: '8 team',
    imageUrl: 'https://res.cloudinary.com/dth5uiebz/image/upload/v1725905723/Portfolioly_2_opypda.png',
    category: 'sagir',
    url: 'https://ivory-garnet-10.tiiny.site/',
    date: '2024-01-01',
    description: 'This app helps you track your expenses efficiently.',
  },
  {
    appId: 9,
    appName: 'IPL Auction',
    imageUrl: 'https://res.cloudinary.com/dth5uiebz/image/upload/v1725905723/Portfolioly_2_opypda.png',
    category: 'sagir',
    url: 'https://res.cloudinary.com/dth5uiebz/image/upload/v1725905723/Portfolioly_2_opypda.png',
    date: '2024-01-01',
    description: 'This app helps you track your expenses efficiently.',
  },
  {
    appId: 10,
    appName: 'IPL Auction',
    imageUrl: 'https://res.cloudinary.com/dth5uiebz/image/upload/v1725905723/Portfolioly_2_opypda.png',
    category: 'sagir',
    url: 'https://res.cloudinary.com/dth5uiebz/image/upload/v1725905723/Portfolioly_2_opypda.png',
    date: '2024-01-01',
    description: 'This app helps you track your expenses efficiently.',
  },{
    appId: 11,
    appName: 'IPL Auction',
    imageUrl: 'https://res.cloudinary.com/dth5uiebz/image/upload/v1725905723/Portfolioly_2_opypda.png',
    category: 'sagir',
    url: 'https://res.cloudinary.com/dth5uiebz/image/upload/v1725905723/Portfolioly_2_opypda.png',
    date: '2024-01-01',
    description: 'This app helps you track your expenses efficiently.',
  },
  {
    appId: 12,
    appName: 'IPL Auction',
    imageUrl: 'https://res.cloudinary.com/dth5uiebz/image/upload/v1725905723/Portfolioly_2_opypda.png',
    category: 'sagir',
    url: 'https://res.cloudinary.com/dth5uiebz/image/upload/v1725905723/Portfolioly_2_opypda.png',
    date: '2024-01-01',
    description: 'This app helps you track your expenses efficiently.',
  },
  {
    appId: 13,
    appName: 'IPL Auction',
    imageUrl: 'https://res.cloudinary.com/dth5uiebz/image/upload/v1725905723/Portfolioly_2_opypda.png',
    category: 'sagir',
    url: 'https://res.cloudinary.com/dth5uiebz/image/upload/v1725905723/Portfolioly_2_opypda.png',
    date: '2024-01-01',
    description: 'This app helps you track your expenses efficiently.',
  },
  {
    appId: 14,
    appName: 'IPL Auction',
    imageUrl: 'https://res.cloudinary.com/dth5uiebz/image/upload/v1725905723/Portfolioly_2_opypda.png',
    category: 'FOOD',
    url: 'https://res.cloudinary.com/dth5uiebz/image/upload/v1725905723/Portfolioly_2_opypda.png',
    date: '2024-01-01',
    description: 'This app helps you track your expenses efficiently.',
  },

  // Add more apps as needed 
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [filteredProjects, setFilteredProjects] = useState(appsList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleTabSelect = (tabId) => {
      setActiveTab(tabId);
      if (tabId === 'ALL') {
          setFilteredProjects(appsList);
      } else {
          setFilteredProjects(appsList.filter(app => app.category === tabId));
      }
  };

  const openModal = (project) => {
      setSelectedProject(project);
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
      setSelectedProject(null);
  };

  return (
      <div>
          <div className="portfolio-nav">
              {tabsList.map(tab => (
                  <button
                      key={tab.tabId}
                      className={activeTab === tab.tabId ? 'active' : ''}
                      onClick={() => handleTabSelect(tab.tabId)}
                  >
                      {tab.displayText}
                  </button>
              ))}
          </div>
          <div className="projects">
              {filteredProjects.map(project => (
                  <div className="project" key={project.appId} onClick={() => openModal(project)}>
                      <img src={project.imageUrl} alt={project.appName} />
                      <p>{project.appName}</p>
                  </div>
              ))}
          </div>
          <ProjectModal isOpen={isModalOpen} onRequestClose={closeModal} project={selectedProject} />
      </div>
  );
};

export default Projects;
