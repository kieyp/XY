import React from "react";

import { Name, StyledHome, Title } from "../styles/Home.styled";
import "./style.css";

import { IconContext } from "react-icons";
import { IoIosCall, IoMdMail } from "react-icons/io";
import {
  SiLinkedin,
  SiGithub,
  SiMinutemailer,
  SiTwitter,
  SiPhonepe,
  SiGmail,
} from "react-icons/si";

const Home = () => {
  let today = new Date(),
    hour = today.getHours();

  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <StyledHome id="home">
        <Name>Boniface Cheruiyot</Name>
        <Title>SOFTWARE DEVELOPER</Title>
        <p>Specialization In Back End Developement and Data Analytics </p>
        <div id="contactdiv">
          <a
            href="https://github.com/kieyp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kipbon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin />
          </a>

          <a href="tel:0720455615">
            <IoIosCall />
          </a>
          <a href="mailto:cheruiyotbony@gmail.com">
            <SiGmail />
          </a>
        </div>
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
