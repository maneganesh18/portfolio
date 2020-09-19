import React, { Component } from "react";
import "./App.css";
import Home from "./components/home/home";
import MainHeading from "./components/mainheading/mainheading";
import Navbarmain from "./components/navbar/navbar";
import About from "./pages/about/about";
import Skill from "./pages/skills/skills";
import Project from "./pages/projects/project";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";

class App extends Component {
  state = {
    name: { firstname: "Ganesh", middlename: "Limbaji", lastname: "Mane" },
    links: {
      facebook: "https://www.facebook.com/ganesh.mane.39982",
      linkedin: "https://www.linkedin.com/in/ganesh-mane-31925b1a9",
      github: "https://github.com/maneganesh18",
      twitter: "https://twitter.com/GaneshMane1899",
      resume: "https://drive.google.com/file/d/183IuNFQ9-pZKty6t3KBE6CrFFshKofQs/view?usp=sharing",
      email : "mailto:maneganesh212@gmail.com",
      instagram: "https://www.instagram.com/__gm8__/"
    },
  };
  render() {
    return (
      <div className="App">
        <Navbarmain />
        <Home id="home" />
        <MainHeading state={this.state} />
        <About id="about" state={this.state} />
        <Skill id="skill" />
        <Project id="project" />
        <Contact state={this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;
