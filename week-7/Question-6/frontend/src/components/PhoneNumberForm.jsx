// PhoneNumberForm.js
import React, { useState } from "react";
import OtpVerificationForm from "./OtpVerificationForm";

const PhoneNumberForm = ({ onVerification }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [flag, setFlag] = useState(true);

  const handleSendOtp = async () => {
    try {
      // Send the phone number to the server for OTP generation
      const response = await fetch("http://localhost:3001/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      });

      if (response.ok) {
        setOtpSent(true);
        setFlag(false);
      } else {
        const data = await response.json();
        console.error("Error sending OTP:", data.error || "Failed to send OTP");
        // Handle error (display message, etc.)
      }
    } catch (error) {
      console.error("Error sending OTP:", error.message);
      // Handle error (display message, etc.)
    }

    // Simulate sending phone number to the server and receiving OTP
    // In a real application, you'd make an API call to your backend.
    // For now, we'll just generate a random 4-digit OTP.
    // const otp = Math.floor(1000 + Math.random() * 9000);

    // setOtpSent(true);
    // onVerification(phoneNumber, otp);
  };

  return (
    <div>
      {flag && (
        <>
          <h2>Enter Mobile Number</h2>
          <label>
            Mobile Number:
            <input
              type="tel"
              maxLength="13"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="with +91"
            />
          </label>
          <br />
          <button onClick={handleSendOtp}>Send OTP</button>
        </>
      )}
      {otpSent && (
        <OtpVerificationForm
          phoneNumber={phoneNumber}
          onVerification={onVerification}
        />
      )}
    </div>
  );
};

export default PhoneNumberForm;
