// Import necessary libraries and components
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import myImage from "../../assets/my_image2.jpeg";
import downloadIcon from "../../assets/icons/download-icon.svg";

// Define color scheme
const primaryColor = "#007bff"; // Vibrant primary blue
const accentColor = "#6c757d"; // Subtle grey for accents
const backgroundColor = "#008080"; // Teal background color

// Styled Components
const StyledAbout = styled.section`
  display: flex;
  flex-direction: column; /* Ensure content stacks vertically */
  align-items: center; /* Center align content horizontally */
  padding: 2rem;
  background-color: ${backgroundColor};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 1200px;
  animation: fadeIn 1s ease-in-out;
  color: #fff; /* Set text color to white */

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

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #fff; /* Set color to white */
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
  text-align: justify; /* Align text within the container */
`;

const AboutImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%; /* Make the image rounded */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem; /* Add margin for spacing */
`;

const StyledParagraph = styled.p`
  line-height: 1.8;
  color: #fff; /* White text for contrast */
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

// PropTypes
SectionTitle.propTypes = {
  mb: PropTypes.string,
};

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionTitle>About Me</SectionTitle>

      <AboutContent>
        <AboutImage src={myImage} alt="Portrait of Omkar Londhe" />

        <AboutDetailsContainer>
          <StyledParagraph>
          Let me take you on a journey into the world of data analytics through the lens of logistics. Armed with a degree in logistics and a passion for unraveling patterns, I ventured into the realm of data analytics with eagerness.

From the start, Excel became my trusted companion. Functions like SUMIFS allowed me to delve deep into datasets, extracting crucial information that shaped logistics strategies. PivotTables became my canvas, where I visualized supply chain flows and operational efficiencies, turning numbers into actionable insights.

But it wasn't just about crunching numbers. My logistics background gave me a unique perspective on data. It wasn't just about what the data said; it was about how it could optimize routes, streamline warehouse operations, and forecast inventory demands.

As my skills grew, so did my toolkit. Advanced Excel functions like VLOOKUP and INDEX-MATCH became second nature, enabling me to solve complex logistics puzzles with precision. Each project became an opportunity to refine my craft, from optimizing delivery schedules to improving procurement processes.

Beyond the spreadsheets, I learned the art of storytelling with data. I used visualizations to paint a clear picture for stakeholders, demonstrating how data-driven decisions could drive operational excellence and cost savings.

Reflecting on my journey, I realized that data analytics in logistics isn't just about numbers—it's about transforming data into strategies that make a real difference. Today, as I continue to explore new challenges and opportunities, I'm driven by the belief that data holds the key to unlocking efficiency and innovation in logistics operations.

So, here's to the journey—a blend of logistics expertise and analytical curiosity, shaping the future of supply chains one insight at a time.
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
