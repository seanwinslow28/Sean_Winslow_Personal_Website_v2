import { useEffect, useMemo, useState } from 'react';
import { handleNavClick } from '../../utils/smoothScroll';
import './case-study.css';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const CaseStudy = ({ data }) => {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  const {
    eyebrow = 'Case Study',
    title,
    summary,
    outcomeBand = {},
    context,
    bet,
    approach,
    whatChanged,
    demos,
    metricsSection,
    reflection,
  } = data;

  const sections = useMemo(
    () =>
      [
        { id: 'context', label: 'Context', heading: 'Context', type: 'context', content: context },
        { id: 'bet', label: 'Bet', heading: 'Bet', type: 'bet', content: bet },
        { id: 'approach', label: 'Approach', heading: 'Approach', type: 'approach', content: approach },
        {
          id: 'what-changed',
          label: 'What changed',
          heading: 'What changed',
          type: 'whatChanged',
          content: whatChanged,
        },
        { id: 'demos', label: 'Demos', heading: 'Demos', type: 'demos', content: demos },
        { id: 'metrics', label: 'Metrics', heading: 'Metrics', type: 'metrics', content: metricsSection },
        {
          id: 'reflection',
          label: 'Reflection',
          heading: 'Reflection & next bets',
          type: 'reflection',
          content: reflection,
        },
      ].filter((section) => Boolean(section.content)),
    [approach, bet, context, demos, metricsSection, reflection, whatChanged],
  );

  useEffect(() => {
    const updateProgress = () => {
      const { documentElement, body } = document;
      const scrollTop = documentElement.scrollTop || body.scrollTop;
      const scrollHeight = (documentElement.scrollHeight || body.scrollHeight) - documentElement.clientHeight;
      const ratio = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setProgress(clamp(ratio, 0, 1));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  useEffect(() => {
    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0.3,
      },
    );

    const observedElements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((element) => element !== null);

    observedElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  const renderContext = (contextData) => {
    if (!contextData) return null;

    return (
      <>
        {Array.isArray(contextData.items) && contextData.items.length > 0 && (
          <dl className="case-study__context-grid">
            {contextData.items.map((item) => (
              <div key={item.label} className="case-study__context-item">
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        )}
        {Array.isArray(contextData.narrative) &&
          contextData.narrative.map((paragraph, index) => (
            <p key={`context-paragraph-${index}`}>{paragraph}</p>
          ))}
      </>
    );
  };

  const renderBet = (betData) => {
    if (!betData) return null;

    return (
      <>
        {Array.isArray(betData.paragraphs) &&
          betData.paragraphs.map((paragraph, index) => <p key={`bet-paragraph-${index}`}>{paragraph}</p>)}
        {Array.isArray(betData.hypotheses) && betData.hypotheses.length > 0 && (
          <ul className="case-study__list">
            {betData.hypotheses.map((hypothesis, index) => (
              <li key={`hypothesis-${index}`}>{hypothesis}</li>
            ))}
          </ul>
        )}
      </>
    );
  };

  const renderApproach = (approachData) => {
    if (!approachData) return null;

    return (
      <>
        {Array.isArray(approachData.paragraphs) &&
          approachData.paragraphs.map((paragraph, index) => (
            <p key={`approach-paragraph-${index}`}>{paragraph}</p>
          ))}
        {Array.isArray(approachData.steps) && approachData.steps.length > 0 && (
          <div className="case-study__approach-steps">
            {approachData.steps.map((step, index) => (
              <div key={`approach-step-${index}`} className="case-study__approach-step">
                {step.title && <h3>{step.title}</h3>}
                {step.detail && <p>{step.detail}</p>}
              </div>
            ))}
          </div>
        )}
      </>
    );
  };

  const renderWhatChanged = (changeData) => {
    if (!changeData) return null;

    return (
      <div className="case-study__change-grid">
        <div className="case-study__change-column">
          <h3>Users see</h3>
          {Array.isArray(changeData.users) && changeData.users.length > 0 && (
            <ul className="case-study__list">
              {changeData.users.map((item, index) => (
                <li key={`change-users-${index}`}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="case-study__change-column">
          <h3>Under the hood</h3>
          {Array.isArray(changeData.underTheHood) && changeData.underTheHood.length > 0 && (
            <ul className="case-study__list">
              {changeData.underTheHood.map((item, index) => (
                <li key={`change-tech-${index}`}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

  const renderDemos = (demoItems) => {
    if (!Array.isArray(demoItems) || demoItems.length === 0) {
      return null;
    }

    return (
      <div className="case-study__demos">
        {demoItems.map((demo, index) => (
          <figure key={`demo-${index}`} className="case-study__demo-figure">
            <div className="case-study__demo-media" role="img" aria-label={demo.alt ?? demo.title}>
              {demo.placeholder ?? 'Demo placeholder'}
            </div>
            <figcaption className="case-study__demo-caption">
              <strong>{demo.title}</strong>
              {demo.caption ? ` — ${demo.caption}` : ''}
            </figcaption>
          </figure>
        ))}
      </div>
    );
  };

  const renderMetrics = (metricsData) => {
    if (!metricsData) return null;

    return (
      <>
        {Array.isArray(metricsData.paragraphs) &&
          metricsData.paragraphs.map((paragraph, index) => (
            <p key={`metrics-paragraph-${index}`}>{paragraph}</p>
          ))}
        {Array.isArray(metricsData.highlights) && metricsData.highlights.length > 0 && (
          <div className="case-study__metrics-table">
            {metricsData.highlights.map((item, index) => (
              <div key={`metric-highlight-${index}`} className="case-study__metrics-row">
                <span className="case-study__metrics-label">{item.label}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        )}
        {Array.isArray(metricsData.caveats) && metricsData.caveats.length > 0 && (
          <ul className="case-study__list">
            {metricsData.caveats.map((caveat, index) => (
              <li key={`metric-caveat-${index}`}>{caveat}</li>
            ))}
          </ul>
        )}
      </>
    );
  };

  const renderReflection = (reflectionData) => {
    if (!reflectionData) return null;

    return (
      <>
        {Array.isArray(reflectionData.paragraphs) &&
          reflectionData.paragraphs.map((paragraph, index) => (
            <p key={`reflection-paragraph-${index}`}>{paragraph}</p>
          ))}
        {Array.isArray(reflectionData.nextBets) && reflectionData.nextBets.length > 0 && (
          <>
            <h3>Next bets</h3>
            <ul className="case-study__next-bets">
              {reflectionData.nextBets.map((betItem, index) => (
                <li key={`next-bet-${index}`}>{betItem}</li>
              ))}
            </ul>
          </>
        )}
        {reflectionData.cta && reflectionData.cta.href && (
          <a className="button case-study__cta" href={reflectionData.cta.href}>
            {reflectionData.cta.label}
          </a>
        )}
      </>
    );
  };

  const renderSectionContent = (section) => {
    switch (section.type) {
      case 'context':
        return renderContext(section.content);
      case 'bet':
        return renderBet(section.content);
      case 'approach':
        return renderApproach(section.content);
      case 'whatChanged':
        return renderWhatChanged(section.content);
      case 'demos':
        return renderDemos(section.content);
      case 'metrics':
        return renderMetrics(section.content);
      case 'reflection':
        return renderReflection(section.content);
      default:
        return null;
    }
  };

  return (
    <section className="case-study" aria-labelledby="case-study-title">
      <div className="case-study__progress" aria-hidden="true">
        <span className="case-study__progress-bar" style={{ transform: `scaleX(${progress})` }} />
      </div>

      <header className="case-study__intro">
        <p className="case-study__eyebrow">{eyebrow}</p>
        <h1 id="case-study-title">{title}</h1>
        {summary && <p className="case-study__lead">{summary}</p>}
      </header>

      {(outcomeBand.problem || outcomeBand.bet || outcomeBand.approach || outcomeBand.outcome) && (
        <div className="case-study__outcome-band">
          <div className="case-study__outcome-grid">
            {outcomeBand.problem && (
              <div className="case-study__outcome-item">
                <span className="case-study__outcome-label">Problem</span>
                <span className="case-study__outcome-text">{outcomeBand.problem}</span>
              </div>
            )}
            {outcomeBand.bet && (
              <div className="case-study__outcome-item">
                <span className="case-study__outcome-label">Bet</span>
                <span className="case-study__outcome-text">{outcomeBand.bet}</span>
              </div>
            )}
            {outcomeBand.approach && (
              <div className="case-study__outcome-item">
                <span className="case-study__outcome-label">Approach</span>
                <span className="case-study__outcome-text">{outcomeBand.approach}</span>
              </div>
            )}
            {outcomeBand.outcome && (
              <div className="case-study__outcome-item">
                <span className="case-study__outcome-label">Outcome</span>
                <span className="case-study__outcome-text">{outcomeBand.outcome}</span>
              </div>
            )}
          </div>

          {Array.isArray(outcomeBand.metrics) && outcomeBand.metrics.length > 0 && (
            <div className="case-study__metrics" role="list">
              {outcomeBand.metrics.map((metric, index) => (
                <span key={`band-metric-${index}`} className="case-study__metric-chip" role="listitem">
                  {metric}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="case-study__layout">
        {sections.length > 0 && (
          <aside className="case-study__toc" aria-label="Case study sections">
            <nav>
              <ul className="case-study__toc-list">
                {sections.map((section) => (
                  <li key={section.id} className="case-study__toc-item">
                    <a
                      href={`#${section.id}`}
                      className={`case-study__toc-link${activeSection === section.id ? ' is-active' : ''}`}
                      onClick={(event) => handleNavClick(event, `#${section.id}`)}
                      aria-current={activeSection === section.id ? 'location' : undefined}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}

        <article className="case-study__content">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              tabIndex={-1}
              className="case-study__section"
              aria-labelledby={`${section.id}-heading`}
            >
              <h2 id={`${section.id}-heading`}>{section.heading}</h2>
              {renderSectionContent(section)}
            </section>
          ))}
        </article>
      </div>
    </section>
  );
};

export default CaseStudy;
