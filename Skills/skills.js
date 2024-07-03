import React from 'react';
import Skill from './Skill';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Intermediate' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'Python', level: 'Beginner' },
    { name: 'SQL', level: 'Intermediate' },
    { name: 'Microsoft Azure', level: 'Intermediate' },
    { name: 'GSuite', level: 'Advanced' }
    
  ];

  return (
    <div className="skills">
      <h2>Skills</h2>
      {skillsData.map((skill, index) => (
        <Skill key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
}

export default Skills;
