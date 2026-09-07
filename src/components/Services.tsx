import React, { useState } from 'react';
import { TELEGRAM_COMMUNITY_URL, TELEGRAM_DIRECT_URL } from '../data/siteData';

const scrollTo = (id: string) =>
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

interface Row {
  num:  string;
  title: string;
  desc:  string;
  cta:   string;
  action: () => void;
}

const ROWS: Row[] = [
  {
    num:   '01',
    title: 'MENTORSHIP',
    desc:  'Practical guidance focused on forex market structure, liquidity, entries, risk management and trader development.',
    cta:   'View Mentorship',
    action: () => scrollTo('#mentorship'),
  },
  {
    num:   '02',
    title: 'MARKET ANALYSIS',
    desc:  'Market observations and technical analysis shared through our community.',
    cta:   'Join Community',
    action: () => window.open(TELEGRAM_COMMUNITY_URL, '_blank', 'noopener,noreferrer'),
  },
  {
    num:   '03',
    title: 'TRADING IDEAS & SIGNALS',
    desc:  'Trading ideas and signals shared through the PiP Blocks community.',
    cta:   'Enquire',
    action: () => window.open(TELEGRAM_DIRECT_URL, '_blank', 'noopener,noreferrer'),
  },
  {
    num:   '04',
    title: 'BOOTCAMPS',
    desc:  'Focused practical programs built around trading concepts and guided development.',
    cta:   'View Bootcamp',
    action: () => scrollTo('#bootcamp'),
  },
];

export const Services: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" aria-label="Services" className="bg-pip-surface border-b border-pip-border">
      <div className="max-w-site mx-auto px-5 sm:px-8">

        {/* Label */}
        <div className="py-5 border-b border-pip-border">
          <span className="pip-label">02 — Services</span>
        </div>

        {/* Heading */}
        <div className="py-9 border-b border-pip-border">
          <h2
            className="font-display font-extrabold text-pip-charcoal"
            style={{
              fontSize: 'clamp(1.65rem, 2.5vw, 2.4rem)',
              lineHeight: '1.08',
              letterSpacing: '-0.025em',
            }}
          >
            WHAT WE DO
          </h2>
        </div>

        {/* Numbered rows with real CTA buttons */}
        {ROWS.map(row => {
          const isH = hovered === row.num;
          return (
            <div
              key={row.num}
              onMouseEnter={() => setHovered(row.num)}
              onMouseLeave={() => setHovered(null)}
              className="border-b border-pip-border transition-colors duration-150"
              style={{ backgroundColor: isH ? '#FFFFFF' : 'transparent' }}
            >
              <div className="py-6 sm:py-7 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">

                {/* Number */}
                <span
                  className="font-mono font-bold shrink-0 transition-colors duration-150 w-6"
                  style={{ fontSize: '12px', color: isH ? '#E53514' : '#CCCCCA' }}
                >
                  {row.num}
                </span>

                {/* Title + desc */}
                <div className="flex-1 min-w-0">
                  <div
                    className="font-bold uppercase mb-2 transition-colors duration-150"
                    style={{
                      fontSize: '12.5px',
                      letterSpacing: '0.08em',
                      color: isH ? '#E53514' : '#171717',
                    }}
                  >
                    {row.title}
                  </div>
                  <p className="text-pip-mid text-[14px] leading-[1.65] max-w-lg">
                    {row.desc}
                  </p>
                </div>

                {/* CTA button — real interactive control */}
                <div className="shrink-0">
                  <button
                    type="button"
                    onClick={row.action}
                    className="btn-ghost text-[11px]"
                    aria-label={row.cta}
                  >
                    {row.cta} →
                  </button>
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};
