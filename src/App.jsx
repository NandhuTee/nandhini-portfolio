import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechStack from './components/TechStack';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <TechStack/>
      <Services />
        <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}
