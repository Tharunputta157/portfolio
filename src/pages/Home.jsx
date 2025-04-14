import React from 'react';
import '../styles/Home.css';
import Profile from '../assets/Opt-pic.jpg'

function Home() {
  return (
    <div id="home" className="home">
      <h1>Hi, I'm Sai Venkata Tharun Putta</h1>
      <p>I'm a Frontend Developer passionate about building creative web experiences.</p>
      <img src={Profile}></img>
    </div>
  );
}

export default Home;
