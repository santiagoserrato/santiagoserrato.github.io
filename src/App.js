import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation/>
      <Introduction/>
      <AboutMe/>
      <WorkExperience/>
      <Education/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;