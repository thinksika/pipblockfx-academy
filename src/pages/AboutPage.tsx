import React from 'react';

export const AboutPage: React.FC = () => (
  <div>

    {/* ── PAGE HEADING ────────────────────────────────── */}
    <section className="bg-white border-b border-[#E5E5E3]">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
        <div className="flex items-center gap-2.5 mb-6">
          <span className="w-4 h-px bg-[#E53514]" />
          <span className="pip-label">About</span>
        </div>
        <h1
          style={{
            fontFamily: '"Plus Jakarta Sans", Inter, system-ui, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.04,
            letterSpacing: '-0.04em',
            color: '#171717',
            maxWidth: '700px',
          }}
        >
          MORE THAN<br />TRADING.
        </h1>
      </div>
    </section>

    {/* ── PHILOSOPHY ──────────────────────────────────── */}
    <section className="bg-[#F7F7F5] border-b border-[#E5E5E3]">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">

          {/* Left — seated portrait */}
          <div className="lg:col-span-5 lg:pr-12 lg:border-r lg:border-[#E5E5E3]">
            {/* 9B9A8756.jpg — Close portrait, seated on stage chair */}
            <div className="overflow-hidden" style={{ aspectRatio: '3/4', maxHeight: 500 }}>
              <img
                src="/9B9A8756.jpg"
                alt="PiP Blocks — founder presenting at live seminar"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right — text */}
          <div className="lg:col-span-7 lg:pl-12 flex flex-col justify-center">
            <p className="text-[18px] text-[#222] leading-[1.75] mb-5 max-w-[480px]">
              At PiP Blocks, we believe great traders are not born. They are developed.
            </p>
            <p className="text-[16px] text-[#444] leading-[1.75] mb-5 max-w-[480px]">
              Our goal is to create an environment where traders can improve their
              understanding of Forex and the markets while developing the discipline,
              psychology and mindset required to approach trading with structure.
            </p>
            <p className="text-[16px] text-[#444] leading-[1.75] max-w-[480px]">
              We do not only focus on strategies. We focus on developing traders.
              At PiP Blocks, we grow together.
            </p>
          </div>

        </div>
      </div>
    </section>

    {/* ── FROM THE ROOM TO THE MARKET ─────────────────── */}
    <section className="bg-white border-b border-[#E5E5E3]">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">

          {/* Text */}
          <div className="lg:col-span-4 lg:pr-12 lg:border-r lg:border-[#E5E5E3] flex flex-col justify-center">
            <p className="pip-label mb-4">Our Journey</p>
            <h2
              style={{
                fontFamily: '"Plus Jakarta Sans", Inter, system-ui, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                color: '#171717',
                marginBottom: '1.25rem',
              }}
            >
              FROM THE ROOM<br />TO THE MARKET.
            </h2>
            <p className="text-[16px] text-[#444] leading-[1.72]">
              From live seminars and training sessions to an active online community,
              PiP Blocks has built a space where traders develop real skills,
              not just theories.
            </p>
          </div>

          {/* Wide editorial image */}
          <div className="lg:col-span-8 lg:pl-12">
            {/* 9B9A8723.jpg — Speaker presenting, audience visible in foreground */}
            <div className="overflow-hidden" style={{ aspectRatio: '16/10' }}>
              <img
                src="/9B9A8723.jpg"
                alt="PiP Blocks — live seminar session"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 25%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
);
