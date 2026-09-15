import React from 'react';
import {
  TELEGRAM_COMMUNITY_URL,
  TELEGRAM_DIRECT_URL,
  WHATSAPP_URL,
  YOUTUBE_URL,
  TIKTOK_URL,
  BROKER_URL,
} from '../data/siteData';

interface ConnectRow {
  n: string;
  title: string;
  desc: string;
  buttonText: string;
  href: string;
}

const CONNECT_ROWS: ConnectRow[] = [
  {
    n: '01',
    title: 'TELEGRAM COMMUNITY',
    desc: 'Join our trading community and stay connected with daily analysis and updates.',
    buttonText: 'Join Telegram',
    href: TELEGRAM_COMMUNITY_URL,
  },
  {
    n: '02',
    title: 'DIRECT TELEGRAM',
    desc: 'Message the team directly for mentorship, bootcamp, and general enquiries.',
    buttonText: 'Message Us',
    href: TELEGRAM_DIRECT_URL,
  },
  {
    n: '03',
    title: 'WHATSAPP',
    desc: 'Speak directly with the PiP Blocks team via WhatsApp.',
    buttonText: 'Chat on WhatsApp',
    href: WHATSAPP_URL,
  },
  {
    n: '04',
    title: 'YOUTUBE',
    desc: 'Watch PiP Blocks content, forex education and community updates.',
    buttonText: 'Watch on YouTube',
    href: YOUTUBE_URL,
  },
  {
    n: '05',
    title: 'TIKTOK',
    desc: 'Follow PIPBLOCKFX for short-form content, updates and market ideas.',
    buttonText: 'Follow on TikTok',
    href: TIKTOK_URL,
  },
  {
    n: '06',
    title: 'RECOMMENDED BROKER',
    desc: 'Trade with IUX Markets — our recommended broker for executing trades.',
    buttonText: 'Open an Account',
    href: BROKER_URL,
  },
];

export const ConnectSection: React.FC = () => (
  <section id="connect" aria-label="Connect with PiP Blocks" className="bg-white border-b border-pip-border">
    <div className="max-w-site mx-auto px-5 sm:px-8">

      {/* Label row */}
      <div className="py-5 border-b border-pip-border">
        <span className="pip-label">11 — Connect</span>
      </div>

      {/* Heading */}
      <div className="pt-10 pb-8 sm:pt-12 border-b border-pip-border">
        <h2
          className="font-display font-extrabold text-pip-charcoal"
          style={{
            fontSize: 'clamp(1.55rem, 2.8vw, 2.4rem)',
            lineHeight: '1.1',
            letterSpacing: '-0.025em',
          }}
        >
          Connect With{' '}
          <span className="text-pip-red">PiP Blocks.</span>
        </h2>
      </div>

      {/* Rows */}
      <div>
        {CONNECT_ROWS.map((row) => (
          <a
            key={row.n}
            href={row.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row sm:items-center gap-4 py-5 border-b border-pip-border hover:bg-pip-surface transition-colors duration-150 -mx-5 sm:-mx-8 px-5 sm:px-8"
            aria-label={`${row.title} — ${row.desc}`}
          >
            {/* Number */}
            <div className="shrink-0 w-8">
              <span className="pip-label" style={{ color: '#E53514', fontSize: '9px' }}>{row.n}</span>
            </div>

            {/* Title */}
            <div className="shrink-0 sm:w-44">
              <span
                className="font-semibold text-pip-charcoal group-hover:text-pip-red transition-colors"
                style={{ fontSize: '13.5px', letterSpacing: '0.03em' }}
              >
                {row.title}
              </span>
            </div>

            {/* Desc */}
            <div className="flex-1 min-w-0">
              <p className="text-[13.5px] text-pip-mid leading-relaxed">{row.desc}</p>
            </div>

            {/* Button / Arrow */}
            <div className="shrink-0">
              <span className="text-[11px] font-semibold uppercase tracking-[0.09em] text-pip-muted group-hover:text-pip-red transition-colors">
                {row.buttonText}
                <span className="inline-block ml-1.5 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </span>
            </div>
          </a>
        ))}
      </div>

    </div>
  </section>
);
