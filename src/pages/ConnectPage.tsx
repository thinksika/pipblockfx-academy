import React from 'react';
import {
  TELEGRAM_COMMUNITY_URL,
  TELEGRAM_DIRECT_URL,
  WHATSAPP_URL,
  YOUTUBE_URL,
  TIKTOK_URL,
  BROKER_URL,
} from '../data/siteData';

const LINKS = [
  {
    n: '01',
    title: 'Telegram Community',
    desc: 'Join the free PiP Blocks trading community.',
    action: 'Join Telegram',
    href: TELEGRAM_COMMUNITY_URL,
    note: null,
  },
  {
    n: '02',
    title: 'Direct Telegram',
    desc: 'Message the team directly for enquiries and support.',
    action: 'Message Us',
    href: TELEGRAM_DIRECT_URL,
    note: null,
  },
  {
    n: '03',
    title: 'WhatsApp',
    desc: 'Speak directly with the PiP Blocks team.',
    action: 'Chat on WhatsApp',
    href: WHATSAPP_URL,
    note: null,
  },
  {
    n: '04',
    title: 'YouTube',
    desc: 'Watch forex education content, market analysis and community updates.',
    action: 'Watch on YouTube',
    href: YOUTUBE_URL,
    note: null,
  },
  {
    n: '05',
    title: 'TikTok',
    desc: 'Follow PIPBLOCKFX for short-form content and market insights.',
    action: 'Follow on TikTok',
    href: TIKTOK_URL,
    note: null,
  },
  {
    n: '06',
    title: 'Recommended Broker',
    desc: 'Trade with IUX Markets — our recommended broker.',
    action: 'Open an Account',
    href: BROKER_URL,
    note: 'Affiliate / referral link. We may receive compensation. No obligation.',
  },
];

export const ConnectPage: React.FC = () => (
  <div>

    {/* Page header */}
    <section className="bg-white border-b border-pip-border">
      <div className="max-w-site mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="pip-label mb-4">Connect</div>
        <h1
          className="font-display font-extrabold text-pip-charcoal mb-3"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.07', letterSpacing: '-0.03em' }}
        >
          Connect With <span className="text-pip-red">PiP Blocks.</span>
        </h1>
        <p className="text-[16px] text-[#444] leading-[1.72] max-w-md">
          Every channel, every link. Pick the one that works best for you.
        </p>
      </div>
    </section>

    {/* Link rows */}
    <section className="bg-pip-surface border-b border-pip-border">
      <div className="max-w-site mx-auto px-5 sm:px-8">
        {LINKS.map((row) => (
          <a
            key={row.n}
            href={row.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 py-6 border-b border-pip-border last:border-b-0 hover:bg-white transition-colors -mx-5 sm:-mx-8 px-5 sm:px-8"
            aria-label={`${row.title} — ${row.desc}`}
          >
            {/* Number */}
            <div className="shrink-0 w-7">
              <span className="pip-label" style={{ color: '#E53514', fontSize: '9px' }}>{row.n}</span>
            </div>

            {/* Title */}
            <div className="sm:w-44 shrink-0">
              <span className="text-[16px] font-semibold text-pip-charcoal group-hover:text-pip-red transition-colors">
                {row.title}
              </span>
            </div>

            {/* Desc + affiliate note */}
            <div className="flex-1 min-w-0">
              <p className="text-[15px] text-[#555] leading-relaxed">{row.desc}</p>
              {row.note && (
                <p className="text-[12px] text-[#999] mt-0.5 italic">{row.note}</p>
              )}
            </div>

            {/* Action */}
            <div className="shrink-0">
              <span className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-pip-muted group-hover:text-pip-red transition-colors">
                {row.action}
                <span className="inline-block ml-1.5 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>

  </div>
);
