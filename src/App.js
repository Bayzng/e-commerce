import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Slider from './Components/Slider/Slider';
import Virtual from './Components/Virtual/Virtual';
import Product from './Components/Product/Product';
import Testimonies from './Components/Testimonies/Testimonies';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Slider/>
      <Virtual/>
      <Product/>
      <Testimonies/>
    </div>
  );
}

export default App;
