import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutPage() {
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
            <p className="eyebrow eyebrow--white" style={{ marginBottom: '16px' }}>About PiP Blocks</p>
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
              More than trading. A community built to grow.
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, maxWidth: '500px' }}>
              PiP Blocks is a Forex education and trading community focused on market understanding, discipline and continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section style={{ background: 'var(--cream)', padding: '80px 0 88px' }}>
        <div className="container">
          <div
            ref={r2}
            className="reveal lg:grid-cols-2"
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px 60px', alignItems: 'center' }}
          >
            {/* Photo */}
            <div
              style={{
                aspectRatio: '16/10',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                background: 'var(--charcoal)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <img
                src="/event-panel.jpg"
                alt="PiP Blocks panel session — three speakers at a live educational event"
                className="w-full h-full object-cover"
                loading="lazy"
                style={{ objectPosition: '50% 25%' }}
              />
            </div>

            {/* Text */}
            <div>
              <p className="eyebrow" style={{ marginBottom: '12px' }}>Our Story</p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: '20px',
                }}
              >
                Great traders are developed, not born.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.75 }}>
                  At PiP Blocks, we believe the market is learnable. With the right structure, the right environment and the right mindset, traders can develop a genuine understanding of price action, risk and discipline.
                </p>
                <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.75 }}>
                  We created an academy and community where learning is treated as a process — not a shortcut. Our focus is on helping traders build market understanding, develop consistent habits and approach each session with clarity and purpose.
                </p>
                <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.75 }}>
                  From structured mentorship to open community discussions, everything we do at PiP Blocks is built around one idea: understanding matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: 'var(--cream-dark)', padding: '80px 0 88px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div ref={r3} className="reveal">
            <p className="eyebrow" style={{ marginBottom: '12px' }}>What We Stand For</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '36px',
              }}
            >
              Three principles that guide everything.
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '16px' }} className="md:grid-cols-3">
              {[
                {
                  n: '01',
                  title: 'Education',
                  desc: 'Practical, structured learning that develops real market understanding — not just surface-level patterns or shortcuts.',
                  bg: 'var(--orange)',
                },
                {
                  n: '02',
                  title: 'Discipline',
                  desc: 'Building the mindset and routine that separates consistent traders from impulsive ones — over the long run.',
                  bg: 'var(--charcoal)',
                },
                {
                  n: '03',
                  title: 'Community',
                  desc: 'Growing alongside like-minded traders in a focused, supportive environment where progress is shared and encouraged.',
                  bg: 'var(--muted)',
                },
              ].map(({ n, title, desc, bg }) => (
                <div key={n} className="card" style={{ padding: '28px', background: 'var(--cream-02)' }}>
                  <div
                    style={{
                      width: '44px', height: '44px', borderRadius: '10px',
                      background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '12px', fontWeight: 800, color: 'white', letterSpacing: '0.03em',
                      marginBottom: '16px',
                    }}
                  >
                    {n}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700, fontSize: '19px',
                      color: 'var(--charcoal)', marginBottom: '10px',
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.65 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section style={{ background: 'var(--charcoal)', padding: '80px 0 88px' }}>
        <div className="container">
          <div ref={r4} className="reveal">
            <p className="eyebrow eyebrow--white" style={{ marginBottom: '12px' }}>Real Events. Real People.</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                color: 'var(--white)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '32px',
              }}
            >
              Where learning happens in person.
            </h2>

            {/* Large featured */}
            <div
              style={{
                height: '420px',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                background: '#111',
                marginBottom: '12px',
              }}
            >
              <img
                src="/event-panel-3.jpg"
                alt="PiP Blocks wide panel session — live educational event with four speakers"
                className="w-full h-full object-cover"
                loading="lazy"
                style={{ objectPosition: '50% 25%' }}
              />
            </div>

            {/* Three smaller */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '20px' }}>
              {[
                { src: '/9B9A8706.jpg', pos: '50% 20%', alt: 'PiP Blocks seminar' },
                { src: '/speaker-presentation.jpg', pos: '50% 20%', alt: 'PiP Blocks speaker presentation' },
                { src: '/9B9A8732.jpg', pos: '50% 25%', alt: 'PiP Blocks community audience' },
              ].map(({ src, pos, alt }) => (
                <div key={src} style={{ height: '200px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: '#111' }}>
                  <img
                    src={src} alt={alt} loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: pos, transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => ((e.target as HTMLImageElement).style.transform = 'scale(1.04)')}
                    onMouseLeave={e => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
                  />
                </div>
              ))}
            </div>

            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>
              PiP Blocks hosts live educational events for traders at all stages.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--orange)', padding: '72px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: 'clamp(1.7rem, 4vw, 2.4rem)',
              color: 'var(--white)',
              lineHeight: 1.1,
              marginBottom: '14px',
            }}
          >
            Join the PiP Blocks community.
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.7, maxWidth: '440px', margin: '0 auto 28px' }}>
            Be part of a growing community of traders learning with structure and purpose.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://t.me/pipblcksfxhuz" target="_blank" rel="noopener noreferrer" className="btn btn-white">
              Join on Telegram →
            </a>
            <a href="https://wa.me/233538132060" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">
              Chat on WhatsApp ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
