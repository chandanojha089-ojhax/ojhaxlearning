import React from 'react';
import { CHANDAN_PROFILE } from '../data/profileAndActivities';
import { NavSectionId } from './Navbar';
import { MediumId } from '../types/education';

interface FooterProps {
  onNavigate: (section: NavSectionId) => void;
  onSelectMediumShortcut: (medium: MediumId) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectMediumShortcut,
}) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Educator Info (5 cols) */}
          <div className="md:col-span-5">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="text-2xl font-serif-display font-bold text-white tracking-tight"
            >
              {CHANDAN_PROFILE.brandName}
            </a>
            <p className="mt-2 text-base font-serif-display italic text-amber-300/90">
              {CHANDAN_PROFILE.tagline}
            </p>
            <div className="mt-4 space-y-1 text-sm text-stone-300">
              <p className="font-semibold text-white">{CHANDAN_PROFILE.name}</p>
              <p className="text-stone-400">
                {CHANDAN_PROFILE.designation} · {CHANDAN_PROFILE.education}
              </p>
            </div>
            <p className="mt-4 text-xs text-stone-400 leading-relaxed max-w-sm">
              A personal educational platform dedicated to simple, practical,
              and engaging learning across Classes 6 to 12 in both Hindi Medium
              and English Medium.
            </p>
          </div>

          {/* Website Navigation Links (4 cols) */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Website Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('about');
                  }}
                  className="hover:text-white transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#sav-journey"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('sav-journey');
                  }}
                  className="hover:text-white transition-colors"
                >
                  My SAV Journey
                </a>
              </li>
              <li>
                <a
                  href="#learning-resources"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('learning-resources');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Learning Resources
                </a>
              </li>
              <li>
                <a
                  href="#teaching-activities"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('teaching-activities');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Teaching & Activities
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Medium Access (3 cols) */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Learning Mediums
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectMediumShortcut('hindi')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  हिंदी माध्यम (Classes 6–12)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectMediumShortcut('english')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  English Medium (Classes 6–12)
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} {CHANDAN_PROFILE.brandName} ·{' '}
            {CHANDAN_PROFILE.name} ({CHANDAN_PROFILE.designation})
          </p>
          <p>{CHANDAN_PROFILE.tagline}</p>
        </div>
      </div>
    </footer>
  );
};
