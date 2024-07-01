import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { IoIosCall } from "react-icons/io";
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import profileImage from "../../assets/12345.jpg"; // Example profile image import

const StyledHome = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${profileImage}) no-repeat center center fixed;
  background-size: cover;
  color: #fff;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const HeroSection = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 2rem;
`;

const HeroTitle = styled.h1`
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroText = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SocialIcons = styled.div`
  margin-top: 1rem;

  & > a {
    font-size: 2rem;
    color: #fff;
    margin: 0 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }
`;

const Home = () => {
  let today = new Date();
  let hour = today.getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good morning!";
  } else if (hour < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  return (
    <IconContext.Provider value={{ size: "2rem" }}>
      <StyledHome id="home">
        <Overlay />
        <HeroSection className="fade-in">
          <HeroTitle>Welcome to My Portfolio</HeroTitle>
          <HeroText>{greeting} I'm Boniface Cheruiyot</HeroText>
          <HeroText>A Data Analyst and Software Developer.</HeroText>
          <SocialIcons className="social-icons">
            <a
              href="https://github.com/kieyp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kipbon/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <SiLinkedin />
            </a>
            <a href="mailto:cheruiyotbony@gmail.com" aria-label="Email">
              <SiGmail />
            </a>
            <a href="tel:0720455615" aria-label="Phone">
              <IoIosCall />
            </a>
          </SocialIcons>
        </HeroSection>
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
