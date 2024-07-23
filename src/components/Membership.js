import React, { useState } from 'react';
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Footer from './Footer'; // Ensure the path to the Footer component is correct

const stripePromise = loadStripe('your-publishable-key-here');

const Membership = () => {
  return (
    <Container>
      <Elements stripe={stripePromise}>
      <Title>Club Membership</Title>
      <Description>
        Become a member of Rhinos Rugby and enjoy exclusive benefits, including access to matches, events, and club merchandise.
      </Description>
        <MembershipForm />
      </Elements>
      <FooterContainer>
        <Footer />
      <Copyright>
        ©2016 - 2024 Rhinos Rugby. All Rights Reserved.
      </Copyright>
      <LinkTree>
        <FooterLink href="https://linktr.ee/rhinosrugbyfootballclub" target="_blank" rel="noopener noreferrer">Our Linktree</FooterLink>
      </LinkTree>
      <Footer />
      </FooterContainer>
    </Container>
  );
};

const MembershipForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    membershipType: '',
    paymentMethod: 'card', // default payment method
    mobileMoneyNumber: '',
    mobileMoneyProvider: '' // Airtel or MTN
  });

  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (form.paymentMethod === 'card') {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: form.name,
          email: form.email
        }
      });

      if (error) {
        console.error(error);
      } else {
        console.log('PaymentMethod', paymentMethod);
        // Send paymentMethod.id to your server for processing
      }
    } else if (form.paymentMethod === 'mobile_money') {
      const response = await fetch('http://localhost:5000/mobile-money-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          membershipType: form.membershipType,
          mobileMoneyNumber: form.mobileMoneyNumber,
          mobileMoneyProvider: form.mobileMoneyProvider
        }),
      });

      const data = await response.json();
      if (data.success) {
        console.log('Mobile money payment successful:', data);
      } else {
        console.error('Mobile money payment failed:', data);
      }
    }
  };

  return (
    <FormContainer>
      <h2>Membership Registration</h2>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input type="text" name="name" value={form.name} onChange={handleChange} required />
        </Label>
        <Label>
          Email:
          <Input type="email" name="email" value={form.email} onChange={handleChange} required />
        </Label>
        <Label>
          Membership Type:
          <Select name="membershipType" value={form.membershipType} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
          </Select>
        </Label>
        <Label>
          Payment Method:
          <Select name="paymentMethod" value={form.paymentMethod} onChange={handleChange} required>
            <option value="card">Card</option>
            <option value="mobile_money">Mobile Money</option>
          </Select>
        </Label>
        {form.paymentMethod === 'mobile_money' && (
          <>
            <Label>
              Mobile Money Provider:
              <Select name="mobileMoneyProvider" value={form.mobileMoneyProvider} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="airtel">Airtel</option>
                <option value="mtn">MTN</option>
              </Select>
            </Label>
            <Label>
              Mobile Money Number:
              <Input
                type="text"
                name="mobileMoneyNumber"
                value={form.mobileMoneyNumber}
                onChange={handleChange}
                required
              />
            </Label>
          </>
        )}
        {form.paymentMethod === 'card' && (
          <Label>
            Payment Details:
            <CardElement />
          </Label>
        )}
        <Button type="submit">Register</Button>
      </Form>
    </FormContainer>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const FormContainer = styled.div`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 1rem;
  background-color: #0033A0;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0055A5;
  }
`;

const FooterContainer = styled.div`
  margin-top: 2rem;
`;

export default Membership;
