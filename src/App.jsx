import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* Background Glowing Orbs */}
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      {/* Main UI Layout */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <CodingProfiles />
      <Contact />
      <Footer />
    </>
  );
}
