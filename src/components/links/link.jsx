import React from "react";
import {
    FaLinkedin,
    FaFacebookSquare,
    FaGithub,
    FaTwitterSquare,
  } from "react-icons/fa";
import './link.css'

const Links = () => {
  return (
    <div className="icons-grp mt-5">
      <a href="https://www.linkedin.com/in/ganesh-mane-31925b1a9">
        <FaLinkedin className="icon" color="#eeeded" size="1em" />
      </a>
      <a href="https://www.facebook.com/ganesh.mane.39982">
        <FaFacebookSquare className="icon" color="#eeeded" size="1em" />
      </a>
      <a href="https://github.com/maneganesh18">
        <FaGithub className="icon" color="#eeeded" size="1em" />
      </a>
      <a href="https://twitter.com/GaneshMane1899">
        <FaTwitterSquare className="icon" color="#eeeded" size="1em" />
      </a>
    </div>
  );
};

export default Links;
