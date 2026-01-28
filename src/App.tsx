import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import ServicesGrid from './components/ServicesGrid';
import ROICalculator from './components/ROICalculator';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';
import Legal from './components/Legal';

function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <TechStack />
      <ServicesGrid />
      <ROICalculator />
      <FooterCTA />
      <Footer />
    </main>
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
