import React from 'react';
import styled from 'styled-components';
import logo from '..src/assets/logo.png'; 
import NavBar from './NavBar'; 

const About = () => {
  return (
    <AboutContainer>
      <NavBar /> {/* Include NavBar component */}
      <Content>
        <Title>About Rhinos Rugby Football Club</Title>
        <Section>
          <Subtitle>Our Vision</Subtitle>
          <p>
            The Rhinos Rugby Academy was founded in 2014 in Southern California with the vision of providing high-performance rugby training and competition for U8-U20 Boys and Girls in the US. Over the last few years, the Academy has grown to provide athletes a clear and competitive rugby pathway from junior age to college and professional level, as well as USA Rugby National Teams.
          </p>
        </Section>
        <Section>
          <Subtitle>Our Code</Subtitle>
          <p>
            The Academy fosters a training, academics, and competitive environment where athletes learn and apply core life values such as respect, honor, discipline, integrity, teamwork, and accountability. Our programs focus on goal-oriented training with constant progress tracking and adjustment, centered around building confidence and self-assuredness.
          </p>
        </Section>
        <Section>
          <Subtitle>Our Facilities</Subtitle>
          <p>
            The Academy has two training facilities, one in Irvine (servicing Southern California) and one in Sacramento (servicing Northern California). Each location provides custom-designed world-class facilities and coaching staff that implement the Academy training programs year-round.
          </p>
        </Section>
        <Section>
          <Subtitle>High-Performance Program</Subtitle>
          <p>
            This is the “Elite” phase where athletes train and compete consistently at the highest level of rugby performance while always cultivating a “team-first“ environment.
          </p>
        </Section>
        <Section>
          <Subtitle>Academics success</Subtitle>
          <p>
            Our Academy prioritizes the academic success of our student-athletes, aiming to get them to college and successfully through college on athletic scholarships. We optimize the environment for scholastic success through individual attention, customized lesson plans, and a balanced focus on both sports and academics.
          </p>
        </Section>
      </Content>
      <Footer>
        <Copyright>
          ©2016 - 2024 Rhinos Rugby. All Rights Reserved.
        </Copyright>
        <LinkTree>
          <FooterLink href="https://linktr.ee/rhinosrugbyfootballclub" target="_blank" rel="noopener noreferrer">Our Linktree</FooterLink>
        </LinkTree>
      </Footer>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  background-image: url(${logo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 2rem;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`;

const Content = styled.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  border-radius: 10px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.h2`
  margin-bottom: 0.5rem;
`;

const Footer = styled.footer`
  padding: 1rem;
  text-align: center;
  background-color: #333;
  color: #fff;
  margin-top: 2rem;
  border-radius: 10px;
`;

const Copyright = styled.p`
  margin: 0;
`;

const LinkTree = styled.div`
  margin-top: 0.5rem;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default About;
