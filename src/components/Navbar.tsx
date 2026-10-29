import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export type NavSectionId =
  | 'home'
  | 'about'
  | 'sav-journey'
  | 'learning-resources'
  | 'teaching-activities';

interface NavbarProps {
  activeSection: NavSectionId;
  onNavigate: (section: NavSectionId) => void;
}

const NAV_ITEMS: { id: NavSectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'sav-journey', label: 'My SAV Journey' },
  { id: 'learning-resources', label: 'Learning Resources' },
  { id: 'teaching-activities', label: 'Teaching & Activities' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    section: NavSectionId
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(section);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-2xl font-serif-display font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-900"
        >
          OjhaX
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Main Website Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
                  isActive
                    ? 'text-stone-950 border-amber-800 font-semibold'
                    : 'border-transparent hover:text-stone-950 hover:border-stone-300'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action + responsive hamburger on mobile */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={(e) => handleNavClick(e, 'learning-resources')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-amber-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Explore Resources
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center p-2.5 rounded-lg text-stone-700 hover:text-stone-950 hover:bg-stone-200/60 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Website Dropdown Menu for Mobile/Tablet */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Website Navigation"
          className="md:hidden bg-[#FAF8F5] border-b border-stone-200 px-4 pt-2 pb-5 space-y-1"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-stone-200/70 text-stone-950 font-semibold'
                    : 'text-stone-700 hover:bg-stone-100 hover:text-stone-950'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-2">
            <button
              type="button"
              onClick={(e) => handleNavClick(e, 'learning-resources')}
              className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-stone-900 rounded-lg hover:bg-amber-900 transition-colors cursor-pointer"
            >
              Open Learning Resources (Classes 6–12)
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};
