import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Powered by React</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default App;
