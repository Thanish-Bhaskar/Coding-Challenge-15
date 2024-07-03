import React from 'react';

const Experience = ({ title, company, duration }) => {
  return (
    <div className="experience">
      <h3>{title}</h3>
      <p>{company}</p>
      <p>{duration}</p>
    </div>
  );
}

export default Experience;
