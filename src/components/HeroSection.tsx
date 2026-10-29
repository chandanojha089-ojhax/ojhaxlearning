import React from 'react';
import { ArrowRight, BookOpen, Compass, GraduationCap, Layers } from 'lucide-react';
import { CHANDAN_PROFILE } from '../data/profileAndActivities';
import { NavSectionId } from './Navbar';
import { MediumId } from '../types/education';

interface HeroSectionProps {
  onNavigate: (section: NavSectionId) => void;
  onSelectMediumShortcut: (medium: MediumId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onSelectMediumShortcut,
}) => {
  return (
    <section
      id="home"
      className="scroll-mt-16 relative border-b border-stone-200/90 bg-gradient-to-b from-[#FAF8F5] to-[#F3EFE8] pt-10 pb-16 lg:pt-16 lg:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split: Left Editorial Introduction, Right Structured Educator Platform Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-amber-900 font-semibold mb-3">
                Personal Educational Platform · OjhaX
              </p>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-semibold text-stone-950 tracking-tight leading-[1.15]"
                style={{ textWrap: 'balance' }}
              >
                OjhaX —{' '}
                <span className="italic font-normal text-amber-900">
                  {CHANDAN_PROFILE.tagline}
                </span>
              </h1>

              <p className="mt-4 text-base sm:text-lg font-medium text-stone-800">
                {CHANDAN_PROFILE.name}{' '}
                <span className="text-stone-400 mx-1.5" aria-hidden="true">
                  ·
                </span>{' '}
                <span className="text-stone-700">
                  {CHANDAN_PROFILE.designation}
                </span>{' '}
                <span className="text-stone-400 mx-1.5" aria-hidden="true">
                  ·
                </span>{' '}
                <span className="text-stone-600">{CHANDAN_PROFILE.education}</span>
              </p>

              <p className="mt-5 text-base text-stone-700 leading-relaxed max-w-2xl">
                {CHANDAN_PROFILE.shortIntro}
              </p>

              <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
                {CHANDAN_PROFILE.platformPurpose}
              </p>
            </div>

            {/* Primary & Section Navigation Buttons */}
            <div className="mt-8 pt-6 border-t border-stone-200/90">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('learning-resources')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-stone-900 rounded-lg hover:bg-amber-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore Learning Resources</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onSelectMediumShortcut('hindi')}
                  className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-amber-950 bg-amber-100/80 border border-amber-300/80 rounded-lg hover:bg-amber-200/70 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>हिंदी माध्यम (Classes 6–12)</span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectMediumShortcut('english')}
                  className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-stone-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>English Medium (Classes 6–12)</span>
                </button>
              </div>

              {/* Direct Section Links for About Me, SAV Journey, Teaching & Activities */}
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-stone-700">
                <span className="text-xs uppercase tracking-wider text-stone-500">
                  Sections:
                </span>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-900 underline underline-offset-4 decoration-stone-300 hover:decoration-amber-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  About Chandan Ojha
                </button>
                <span className="text-stone-300" aria-hidden="true">
                  ·
                </span>
                <button
                  type="button"
                  onClick={() => onNavigate('sav-journey')}
                  className="hover:text-amber-900 underline underline-offset-4 decoration-stone-300 hover:decoration-amber-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  My SAV Journey
                </button>
                <span className="text-stone-300" aria-hidden="true">
                  ·
                </span>
                <button
                  type="button"
                  onClick={() => onNavigate('teaching-activities')}
                  className="hover:text-amber-900 underline underline-offset-4 decoration-stone-300 hover:decoration-amber-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Teaching & Activities
                </button>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Structured Academic Atlas & Curriculum Overview Card */}
          <div className="lg:col-span-5 flex">
            <div className="w-full bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-stone-500 font-medium">
                      Curriculum Architecture
                    </p>
                    <h2 className="text-xl font-serif-display font-semibold text-stone-900 mt-1">
                      Bilingual School Study Hub
                    </h2>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-amber-900/10 text-amber-900 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                </div>

                {/* Bespoke SVG Academic Illustration */}
                <div className="my-5 rounded-xl bg-[#F7F4EE] border border-stone-200/80 p-5">
                  <svg
                    viewBox="0 0 420 145"
                    className="w-full h-32 text-stone-800"
                    role="img"
                    aria-label="Illustration of Social Science globe, open textbooks, and structured chapter notes"
                  >
                    <defs>
                      <linearGradient id="warmPaper" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FEFDFB" />
                        <stop offset="100%" stopColor="#EDE6D8" />
                      </linearGradient>
                    </defs>
                    {/* Desk baseline */}
                    <line x1="15" y1="128" x2="405" y2="128" stroke="#A8A29E" strokeWidth="1.5" />
                    {/* Terrestrial Globe on left */}
                    <circle cx="75" cy="72" r="34" fill="url(#warmPaper)" stroke="#78350F" strokeWidth="2" />
                    <ellipse cx="75" cy="72" rx="16" ry="34" fill="none" stroke="#92400E" strokeWidth="1.2" strokeDasharray="3 2" />
                    <line x1="41" y1="72" x2="109" y2="72" stroke="#92400E" strokeWidth="1.2" />
                    <path d="M 55 34 A 42 42 0 0 1 95 110" fill="none" stroke="#57534E" strokeWidth="2.5" />
                    <line x1="75" y1="112" x2="75" y2="128" stroke="#57534E" strokeWidth="3" />
                    <line x1="56" y1="128" x2="94" y2="128" stroke="#57534E" strokeWidth="3" />

                    {/* Open NCERT Textbook & Notes in center */}
                    <rect x="140" y="38" width="125" height="82" rx="4" fill="#FFFFFF" stroke="#57534E" strokeWidth="1.8" />
                    <line x1="202" y1="38" x2="202" y2="120" stroke="#D6D3D1" strokeWidth="1.5" />
                    <line x1="152" y1="54" x2="192" y2="54" stroke="#78350F" strokeWidth="2" />
                    <line x1="152" y1="67" x2="192" y2="67" stroke="#A8A29E" strokeWidth="1.5" />
                    <line x1="152" y1="78" x2="188" y2="78" stroke="#A8A29E" strokeWidth="1.5" />
                    <line x1="152" y1="89" x2="192" y2="89" stroke="#A8A29E" strokeWidth="1.5" />
                    <line x1="212" y1="54" x2="252" y2="54" stroke="#78350F" strokeWidth="2" />
                    <line x1="212" y1="67" x2="252" y2="67" stroke="#A8A29E" strokeWidth="1.5" />
                    <line x1="212" y1="78" x2="246" y2="78" stroke="#A8A29E" strokeWidth="1.5" />
                    <rect x="212" y="88" width="38" height="20" rx="2" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" />

                    {/* Presentation Slide / Digital Resource on right */}
                    <rect x="292" y="30" width="102" height="70" rx="5" fill="#FFFFFF" stroke="#44403C" strokeWidth="2" />
                    <rect x="300" y="38" width="86" height="12" rx="2" fill="#78350F" />
                    <rect x="300" y="56" width="38" height="34" rx="2" fill="#F5F5F4" stroke="#D6D3D1" strokeWidth="1" />
                    <line x1="345" y1="60" x2="384" y2="60" stroke="#78716C" strokeWidth="1.8" />
                    <line x1="345" y1="71" x2="380" y2="71" stroke="#78716C" strokeWidth="1.8" />
                    <line x1="345" y1="82" x2="375" y2="82" stroke="#78716C" strokeWidth="1.8" />
                    <line x1="343" y1="100" x2="343" y2="128" stroke="#44403C" strokeWidth="2.5" />
                    <line x1="322" y1="128" x2="364" y2="128" stroke="#44403C" strokeWidth="2.5" />
                  </svg>
                  <p className="text-xs text-stone-600 text-center mt-2">
                    Medium → Class (6–12) → Subject → Resource Type → Chapter → Content
                  </p>
                </div>

                {/* Structured Flow Overview */}
                <dl className="space-y-3 text-sm">
                  <div className="flex items-baseline justify-between py-1.5 border-b border-stone-100">
                    <dt className="text-stone-600 font-medium">Available Mediums</dt>
                    <dd className="text-stone-900 font-semibold">
                      हिंदी माध्यम · English Medium
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between py-1.5 border-b border-stone-100">
                    <dt className="text-stone-600 font-medium">Classes Covered</dt>
                    <dd className="text-stone-900 font-semibold font-mono-num">
                      Class 6 to Class 12
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between py-1.5 border-b border-stone-100">
                    <dt className="text-stone-600 font-medium">Resource Formats</dt>
                    <dd className="text-stone-900 font-semibold">
                      Notes · Q&A · Quiz · Worksheets
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
                <span>Curated by Chandan Ojha (B.Ed.)</span>
                <button
                  type="button"
                  onClick={() => onNavigate('learning-resources')}
                  className="font-semibold text-amber-900 hover:underline cursor-pointer"
                >
                  Start Learning →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Zone Website Overview Strip Below Hero Split */}
        <div className="mt-12 pt-8 border-t border-stone-200/90 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <button
            type="button"
            onClick={() => onNavigate('learning-resources')}
            className="text-left group p-5 rounded-xl bg-white border border-stone-200/90 hover:border-amber-800/60 transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between text-amber-900 mb-2">
              <span className="text-xs font-mono-num uppercase tracking-wider text-stone-500">
                01 · Main Hub
              </span>
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="text-base font-serif-display font-semibold text-stone-900 group-hover:text-amber-900 transition-colors">
              Learning Resources
            </h3>
            <p className="mt-1.5 text-xs text-stone-600 leading-relaxed">
              Chapter-wise Notes, Summaries, Q&A, Quizzes, Practice Sheets, and Books for Classes 6–12.
            </p>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('about')}
            className="text-left group p-5 rounded-xl bg-white border border-stone-200/90 hover:border-amber-800/60 transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between text-amber-900 mb-2">
              <span className="text-xs font-mono-num uppercase tracking-wider text-stone-500">
                02 · Educator Profile
              </span>
              <GraduationCap className="w-4 h-4" />
            </div>
            <h3 className="text-base font-serif-display font-semibold text-stone-900 group-hover:text-amber-900 transition-colors">
              About Me
            </h3>
            <p className="mt-1.5 text-xs text-stone-600 leading-relaxed">
              Chandan Ojha — Government Teacher & Social Science Educator exploring digital tools in education.
            </p>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('sav-journey')}
            className="text-left group p-5 rounded-xl bg-white border border-stone-200/90 hover:border-amber-800/60 transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between text-amber-900 mb-2">
              <span className="text-xs font-mono-num uppercase tracking-wider text-stone-500">
                03 · Teaching Chapter
              </span>
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="text-base font-serif-display font-semibold text-stone-900 group-hover:text-amber-900 transition-colors">
              My SAV Journey
            </h3>
            <p className="mt-1.5 text-xs text-stone-600 leading-relaxed">
              Experience as Former Teacher at Simultala Awasiya Vidyalaya (SAV), Jamui, RISE Club & Mission LiFE.
            </p>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('teaching-activities')}
            className="text-left group p-5 rounded-xl bg-white border border-stone-200/90 hover:border-amber-800/60 transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between text-amber-900 mb-2">
              <span className="text-xs font-mono-num uppercase tracking-wider text-stone-500">
                04 · Pedagogy in Action
              </span>
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="text-base font-serif-display font-semibold text-stone-900 group-hover:text-amber-900 transition-colors">
              Teaching & Activities
            </h3>
            <p className="mt-1.5 text-xs text-stone-600 leading-relaxed">
              Classroom activities, Eco Club initiatives, student projects, and PowerPoint digital teaching aids.
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};
