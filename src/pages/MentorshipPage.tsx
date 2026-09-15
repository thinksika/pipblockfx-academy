import React, { useState } from 'react';
import { TELEGRAM_DIRECT_URL, WHATSAPP_URL } from '../data/siteData';

const MODULES = [
  {
    n: '00',
    title: 'Introduction to Forex Trading',
    items: ['Platform Setup & Chart Basics', 'Trading Mindset Introduction'],
  },
  {
    n: '01',
    title: 'Market Structure',
    items: ['Valid BOS (EEC/SMC)', 'Range Concept', 'SNR Basics', 'Market Pricing'],
  },
  {
    n: '02',
    title: 'Storyline',
    items: ['Zone Selection (SMC/EEC)', 'Types of EG', 'SNR Significant'],
  },
  {
    n: '03',
    title: 'Liquidity Concept',
    items: ['Money Transfer'],
  },
  {
    n: '04',
    title: 'Entry Models',
    items: ['SNR Trendlines', 'TL Kiss', 'TL Logics', 'Entry Model'],
  },
  {
    n: '05',
    title: 'Development & Management',
    items: [
      'Risk / Trade Management',
      'Trading Psychology',
      'Backtesting & Journaling',
      'Building a Trading Routine',
      'Review & Continuous Improvement',
    ],
  },
];

const DETAILS = [
  { label: 'Price',    val: '$370' },
  { label: 'Venue',    val: 'Zoom Meeting' },
  { label: 'Duration', val: 'Lifetime' },
  { label: 'Format',   val: 'Live + Pre-recorded' },
  { label: 'Access',   val: 'Private Telegram Group' },
];

const INCLUDED = [
  'Pre-recorded classes on private Telegram group',
  'Weekly market outlook',
  'PDF books on trading for better understanding',
];

const FAQ_ITEMS = [
  {
    q: 'Who is PiP Blocks for?',
    a: 'PiP Blocks is for traders who want to understand the market, develop a structured trading process, and improve their discipline and decision-making.',
  },
  {
    q: 'Do I need previous trading experience?',
    a: 'No. The mentorship covers foundational concepts as well as more advanced topics including market structure, liquidity, entries and risk management.',
  },
  {
    q: 'What does the mentorship include?',
    a: 'The mentorship includes live and pre-recorded lessons, access to a private Telegram group, weekly market outlooks, and PDF trading resources.',
  },
  {
    q: 'How long does the mentorship last?',
    a: 'The mentorship provides lifetime access, allowing you to revisit the material and continue learning with the community.',
  },
  {
    q: 'How do I join the mentorship?',
    a: 'Send an enquiry through Telegram or WhatsApp and the PiP Blocks team will provide the next steps.',
  },
  {
    q: 'Does PiP Blocks guarantee profits?',
    a: 'No. Trading involves risk. PiP Blocks provides education, mentorship and market guidance, but trading results depend on the individual trader and market conditions.',
  },
];

export const MentorshipPage: React.FC = () => {
  const [open, setOpen]       = useState<number | null>(null);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <div>

      {/* ── PAGE HEADING ──────────────────────────────── */}
      <section className="bg-white border-b border-[#E5E5E3]">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-4 h-px bg-[#E53514]" />
            <span className="pip-label">Mentorship Program</span>
          </div>
          <h1
            style={{
              fontFamily: '"Plus Jakarta Sans", Inter, system-ui, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              color: '#171717',
            }}
          >
            BUILD YOUR<br />TRADING <span style={{ color: '#E53514' }}>PROCESS.</span>
          </h1>
        </div>
      </section>

      {/* ── DETAILS + CTA ─────────────────────────────── */}
      <section className="bg-[#F7F7F5] border-b border-[#E5E5E3]">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-12 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0">

            {/* Program details */}
            <div className="lg:col-span-7 lg:pr-12 lg:border-r lg:border-[#E5E5E3]">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-[#E5E5E3] mb-8">
                {DETAILS.map(d => (
                  <div key={d.label} className="bg-white p-5">
                    <p className="pip-label mb-1">{d.label}</p>
                    <p className="text-[17px] font-semibold text-[#171717]">{d.val}</p>
                  </div>
                ))}
              </div>

              <p className="pip-label mb-3">What's Included</p>
              <ul className="space-y-2.5">
                {INCLUDED.map(item => (
                  <li key={item} className="flex items-start gap-3 text-[16px] text-[#333]">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#E53514] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA card */}
            <div className="lg:col-span-5 lg:pl-12 flex flex-col justify-start">
              <div className="border border-[#E5E5E3] bg-white p-7">
                <p className="pip-label mb-2">Program Fee</p>
                <p
                  style={{
                    fontFamily: '"Plus Jakarta Sans", Inter, system-ui, sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(3rem, 5vw, 4rem)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    color: '#171717',
                    marginBottom: '1.25rem',
                  }}
                >
                  $370
                </p>
                <p className="text-[13px] text-[#888] mb-6 border-l-2 border-[#E5E5E3] pl-3 leading-relaxed">
                  One-time payment. Contact the team directly<br />
                  for terms and payment details.
                </p>
                <div className="flex flex-col gap-3">
                  <a href={TELEGRAM_DIRECT_URL} target="_blank" rel="noopener noreferrer" className="btn-dark justify-center">
                    Enquire About Mentorship →
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline justify-center">
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SYLLABUS ──────────────────────────────────── */}
      <section className="bg-white border-b border-[#E5E5E3]">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-12 sm:py-14">
          <p className="pip-label mb-6">Program Syllabus</p>
          <div className="max-w-3xl">
            {MODULES.map((mod, i) => {
              const isOpen = open === i;
              return (
                <div key={mod.n} className="border-b border-[#E5E5E3]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 py-5 text-left focus:outline-none group"
                  >
                    <div className="flex items-center gap-5">
                      <span className="pip-label shrink-0" style={{ color: '#E53514', minWidth: '5rem' }}>
                        MODULE {mod.n}
                      </span>
                      <span className="text-[17px] font-semibold text-[#171717] group-hover:text-[#E53514] transition-colors">
                        {mod.title}
                      </span>
                    </div>
                    <span
                      className="text-[22px] shrink-0 transition-all duration-200 leading-none"
                      style={{
                        color: isOpen ? '#E53514' : '#ccc',
                        transform: isOpen ? 'rotate(45deg)' : 'none',
                      }}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-5 pl-4 sm:pl-16 pr-4 sm:pr-8">
                      <ul className="space-y-2">
                        {mod.items.map(it => (
                          <li key={it} className="flex items-start gap-2.5 text-[15px] text-[#444]">
                            <span className="text-[#E53514]/50 mt-0.5">—</span>
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="bg-[#F7F7F5] border-b border-[#E5E5E3]">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-12 sm:py-14">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-4 h-px bg-[#E53514]" />
            <span className="pip-label">FAQ</span>
          </div>
          <p
            style={{
              fontFamily: '"Plus Jakarta Sans", Inter, system-ui, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)',
              letterSpacing: '-0.02em',
              color: '#171717',
              marginBottom: '2rem',
            }}
          >
            FREQUENTLY ASKED QUESTIONS
          </p>
          <div className="max-w-3xl">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = faqOpen === i;
              return (
                <div key={i} className="border-b border-[#E5E5E3]">
                  <button
                    type="button"
                    onClick={() => setFaqOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-4 py-5 text-left focus:outline-none group"
                  >
                    <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                      <span
                        className="pip-label shrink-0 mt-[3px]"
                        style={{ color: '#E53514', minWidth: '1.75rem' }}
                      >
                        0{i + 1}
                      </span>
                      <span className="text-[16px] font-semibold text-[#171717] leading-snug group-hover:text-[#E53514] transition-colors">
                        {item.q}
                      </span>
                    </div>
                    <span
                      className="text-[20px] shrink-0 leading-none mt-0.5 transition-all duration-200"
                      style={{
                        color: isOpen ? '#E53514' : '#bbb',
                        transform: isOpen ? 'rotate(45deg)' : 'none',
                      }}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-5 pl-9 sm:pl-11 pr-6">
                      <p className="text-[15px] text-[#444] leading-[1.75]">{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────── */}
      <section className="bg-[#111] border-t border-white/10 py-12 sm:py-14">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[20px] font-semibold text-white mb-1">Ready to start?</p>
            <p className="text-[15px] text-white/70">Contact the PiP Blocks team directly.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={TELEGRAM_DIRECT_URL} target="_blank" rel="noopener noreferrer" className="btn-white">
              Enquire on Telegram →
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost-white">
              Chat on WhatsApp →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
