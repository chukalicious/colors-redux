import React from "react";
import { connect } from "react-redux";
import { colorRed, colorBlue, colorHotpink } from "../actions";

const Color = (props) => {
  console.log("props form the Color component: ", props);
  return (
    <div>
      <div className="color-div">
        <h2 style={{ color: props.color }}>Choose a color: {props.color}</h2>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("mstp: => (from the Buttons component): ", state);
  return {
    color: state.color,
  };
};

export default connect(mapStateToProps, {
  colorRed: colorRed,
  colorBlue: colorBlue,
  colorHotpink: colorHotpink,
})(Color);
