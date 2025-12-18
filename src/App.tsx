import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import Methodology from './components/Methodology';
import WhyUs from './components/WhyUs';
import LeadMagnet from './components/LeadMagnet';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
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

export default App;
