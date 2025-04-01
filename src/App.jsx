import React from 'react'
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import DownloadCV from "./components/ButtonCV";
import Footer from './components/footer';
import Experiencias from './components/skills';

const App = () => {
  return (
<div class="relative">
    <Header />
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900">
      <Hero />    
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <About />   
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-700 text-white">
      <Experiencias />   
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-700 to-gray-600 text-black">
      <Projects />    
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-600 to-gray-700 text-black">
      <Contact />    
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-700 to-gray-800 text-black">
      <DownloadCV />  
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 text-black">
      <Footer />  
    </div>
</div>
  )
}

export default App
