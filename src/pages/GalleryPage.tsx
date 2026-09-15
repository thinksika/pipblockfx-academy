import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

/*
 * GalleryPage — image-first layout.
 *
 * Replace each <ImagePlaceholder> with the corresponding real image:
 *
 * SEMINAR_IMAGE_01 through SEMINAR_IMAGE_02  → Seminar / event photos
 * TRAINING_IMAGE_01 through TRAINING_IMAGE_02 → In-room training session photos
 * EVENT_IMAGE_01 through EVENT_IMAGE_02       → General event or community photos
 * COMMUNITY_IMAGE_01 through COMMUNITY_IMAGE_02 → Community/team photos
 *
 * To replace: remove <ImagePlaceholder ... /> and add:
 * <img src="/path/to/image.jpg" alt="Description" className="w-full h-full object-cover" />
 */

const IMAGES = [
  { label: 'SEMINAR_IMAGE_01',   caption: 'Seminar Image 01',      aspect: '16/9' as const, span2: true },
  { label: 'SEMINAR_IMAGE_02',   caption: 'Seminar Image 02',      aspect: '4/5' as const,  span2: false },
  { label: 'TRAINING_IMAGE_01',  caption: 'Training Image 01',     aspect: '4/3' as const,  span2: false },
  { label: 'TRAINING_IMAGE_02',  caption: 'Training Image 02',     aspect: '4/3' as const,  span2: false },
  { label: 'EVENT_IMAGE_01',     caption: 'Event Image 01',        aspect: '16/9' as const, span2: true },
  { label: 'EVENT_IMAGE_02',     caption: 'Event Image 02',        aspect: '4/3' as const,  span2: false },
  { label: 'COMMUNITY_IMAGE_01', caption: 'Community Image 01',    aspect: '4/3' as const,  span2: false },
  { label: 'COMMUNITY_IMAGE_02', caption: 'Community Image 02',    aspect: '4/3' as const,  span2: false },
];

export const GalleryPage: React.FC = () => (
  <div>

    {/* Page header */}
    <section className="bg-white border-b border-pip-border">
      <div className="max-w-site mx-auto px-5 sm:px-8 py-12 sm:py-14">
        <div className="pip-label mb-4">Gallery</div>
        <h1
          className="font-display font-extrabold text-pip-charcoal"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.07', letterSpacing: '-0.03em' }}
        >
          PiP Blocks <span className="text-pip-red">In Action.</span>
        </h1>
        <p className="text-[15px] text-[#666] mt-2">
          Seminars, bootcamps, training sessions and community events.
        </p>
      </div>
    </section>

    {/* Gallery grid */}
    <section className="bg-pip-surface border-b border-pip-border py-8 sm:py-10">
      <div className="max-w-site mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {IMAGES.map((img) => (
            <div
              key={img.label}
              className={img.span2 ? 'lg:col-span-2' : ''}
            >
              <ImagePlaceholder
                label={`${img.label} — Replace with real photo`}
                aspectRatio={img.aspect}
                className="w-full"
              />
              <p className="mt-2 text-[12px] text-[#888] font-medium tracking-wide uppercase">{img.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  </div>
);
