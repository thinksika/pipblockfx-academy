import React, { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const MODULES = [
  { num: '00', title: 'Forex Foundations & Platform Basics', items: ['Introduction to Forex Trading', 'Platform Setup & Chart Basics', 'Trading Mindset Introduction'] },
  { num: '01', title: 'Market Structure & SNR', items: ['Valid BOS (EEC/SMC)', 'Range Concept', 'SNR Basics', 'Market Pricing'] },
  { num: '02', title: 'Storyline & Zone Selection', items: ['Zone Selection (SMC/EEC)', 'Types of EG', 'SNR Significant'] },
  { num: '03', title: 'Liquidity Concepts', items: ['Liquidity Concept', 'Money Transfer'] },
  { num: '04', title: 'Trendlines & Entry Models', items: ['SNR Trendlines', 'TL Kiss', 'TL Logics', 'Entry Model'] },
  { num: '05', title: 'Risk, Psychology & Routine', items: ['Risk/Trade Management', 'Trading Psychology', 'Backtesting & Journaling', 'Building a Trading Routine', 'Review & Continuous Improvement'] },
];

function ModuleRow({ mod }: { mod: typeof MODULES[0] }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

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
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" strokeWidth="2" stroke="currentColor"
          style={{ flexShrink: 0, transition: 'transform 0.3s ease', transform: open ? 'rotate(45deg)' : 'none', color: 'var(--muted)' }}
          aria-hidden="true">
          <line x1="8" y1="2" x2="8" y2="14" /><line x1="2" y1="8" x2="14" y2="8" />
        </svg>
      </div>
      <div ref={bodyRef} className={`module-body ${open ? 'open' : ''}`}>
        <div className="module-body-content">
          <ul style={{ margin: 0, paddingLeft: '16px' }}>
            {mod.items.map((item) => (
              <li key={item} style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.9 }}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function MentorshipPage() {
  const heroRef     = useScrollReveal();
  const overviewRef = useScrollReveal();
  const syllabusRef = useScrollReveal();
  const photoRef    = useScrollReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div ref={heroRef} className="reveal" style={{ maxWidth: '640px' }}>
            <p className="section-label section-label--white mb-4">PiP Blocks Mentorship</p>
            <h1
              className="font-display text-white mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', marginBottom: '20px' }}
            >
              A structured programme for serious traders.
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, maxWidth: '500px' }}>
              Gain the market knowledge, discipline and process you need to trade with structure.
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section style={{ background: 'var(--cream)', padding: '72px 0 80px' }}>
        <div className="container">
          <div ref={overviewRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — inclusions */}
            <div>
              <p className="section-label mb-4">Mentorship Overview</p>
              <h2 className="font-display mb-8" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)' }}>
                What's included in the programme.
              </h2>
              {[
                { label: 'Price',          value: 'US$370' },
                { label: 'Delivery',       value: 'Zoom Meeting (Live + Pre-recorded)' },
                { label: 'Access',         value: 'Lifetime' },
                { label: 'Private Group',  value: 'Telegram group included' },
                { label: 'Weekly updates', value: 'Market outlook each week' },
                { label: 'Resources',      value: 'PDF books on trading' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between items-center py-4"
                  style={{ borderBottom: '1px solid var(--cream-border)' }}
                >
                  <span style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                    {label}
                  </span>
                  <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--charcoal)', textAlign: 'right', maxWidth: '55%' }}>
                    {value}
                  </span>
                </div>
              ))}

              {/* Price highlight */}
              <div
                className="mt-6 p-5"
                style={{ background: 'var(--cream-dark)', border: '1px solid var(--cream-border)' }}
              >
                <p style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '6px' }}>
                  One-time fee
                </p>
                <p className="font-display" style={{ fontSize: '3rem', color: 'var(--orange)', letterSpacing: '-0.03em' }}>
                  $370
                </p>
                <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>
                  Lifetime access. No recurring fees.
                </p>
              </div>
            </div>

            {/* Right — CTA card */}
            <div>
              <div className="card-dark" style={{ padding: '32px' }}>
                <h3 className="font-display text-white mb-4" style={{ fontSize: '22px' }}>
                  Ready to enquire?
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '24px' }}>
                  Reach out directly via WhatsApp or Telegram and the PiP Blocks team will walk you through the next steps.
                </p>
                <a
                  href="https://wa.me/233538132060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-center"
                >
                  Enquire on WhatsApp ↗
                </a>
                <a
                  href="https://t.me/pipblockfx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-white w-full justify-center mt-3"
                >
                  Message on Telegram ↗
                </a>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '16px', textAlign: 'center' }}>
                  Enquiries are handled personally. No automated responses.
                </p>
              </div>

              {/* What you'll develop */}
              <div className="mt-5 card" style={{ background: 'var(--white)' }}>
                <p style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '12px' }}>
                  What you'll develop
                </p>
                {[
                  'Market structure reading ability',
                  'Disciplined risk management habits',
                  'Entry and trade execution process',
                  'Trading psychology & routine',
                  'Backtesting and journaling practice',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 py-2.5" style={{ borderBottom: '1px solid var(--cream-dark)' }}>
                    <span style={{ color: 'var(--orange)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '13px', color: 'var(--charcoal)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYLLABUS */}
      <section style={{ background: 'var(--cream-dark)', padding: '72px 0 80px', borderTop: '1px solid var(--cream-border)' }}>
        <div className="container">
          <div ref={syllabusRef} className="reveal">
            <p className="section-label mb-4">Inside The Programme</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 mb-10">
              <h2 className="font-display" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)' }}>
                Six modules. One clear path.
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7 }}>
                Explore the topics covered in the mentorship programme, from foundations to execution.
              </p>
            </div>

            <div style={{ maxWidth: '760px' }}>
              {MODULES.map((mod) => (
                <ModuleRow key={mod.num} mod={mod} />
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/233538132060"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Ask about mentorship ↗
              </a>
              <a
                href="https://t.me/pipblockfx"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Message on Telegram →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO SECTION */}
      <section style={{ background: 'var(--charcoal)', padding: '72px 0 80px' }}>
        <div className="container">
          <div ref={photoRef} className="reveal">
            <p className="section-label section-label--white mb-8">Real Events. Real Learning.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { src: '/event-panel-3.jpg', pos: '50% 25%', alt: 'PiP Blocks panel session' },
                { src: '/speaker-presentation.jpg', pos: '50% 20%', alt: 'PiP Blocks speaker presenting' },
              ].map(({ src, pos, alt }) => (
                <div key={src} style={{ aspectRatio: '4/3', overflow: 'hidden', background: 'var(--charcoal)' }}>
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: pos, transition: 'transform 0.5s ease' }}
                    onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = 'scale(1.03)')}
                    onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
                  />
                </div>
              ))}
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '20px' }}>
              Real events, real learning. PiP Blocks hosts live educational events for traders.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: 'var(--orange)', padding: '72px 0' }}>
        <div className="container text-center">
          <h2
            className="font-display text-white"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', marginBottom: '16px' }}
          >
            Take the next step in your trading.
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 2rem' }}>
            A structured approach to forex education, with lifetime access and a community to grow alongside.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/233538132060"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white"
            >
              Enquire on WhatsApp →
            </a>
            <a
              href="https://t.me/pipblcksfxhuz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white"
            >
              Join community ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
