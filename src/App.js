import React from 'react';
import './App.css';
import Home from './components/home/home';
import MainHeading from './components/mainheading/mainheading';
import Navbarmain from './components/navbar/navbar';
import About from './pages/about/about';
import Skill from './pages/skills/skills';
import Project from './pages/projects/project';
import Contact from './pages/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
        <Navbarmain />
        <Home id="home" />
        <MainHeading/>
        <About id="about" />
        <Skill id="skill" />
        <Project id="project" />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
