import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import WhyAttend from './components/WhyAttend';
import MarqueeSection from './components/MarqueeSection';
import Speakers from './components/Speakers';
import PastPartner from './components/PastPartners';
import PastGlimpses from './components/PastGlimpses';
import Venue from './components/Venue';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <About />
      <WhyAttend />
      <MarqueeSection />
      <Speakers />
      <PastPartner />
      <PastGlimpses />
      <Venue />
      <Testimonials />
      <ContactInfo />
      <Footer />
      <RegisterModal autoShow={false} />
    </>
  )
}

export default App
