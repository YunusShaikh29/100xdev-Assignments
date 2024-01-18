// server.js
const express = require('express');
const bodyParser = require('body-parser');
const otpGenerator = require('otp-generator');
const Nexmo = require('nexmo');
// const {Vonage} = require("@vonage/server-sdk")

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

const apiKey = '99b63aaf';
const apiSecret = 'D1ktQfiFDpJAgUAh';
const nexmoPhoneNumber = '2907';

const nexmo = new Nexmo({ apiKey, apiSecret });
// const vonage = new Vonage({
//     apiKey,
//     apiSecret
// })

const generateOTP = () => {
  // Generate a 4-digit OTP
  return otpGenerator.generate(4, {digits: true, specialChars: false, lowerCaseAlphabets: false, upperCaseAlphabets: false});
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
    // Use Nexmo to send SMS
    await nexmo.message.sendSms(
      nexmoPhoneNumber,
      phoneNumber,
      `Your OTP is: ${otp}`,
      { type: 'unicode' },
      (err, responseData) => {
        if (err) {
          console.error('Error sending OTP:', err);
          return res.status(500).json({ error: 'Failed to send OTP' });
        }
        console.log('OTP sent successfully:', responseData);
        res.json({ success: true });
      }
    );
  } catch (error) {
    console.error('Error sending OTP:', error.message);
    return res.status(500).json({ error: 'Failed to send OTP' });
  }
});

app.post('/verify-otp', (req, res) => {
  // ... (same as previous code)
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
