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
          I'm now a thief , just like president  Ruttoh
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
