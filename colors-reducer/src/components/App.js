import React from "react";
import "../App.css";
import Buttons from "./Buttons";
import Color from "./Color";
import PersonalInfo from "./PersonalInfo";
import InfoForm from "./InfoForm";

function App() {
  return (
    <div className="App">
      <h1>Change Colors</h1>
      <Buttons />
      <Color />
      <InfoForm />
      <PersonalInfo />
    </div>
  );
}

export default App;
