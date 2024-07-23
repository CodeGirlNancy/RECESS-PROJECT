import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const News$Videos = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
   
    const mockArticles = [
      { id: 1, title: "Men's Loggerheads Preview", content: "Details about the upcoming Men's Loggerheads event." },
      { id: 2, title: "Rhinos Tens Continue Winning Streak Bermuda", content: "Rhinos Tens team continues their winning streak in Bermuda." },
      { id: 3, title: "Rhinos Rugby Tens Team Starts Day 1 at the World Tens Series", content: "Coverage of the Rhinos Rugby Tens team's performance at the World Tens Series." },
      { id: 4, title: "Rhinos Opens Sports School with Immediate Impact", content: "Details about the launch of Rhinos Sports School in Irvine, Calif." },
      { id: 5, title: "Mase Funa: From Rhinos to Oregon Ducks", content: "Profile of Mase Funa's journey from Rhinos to Oregon Ducks." },
      { id: 6, title: "Eagle Trio Joins Academy Staff", content: "Rhinos Rugby Academy adds Eagle players to coaching staff." },
      { id: 7, title: "Rhinos Unveils Denver Training Center", content: "Details about the opening of Rhinos Training Center in Denver." },
    ];

    setArticles(mockArticles);
  }, []);

  // List of YouTube videos with titles, descriptions, and URLs
  const videos = [
    { title: 'Betway Kobs Vs Rimula Rhinos', description: 'The try of the day by Herman Ssekamwa! Pure class from Semwami Daudi on the assist', url: 'https://www.youtube.com/watch?v=7AXJFw3mWP0' },
    { title: 'Rimula Rhinos Vs Toyota Buffaloes', description: 'Semwami Daudi scores a wonderful solo try', url: 'https://www.youtube.com/watch?v=BwzVVRsQcKs' },
    { title: 'Rimula Rhinos Vs Toyota Buffaloes', description: 'Semwami Daudi with the wheels', url: 'https://www.youtube.com/watch?v=z5lH4hMcVA4' },
    { title: 'Rimula Rhinos Vs Toyota Buffaloes', description: 'Some nice interplay and Francis Odonga is played through!', url: 'https://www.youtube.com/watch?v=xyIiYzpRD4o' },
    { title: 'Rimula Rhinos Vs Toyota Bufflaoes. Richard Aciko with a well worked try!', description: 'Byron Atubikire shows his class against the Buffaloes', url: 'https://www.youtube.com/watch?v=_pW3WW3wB4c' },
    { title: 'Rimula Rhinos Vs Toyota Buffaloes', description: 'Byron Atubikire shows his class against the Buffaloes', url: 'https://www.youtube.com/watch?v=kfiSGKaxxAI' },
    { title: 'Rugby: Rimula Rhinos in action', description: 'via YouTube Capture', url: 'https://www.youtube.com/watch?v=On12A92xhpk' },
  ];

  const getYouTubeId = (url) => {
    const splitURL = url.split('v=')[1];
    const ampersandPosition = splitURL.indexOf('&');
    if (ampersandPosition !== -1) {
      return splitURL.substring(0, ampersandPosition);
    }
    return splitURL;
  };

  return (
    <Container>
      <Header>
        <Logo>
          <img src="../assets/logo.png" alt="Rhinos Rugby Logo" />
        </Logo>
        <Nav>
          <NavItem href="#">ABOUT</NavItem>
          <NavItem href="#">PROGRAMS</NavItem>
          <NavItem href="#">LOCATIONS</NavItem>
          <NavItem href="#">EVENTS</NavItem>
          <NavItem href="#">RUGBY SCHOOLS</NavItem>
          <NavItem href="#">PRICING</NavItem>
          <NavItem href="#">SHOP</NavItem>
          <NavItem href="#">NEWS</NavItem>
          <NavItem href="#">LOGIN / SIGN UP</NavItem>
          <NavItem href="#">CONTACT US</NavItem>
        </Nav>
      </Header>
      <Content>
        <Section>
          <h1>Latest News</h1>
          {articles.map((article) => (
            <Article key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
              <ReadMoreLink href="#">CONTINUE READING</ReadMoreLink>
            </Article>
          ))}
        </Section>
        <Section>
          <h1>Latest Videos</h1>
          {videos.map((video, index) => (
            <Video key={index}>
              <h2>{video.title}</h2>
              <p>{video.description}</p>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${getYouTubeId(video.url)}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Embedded Video ${index}`}
              ></iframe>
            </Video>
          ))}
        </Section>
      </Content>
      <Footer>
        <FooterContent>
          <p>©2016 - 2024 Rhinos Rugby. All Rights Reserved.</p>
          <LinkTree>
        <FooterLink href="https://linktr.ee/rhinosrugbyfootballclub" target="_blank" rel="noopener noreferrer">Our Linktree</FooterLink>
      </LinkTree>
        </FooterContent>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  background-image: url('../assets/matches-background.png');
  background-size: cover;
  background-position: center;
`;

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  flex: 1;
  img {
    max-width: 100px;
  }
`;

const Nav = styled.nav`
  flex: 3;
  display: flex;
  justify-content: flex-end;
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.div`
  padding: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Article = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1.5rem;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
`;

const Video = styled.div`
  margin-bottom: 2rem;
`;

const ReadMoreLink = styled.a`
  display: block;
  color: #007bff;
  text-decoration: none;
  font-size: 0.9rem;
  margin-top: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem 2rem;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export default News$Videos;
