import React from 'react';
import { YOUTUBE_URL } from '../data/siteData';
import { ImagePlaceholder } from './ImagePlaceholder';

export const LearnWithUs: React.FC = () => (
  <section id="learn" aria-label="Learn with PiP Blocks on YouTube" className="bg-pip-surface border-b border-pip-border">
    <div className="max-w-site mx-auto px-5 sm:px-8">

      {/* Label row */}
      <div className="py-5 border-b border-pip-border">
        <span className="pip-label">05 — Learn With Us</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 pt-10 pb-14 sm:pt-12 sm:pb-16 gap-10 lg:gap-0">

        {/* Left — Copy */}
        <div className="lg:col-span-5 lg:pr-10 lg:border-r lg:border-pip-border flex flex-col justify-center">
          <h2
            className="font-display font-extrabold text-pip-charcoal mb-4"
            style={{
              fontSize: 'clamp(1.55rem, 2.8vw, 2.4rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.025em',
            }}
          >
            Education. On{' '}
            <span className="text-pip-red">YouTube.</span>
          </h2>

          <p className="text-[14.5px] text-pip-mid leading-[1.75] mb-6 max-w-xs">
            PiP Blocks publishes forex education, market breakdowns and community content on YouTube.
            Subscribe to stay updated with our latest releases.
          </p>

          <div className="space-y-3 mb-8 border-t border-pip-border pt-5">
            {[
              'Market structure breakdowns',
              'Trade analysis and recaps',
              'Mentorship and education content',
              'Bootcamp highlights',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-[13.5px] text-pip-mid">
                <span className="w-1.5 h-1.5 bg-pip-red rounded-full shrink-0" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>

          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pip-charcoal hover:bg-pip-red text-white text-[11.5px] font-semibold tracking-[0.1em] uppercase py-[11px] px-[22px] rounded-[8px] border border-pip-charcoal hover:border-pip-red transition-all duration-200 w-fit"
            aria-label="Watch PiP Blocks on YouTube"
          >
            Watch on YouTube →
          </a>
        </div>

        {/* Right — YouTube thumbnail placeholder */}
        <div className="lg:col-span-7 lg:pl-12 flex flex-col gap-4">
          {/*
           * YOUTUBE_THUMBNAIL_01 — Replace with a real YouTube thumbnail or screenshot
           * Suggested: Screenshot of your YouTube channel page or latest video thumbnail.
           */}
          <ImagePlaceholder
            label="YOUTUBE_THUMBNAIL_01 — Replace with YouTube channel screenshot"
            aspectRatio="16/9"
            className="w-full"
          />
          {/* Two smaller video thumbnails */}
          <div className="grid grid-cols-2 gap-4">
            <ImagePlaceholder label="YOUTUBE_THUMBNAIL_02" aspectRatio="16/9" />
            <ImagePlaceholder label="YOUTUBE_THUMBNAIL_03" aspectRatio="16/9" />
          </div>
        </div>

      </div>
    </div>
  </section>
);
