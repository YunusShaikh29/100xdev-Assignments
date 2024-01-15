/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    interests: "",
    linkedin: "",
    twitter: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) =>  ({ ...prevState, [name]: value }));
  };

  const handleOnsubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      description: "",
      interests: "",
      linkedin: "",
      twitter: "",
    });
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleOnsubmit}>
      <div style={{ padding: ".5em" }}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            value={formData.name}
            type="text"
            name="name"
            id="name"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            value={formData.description}
            name="description"
            id="description"
            cols="30"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="interests">Interests: </label>
          <input
            value={formData.interests}
            type="text"
            name="interests"
            id="interests"
            onChange={handleOnChange}
            placeholder="Comma separated"
          />
        </div>
        <div>
          <label htmlFor="linkedIn">LinkedIn: </label>
          <input
            value={formData.linkedin}
            type="text"
            name="linkedin"
            id="linkedIn"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="twitter">Twitter: </label>
          <input
            value={formData.twitter}
            type="text"
            name="twitter"
            id="twitter"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
