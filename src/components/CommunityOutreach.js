// src/components/CommunityOutreach.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import logo from '..src/assets/Rhinos logo.jpg'; // Import the logo image
import NavBar from './NavBar'; // Import the NavBar component
import Footer from './Footer'; // Import the Footer component

const CommunityOutreach = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get('/api/community_activities');
        setActivities(response.data);
      } catch (error) {
        console.error('Error fetching community activities', error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <OutreachContainer>
      <Logo src={logo} alt="Rhinos Rugby Academy Logo" />
      <h1>Community Outreach</h1>
      <h2>Rhinos Rugby In The Community</h2>
      <p>We are committed to giving back to our community through various sports and social activities.</p>
      <p>Our community outreach programs aim to bring rugby to everyone. We organize local tournaments, coaching sessions, and school partnerships to promote rugby as a sport that fosters teamwork and discipline.</p>
      {activities.map((activity) => (
        <Activity key={activity.id}>
          <h2>{activity.name}</h2>
          <p>{activity.description}</p>
          {activity.image && <img src={activity.image} alt={activity.name} />}
          {activity.video && (
            <VideoContainer>
              <iframe
                width="560"
                height="315"
                src={activity.video}
                title={activity.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </VideoContainer>
          )}
        </Activity>
      ))}
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </OutreachContainer>
  );
};

const OutreachContainer = styled.div`
  padding: 2rem;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 150px 150px;
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto 2rem;
  width: 150px;
  height: 150px;
`;

const Activity = styled.div`
  margin-bottom: 2rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
`;

const VideoContainer = styled.div`
  margin-top: 1rem;
`;

const FooterContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem 0;
  background-color: #f8f9fa;
`;

export default CommunityOutreach;
