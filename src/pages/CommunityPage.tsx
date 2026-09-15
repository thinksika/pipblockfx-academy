import React from 'react';
import { TELEGRAM_COMMUNITY_URL, WHATSAPP_URL } from '../data/siteData';

export const CommunityPage: React.FC = () => (
  <div>

    {/* ── PAGE HEADING ─────────────────────────────────── */}
    <section className="bg-white border-b border-[#E5E5E3]">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
        <div className="flex items-center gap-2.5 mb-6">
          <span className="w-4 h-px bg-[#E53514]" />
          <span className="pip-label">Community</span>
        </div>
        <h1
          style={{
            fontFamily: '"Plus Jakarta Sans", Inter, system-ui, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.04,
            letterSpacing: '-0.04em',
            color: '#171717',
          }}
        >
          GROW WITH<br /><span style={{ color: '#E53514' }}>PiP BLOCKS.</span>
        </h1>
        <p className="mt-5 text-[18px] text-[#333] leading-[1.72] max-w-[520px]">
          The PiP Blocks community brings traders together around education,
          market discussions, insights and continuous learning.
        </p>
      </div>
    </section>

    {/* ── LARGE COMMUNITY PHOTO ────────────────────────── */}
    {/* 9B9A8732.jpg — Speaker from behind addressing live audience */}
    <div className="relative overflow-hidden bg-[#111]" style={{ height: 'clamp(320px, 55vw, 680px)' }}>
      <img
        src="/9B9A8732.jpg"
        alt="PiP Blocks — speaker addressing live audience"
        className="w-full h-full object-cover"
        style={{ objectPosition: '50% 20%' }}
      />
      <div className="absolute inset-0 bg-black/25" />
    </div>

    {/* ── CTA ──────────────────────────────────────────── */}
    <section className="bg-[#111] border-t border-white/10 py-16 sm:py-20">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 text-center">
        <p className="pip-label mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>Free Access · Telegram</p>
        <h2
          style={{
            fontFamily: '"Plus Jakarta Sans", Inter, system-ui, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            lineHeight: 1.06,
            letterSpacing: '-0.035em',
            color: '#fff',
            marginBottom: '1rem',
          }}
        >
          JOIN THE PiP BLOCKS<br /><span style={{ color: '#E53514' }}>COMMUNITY</span>
        </h2>
        <p className="text-[16px] text-white/70 mb-8 max-w-xs mx-auto leading-relaxed">
          1,400+ traders. Daily analysis, education and community discussion.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={TELEGRAM_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white text-[13px] py-3.5 px-8"
          >
            Join Telegram Community →
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-white text-[13px] py-3.5 px-8"
          >
            Chat on WhatsApp →
          </a>
        </div>

      </div>
    </section>

  </div>
);
