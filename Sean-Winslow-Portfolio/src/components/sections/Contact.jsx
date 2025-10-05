import useMagneticHover from '../../hooks/useMagneticHover';
import useRevealOnScroll from '../../hooks/useRevealOnScroll';

const Contact = () => {
  const magnetRef = useMagneticHover({ strength: 5 });
  const sectionRef = useRevealOnScroll();

  return (
    <section
      id="contact"
      tabIndex={-1}
      aria-labelledby="contact-heading"
      className="section-shell contact-section reveal-on-scroll"
      ref={sectionRef}
    >
      <div className="section-header" data-measure="long">
        <p className="section-kicker">Let’s Connect</p>
        <h2 id="contact-heading">Have an AI bet in mind? Let’s talk</h2>
        <p className="section-intro">
          Drop a line and I’ll share how we can turn that idea into a scoped experiment, a delivery plan, or a board-ready story.
        </p>
      </div>

      <div className="contact-actions">
        <a
          className="button hero-primary-cta magnetic-target"
          ref={magnetRef}
          href="mailto:sean@seanwinslow.com"
        >
          Email Sean
        </a>
        <a className="hero-secondary-link" href="https://www.linkedin.com/in/sean-winslow-204390a5" target="_blank" rel="noreferrer">
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;

