import React from 'react';

const Education = ({ institution, degree, years }) => {
  return (
    <div className="education">
      <h3>{institution}</h3>
      <p>{degree}</p>
      <p>{years}</p>
    </div>
  );
}

export default Education;
