import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Technologies from './components/Technologies';

function App() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <Projects />
        <Technologies />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;