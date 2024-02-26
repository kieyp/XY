import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/my_image2.jpeg";
import downloadIcon from "../../assets/icons/download-icon.svg";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true">About Me</SectionTitle>
      </SectionHeading>

      <AboutContent>
        <AboutImage src={myImage} />

        <AboutDetailsContainer>
          <StyledParagraph>
           Over the last 5 years, my passion for IoT and its underlying technology has been a driving force. 
           This journey naturally led me to explore the captivating world of software engineering. 

          </StyledParagraph>
          <StyledParagraph>
            Though I am an amateur in this new world, I always  knew that I wanted to
            pursue my goals in this field.  I am
            skilled in handling HTML, CSS, JavaScript, node.js, Python, React,
            SQL and GitHub. I'm always enthusiastic to learn new things and
            highly passionate about building web applications besides data analytics
          </StyledParagraph>
          <StyledParagraph>
            In my free time, I explore the world around me through a combination
            of hiking and exploring new swimming pools .
          </StyledParagraph>
          <Resume>
            <ResumeLink
              download="Omkar_Londhe"
              href="https://docs.google.com/document/d/1FXr_W357unjJWkWfqHjItycav2acddK8mFXTDcbBnmc/edit?usp=sharing"
              target={"_blank"}
              icon={downloadIcon}
            >
              View Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
