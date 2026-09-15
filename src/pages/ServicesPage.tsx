import React from 'react';
import { Link } from 'react-router-dom';
import { TELEGRAM_COMMUNITY_URL, TELEGRAM_DIRECT_URL, WHATSAPP_URL } from '../data/siteData';

const SERVICES = [
  {
    n: '01',
    title: 'Forex Education',
    desc: 'Market structure, liquidity, entry models and trading psychology — taught in a logical, progressive sequence.',
    action: 'View Mentorship',
    to: '/mentorship',
    internal: true,
  },
  {
    n: '02',
    title: 'Mentorship',
    desc: 'One structured program with six modules. Practical, direct and designed to build a real trading process.',
    action: 'Enquire →',
    href: TELEGRAM_DIRECT_URL,
    internal: false,
  },
  {
    n: '03',
    title: 'Market Analysis',
    desc: 'Regular market observations, trade setups and technical breakdowns shared through community channels.',
    action: 'Join Community',
    to: '/community',
    internal: true,
  },
  {
    n: '04',
    title: 'Trading Signals',
    desc: 'Shared trade ideas and market setups for community members. Educational, not personalised advice.',
    action: 'Join Telegram →',
    href: TELEGRAM_COMMUNITY_URL,
    internal: false,
  },
  {
    n: '05',
    title: 'Community',
    desc: '1,400+ traders on Telegram. Free access. Discussions, analysis, support and updates.',
    action: 'Join Community',
    to: '/community',
    internal: true,
  },
  {
    n: '06',
    title: 'Bootcamps & Training',
    desc: 'Intensive live programs. Strictly limited in capacity. Register directly through the PiP Blocks team.',
    action: 'View Bootcamp',
    to: '/bootcamp',
    internal: true,
  },
];

export const ServicesPage: React.FC = () => (
  <div>

    {/* Page header */}
    <section className="bg-white border-b border-pip-border">
      <div className="max-w-site mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="pip-label mb-4">Services</div>
        <h1
          className="font-display font-extrabold text-pip-charcoal mb-4 max-w-xl"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.07', letterSpacing: '-0.03em' }}
        >
          What PiP Blocks <span className="text-pip-red">Provides.</span>
        </h1>
        <p className="text-[16px] text-[#444] leading-[1.72] max-w-lg">
          Education, community and structured training — each with a clear purpose.
        </p>
      </div>
    </section>

    {/* Service rows */}
    <section className="bg-pip-surface border-b border-pip-border">
      <div className="max-w-site mx-auto px-5 sm:px-8">
        {SERVICES.map((s) => (
          <div
            key={s.n}
            className="flex flex-col sm:flex-row sm:items-center gap-4 py-7 border-b border-pip-border last:border-b-0"
          >
            <div className="shrink-0 w-8">
              <span className="pip-label" style={{ color: '#E53514', fontSize: '9px' }}>{s.n}</span>
            </div>
            <div className="sm:w-48 shrink-0">
              <h2 className="text-[16px] font-semibold text-pip-charcoal">{s.title}</h2>
            </div>
            <div className="flex-1">
              <p className="text-[15px] text-[#555] leading-[1.7] max-w-lg">{s.desc}</p>
            </div>
            <div className="shrink-0">
              {s.internal ? (
                <Link
                  to={(s as any).to}
                  className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-pip-red hover:underline"
                >
                  {s.action} →
                </Link>
              ) : (
                <a
                  href={(s as any).href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-pip-red hover:underline"
                >
                  {s.action}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="bg-white border-b border-pip-border py-12">
      <div className="max-w-site mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-[17px] font-semibold text-pip-charcoal mb-1">Have a question?</p>
          <p className="text-[15px] text-[#555]">Contact the PiP Blocks team directly.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={TELEGRAM_DIRECT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Message on Telegram →
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Chat on WhatsApp →
          </a>
        </div>
      </div>
    </section>

  </div>
);
