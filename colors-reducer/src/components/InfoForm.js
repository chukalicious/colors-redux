import React, { useState } from "react";

const InfoForm = () => {
  const [formState, setFormState] = useState({});
  console.log(formState);

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>This is the InfoForm component</h2>
      <form>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" name="name" onChange={handleChange} />
        </label>
        <br />
        <label htmlFor="age">
          Age:
          <input type="text" id="age" name="age" onChange={handleChange} />
        </label>
        <br />
        <label htmlFor="location">
          Location:
          <input
            type="text"
            id="location"
            name="location"
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Send</button>
      </form>
    </div>
  );
};

export default InfoForm;
