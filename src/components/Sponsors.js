// src/components/Sponsors.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await axios.get('/api/sponsors');
        setSponsors(response.data);
      } catch (error) {
        console.error('Error fetching sponsors', error);
      }
    };

    fetchSponsors();
  }, []);

  return (
    <SponsorsContainer>
      <h1>Our Sponsors</h1>
      {sponsors.map((sponsor) => (
        <Sponsor key={sponsor.id}>
          <h2>{sponsor.name}</h2>
          <p>{sponsor.description}</p>
          <Footer>
      <Copyright>
        ©2016 - 2024 Rhinos Rugby. All Rights Reserved.
      </Copyright>
      <LinkTree>
        <FooterLink href="https://linktr.ee/rhinosrugbyfootballclub" target="_blank" rel="noopener noreferrer">Our Linktree</FooterLink>
      </LinkTree>
      </Footer>
        </Sponsor>
      ))}
    </SponsorsContainer>
  );
};

const SponsorsContainer = styled.div`
  padding: 2rem;
`;

const Sponsor = styled.div`
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
`;

export default Sponsors;
