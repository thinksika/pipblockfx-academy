import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function InsightsPage() {
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
            <p className="eyebrow eyebrow--white" style={{ marginBottom: '16px' }}>Watch & Learn</p>
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
              Keep learning outside the classroom.
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, maxWidth: '500px' }}>
              Explore market education, event highlights and trading discussions from PiP Blocks.
            </p>
          </div>
        </div>
      </section>

      {/* YOUTUBE FEATURE */}
      <section style={{ background: 'var(--cream)', padding: '80px 0 88px' }}>
        <div className="container">
          <div ref={r2} className="reveal">
            <p className="eyebrow" style={{ marginBottom: '12px' }}>PiP Blocks on YouTube</p>
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
                Real conversations. Real education.
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                The PiP Blocks YouTube channel features market education content, event highlights and discussions. Everything is designed to help traders build a deeper understanding of the market.
              </p>
            </div>

            {/* Featured card */}
            <a
              href="https://youtube.com/channel/UCLNMge-FeeicPfXTyyeKBXQ?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="watch-card"
              style={{ display: 'block', height: '460px', marginBottom: '14px', textDecoration: 'none' }}
            >
              <img
                src="/event-panel.jpg"
                alt="PiP Blocks panel session — featured educational content"
                loading="lazy"
                style={{ objectPosition: '50% 25%' }}
              />
              <div className="watch-overlay">
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '50%',
                    background: 'var(--orange)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="white" aria-hidden="true">
                      <polygon points="2,1 15,9 2,17" />
                    </svg>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700, fontSize: '22px',
                        color: 'white', marginBottom: '4px',
                      }}
                    >
                      PiP Blocks YouTube Channel
                    </p>
                    <p style={{ fontSize: '12px', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' }}>
                      Education · Market Analysis · Events
                    </p>
                  </div>
                </div>
              </div>
            </a>

            {/* Two smaller */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '14px', marginBottom: '28px' }} className="sm:grid-cols-2">
              {[
                { src: '/9B9A8705.jpg',      pos: '50% 20%', label: 'Market Education', sub: 'Understanding structure and price action' },
                { src: '/speaker-portrait.jpg', pos: '50% 15%', label: 'Panel Sessions',   sub: 'Real discussion from live events' },
              ].map(({ src, pos, label, sub }) => (
                <a
                  key={label}
                  href="https://youtube.com/channel/UCLNMge-FeeicPfXTyyeKBXQ?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="watch-card"
                  style={{ display: 'block', height: '240px', textDecoration: 'none' }}
                >
                  <img src={src} alt={label} loading="lazy" style={{ objectPosition: pos }} />
                  <div className="watch-overlay">
                    <p
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700, fontSize: '17px',
                        color: 'white', marginBottom: '4px',
                      }}
                    >
                      {label}
                    </p>
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

      {/* CONTENT TOPICS */}
      <section style={{ background: 'var(--cream-dark)', padding: '80px 0 88px', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div ref={r3} className="reveal">
            <p className="eyebrow" style={{ marginBottom: '12px' }}>What We Cover</p>
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
              From the academy.
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '14px' }} className="md:grid-cols-3">
              {[
                {
                  img: '/speaker-stage.jpg',      pos: '50% 20%',
                  tag: 'Market Education',
                  title: 'Understanding price and structure',
                  desc: 'Building a real understanding of how price moves, what drives structure and how traders can read markets with context.',
                },
                {
                  img: '/event-panel-2.jpg',      pos: '50% 20%',
                  tag: 'Live Events',
                  title: 'Real learning moments',
                  desc: 'See the faces and moments from PiP Blocks live educational events where traders come together to learn and discuss.',
                },
                {
                  img: '/community-audience.jpg', pos: '50% 30%',
                  tag: 'Community',
                  title: 'Learning alongside others',
                  desc: 'Traders at all levels learning together — sharing ideas, discussing the market and developing alongside one another.',
                },
              ].map(({ img, pos, tag, title, desc }) => (
                <div key={title} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                  <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: 'var(--charcoal)' }}>
                    <img
                      src={img} alt={title} loading="lazy"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: pos, transition: 'transform 0.5s ease' }}
                      onMouseEnter={e => ((e.target as HTMLImageElement).style.transform = 'scale(1.04)')}
                      onMouseLeave={e => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
                    />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange)' }}>
                      {tag}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700, fontSize: '17px',
                        color: 'var(--charcoal)', marginTop: '8px', marginBottom: '8px',
                      }}
                    >
                      {title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '12px', color: 'var(--muted-light)', lineHeight: 1.6, maxWidth: '480px', marginTop: '24px' }}>
              Content on the PiP Blocks YouTube channel is for educational purposes and does not constitute financial or investment advice.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--charcoal)', padding: '72px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div ref={r4} className="reveal">
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: 'clamp(1.7rem, 4vw, 2.6rem)',
                color: 'var(--white)',
                lineHeight: 1.1,
                marginBottom: '16px',
              }}
            >
              Ready to go deeper?
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: '400px', margin: '0 auto 28px' }}>
              Explore the full PiP Blocks mentorship programme — structured learning with lifetime access.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/mentorship" className="btn btn-orange">Explore mentorship →</Link>
              <a href="https://t.me/pipblcksfxhuz" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">Join community ↗</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
