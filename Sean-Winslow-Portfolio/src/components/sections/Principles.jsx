import useRevealOnScroll from '../../hooks/useRevealOnScroll';

const principles = [
  {
    title: 'Prototype with the metric on the slide',
    description: 'Every experiment starts with the dashboard tile we expect to move. It keeps creative bets tied to revenue conversations.'
  },
  {
    title: 'Ship narrative + model together',
    description: 'AI trust is earned when stakeholders see the story, the safeguards, and the data surfaced in one artifact.'
  },
  {
    title: 'Design for human overrides first',
    description: 'When humans can steer the model, we uncover edge cases faster and avoid shipping automation debt.'
  },
  {
    title: 'Quant and qual on the same page',
    description: 'The best insights blend log data with moderated sessions—so every roadmap decision has both proof and texture.'
  },
  {
    title: 'Make risk legible early',
    description: 'Leaders green-light faster when they can see what could go wrong and how we’ll monitor it from sprint one.'
  }
];

const Principles = () => {
  const sectionRef = useRevealOnScroll();

  return (
    <section
      id="principles"
      tabIndex={-1}
      aria-labelledby="principles-heading"
      className="section-shell reveal-on-scroll"
      ref={sectionRef}
    >
      <div className="section-header" data-measure="long">
        <p className="section-kicker">How I Think</p>
        <h2 id="principles-heading">Principles I use to ship AI—safely, fast, and user-first</h2>
        <p className="section-intro">
          These are the guardrails I bring into every AI engagement—balancing ambition with accountability.
        </p>
      </div>

      <div className="principles-grid">
        {principles.map((principle) => (
          <article key={principle.title} className="principle-card">
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Principles;
