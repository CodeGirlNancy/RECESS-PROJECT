import React, { useState } from 'react';
import styled from 'styled-components';

const LiveStream = () => {
  const [followed, setFollowed] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleFollow = () => {
    window.open('https://x.com/RhinosRugbyUG', '_blank');
    setFollowed(true);
  };

  const handleSubscribe = () => {
    window.open('http://www.youtube.com/@rhinosrugbyuganda5482', '_blank');
    setSubscribed(true);
  };

  return (
    <LiveStreamContainer>
      {!followed && (
        <Button onClick={handleFollow}>Follow us on X (formerly Twitter)</Button>
      )}
      {followed && !subscribed && (
        <Button onClick={handleSubscribe}>Subscribe to our YouTube Channel</Button>
      )}
      {followed && subscribed && (
        <>
          <VideoFrame
            src="https://x.com/RhinosRugbyUG"
            allowFullScreen
          ></VideoFrame>
          <Commentary>
            <h2>Live Streaming</h2>
            <p>
              Real-time updates and commentary on the match can be found{' '}
              <CommentaryLink href="http://www.youtube.com/@rhinosrugbyuganda5482" target="_blank">
                here
              </CommentaryLink>
              .
            </p>
          </Commentary>
          <Footer />
      <Copyright>
        ©2016 - 2024 Rhinos Rugby. All Rights Reserved.
      </Copyright>
      <LinkTree>
        <FooterLink href="https://linktr.ee/rhinosrugbyfootballclub" target="_blank" rel="noopener noreferrer">Our Linktree</FooterLink>
      </LinkTree>
      <Footer />
        </>
      )}
    </LiveStreamContainer>
  );
};

const LiveStreamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #0077C8;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0055A5;
  }
`;

const VideoFrame = styled.iframe`
  width: 100%;
  max-width: 800px;
  height: 450px;
  border: none;
`;

const Commentary = styled.div`
  background-color: #f1f1f1;
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
  max-width: 800px;
  margin-top: 2rem;
`;

const CommentaryLink = styled.a`
  color: #0077C8;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #0055A5;
  }
`;

export default LiveStream;
