import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  ArrowToTop,
  ContactHeader,
  ContactLink,
  FooterBigLink,
  FooterBigLinkContainer,
  FooterContact,
  FooterContacts,
  FooterLine,
  FooterSmallTitle,
  FooterSmallTitleWrapper,
  FooterSocials,
  StyledFooter,
} from "../styles/Footer.styled";
import { SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const Footer = () => {
  const toTop = () => {
    scroll.scrollToTop({ delay: 0, duration: 0 });
  };

  const year = new Date().getFullYear();

  return (
    <StyledFooter id="contactme">
      <FooterSmallTitleWrapper>
        <FooterSmallTitle>Get in Touch</FooterSmallTitle>
      </FooterSmallTitleWrapper>

      <FooterBigLinkContainer>
        <FooterBigLink
          href="mailto:cheruiyotbony@gmail.com"
          data-hover="Let's talk!"
        >
          Need a developer?
        </FooterBigLink>
      </FooterBigLinkContainer>

      <FooterContacts>
        <FooterContact>
          <ContactHeader>Call Me</ContactHeader>
          <ContactLink href="tel:0720455615">0720455615</ContactLink>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Social</ContactHeader>{" "}
          <FooterSocials>
            <ContactLink
              href="https://github.com/kieyp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </ContactLink>
            <ContactLink
              href="https://www.linkedin.com/in/kipbon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin />
            </ContactLink>
            <ContactLink
              href="https://twitter.com/cheruiyotbonie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTwitter />
            </ContactLink>
          </FooterSocials>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Mail</ContactHeader>
          <ContactLink href="mailto:cheruiyotbony@gmail.com">
            cheruiyotbony@gmail.com
          </ContactLink>
        </FooterContact>
      </FooterContacts>

      <FooterLine />

      <ArrowToTop onClick={toTop}>
        <BsFillArrowUpSquareFill style={{ width: "40px", color: "white" }} />
        <span style={{ fontSize: "20px", marginLeft: "10px" }}>Go to Top</span>
      </ArrowToTop>

      <div style={{ textAlign: "center", color: "#888", marginTop: "1rem" }}>
        &copy; {year} Your Name. All Rights Reserved.
      </div>
    </StyledFooter>
  );
};

export default Footer;
