import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Tourlist from "./components/Tourlist";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Tourlist />
    </React.Fragment>
  );
}

export default App;
