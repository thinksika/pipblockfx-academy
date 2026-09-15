import React from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';

/**
 * Gallery — 6 image placeholders in an asymmetric editorial grid.
 * Background: warm-grey for contrast variation.
 *
 * When real images arrive, replace each <ImagePlaceholder> with:
 *   <img src="/path/to/image.jpg" alt="..." className="w-full h-full object-cover" />
 */
export const Gallery: React.FC = () => (
  <section id="gallery" aria-label="PiP Blocks Gallery" className="bg-pip-warm-grey border-b border-pip-border">
    <div className="max-w-site mx-auto px-5 sm:px-8">

      {/* Label row */}
      <div className="py-5 border-b border-pip-border">
        <span className="pip-label">08 — Gallery</span>
      </div>

      {/* Heading */}
      <div className="pt-10 pb-8 border-b border-pip-border">
        <h2
          className="font-display font-extrabold text-pip-charcoal"
          style={{
            fontSize: 'clamp(1.55rem, 2.8vw, 2.4rem)',
            lineHeight: '1.1',
            letterSpacing: '-0.025em',
          }}
        >
          PiP Blocks{' '}
          <span className="text-pip-red">In Action.</span>
        </h2>
        <p className="text-[13.5px] text-pip-mid mt-2">
          Seminars, bootcamps, community events and live sessions.
        </p>
      </div>

      {/* Asymmetric gallery grid */}
      <div className="pt-8 pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/*
         * GALLERY_IMAGE_01 — Large landscape (col-span 2 on desktop)
         * Suggested: Best wide seminar / event photo
         */}
        <div className="lg:col-span-2">
          <ImagePlaceholder
            label="GALLERY_IMAGE_01 — Wide seminar / event photo"
            aspectRatio="16/9"
            className="w-full"
          />
        </div>

        {/*
         * GALLERY_IMAGE_02 — Portrait on the right
         * Suggested: In-room classroom photo, portrait orientation
         */}
        <ImagePlaceholder
          label="GALLERY_IMAGE_02 — Portrait event photo"
          aspectRatio="4/5"
          className="w-full"
        />

        {/*
         * GALLERY_IMAGE_03, 04, 05, 06 — Smaller squares / 4:3 landscape
         */}
        <ImagePlaceholder label="GALLERY_IMAGE_03" aspectRatio="4/3" className="w-full" />
        <ImagePlaceholder label="GALLERY_IMAGE_04" aspectRatio="4/3" className="w-full" />
        <ImagePlaceholder label="GALLERY_IMAGE_05" aspectRatio="4/3" className="w-full" />
      </div>

    </div>
  </section>
);
