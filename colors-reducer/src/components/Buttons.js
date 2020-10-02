import React from "react";
import { connect } from "react-redux";
import { colorRed, colorBlue, colorHotpink } from "../actions";

const Buttons = (props) => {
  return (
    <div>
      <button onClick={() => props.colorRed()}>Red</button>
      <button onClick={() => props.colorBlue()}>Blue</button>
      <button onClick={() => props.colorHotpink()}>Hotpink</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    color: state.color,
  };
};

export default connect(mapStateToProps, {
  colorRed: colorRed,
  colorBlue: colorBlue,
  colorHotpink: colorHotpink,
})(Buttons);
