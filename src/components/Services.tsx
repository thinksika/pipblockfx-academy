import React from 'react';
import { TELEGRAM_DIRECT_URL, TELEGRAM_COMMUNITY_URL, WHATSAPP_URL } from '../data/siteData';

interface ServiceRow {
  n: string;
  title: string;
  badge: string;
  desc: string;
  ctaText: string;
  href: string;
}

const SERVICES: ServiceRow[] = [
  {
    n: '01',
    title: 'Forex Mentorship',
    badge: 'GUIDED LEARNING',
    desc: 'Practical forex mentorship covering market structure, liquidity, entry models, risk management, backtesting and trading psychology.',
    ctaText: 'Enquire About Mentorship',
    href: TELEGRAM_DIRECT_URL,
  },
  {
    n: '02',
    title: 'Market Analysis',
    badge: 'DAILY INSIGHTS',
    desc: 'Regular market observations, technical analysis and trade setups shared through the PiP Blocks community channels.',
    ctaText: 'Join the Community',
    href: TELEGRAM_COMMUNITY_URL,
  },
  {
    n: '03',
    title: 'Trading Signals',
    badge: 'COMMUNITY IDEAS',
    desc: 'Stay connected to shared market ideas and signals from the PiP Blocks trading community in real time.',
    ctaText: 'Enquire Now',
    href: TELEGRAM_DIRECT_URL,
  },
  {
    n: '04',
    title: 'Bootcamps',
    badge: 'INTENSIVE PROGRAM',
    desc: 'Focused multi-day training programs covering advanced concepts, backtesting, personal entries and risk management.',
    ctaText: 'View Bootcamp',
    href: '#bootcamp',
  },
  {
    n: '05',
    title: 'Trading Community',
    badge: 'FREE ACCESS',
    desc: 'Join 1,400+ traders on Telegram. Access shared analysis, trade discussions, education content and community updates.',
    ctaText: 'Join Telegram',
    href: TELEGRAM_COMMUNITY_URL,
  },
  {
    n: '06',
    title: 'Broker Partnership',
    badge: 'RECOMMENDED BROKER',
    desc: 'Trade with our recommended broker — IUX Markets. No obligation, no pressure. Just a broker we trust for our own trading.',
    ctaText: 'Open an Account',
    href: 'https://iux.com/en/register?code=S9ncfCvV:affiliate',
  },
];

export const Services: React.FC = () => (
  <section id="services" aria-label="What we offer" className="bg-pip-surface border-b border-pip-border">
    <div className="max-w-site mx-auto px-5 sm:px-8">

      {/* Label row */}
      <div className="py-5 border-b border-pip-border">
        <span className="pip-label">03 — What We Offer</span>
      </div>

      {/* Heading */}
      <div className="pt-10 pb-8 sm:pt-12 border-b border-pip-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-6">
            <h2
              className="font-display font-extrabold text-pip-charcoal"
              style={{
                fontSize: 'clamp(1.55rem, 2.8vw, 2.4rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.025em',
              }}
            >
              What PiP Blocks{' '}
              <span className="text-pip-red">Provides.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pl-10 flex items-end">
            <p className="text-[14px] text-pip-mid leading-relaxed max-w-md">
              Education, community and structured programs — each designed to move you
              forward as a trader.
            </p>
          </div>
        </div>
      </div>

      {/* Service rows */}
      <div>
        {SERVICES.map((s) => {
          const isExternal = s.href.startsWith('http');
          return (
            <a
              key={s.n}
              href={s.href}
              {...(isExternal
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 py-6 border-b border-pip-border hover:bg-white transition-colors duration-150 -mx-5 sm:-mx-8 px-5 sm:px-8"
              aria-label={s.title}
            >
              {/* Number */}
              <div className="shrink-0 w-10">
                <span className="pip-label" style={{ color: '#E53514', fontSize: '9px' }}>{s.n}</span>
              </div>

              {/* Badge */}
              <div className="shrink-0 w-36 hidden sm:block">
                <span className="pip-label">{s.badge}</span>
              </div>

              {/* Title + desc */}
              <div className="flex-1 min-w-0">
                <div
                  className="font-semibold text-pip-charcoal group-hover:text-pip-red transition-colors mb-1"
                  style={{ fontSize: '15.5px', letterSpacing: '-0.01em' }}
                >
                  {s.title}
                </div>
                <p className="text-[13.5px] text-pip-mid leading-relaxed max-w-xl">
                  {s.desc}
                </p>
              </div>

              {/* CTA arrow */}
              <div className="shrink-0 flex items-center gap-2 sm:pl-6">
                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.09em] text-pip-muted group-hover:text-pip-red transition-colors"
                >
                  {s.ctaText}
                  <span
                    className="inline-block ml-1.5 transition-transform duration-150 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </span>
              </div>
            </a>
          );
        })}
      </div>

    </div>
  </section>
);
