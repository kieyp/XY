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
      <SectionHeading dark={true} mb="3rem">
        <SectionTitle dark={true}>About Me</SectionTitle>
      </SectionHeading>

      <AboutContent>
        <AboutImage src={myImage} alt="Omkar Londhe" />

        <AboutDetailsContainer>
          <StyledParagraph>
            Over the last 5 years, I've immersed myself in the world of software engineering, honing my skills in Python, Flask, and React by building numerous projects.
          </StyledParagraph>
          <StyledParagraph>
            My journey began with a fascination for IoT and its technology, which naturally led me to explore software engineering. Since then, I've dedicated myself to mastering various technologies, including HTML, CSS, JavaScript, node.js, and SQL.
          </StyledParagraph>
          <StyledParagraph>
            I thrive on challenges and am always eager to learn new things. Whether it's crafting elegant code or analyzing complex data, I approach every task with enthusiasm and dedication.
          </StyledParagraph>
          <StyledParagraph>
            Outside of coding, you'll find me exploring the outdoors, whether it's hiking through rugged terrain or discovering new swimming spots.
          </StyledParagraph>
          <Resume>
            <ResumeLink
              download="Omkar_Londhe"
              href="https://docs.google.com/document/d/1FXr_W357unjJWkWfqHjItycav2acddK8mFXTDcbBnmc/edit?usp=sharing"
              target="_blank"
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
