import React from 'react';
import { TELEGRAM_DIRECT_URL, WHATSAPP_URL } from '../data/siteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ProgramsPage: React.FC = () => {
  const refHero = useScrollReveal();
  const refBootcamp = useScrollReveal();
  const refFlyer = useScrollReveal();
  const refCta = useScrollReveal();

  return (
    <main>
      {/* ── HERO BANNER ── */}
      <section className="bg-[#0D0D0D] border-b border-white/10">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div ref={refHero} className="reveal">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-4 h-px bg-[#E53514]" />
              <span className="pip-label text-white/38">PiP Blocks Programs</span>
            </div>
            <h1
              style={{
                fontFamily: '"Plus Jakarta Sans", Inter, system-ui, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)',
                letterSpacing: '-0.04em',
                color: '#fff',
                lineHeight: 1.06,
              }}
            >
              UPCOMING<br />PROGRAMS.
            </h1>
            <p className="mt-5 text-white/60 text-[17px] max-w-lg leading-relaxed">
              Intensive training programs designed for practical market development.
            </p>
          </div>
        </div>
      </section>

      {/* ── BOOTCAMP SECTION ── */}
      <section className="bg-white py-14 sm:py-16 lg:py-20 border-b border-[#E5E5E3]">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
          <div ref={refBootcamp} className="reveal">
            <p className="pip-label mb-3">CURRENT PROGRAM</p>
            <h2
              style={{
                fontFamily: '"Plus Jakarta Sans", Inter, system-ui, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                letterSpacing: '-0.04em',
                color: '#171717',
                lineHeight: 1.08,
              }}
            >
              PIPBLOCKFX 2.0 BOOTCAMP.
            </h2>
            <p className="text-[16px] text-[#444] max-w-xl mt-4 mb-8 leading-[1.75]">
              An intensive 4-day trading bootcamp followed by 2 months of signals — focused on
              advanced market structure, liquidity, personal entries and risk management.
            </p>

            {/* Key Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {[
                { label: 'Price',    val: '$60' },
                { label: 'Dates',    val: '21–24 Sep' },
                { label: 'Duration', val: '4D + 2M' },
                { label: 'Capacity', val: 'Max 10' },
              ].map(({ label, val }) => (
                <div key={label} className="border border-[#E5E5E3] p-5 bg-[#F7F7F5]">
                  <p className="pip-label mb-1.5">{label}</p>
                  <p
                    style={{
                      fontFamily: '"Plus Jakarta Sans", Inter, system-ui, sans-serif',
                      fontWeight: 800,
                      fontSize: '20px',
                      letterSpacing: '-0.03em',
                      color: '#171717',
                    }}
                  >
                    {val}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-8 h-px bg-[#E53514] mb-10" />
          </div>

          {/* BOOTCAMP FLYER */}
          <div ref={refFlyer} className="reveal">
            <div className="max-w-lg mx-auto">
              <img
                src="/bootcamp_flyer.jpg"
                alt="PiP Blocks 2.0 Bootcamp Program Flyer"
                className="w-full shadow-2xl"
                loading="lazy"
              />
              <p className="text-[13px] text-[#888] text-center mt-3 tracking-wide">
                PIPBLOCKFX 2.0 BOOTCAMP — Full program details shown above.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-[#0D0D0D] py-12 border-t border-white/10">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 text-center">
          <div ref={refCta} className="reveal">
            <h2
              style={{
                fontFamily: '"Plus Jakarta Sans", Inter, system-ui, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                letterSpacing: '-0.04em',
                color: '#fff',
                lineHeight: 1.1,
              }}
            >
              INTERESTED IN THE BOOTCAMP?
            </h2>
            <p className="mt-3 text-white/60 text-[16px] max-w-md mx-auto">
              Reach out directly to enquire about availability and enrollment.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={TELEGRAM_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto justify-center inline-flex"
                style={{ padding: '13px 26px' }}
              >
                Enquire on Telegram →
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-white w-full sm:w-auto justify-center inline-flex"
                style={{ padding: '13px 26px' }}
              >
                Chat on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProgramsPage;
