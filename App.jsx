import React from 'react';
import Header from './assets/Header';
import Hero from './assets/Hero'; 
import Testimonial from './assets/Testimonial';
import './App.css';




function App() {
  return (
    <div>
      <Header/>
      <Hero/>
        <h1 className='testimonial'>Testimonials</h1>
        <Testimonial/>
      Recent reviews
      Be heard
      Footer
    </div>
  )
}

export default App
