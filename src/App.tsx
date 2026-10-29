/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Navbar, NavSectionId } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LearningResourcesSection } from './components/LearningResourcesSection';
import { AboutSection } from './components/AboutSection';
import { SavJourneySection } from './components/SavJourneySection';
import { TeachingActivitiesSection } from './components/TeachingActivitiesSection';
import { Footer } from './components/Footer';
import { ExplorerSelectionState, MediumId } from './types/education';

const SECTION_ORDER: NavSectionId[] = [
  'home',
  'learning-resources',
  'about',
  'sav-journey',
  'teaching-activities',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSectionId>('home');
  const [explorerSelection, setExplorerSelection] =
    useState<ExplorerSelectionState>({
      mediumId: null,
      classId: null,
      subjectId: null,
      resourceTypeId: null,
      chapterId: null,
    });

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY + 140;
      let current: NavSectionId = 'home';
      for (const id of SECTION_ORDER) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: NavSectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectMediumShortcut = (mediumId: MediumId) => {
    setExplorerSelection({
      mediumId,
      classId: null,
      subjectId: null,
      resourceTypeId: null,
      chapterId: null,
    });
    scrollToSection('learning-resources');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="flex-1">
        <HeroSection
          onNavigate={scrollToSection}
          onSelectMediumShortcut={handleSelectMediumShortcut}
        />

        <LearningResourcesSection
          selection={explorerSelection}
          onChangeSelection={setExplorerSelection}
        />

        <AboutSection />

        <SavJourneySection />

        <TeachingActivitiesSection />
      </main>

      <Footer
        onNavigate={scrollToSection}
        onSelectMediumShortcut={handleSelectMediumShortcut}
      />
    </div>
  );
}
