import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { CHANDAN_PROFILE } from '../data/profileAndActivities';

const PROFILE_PHOTO_PATH =
  '/assets/aistudio/IMG-20261027-WA0000_13b31932.jpg';

export const AboutSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="about"
      className="scroll-mt-16 py-16 lg:py-24 border-b border-stone-200/90 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (4 cols): Profile Photo Card & Educator Credentials */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <div className="w-full max-w-sm bg-[#FAF8F5] border border-stone-200/90 rounded-2xl p-6 sm:p-8 text-center">
              {/* Responsive Circular / Softly Rounded Profile Frame */}
              <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1.5 bg-gradient-to-b from-amber-800/30 to-stone-300 shadow-xs">
                <div className="w-full h-full rounded-full overflow-hidden bg-stone-100 border-2 border-white flex items-center justify-center relative">
                  {!imageError ? (
                    <img
                      src={PROFILE_PHOTO_PATH}
                      alt="Chandan Ojha — Government Teacher and Social Science Educator"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#F5EFE6] to-[#E7DFD3] text-stone-800 p-4 select-none">
                      <span className="text-4xl sm:text-5xl font-serif-display font-semibold text-amber-950 tracking-tight">
                        CO
                      </span>
                      <span className="mt-1.5 text-xs font-semibold text-stone-700">
                        Chandan Ojha
                      </span>
                      <span className="text-[11px] text-stone-500 mt-0.5">
                        B.Ed. · Educator
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Name, Designation & Education */}
              <div className="mt-6">
                <h3 className="text-2xl font-serif-display font-semibold text-stone-950">
                  {CHANDAN_PROFILE.name}
                </h3>
                <p className="mt-1.5 text-sm font-semibold text-amber-900">
                  {CHANDAN_PROFILE.designation}
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-stone-600 font-medium">
                  <GraduationCap className="w-4 h-4 text-stone-500" />
                  <span>Education: {CHANDAN_PROFILE.education}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (8 cols): About Narrative & Teaching Philosophy */}
          <div className="lg:col-span-8">
            <p className="text-xs uppercase tracking-widest text-amber-900 font-semibold">
              About Me · परिचय
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif-display font-semibold text-stone-950 tracking-tight">
              Chandan Ojha
            </h2>
            <p className="mt-1 text-base font-medium text-stone-600">
              {CHANDAN_PROFILE.designation} · {CHANDAN_PROFILE.education}
            </p>

            <div className="mt-6 space-y-4 text-base text-stone-700 leading-relaxed max-w-3xl">
              {CHANDAN_PROFILE.aboutParagraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            {/* 4 Key Focus Areas */}
            <div className="mt-10 pt-8 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CHANDAN_PROFILE.corePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#FAF8F5] border border-stone-200/90"
                >
                  <p className="text-xs font-mono-num text-amber-900 font-semibold">
                    0{idx + 1}.
                  </p>
                  <h3 className="mt-1 text-base font-serif-display font-semibold text-stone-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
