import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import ServicesGrid from './components/ServicesGrid';
import ROICalculator from './components/ROICalculator';
import Methodology from './components/Methodology';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ThankYou from './components/ThankYou';
import LegalPageComponent from '../app/legal/page'; // Import the new LegalPage from app/legal/page.tsx

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
        <Navbar />
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <div id="methodology">
          <TechStack />
        </div>
        <div id="audit-types">
          <ServicesGrid />
        </div>
        <div id="roi">
          <ROICalculator />
        </div>
        <Methodology />
        <div id="contact">
          <FooterCTA />
        </div>
        <Footer />
      </main>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

function LegalRouteComponent() { // Renamed to avoid conflict with imported LegalPageComponent
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <LegalPageComponent />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/legal" element={<LegalRouteComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
