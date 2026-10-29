import React from 'react';
import { SAV_JOURNEY_DATA } from '../data/profileAndActivities';

export const SavJourneySection: React.FC = () => {
  return (
    <section
      id="sav-journey"
      className="scroll-mt-16 py-16 lg:py-24 border-b border-stone-200/90 bg-[#F5F2EB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Narrative */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-amber-900 font-semibold">
            An Important Chapter of My Teaching Journey
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif-display font-semibold text-stone-950 tracking-tight">
            {SAV_JOURNEY_DATA.heading}
          </h2>
          <p className="mt-2 text-base sm:text-lg font-semibold text-stone-800">
            {SAV_JOURNEY_DATA.roleTitle}
          </p>
          <p className="mt-4 text-base text-stone-700 leading-relaxed">
            {SAV_JOURNEY_DATA.leadNarrative}
          </p>
          <p className="mt-3 text-base text-stone-700 leading-relaxed">
            {SAV_JOURNEY_DATA.secondaryNarrative}
          </p>
        </div>

        {/* Elegant Journey Presentation */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SAV_JOURNEY_DATA.chapters.map((chapter, index) => (
            <article
              key={chapter.id}
              className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <span className="text-xs font-mono-num uppercase tracking-wider text-amber-900 font-semibold">
                    0{index + 1} · {chapter.subtitle}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-serif-display font-semibold text-stone-950">
                  {chapter.theme}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-stone-700 leading-relaxed">
                  {chapter.description}
                </p>
              </div>

              <ul className="mt-6 pt-4 border-t border-stone-100 space-y-2">
                {chapter.highlights.map((item, hIdx) => (
                  <li
                    key={hIdx}
                    className="text-xs sm:text-sm text-stone-600 flex items-start gap-2.5 leading-relaxed"
                  >
                    <span className="text-amber-900 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
