import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Experience from "./components/Experience/Experience";
import Activities from "./components/Activities/Activities";
import Contact from "./components/Contact/Contact";
import SharePortfolio from "./components/SharePortfolio/SharePortfolio";
import Footer from "./components/Footer/Footer";
import useReveal from "./hooks/useReveal";

function App() {
  useReveal();
  return (
    <>
      <Navbar />

      <Hero />
      <div className="section-divider"></div>
      <About />
      <div className="section-divider"></div>
      <Skills />
      <div className="section-divider"></div>
      <Projects />
      <Certifications />
      <Experience />
      <Activities />
      <Contact />
      <SharePortfolio />
      <Footer />
    </>
  );
}

export default App;
