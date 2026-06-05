import React from 'react'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AITypes from '../components/AITypes';
import AIBenefits from '../components/AIBenefits';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AITypes />
        <AIBenefits />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default Home
