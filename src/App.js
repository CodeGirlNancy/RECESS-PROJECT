import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import NavBar from './components/NavBar';
import ChatBot from './components/ChatBot';
import Home from './components/Home';
import About from './components/About';
import News$Videos from './components/News$Videos';
import Matches from './components/Matches';
import Squad from './components/Squad';
import Sponsors from './components/Sponsors';
import FanZone from './components/FanZone';
import LiveStream from './components/LiveStream';
import Prediction from './components/Prediction';
import UploadGameResults from './components/UploadGameResults';
import Location from './components/Location';
import SignUp from './components/SignUp';
import Membership from './components/Membership';
import LogInRegister from './components/LogInRegister';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CommunityOutreach from './components/CommunityOutreach'; // Import your Community components
import { AuthProvider, useAuth } from './components/AuthContext'; // Import AuthProvider and useAuth
import 'leaflet/dist/leaflet.css';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <NavBar />
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News$Videos />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/chatbot" component={ChatBot} />
          <Route path="/squad" element={<Squad />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <PrivateRoute path="/member-zone" element={<FanZone />} />
          <PrivateRoute path="/live-stream" element={<LiveStream />} />
          <PrivateRoute path="/prediction" element={<Prediction />} />
          <PrivateRoute path="/upload-game-results" element={<UploadGameResults />} />
          <PrivateRoute path="/location" element={<Location />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/club/membership" element={<Membership />} />
          <Route path="/login" element={<LogInRegister />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/community/outreach" element={<CommunityOutreach />} />
        </Routes>
      </AppContainer>
      <Footer />
    </AuthProvider>
  );
};

// PrivateRoute component to protect routes that require authentication
const PrivateRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default App;
