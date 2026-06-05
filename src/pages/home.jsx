import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AITypes from '../components/AITypes';
import AIBenefits from '../components/AIBenefits';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Home = () => {
  const [loading,setLoading] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 1000);
  return () => clearTimeout(timer); // cleanup if component unmounts
}, []); 
  if(loading) return <Loader />

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
