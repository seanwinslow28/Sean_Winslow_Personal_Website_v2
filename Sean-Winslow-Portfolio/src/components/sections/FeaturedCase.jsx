import useRevealOnScroll from '../../hooks/useRevealOnScroll';

const FeaturedCase = () => {
  const sectionRef = useRevealOnScroll();

  return (
    <section
      id="work"
      tabIndex={-1}
      aria-labelledby="work-heading"
      className="section-shell reveal-on-scroll"
      ref={sectionRef}
    >
      <div className="section-header" data-measure="long">
        <p className="section-kicker">Featured Case</p>
        <h2 id="work-heading">From hypothesis to shipped value: my latest AI win</h2>
        <p className="section-intro">
          A guided tour through how we framed the bet, kept the model honest, and shipped an AI assistant that moved activation by double digits.
        </p>
      </div>

      <a
        href="/work/narrative-intelligence"
        className="featured-case"
        aria-label="Featured AI case study (coming soon)"
      >
        <div className="featured-case__body">
          <h3 className="featured-case__title">Narrative Intelligence Copilot</h3>
          <p className="featured-case__summary" data-measure="short">
            Coming in PR 4: how a cross-functional squad validated demand, iterated on human-in-the-loop guardrails, and launched to sales in 10 weeks.
          </p>
        </div>
        <dl className="featured-case__metrics">
          <div>
            <dt>Pilot win</dt>
            <dd>+38% qualified lead handoffs</dd>
          </div>
          <div>
            <dt>Time to value</dt>
            <dd>10 weeks from concept to launch</dd>
          </div>
          <div>
            <dt>Confidence</dt>
            <dd>Backed by 42 moderated sessions</dd>
          </div>
        </dl>
      </a>
    </section>
  );
};

export default FeaturedCase;
