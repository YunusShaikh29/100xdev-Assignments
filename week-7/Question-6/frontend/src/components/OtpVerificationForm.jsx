// OtpVerificationForm.js
import React, { useState, useRef } from "react";
import styles from "./Input.module.css"

const OtpVerificationForm = ({ phoneNumber, onVerification }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleOtpChange = (index, value) => {
    if (!isNaN(value) || /^[a-zA-Z]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;

      setOtp(newOtp);

      if (value && index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      } else if (!value && index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  const handleVerify = () => {
    const enteredOTP = otp.join("");
    onVerification(phoneNumber, enteredOTP);
  };

  return (
    <div>
      <h2>Verify OTP</h2>
      <div className={styles.input_container}>
        {otp.map((digit, index) => (
          <input
            className={styles.input}
            key={index}
            ref={inputRefs[index]}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
          />
        ))}
      </div>
      <br />
      <button onClick={handleVerify}>Verify</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default OtpVerificationForm;
