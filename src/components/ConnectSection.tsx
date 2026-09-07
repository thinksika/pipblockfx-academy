import React, { useState } from 'react';
import {
  TELEGRAM_COMMUNITY_URL,
  TELEGRAM_DIRECT_URL,
  WHATSAPP_URL,
  YOUTUBE_URL,
  TIKTOK_URL,
  BROKER_URL,
} from '../data/siteData';

interface ConnectRow {
  num: string;
  title: string;
  desc: string;
  buttonText: string;
  link: string;
}

const ROWS: ConnectRow[] = [
  {
    num: '01',
    title: 'TELEGRAM COMMUNITY',
    desc: 'Join our trading community and stay connected.',
    buttonText: 'JOIN TELEGRAM',
    link: TELEGRAM_COMMUNITY_URL,
  },
  {
    num: '02',
    title: 'DIRECT TELEGRAM',
    desc: 'Message the team directly for enquiries.',
    buttonText: 'MESSAGE US',
    link: TELEGRAM_DIRECT_URL,
  },
  {
    num: '03',
    title: 'WHATSAPP',
    desc: 'Speak directly with the team.',
    buttonText: 'CHAT ON WHATSAPP',
    link: WHATSAPP_URL,
  },
  {
    num: '04',
    title: 'YOUTUBE',
    desc: 'Watch PiP Blocks content, education and updates.',
    buttonText: 'WATCH ON YOUTUBE',
    link: YOUTUBE_URL,
  },
  {
    num: '05',
    title: 'TIKTOK',
    desc: 'Follow PIPBLOCKFX for short-form content and updates.',
    buttonText: 'FOLLOW ON TIKTOK',
    link: TIKTOK_URL,
  },
  {
    num: '06',
    title: 'BROKER',
    desc: 'Access our preferred broker.',
    buttonText: 'OPEN BROKER ACCOUNT',
    link: BROKER_URL,
  },
];

export const ConnectSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="connect-links" aria-label="Connect with PiP Blocks" className="bg-white border-b border-pip-border">
      <div className="max-w-site mx-auto px-5 sm:px-8 pb-12 sm:pb-16">

        {/* Section Label */}
        <div className="py-5 border-b border-pip-border">
          <span className="pip-label">10 — Connect</span>
        </div>

        {/* Section Title */}
        <div className="py-9 border-b border-pip-border">
          <h2
            className="font-display font-extrabold text-pip-charcoal"
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
              lineHeight: '1.06',
              letterSpacing: '-0.03em',
            }}
          >
            CONNECT WITH PIP BLOCKS
          </h2>
        </div>

        {/* Numbered Row List */}
        <div>
          {ROWS.map(row => {
            const isH = hovered === row.num;
            return (
              <a
                key={row.num}
                href={row.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(row.num)}
                onMouseLeave={() => setHovered(null)}
                className="block border-b border-pip-border transition-colors duration-150 group"
                style={{ backgroundColor: isH ? '#F7F7F5' : 'transparent' }}
                aria-label={`${row.title}: ${row.buttonText}`}
              >
                <div className="py-6 sm:py-7 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">

                  {/* Number 01-06 */}
                  <span
                    className="font-mono font-bold shrink-0 transition-colors duration-150 w-7 text-[12px]"
                    style={{ color: isH ? '#E53514' : '#CCCCCA' }}
                  >
                    {row.num}
                  </span>

                  {/* Title & Description */}
                  <div className="flex-1 min-w-0">
                    <div
                      className="font-bold uppercase mb-1.5 transition-colors duration-150 text-[13px] tracking-[0.08em]"
                      style={{ color: isH ? '#E53514' : '#171717' }}
                    >
                      {row.title}
                    </div>
                    <p className="text-pip-mid text-[14px] leading-[1.6]">
                      {row.desc}
                    </p>
                  </div>

                  {/* CTA button / Arrow on the right */}
                  <div className="shrink-0 flex items-center gap-2 mt-2 sm:mt-0">
                    <span className="btn-ghost text-[11px] py-2 px-4 rounded-[8px] group-hover:border-pip-charcoal group-hover:text-pip-charcoal transition-colors">
                      {row.buttonText}
                      <span className="inline-block transition-transform duration-180 group-hover:translate-x-1" aria-hidden="true">→</span>
                    </span>
                  </div>

                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
