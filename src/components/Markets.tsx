import React from 'react';

interface Market {
  name: string;
  desc: string;
  pairs: string[];
}

const MARKETS: Market[] = [
  {
    name: 'FOREX',
    desc: 'Currency pairs. The most liquid market in the world. Where most of our analysis is applied.',
    pairs: ['EURUSD', 'GBPUSD', 'USDJPY', 'AUDUSD', 'XAUUSD'],
  },
  {
    name: 'SYNTHETICS',
    desc: 'Synthetic indices available 24/7. Volatility indices, crash/boom and step indices.',
    pairs: ['Volatility 75', 'Crash 1000', 'Boom 500', 'Step Index'],
  },
  {
    name: 'METALS',
    desc: 'Gold and silver — major store-of-value assets that move with global risk sentiment.',
    pairs: ['XAUUSD', 'XAGUSD'],
  },
  {
    name: 'INDICES',
    desc: 'Major stock indices tracked as macro market instruments.',
    pairs: ['US30', 'SPX500', 'NAS100', 'GER40'],
  },
  {
    name: 'COMMODITIES',
    desc: 'Oil, gas, and agricultural commodities as supplementary instruments.',
    pairs: ['USOIL', 'UKOIL', 'NGAS'],
  },
  {
    name: 'CRYPTO',
    desc: 'Select crypto pairs as a supplementary asset class — Bitcoin, Ethereum.',
    pairs: ['BTCUSD', 'ETHUSD'],
  },
];

export const Markets: React.FC = () => (
  <section id="markets" aria-label="Markets we trade" className="bg-white border-b border-pip-border">
    <div className="max-w-site mx-auto px-5 sm:px-8">

      {/* Label row */}
      <div className="py-5 border-b border-pip-border">
        <span className="pip-label">04 — Markets We Trade</span>
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
          The Markets{' '}
          <span className="text-pip-red">We Focus On.</span>
        </h2>
      </div>

      {/* Market grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-14 pt-0">
        {MARKETS.map((m, i) => {
          // Calculate border positions for clean grid
          const isLastRow2 = i >= 3;
          const isLastRow3 = i >= 4;
          const hasRightBorderSm = i % 2 === 0;
          const hasRightBorderLg = i % 3 !== 2;
          const hasBorderBSm = !isLastRow2;
          const hasBorderBLg = !isLastRow3;

          return (
            <div
              key={m.name}
              className={[
                'p-6 pt-7',
                hasRightBorderSm ? 'sm:border-r sm:border-pip-border' : '',
                hasRightBorderLg ? 'lg:border-r lg:border-pip-border' : 'sm:border-r-0',
                hasBorderBSm  ? 'border-b border-pip-border' : '',
                hasBorderBLg  ? 'lg:border-b lg:border-pip-border' : '',
              ].join(' ')}
            >
              {/* Market name */}
              <div
                className="font-display font-extrabold text-pip-charcoal mb-2"
                style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', letterSpacing: '-0.02em' }}
              >
                {m.name}
              </div>

              {/* Description */}
              <p className="text-[13.5px] text-pip-mid leading-[1.7] mb-4">
                {m.desc}
              </p>

              {/* Pairs */}
              <div className="flex flex-wrap gap-1.5">
                {m.pairs.map((p) => (
                  <span
                    key={p}
                    className="text-[10.5px] font-semibold tracking-[0.08em] uppercase px-2 py-0.5 border border-pip-border text-pip-mid"
                    style={{ borderRadius: '4px' }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  </section>
);
