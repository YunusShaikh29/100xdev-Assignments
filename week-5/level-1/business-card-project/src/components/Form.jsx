/* eslint-disable no-unused-vars */
import React from 'react'

function Form() {
  return (
    <form>
    <div style={{padding: '.5em'}}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="8"
        ></textarea>
      </div>
      <div>
        <label htmlFor="interests">Interests: </label>
        <input type="text" name="interests" id="interests" placeholder="Comma separated"/>
      </div>
      <div>
        <label htmlFor="linkedIn">LinkedIn: </label>
        <input type="text" name="linkedIn" id="linkedIn" />
      </div>
      <div>
        <label htmlFor="twitter">Twitter: </label>
        <input type="text" name="twitter" id="twitter" />
      </div>
    </div>
  </form>
  )
}

export default Form