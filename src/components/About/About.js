import React from "react";
import styled from "styled-components";
import myImage from "../../assets/my_image2.jpeg";
import downloadIcon from "../../assets/icons/download-icon.svg";

const StyledAbout = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SectionHeading = styled.div`
  margin-bottom: ${props => props.mb || "2rem"};
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${props => (props.dark ? "#000" : "#fff")};
  margin-bottom: 1rem;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: flex-start;

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
  line-height: 1.6;
  color: #333;
  margin: 0;
  text-align: justify;
`;

const Resume = styled.div`
  margin-top: 2rem;
`;

const ResumeLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &::before {
    content: url(${props => props.icon});
    margin-right: 0.5rem;
  }
`;

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
            With a packed bag and a laptop, that's where my story began. Leaving my hometown was a bittersweet moment as I bid farewell to familiar faces and places. Carrying only my essentials and the excitement for what lay ahead, my laptop became my closest companion, a gateway to endless possibilities and knowledge.
            I enrolled in an intensive coding bootcamp, where long hours and challenging projects became the norm. Each line of code written, debugged, and perfected brought a sense of accomplishment. I discovered the beauty of algorithms, the elegance of clean code, and the power of collaboration with fellow coders.
            The journey was not without its obstacles. There were times when bugs seemed insurmountable, when sleep was scarce, and frustration was high. But each challenge was a lesson, each setback an opportunity to learn and grow. I learned to persevere, to seek solutions from different angles, and to never give up.
            Months of hard work culminated in my first major project: a cutting-edge solution that simplified complex processes. Seeing my creation in action, knowing it could make a difference, was an exhilarating moment. It was the validation of my skills, the proof that I was on the right path.
            As I continued to develop my skills, I started to connect with like-minded individuals. Meetups, hackathons, and online forums became my new social circles. These connections not only provided support and inspiration but also opened doors to new opportunities and collaborations.
            Today, my story is still unfolding. The solutions I create continue to evolve, adapt, and make an impact. The thrill to code and innovate remains as strong as ever. My journey is a testament to the power of perseverance, passion, and the endless possibilities that a packed bag and a laptop can unlock.
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
