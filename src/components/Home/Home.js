import React from "react";
import { StyledHome } from "../styles/Home.styled";
import "./style.css";
import { IconContext } from "react-icons";
import { IoIosCall } from "react-icons/io";
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";

const Home = () => {
  let today = new Date(),
    hour = today.getHours();
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
        <div className="hero-section" style={{ textAlign: "center", paddingTop: "5rem" }}>
          <h1 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "4rem", color: "#333", marginBottom: "1rem" }}>
            Welcome to My Portfolio
          </h1>
          <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "1.5rem", color: "#666", marginBottom: "2rem" }}>
            {greeting} I'm Boniface Cheruiyot, a passionate Data Analyst and Software Developer.
          </p>
          <div className="social-icons">
            <a
              href="https://github.com/kieyp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <SiGithub style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/kipbon/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <SiLinkedin style={{ marginRight: "1rem" }} />
            </a>
            <a href="mailto:cheruiyotbony@gmail.com" aria-label="Email">
              <SiGmail style={{ marginRight: "1rem" }} />
            </a>
            <a href="tel:0720455615" aria-label="Phone">
              <IoIosCall />
            </a>
          </div>
        </div>
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
