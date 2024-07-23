// src/components/LogInRegister.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import backgroundImage from '..src/assets/login-register-background.jpg'; 

const LogInRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [failedAttempts, setFailedAttempts] = useState(0);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating authentication
    if (isLogin) {
      if (email === 'test@example.com' && password === 'password') {
        login({ name: 'User', email });
        navigate('/');
      } else {
        handleFailedAttempt();
      }
    } else {
      // Handle registration logic here
      if (name && email && password) {
        login({ name, email });
        navigate('/');
      } else {
        handleFailedAttempt();
      }
    }
  };

  const handleFailedAttempt = () => {
    setFailedAttempts(failedAttempts + 1);
    if (failedAttempts + 1 >= 3) {
      setError('Too many failed attempts. Please try again later.');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <Container>
      <FormContainer>
        <ToggleSwitch>
          <ToggleButton active={isLogin} onClick={() => setIsLogin(true)}>Log In</ToggleButton>
          <ToggleButton active={!isLogin} onClick={() => setIsLogin(false)}>Register</ToggleButton>
        </ToggleSwitch>
        <Form onSubmit={handleSubmit}>
          <h2>{isLogin ? 'Log In' : 'Register'}</h2>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {!isLogin && (
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={failedAttempts >= 3}
            />
          )}
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={failedAttempts >= 3}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={failedAttempts >= 3}
          />
          <Button type="submit" disabled={failedAttempts >= 3}>{isLogin ? 'Log In' : 'Register'}</Button>
        </Form>
      </FormContainer>
      <Footer />
      <Copyright>
        ©2016 - 2024 Rhinos Rugby. All Rights Reserved.
      </Copyright>
      <LinkTree>
        <FooterLink href="https://linktr.ee/rhinosrugbyfootballclub" target="_blank" rel="noopener noreferrer">Our Linktree</FooterLink>
      </LinkTree>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

const FormContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
`;

const ToggleSwitch = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const ToggleButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: ${({ active }) => (active ? '#0033A0' : '#ccc')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 0.5rem;

  &:hover {
    background-color: ${({ active }) => (active ? '#0055A5' : '#bbb')};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #0033A0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0055A5;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 1rem;
`;

export default LogInRegister;
