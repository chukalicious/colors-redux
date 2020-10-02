import React, { useState } from "react";
import { connect } from "react-redux";
import { getForm } from "../actions/personalActions";

const InfoForm = (props) => {
  console.log("props inside the InfoForm function: ", props);

  const [formState, setFormState] = useState({});
  console.log(formState);

  const handleChange = (e) => {
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
      </form>
      <button>Send</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("mstp: => (InfoForm component): ", state);
  return { personalInfo: {} };
};

export default connect(mapStateToProps, { getForm })(InfoForm);
