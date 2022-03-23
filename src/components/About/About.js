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
import myImage from "../../assets/my_image.jpg";
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
            During my years at college, I participate in multiple coding-related
            workshops where we discussed IoT and drone coding amongst many other
            topics. This drew me into the world of coding, and I got hooked onto
            it.
          </StyledParagraph>
          <StyledParagraph>
            Though I was an amateur in this new world, I knew that I wanted to
            pursue my goals in this field. Coincidentally, I stumbled upon the
            courses offered by Masai School, and immediately enrolled there.
            Currently, I am learning MERN full stack web development. I am
            skilled in handling HTML, CSS, JavaScript, node.js, Express, React,
            MongoDB, GitHub. I'm always enthusiastic to learn new things and
            highly passionate about building new web applications.
          </StyledParagraph>
          <StyledParagraph>
            In my free time, I explore the world around me through a combination
            of hiking, cycling.
          </StyledParagraph>
          <Resume>
            <ResumeLink
              download="Omkar_Londhe"
              href="https://drive.google.com/file/d/1xU5_mR6GOLCwfXI3B1EO4KXwPSTwGLus/view?usp=sharing"
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
