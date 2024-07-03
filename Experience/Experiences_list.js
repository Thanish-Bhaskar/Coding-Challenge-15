import React from 'react';
import Experience from './Experience';
import './ExperienceList.css';

const ExperienceList = () => {
  const experiences = [
    { title: 'Data Analytics Intern', company: 'Gerdau', duration: 'Jan 2024 - Present' },
    { title: 'Student Assisstant', company: 'Shimberg Library', duration: 'Nov 2021 - Dec 2023' },

  ];

  return (
    <div className="experience-list">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <Experience key={index} title={exp.title} company={exp.company} duration={exp.duration} />
      ))}
    </div>
  );
}

export default ExperienceList;
