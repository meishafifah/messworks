import React from 'react'
import Navbar from '../components/Navbar';
import Hero from './Hero';
import AboutMe from './AboutMe';
import MyJourney from './MyJourney';
import MyWorks from './MyWorks';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <MyJourney />
      <MyWorks />
      <Footer />
    </>
  )
}
