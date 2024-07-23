// src/components/Location.js
import React from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default icon issues
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const center = {
  lat: 0.329077,
  lng: 32.594338
};

const Location = () => {
  return (
    <LocationContainer>
      <Content>
        <h1>Our Location</h1>
        <p>
          The Rhinos Rugby Academy is located in Lugogo, Kampala, Uganda. Our state-of-the-art facility is situated in the heart of the city, providing easy access for all our athletes and visitors.
        </p>
        <p>
          The academy features world-class training grounds, fitness centers, and administrative offices, ensuring that our athletes have the best environment to train and excel.
        </p>
        <MapContainer center={center} zoom={15} style={{ height: '450px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center}>
            <Popup>
              Rhinos Rugby Academy
            </Popup>
          </Marker>
        </MapContainer>
      </Content>
      <Footer>
        <Copyright>
          ©2016 - 2024 Rhinos Rugby. All Rights Reserved.
        </Copyright>
        <LinkTree>
          <FooterLink href="https://linktr.ee/rhinosrugbyfootballclub" target="_blank" rel="noopener noreferrer">Our Linktree</FooterLink>
        </LinkTree>
      </Footer>
    </LocationContainer>
  );
};

const LocationContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: #f8f9fa;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

// Footer styles
const Footer = styled.footer`
  padding: 1rem;
  text-align: center;
  background-color: #333;
  color: #fff;
  margin-top: 2rem;
`;

const Copyright = styled.p`
  margin: 0;
`;

const LinkTree = styled.div`
  margin-top: 0.5rem;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default Location;
