import React from "react";

import Navbar from "./components/navbar/Navbar";
import MusicForm from "./components/music-form/MusicForm";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <MusicForm />
    </React.Fragment>
  );
};

export default App;
