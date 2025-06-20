import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import ClickSpark from './components/ui/ClickSpark';
import useLenis from './hooks/useLenis';

function App() {
  // Initialize Lenis smooth scrolling
  useLenis();

  return (
    <ClickSpark>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
      </div>
    </ClickSpark>
  );
}

export default App;
