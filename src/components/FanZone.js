// src/components/FanZone.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FanZone = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [participatedEvents, setParticipatedEvents] = useState([]);
  const [donationAmount, setDonationAmount] = useState(0);

  const handleLogin = () => {
    // Implement login functionality here
    setLoggedIn(true); // Example: Set to true after successful login
    setUsername('Nanteza Dorcus'); // Example: Set username after successful login
  };

  const handleLogout = () => {
    // Implement logout functionality here
    setLoggedIn(false);
    setUsername('');
  };

  const handleEventParticipation = (eventId) => {
    // Logic to participate in an event
    if (!participatedEvents.includes(eventId)) {
      setParticipatedEvents([...participatedEvents, eventId]);
    }
    // Implement additional logic as needed (e.g., API calls)
  };

  const handleDonation = (amount) => {
    // Logic to process donation
    setDonationAmount(donationAmount + amount);
    // Implement additional logic as needed (e.g., API calls)
  };

  const handleCertificateDownload = () => {
    // Logic to download certificate (based on user data)
    // Example: Trigger download based on user's participation history
    // Implement additional logic as needed (e.g., API calls)
    alert('Downloading certificate...');
  };

  return (
    <FanZoneContainer>
      {loggedIn ? (
        <>
          <WelcomeMessage>Welcome, {username}!</WelcomeMessage>
          <Button onClick={handleLogout}>Logout</Button>
          <Section>
            <h2>Event Participation</h2>
            <p>Participate in community events and activities:</p>
            <Button onClick={() => handleEventParticipation(1)}>Participate in Event 1</Button>
            <Button onClick={() => handleEventParticipation(2)}>Participate in Event 2</Button>
          </Section>
          <Section>
            <h2>Donations</h2>
            <p>Make a donation to support our club:</p>
            <Button onClick={() => handleDonation(50)}>Donate $50</Button>
            <Button onClick={() => handleDonation(100)}>Donate $100</Button>
            <p>Total Donations: ${donationAmount}</p>
          </Section>
          <Section>
            <h2>Match Viewing (Video Player)</h2>
            <p>Watch live matches online or attend physical matches:</p>
            <Button>Watch Live Match</Button>
            <Button>Attend Physical Match</Button>
          </Section>
          <Section>
            <h2>Result Downloading (Personal Results)</h2>
            <p>Download your personal participation results and certificates:</p>
            <Button onClick={handleCertificateDownload}>Download Certificate</Button>
          </Section>
        </>
      ) : (
        <>
          <h1>Member Zone</h1>
          <p>Please login to access exclusive content and features.</p>
          <Button onClick={handleLogin}>Login</Button>
        </>
      )}
    </FanZoneContainer>
  );
};

const FanZoneContainer = styled.div`
  padding: 2rem;
`;

const WelcomeMessage = styled.h2`
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  background-color: #0077C8;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0055A5;
  }
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

export default FanZone;
