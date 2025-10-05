import useRevealOnScroll from '../../hooks/useRevealOnScroll';

const Testimonials = () => {
  const sectionRef = useRevealOnScroll();

  return (
    <section
      id="testimonials"
      tabIndex={-1}
      aria-labelledby="testimonials-heading"
      className="section-shell reveal-on-scroll"
      ref={sectionRef}
    >
      <div className="section-header" data-measure="long">
        <p className="section-kicker">Testimonials</p>
        <h2 id="testimonials-heading">What collaborators and leaders say</h2>
        <p className="section-intro">
          Fresh pulls are on the way—here’s a placeholder that captures the tone of feedback I receive.
        </p>
      </div>

      <figure className="testimonial-card" aria-label="Testimonial placeholder">
        <blockquote>
          “Sean is the rare PM who can translate fuzzy vision into a sequencing plan the whole room believes in—engineering, design, and the exec suite.”
        </blockquote>
        <figcaption>
          — Priya Raman, VP Product, StoryForge Labs (former manager)
        </figcaption>
      </figure>
    </section>
  );
};

export default Testimonials;
