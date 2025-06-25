import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import CV from './components/CV';

function App() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <Projects />
        <CV />
      </main>
    </>
  );
}

export default App;