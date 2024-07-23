const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const app = express();
const port = 5000;

// Twilio credentials
const accountSid = 'your_twilio_account_sid';
const authToken = 'your_twilio_auth_token';
const client = twilio(accountSid, authToken);

app.use(bodyParser.json());

// Contact form endpoint
app.post('/contact', (req, res) => {
  const { name, email, phone, whatsapp, inquiryType, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  const mailOptions = {
    from: email,
    to: 'rhinosrugbyug@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nWhatsApp: ${whatsapp}\nInquiry Type: ${inquiryType}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ success: false, error: error.toString() });
    }
    res.status(200).send({ success: true, message: 'Message sent: ' + info.response });
  });

  // Optionally, send a WhatsApp message using Twilio here
});

// Mobile money payment endpoint
app.post('/mobile-money-payment', (req, res) => {
  const { name, email, membershipType, mobileMoneyNumber, mobileMoneyProvider } = req.body;

  // Mock mobile money payment processing
  const paymentStatus = mockMobileMoneyPayment(mobileMoneyNumber, mobileMoneyProvider, membershipType);

  if (paymentStatus.success) {
    // Send confirmation email
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
      },
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Membership Registration Confirmation',
      text: `Dear ${name},\n\nThank you for registering for the ${membershipType} membership. Your payment has been successfully processed.\n\nBest regards,\nRhinos Rugby Academy`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send({ success: false, error: error.toString() });
      }
    });

    // Send SMS confirmation
    client.messages
      .create({
        body: `Dear ${name}, your payment for the ${membershipType} membership has been successfully processed. Thank you for registering with Rhinos Rugby Academy.`,
        from: 'your_twilio_phone_number',
        to: mobileMoneyNumber,
      })
      .then(message => console.log(message.sid))
      .catch(error => console.error(error));

    res.status(200).send({ success: true, message: 'Membership registered and payment confirmed.' });
  } else {
    res.status(500).send({ success: false, message: 'Payment failed.' });
  }
});

// Mock function for mobile money payment processing
function mockMobileMoneyPayment(mobileMoneyNumber, mobileMoneyProvider, membershipType) {
  // Simulate a successful payment
  return { success: true };
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
