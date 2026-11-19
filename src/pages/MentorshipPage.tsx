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

function ModuleRow({ mod, openIdx, setOpen, myIdx }: {
  mod: typeof MODULES[0]; openIdx: number; setOpen: (i: number) => void; myIdx: number;
}) {
  const isOpen = myIdx === openIdx;
  const bodyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.style.maxHeight = isOpen ? `${bodyRef.current.scrollHeight}px` : '0';
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

export default function MentorshipPage() {
  const [openModule, setOpenModule] = useState(-1);
  const r1 = useScrollReveal();
  const r2 = useScrollReveal();
  const r3 = useScrollReveal();
  const r4 = useScrollReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div ref={r1} className="reveal" style={{ maxWidth: '640px' }}>
            <p className="eyebrow eyebrow--white" style={{ marginBottom: '16px' }}>PiP Blocks Mentorship</p>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
                color: 'var(--white)',
                lineHeight: 1.06,
                letterSpacing: '-0.03em',
                marginBottom: '20px',
              }}
            >
              A structured programme for serious traders.
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, maxWidth: '500px' }}>
              Gain the market knowledge, discipline and process you need to trade with structure and consistency.
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section style={{ background: 'var(--cream)', padding: '80px 0 88px' }}>
        <div className="container">
          <div ref={r2} className="reveal lg:grid-cols-2" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px 60px', alignItems: 'start' }}>
            {/* Left — inclusions */}
            <div>
              <p className="eyebrow" style={{ marginBottom: '12px' }}>What's Included</p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: '28px',
                }}
              >
                Everything in the programme.
              </h2>

              {/* Price callout */}
              <div
                className="card-ink"
                style={{ padding: '24px', background: 'var(--cream-02)', marginBottom: '20px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '12px' }}>
                  <div>
                    <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '4px' }}>
                      One-time fee
                    </p>
                    <p
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 800,
                        fontSize: '3.2rem',
                        color: 'var(--orange)',
                        lineHeight: 1,
                        letterSpacing: '-0.03em',
                      }}
                    >
                      $370
                    </p>
                  </div>
                  <span
                    style={{
                      background: 'var(--orange)',
                      color: 'white',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '6px 12px',
                      borderRadius: '8px',
                    }}
                  >
                    Lifetime
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--muted)' }}>No subscription. No recurring fees. Access never expires.</p>
              </div>

              {[
                { label: 'Delivery',       value: 'Zoom Meeting — Live & Pre-recorded' },
                { label: 'Group Access',   value: 'Private Telegram group included'    },
                { label: 'Updates',        value: 'Weekly market outlook'              },
                { label: 'Resources',      value: 'PDF books on trading'               },
                { label: 'Duration',       value: 'Six structured modules'             },
                { label: 'Access period',  value: 'Lifetime — no expiry'              },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--border)' }}
                >
                  <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>{label}</span>
                  <span style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--charcoal)', textAlign: 'right', maxWidth: '55%' }}>{value}</span>
                </div>
              ))}
            </div>

            {/* Right — CTA + photo */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="card-dark" style={{ padding: '28px' }}>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: '21px',
                    color: 'var(--white)',
                    marginBottom: '10px',
                  }}
                >
                  Ready to enquire?
                </h3>
                <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Reach out directly via WhatsApp or Telegram and the PiP Blocks team will walk you through the next steps personally.
                </p>
                <a
                  href="https://wa.me/233538132060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-orange"
                  style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}
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
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginTop: '14px' }}>
                  Enquiries handled personally. No automated responses.
                </p>
              </div>

              <div className="card" style={{ padding: '20px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '12px' }}>
                  What You'll Develop
                </p>
                {[
                  'Market structure reading ability',
                  'Disciplined risk management habits',
                  'Entry and execution process',
                  'Trading psychology & routine',
                  'Backtesting and journaling practice',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 0', borderBottom: '1px solid var(--border)' }}>
                    <div style={{
                      width: '20px', height: '20px', borderRadius: '50%',
                      background: 'rgba(232,75,30,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                        <polyline points="1,4 3.5,6.5 9,1" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span style={{ fontSize: '14px', color: 'var(--charcoal)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYLLABUS */}
      <section style={{ background: 'var(--cream-dark)', padding: '80px 0 88px', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div ref={r3} className="reveal">
            <p className="eyebrow" style={{ marginBottom: '12px' }}>The Syllabus</p>
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
                Every topic in the programme is covered below — from Forex foundations to building a sustainable trading routine.
              </p>
            </div>

            <div style={{ maxWidth: '800px' }}>
              {MODULES.map((mod, i) => (
                <ModuleRow key={mod.num} mod={mod} myIdx={i} openIdx={openModule} setOpen={setOpenModule} />
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '28px' }}>
              <a href="https://wa.me/233538132060" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Enquire about mentorship →
              </a>
              <a href="https://t.me/pipblockfx" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Telegram →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTOS */}
      <section style={{ background: 'var(--charcoal)', padding: '80px 0 88px' }}>
        <div className="container">
          <div ref={r4} className="reveal">
            <p className="eyebrow eyebrow--white" style={{ marginBottom: '24px' }}>Real Events. Real Learning.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '12px', marginBottom: '20px' }} className="md:grid-cols-2">
              {[
                { src: '/event-panel.jpg',   pos: '50% 25%', alt: 'PiP Blocks three-person panel — live event' },
                { src: '/9B9A8725.jpg',      pos: '50% 20%', alt: 'PiP Blocks presentation' },
              ].map(({ src, pos, alt }) => (
                <div key={src} style={{ aspectRatio: '4/3', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: '#111' }}>
                  <img
                    src={src} alt={alt} loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: pos, transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => ((e.target as HTMLImageElement).style.transform = 'scale(1.03)')}
                    onMouseLeave={e => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
                  />
                </div>
              ))}
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>
              PiP Blocks hosts live educational events for traders at all stages of the learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: 'var(--orange)', padding: '72px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: 'clamp(1.7rem, 4vw, 2.4rem)',
              color: 'var(--white)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '14px',
            }}
          >
            Take the next step in your trading.
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 28px' }}>
            A structured approach to forex education, lifetime access and a community to grow alongside.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/233538132060" target="_blank" rel="noopener noreferrer" className="btn btn-white">
              Enquire on WhatsApp →
            </a>
            <a href="https://t.me/pipblcksfxhuz" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">
              Join Community ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
