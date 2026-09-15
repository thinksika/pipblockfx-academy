import React from 'react';
import { Link } from 'react-router-dom';
import { TELEGRAM_COMMUNITY_URL } from '../data/siteData';

export const HomePage: React.FC = () => (
  <div>

    {/* ── HERO ─────────────────────────────────────────── */}
    {/*
      Mobile: text block (natural height) → image below.
      Desktop: two-column split, 90vh min-height.
      NO min-height on mobile — avoids the giant whitespace trap.
    */}
    <section className="flex flex-col lg:flex-row lg:min-h-[90vh]">

      {/* Copy — natural height on mobile, fills column on desktop */}
      <div className="lg:flex-1 flex flex-col justify-center px-5 sm:px-10 lg:px-16 pt-9 pb-7 lg:py-0 lg:max-w-[52%]">

        <div className="flex items-center gap-2.5 mb-5 lg:mb-8">
          <span className="w-4 h-px bg-[#E53514]" />
          <span className="pip-label">PiP Block Forex Trading Academy</span>
        </div>

        <h1
          style={{
            fontFamily: '"Plus Jakarta Sans", Inter, system-ui, sans-serif',
            fontWeight: 800,
            /* Mobile: 2.6rem (~42px). Desktop: scales to 5.5rem */
            fontSize: 'clamp(2.6rem, 6vw, 5.5rem)',
            lineHeight: 1.02,
            letterSpacing: '-0.04em',
            color: '#171717',
          }}
        >
          FOREX.<br />
          WITH<br />
          <span style={{ color: '#E53514' }}>STRUCTURE.</span>
        </h1>

        <p className="mt-5 lg:mt-7 text-[16px] lg:text-[17px] text-[#333] leading-[1.72] max-w-[420px]">
          PiP Blocks is a trading education and community platform built around
          market understanding, discipline, psychology and structured learning.
        </p>

        {/* Markets — plain text, wraps cleanly on any screen */}
        <div className="mt-5">
          <span className="pip-label block mb-1.5">Markets We Trade</span>
          <p className="text-[11.5px] font-semibold text-[#555] tracking-wide leading-relaxed">
            FOREX · SYNTHETICS · METALS · INDICES · COMMODITIES · CRYPTO
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={TELEGRAM_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark w-full sm:w-auto justify-center"
          >
            Join the Community →
          </a>
          <Link to="/mentorship" className="btn-outline w-full sm:w-auto justify-center">
            Explore Mentorship →
          </Link>
        </div>
      </div>

      {/* Mobile hero image — sits cleanly below text */}
      <div
        className="lg:hidden w-full relative overflow-hidden bg-[#111]"
        style={{ height: '68vw', minHeight: 300, maxHeight: 420 }}
      >
        <img
          src="/9B9A8725.jpg"
          alt="PiP Blocks — live trading seminar"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '50% 18%' }}
        />
      </div>

      {/* Desktop hero image */}
      <div className="hidden lg:block lg:flex-1 relative overflow-hidden bg-[#111]">
        <img
          src="/9B9A8725.jpg"
          alt="PiP Blocks — live trading seminar"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '50% 15%' }}
        />
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      </div>

    </section>

    {/* ── SHORT INTRO ──────────────────────────────────── */}
    <section className="border-t border-[#E5E5E3] bg-white">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-0">
        <div className="lg:col-span-4 lg:pr-12 lg:border-r lg:border-[#E5E5E3]">
          <h2
            style={{
              fontFamily: '"Plus Jakarta Sans", Inter, system-ui, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              color: '#171717',
            }}
          >
            MORE THAN<br />TRADING.
          </h2>
        </div>
        <div className="lg:col-span-8 lg:pl-12 flex flex-col justify-center">
          <p className="text-[16px] lg:text-[17px] text-[#333] leading-[1.72] mb-4 max-w-[500px]">
            At PiP Blocks, we believe great traders are developed. We create an
            environment where traders can build market understanding, discipline,
            psychology and mindset while learning and growing together.
          </p>
          <Link
            to="/about"
            className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#E53514] hover:underline self-start"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </section>

    {/* ── 3 KEY AREAS ──────────────────────────────────── */}
    <section className="border-t border-[#E5E5E3] bg-[#F7F7F5]">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        {[
          { n: '01', title: 'Education',  desc: 'Learn to understand the market, not simply follow entries.' },
          { n: '02', title: 'Mentorship', desc: 'Build a structured trading process with guided learning.' },
          { n: '03', title: 'Community',  desc: 'Learn, engage and grow alongside other traders.' },
        ].map((item) => (
          <div
            key={item.n}
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-10 py-5 sm:py-6 border-b border-[#E5E5E3] last:border-0"
          >
            <span className="pip-label shrink-0 sm:w-6" style={{ color: '#E53514' }}>{item.n}</span>
            <h3 className="sm:w-36 shrink-0 text-[17px] font-bold text-[#171717] tracking-tight">{item.title}</h3>
            <p className="text-[15px] sm:text-[16px] text-[#444] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ── WIDE EDITORIAL PHOTO ─────────────────────────── */}
    {/* 9B9A8722.jpg — Wide audience shot, speaker at front */}
    <div
      className="relative overflow-hidden bg-[#111]"
      style={{ height: 'clamp(240px, 45vw, 600px)' }}
    >
      <img
        src="/9B9A8722.jpg"
        alt="PiP Blocks — live seminar with audience"
        className="w-full h-full object-cover"
        style={{ objectPosition: '50% 30%' }}
      />
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />
    </div>

    {/* ── COMMUNITY CTA ────────────────────────────────── */}
    <section className="bg-[#111]">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-14 sm:py-20 text-center">
        <h2
          style={{
            fontFamily: '"Plus Jakarta Sans", Inter, system-ui, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(1.9rem, 5vw, 4rem)',
            lineHeight: 1.06,
            letterSpacing: '-0.035em',
            color: '#fff',
          }}
        >
          GROW WITH<br />
          <span style={{ color: '#E53514' }}>PiP BLOCKS.</span>
        </h2>
        <p className="mt-4 text-[16px] text-white/70 max-w-xs mx-auto leading-relaxed">
          Join over 1,400 traders learning and growing together.
        </p>
        <div className="mt-8">
          <a
            href={TELEGRAM_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white text-[13px] py-3.5 px-8"
          >
            Join the Community →
          </a>
        </div>
      </div>
    </section>

  </div>
);
