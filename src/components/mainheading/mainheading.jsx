import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import Links from "../links/link";


const TitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
    font-weight: bold;
    color: rgba(240, 240, 240, 0.842);
    font: 70px/1em "opensans-bold";
    font-style: Bebas Neue;
  }
  div {
    color: ${(props) => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 4px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }

  
 
`;

const MainHeading = () => (
  <TitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          I'm
          <br />
          <span>
            <strong>Ganesh Mane</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Web Developer", "Learner"],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>
      </div>
      <Links />
    </div>
  </TitleMessage>
);

export default MainHeading;
