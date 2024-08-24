import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Promo from './components/Promo/Promo';
import Services from './components/Services/Services';
import Rekomended from './components/Rekomended/Rekomended';
import Benefit from './components/Benefit/Benefit';
import Leaderboards from './components/Leaderboards/Leaderboards';
import Comparison from './components/Comparison/Comparison';
import CTA from './components/CTA/CTA';
import Register from './components/Register/Register';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className='overflow-x-hidden bg-white text-dark'>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Promo />
              <Services />
              <Rekomended />
              <Benefit />
              <Leaderboards />
              <Comparison />
              <CTA />
              <Footer />
            </>
          } />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;