// src/components/Prediction.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Prediction = () => {
  const [teamA, setTeamA] = useState('');
  const [teamB, setTeamB] = useState('');
  const [prediction, setPrediction] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your prediction: ${prediction}`);
  };

  return (
    <PredictionContainer>
      <h1>Match Prediction</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Team A:
          <input
            type="text"
            value={teamA}
            onChange={(e) => setTeamA(e.target.value)}
          />
        </label>
        <label>
          Team B:
          <input
            type="text"
            value={teamB}
            onChange={(e) => setTeamB(e.target.value)}
          />
        </label>
        <label>
          Your prediction:
          <select value={prediction} onChange={(e) => setPrediction(e.target.value)}>
            <option value="">Select</option>
            <option value={teamA}>{teamA}</option>
            <option value={teamB}>{teamB}</option>
            <option value="Draw">Draw</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <Footer>
      <Copyright>
        ©2016 - 2024 Rhinos Rugby. All Rights Reserved.
      </Copyright>
      <LinkTree>
        <FooterLink href="https://linktr.ee/rhinosrugbyfootballclub" target="_blank" rel="noopener noreferrer">Our Linktree</FooterLink>
      </LinkTree>
      </Footer>
    </PredictionContainer>
  );
};

const PredictionContainer = styled.div`
  padding: 2rem;
`;

export default Prediction;
