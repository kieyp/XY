import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import myImage from "../../assets/my_image2.jpeg";
import downloadIcon from "../../assets/icons/download-icon.svg";

// Define color scheme
const primaryColor = "#007bff"; // Vibrant primary blue
const accentColor = "#6c757d"; // Subtle grey for accents
const backgroundColor = "#f8f9fa"; // Light background color

// Styled Components with updated colors and modern styles
const StyledAbout = styled.section`
  padding: 2rem;
  background-color: ${backgroundColor};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 1200px;
  animation: fadeIn 1s ease-in-out;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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
  font-family: 'Arial Black', sans-serif;
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
  font-family: 'Open Sans', sans-serif;
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
  font-family: 'Open Sans', sans-serif;

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

// PropTypes
SectionHeading.propTypes = {
  mb: PropTypes.string,
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
          From the moment I could count, numbers fascinated me. As a child, while other kids played outside, I would spend hours with my collection of puzzles and brainteasers. I loved seeing how patterns emerged and solving problems that seemed impossible at first glance. This early obsession with numbers set the stage for my future as a data analyst.

My first real encounter with the power of data came during a summer job at a local retail store. I was tasked with organizing sales records, and as I sifted through mountains of data, I began to notice trends. Certain products sold better on weekends, while others peaked during the holiday season. Intrigued, I started creating simple charts and graphs to visualize these patterns. The store manager was impressed, and my analysis helped optimize inventory and boost sales. This was my first taste of how data could drive meaningful decisions, and I was hooked.

After that summer, I knew I wanted to dive deeper into the world of data. I took on freelance projects, helping small businesses make sense of their numbers. One memorable project involved a local café struggling to stay afloat. By analyzing their sales data, I discovered that their morning coffee sales were booming, but afternoons were slow. I suggested introducing afternoon specials and promoting events to draw in more customers. The café owner followed my advice, and business picked up significantly. Seeing the tangible impact of my work was incredibly fulfilling.

As I gained experience, my projects grew more complex. I found myself drawn to big data, eager to tackle the challenges and opportunities it presented. I joined a tech startup where I could immerse myself in vast datasets, using advanced analytics to uncover insights. One of my favorite projects involved analyzing user behavior data to improve a mobile app. By identifying patterns in how users interacted with the app, we were able to make changes that significantly increased user engagement and retention. Each success fueled my passion and deepened my commitment to the field.

My journey in data analytics wasn’t always smooth. There were times when I felt overwhelmed by the sheer volume of data and the complexity of the problems I faced. But every challenge was a learning opportunity. I developed new skills, learned new tools, and became adept at navigating the ever-evolving landscape of data technology. I also learned the importance of storytelling in data analytics—how to present complex data in a way that was accessible and compelling to stakeholders.

Today, I lead a team of talented data analysts at a major corporation. We work on projects that drive strategic decisions and fuel innovation. From predicting market trends to optimizing supply chains, our work is at the heart of the company’s success. Looking back, my journey has been a series of discoveries—each project, each dataset, a puzzle waiting to be solved.

My journey from a number-loving child to a professional data analyst has been incredibly rewarding. It’s a testament to the power of curiosity, the joy of problem-solving, and the endless possibilities that data holds. For anyone with a love of numbers and a desire to uncover hidden truths, data analytics offers a world of opportunity. Stay curious, embrace the challenges, and never stop seeking the story behind the numbers.


          </StyledParagraph>

          <Resume>
            <ResumeLink
              download="Omkar_Londhe_Resume"
              href="https://docs.google.com/document/d/1FXr_W357unjJWkWfqHjItycav2acddK8mFXTDcbBnmc/edit?usp=sharing"
              target="_blank"
              icon={downloadIcon}
              aria-label="Download Omkar Londhe's Resume"
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
