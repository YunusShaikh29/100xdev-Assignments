// server.js
const express = require('express');
const bodyParser = require('body-parser');
const otpGenerator = require('otp-generator');
const twilio = require('twilio');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

const accountSid = 'AC00da4ee4a8f7a51beff762a10ad9ab20';
const authToken = '64c3031bc271f77893d44fb62a7b7517';
const twilioPhoneNumber = '+15017122661';

const client = twilio(accountSid, authToken);

const generateOTP = () => {
  // Generate a 4-digit OTP
  return otpGenerator.generate(4, { upperCase: false, specialChars: false });
};

const otpMap = new Map();

app.post('/send-otp', async (req, res) => {
  const { phoneNumber } = req.body;

  if (!phoneNumber) {
    return res.status(400).json({ error: 'Phone number is required' });
  }

  // Generate and store OTP
  const otp = generateOTP();
  otpMap.set(phoneNumber, otp);

  try {
    // Use Twilio to send SMS
    await client.messages.create({
      body: `Your OTP is: ${otp}`,
      from: twilioPhoneNumber,
      to: phoneNumber,
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Error sending OTP:', error.message);
    return res.status(500).json({ error: 'Failed to send OTP' });
  }
});

app.post('/verify-otp', (req, res) => {
  const { phoneNumber, enteredOTP } = req.body;

  if (!phoneNumber || !enteredOTP) {
    return res.status(400).json({ error: 'Phone number and OTP are required' });
  }

  const storedOTP = otpMap.get(phoneNumber);

  if (!storedOTP || enteredOTP !== storedOTP) {
    return res.status(401).json({ error: 'Invalid OTP' });
  }

  // Clear the OTP after successful verification
  otpMap.delete(phoneNumber);

  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
