import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./styles/App.css"


function App() {
  

  return (
    <div>
      <Navbar/>
      
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
