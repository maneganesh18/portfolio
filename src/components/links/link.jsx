import React from "react";
import {
    FaLinkedin,
    FaFacebookSquare,
    FaGithub,
    FaTwitterSquare,
  } from "react-icons/fa";
import './link.css'

const Links = (props) => {
  return (
    <div className="icons-grp mt-5">
      <a href={props.props.links.linkedin}>
        <FaLinkedin className="icon" color="#eeeded" size="1em" />
      </a>
      <a href={props.props.links.facebook}>
        <FaFacebookSquare className="icon" color="#eeeded" size="1em" />
      </a>
      <a href={props.props.links.github}>
        <FaGithub className="icon" color="#eeeded" size="1em" />
      </a>
      <a href={props.props.links.twitter}>
        <FaTwitterSquare className="icon" color="#eeeded" size="1em" />
      </a>
    </div>
  );
};

export default Links;
