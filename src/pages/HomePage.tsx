import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ─── SLIDER DATA ────────────────────────────────────────────────── */
// event-panel.jpg = WA0051 = 3-person Ghana panel (must be FIRST)
const SLIDES = [
  { src: '/event-panel.jpg',      alt: 'PiP Blocks panel discussion — three speakers on stage at live educational event', pos: '50% 25%' },
  { src: '/9B9A8722.jpg',         alt: 'PiP Blocks seminar — presenter at lecture', pos: '50% 20%' },
  { src: '/event-panel-3.jpg',    alt: 'PiP Blocks panel session — four speakers', pos: '50% 25%' },
  { src: '/wide-seminar.jpg',     alt: 'PiP Blocks wide audience view — packed seminar hall', pos: '50% 40%' },
  { src: '/9B9A8756.jpg',         alt: 'PiP Blocks presentation — speaker on stage', pos: '50% 20%' },
  { src: '/community-audience.jpg', alt: 'PiP Blocks community audience at event', pos: '50% 30%' },
];

/* ─── MODULES ────────────────────────────────────────────────────── */
const MODULES = [
  { num: '00', title: 'Forex Foundations & Platform Basics', items: ['Introduction to Forex Trading', 'Platform Setup & Chart Basics', 'Trading Mindset Introduction'] },
  { num: '01', title: 'Market Structure & SNR', items: ['Valid BOS (EEC/SMC)', 'Range Concept', 'SNR Basics', 'Market Pricing'] },
  { num: '02', title: 'Storyline & Zone Selection', items: ['Zone Selection (SMC/EEC)', 'Types of EG', 'SNR Significant'] },
  { num: '03', title: 'Liquidity Concepts', items: ['Liquidity Concept', 'Money Transfer'] },
  { num: '04', title: 'Trendlines & Entry Models', items: ['SNR Trendlines', 'TL Kiss', 'TL Logics', 'Entry Model'] },
  { num: '05', title: 'Risk, Psychology & Routine', items: ['Risk/Trade Management', 'Trading Psychology', 'Backtesting & Journaling', 'Building a Trading Routine', 'Review & Continuous Improvement'] },
];

/* ─── MARKETS ────────────────────────────────────────────────────── */
const MARKETS = [
  { label: 'Forex',       desc: 'Major, minor & exotic currency pairs',  icon: '↗' },
  { label: 'Synthetics',  desc: 'Volatility-based synthetic instruments', icon: '~' },
  { label: 'Metals',      desc: 'Gold, silver and precious metals',       icon: '◈' },
  { label: 'Indices',     desc: 'Major global market indices',            icon: '▪' },
  { label: 'Commodities', desc: 'Oil, gas and commodity markets',         icon: '◉' },
  { label: 'Crypto',      desc: 'Digital asset markets',                  icon: '₿' },
];

/* ─── FAQ ────────────────────────────────────────────────────────── */
const FAQ = [
  {
    q: 'Who is PiP Blocks for?',
    a: 'PiP Blocks is for anyone serious about understanding the Forex market — whether you are brand new to trading or already have some experience but want more structure and depth in your approach.',
  },
  {
    q: 'Do I need previous trading experience?',
    a: 'No. The mentorship begins with foundations — Forex basics, platform setup and trading mindset — before progressing to more advanced market concepts. Beginners are welcome.',
  },
  {
    q: 'What does the mentorship include?',
    a: 'The mentorship includes six structured modules delivered via live Zoom sessions and pre-recorded lessons, access to a private Telegram group, weekly market outlooks, and PDF trading resources. Access is lifetime.',
  },
  {
    q: 'How long does mentorship access last?',
    a: 'Lifetime. Once you join the PiP Blocks mentorship, you retain access to all materials, the private group and future updates at no additional cost.',
  },
  {
    q: 'What markets does PiP Blocks cover?',
    a: 'PiP Blocks covers Forex (major and minor pairs), Synthetics, Metals (gold and silver), Indices, Commodities and Crypto. The core curriculum focuses on market structure and price action concepts applicable across these instruments.',
  },
  {
    q: 'How do I join the community?',
    a: 'The PiP Blocks community on Telegram is free and open to all. Click any "Join Community" button on this page, or visit t.me/pipblcksfxhuz directly.',
  },
  {
    q: 'Does PiP Blocks guarantee profits?',
    a: 'No. Trading involves real financial risk and results depend on the individual, the market, and many other factors. PiP Blocks provides education, not profit guarantees. Never trade more than you can afford to lose.',
  },
];

/* ─── FINDER DATA ────────────────────────────────────────────────── */
const FINDER_QUESTIONS = [
  {
    q: 'What best describes where you are right now?',
    opts: [
      { k: 'A', l: "I'm completely new to Forex trading" },
      { k: 'B', l: 'I know the basics but lack a clear structure' },
      { k: 'C', l: 'I want to deepen my market analysis skills' },
    ],
  },
  {
    q: 'What matters most to you in a learning programme?',
    opts: [
      { k: 'A', l: 'A clear, structured curriculum with modules' },
      { k: 'B', l: 'Direct access to a mentor or coach' },
      { k: 'C', l: 'Learning alongside a community of traders' },
    ],
  },
  {
    q: 'How many hours per week can you commit?',
    opts: [
      { k: 'A', l: '1–2 hours — I need a flexible pace' },
      { k: 'B', l: '3–5 hours — I am ready to invest time' },
      { k: 'C', l: 'As much as it takes — I am fully committed' },
    ],
  },
  {
    q: 'What is your main goal over the next three months?',
    opts: [
      { k: 'A', l: 'Understand how Forex actually works' },
      { k: 'B', l: 'Develop a consistent, disciplined trading process' },
      { k: 'C', l: 'Actively trade with structure and confidence' },
    ],
  },
  {
    q: 'What type of content do you learn best from?',
    opts: [
      { k: 'A', l: 'Video lessons and recorded sessions at my own pace' },
      { k: 'B', l: 'Live group sessions with real-time discussion' },
      { k: 'C', l: 'One-on-one or personalised coaching' },
    ],
  },
  {
    q: 'What would your ideal first step be today?',
    opts: [
      { k: 'A', l: 'Join a free community to explore and learn' },
      { k: 'B', l: 'Watch educational content and market insights' },
      { k: 'C', l: 'Enquire about a structured mentorship programme' },
    ],
  },
];

type FinderResult = { title: string; desc: string; cta: string; href: string; secondary?: string; secondaryHref?: string };

function getResult(answers: string[]): FinderResult {
  const cCount = answers.filter(a => a === 'C').length;
  const aCount = answers.filter(a => a === 'A').length;
  if (cCount >= 3 || answers[5] === 'C') {
    return {
      title: 'PiP Blocks Mentorship',
      desc: "You're ready for a structured programme. The mentorship gives you six clear modules, lifetime access, live Zoom sessions, a private Telegram group and weekly market outlooks — everything you need to build a real trading process.",
      cta: 'Enquire about mentorship →',
      href: 'https://wa.me/233538132060',
      secondary: 'View mentorship details',
      secondaryHref: '/mentorship',
    };
  }
  if (aCount >= 3 || answers[5] === 'A') {
    return {
      title: 'Join the Community',
      desc: "Start by joining the PiP Blocks Telegram community — a free, open group where traders share market insights, educational discussions and analysis. It is the best way to explore PiP Blocks before committing to the full mentorship.",
      cta: 'Join on Telegram →',
      href: 'https://t.me/pipblcksfxhuz',
      secondary: 'Learn more about community',
      secondaryHref: '/community',
    };
  }
  return {
    title: 'Watch & Learn on YouTube',
    desc: "Explore PiP Blocks on YouTube. Watch market education, event highlights and trading discussions to get a real feel for the academy's approach before deciding on your next step.",
    cta: 'Visit YouTube channel →',
    href: 'https://youtube.com/channel/UCLNMge-FeeicPfXTyyeKBXQ?sub_confirmation=1',
    secondary: 'Explore Insights page',
    secondaryHref: '/insights',
  };
}

/* ─── HERO SLIDER COMPONENT ──────────────────────────────────────── */
function HeroSlider() {
  const [current, setCurrent]           = useState(0);
  const [paused, setPaused]             = useState(false);
  const [userInteracted, setUserInt]    = useState(false);
  const touchStartX = useRef<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const prefersReduced = useRef(typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  const goTo = useCallback((idx: number) => {
    setCurrent((idx + SLIDES.length) % SLIDES.length);
    setUserInt(true);
    // Resume auto after 10s
    setTimeout(() => setUserInt(false), 10000);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Autoplay
  useEffect(() => {
    if (prefersReduced.current) return;
    if (paused || userInteracted) return;
    intervalRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % SLIDES.length);
    }, 6000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, userInteracted]);

  // Page visibility
  useEffect(() => {
    const fn = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', fn);
    return () => document.removeEventListener('visibilitychange', fn);
  }, []);

  // Touch/swipe
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
  };

  return (
    <div
      style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="photo slideshow"
      aria-label="PiP Blocks event photography"
    >
      {/* Slides */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? 'active' : ''}`}
          aria-hidden={i !== current}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${i + 1} of ${SLIDES.length}`}
        >
          <img
            src={s.src}
            alt={s.alt}
            style={{ objectPosition: s.pos }}
            fetchPriority={i === 0 ? 'high' : undefined}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          {/* Gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(20,25,15,0.65) 0%, rgba(20,25,15,0.20) 55%, transparent 100%)',
          }} aria-hidden="true" />
        </div>
      ))}

      {/* Prev/Next — desktop only */}
      <div className="hidden sm:flex" style={{ position: 'absolute', bottom: '24px', right: '24px', gap: '8px', zIndex: 10 }}>
        <button className="slider-btn" onClick={prev} aria-label="Previous slide" type="button">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <polyline points="11,4 6,9 11,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="slider-btn" onClick={next} aria-label="Next slide" type="button">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <polyline points="7,4 12,9 7,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div
        style={{ position: 'absolute', bottom: '24px', left: '24px', display: 'flex', gap: '6px', zIndex: 10 }}
        role="tablist"
        aria-label="Slide navigation"
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`slider-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── ACCORDION ITEM ─────────────────────────────────────────────── */
function AccordionItem({ q, a, idx, openIdx, setOpen }: {
  q: string; a: string; idx: number; openIdx: number; setOpen: (i: number) => void;
}) {
  const isOpen = idx === openIdx;
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.style.maxHeight = isOpen ? `${bodyRef.current.scrollHeight}px` : '0';
    }
  }, [isOpen]);

  return (
    <div>
      <button
        type="button"
        className="accordion-btn"
        aria-expanded={isOpen}
        onClick={() => setOpen(isOpen ? -1 : idx)}
        id={`faq-q-${idx}`}
        aria-controls={`faq-a-${idx}`}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--muted-light)', minWidth: '22px', letterSpacing: '0.06em' }}>
            {String(idx + 1).padStart(2, '0')}
          </span>
          {q}
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <line x1="8" y1="2" x2="8" y2="14" /><line x1="2" y1="8" x2="14" y2="8" />
        </svg>
      </button>
      <div
        ref={bodyRef}
        id={`faq-a-${idx}`}
        className={`accordion-body ${isOpen ? 'open' : ''}`}
        role="region"
        aria-labelledby={`faq-q-${idx}`}
      >
        <div className="accordion-content pl-9">{a}</div>
      </div>
    </div>
  );
}

/* ─── MODULE ROW ─────────────────────────────────────────────────── */
function ModuleRow({ mod, openIdx, setOpen, myIdx }: {
  mod: typeof MODULES[0]; openIdx: number; setOpen: (i: number) => void; myIdx: number;
}) {
  const isOpen = myIdx === openIdx;
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.style.maxHeight = isOpen ? `${bodyRef.current.scrollHeight}px` : '0';
    }
  }, [isOpen]);

  return (
    <div>
      <button
        type="button"
        className="module-btn"
        aria-expanded={isOpen}
        onClick={() => setOpen(isOpen ? -1 : myIdx)}
      >
        <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--orange)', letterSpacing: '0.1em', minWidth: '68px', flexShrink: 0 }}>
          MODULE {mod.num}
        </span>
        <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--charcoal)', flex: 1, textAlign: 'left' }}>{mod.title}</span>
        <svg
          width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
          style={{ flexShrink: 0, color: 'var(--muted-light)', transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(45deg)' : 'none' }}
          aria-hidden="true"
        >
          <line x1="8" y1="2" x2="8" y2="14" /><line x1="2" y1="8" x2="14" y2="8" />
        </svg>
      </button>
      <div ref={bodyRef} className={`module-body ${isOpen ? 'open' : ''}`}>
        <div style={{ padding: '12px 20px 16px 88px' }}>
          <ul style={{ margin: 0, paddingLeft: '16px' }}>
            {mod.items.map(it => (
              <li key={it} style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.9 }}>{it}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ─── FINDER COMPONENT ───────────────────────────────────────────── */
function Finder() {
  const [step, setStep]           = useState(0);
  const [answers, setAnswers]     = useState<string[]>([]);
  const [chosen, setChosen]       = useState<string | null>(null);
  const [phase, setPhase]         = useState<'entering' | 'visible' | 'exiting'>('visible');
  const done = step >= FINDER_QUESTIONS.length;
  const result = done ? getResult(answers) : null;

  const goNext = () => {
    if (!chosen) return;
    setPhase('exiting');
    setTimeout(() => {
      setAnswers([...answers, chosen]);
      setChosen(null);
      setStep(step + 1);
      setPhase('entering');
      setTimeout(() => setPhase('visible'), 50);
    }, 250);
  };

  const goPrev = () => {
    if (step === 0) return;
    setPhase('exiting');
    setTimeout(() => {
      const na = answers.slice(0, -1);
      setAnswers(na);
      setChosen(null);
      setStep(step - 1);
      setPhase('entering');
      setTimeout(() => setPhase('visible'), 50);
    }, 250);
  };

  const reset = () => { setStep(0); setAnswers([]); setChosen(null); setPhase('visible'); };

  return (
    <div
      className="card-dark"
      style={{ padding: '32px', maxWidth: '580px' }}
    >
      {!done ? (
        <div className={`finder-step ${phase}`}>
          {/* Progress bar */}
          <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
            {FINDER_QUESTIONS.map((_, i) => (
              <div
                key={i}
                style={{
                  height: '3px', flex: 1, borderRadius: '2px',
                  background: i < step ? 'var(--orange)' : i === step ? 'rgba(232,75,30,0.5)' : 'rgba(255,255,255,0.12)',
                  transition: 'background 0.4s ease',
                }}
              />
            ))}
          </div>

          <p className="eyebrow eyebrow--white" style={{ marginBottom: '12px' }}>
            Step {step + 1} of {FINDER_QUESTIONS.length}
          </p>

          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
              color: 'var(--white)',
              lineHeight: 1.25,
              marginBottom: '20px',
            }}
          >
            {FINDER_QUESTIONS[step].q}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
            {FINDER_QUESTIONS[step].opts.map(({ k, l }) => (
              <button
                key={k}
                type="button"
                className={`finder-option ${chosen === k ? 'selected' : ''}`}
                onClick={() => setChosen(k)}
                aria-pressed={chosen === k}
              >
                <span className="finder-key">{k}</span>
                <span>{l}</span>
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {step > 0 && (
              <button type="button" onClick={goPrev} className="btn btn-outline-white btn-sm">
                ← Back
              </button>
            )}
            <button
              type="button"
              onClick={goNext}
              disabled={!chosen}
              className="btn btn-orange btn-sm"
              style={{ opacity: chosen ? 1 : 0.4, cursor: chosen ? 'pointer' : 'not-allowed' }}
            >
              {step === FINDER_QUESTIONS.length - 1 ? 'See my recommendation →' : 'Next →'}
            </button>
          </div>
        </div>
      ) : result ? (
        <div className={`finder-step ${phase}`}>
          <p className="eyebrow eyebrow--white" style={{ marginBottom: '12px' }}>Your Recommendation</p>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 'clamp(1.3rem, 3.5vw, 1.7rem)',
              color: 'var(--white)',
              lineHeight: 1.2,
              marginBottom: '14px',
            }}
          >
            {result.title}
          </h3>
          <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '24px' }}>
            {result.desc}
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href={result.href} target="_blank" rel="noopener noreferrer" className="btn btn-orange btn-sm">
              {result.cta}
            </a>
            {result.secondary && result.secondaryHref && (
              <Link to={result.secondaryHref} className="btn btn-outline-white btn-sm">
                {result.secondary}
              </Link>
            )}
            <button type="button" onClick={reset} className="btn btn-outline-white btn-sm">
              Start again
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

/* ─── HOMEPAGE ───────────────────────────────────────────────────── */
export function HomePage() {
  const [openModule, setOpenModule] = useState(-1);
  const [openFaq, setOpenFaq]       = useState(-1);

  const r1 = useScrollReveal();
  const r2 = useScrollReveal();
  const r3 = useScrollReveal();
  const r4 = useScrollReveal();
  const r5 = useScrollReveal();
  const r6 = useScrollReveal();
  const r7 = useScrollReveal();
  const r8 = useScrollReveal();
  const r9 = useScrollReveal();
  const r10 = useScrollReveal();
  const r11 = useScrollReveal();

  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          HERO — split layout with photo slider
      ══════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--charcoal)',
          minHeight: 'calc(100vh - 66px)',
          display: 'grid',
          gridTemplateColumns: '1fr',
        }}
        className="lg:grid-cols-[1fr_1fr]"
      >
        {/* Left — content */}
        <div
          style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: 'clamp(40px, 6vw, 80px) 0',
            zIndex: 2,
          }}
        >
          <div className="container" style={{ maxWidth: '640px' }}>
            <div ref={r1} className="reveal">
              <p className="eyebrow eyebrow--white" style={{ marginBottom: '20px' }}>
                PiP Blocks Forex Trading Academy · Ghana
              </p>

              <h1 style={{ marginBottom: '20px' }}>
                <span
                  style={{
                    display: 'block',
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
                    color: 'var(--white)',
                    lineHeight: 1.04,
                    letterSpacing: '-0.03em',
                  }}
                >
                  Learn the market.
                </span>
                <span
                  style={{
                    display: 'block',
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: 'italic',
                    fontWeight: 800,
                    fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                    color: 'var(--orange)',
                    lineHeight: 1.06,
                  }}
                >
                  Trade with purpose.
                </span>
              </h1>

              <p style={{ fontSize: 'clamp(15px, 2.2vw, 17px)', color: 'rgba(255,255,255,0.60)', lineHeight: 1.7, maxWidth: '480px', marginBottom: '32px' }}>
                Practical forex education, structured mentorship and a community built around market understanding, discipline and a process that works.
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '36px' }}>
                <Link to="/mentorship" className="btn btn-orange">
                  Explore Mentorship →
                </Link>
                <a
                  href="https://t.me/pipblcksfxhuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-white"
                >
                  Join Community ↗
                </a>
              </div>

              {/* Trust strip */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.10)' }}>
                <div style={{ display: 'flex', gap: '0' }}>
                  {['E','F','T'].map((l, i) => (
                    <div
                      key={l}
                      style={{
                        width: '32px', height: '32px', borderRadius: '50%',
                        background: i === 0 ? 'var(--orange)' : i === 1 ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)',
                        border: '2px solid var(--charcoal)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginLeft: i > 0 ? '-8px' : 0,
                        fontSize: '11px', fontWeight: 700, color: 'white',
                        flexShrink: 0,
                      }}
                    >{l}</div>
                  ))}
                </div>
                <div>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.80)', lineHeight: 1.3 }}>
                    Education first. Process over promises.
                  </p>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.40)', marginTop: '2px' }}>
                    Lifetime access · $370 · Zoom + Telegram
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — photo slider */}
        <div style={{ position: 'relative', minHeight: '420px' }} className="lg:min-h-0">
          <HeroSlider />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MARKET TICKER
      ══════════════════════════════════════════════════════════ */}
      <div
        className="ticker-wrap"
        style={{ background: 'var(--charcoal)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '14px 0' }}
        aria-hidden="true"
      >
        <div className="ticker-track">
          {[...MARKETS, ...MARKETS].map((m, i) => (
            <div
              key={i}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 36px', borderRight: '1px solid rgba(255,255,255,0.07)', flexShrink: 0 }}
            >
              <span style={{ color: 'var(--orange)', fontSize: '15px', lineHeight: 1 }}>{m.icon}</span>
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          TRADING OFFERS
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--cream)', padding: '80px 0 88px' }}>
        <div className="container">
          <div ref={r2} className="reveal">
            <p className="eyebrow" style={{ marginBottom: '12px' }}>What PiP Blocks Offers</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0 60px', marginBottom: '48px' }} className="lg:grid-cols-2">
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: 'var(--charcoal)',
                  margin: 0,
                }}
              >
                Education, mentorship and community in one place.
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.7, marginTop: '8px' }}>
                Everything offered by PiP Blocks is built around one goal: helping traders genuinely understand the market and develop a process that works for them.
              </p>
            </div>

            {/* 4 offer cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '16px' }} className="sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  tag: 'Education',
                  title: 'Structured Learning',
                  desc: 'A six-module curriculum covering foundations, market structure, liquidity, entry models, risk management and trading psychology.',
                  link: '/mentorship',
                  linkLabel: 'View syllabus →',
                },
                {
                  tag: 'Mentorship',
                  title: '$370 · Lifetime',
                  desc: 'Live Zoom sessions, pre-recorded lessons, private Telegram group, weekly market outlook and PDF resources. Access never expires.',
                  link: '/mentorship',
                  linkLabel: 'Explore mentorship →',
                },
                {
                  tag: 'Community',
                  title: 'Free Telegram Group',
                  desc: 'Join active traders in an open educational Telegram community. Share ideas, discuss analysis and learn alongside others.',
                  link: '/community',
                  linkLabel: 'Join now →',
                },
                {
                  tag: 'Market Insights',
                  title: 'Watch & Learn',
                  desc: 'Educational content, event highlights and market discussions available on the PiP Blocks YouTube channel.',
                  link: '/insights',
                  linkLabel: 'View insights →',
                },
              ].map(({ tag, title, desc, link, linkLabel }) => (
                <div
                  key={tag}
                  className="card"
                  style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}
                >
                  <span style={{
                    display: 'inline-block',
                    fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: 'var(--orange)',
                    marginBottom: '10px',
                  }}>
                    {tag}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700, fontSize: '18px',
                      color: 'var(--charcoal)', marginBottom: '10px',
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.65, flex: 1, marginBottom: '16px' }}>{desc}</p>
                  <Link
                    to={link}
                    style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--orange)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline')}
                    onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none')}
                  >
                    {linkLabel}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          LEARNING JOURNEY
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--cream-dark)', padding: '80px 0 88px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div ref={r3} className="reveal">
            <p className="eyebrow" style={{ marginBottom: '12px' }}>The Learning Journey</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '12px',
              }}
            >
              From the basics to a process you own.
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '480px', marginBottom: '48px' }}>
              The PiP Blocks mentorship follows a structured path that builds genuine understanding at every stage.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px', position: 'relative' }} className="md:grid-cols-3">
              {[
                {
                  n: '01',
                  title: 'Build your foundations',
                  desc: 'Introduction to Forex, platform setup, chart basics and the trading mindset you need from day one.',
                  color: 'var(--orange)',
                },
                {
                  n: '02',
                  title: 'Understand the market',
                  desc: 'Market structure, BOS, ranges, SNR, storyline, liquidity and how money moves through the markets.',
                  color: 'var(--charcoal)',
                },
                {
                  n: '03',
                  title: 'Develop your process',
                  desc: 'Entry models, risk management, trading psychology, backtesting, journaling and building a sustainable routine.',
                  color: 'var(--muted)',
                },
              ].map(({ n, title, desc, color }) => (
                <div
                  key={n}
                  className="card-ink"
                  style={{ padding: '28px', background: 'var(--cream-02)' }}
                >
                  <div
                    style={{
                      width: '48px', height: '48px', borderRadius: '12px',
                      background: color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '14px', fontWeight: 800, color: 'white',
                      letterSpacing: '0.03em', marginBottom: '16px',
                    }}
                  >
                    {n}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700, fontSize: '18px',
                      color: 'var(--charcoal)', marginBottom: '10px',
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.65 }}>{desc}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '32px' }}>
              <a href="#syllabus" className="eyebrow" style={{ textDecoration: 'none', display: 'inline-flex' }}>
                Explore the full six-module syllabus below
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MENTORSHIP OFFER
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--cream)', padding: '80px 0 88px' }}>
        <div className="container">
          <div ref={r4} className="reveal">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }} className="lg:grid-cols-2 lg:gap-16 lg:items-start">
              {/* Left — mentorship card */}
              <div>
                <p className="eyebrow" style={{ marginBottom: '12px' }}>Mentorship Programme</p>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 800,
                    fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    marginBottom: '24px',
                  }}
                >
                  A structured programme built around real market understanding.
                </h2>

                <div
                  className="card-ink"
                  style={{ padding: '28px 28px 24px', background: 'var(--cream-02)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div>
                      <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '6px' }}>
                        One-time fee · Lifetime access
                      </p>
                      <p
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 800,
                          fontSize: '3rem',
                          color: 'var(--orange)',
                          lineHeight: 1,
                          letterSpacing: '-0.03em',
                        }}
                      >
                        $370
                      </p>
                    </div>
                    <div style={{ background: 'var(--orange)', borderRadius: '10px', padding: '8px 12px', textAlign: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'white', display: 'block' }}>No</span>
                      <span style={{ fontSize: '10px', fontWeight: 700, color: 'white' }}>recurring fees</span>
                    </div>
                  </div>

                  {[
                    '6-module forex education programme',
                    'Live Zoom sessions + pre-recorded lessons',
                    'Private Telegram group access',
                    'Weekly market outlook',
                    'PDF books and trading resources',
                    'Lifetime access — no expiry',
                  ].map((item) => (
                    <div
                      key={item}
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0', borderBottom: '1px solid var(--border)' }}
                    >
                      <div style={{
                        width: '20px', height: '20px', borderRadius: '50%',
                        background: 'rgba(232,75,30,0.12)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                          <polyline points="1,4 3.5,6.5 9,1" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--charcoal)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — enquiry + photo */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="card-dark" style={{ padding: '28px' }}>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700, fontSize: '20px',
                      color: 'var(--white)', marginBottom: '10px',
                    }}
                  >
                    Ready to enquire?
                  </h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '20px' }}>
                    Reach out via WhatsApp or Telegram and the PiP Blocks team will walk you through the next steps personally.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <a
                      href="https://wa.me/233538132060"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-orange"
                      style={{ display: 'flex', justifyContent: 'center' }}
                    >
                      Enquire on WhatsApp ↗
                    </a>
                    <a
                      href="https://t.me/pipblockfx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-white"
                      style={{ display: 'flex', justifyContent: 'center' }}
                    >
                      Message on Telegram →
                    </a>
                  </div>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '14px', textAlign: 'center' }}>
                    Enquiries handled personally. No automated responses.
                  </p>
                </div>

                {/* Event photo */}
                <div
                  style={{ position: 'relative', aspectRatio: '16/9', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--charcoal)' }}
                >
                  <img
                    src="/speaker-portrait.jpg"
                    alt="PiP Blocks speaker — educational event"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{ objectPosition: '50% 15%' }}
                  />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '20px',
                    background: 'linear-gradient(to top, rgba(20,25,15,0.80) 0%, transparent 100%)',
                  }}>
                    <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' }}>
                      Real Sessions · Real Learning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SYLLABUS
      ══════════════════════════════════════════════════════════ */}
      <section id="syllabus" style={{ background: 'var(--cream-dark)', padding: '80px 0 88px', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div ref={r5} className="reveal">
            <p className="eyebrow" style={{ marginBottom: '12px' }}>Inside The Programme</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px 60px', marginBottom: '36px' }} className="lg:grid-cols-2">
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                Six modules. One clear path.
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                Explore the full curriculum covered in the PiP Blocks mentorship programme — from the very basics to developing a complete trading process.
              </p>
            </div>

            <div style={{ maxWidth: '800px' }}>
              {MODULES.map((mod, i) => (
                <ModuleRow
                  key={mod.num}
                  mod={mod}
                  myIdx={i}
                  openIdx={openModule}
                  setOpen={setOpenModule}
                />
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '28px' }}>
              <a href="https://wa.me/233538132060" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Enquire about mentorship →
              </a>
              <Link to="/mentorship" className="btn btn-outline">
                View full programme
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MARKETS
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--charcoal)', padding: '80px 0 88px' }}>
        <div className="container">
          <div ref={r6} className="reveal">
            <p className="eyebrow eyebrow--white" style={{ marginBottom: '12px' }}>Markets We Study</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px 60px', marginBottom: '40px' }} className="lg:grid-cols-2">
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                  color: 'var(--white)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                Understand the market you are entering.
              </h2>
              <p style={{ fontSize: '15.5px', color: 'rgba(255,255,255,0.50)', lineHeight: 1.7, margin: '8px 0 0' }}>
                The concepts taught in PiP Blocks apply across a wide range of instruments, giving traders the flexibility to explore different markets with the same underlying understanding.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }} className="md:grid-cols-3">
              {MARKETS.map(({ label, desc, icon }) => (
                <div key={label} className="market-chip">
                  <span style={{ fontSize: '20px', color: 'var(--orange)', lineHeight: 1, flexShrink: 0 }}>{icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '14.5px', color: 'var(--white)', lineHeight: 1.2, marginBottom: '3px' }}>{label}</p>
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.40)', lineHeight: 1.4 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.28)', marginTop: '20px' }}>
              Market coverage is educational. Content availability may vary by instrument and market session.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WATCH & LEARN
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--cream)', padding: '80px 0 88px' }}>
        <div className="container">
          <div ref={r7} className="reveal">
            <p className="eyebrow" style={{ marginBottom: '12px' }}>Watch & Learn</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px 60px', marginBottom: '40px' }} className="lg:grid-cols-2">
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                Keep learning outside the classroom.
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.7, margin: '8px 0 0' }}>
                Explore market education, event highlights and trading discussions from PiP Blocks on YouTube.
              </p>
            </div>

            {/* Featured — large watch card */}
            <a
              href="https://youtube.com/channel/UCLNMge-FeeicPfXTyyeKBXQ?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="watch-card"
              style={{ display: 'block', height: '380px', marginBottom: '14px', textDecoration: 'none' }}
              aria-label="Visit PiP Blocks YouTube channel"
            >
              <img
                src="/event-panel-2.jpg"
                alt="PiP Blocks panel session — real event photography"
                loading="lazy"
                style={{ objectPosition: '50% 25%' }}
              />
              <div className="watch-overlay">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  {/* Play button circle */}
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    background: 'var(--orange)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="white" aria-hidden="true">
                      <polygon points="2,1 13,8 2,15" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '18px', color: 'white', marginBottom: '2px' }}>
                      PiP Blocks — YouTube Channel
                    </p>
                    <p style={{ fontSize: '12px', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' }}>
                      Education · Market Analysis · Events
                    </p>
                  </div>
                </div>
              </div>
            </a>

            {/* Two smaller watch cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', marginBottom: '28px' }}>
              {[
                { src: '/9B9A8705.jpg', pos: '50% 20%', label: 'Market Education', sub: 'Understanding price action and structure' },
                { src: '/speaker-presentation.jpg', pos: '50% 20%', label: 'Live Events', sub: 'Real PiP Blocks educational sessions' },
              ].map(({ src, pos, label, sub }) => (
                <a
                  key={label}
                  href="https://youtube.com/channel/UCLNMge-FeeicPfXTyyeKBXQ?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="watch-card"
                  style={{ display: 'block', height: '200px', textDecoration: 'none' }}
                >
                  <img src={src} alt={label} loading="lazy" style={{ objectPosition: pos }} />
                  <div className="watch-overlay">
                    <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '15px', color: 'white', marginBottom: '3px' }}>{label}</p>
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>{sub}</p>
                  </div>
                </a>
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
          ABOUT
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--cream-dark)', padding: '0', borderTop: '1px solid var(--border)', overflow: 'hidden' }}>
        <div className="container">
          <div
            ref={r8}
            className="reveal lg:grid-cols-2"
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0' }}
          >
            {/* Photo */}
            <div
              style={{
                position: 'relative',
                minHeight: '400px',
                overflow: 'hidden',
                background: 'var(--charcoal)',
                order: 2,
              }}
              className="lg:order-first"
            >
              <img
                src="/9B9A8732.jpg"
                alt="PiP Blocks community — traders at an educational event"
                className="w-full h-full object-cover"
                loading="lazy"
                style={{ position: 'absolute', inset: 0, objectPosition: '50% 30%' }}
              />
              <div style={{
                position: 'absolute', bottom: '20px', left: '20px',
                background: 'rgba(20,25,15,0.75)', backdropFilter: 'blur(6px)',
                borderRadius: '10px', padding: '8px 14px',
              }}>
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase' }}>
                  The PiP Blocks Community
                </p>
              </div>
            </div>

            {/* Text */}
            <div style={{ padding: 'clamp(40px, 6vw, 72px) clamp(24px, 5vw, 60px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', order: 1 }}>
              <p className="eyebrow" style={{ marginBottom: '12px' }}>About PiP Blocks</p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: '20px',
                }}
              >
                More than charts. A community built to grow.
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '14px' }}>
                PiP Blocks is a Forex education and trading community built around one simple idea: understanding matters. We create room for traders to learn market concepts, exchange ideas and develop the discipline that trading demands.
              </p>
              <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '28px' }}>
                From structured mentorship to community learning, everything we do focuses on helping people become more thoughtful and process-driven in the markets.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <img src="/pip-mark.png" alt="PiP Blocks" style={{ width: '44px', height: '44px', objectFit: 'contain', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--cream-02)' }} />
                <div>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '14px', color: 'var(--charcoal)' }}>PiP Blocks</p>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.04em' }}>Learn · Analyse · Develop</p>
                </div>
              </div>
              <Link to="/about" className="btn btn-outline" style={{ alignSelf: 'flex-start' }}>
                About the academy →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          COMMUNITY SECTION
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--charcoal)', padding: '80px 0 88px' }}>
        <div className="container">
          <div ref={r9} className="reveal">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px 60px' }} className="lg:grid-cols-2 lg:items-center">
              <div>
                <p className="eyebrow eyebrow--white" style={{ marginBottom: '12px' }}>Community</p>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 800,
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    color: 'var(--white)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    marginBottom: '16px',
                  }}
                >
                  Trade together. Grow together.
                </h2>
                <p style={{ fontSize: '15.5px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: '420px', marginBottom: '28px' }}>
                  Join a community of traders learning alongside each other — sharing market ideas, educational discussions and analysis in an open, educational Telegram group.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a href="https://t.me/pipblcksfxhuz" target="_blank" rel="noopener noreferrer" className="btn btn-orange">
                    Join the Community ↗
                  </a>
                  <a href="https://wa.me/233538132060" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">
                    WhatsApp →
                  </a>
                </div>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.28)', marginTop: '14px' }}>
                  Ideas for education, not financial advice.
                </p>
              </div>

              {/* Photo grid — mixing old and new */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                {[
                  { src: '/community-audience.jpg', pos: '50% 30%', h: '200px' },
                  { src: '/event-panel-3.jpg',      pos: '50% 20%', h: '200px' },
                  { src: '/9B9A8723.jpg',            pos: '50% 25%', h: '160px' },
                  { src: '/wide-seminar.jpg',         pos: '50% 40%', h: '160px' },
                ].map(({ src, pos, h }) => (
                  <div
                    key={src}
                    style={{ height: h, borderRadius: 'var(--radius)', overflow: 'hidden', background: 'rgba(255,255,255,0.05)' }}
                  >
                    <img
                      src={src}
                      alt="PiP Blocks community event"
                      loading="lazy"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: pos, transition: 'transform 0.5s ease' }}
                      onMouseEnter={e => ((e.target as HTMLImageElement).style.transform = 'scale(1.05)')}
                      onMouseLeave={e => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FIND YOUR FIT — 6-question interactive
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--cream-dark)', padding: '80px 0 88px', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div ref={r10} className="reveal">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px 60px', alignItems: 'start' }} className="lg:grid-cols-2">
              <div>
                <p className="eyebrow" style={{ marginBottom: '12px' }}>Find Your Fit</p>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 800,
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    marginBottom: '16px',
                  }}
                >
                  Not sure where to begin?
                </h2>
                <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '380px' }}>
                  Answer six quick questions and we'll point you to the most relevant PiP Blocks next step — mentorship, community or content.
                </p>
              </div>
              <div>
                <Finder />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════ */}
      <section id="faq" style={{ background: 'var(--cream)', padding: '80px 0 88px' }}>
        <div className="container">
          <div ref={r11} className="reveal">
            <p className="eyebrow" style={{ marginBottom: '12px' }}>FAQ</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px 60px', marginBottom: '40px' }} className="lg:grid-cols-2">
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                Questions before you begin?
              </h2>
              <div>
                <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7, margin: '0 0 16px' }}>
                  Here are the most common questions about PiP Blocks and the mentorship programme.
                </p>
                <a href="https://t.me/pipblockfx" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                  Ask us directly ↗
                </a>
              </div>
            </div>

            <div style={{ maxWidth: '760px' }}>
              {FAQ.map((item, i) => (
                <AccordionItem
                  key={i}
                  q={item.q}
                  a={item.a}
                  idx={i}
                  openIdx={openFaq}
                  setOpen={setOpenFaq}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', background: 'var(--charcoal)', overflow: 'hidden', padding: '88px 0' }}>
        {/* Background photo */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="/9B9A8756.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            loading="lazy"
            style={{ objectPosition: '50% 35%', opacity: 0.22 }}
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', alignItems: 'center' }} className="lg:grid-cols-2">
            <div>
              <p className="eyebrow eyebrow--white" style={{ marginBottom: '12px' }}>Your Next Step</p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 5vw, 3.6rem)',
                  color: 'var(--white)',
                  lineHeight: 1.06,
                  letterSpacing: '-0.03em',
                  marginBottom: '16px',
                }}
              >
                Build knowledge. Trade with purpose.
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: '420px' }}>
                Take the next step with structured mentorship, practical learning and a community that keeps you connected to the journey.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} className="lg:items-end">
              <a
                href="https://wa.me/233538132060"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-orange btn-lg"
                style={{ width: '100%', maxWidth: '320px' }}
              >
                Explore Mentorship →
              </a>
              <a
                href="https://t.me/pipblcksfxhuz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white btn-lg"
                style={{ width: '100%', maxWidth: '320px' }}
              >
                Join the Community ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
