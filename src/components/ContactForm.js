// src/components/ContactForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from '..src/assets/contact-background.jpg'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    inquiryType: 'general',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSuccess('Thank you for contacting us. We will respond to you shortly.');
          setError('');
          setFormData({
            name: '',
            email: '',
            phone: '',
            whatsapp: '',
            inquiryType: 'general',
            message: '',
          });
        } else {
          setError('An error occurred. Please try again.');
          setSuccess('');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('An error occurred. Please try again.');
        setSuccess('');
      });
  };

  return (
    <ContactFormContainer>
      <ContactFormStyled onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        <Input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          placeholder="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="WhatsApp Number"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
        />
        <Select
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
        >
          <option value="general">General Inquiry</option>
          <option value="registration">Program Registration</option>
          <option value="tournament">Tournament Information</option>
        </Select>
        <Textarea
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></Textarea>
        <Button type="submit">Submit</Button>
      </ContactFormStyled>
      <Footer>
        <Copyright>
          ©2016 - 2024 Rhinos Rugby. All Rights Reserved.
        </Copyright>
        <LinkTree>
          <FooterLink href="https://linktr.ee/rhinosrugbyfootballclub" target="_blank" rel="noopener noreferrer">Our Linktree</FooterLink>
        </LinkTree>
      </Footer>
    </ContactFormContainer>
  );
};

const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 2rem;
`;

const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
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

const SuccessMessage = styled.p`
  color: green;
  margin-bottom: 1rem;
`;

// Footer styles
const Footer = styled.footer`
  padding: 1rem;
  text-align: center;
  background-color: #333;
  color: #fff;
  margin-top: 2rem;
  width: 100%;
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

export default ContactForm;
