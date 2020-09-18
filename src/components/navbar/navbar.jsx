import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import "./navbar.css";

const Navbarmain = () => {
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="md"
      bg="dark"
      variant="dark"
      className="animate-navbar nav-theme justify-content-between"
    >
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link className="px-3" href="#home">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
            <Button className="homebtn">Home</Button>
            </Link>
          </Nav.Link>
          <Nav.Link className="px-3" href="#about">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
             <Button className="homebtn">About</Button>
            </Link>
          </Nav.Link>
          <Nav.Link className="px-3" href="#skill">
          <Link
              activeClass="active"
              to="skill"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <Button className="homebtn">Skill</Button>
            </Link>
          </Nav.Link>
          <Nav.Link className="px-3" href="#project">
          <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <Button className="homebtn">Project</Button>
            </Link>
          </Nav.Link>
           <Nav.Link className="px-3" href="#home">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
            <Button className="homebtn">Contact</Button>
            </Link>
          </Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbarmain;
  