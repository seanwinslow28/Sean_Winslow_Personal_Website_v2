import useMagneticHover from '../hooks/useMagneticHover';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import usePageMetadata from '../hooks/usePageMetadata';

const revealDemos = [
  {
    title: 'Outcome snapshots',
    body: 'Stage key wins with a gentle fade so stakeholders notice deltas without being overwhelmed.'
  },
  {
    title: 'Team rituals',
    body: 'Introduce process shifts one beat at a time—copy lands as cards enter the viewport.'
  },
  {
    title: 'Launch proof',
    body: 'Highlight the impact metrics when people scroll to the bottom of a story or case study.'
  }
];

const RevealDemoCard = ({ title, body }) => {
  const cardRef = useRevealOnScroll({ threshold: 0.2 });

  return (
    <article ref={cardRef} className="lab-card reveal-on-scroll">
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
};

const LabPage = () => {
  const magnetRef = useMagneticHover({ strength: 7 });
  usePageMetadata({
    title: 'Micro-interactions Lab | Sean Winslow',
    description:
      'Explore Sean Winslow’s motion system: magnetic CTAs, focus flourishes, link underline animations, and reveal-on-scroll patterns tuned for PRM.',
    url: 'https://www.seanwinslow.com/lab',
    type: 'website',
  });

  return (
    <div className="lab-page">
      <a className="skip-link" href="#main-content">
        Skip to micro-interactions
      </a>

      <header className="lab-header" role="banner">
        <a className="hero-secondary-link lab-back-link" href="/">
          ← Back to homepage
        </a>
        <h1>Micro-interactions lab</h1>
        <p data-measure="long">
          A sandbox for the interaction patterns from the motion system. Each demo stays within the 150–240&nbsp;ms window,
          relies on transform and opacity, and respects reduced-motion preferences.
        </p>
      </header>

      <main id="main-content" className="lab-main" tabIndex={-1}>
        <section className="lab-section" aria-labelledby="lab-magnet-heading">
          <h2 id="lab-magnet-heading">Magnetic primary CTA</h2>
          <p data-measure="long">
            Desktop pointers nudge this button by a few pixels to acknowledge intent. Touch users and reduced-motion visitors see
            a static CTA with the same affordance.
          </p>
          <div className="lab-action-row">
            <button
              type="button"
              ref={magnetRef}
              className="button hero-primary-cta magnetic-target"
            >
              Book a working session
            </button>
          </div>
        </section>

        <section className="lab-section" aria-labelledby="lab-focus-heading">
          <h2 id="lab-focus-heading">Focus-visible flourish</h2>
          <p data-measure="long">
            Keyboard users get a bold halo plus a subtle settle-scale so the target feels anchored without startling motion.
          </p>
          <div className="lab-action-row">
            <button type="button" className="button">
              Primary action
            </button>
            <a className="hero-secondary-link" href="mailto:sean@seanwinslow.com">
              Email Sean
            </a>
          </div>
        </section>

        <section className="lab-section" aria-labelledby="lab-link-heading">
          <h2 id="lab-link-heading">Link underline animation</h2>
          <p data-measure="long">
            Underlines stay visible, then thicken and offset slightly on hover or focus to reinforce clickability.
          </p>
          <div className="lab-link-list" role="list">
            <a role="listitem" href="/case-sample#outcome">
              Explore the outcome band recipe
            </a>
            <a role="listitem" href="/case-sample#demos">
              Review demo gallery guidance
            </a>
            <a role="listitem" href="/case-sample#reflection">
              Read reflection prompts
            </a>
          </div>
        </section>

        <section className="lab-section" aria-labelledby="lab-reveal-heading">
          <h2 id="lab-reveal-heading">Reveal-on-scroll staging</h2>
          <p data-measure="long">
            Intersection Observer adds a once-per-session fade and 14&nbsp;px translate. Reduced-motion users simply see content in place.
          </p>
          <div className="lab-reveal-grid">
            {revealDemos.map((item) => (
              <RevealDemoCard key={item.title} {...item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LabPage;
