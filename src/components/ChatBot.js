import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import profilePic from '../assets/profile-pic.png';
import chatBackground from '../assets/chat-background.png';
import NavBar from './NavBar'; // Import NavBar component
import Footer from './Footer'; // Import Footer component

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  

  const getBotResponse = async (userInput) => {
    const url = 'MY API KEY'; // Use the gpt-3.5-turbo model

    const response = await axios.post(
      url,
      {
        prompt: userInput,
        max_tokens: 150,
        n: 1,
        stop: null,
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const botText = response.data.choices[0].text.trim();
    return { sender: 'bot', text: botText };
  };

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    const botResponse = await getBotResponse(input);
    setMessages([...messages, userMessage, botResponse]);
    setInput('');
  };

  return (
    <ChatBotContainer>
      <NavBar /> {/* Include the NavBar component */}
      <ChatBotHeader>
        <ProfilePic src={profilePic} alt="Chatbot" />
        <ChatBotName>Rhinos Assistant</ChatBotName>
      </ChatBotHeader>
      <ChatBotBody>
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender}>
            {msg.text}
          </Message>
        ))}
      </ChatBotBody>
      <ChatBotFooter>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <SendButton onClick={handleSend}>Send</SendButton>
      </ChatBotFooter>
      <Footer /> 
      <LinkTree>
          <FooterLink href="https://linktr.ee/rhinosrugbyfootballclub" target="_blank" rel="noopener noreferrer">Our Linktree</FooterLink>
        </LinkTree>
    </ChatBotContainer>
  );
};

const ChatBotContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 300px;
  height: 400px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

const ChatBotHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #0033A0;
  color: #fff;
`;

const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const ChatBotName = styled.div`
  font-weight: bold;
`;

const ChatBotBody = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  background-image: url(${chatBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Message = styled.div`
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${({ sender }) => (sender === 'user' ? '#e1ffc7' : '#f1f1f1')};
  align-self: ${({ sender }) => (sender === 'user' ? 'flex-end' : 'flex-start')};
  border-radius: 15px;
  max-width: 80%;
`;

const ChatBotFooter = styled.div`
  display: flex;
  padding: 1rem;
  border-top: 1px solid #ddd;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const SendButton = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background-color: #0033A0;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default ChatBot;
