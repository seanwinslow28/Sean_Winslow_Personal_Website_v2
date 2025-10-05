import Header from '../components/layout/Header';
import ClickSpark from '../components/ui/ClickSpark';
import CaseStudy from '../components/case/CaseStudy';
import useLenis from '../hooks/useLenis';
import usePageMetadata from '../hooks/usePageMetadata';

const sampleCaseData = {
  eyebrow: 'AI case study',
  title: 'Forecasting backlog risk for support leads',
  summary:
    'Outcome-first playbook for how we cut SLA breaches 32% by shipping an explainable forecast copilot ops could calibrate in under eight weeks.',
  outcomeBand: {
    problem: 'Support leaders planned staffing with stale dashboards, missing looming backlog spikes until it was too late to react.',
    bet: 'If we surfaced a forward-looking backlog risk score with transparent drivers, leaders could staff preemptively instead of firefighting.',
    approach:
      'Partnered with ops to codify “tribal” signals, prototyped the UX in Figma, and iterated on a lightweight gradient boosting model before hardening pipelines.',
    outcome:
      'Pilot regions dropped SLA breaches by 32% and reclaimed seven hours per week of planning time while trusting the model’s recommendations.',
    metrics: ['-32% SLA breaches', '87% forecast adoption', '+18pt staffing confidence'],
  },
  context: {
    items: [
      { label: 'User', value: 'Regional support leads balancing 24/7 coverage.' },
      { label: 'Role', value: 'Product lead + data translator for GTM & ops.' },
      { label: 'Team', value: '1 PM, 1 data scientist, 2 engineers, 1 product designer.' },
      { label: 'Timeline', value: '12 weeks from discovery to staffed pilot.' },
    ],
    narrative: [
      'Support leadership tracked backlog using lagging dashboards and ad-hoc spreadsheets. By the time a spike surfaced, hiring managers were already underwater.',
      'We reframed the ask from “ship another dashboard” to “ship a decision assistant,” anchoring on measurable outcomes and clear guardrails.',
    ],
  },
  bet: {
    paragraphs: [
      'We narrowed scope to a single north-star metric—weekly SLA breaches per region—and mapped the behaviours that moved it. That let ops see how a forecast would ladder to their KPIs.',
    ],
    hypotheses: [
      'If leads could see a 48-hour risk forecast with transparent drivers, they could staff ahead of spikes.',
      'If we codified manual signals into prompts, ops would trust why the model suggested specific moves.',
      'If we nudged decisions via Slack digests instead of another dashboard, adoption would beat the legacy tools.',
    ],
  },
  approach: {
    paragraphs: [
      'We ran dual-track discovery and delivery. Ops shadowing gave us the language for the UI, while data profiling revealed we could reach 85% recall with lightweight models before investing in MLOps.',
    ],
    steps: [
      {
        title: 'Frame data contracts with ops',
        detail:
          'Catalogued the 14 manual signals leads watched, defined freshness expectations, and logged quality gaps so engineering could harden the pipeline.',
      },
      {
        title: 'Ship forecast UI in Figma → React',
        detail:
          'Prototype used a simple traffic-light metaphor; the final build added scenario toggles so leaders could simulate schedule moves before committing.',
      },
      {
        title: 'Close the loop with calibration rituals',
        detail:
          'Paired each weekly standup with a five-minute calibration, capturing override reasons to improve both the model features and change management.',
      },
    ],
  },
  whatChanged: {
    users: [
      'Leads now open their day with a single backlog outlook that highlights risk bands and recommended staffing moves.',
      'Slack digests summarize upcoming spikes and confidence ranges so decisions travel to where ops already works.',
      'Scenario toggles let leads model “what if” changes without exporting to spreadsheets.',
    ],
    underTheHood: [
      'Gradient-boosted tree model trained on three years of case metadata with feature store guardrails.',
      'Conformal prediction surfaces best/worst-case ranges and feeds the UI’s confidence bands.',
      'Governance checklist logs retrains and human overrides in Airtable so audits see who changed what.',
    ],
  },
  demos: [
    {
      title: 'Forecast workspace',
      caption: 'Leads scan the next 48 hours and accept suggested staffing moves inline.',
      placeholder: 'Animated GIF placeholder',
      alt: 'Forecast workspace mock showing backlog risk curve and staffing prompts.',
    },
    {
      title: 'Calibration loop',
      caption: 'Ops teams review overrides and tune model weights during weekly standups.',
      placeholder: 'Calibration walkthrough placeholder',
      alt: 'Slack calibration workflow preview with forecast adjustments.',
    },
  ],
  metricsSection: {
    paragraphs: [
      'Baseline compared four pilot regions against control groups over a six-week window. We logged every override to understand confidence drift.',
    ],
    highlights: [
      { label: 'SLA breaches', value: '-32% vs. control' },
      { label: 'Planning time', value: '-7 hrs / week reclaimed' },
      { label: 'Forecast adoption', value: '87% weekly active leads' },
    ],
    caveats: [
      'Pilot regions already had disciplined ticket hygiene; new teams need onboarding to reach similar lift.',
      'Forecast confidence drops when historical data gaps exceed 20%, triggering manual review by design.',
    ],
  },
  reflection: {
    paragraphs: [
      'Coaching ops leaders to tell the story of “why the model said so” was as critical as the math. Change management moved the adoption curve more than feature velocity.',
    ],
    nextBets: [
      'Extend the forecast to field service teams that share backlog dependencies.',
      'Automate finance notifications when risk scores imply overtime spend above threshold.',
      'Invest in executive rollups so VPs see macro trends without diving into the ops workspace.',
    ],
    cta: {
      label: 'Discuss this build',
      href: 'mailto:hello@seanwinslow.com?subject=Case%20Study%20Template',
    },
  },
};

const CaseSamplePage = () => {
  useLenis();
  usePageMetadata({
    title: 'Forecasting backlog risk – Case Study | Sean Winslow',
    description:
      'Sample case study detailing how Sean Winslow shipped an explainable backlog forecast copilot that cut SLA breaches 32% with change rituals and metrics.',
    url: 'https://www.seanwinslow.com/case-sample',
    type: 'article',
  });

  return (
    <ClickSpark>
      <div className="min-h-screen">
        <Header />
        <main id="main-content" tabIndex={-1}>
          <CaseStudy data={sampleCaseData} />
        </main>
      </div>
    </ClickSpark>
  );
};

export default CaseSamplePage;
