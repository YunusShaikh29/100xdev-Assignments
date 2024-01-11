import React, { useEffect, useRef } from 'react';

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
    const inputRef = useRef(null);

    useEffect(() => {
        // Automatically focus the input field when the component mounts
        inputRef.current.focus();
    }, []);

    const handleButtonClick = () => {
        // Focus the input field when the button is clicked
        inputRef.current.focus();
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter text here"
                ref={inputRef} // Assign the ref to the input field
            />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
}
