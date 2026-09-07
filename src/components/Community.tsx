import React from 'react';
import { TELEGRAM_COMMUNITY_URL } from '../data/siteData';

const STATS = [
  { value: '1.4K+',  label: 'Community Subscribers' },
  { value: 'ACTIVE', label: 'Telegram Channel'       },
  { value: 'FOREX',  label: 'Market Focus'           },
];

export const Community: React.FC = () => (
  <section id="community" aria-label="Community" className="bg-pip-surface border-b border-pip-border">
    <div className="max-w-site mx-auto px-5 sm:px-8">

      {/* Label */}
      <div className="py-5 border-b border-pip-border">
        <span className="pip-label">04 — Community</span>
      </div>

      {/* Large editorial statement */}
      <div className="pt-14 pb-10 border-b border-pip-border">
        <h2
          className="font-display font-extrabold text-pip-charcoal"
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 4.2rem)',
            lineHeight: '1.05',
            letterSpacing: '-0.03em',
          }}
        >
          THE COMMUNITY IS
          <br />WHERE THE MARKET
          <br />CONVERSATION HAPPENS.
        </h2>
      </div>

      {/* Body + CTA / Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-12 py-12 lg:py-14 gap-10 lg:gap-0">

        {/* Left */}
        <div className="lg:col-span-6 lg:pr-14 lg:border-r lg:border-pip-border">
          <p className="text-[15.5px] text-pip-mid leading-[1.75] mb-8 max-w-md">
            Join PiP Blocks on Telegram to follow community updates, market
            discussions, analysis and shared trading ideas.
          </p>
          {/* Real button — not a text link */}
          <a
            href={TELEGRAM_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            aria-label="Join PiP Blocks Telegram community"
          >
            Join Telegram Community →
          </a>
        </div>

        {/* Right — stats */}
        <div className="lg:col-span-6 lg:pl-14">
          <div className="divide-y divide-pip-border">
            {STATS.map(s => (
              <div key={s.value} className="flex items-center justify-between py-5">
                <span className="pip-label">{s.label}</span>
                <span
                  className="font-display font-bold text-pip-charcoal"
                  style={{ fontSize: '15px', letterSpacing: '-0.02em' }}
                >
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);
