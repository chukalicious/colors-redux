import React, { useState } from "react";
import { connect } from "react-redux";
import { getForm } from "../actions/personalActions";

const InfoForm = (props) => {
  console.log("props inside the InfoForm function: ", props);

  const [formState, setFormState] = useState({});
  console.log("formState: ", formState);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.getForm(formState);
  };

  return (
    <div>
      <h2>This is the InfoForm component</h2>
      <form onSubmit={submitForm}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={formState.value}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="age">
          Age:
          <input
            type="text"
            id="age"
            name="age"
            value={formState.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="location">
          Location:
          <input
            type="text"
            id="location"
            name="location"
            onChange={handleChange}
            value={formState.location}
          />
        </label>
        <br />
        <button>Send</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("mstp: => (InfoForm component): ", state);
  return {
    personalInfo: state.personalInfo,
  };
};

export default connect(mapStateToProps, { getForm })(InfoForm);
