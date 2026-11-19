import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ── SLIDER ──────────────────────────────────────────────────────── */
// Slide 1 MUST be the 3-person Ghana panel (event-panel.jpg / WA0051)
const SLIDES = [
  { src: '/event-panel.jpg',      alt: 'PiP Blocks panel discussion — three speakers seated on stage at Ghana educational event', pos: '50% 25%' },
  { src: '/9B9A8722.jpg',         alt: 'PiP Blocks seminar — presenter speaking at educational event',                             pos: '50% 20%' },
  { src: '/event-panel-3.jpg',    alt: 'PiP Blocks panel session — four speakers at Ghana event',                                  pos: '50% 22%' },
  { src: '/wide-seminar.jpg',     alt: 'PiP Blocks wide audience view — packed seminar hall',                                      pos: '50% 40%' },
  { src: '/event-panel-2.jpg',    alt: 'PiP Blocks Ghana panel — speakers and presentation screen',                                pos: '50% 25%' },
];

/* ── MODULES ─────────────────────────────────────────────────────── */
const MODULES = [
  { num: '00', title: 'Forex foundations & platform basics', items: ['Introduction to Forex Trading', 'Platform Setup & Chart Basics', 'Trading Mindset Introduction'] },
  { num: '01', title: 'Market structure & SNR',              items: ['Valid BOS (EEC/SMC)', 'Range Concept', 'SNR Basics', 'Market Pricing'] },
  { num: '02', title: 'Storyline & zone selection',          items: ['Zone Selection (SMC/EEC)', 'Types of EG', 'SNR Significant'] },
  { num: '03', title: 'Liquidity concepts',                  items: ['Liquidity Concept', 'Money Transfer'] },
  { num: '04', title: 'Trendlines & entry models',           items: ['SNR Trendlines', 'TL Kiss', 'TL Logics', 'Entry Model'] },
  { num: '05', title: 'Risk, psychology & routine',          items: ['Risk/Trade Management', 'Trading Psychology', 'Backtesting & Journaling', 'Building a Trading Routine', 'Review & Continuous Improvement'] },
];

/* ── FAQ ─────────────────────────────────────────────────────────── */
const FAQ = [
  { q: 'Is PiP Blocks suitable for beginners?',       a: 'Yes. The mentorship begins with Forex foundations, platform setup and trading mindset before moving into more advanced market concepts. No previous experience required.' },
  { q: 'What does the mentorship include?',            a: 'Six structured modules via live Zoom sessions and pre-recorded lessons, a private Telegram group, weekly market outlook and PDF trading resources. Access is lifetime.' },
  { q: 'How much is the mentorship?',                  a: 'The PiP Blocks mentorship is a one-time fee of $370 with lifetime access. No subscription, no recurring charges.' },
  { q: 'How are the lessons delivered?',               a: 'Via Zoom Meeting — both live and pre-recorded sessions. You also get access to a private Telegram group with the team and community.' },
  { q: 'Does PiP Blocks guarantee profits?',          a: 'No. Trading involves real financial risk. PiP Blocks provides education and market understanding, not profit guarantees. Never trade more than you can afford to lose.' },
  { q: 'How do I join the community?',                 a: 'The PiP Blocks Telegram community is free and open. Click any Join Community button on this page or visit t.me/pipblcksfxhuz directly.' },
];

/* ── HERO SLIDER ─────────────────────────────────────────────────── */
function HeroSlider() {
  const [current, setCurrent]        = useState(0);
  const [paused, setPaused]          = useState(false);
  const [userAct, setUserAct]        = useState(false);
  const touchX                       = useRef(0);
  const reduced                      = useRef(typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  const goTo = useCallback((i: number) => {
    setCurrent((i + SLIDES.length) % SLIDES.length);
    setUserAct(true);
    setTimeout(() => setUserAct(false), 8000);
  }, []);

  useEffect(() => {
    if (reduced.current || paused || userAct) return;
    const t = setInterval(() => setCurrent(c => (c + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, [paused, userAct]);

  useEffect(() => {
    const fn = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', fn);
    return () => document.removeEventListener('visibilitychange', fn);
  }, []);

  return (
    <div
      style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}
      onTouchStart={e => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={e => {
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
      }}
      aria-roledescription="photo slideshow"
    >
      {SLIDES.map((s, i) => (
        <div
          key={i}
          aria-hidden={i !== current}
          style={{
            position: 'absolute', inset: 0,
            opacity: i === current ? 1 : 0,
            transition: reduced.current ? 'none' : 'opacity 0.85s ease',
            zIndex: i === current ? 1 : 0,
          }}
        >
          <img
            src={s.src}
            alt={s.alt}
            fetchPriority={i === 0 ? 'high' : undefined}
            loading={i === 0 ? 'eager' : 'lazy'}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              objectPosition: s.pos,
              transform: i === current && !reduced.current ? 'scale(1.04)' : 'scale(1)',
              transition: i === current && !reduced.current ? 'transform 7s ease' : 'none',
            }}
          />
        </div>
      ))}

      {/* Badges */}
      <div style={{
        position: 'absolute', top: '16px', right: '16px', zIndex: 10,
        background: 'rgba(255,255,255,0.90)', backdropFilter: 'blur(8px)',
        borderRadius: '10px', padding: '8px 12px',
        display: 'flex', flexDirection: 'column', alignItems: 'flex-end',
      }}>
        <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.12em', color: 'var(--charcoal)', textTransform: 'uppercase', lineHeight: 1.3 }}>Real Events</span>
        <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.12em', color: 'var(--charcoal)', textTransform: 'uppercase', lineHeight: 1.3 }}>Real Learning</span>
      </div>

      {/* Caption */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10,
        padding: '36px 20px 20px',
        background: 'linear-gradient(to top, rgba(20,25,15,0.80) 0%, transparent 100%)',
      }}>
        <p style={{ fontSize: '16px', fontWeight: 700, color: 'white', lineHeight: 1.2, marginBottom: '3px' }}>
          Built around real learning.
        </p>
        <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' }}>
          PiP Blocks · Trading Academy
        </p>
      </div>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: '20px', right: '20px', display: 'flex', gap: '5px', zIndex: 11 }} role="tablist">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? '20px' : '6px', height: '6px',
              borderRadius: '3px', border: 'none', padding: 0, cursor: 'pointer',
              background: i === current ? 'white' : 'rgba(255,255,255,0.4)',
              transition: 'width 0.3s ease, background 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── MODULE ROW ──────────────────────────────────────────────────── */
function ModuleRow({ mod, openIdx, setOpen, myIdx }: {
  mod: typeof MODULES[0]; openIdx: number; setOpen: (i: number) => void; myIdx: number;
}) {
  const isOpen = myIdx === openIdx;
  const bodyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.style.maxHeight = isOpen ? `${bodyRef.current.scrollHeight}px` : '0';
  }, [isOpen]);

  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button
        type="button"
        onClick={() => setOpen(isOpen ? -1 : myIdx)}
        aria-expanded={isOpen}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', gap: '16px',
          padding: '16px 0', background: 'none', border: 'none', cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.12em', color: 'var(--orange)', textTransform: 'uppercase', minWidth: '72px', flexShrink: 0 }}>
          Module {mod.num}
        </span>
        <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--charcoal)', flex: 1 }}>{mod.title}</span>
        <svg
          width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--muted-light)" strokeWidth="2"
          style={{ flexShrink: 0, transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(45deg)' : 'none' }}
          aria-hidden="true"
        >
          <line x1="7" y1="1" x2="7" y2="13" /><line x1="1" y1="7" x2="13" y2="7" />
        </svg>
      </button>
      <div
        ref={bodyRef}
        style={{ maxHeight: 0, overflow: 'hidden', transition: 'max-height 0.35s ease' }}
        aria-hidden={!isOpen}
      >
        <ul style={{ margin: 0, paddingLeft: '88px', paddingBottom: '14px' }}>
          {mod.items.map(it => (
            <li key={it} style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.9 }}>{it}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── FAQ ITEM ────────────────────────────────────────────────────── */
function FaqItem({ q, a, idx, openIdx, setOpen }: {
  q: string; a: string; idx: number; openIdx: number; setOpen: (i: number) => void;
}) {
  const isOpen = idx === openIdx;
  const bodyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.style.maxHeight = isOpen ? `${bodyRef.current.scrollHeight}px` : '0';
  }, [isOpen]);

  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button
        type="button"
        onClick={() => setOpen(isOpen ? -1 : idx)}
        aria-expanded={isOpen}
        id={`faq-${idx}`}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px',
          padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{ fontSize: '15.5px', fontWeight: 600, color: 'var(--charcoal)', lineHeight: 1.3 }}>{q}</span>
        <svg
          width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--muted-light)" strokeWidth="2"
          style={{ flexShrink: 0, transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(45deg)' : 'none' }}
          aria-hidden="true"
        >
          <line x1="7" y1="1" x2="7" y2="13" /><line x1="1" y1="7" x2="13" y2="7" />
        </svg>
      </button>
      <div
        ref={bodyRef}
        style={{ maxHeight: 0, overflow: 'hidden', transition: 'max-height 0.35s ease' }}
        aria-labelledby={`faq-${idx}`}
        role="region"
      >
        <p style={{ fontSize: '14.5px', color: 'var(--muted)', lineHeight: 1.75, paddingBottom: '18px' }}>{a}</p>
      </div>
    </div>
  );
}

/* ── FINDER ──────────────────────────────────────────────────────── */
const FINDER_OPTS = [
  { k: 'A', l: "I'm new to Forex and need the foundations",    result: 'community' },
  { k: 'B', l: 'I want to improve my trading process',         result: 'mentorship' },
  { k: 'C', l: 'I want to learn with a trading community',     result: 'community' },
];
type FinderResult = { title: string; desc: string; cta: string; href: string; secondaryCta?: string; secondaryHref?: string };
const RESULTS: Record<string, FinderResult> = {
  mentorship: {
    title: 'PiP Blocks Mentorship',
    desc: 'The structured programme is a great fit. Six modules, lifetime access, Zoom sessions and a private Telegram group for $370.',
    cta: 'Enquire about mentorship →', href: 'https://wa.me/233538132060',
    secondaryCta: 'View details', secondaryHref: '/mentorship',
  },
  community: {
    title: 'Join the Community',
    desc: 'Start by joining the PiP Blocks Telegram community — free, open and full of active traders learning together.',
    cta: 'Join on Telegram →', href: 'https://t.me/pipblcksfxhuz',
    secondaryCta: 'Learn more', secondaryHref: '/community',
  },
};

function Finder() {
  const [chosen, setChosen]   = useState<string | null>(null);
  const [result, setResult]   = useState<FinderResult | null>(null);

  const submit = () => {
    if (!chosen) return;
    const opt = FINDER_OPTS.find(o => o.k === chosen);
    if (opt) setResult(RESULTS[opt.result]);
  };

  if (result) return (
    <div>
      <p className="eyebrow eyebrow--white" style={{ marginBottom: '10px' }}>Your recommendation</p>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.4rem', color: 'white', marginBottom: '10px', lineHeight: 1.2 }}>
        {result.title}
      </h3>
      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.60)', lineHeight: 1.7, marginBottom: '20px' }}>{result.desc}</p>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <a href={result.href} target="_blank" rel="noopener noreferrer" className="btn btn-orange btn-sm">{result.cta}</a>
        {result.secondaryCta && result.secondaryHref && (
          <Link to={result.secondaryHref} className="btn btn-outline-white btn-sm">{result.secondaryCta}</Link>
        )}
        <button type="button" onClick={() => { setChosen(null); setResult(null); }} className="btn btn-outline-white btn-sm">Start again</button>
      </div>
    </div>
  );

  return (
    <div>
      <p style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.75)', marginBottom: '14px' }}>
        What would help you most right now?
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
        {FINDER_OPTS.map(({ k, l }) => (
          <button
            key={k}
            type="button"
            onClick={() => setChosen(k)}
            aria-pressed={chosen === k}
            style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '13px 16px', borderRadius: 'var(--radius)',
              border: `1.5px solid ${chosen === k ? 'var(--orange)' : 'rgba(255,255,255,0.12)'}`,
              background: chosen === k ? 'rgba(232,75,30,0.12)' : 'rgba(255,255,255,0.04)',
              cursor: 'pointer', textAlign: 'left',
              transition: 'border-color 0.2s, background 0.2s',
            }}
          >
            <span style={{
              width: '26px', height: '26px', borderRadius: '8px', flexShrink: 0,
              background: chosen === k ? 'var(--orange)' : 'rgba(255,255,255,0.10)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '11px', fontWeight: 800, color: 'white', letterSpacing: '0.03em',
              transition: 'background 0.2s',
            }}>{k}</span>
            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.80)', fontWeight: 500 }}>{l}</span>
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={submit}
        disabled={!chosen}
        className="btn btn-orange btn-sm"
        style={{ opacity: chosen ? 1 : 0.4, cursor: chosen ? 'pointer' : 'not-allowed' }}
      >
        Find my starting point →
      </button>
    </div>
  );
}

/* ── PAGE ────────────────────────────────────────────────────────── */
export function HomePage() {
  const [openModule, setOpenModule] = useState(-1);
  const [openFaq, setOpenFaq]       = useState(-1);

  const r1  = useScrollReveal();
  const r2  = useScrollReveal();
  const r3  = useScrollReveal();
  const r4  = useScrollReveal();
  const r5  = useScrollReveal();
  const r6  = useScrollReveal();
  const r7  = useScrollReveal();
  const r8  = useScrollReveal();
  const r9  = useScrollReveal();
  const r10 = useScrollReveal();

  return (
    <>
      {/* ══════════════════════════════════════
          HERO — cream bg, left content, right card slider
      ══════════════════════════════════════ */}
      <section style={{ background: 'var(--cream)', padding: 'clamp(48px, 8vw, 96px) 0 clamp(40px, 6vw, 72px)' }}>
        <div className="container">
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', alignItems: 'center' }}
            className="lg:grid-cols-2 lg:gap-16"
          >
            {/* LEFT — content */}
            <div ref={r1} className="reveal">
              <p className="eyebrow" style={{ marginBottom: '20px' }}>
                PiP Blocks Trading Academy · Ghana
              </p>

              <h1 style={{ marginBottom: '20px', margin: '0 0 20px' }}>
                <span style={{
                  display: 'block',
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                  color: 'var(--charcoal)',
                  lineHeight: 1.03,
                  letterSpacing: '-0.03em',
                }}>
                  Learn the market.
                </span>
                <span style={{
                  display: 'block',
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontWeight: 800,
                  fontSize: 'clamp(2.3rem, 5vw, 3.8rem)',
                  color: 'var(--orange)',
                  lineHeight: 1.06,
                  letterSpacing: '-0.02em',
                }}>
                  Build your edge.
                </span>
              </h1>

              <p style={{
                fontSize: 'clamp(15px, 2vw, 17px)',
                color: 'var(--muted)',
                lineHeight: 1.72,
                maxWidth: '460px',
                margin: '20px 0 28px',
              }}>
                Practical forex education, structured mentorship and a community built around understanding price, developing discipline and improving your trading process.
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '28px' }}>
                <Link to="/mentorship" className="btn btn-orange">
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

              {/* Trust strip */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ display: 'flex' }}>
                  {[{ l: 'P', bg: 'var(--orange)' }, { l: 'FX', bg: 'var(--charcoal)' }, { l: '01', bg: 'var(--muted)' }].map(({ l, bg }, i) => (
                    <div
                      key={l}
                      style={{
                        width: '30px', height: '30px', borderRadius: '50%',
                        background: bg, border: '2.5px solid var(--cream)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '10px', fontWeight: 800, color: 'white',
                        marginLeft: i > 0 ? '-8px' : 0, flexShrink: 0,
                      }}
                    >{l}</div>
                  ))}
                </div>
                <div>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--charcoal)', lineHeight: 1.3 }}>
                    Education first. Process over promises.
                  </p>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '1px' }}>
                    Learn, analyse and grow with PiP Blocks.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — photo card slider */}
            <div
              style={{
                position: 'relative',
                height: 'clamp(340px, 50vw, 520px)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <HeroSlider />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MARKET TICKER
      ══════════════════════════════════════ */}
      <div
        className="ticker-wrap"
        style={{ background: 'var(--charcoal)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '13px 0', overflow: 'hidden' }}
        aria-hidden="true"
      >
        <div className="ticker-track">
          {[
            { label: 'Forex',       icon: '↗' },
            { label: 'Synthetics',  icon: '~' },
            { label: 'Metals',      icon: '◈' },
            { label: 'Indices',     icon: '▪' },
            { label: 'Commodities', icon: '◉' },
            { label: 'Crypto',      icon: '₿' },
            { label: 'Forex',       icon: '↗' },
            { label: 'Synthetics',  icon: '~' },
            { label: 'Metals',      icon: '◈' },
            { label: 'Indices',     icon: '▪' },
            { label: 'Commodities', icon: '◉' },
            { label: 'Crypto',      icon: '₿' },
          ].map((m, i) => (
            <div
              key={i}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0 32px', borderRight: '1px solid rgba(255,255,255,0.07)', flexShrink: 0 }}
            >
              <span style={{ color: 'var(--orange)', fontSize: '14px' }}>{m.icon}</span>
              <span style={{ fontSize: '11.5px', fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.60)', textTransform: 'uppercase' }}>
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          EXPLORE — 2 offer cards side by side
      ══════════════════════════════════════ */}
      <section style={{ background: 'var(--cream)', padding: '80px 0 88px' }}>
        <div className="container">
          <div ref={r2} className="reveal">
            <p className="eyebrow" style={{ marginBottom: '12px' }}>Forex Insights & Mentorship</p>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.9rem, 4vw, 3rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: 'var(--charcoal)',
              maxWidth: '540px',
              marginBottom: '8px',
            }}>
              Explore education, mentorship and community.
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '480px', marginBottom: '36px' }}>
              Choose a structured way to learn the market, work on your trading process and stay connected with other traders.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '16px' }} className="md:grid-cols-2">
              {/* Mentorship card */}
              <div className="card" style={{ padding: '28px 28px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <p style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '6px' }}>
                      Structured Learning
                    </p>
                    <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: '1.3rem', color: 'var(--charcoal)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                      PiP Blocks<br />Mentorship
                    </h3>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: '2rem', color: 'var(--charcoal)', lineHeight: 1 }}>$370</p>
                    <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '2px' }}>Lifetime Access</p>
                  </div>
                </div>

                <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '16px' }}>
                  A guided programme covering Forex foundations, market structure, liquidity, entries, risk management and trading psychology.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', marginBottom: '20px' }}>
                  {['Live & pre-recorded lessons', 'Market structure & liquidity', 'Entry models & SNR', 'Risk & trade management', 'Private Telegram group', 'Weekly market outlook', 'PDF learning resources', 'Lifetime access'].map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
                      <svg width="13" height="12" viewBox="0 0 13 12" fill="none" aria-hidden="true" style={{ marginTop: '3px', flexShrink: 0 }}>
                        <circle cx="6.5" cy="6" r="6" fill="rgba(232,75,30,0.12)" />
                        <polyline points="4,6 5.8,8 9,4" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: '12.5px', color: 'var(--charcoal)', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                  <div>
                    <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.4 }}>Online learning</p>
                    <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.4 }}>Live + recorded format</p>
                  </div>
                  <a href="https://wa.me/233538132060" target="_blank" rel="noopener noreferrer" className="btn btn-orange btn-sm">
                    Enquire now →
                  </a>
                </div>
              </div>

              {/* Community card */}
              <div className="card-dark" style={{ padding: '28px 28px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <p style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '6px' }}>
                      Learn Together
                    </p>
                    <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: '1.3rem', color: 'white', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                      Community &<br />Market Insights
                    </h3>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: '2rem', color: 'rgba(255,255,255,0.90)', lineHeight: 1 }}>Open</p>
                    <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.40)', marginTop: '2px' }}>Telegram Community</p>
                  </div>
                </div>

                <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: '16px' }}>
                  Stay connected to an education-led trading community. Follow market discussions and keep developing your understanding.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', marginBottom: '20px' }}>
                  {['Forex education and discussion', 'Market breakdowns and ideas', 'Trader mindset conversations', 'Community updates', 'Learning alongside other traders', 'Direct route to the PiP Blocks team'].map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
                      <svg width="13" height="12" viewBox="0 0 13 12" fill="none" aria-hidden="true" style={{ marginTop: '3px', flexShrink: 0 }}>
                        <circle cx="6.5" cy="6" r="6" fill="rgba(232,75,30,0.15)" />
                        <polyline points="4,6 5.8,8 9,4" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div>
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.4 }}>Public community</p>
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.4 }}>Ideas for education, not advice</p>
                  </div>
                  <a href="https://t.me/pipblcksfxhuz" target="_blank" rel="noopener noreferrer" className="btn btn-orange btn-sm">
                    Join Telegram ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          LEARNING JOURNEY
      ══════════════════════════════════════ */}
      <section style={{ background: 'var(--cream-dark)', padding: '80px 0 88px', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div ref={r3} className="reveal">
            <p className="eyebrow" style={{ marginBottom: '12px' }}>The Learning Journey</p>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              maxWidth: '480px',
              marginBottom: '10px',
            }}>
              From the basics to a process you understand.
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '480px', marginBottom: '36px' }}>
              A structured path through the key ideas covered in PiP Blocks mentorship.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '14px' }} className="md:grid-cols-3">
              {[
                { n: '01', title: 'Build your foundation', desc: 'Understand Forex, set up your platform, learn chart basics and develop the right learning mindset.' },
                { n: '02', title: 'Read market structure', desc: 'Study ranges, breaks of structure, zones, SNR, liquidity and the story behind price movement.' },
                { n: '03', title: 'Develop your process', desc: 'Work on entries, risk, trade management, psychology, backtesting and consistent review.' },
              ].map(({ n, title, desc }) => (
                <div
                  key={n}
                  className="card"
                  style={{ padding: '24px', background: 'var(--cream-02)' }}
                >
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px',
                    background: 'var(--charcoal)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '12px', fontWeight: 800, color: 'white', letterSpacing: '0.03em',
                    marginBottom: '14px',
                  }}>
                    {n}
                  </div>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '16px', color: 'var(--charcoal)', marginBottom: '8px' }}>{title}</h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.65 }}>{desc}</p>
                </div>
              ))}
            </div>

            <p style={{ marginTop: '28px' }}>
              <a href="#syllabus" className="eyebrow" style={{ textDecoration: 'none', display: 'inline-flex' }}>
                Explore the full mentorship syllabus below
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MARKETS
      ══════════════════════════════════════ */}
      <section style={{ background: 'var(--charcoal)', padding: '80px 0 88px' }}>
        <div className="container">
          <div ref={r4} className="reveal">
            <p className="eyebrow eyebrow--white" style={{ marginBottom: '12px' }}>Markets We Study</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px 60px', marginBottom: '36px' }} className="lg:grid-cols-2">
              <h2 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: 'white',
                margin: 0,
              }}>
                Understand the market<br />you're stepping into.
              </h2>
              <p style={{ fontSize: '15.5px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: '8px 0 0' }}>
                Explore a range of markets and learn to approach price action with context, patience and a clear plan.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '10px' }} className="md:grid-cols-3">
              {[
                { label: 'Forex',       desc: 'Currency pairs and price movement',  icon: '↗' },
                { label: 'Synthetics',  desc: 'Volatility-based markets',           icon: '~' },
                { label: 'Metals',      desc: 'Including gold and silver',           icon: '◈' },
                { label: 'Indices',     desc: 'Major global indices',                icon: '▪' },
                { label: 'Commodities', desc: 'Selected commodity markets',          icon: '◉' },
                { label: 'Crypto',      desc: 'Digital asset markets',               icon: '₿' },
              ].map(({ label, desc, icon }) => (
                <div
                  key={label}
                  style={{
                    padding: '20px', borderRadius: 'var(--radius-lg)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.03)',
                    display: 'flex', flexDirection: 'column', gap: '8px',
                    transition: 'background 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.background = 'rgba(255,255,255,0.06)'; el.style.borderColor = 'rgba(255,255,255,0.14)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.background = 'rgba(255,255,255,0.03)'; el.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                >
                  <span style={{ fontSize: '18px', color: 'var(--orange)', lineHeight: 1 }}>{icon}</span>
                  <p style={{ fontWeight: 700, fontSize: '15px', color: 'white', lineHeight: 1.2 }}>{label}</p>
                  <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.40)', lineHeight: 1.4 }}>{desc}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', marginTop: '20px', maxWidth: '500px', lineHeight: 1.5 }}>
              Market coverage is educational. The availability of analysis or discussion may vary by market and session.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WATCH & LEARN
      ══════════════════════════════════════ */}
      <section style={{ background: 'var(--cream)', padding: '80px 0 88px' }}>
        <div className="container">
          <div ref={r5} className="reveal">
            <p className="eyebrow" style={{ marginBottom: '12px' }}>Watch & Learn</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px 60px', marginBottom: '32px' }} className="lg:grid-cols-2">
              <h2 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                margin: 0,
              }}>
                Keep learning outside<br />the classroom.
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.7, margin: '8px 0 0' }}>
                Explore PiP Blocks content, event moments and educational discussions. Visit the YouTube channel for available videos and updates.
              </p>
            </div>

            {/* Large featured card */}
            <a
              href="https://youtube.com/channel/UCLNMge-FeeicPfXTyyeKBXQ?sub_confirmation=1"
              target="_blank" rel="noopener noreferrer"
              className="watch-card"
              style={{ display: 'block', height: '380px', marginBottom: '12px', textDecoration: 'none' }}
              aria-label="PiP Blocks YouTube channel"
            >
              <img src="/speaker-stage.jpg" alt="PiP Blocks educational session" loading="lazy" style={{ objectPosition: '50% 20%' }} />
              <div className="watch-overlay">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%', background: 'var(--orange)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <svg width="13" height="15" viewBox="0 0 13 15" fill="white" aria-hidden="true"><polygon points="2,1 12,7.5 2,14" /></svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '17px', color: 'white', lineHeight: 1.2 }}>
                      Learn through real conversations.
                    </p>
                    <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '3px' }}>
                      Education · Analysis · Mindset
                    </p>
                  </div>
                </div>
              </div>
            </a>

            {/* Two smaller */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '28px' }}>
              {[
                { src: '/9B9A8705.jpg', pos: '50% 20%', label: 'Market education',   sub: 'Build understanding, one concept at a time.' },
                { src: '/community-audience.jpg', pos: '50% 30%', label: 'Live learning', sub: 'See the people and moments behind the academy.' },
              ].map(({ src, pos, label, sub }) => (
                <a
                  key={label}
                  href="https://youtube.com/channel/UCLNMge-FeeicPfXTyyeKBXQ?sub_confirmation=1"
                  target="_blank" rel="noopener noreferrer"
                  className="watch-card"
                  style={{ display: 'block', height: '200px', textDecoration: 'none' }}
                >
                  <img src={src} alt={label} loading="lazy" style={{ objectPosition: pos }} />
                  <div className="watch-overlay">
                    <p style={{ fontWeight: 700, fontSize: '15px', color: 'white', marginBottom: '3px' }}>{label}</p>
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>{sub}</p>
                  </div>
                </a>
              ))}
            </div>

            <a href="https://youtube.com/channel/UCLNMge-FeeicPfXTyyeKBXQ?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="btn btn-orange">
              Visit PiP Blocks on YouTube ↗
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT — split, photo LEFT
      ══════════════════════════════════════ */}
      <section style={{ background: 'var(--cream-dark)', padding: '80px 0 88px', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div ref={r6} className="reveal lg:grid-cols-2" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px 60px', alignItems: 'center' }}>
            {/* Photo */}
            <div style={{ aspectRatio: '4/3', borderRadius: 'var(--radius-xl)', overflow: 'hidden', background: 'var(--charcoal)', position: 'relative', boxShadow: 'var(--shadow-lg)' }}>
              <img
                src="/community-audience.jpg"
                alt="The PiP Blocks community at a live educational event"
                className="w-full h-full object-cover"
                loading="lazy"
                style={{ objectPosition: '50% 35%' }}
              />
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px',
                background: 'rgba(20,25,15,0.72)', backdropFilter: 'blur(6px)',
                borderRadius: '10px', padding: '7px 12px',
              }}>
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>
                  The PiP Blocks Community
                </p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="eyebrow" style={{ marginBottom: '12px' }}>About PiP Blocks</p>
              <h2 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                marginBottom: '18px',
              }}>
                More than charts. A community built to grow.
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '14px' }}>
                PiP Blocks is a Forex education and trading community built around one simple idea: understanding matters. We create room for traders to learn market concepts, exchange ideas and develop the discipline that trading demands.
              </p>
              <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '24px' }}>
                From structured mentorship to community learning, the focus is on helping people become more thoughtful and process-driven in the markets.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <img src="/pip-mark.png" alt="PiP Blocks" style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--cream-02)' }} />
                <div>
                  <p style={{ fontWeight: 700, fontSize: '14px', color: 'var(--charcoal)', lineHeight: 1.2 }}>PiP Blocks</p>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.03em' }}>Learn · Analyse · Develop</p>
                </div>
              </div>
              <Link to="/about" className="btn btn-outline" style={{ alignSelf: 'flex-start' }}>
                About the academy →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FIND YOUR STARTING POINT
      ══════════════════════════════════════ */}
      <section style={{ background: 'var(--cream)', padding: '80px 0 88px' }}>
        <div className="container">
          <div ref={r7} className="reveal">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px 60px' }} className="lg:grid-cols-2 lg:items-center">
              <div>
                <p className="eyebrow" style={{ marginBottom: '12px' }}>Find Your Starting Point</p>
                <h2 style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  marginBottom: '14px',
                }}>
                  Not sure where to begin?
                </h2>
                <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '360px' }}>
                  Tell us what you're looking for and we'll point you to the most relevant PiP Blocks next step.
                </p>
              </div>
              <div className="card-dark" style={{ padding: '28px' }}>
                <Finder />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SYLLABUS
      ══════════════════════════════════════ */}
      <section id="syllabus" style={{ background: 'var(--cream-dark)', padding: '80px 0 88px', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div ref={r8} className="reveal">
            <p className="eyebrow" style={{ marginBottom: '12px' }}>Inside The Mentorship</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px 60px', marginBottom: '36px' }} className="lg:grid-cols-2">
              <h2 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                margin: 0,
              }}>
                A syllabus designed to build understanding.
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                Explore the topics included in the six-module mentorship programme.
              </p>
            </div>

            <div style={{ maxWidth: '720px' }}>
              {MODULES.map((mod, i) => (
                <ModuleRow key={mod.num} mod={mod} myIdx={i} openIdx={openModule} setOpen={setOpenModule} />
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '28px' }}>
              <a href="https://wa.me/233538132060" target="_blank" rel="noopener noreferrer" className="btn btn-orange">
                Ask about mentorship →
              </a>
              <Link to="/mentorship" className="btn btn-outline">View full programme</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section id="faq" style={{ background: 'var(--cream)', padding: '80px 0 88px' }}>
        <div className="container">
          <div ref={r9} className="reveal">
            <p className="eyebrow" style={{ marginBottom: '12px' }}>FAQ</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px 80px' }} className="lg:grid-cols-2">
              <div>
                <h2 style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  marginBottom: '14px',
                }}>
                  Questions before you begin?
                </h2>
                <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Here are the most common questions about PiP Blocks and the mentorship programme.
                </p>
                <a href="https://t.me/pipblockfx" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                  Ask us directly ↗
                </a>
              </div>
              <div>
                {FAQ.map((item, i) => (
                  <FaqItem key={i} q={item.q} a={item.a} idx={i} openIdx={openFaq} setOpen={setOpenFaq} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section style={{ position: 'relative', background: 'var(--charcoal)', overflow: 'hidden', padding: '88px 0' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="/9B9A8756.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            loading="lazy"
            style={{ objectPosition: '50% 35%', opacity: 0.18 }}
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div ref={r10} className="reveal lg:grid-cols-2" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', alignItems: 'center' }}>
            <div>
              <p className="eyebrow eyebrow--white" style={{ marginBottom: '12px' }}>Your Next Step</p>
              <h2 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: 1.06,
                letterSpacing: '-0.03em',
                color: 'white',
                marginBottom: '14px',
              }}>
                Build knowledge.<br />Trade with purpose.
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.50)', lineHeight: 1.7, maxWidth: '400px' }}>
                Take the next step with structured mentorship, practical learning and a community that keeps you connected to the journey.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} className="lg:items-end">
              <a
                href="https://wa.me/233538132060"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-orange btn-lg"
                style={{ width: '100%', maxWidth: '300px' }}
              >
                Explore mentorship →
              </a>
              <a
                href="https://t.me/pipblcksfxhuz"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-outline-white btn-lg"
                style={{ width: '100%', maxWidth: '300px' }}
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
