import useRevealOnScroll from '../../hooks/useRevealOnScroll';

const metrics = [
  {
    value: '4x',
    label: 'faster experiment cycles',
    context: 'by pairing designers and ML engineers on shared OKRs.'
  },
  {
    value: '$18M',
    label: 'pipeline influenced',
    context: 'from AI storytelling pilots that shipped to sales within 90 days.'
  },
  {
    value: '92%',
    label: 'lead adoption',
    context: 'when we reframed AI pilots around measurable product behaviors.'
  }
];

const CredStrip = () => {
  const stripRef = useRevealOnScroll({ threshold: 0.25 });

  return (
    <section
      className="cred-strip reveal-on-scroll"
      aria-labelledby="cred-strip-heading"
      ref={stripRef}
    >
      <h2 id="cred-strip-heading" className="sr-only">
        Proof points from recent work
      </h2>
      <div className="cred-strip__items">
        {metrics.map((metric) => (
          <div key={metric.label} className="cred-strip__item" role="group" aria-label={metric.label}>
            <p className="cred-strip__value">{metric.value}</p>
            <p className="cred-strip__label">{metric.label}</p>
            <p className="cred-strip__context">{metric.context}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CredStrip;
