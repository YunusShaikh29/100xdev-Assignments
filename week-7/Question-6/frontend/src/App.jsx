// import React, { useState } from "react";

// import styles from "./components/Input.module.css";

// import "./App.css";

// function App() {
//   const [inputs, setInputs] = useState(["", "", "", ""]);
//   const inputRefs = inputs.map(() => React.createRef());

//   let keycount = 0;
//   const handleOnChange = (index) => (e) => {
//     const isBackspacePressed = e.target.value.length === 0;

//     if (isBackspacePressed) {
//       // Handle backspace key press
//       // Clear the current input
//       const newInputs = [...inputs];
//       newInputs[index] = "";
//       setInputs(newInputs);
//       keycount++; 

//       // Move focus to the previous input if the current input is not the first one
//       if (index > 0 && keycount > 1) {
//         inputRefs[index - 1].current.focus();
//       }
//     } else if (e.target.value.length > 1) {
//       return;
//     } else {
//       // Handle other key presses
//       const newInputs = [...inputs];
//       newInputs[index] = e.target.value;
//       setInputs(newInputs);

//       // Move focus to the next input if the current input is not the last one
//       if (e.target.value !== "" && index < inputs.length - 1) {
//         inputRefs[index + 1].current.focus();
//       }
//     }
//   };

//   return (
//     <>
//       <h1>Hellow world</h1>
//       <div className={styles.input_container}>
//         {inputs.map((input, index) => (
//           <input
//             key={index}
//             className={styles.input}
//             onChange={handleOnChange(index)}
//             ref={inputRefs[index]}
//             maxLength={1}
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;



// App.js
import React, { useState } from 'react';
import PhoneNumberForm from './components/PhoneNumberForm';

const App = () => {
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleVerification = async (phoneNumber, enteredOTP) => {
    try {
      // Simulate sending the OTP and phone number to the server for verification.
      // In a real application, you'd make an API call to your backend.
      // For now, we'll just simulate a successful verification if OTP is '1234'.
      const response = await fetch('http://localhost:3001/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, enteredOTP }),
      });

      if (response.ok) {
        setVerificationSuccess(true);
        setError('');
      } else {
        const data = await response.json();
        setError(data.error || 'Error verifying OTP');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error.message);
      setError('Error verifying OTP');
    }
  };

  return (
    <div>
      <h1>OTP Verification App</h1>
      {!verificationSuccess ? (
        <PhoneNumberForm onVerification={handleVerification} />
      ) : (
        <div>
          <h2>Welcome to the Application!</h2>
          {/* Add your application content here */}
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default App;
