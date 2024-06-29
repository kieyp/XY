import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import myImage from "../../assets/my_image2.jpeg";
import downloadIcon from "../../assets/icons/download-icon.svg";

// Define color scheme
const primaryColor = "#007bff";   // Vibrant primary blue
const accentColor = "#6c757d";    // Subtle grey for accents
const backgroundColor = "#f8f9fa"; // Light background color

// Styled Components with updated colors and modern styles
const StyledAbout = styled.section`
  padding: 2rem;
  background-color: ${backgroundColor};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SectionHeading = styled.div`
  margin-bottom: ${({ mb }) => mb || "2rem"};
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${primaryColor}; /* Use primary color for titles */
  margin-bottom: 1.5rem;
`;

const AboutContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const AboutDetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AboutImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledParagraph = styled.p`
  line-height: 1.8;
  color: #555; /* Dark grey text for readability */
  text-align: justify;
`;

const Resume = styled.div`
  margin-top: 2rem;
`;

const ResumeLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  background-color: ${primaryColor};
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &::before {
    content: url(${({ icon }) => icon});
    margin-right: 0.5rem;
  }
`;

// Default Props
SectionHeading.defaultProps = {
  mb: "3rem",
};

SectionTitle.defaultProps = {
  dark: true,
};

// PropTypes
SectionHeading.propTypes = {
  mb: PropTypes.string,
};

SectionTitle.propTypes = {
  dark: PropTypes.bool,
};

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading>
        <SectionTitle>About Me</SectionTitle>
      </SectionHeading>

      <AboutContent>
        <AboutImage src={myImage} alt="Portrait of Omkar Londhe" />

        <AboutDetailsContainer>
          <StyledParagraph>
            With a backpack and a laptop, that's where my story began. Leaving my hometown was a bittersweet moment as I bid farewell to familiar faces and places. Carrying only my essentials and the excitement for what lay ahead, my laptop became my closest companion, a gateway to endless possibilities and knowledge.
            I enrolled in an intensive coding bootcamp, where long hours and challenging projects became the norm. Each line of code written, debugged, and perfected brought a sense of accomplishment. I discovered the beauty of algorithms, the elegance of clean code, and the power of collaboration with fellow coders.
            The journey was not without its obstacles. There were times when bugs seemed insurmountable, when sleep was scarce, and frustration was high. But each challenge was a lesson, each setback an opportunity to learn and grow. I learned to persevere, to seek solutions from different angles, and to never give up.
            Months of hard work culminated in my first major project: a cutting-edge solution that simplified complex processes. Seeing my creation in action, knowing it could make a difference, was an exhilarating moment. It was the validation of my skills, the proof that I was on the right path.
            As I continued to develop my skills, I started to connect with like-minded individuals. Meetups, hackathons, and online forums became my new social circles. These connections not only provided support and inspiration but also opened doors to new opportunities and collaborations.
            Today, my story is still unfolding. The solutions I create continue to evolve, adapt, and make an impact. The thrill to code and innovate remains as strong as ever. My journey is a testament to the power of perseverance, passion, and the endless possibilities that a backbag and a laptop can unlock.
          </StyledParagraph>

          <Resume>
            <ResumeLink
              download="Omkar_Londhe_Resume"
              href="https://docs.google.com/document/d/1FXr_W357unjJWkWfqHjItycav2acddK8mFXTDcbBnmc/edit?usp=sharing"
              target="_blank"
              icon={downloadIcon}
            >
              View My Stories
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
