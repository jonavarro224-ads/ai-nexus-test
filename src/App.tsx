import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import Methodology from './components/Methodology';
import WhyUs from './components/WhyUs';
import LeadMagnet from './components/LeadMagnet';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';
import Legal from './components/Legal';

function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <Methodology />
      <WhyUs />
      <LeadMagnet />
      <Contact />
      <Footer />
    </div>
  );
}

function LegalPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Legal />
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
        <Route path="/legal" element={<LegalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
