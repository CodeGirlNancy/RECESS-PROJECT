import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Footer from './Footer'; 
const UploadGameResults = () => {
  const [teamA, setTeamA] = useState('');
  const [teamB, setTeamB] = useState('');
  const [scoreA, setScoreA] = useState('');
  const [scoreB, setScoreB] = useState('');
  const [winner, setWinner] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const gameResult = {
      teamA,
      teamB,
      scoreA,
      scoreB,
      winner: scoreA > scoreB ? teamA : scoreB > scoreA ? teamB : 'Draw'
    };

    try {
      await axios.post('/api/upload_game_results', gameResult);
      setWinner(gameResult.winner);
      alert('Game results uploaded successfully');
    } catch (error) {
      console.error('Error uploading game results', error);
      alert('Failed to upload game results');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          Team A:
          <Input type="text" value={teamA} onChange={(e) => setTeamA(e.target.value)} />
        </Label>
        <Label>
          Team B:
          <Input type="text" value={teamB} onChange={(e) => setTeamB(e.target.value)} />
        </Label>
        <Label>
          Score A:
          <Input type="number" value={scoreA} onChange={(e) => setScoreA(e.target.value)} />
        </Label>
        <Label>
          Score B:
          <Input type="number" value={scoreB} onChange={(e) => setScoreB(e.target.value)} />
        </Label>
        <Button type="submit">Upload Results</Button>
        {winner && <Result>Winner: {winner}</Result>}
      </Form>
      <FooterContainer>
        <Footer />
        <Footer>
      <Copyright>
        ©2016 - 2024 Rhinos Rugby. All Rights Reserved.
      </Copyright>
      <LinkTree>
        <FooterLink href="https://linktr.ee/rhinosrugbyfootballclub" target="_blank" rel="noopener noreferrer">Our Linktree</FooterLink>
      </LinkTree>
      </Footer>
      </FooterContainer>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #0077C8;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0055A5;
  }
`;

const Result = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #0077C8;
`;

const FooterContainer = styled.div`
  margin-top: 2rem;
`;

export default UploadGameResults;
