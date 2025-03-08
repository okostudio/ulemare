import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ProductSection />
      <Footer />
    </div>
  );
};

export default App;
