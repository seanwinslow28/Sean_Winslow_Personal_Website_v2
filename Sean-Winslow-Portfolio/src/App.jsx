import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import CredStrip from './components/sections/CredStrip';
import FeaturedCase from './components/sections/FeaturedCase';
import Principles from './components/sections/Principles';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import ClickSpark from './components/ui/ClickSpark';
import useLenis from './hooks/useLenis';
import usePageMetadata from './hooks/usePageMetadata';

function App() {
  // Initialize Lenis smooth scrolling
  useLenis();
  usePageMetadata({
    title: 'Sean Winslow · AI Product Manager Portfolio',
    description:
      'Sean Winslow pairs AI copilots with change rituals to cut through roadmap noise. Explore featured work, product principles, testimonials, and ways to collaborate.',
    url: 'https://www.seanwinslow.com/',
    type: 'website',
  });

  return (
    <ClickSpark>
      <div className="min-h-screen">
        <Header />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <CredStrip />
          <FeaturedCase />
          <Principles />
          <Testimonials />
          <Contact />
        </main>
      </div>
    </ClickSpark>
  );
}

export default App;
