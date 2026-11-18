import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function InsightsPage() {
  const heroRef    = useScrollReveal();
  const channelRef = useScrollReveal();
  const gridRef    = useScrollReveal();
  const ctaRef     = useScrollReveal();

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div ref={heroRef} className="reveal" style={{ maxWidth: '640px' }}>
            <p className="section-label section-label--white mb-4">Watch & Learn</p>
            <h1
              className="font-display text-white mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)' }}
            >
              Keep learning outside the classroom.
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, maxWidth: '500px' }}>
              Explore market education, event highlights and trading discussions from PiP Blocks.
            </p>
          </div>
        </div>
      </section>

      {/* CHANNEL FEATURE */}
      <section style={{ background: 'var(--cream)', padding: '72px 0 80px' }}>
        <div className="container">
          <div ref={channelRef} className="reveal">
            <p className="section-label mb-4">PiP Blocks on YouTube</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 mb-10 items-end">
              <h2 className="font-display" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)' }}>
                Find us on YouTube.
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7 }}>
                The PiP Blocks YouTube channel features market education content, event moments and educational discussions. Visit the channel to explore available videos.
              </p>
            </div>

            {/* Featured image */}
            <div
              className="watch-card"
              style={{ height: '460px' }}
            >
              <img
                src="/event-panel.jpg"
                alt="PiP Blocks panel session — learn through real conversations"
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 30%' }}
              />
              <div className="watch-card-label">
                <p className="font-display text-white" style={{ fontSize: '22px', marginBottom: '6px' }}>
                  Learn through real conversations.
                </p>
                <p style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>
                  Education · Analysis · Mindset
                </p>
              </div>
            </div>

            <div className="mt-6">
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
        </div>
      </section>

      {/* CONTENT GRID */}
      <section style={{ background: 'var(--cream-dark)', padding: '72px 0 80px', borderTop: '1px solid var(--cream-border)' }}>
        <div className="container">
          <div ref={gridRef} className="reveal">
            <p className="section-label mb-4">Content Highlights</p>
            <h2 className="font-display mb-10" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
              From the academy.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  img: '/speaker-portrait.jpg',
                  pos: '50% 10%',
                  alt: 'Market education',
                  tag: 'Market Education',
                  title: 'Understanding price and structure',
                  desc: 'Building a real understanding of how price moves, what drives structure and how traders can read markets with context.',
                },
                {
                  img: '/event-panel-2.jpg',
                  pos: '50% 20%',
                  alt: 'Live events',
                  tag: 'Live Events',
                  title: 'Real learning moments',
                  desc: 'See the faces and moments from PiP Blocks live educational events where traders come together.',
                },
                {
                  img: '/community-audience.jpg',
                  pos: '50% 30%',
                  alt: 'Community',
                  tag: 'Community',
                  title: 'Learning alongside others',
                  desc: 'Traders at all levels learning together — sharing ideas, discussing the market and developing alongside one another.',
                },
              ].map(({ img, pos, alt, tag, title, desc }) => (
                <div key={title} className="card" style={{ background: 'var(--white)', padding: 0, overflow: 'hidden' }}>
                  <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                    <img
                      src={img}
                      alt={alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: pos, transition: 'transform 0.5s ease' }}
                      onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = 'scale(1.04)')}
                      onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
                    />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <p style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                      {tag}
                    </p>
                    <h3 className="font-display mt-2 mb-2" style={{ fontSize: '16px', letterSpacing: '-0.02em' }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6, maxWidth: '500px', marginTop: '28px' }}>
              Content on the PiP Blocks YouTube channel is for educational purposes. It does not constitute financial or investment advice.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--charcoal)', padding: '72px 0' }}>
        <div className="container text-center">
          <div ref={ctaRef} className="reveal">
            <h2
              className="font-display text-white"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', marginBottom: '16px' }}
            >
              Ready to go deeper?
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: '400px', margin: '0 auto 2rem' }}>
              Explore the full PiP Blocks mentorship programme for structured learning with lifetime access.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/mentorship" className="btn btn-primary">
                Explore mentorship →
              </Link>
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
        </div>
      </section>
    </main>
  );
}
