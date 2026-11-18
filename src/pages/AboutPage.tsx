import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutPage() {
  const heroRef   = useScrollReveal();
  const storyRef  = useScrollReveal();
  const valuesRef = useScrollReveal();
  const photoRef  = useScrollReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div ref={heroRef} className="reveal" style={{ maxWidth: '640px' }}>
            <p className="section-label section-label--white mb-4">About PiP Blocks</p>
            <h1
              className="font-display text-white mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)' }}
            >
              More than trading. A community built to grow.
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, maxWidth: '500px' }}>
              PiP Blocks is a Forex education and trading community focused on market understanding, discipline and continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section style={{ background: 'var(--cream)', padding: '72px 0 80px' }}>
        <div className="container">
          <div ref={storyRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Featured image */}
            <div style={{ aspectRatio: '16/10', overflow: 'hidden', background: 'var(--charcoal)', flexShrink: 0 }}>
              <img
                src="/event-panel.jpg"
                alt="PiP Blocks panel session — live education event"
                className="w-full h-full object-cover"
                loading="lazy"
                style={{ objectPosition: '50% 30%' }}
              />
            </div>

            {/* Text */}
            <div>
              <p className="section-label mb-4">Our Story</p>
              <h2 className="font-display mb-6" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)' }}>
                Great traders are developed, not born.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75 }}>
                  At PiP Blocks, we believe the market is learnable. With the right structure, the right environment and the right mindset, traders can develop a genuine understanding of price action, risk and discipline.
                </p>
                <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75 }}>
                  We created an academy and community where learning is treated as a process — not a shortcut. Our focus is on helping traders build market understanding, develop consistent habits and approach each session with clarity and purpose.
                </p>
                <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75 }}>
                  From structured mentorship to open community discussions, everything we do at PiP Blocks is built around one idea: understanding matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: 'var(--cream-dark)', padding: '72px 0 80px', borderTop: '1px solid var(--cream-border)' }}>
        <div className="container">
          <div ref={valuesRef} className="reveal">
            <p className="section-label mb-4">What We Stand For</p>
            <h2 className="font-display mb-10" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)' }}>
              Our principles.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  n: '01',
                  title: 'Education',
                  desc: 'Practical, structured learning that develops real market understanding — not just surface-level patterns.',
                },
                {
                  n: '02',
                  title: 'Discipline',
                  desc: 'Building the mindset and routine that separates consistent traders from impulsive ones over the long run.',
                },
                {
                  n: '03',
                  title: 'Community',
                  desc: 'Growing alongside like-minded traders in a focused, supportive environment where progress is shared.',
                },
              ].map(({ n, title, desc }) => (
                <div key={n} className="card" style={{ background: 'var(--white)' }}>
                  <span
                    style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--orange)', display: 'block', marginBottom: '14px' }}
                  >
                    {n}
                  </span>
                  <h3 className="font-display mb-2" style={{ fontSize: '19px', letterSpacing: '-0.02em' }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GRID */}
      <section style={{ background: 'var(--charcoal)', padding: '72px 0 80px' }}>
        <div className="container">
          <div ref={photoRef} className="reveal">
            <p className="section-label section-label--white mb-4">Real Events. Real Learning.</p>
            <h2
              className="font-display text-white mb-10"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}
            >
              Where learning happens in person.
            </h2>

            {/* Large featured */}
            <div style={{ height: '400px', overflow: 'hidden', background: '#111', marginBottom: '12px' }}>
              <img
                src="/event-panel-3.jpg"
                alt="PiP Blocks live event — panel of speakers"
                className="w-full h-full object-cover"
                loading="lazy"
                style={{ objectPosition: '50% 25%' }}
              />
            </div>

            {/* Two smaller */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { src: '/speaker-portrait.jpg', pos: '50% 15%', alt: 'PiP Blocks speaker' },
                { src: '/event-panel-2.jpg',    pos: '50% 20%', alt: 'PiP Blocks event panel' },
              ].map(({ src, pos, alt }) => (
                <div key={src} style={{ height: '240px', overflow: 'hidden', background: '#111' }}>
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: pos }}
                  />
                </div>
              ))}
            </div>

            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
              PiP Blocks hosts live educational events for traders at all stages.
            </p>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section style={{ background: 'var(--orange)', padding: '72px 0' }}>
        <div className="container text-center">
          <h2
            className="font-display text-white"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', marginBottom: '16px' }}
          >
            Join the PiP Blocks community.
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.7, maxWidth: '440px', margin: '0 auto 2rem' }}>
            Be part of a growing community of traders learning with structure and purpose.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://t.me/pipblcksfxhuz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white"
            >
              Join on Telegram →
            </a>
            <a
              href="https://wa.me/233538132060"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white"
            >
              Chat on WhatsApp ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
