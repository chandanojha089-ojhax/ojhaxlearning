import React, { useState } from 'react';
import { TEACHING_ACTIVITIES_DATA } from '../data/profileAndActivities';

export const TeachingActivitiesSection: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');

  const filteredCategories =
    selectedCategoryId === 'all'
      ? TEACHING_ACTIVITIES_DATA
      : TEACHING_ACTIVITIES_DATA.filter((cat) => cat.id === selectedCategoryId);

  return (
    <section
      id="teaching-activities"
      className="scroll-mt-16 py-16 lg:py-24 border-b border-stone-200/90 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-amber-900 font-semibold">
              Classroom Practice, Student Initiatives & Digital Pedagogy
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif-display font-semibold text-stone-950 tracking-tight">
              Teaching & Activities
            </h2>
            <p className="mt-3 text-base text-stone-600 leading-relaxed">
              An overview of my ongoing educational work—spanning interactive
              classroom activities, student-led inquiry, Eco Club initiatives,
              PowerPoint presentations, and practical digital teaching
              resources.
            </p>
          </div>
        </div>

        {/* Interactive Filter Controls */}
        <div className="mt-8 flex flex-wrap items-center gap-1.5 p-1.5 bg-stone-100 rounded-xl">
          <button
            type="button"
            onClick={() => setSelectedCategoryId('all')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              selectedCategoryId === 'all'
                ? 'bg-stone-900 text-white shadow-2xs'
                : 'text-stone-600 hover:text-stone-950 hover:bg-stone-200/60'
            }`}
          >
            All Areas ({TEACHING_ACTIVITIES_DATA.length})
          </button>
          {TEACHING_ACTIVITIES_DATA.map((cat) => {
            const isSelected = selectedCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategoryId(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-stone-900 text-white shadow-2xs'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-200/60'
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((item, idx) => (
            <article
              key={item.id}
              className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200/90 flex flex-col justify-between"
            >
              <div>
                <p className="text-xs font-mono-num uppercase tracking-wider text-amber-900 font-semibold">
                  0{idx + 1} · {item.kicker}
                </p>
                <h3 className="mt-2 text-xl font-serif-display font-semibold text-stone-950">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-stone-700 leading-relaxed">
                  {item.description}
                </p>

                <ul className="mt-4 pt-4 border-t border-stone-200/80 space-y-2">
                  {item.practices.map((prac, pIdx) => (
                    <li
                      key={pIdx}
                      className="text-xs sm:text-sm text-stone-700 flex items-start gap-2 leading-relaxed"
                    >
                      <span className="text-amber-900 font-bold">•</span>
                      <span>{prac}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-200/80 text-xs text-stone-600">
                <span className="font-semibold text-stone-900">
                  Educational Value:{' '}
                </span>
                {item.classroomApplication}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
