import { handleNavClick } from '../../utils/smoothScroll';
import useMagneticHover from '../../hooks/useMagneticHover';

const Hero = () => {
  const magnetRef = useMagneticHover();

  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-section"
      id="top"
    >
      <div className="hero-content" data-measure="long">
        <p className="section-kicker">AI product leadership where creativity meets measurable impact</p>
        <h1 id="hero-heading">
          AI PM blending visual storytelling and ML to turn ambiguous ideas into shipped products with measurable business impact.
        </h1>
        <p className="hero-subhead">
          I translate fuzzy AI bets into roadmaps teams trust—connecting research, ML, and go-to-market so leaders see traction, not decks.
        </p>
        <div className="hero-ctas">
          <a
            href="#work"
            ref={magnetRef}
            className="button hero-primary-cta magnetic-target"
            onClick={(event) => handleNavClick(event, '#work')}
          >
            View recent work
          </a>
          <a
            href="#principles"
            className="hero-secondary-link"
            onClick={(event) => handleNavClick(event, '#principles')}
          >
            Read how I think
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
