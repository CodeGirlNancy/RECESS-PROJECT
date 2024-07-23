// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="https://www.facebook.com/RhinosRugbyFootballClub" target="_blank" rel="noopener noreferrer">F</SocialLink>
        <SocialLink href="https://x.com/RhinosRugbyUG" target="_blank" rel="noopener noreferrer">X</SocialLink>
        <SocialLink href="https://www.instagram.com/rhinosrugby/" target="_blank" rel="noopener noreferrer">I</SocialLink>
        <SocialLink href="http://www.youtube.com/@rhinosrugbyuganda5482" target="_blank" rel="noopener noreferrer">Y</SocialLink>
        <SocialLink href="https://vimeo.com/rhinosrugby" target="_blank" rel="noopener noreferrer">V</SocialLink>
      </SocialLinks>
      
      <Copyright>
        ©2016 - 2024 Rhinos Rugby. All Rights Reserved.
      </Copyright>
      <LinkTree>
        <FooterLink href="https://linktr.ee/rhinosrugbyfootballclub" target="_blank" rel="noopener noreferrer">Our Linktree</FooterLink>
      </LinkTree>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 24px;
  text-decoration: none;

  &:hover {
    color: #aaa;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-bottom: 15px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 5px 10px;

  &:hover {
    color: #aaa;
  }
`;

const Copyright = styled.div`
  margin: 10px 0;
`;

const LinkTree = styled.div`
  margin-top: 10px;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #aaa;
    }
  }
`;

export default Footer;
