import React from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import ExperienceList from './components/ExperienceList';
import EducationList from './components/EducationList';

function App() {
  return (
    <div className="App">
      <PersonalInfo />
      <Skills />
      <ExperienceList />
      <EducationList />
    </div>
  );
}

export default App;
