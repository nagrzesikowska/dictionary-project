import logo from "./she.png";
import "./App.css";
import Dictionary from "./Dictionary";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by Natalia Grzesikowska and {""}
          <a
            href="https://github.com/nagrzesikowska/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
