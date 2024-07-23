// src/components/Home.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import NavBar from './NavBar';

import Footer from './Footer';
import logo from '..src/assets/Rhinos logo.jpg'; 
import backgroundImage from '..src/assets/matches-background.png'; 
import { events, matches } from '../data'; // Importing the data

const Home = () => {
  return (
    <HomeWrapper>
      <NavBar />
      <HomeContainer>
        <Logo src={logo} alt="Rhinos Rugby Logo" />
        <Content>
          <h1>Welcome to Our Rugby Club</h1>
          <p>Your home for the latest news, matches, and updates on our club.</p>
        </Content>
        <EventsSection>
          <h2>Upcoming Events</h2>
          {events.map(event => (
            <EventCard key={event.id}>
              <img src={event.image} alt={event.name} />
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <iframe src={event.video} title={event.name} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </EventCard>
          ))}
        </EventsSection>
        <MatchesSection>
          <h2>Upcoming Matches</h2>
          {matches.map(match => (
            <MatchCard key={match.id}>
              <img src={match.image} alt={`${match.teamA} vs ${match.teamB}`} />
              <h3>{match.teamA} vs {match.teamB}</h3>
              <p>{match.date} - {match.location}</p>
              <p>{match.description}</p>
            </MatchCard>
          ))}
        </MatchesSection>
      </HomeContainer>
      <Footer />
      <Copyright>
        ©2016 - 2024 Rhinos Rugby. All Rights Reserved.
      </Copyright>
      <LinkTree>
        <FooterLink href="https://linktr.ee/rhinosrugbyfootballclub" target="_blank" rel="noopener noreferrer">Our Linktree</FooterLink>
      </LinkTree>
      <Footer />
    </HomeWrapper>
  );
};

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem;
  flex: 1;
  background: url(${backgroundImage}) no-repeat center center/cover;
  animation: ${rotate} 60s linear infinite; /* Rotate the background */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.5); /* Add a dark overlay for better readability */
  padding: 1rem;
  border-radius: 10px;
`;

const EventsSection = styled.div`
  margin-top: 2rem;
`;

const EventCard = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  iframe {
    width: 100%;
    height: 200px;
    margin-top: 1rem;
  }
`;

const MatchesSection = styled.div`
  margin-top: 2rem;
`;

const MatchCard = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

export default Home;
