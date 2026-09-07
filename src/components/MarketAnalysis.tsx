import React from 'react';
import { TELEGRAM_URL } from '../data/siteData';

const COLS = [
  {
    label: 'ANALYSIS',
    title: 'Market Analysis',
    body:  'Market observations and technical analysis.',
  },
  {
    label: 'IDEAS',
    title: 'Trading Ideas',
    body:  'Trade setups and market opportunities shared within the community.',
  },
  {
    label: 'SIGNALS',
    title: 'Community Signals',
    body:  'Shared trading signals within the community channels.',
  },
];

export const MarketAnalysis: React.FC = () => (
  <section id="analysis" aria-label="Analysis and Signals" className="bg-white border-b border-pip-border">
    <div className="max-w-site mx-auto px-5 sm:px-8">

      {/* Label */}
      <div className="py-5 border-b border-pip-border">
        <span className="pip-label">05 — Analysis & Signals</span>
      </div>

      {/* Heading */}
      <div className="pt-10 pb-8 border-b border-pip-border">
        <h2
          className="font-display font-extrabold text-pip-charcoal max-w-2xl"
          style={{
            fontSize: 'clamp(1.7rem, 3vw, 2.8rem)',
            lineHeight: '1.08',
            letterSpacing: '-0.025em',
          }}
        >
          MARKET IDEAS,
          <br />SHARED WITH THE COMMUNITY.
        </h2>
      </div>

      {/* 3-column — thin vertical dividers, no rounded cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-pip-border border-b border-pip-border">
        {COLS.map(col => (
          <div key={col.label} className="py-9 md:px-9 first:pl-0 last:pr-0">
            <div
              className="pip-label mb-4"
              style={{ color: '#E53514', fontSize: '10px' }}
            >
              {col.label}
            </div>
            <h3
              className="font-display font-bold text-pip-charcoal mb-3"
              style={{ fontSize: '18px', letterSpacing: '-0.015em' }}
            >
              {col.title}
            </h3>
            <p className="text-[14px] text-pip-mid leading-[1.65] mb-6">
              {col.body}
            </p>
          </div>
        ))}
      </div>

      {/* CTA row */}
      <div className="py-6 flex items-center gap-4">
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-[11px]"
          aria-label="Enquire about trading signals on Telegram"
        >
          Enquire About Signals →
        </a>
      </div>

    </div>
  </section>
);
