import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-scroll";
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
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          <Link
            className="px-3"
            href="#home"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <Button className="homebtn">Home</Button>
          </Link>
          <Link
            className="px-3"
            href="#about"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <Button className="homebtn">About</Button>
          </Link>
          <Link
            className="px-3"
            href="#skill"
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <Button className="homebtn">Skill</Button>
          </Link>
          <Link
            className="px-3"
            href="#project"
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <Button className="homebtn">Project</Button>
          </Link>
          <Link
            className="px-3"
            href="#contact"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <Button className="homebtn">Contact</Button>
          </Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbarmain;
