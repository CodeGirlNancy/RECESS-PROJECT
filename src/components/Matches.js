// src/components/Matches.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import backgroundImage from '..src/assets/matches-background.jpg'; 

const Matches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('/api/matches');
        setMatches(response.data);
      } catch (error) {
        console.error('Error fetching matches', error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <MatchesContainer>
      <h1>Upcoming Matches</h1>
      {matches.map((match) => (
        <Match key={match.id}>
          <MatchImage src={match.image} alt={`${match.teamA} vs ${match.teamB}`} />
          <MatchDetails>
            <h2>{match.teamA} vs {match.teamB}</h2>
            <p>Date: {match.date}</p>
            <p>Location: {match.location}</p>
            <p>{match.description}</p>
          </MatchDetails>
          <Footer />
      <Copyright>
        ©2016 - 2024 Rhinos Rugby. All Rights Reserved.
      </Copyright>
      <LinkTree>
        <FooterLink href="https://linktr.ee/rhinosrugbyfootballclub" target="_blank" rel="noopener noreferrer">Our Linktree</FooterLink>
      </LinkTree>
      <Footer />
        </Match>
      ))}
    </MatchesContainer>
  );
};

const MatchesContainer = styled.div`
  padding: 2rem;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  color: #fff;
`;

const Match = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
`;

const MatchImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
`;

const MatchDetails = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

export default Matches;
