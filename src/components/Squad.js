import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Footer from './Footer'; 

const Squad = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get('/api/players');
        setPlayers(response.data);
      } catch (error) {
        console.error('Error fetching players', error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <>
      <SquadContainer>
        <h1>Our Squad</h1>
        {players.map((player) => (
          <Player key={player.id}>
            <PlayerImage src={player.image} alt={player.name} />
            <PlayerInfo>
              <strong>Name:</strong> {player.name}<br />
              <strong>Position:</strong> {player.position}<br />
              <strong>Matches:</strong> {player.matches}<br />
              <strong>Tries:</strong> {player.tries}<br />
              <strong>Tackles:</strong> {player.tackles}<br />
              <strong>Statistics:</strong> {player.stats}<br />
            </PlayerInfo>
          </Player>
        ))}
      </SquadContainer>
      <Footer />
      <Footer>
      <Copyright>
        ©2016 - 2024 Rhinos Rugby. All Rights Reserved.
      </Copyright>
      <LinkTree>
        <FooterLink href="https://linktr.ee/rhinosrugbyfootballclub" target="_blank" rel="noopener noreferrer">Our Linktree</FooterLink>
      </LinkTree>
      </Footer>
    </>
  );
};

const SquadContainer = styled.div`
  padding: 2rem;
`;

const Player = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
`;

const PlayerImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const PlayerInfo = styled.div`
  margin-top: 0.5rem;
`;

export default Squad;
