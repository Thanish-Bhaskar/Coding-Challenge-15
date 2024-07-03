
import React from 'react';

const Skill = ({ name, level }) => {
  return (
    <div className="skill">
      <h3>{name}</h3>
      <p>{level}</p>
    </div>
  );
}

export default Skill;
