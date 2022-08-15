import {React, useState } from "react"
import Header from "./components/header/Header"
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Footer from "./components/footer/Footer"
import './App.css';
import GetStarted from "./components/getStarted/GetStarted";
import EarlyAccess from "./components/EarlyAccess/EarlyAccess";
import Gameplay from "./components/gameplay/Gameplay";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <GetStarted />
      <Gameplay />
      <EarlyAccess />
      <Footer />
    </div>
  );
}

export default App;
