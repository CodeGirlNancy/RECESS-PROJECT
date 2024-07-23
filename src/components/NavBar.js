import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import ChatBot from './ChatBot';
import { useAuth } from '../hooks/useAuth';
import logo from '..src/assets/Rhinos logo.png'; 
import backgroundImage from '..src/assets/background.jpg'; 

const NavBar = () => {
  const [isChatBotOpen, setChatBotOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Container>
      <Nav style={{ backgroundImage: `url(${backgroundImage})` }}>
        <LogoContainer>
          <img src={logo} alt="Rhinos Rugby Academy" />
        </LogoContainer>
        <LogoText>DARE TO PLAY RUGBY</LogoText>
        <NavMenu>
          <NavItem><StyledLink to="/Home">Home</StyledLink></NavItem>
          <NavItem><StyledLink to="/About">About Us</StyledLink></NavItem>
          <NavItem><StyledLink to="/Matches">Matches</StyledLink></NavItem>
          <NavItem><StyledLink to="/Squad">Squad</StyledLink></NavItem>
          <NavItem><StyledLink to="/News">Latest News Updates</StyledLink></NavItem>
          <NavItem><StyledLink to="/Membership">Club Membership</StyledLink></NavItem>
          <NavItem><StyledLink to="/Fanzone">Fan Zone</StyledLink></NavItem>
          <NavItem><StyledLink to="/Livestream">Live Stream</StyledLink></NavItem>
          <NavItem><StyledLink to="/Prediction">Prediction</StyledLink></NavItem>
          <NavItem><StyledLink to="/UploadGameResults">Upload Game Results</StyledLink></NavItem>
          <NavItem><StyledLink to="/Location">Location</StyledLink></NavItem>
          <NavItem><StyledLink to="/ChatBot">Rhinos Bot</StyledLink></NavItem>
          <NavItem><StyledLink to="/ContactForm">Contact Us</StyledLink></NavItem>
          <NavItem><StyledLink to="/CommunityOutreach">Rugby in the community</StyledLink></NavItem>
          <NavItem><StyledLink to="/Sponsors">Sponsors$Partners</StyledLink></NavItem>
        </NavMenu>
        <RightMenu>
          {isAuthenticated ? (
            <>
              <NavItem>{user.name}</NavItem>
              <NavItem onClick={handleLogout}>Logout</NavItem>
            </>
          ) : (
            <>
              <NavItem><StyledLink to="/LogInRegister">Log In/Register</StyledLink></NavItem>
              <NavItem><StyledLink to="/signup">Sign Up</StyledLink></NavItem>
            </>
          )}
          <ChatBotButton onClick={() => setChatBotOpen(!isChatBotOpen)}>Chat</ChatBotButton>
        </RightMenu>
        {isChatBotOpen && <ChatBot />}
      </Nav>
      <BodyContainer>
      <BodyContainer>
      <Section>
        <Title>Upcoming Events</Title>
        <Events>
          <EventItem>
            <h3>Match 1: Rhinos vs Leopards</h3>
            <Description>Join us for an exciting match between the Rhinos and the Leopards on July 30th at 3:00 PM.</Description>
          </EventItem>
          <EventItem>
            <h3>Match 2: Rhinos vs Tigers</h3>
            <Description>Don't miss the thrilling game between the Rhinos and the Tigers on August 5th at 4:00 PM.</Description>
          </EventItem>
        </Events>
      </Section>
      <Section>
        <Title>Support Us</Title>
        <Description>Your donations help us to support the team and improve our facilities.</Description>
        <DonateButton>Donate Now</DonateButton>
      </Section>
      <Section>
        <Title>Live Matches</Title>
        <LiveMatch>
          <h3>Watch Live: Rhinos vs Elephants</h3>
          <Description>Tune in on July 25th at 6:00 PM for live coverage of the match.</Description>
        </LiveMatch>
      </Section>
      <Section>
        <Title>Download Certificates</Title>
        <CertificateSection>
          <Description>Get your participation certificates here. Click the button below to download your certificate.</Description>
          <DonateButton>Download Certificate</DonateButton>
        </CertificateSection>
      </Section>
    </BodyContainer>
      </BodyContainer>
      <Footer>
      <Copyright>
        ©2016 - 2024 Rhinos Rugby. All Rights Reserved.
      </Copyright>
      <LinkTree>
        <FooterLink href="https://linktr.ee/rhinosrugbyfootballclub" target="_blank" rel="noopener noreferrer">Our Linktree</FooterLink>
      </LinkTree>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #0033A0;
  color: #fff;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-x: auto;

  ::-webkit-scrollbar {
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    overflow-x: hidden;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  img {
    height: 50px;
    width: auto;
  }
`;

const LogoText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 20px;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavItem = styled.div`
  margin: 0 1rem;
  position: relative;

  &:hover > div {
    display: block;
  }
`;


const RightMenu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const ChatBotButton = styled.button`
  background-color: #0077C8;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #0055A5;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const BodyContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
`;

const Events = styled.div`
  background: url('../assets/matches-background.png') no-repeat center center;
  background-size: cover;
  padding: 20px;
  border-radius: 8px;
`;

const EventItem = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const DonateButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const LiveMatch = styled.div`
  background-color: #007bff;
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const CertificateSection = styled.div`
  background-color: #ffc107;
  padding: 20px;
  border-radius: 8px;
`;


const Footer = styled.footer`
  padding: 1rem;
  background-color: #0033A0;
  color: #fff;
  text-align: center;
  overflow-x: auto;

  ::-webkit-scrollbar {
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default NavBar;
