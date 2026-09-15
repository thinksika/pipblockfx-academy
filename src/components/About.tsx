import React from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';

export const About: React.FC = () => (
  <section id="about" aria-label="About PiP Blocks" className="bg-white border-b border-pip-border">
    <div className="max-w-site mx-auto px-5 sm:px-8">

      {/* Section label row */}
      <div className="py-5 border-b border-pip-border">
        <span className="pip-label">01 — About</span>
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 pt-10 pb-14 sm:pt-14 sm:pb-16 gap-10 lg:gap-0">

        {/* Left — Heading */}
        <div className="lg:col-span-5 lg:pr-10 lg:border-r lg:border-pip-border">
          <h2
            className="font-display font-extrabold text-pip-charcoal"
            style={{
              fontSize: 'clamp(1.7rem, 3vw, 2.6rem)',
              lineHeight: '1.09',
              letterSpacing: '-0.025em',
            }}
          >
            Structure. Discipline.{' '}
            <span className="text-pip-red">Results.</span>
          </h2>
        </div>

        {/* Right — Copy + Image */}
        <div className="lg:col-span-7 lg:pl-12">
          <div className="max-w-xl space-y-4 mb-8">
            <p className="text-[15px] text-pip-mid leading-[1.75]">
              PiP Blocks Forex Trading Academy was built on one principle:
              traders deserve a structured path — not noise. We focus on teaching
              traders to read markets properly, understand liquidity, and
              develop the psychological discipline that separates consistent
              traders from the crowd.
            </p>
            <p className="text-[15px] text-pip-mid leading-[1.75]">
              Through our mentorship program, community, bootcamps and
              market analysis, we work with traders at every level — from
              those just starting out to active traders refining their edge.
            </p>
          </div>

          {/* Quick facts strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border border-pip-border">
            {[
              { val: '1,400+', lbl: 'Community Members' },
              { val: 'FOREX', lbl: 'Primary Market' },
              { val: 'ACTIVE', lbl: 'Community Status' },
              { val: 'OPEN', lbl: 'Enrolment' },
            ].map((s, i) => (
              <div
                key={i}
                className="p-4 text-center border-r border-pip-border last:border-r-0 border-b sm:border-b-0"
              >
                <div
                  className="font-display font-extrabold text-pip-charcoal mb-0.5"
                  style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', letterSpacing: '-0.02em' }}
                >
                  {s.val}
                </div>
                <div className="pip-label" style={{ fontSize: '9px' }}>{s.lbl}</div>
              </div>
            ))}
          </div>

          {/*
           * ABOUT IMAGE PLACEHOLDER — Replace when real image is available
           * Suggested: A screenshot or photo of PiP Blocks platform, team, or community snapshot.
           */}
          <div className="mt-8">
            <ImagePlaceholder
              label="ABOUT_IMAGE — Replace with PiP Blocks team or community photo"
              aspectRatio="16/7"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
);
