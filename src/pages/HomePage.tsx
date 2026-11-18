import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ── Data ──────────────────────────────────────────────────────── */
const MARKETS = [
  { label: 'Forex',       desc: 'Currency pairs and price movement',    icon: '↗' },
  { label: 'Synthetics',  desc: 'Volatility-based markets',              icon: '~' },
  { label: 'Metals',      desc: 'Including gold and silver',             icon: '◈' },
  { label: 'Indices',     desc: 'Major global indices',                  icon: '▪' },
  { label: 'Commodities', desc: 'Selected commodity markets',            icon: '◉' },
  { label: 'Crypto',      desc: 'Digital asset markets',                 icon: '₿' },
];

const MODULES = [
  {
    num: '00',
    title: 'Forex Foundations & Platform Basics',
    items: ['Introduction to Forex Trading', 'Platform Setup & Chart Basics', 'Trading Mindset Introduction'],
  },
  {
    num: '01',
    title: 'Market Structure & SNR',
    items: ['Valid BOS (EEC/SMC)', 'Range Concept', 'SNR Basics', 'Market Pricing'],
  },
  {
    num: '02',
    title: 'Storyline & Zone Selection',
    items: ['Zone Selection (SMC/EEC)', 'Types of EG', 'SNR Significant'],
  },
  {
    num: '03',
    title: 'Liquidity Concepts',
    items: ['Liquidity Concept', 'Money Transfer'],
  },
  {
    num: '04',
    title: 'Trendlines & Entry Models',
    items: ['SNR Trendlines', 'TL Kiss', 'TL Logics', 'Entry Model'],
  },
  {
    num: '05',
    title: 'Risk, Psychology & Routine',
    items: ['Risk/Trade Management', 'Trading Psychology', 'Backtesting & Journaling', 'Building a Trading Routine', 'Review & Continuous Improvement'],
  },
];

const FAQ_ITEMS = [
  { q: 'Is PiP Blocks suitable for beginners?',    a: 'Yes. The mentorship begins with Forex foundations, platform setup and trading mindset before progressing to advanced concepts, so no prior experience is needed.' },
  { q: 'What does the mentorship include?',         a: 'The mentorship includes live Zoom sessions, pre-recorded lessons, access to a private Telegram group, weekly market outlooks and PDF trading resources.' },
  { q: 'How much is the mentorship?',               a: 'The mentorship is priced at US$370. This includes lifetime access to all materials and the private community group.' },
  { q: 'How are the lessons delivered?',            a: 'Lessons are delivered via Zoom Meeting (live) and through pre-recorded sessions shared in a private Telegram group.' },
  { q: 'Does PiP Blocks guarantee profits?',        a: 'No. Trading involves risk and results depend on the individual, the market and many other factors. PiP Blocks provides education, not profit guarantees.' },
  { q: 'How do I join the community?',              a: 'Click any "Join Community" button on this page, or visit t.me/pipblcksfxhuz to join the Telegram community for free.' },
];

/* ── Finder Data ───────────────────────────────────────────────── */
const FINDER_STEPS = [
  {
    question: 'What do you want most right now?',
    options: [
      { key: 'A', label: "I'm new to Forex and need the foundations" },
      { key: 'B', label: 'I want to improve my trading process'      },
      { key: 'C', label: 'I want to learn with a trading community'  },
    ],
  },
  {
    question: 'What matters most to you in a learning programme?',
    options: [
      { key: 'A', label: 'Structured curriculum with clear modules' },
      { key: 'B', label: 'Direct access to a mentor or coach'       },
      { key: 'C', label: 'Learning alongside other traders'          },
    ],
  },
  {
    question: 'How committed are you to your trading development?',
    options: [
      { key: 'A', label: 'Still exploring — I want to understand the basics' },
      { key: 'B', label: 'Serious — I want a real structured programme'      },
      { key: 'C', label: 'Very committed — ready to invest in mentorship'    },
    ],
  },
];

const FINDER_RESULTS: Record<string, { title: string; desc: string; cta: string; href: string }> = {
  mentorship: {
    title: 'PiP Blocks Mentorship',
    desc: "You're ready for a structured programme. The PiP Blocks Mentorship gives you a clear learning path, lifetime access, live sessions and a private community.",
    cta: 'Enquire about mentorship →',
    href: 'https://wa.me/233538132060',
  },
  community: {
    title: 'Join the Community',
    desc: "Start by joining the PiP Blocks Telegram community — a free group where traders share market insights, educational discussions and analysis.",
    cta: 'Join on Telegram →',
    href: 'https://t.me/pipblcksfxhuz',
  },
  insights: {
    title: 'Watch & Learn',
    desc: "Explore PiP Blocks content on YouTube. Watch market education, event highlights and trading discussions to get a feel for the academy before committing.",
    cta: 'Visit YouTube channel →',
    href: 'https://youtube.com/channel/UCLNMge-FeeicPfXTyyeKBXQ?sub_confirmation=1',
  },
};

function getFinderResult(selections: string[]) {
  const last = selections[selections.length - 1];
  const first = selections[0];
  if (last === 'C' && first === 'C') return FINDER_RESULTS.community;
  if (last === 'C') return FINDER_RESULTS.mentorship;
  if (first === 'A' && last !== 'C') return FINDER_RESULTS.insights;
  return FINDER_RESULTS.mentorship;
}

/* ── Accordion component ───────────────────────────────────────── */
function AccordionItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  const bodyRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.style.maxHeight = open ? `${bodyRef.current.scrollHeight}px` : '0px';
    }
  }, [open]);

  return (
    <div className="accordion-item">
      <button
        type="button"
        className="accordion-trigger"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        id={`faq-trigger-${index}`}
        aria-controls={`faq-body-${index}`}
      >
        <span className="flex items-center gap-4">
          <span style={{ color: 'var(--muted-light)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', minWidth: '24px' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          {question}
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" strokeWidth="2" stroke="currentColor" aria-hidden="true">
          <line x1="8" y1="2" x2="8" y2="14" />
          <line x1="2" y1="8" x2="14" y2="8" />
        </svg>
      </button>
      <div
        ref={bodyRef}
        id={`faq-body-${index}`}
        className={`accordion-body ${open ? 'open' : ''}`}
        role="region"
        aria-labelledby={`faq-trigger-${index}`}
      >
        <div className="accordion-content pl-10">{answer}</div>
      </div>
    </div>
  );
}

/* ── Module Accordion ──────────────────────────────────────────── */
function ModuleRow({ mod, index }: { mod: typeof MODULES[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const bodyRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.style.maxHeight = open ? `${bodyRef.current.scrollHeight}px` : '0px';
    }
  }, [open]);

  return (
    <div>
      <div
        className="module-row"
        onClick={() => setOpen(!open)}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(!open); } }}
      >
        <span className="module-num">MODULE {mod.num}</span>
        <span className="module-title">{mod.title}</span>
        <svg
          width="16" height="16" viewBox="0 0 16 16" fill="none"
          strokeWidth="2" stroke="currentColor"
          style={{ flexShrink: 0, transition: 'transform 0.3s ease', transform: open ? 'rotate(45deg)' : 'none', color: 'var(--muted)' }}
          aria-hidden="true"
        >
          <line x1="8" y1="2" x2="8" y2="14" />
          <line x1="2" y1="8" x2="14" y2="8" />
        </svg>
      </div>
      <div
        ref={bodyRef}
        className={`module-body ${open ? 'open' : ''}`}
      >
        <div className="module-body-content">
          <ul style={{ margin: 0, paddingLeft: '16px' }}>
            {mod.items.map((item) => (
              <li key={item} style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.9 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ── Finder Component ──────────────────────────────────────────── */
function StartingPointFinder() {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<string[]>([]);
  const [chosen, setChosen] = useState<string | null>(null);
  const done = step >= FINDER_STEPS.length;
  const result = done ? getFinderResult(selections) : null;

  const select = (key: string) => {
    setChosen(key);
  };

  const next = () => {
    if (!chosen) return;
    const next = [...selections, chosen];
    setSelections(next);
    setChosen(null);
    setStep(step + 1);
  };

  const reset = () => {
    setStep(0);
    setSelections([]);
    setChosen(null);
  };

  return (
    <div className="card-dark" style={{ maxWidth: '640px' }}>
      {!done ? (
        <>
          {/* Progress */}
          <div className="flex items-center gap-1.5 mb-6">
            {FINDER_STEPS.map((_, i) => (
              <div
                key={i}
                style={{
                  height: '2px',
                  flex: 1,
                  background: i <= step ? 'var(--orange)' : 'rgba(255,255,255,0.15)',
                  transition: 'background 0.3s ease',
                }}
              />
            ))}
          </div>

          <p className="section-label section-label--white mb-4">
            Find Your Starting Point · Step {step + 1} of {FINDER_STEPS.length}
          </p>

          <h3
            className="font-display mb-6"
            style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', color: 'var(--white)', lineHeight: 1.2 }}
          >
            {FINDER_STEPS[step].question}
          </h3>

          <div className="flex flex-col gap-2.5">
            {FINDER_STEPS[step].options.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                className={`finder-option ${chosen === key ? 'selected' : ''}`}
                onClick={() => select(key)}
                aria-pressed={chosen === key}
              >
                <span className="finder-option-key">{key}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-6">
            {step > 0 && (
              <button
                type="button"
                onClick={() => { setStep(step - 1); setSelections(selections.slice(0, -1)); setChosen(null); }}
                className="btn btn-outline-white"
                style={{ padding: '10px 18px', fontSize: '13px' }}
              >
                ← Back
              </button>
            )}
            <button
              type="button"
              onClick={next}
              disabled={!chosen}
              className="btn btn-primary"
              style={{ padding: '10px 20px', fontSize: '13px', opacity: chosen ? 1 : 0.4 }}
            >
              {step === FINDER_STEPS.length - 1 ? 'See recommendation →' : 'Next →'}
            </button>
          </div>
        </>
      ) : (
        result && (
          <div>
            <p className="section-label section-label--white mb-4">Your Recommended Next Step</p>
            <h3
              className="font-display mb-4"
              style={{ fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', color: 'var(--white)', lineHeight: 1.1 }}
            >
              {result.title}
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '14px', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {result.desc}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={result.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '12px 20px', fontSize: '13px' }}
              >
                {result.cta}
              </a>
              <button
                type="button"
                onClick={reset}
                className="btn btn-outline-white"
                style={{ padding: '12px 18px', fontSize: '13px' }}
              >
                Start again
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}

/* ── HomePage ──────────────────────────────────────────────────── */
export function HomePage() {
  const heroRef      = useScrollReveal();
  const offersRef    = useScrollReveal();
  const journeyRef   = useScrollReveal();
  const marketsRef   = useScrollReveal();
  const watchRef     = useScrollReveal();
  const aboutRef     = useScrollReveal();
  const finderRef    = useScrollReveal();
  const syllabusRef  = useScrollReveal();
  const faqRef       = useScrollReveal();
  const ctaRef       = useScrollReveal();

  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--cream)', paddingTop: '40px', paddingBottom: '0' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
            {/* Left — content */}
            <div ref={heroRef} className="reveal pt-6 pb-10 lg:pt-10 lg:pb-16">
              <p className="section-label section-label--muted mb-5">
                PiP Blocks Trading Academy · Ghana
              </p>

              <h1 style={{ marginBottom: '12px' }}>
                <span
                  className="font-display block"
                  style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', color: 'var(--charcoal)' }}
                >
                  Learn the market.
                </span>
                <span
                  className="font-display-italic block"
                  style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.6rem)', color: 'var(--orange)' }}
                >
                  Build your edge.
                </span>
              </h1>

              <p style={{ fontSize: 'clamp(15px, 2.2vw, 17px)', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '480px', marginBottom: '2rem' }}>
                Practical forex education, structured mentorship and a community built around understanding price, developing discipline and improving your trading process.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-7">
                <Link to="/mentorship" className="btn btn-primary">
                  Explore mentorship →
                </Link>
                <a
                  href="https://t.me/pipblcksfxhuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Join the community ↗
                </a>
              </div>

              {/* Trust indicator */}
              <div className="flex items-start gap-3">
                <div className="flex -space-x-1.5 flex-shrink-0 mt-0.5">
                  {['P','FX','01'].map((s) => (
                    <div
                      key={s}
                      className="flex items-center justify-center rounded-full text-white font-bold border-2"
                      style={{
                        width: '28px', height: '28px', fontSize: '8px',
                        background: s === 'P' ? 'var(--orange)' : s === 'FX' ? 'var(--charcoal)' : '#888',
                        borderColor: 'var(--cream)',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {s}
                    </div>
                  ))}
                </div>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--charcoal)', lineHeight: 1.3 }}>
                    Education first. Process over promises.
                  </p>
                  <p style={{ fontSize: '12px', color: 'var(--muted)' }}>
                    Learn, analyse and grow with PiP Blocks.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — image card */}
            <div className="relative lg:mt-6 lg:mb-0 -mb-0">
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: '4/5',
                  maxHeight: '600px',
                  background: 'var(--charcoal)',
                }}
              >
                <img
                  src="/speaker-portrait.jpg"
                  alt="PiP Blocks — speaker presenting at live trading education event"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 15%' }}
                  fetchPriority="high"
                  width="560"
                  height="700"
                />

                {/* Overlay badge top-right */}
                <div
                  style={{
                    position: 'absolute', top: '16px', right: '16px',
                    background: 'rgba(26,25,24,0.85)',
                    backdropFilter: 'blur(8px)',
                    color: 'white', padding: '10px 14px',
                    fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                    textAlign: 'right', lineHeight: 1.5,
                  }}
                >
                  REAL EVENTS<br />REAL LEARNING
                </div>

                {/* Caption bottom */}
                <div
                  style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '24px 20px 20px',
                    background: 'linear-gradient(to top, rgba(26,25,24,0.80) 0%, transparent 100%)',
                  }}
                >
                  <p className="font-display text-white" style={{ fontSize: '18px', marginBottom: '4px' }}>
                    Built around real learning.
                  </p>
                  <p style={{ fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' }}>
                    PiP Blocks · Trading Academy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. MARKET TICKER STRIP
      ══════════════════════════════════════════════════════════ */}
      <div className="ticker-wrap py-4" aria-label="Markets covered: Forex, Synthetics, Metals, Indices, Commodities, Crypto" role="marquee">
        <div className="ticker-track">
          {[...MARKETS, ...MARKETS].map((m, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-10 border-r"
              style={{ borderColor: 'rgba(255,255,255,0.08)', flexShrink: 0 }}
            >
              <span style={{ color: 'var(--orange)', fontSize: '14px', fontWeight: 700 }}>{m.icon}</span>
              <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          3. OFFERS — Mentorship card + Community card
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--cream)', padding: '72px 0 80px' }}>
        <div className="container">
          <div ref={offersRef} className="reveal">
            <p className="section-label mb-3">Forex Insights & Mentorship</p>
            <h2
              className="font-display mb-10"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', maxWidth: '520px' }}
            >
              Explore education, mentorship and community.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Mentorship Card */}
              <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
                      Guided Learning
                    </p>
                    <h3 className="font-display" style={{ fontSize: '20px', letterSpacing: '-0.02em' }}>
                      PiP Blocks Mentorship
                    </h3>
                  </div>
                  <div
                    className="font-display text-right"
                    style={{ fontSize: '28px', letterSpacing: '-0.03em', color: 'var(--orange)', flexShrink: 0 }}
                  >
                    $370
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', flex: 1 }}>
                  {[
                    '6-module forex education programme',
                    'Live Zoom sessions + pre-recorded lessons',
                    'Private Telegram group access',
                    'Weekly market outlook',
                    'PDF trading resources & books',
                    'Lifetime access',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5"
                      style={{ fontSize: '13px', color: 'var(--muted)', padding: '5px 0', borderBottom: '1px solid var(--cream-dark)' }}
                    >
                      <span style={{ color: 'var(--orange)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/233538132060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-center"
                >
                  Enquire now ↗
                </a>
              </div>

              {/* Community Card */}
              <div className="card-dark" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '6px' }}>
                      Public Community
                    </p>
                    <h3 className="font-display text-white" style={{ fontSize: '20px', letterSpacing: '-0.02em' }}>
                      Community & Market Insights
                    </h3>
                  </div>
                  <div
                    style={{
                      background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
                      padding: '5px 10px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em',
                      color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', flexShrink: 0,
                    }}
                  >
                    Open
                  </div>
                </div>

                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '20px', flex: 1 }}>
                  An education-led community that follows better discussions and helps market understanding. Join active traders sharing analysis, ideas and educational conversations.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px' }}>
                  {['Market analysis discussions', 'Community learning updates', 'Educational insights & ideas', 'Ideas for education, not advice'].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2"
                      style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', padding: '4px 0' }}
                    >
                      <span style={{ color: 'var(--orange)', fontWeight: 700 }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://t.me/pipblcksfxhuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-white w-full justify-center"
                >
                  Join Telegram ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. LEARNING JOURNEY — 3 steps
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--cream-dark)', padding: '72px 0 80px', borderTop: '1px solid var(--cream-border)', borderBottom: '1px solid var(--cream-border)' }}>
        <div className="container">
          <div ref={journeyRef} className="reveal">
            <p className="section-label mb-4">The Learning Journey</p>
            <h2
              className="font-display mb-3"
              style={{ fontSize: 'clamp(1.7rem, 4vw, 2.8rem)', maxWidth: '480px' }}
            >
              From the basics to a process you understand.
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--muted)', maxWidth: '400px', marginBottom: '2.5rem', lineHeight: 1.65 }}>
              A structured path through the key ideas covered in PiP Blocks mentorship.
            </p>

            {/* Journey steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  n: '01',
                  title: 'Build your foundation',
                  desc: 'Understand Forex, set up your platform, learn chart basics and develop the right trading mindset.',
                },
                {
                  n: '02',
                  title: 'Read market structure',
                  desc: 'Study ranges, breaks of structure, zones, SNR, liquidity and the story behind price movement.',
                },
                {
                  n: '03',
                  title: 'Develop your process',
                  desc: 'Work on entries, risk, trade management, psychology, backtesting and consistent review.',
                },
              ].map(({ n, title, desc }) => (
                <div
                  key={n}
                  className="card"
                  style={{ background: 'var(--white)', borderColor: 'var(--cream-border)' }}
                >
                  <div
                    className="font-display text-orange mb-4"
                    style={{ fontSize: '11px', letterSpacing: '0.1em' }}
                  >
                    {n}
                  </div>
                  <h3 className="font-display mb-2" style={{ fontSize: '17px', letterSpacing: '-0.02em' }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65 }}>{desc}</p>
                </div>
              ))}
            </div>

            <a
              href="#syllabus"
              className="section-label"
              style={{ textDecoration: 'none', display: 'inline-flex' }}
            >
              Explore the full mentorship syllabus below
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. MARKETS — dark section with 2×3 grid
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--charcoal)', padding: '72px 0 80px' }}>
        <div className="container">
          <div ref={marketsRef} className="reveal">
            <p className="section-label section-label--white mb-4">Markets We Study</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-10">
              <div>
                <h2
                  className="font-display text-white"
                  style={{ fontSize: 'clamp(1.7rem, 4vw, 2.8rem)' }}
                >
                  Understand the market you're stepping into.
                </h2>
              </div>
              <div>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginTop: '8px' }}>
                  Explore a range of markets and learn to approach price action with context, patience and a clear plan.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {MARKETS.map(({ label, desc, icon }) => (
                <div key={label} className="market-card">
                  <span style={{ color: 'var(--orange)', fontSize: '20px', lineHeight: 1 }}>{icon}</span>
                  <h3 className="font-display text-white" style={{ fontSize: '16px', letterSpacing: '-0.02em' }}>
                    {label}
                  </h3>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{desc}</p>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '20px', lineHeight: 1.6 }}>
              Market coverage is educational. The availability of analysis or discussion may vary by market and session.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. WATCH & LEARN
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--cream)', padding: '72px 0 80px' }}>
        <div className="container">
          <div ref={watchRef} className="reveal">
            <p className="section-label mb-4">Watch & Learn</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 mb-8">
              <div>
                <h2
                  className="font-display"
                  style={{ fontSize: 'clamp(1.7rem, 4vw, 2.8rem)' }}
                >
                  Keep learning outside the classroom.
                </h2>
              </div>
              <div>
                <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7 }}>
                  Explore PiP Blocks content, event moments and educational discussions. Visit the YouTube channel for available videos and updates.
                </p>
              </div>
            </div>

            {/* Featured image */}
            <div
              className="watch-card mb-4"
              style={{ height: '340px', marginBottom: '12px' }}
            >
              <img
                src="/event-panel.jpg"
                alt="PiP Blocks panel session — live educational event"
                loading="lazy"
                width="1200"
                height="680"
                style={{ objectPosition: '50% 30%' }}
              />
              <div className="watch-card-label">
                <p
                  className="font-display text-white"
                  style={{ fontSize: '20px', marginBottom: '4px' }}
                >
                  Learn through real conversations.
                </p>
                <p style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>
                  EDUCATION · ANALYSIS · MINDSET
                </p>
              </div>
            </div>

            {/* Two smaller cards */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  img: '/speaker-portrait.jpg',
                  pos: '50% 10%',
                  title: 'Market education',
                  sub: 'Build understanding, one concept at a time.',
                },
                {
                  img: '/event-panel-2.jpg',
                  pos: '50% 20%',
                  title: 'Live learning',
                  sub: 'See the people and moments behind the academy.',
                },
              ].map(({ img, pos, title, sub }) => (
                <div key={title} className="watch-card" style={{ height: '200px' }}>
                  <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    style={{ objectPosition: pos }}
                  />
                  <div className="watch-card-label">
                    <p className="font-display text-white" style={{ fontSize: '14px', marginBottom: '2px' }}>{title}</p>
                    <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://youtube.com/channel/UCLNMge-FeeicPfXTyyeKBXQ?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit PiP Blocks on YouTube ↗
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7. ABOUT THE ACADEMY
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--cream-dark)', padding: '72px 0 0', borderTop: '1px solid var(--cream-border)' }}>
        <div className="container">
          <div
            ref={aboutRef}
            className="reveal grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            {/* Text */}
            <div className="pb-14 lg:pb-20">
              <p className="section-label mb-4">About PiP Blocks</p>
              <h2
                className="font-display mb-6"
                style={{ fontSize: 'clamp(1.7rem, 4vw, 2.8rem)' }}
              >
                More than charts. A community built to grow.
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1rem' }}>
                PiP Blocks is a Forex education and trading community built around one simple idea: understanding matters. We create room for traders to learn market concepts, exchange ideas and develop the discipline that trading demands.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2rem' }}>
                From structured mentorship to community learning, the focus is on helping people become more thoughtful and process-driven in the markets.
              </p>

              <div className="flex items-center gap-3 mb-6">
                <img src="/pip-mark.png" alt="PiP Blocks" className="w-10 h-10 object-contain" />
                <div>
                  <p className="font-display text-sm" style={{ letterSpacing: '0.03em', color: 'var(--charcoal)' }}>PiP Blocks</p>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.04em' }}>Learn · Analyse · Develop</p>
                </div>
              </div>

              <Link to="/about" className="btn btn-outline" style={{ padding: '12px 22px', fontSize: '13px' }}>
                About the academy →
              </Link>
            </div>

            {/* Community photo */}
            <div
              className="relative overflow-hidden"
              style={{ height: '460px', flexShrink: 0 }}
            >
              <img
                src="/community-audience.jpg"
                alt="PiP Blocks community — traders gathered at a live event"
                className="w-full h-full object-cover"
                loading="lazy"
                style={{ objectPosition: '50% 30%' }}
              />
              <div
                style={{
                  position: 'absolute', bottom: '20px', left: '20px',
                  background: 'rgba(26,25,24,0.75)',
                  backdropFilter: 'blur(6px)',
                  padding: '8px 14px',
                  color: 'rgba(255,255,255,0.65)',
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                }}
              >
                The PiP Blocks Community
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          8. FIND YOUR STARTING POINT
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--charcoal)', padding: '72px 0 80px' }}>
        <div className="container">
          <div ref={finderRef} className="reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <p className="section-label section-label--white mb-4">Find Your Starting Point</p>
                <h2
                  className="font-display text-white mb-4"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                >
                  Not sure where to begin?
                </h2>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: '360px' }}>
                  Tell us what you're looking for and we'll point you to the most relevant PiP Blocks next step.
                </p>
              </div>
              <div>
                <StartingPointFinder />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          9. SYLLABUS
      ══════════════════════════════════════════════════════════ */}
      <section id="syllabus" style={{ background: 'var(--cream)', padding: '72px 0 80px' }}>
        <div className="container">
          <div ref={syllabusRef} className="reveal">
            <p className="section-label mb-4">Inside the Mentorship</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-10">
              <div>
                <h2
                  className="font-display"
                  style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)' }}
                >
                  A syllabus designed to build understanding.
                </h2>
              </div>
              <div>
                <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7 }}>
                  Explore the topics included in the six-module mentorship programme.
                </p>
              </div>
            </div>

            <div style={{ maxWidth: '760px' }}>
              {MODULES.map((mod, i) => (
                <ModuleRow key={mod.num} mod={mod} index={i} />
              ))}
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/233538132060"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Ask about mentorship ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          10. FAQ
      ══════════════════════════════════════════════════════════ */}
      <section id="faq" style={{ background: 'var(--cream-dark)', padding: '72px 0 80px', borderTop: '1px solid var(--cream-border)' }}>
        <div className="container">
          <div ref={faqRef} className="reveal">
            <p className="section-label mb-4">FAQ</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 mb-10">
              <div>
                <h2
                  className="font-display"
                  style={{ fontSize: 'clamp(1.7rem, 4vw, 2.8rem)' }}
                >
                  Questions before you begin?
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '340px', marginTop: '12px' }}>
                  Here are a few things people commonly ask about PiP Blocks and the mentorship.
                </p>
              </div>
              <div>
                <a
                  href="https://t.me/pipblockfx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ padding: '11px 20px', fontSize: '13px' }}
                >
                  Ask us directly ↗
                </a>
              </div>
            </div>

            <div style={{ maxWidth: '760px' }}>
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem key={i} question={item.q} answer={item.a} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          11. FINAL CTA — dark with photo
      ══════════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', background: 'var(--charcoal)', overflow: 'hidden' }}>
        {/* Background photo */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="/wide-seminar.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            loading="lazy"
            style={{ objectPosition: '50% 40%', opacity: 0.25 }}
          />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            ref={ctaRef}
            className="reveal grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 lg:py-20"
          >
            <div>
              <p className="section-label section-label--white mb-5">Your Next Step</p>
              <h2
                className="font-display text-white"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', marginBottom: '16px' }}
              >
                Build knowledge. Trade with purpose.
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: '380px' }}>
                Take the next step with structured mentorship, practical learning and a community that keeps you connected to the journey.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <a
                href="https://wa.me/233538132060"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full lg:w-auto"
                style={{ padding: '15px 28px', fontSize: '15px' }}
              >
                Enquire about mentorship →
              </a>
              <a
                href="https://t.me/pipblcksfxhuz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white w-full lg:w-auto"
                style={{ padding: '15px 28px', fontSize: '15px' }}
              >
                Join community ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
