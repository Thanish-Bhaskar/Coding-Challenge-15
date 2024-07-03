import React from 'react';
import Education from './Education';
import './EducationList.css';

const EducationList = () => {
  const educationData = [
    { institution: 'University of South Florida', degree: 'BSc in Business Analytics and Information Systems', years: '2021 - 2025' },
    { institution: 'VIBGYOR High School', degree: 'High School Diploma', years: '2018 - 2021' },

  ];

  return (
    <div className="education-list">
      <h2>Education</h2>
      {educationData.map((edu, index) => (
        <Education key={index} institution={edu.institution} degree={edu.degree} years={edu.years} />
      ))}
    </div>
  );
}

export default EducationList;
