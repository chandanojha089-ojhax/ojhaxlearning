import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronRight,
  FolderOpen,
  GraduationCap,
  Layers,
  RotateCcw,
} from 'lucide-react';
import {
  ClassId,
  ExplorerSelectionState,
  MediumId,
  ResourceTypeId,
  SubjectId,
} from '../types/education';
import {
  BreadcrumbItem,
  buildResourceBreadcrumbs,
  getAllMediums,
  getAvailableResourceTypes,
  getChapterById,
  getChaptersForResourceType,
  getClassesForMedium,
  getSubjectsForClass,
  stepBackSelection,
} from '../utils/resourceEngine';
import { ChapterContentView } from './ChapterContentView';

interface LearningResourcesSectionProps {
  selection: ExplorerSelectionState;
  onChangeSelection: (next: ExplorerSelectionState) => void;
}

interface QuickPathPreset {
  label: string;
  mediumId: MediumId;
  classId: ClassId;
  subjectId: SubjectId;
  resourceTypeId: ResourceTypeId;
}

const FEATURED_PATHS: QuickPathPreset[] = [
  {
    label: 'हिंदी · Class 6 · Social Science · Notes',
    mediumId: 'hindi',
    classId: 'class-6',
    subjectId: 'social-science',
    resourceTypeId: 'notes',
  },
  {
    label: 'हिंदी · Class 7 · Social Science · Quiz',
    mediumId: 'hindi',
    classId: 'class-7',
    subjectId: 'social-science',
    resourceTypeId: 'quiz',
  },
  {
    label: 'हिंदी · Class 8 · Science · Practice Questions',
    mediumId: 'hindi',
    classId: 'class-8',
    subjectId: 'science',
    resourceTypeId: 'practice',
  },
  {
    label: 'हिंदी · Class 9 · Social Science · Important Questions',
    mediumId: 'hindi',
    classId: 'class-9',
    subjectId: 'social-science',
    resourceTypeId: 'important',
  },
  {
    label: 'हिंदी · Class 10 · Mathematics · Notes',
    mediumId: 'hindi',
    classId: 'class-10',
    subjectId: 'mathematics',
    resourceTypeId: 'notes',
  },
  {
    label: 'हिंदी · Class 11 · Political Science · Summary',
    mediumId: 'hindi',
    classId: 'class-11',
    subjectId: 'political-science',
    resourceTypeId: 'summary',
  },
  {
    label: 'हिंदी · Class 12 · Economics · Q&A',
    mediumId: 'hindi',
    classId: 'class-12',
    subjectId: 'economics',
    resourceTypeId: 'qa',
  },
  {
    label: 'English · Class 10 · Social Science · Notes',
    mediumId: 'english',
    classId: 'class-10',
    subjectId: 'social-science',
    resourceTypeId: 'notes',
  },
  {
    label: 'English · Class 12 · Economics · Q&A',
    mediumId: 'english',
    classId: 'class-12',
    subjectId: 'economics',
    resourceTypeId: 'qa',
  },
];

export const LearningResourcesSection: React.FC<
  LearningResourcesSectionProps
> = ({ selection, onChangeSelection }) => {
  const mediums = getAllMediums();
  const breadcrumbs = buildResourceBreadcrumbs(selection);
  const isHi = selection.mediumId === 'hindi';

  const handleBreadcrumbClick = (step: BreadcrumbItem['step']) => {
    switch (step) {
      case 'root':
        onChangeSelection({
          mediumId: null,
          classId: null,
          subjectId: null,
          resourceTypeId: null,
          chapterId: null,
        });
        break;
      case 'medium':
        onChangeSelection({
          ...selection,
          classId: null,
          subjectId: null,
          resourceTypeId: null,
          chapterId: null,
        });
        break;
      case 'class':
        onChangeSelection({
          ...selection,
          subjectId: null,
          resourceTypeId: null,
          chapterId: null,
        });
        break;
      case 'subject':
        onChangeSelection({
          ...selection,
          resourceTypeId: null,
          chapterId: null,
        });
        break;
      case 'resourceType':
        onChangeSelection({
          ...selection,
          chapterId: null,
        });
        break;
      case 'chapter':
        break;
    }
  };

  const handleBack = () => {
    onChangeSelection(stepBackSelection(selection));
  };

  const handleQuickPreset = (preset: QuickPathPreset) => {
    const chapters = getChaptersForResourceType(
      preset.mediumId,
      preset.classId,
      preset.subjectId,
      preset.resourceTypeId
    );
    onChangeSelection({
      mediumId: preset.mediumId,
      classId: preset.classId,
      subjectId: preset.subjectId,
      resourceTypeId: preset.resourceTypeId,
      chapterId: chapters[0]?.id || null,
    });
  };

  // Determine current active step (1 to 6)
  const currentStepNumber = !selection.mediumId
    ? 1
    : !selection.classId
      ? 2
      : !selection.subjectId
        ? 3
        : !selection.resourceTypeId
          ? 4
          : !selection.chapterId
            ? 5
            : 6;

  const availableClasses = selection.mediumId
    ? getClassesForMedium(selection.mediumId)
    : [];

  const availableSubjects =
    selection.mediumId && selection.classId
      ? getSubjectsForClass(selection.mediumId, selection.classId)
      : [];

  const availableResourceTypes =
    selection.mediumId && selection.classId && selection.subjectId
      ? getAvailableResourceTypes(
          selection.mediumId,
          selection.classId,
          selection.subjectId
        )
      : [];

  const availableChapters =
    selection.mediumId &&
    selection.classId &&
    selection.subjectId &&
    selection.resourceTypeId
      ? getChaptersForResourceType(
          selection.mediumId,
          selection.classId,
          selection.subjectId,
          selection.resourceTypeId
        )
      : [];

  const activeChapter =
    selection.mediumId &&
    selection.classId &&
    selection.subjectId &&
    selection.chapterId
      ? getChapterById(
          selection.mediumId,
          selection.classId,
          selection.subjectId,
          selection.chapterId
        )
      : undefined;

  return (
    <section
      id="learning-resources"
      className="scroll-mt-16 py-16 lg:py-24 border-b border-stone-200/90 bg-[#FAF8F5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-amber-900 font-semibold">
            Structured Study Repository · Classes 6 to 12
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif-display font-semibold text-stone-950 tracking-tight">
            Learning Resources (अध्ययन संसाधन)
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Navigate step-by-step through{' '}
            <span className="font-semibold text-stone-800">
              Medium → Class → Subject → Resource Type → Chapter → Content
            </span>{' '}
            to access chapter-wise notes, quick revision summaries, question &
            answers, interactive quizzes, practice sheets, and study materials.
          </p>
        </div>

        {/* Quick Direct Curriculum Path Shortcuts */}
        <div className="mt-8 p-4 sm:p-5 rounded-xl bg-white border border-stone-200/90">
          <div className="flex items-center justify-between gap-4 mb-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Quick Curriculum Jumps (प्रमुख अध्ययन पथ):
            </p>
            {selection.mediumId && (
              <button
                type="button"
                onClick={() =>
                  onChangeSelection({
                    mediumId: null,
                    classId: null,
                    subjectId: null,
                    resourceTypeId: null,
                    chapterId: null,
                  })
                }
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 hover:underline cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Explorer</span>
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {FEATURED_PATHS.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleQuickPreset(preset)}
                className="px-3 py-1.5 text-xs font-medium text-stone-800 bg-[#FAF8F5] hover:bg-amber-100/70 hover:text-amber-950 border border-stone-200/90 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Breadcrumb & Back Control Bar */}
        <div className="mt-6 bg-white border border-stone-200/90 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4">
          <nav
            aria-label="Resource Explorer Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm"
          >
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <React.Fragment key={crumb.step}>
                  {index > 0 && (
                    <ChevronRight
                      className="w-4 h-4 text-stone-400 shrink-0"
                      aria-hidden="true"
                    />
                  )}
                  <button
                    type="button"
                    onClick={() => handleBreadcrumbClick(crumb.step)}
                    disabled={isLast}
                    className={`px-2 py-1 rounded-md transition-colors ${
                      isLast
                        ? 'font-semibold text-amber-950 bg-amber-100/70 cursor-default'
                        : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100 cursor-pointer'
                    }`}
                  >
                    {crumb.label}
                  </button>
                </React.Fragment>
              );
            })}
          </nav>

          {selection.mediumId && (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-stone-800 bg-[#FAF8F5] border border-stone-300 rounded-lg hover:bg-stone-200/70 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>
                {isHi ? 'पीछे जाएँ (Back)' : 'Back to Previous Step'}
              </span>
            </button>
          )}
        </div>

        {/* 6-Step Progress Indicator */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-6 gap-2 text-xs">
          {[
            { num: 1, label: '1. Medium' },
            { num: 2, label: '2. Class (6–12)' },
            { num: 3, label: '3. Subject' },
            { num: 4, label: '4. Resource Type' },
            { num: 5, label: '5. Chapter' },
            { num: 6, label: '6. Study Content' },
          ].map((st) => {
            const isDone = currentStepNumber > st.num;
            const isCurrent = currentStepNumber === st.num;
            return (
              <div
                key={st.num}
                className={`py-2 px-3 rounded-lg border font-mono-num text-center ${
                  isCurrent
                    ? 'bg-stone-900 text-white border-stone-900 font-semibold'
                    : isDone
                      ? 'bg-amber-50/90 text-amber-950 border-amber-300 font-medium'
                      : 'bg-white text-stone-400 border-stone-200'
                }`}
              >
                {st.label}
              </div>
            );
          })}
        </div>

        {/* STAGE 1: SELECT MEDIUM */}
        {currentStepNumber === 1 && (
          <div className="mt-8">
            <h3 className="text-xl font-serif-display font-semibold text-stone-900 mb-4">
              Step 1: Select Your Medium of Instruction (माध्यम चुनें)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mediums.map((med) => (
                <button
                  key={med.id}
                  type="button"
                  onClick={() =>
                    onChangeSelection({
                      mediumId: med.id,
                      classId: null,
                      subjectId: null,
                      resourceTypeId: null,
                      chapterId: null,
                    })
                  }
                  className="text-left group p-6 sm:p-8 rounded-2xl bg-white border border-stone-200/90 hover:border-amber-800 transition-colors flex flex-col justify-between cursor-pointer shadow-2xs"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono-num uppercase tracking-wider text-amber-900 font-semibold">
                        {med.id === 'hindi'
                          ? 'Bilingual Curriculum · हिंदी'
                          : 'Bilingual Curriculum · English'}
                      </span>
                      <BookOpen className="w-5 h-5 text-amber-900" />
                    </div>
                    <h4 className="mt-3 text-2xl sm:text-3xl font-serif-display font-semibold text-stone-950 group-hover:text-amber-900 transition-colors">
                      {med.nativeLabel}
                    </h4>
                    <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
                      {med.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-800 group-hover:text-amber-900">
                    <span>Classes 6, 7, 8, 9, 10, 11 & 12 Available</span>
                    <span className="inline-flex items-center gap-1">
                      <span>Select {med.label}</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 2: SELECT CLASS (CLASSES 6 TO 12) */}
        {currentStepNumber === 2 && selection.mediumId && (
          <div className="mt-8">
            <h3 className="text-xl font-serif-display font-semibold text-stone-900 mb-4">
              {isHi
                ? 'चरण 2: अपनी कक्षा चुनें (Select Your Class — Class 6 to Class 12)'
                : 'Step 2: Select Your Class (Classes 6 to 12)'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {availableClasses.map((cls) => {
                const subjectsCount = getSubjectsForClass(
                  selection.mediumId!,
                  cls.id
                ).length;
                return (
                  <button
                    key={cls.id}
                    type="button"
                    onClick={() =>
                      onChangeSelection({
                        ...selection,
                        classId: cls.id,
                        subjectId: null,
                        resourceTypeId: null,
                        chapterId: null,
                      })
                    }
                    className="text-left group p-5 rounded-xl bg-white border border-stone-200/90 hover:border-amber-800 transition-colors flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                        <span className="font-mono-num font-semibold text-amber-900">
                          {isHi ? cls.stageHi : cls.stageEn}
                        </span>
                        <GraduationCap className="w-4 h-4 text-stone-400 group-hover:text-amber-900" />
                      </div>
                      <h4 className="text-xl font-serif-display font-semibold text-stone-950 group-hover:text-amber-900 transition-colors">
                        {isHi ? cls.labelHi : cls.labelEn}
                      </h4>
                    </div>
                    <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
                      <span className="font-mono-num">
                        {subjectsCount} {isHi ? 'विषय उपलब्ध' : 'Subjects Configured'}
                      </span>
                      <span className="font-semibold text-amber-900">→</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STAGE 3: SELECT SUBJECT */}
        {currentStepNumber === 3 && selection.mediumId && selection.classId && (
          <div className="mt-8">
            <h3 className="text-xl font-serif-display font-semibold text-stone-900 mb-4">
              {isHi
                ? 'चरण 3: विषय चुनें (Select Subject)'
                : 'Step 3: Select Subject'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {availableSubjects.map((sub) => (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() =>
                    onChangeSelection({
                      ...selection,
                      subjectId: sub.id,
                      resourceTypeId: null,
                      chapterId: null,
                    })
                  }
                  className="text-left group p-6 rounded-xl bg-white border border-stone-200/90 hover:border-amber-800 transition-colors flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-amber-900 font-medium mb-2">
                      <span>
                        {isHi ? 'निर्धारित पाठ्यक्रम विषय' : 'Configured Curriculum Subject'}
                      </span>
                      <Layers className="w-4 h-4" />
                    </div>
                    <h4 className="text-lg font-serif-display font-semibold text-stone-950 group-hover:text-amber-900 transition-colors">
                      {isHi ? sub.labelHi : sub.labelEn}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {isHi ? sub.descriptionHi : sub.descriptionEn}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-800 group-hover:text-amber-900">
                    <span>
                      {isHi ? 'संसाधन प्रकार देखें' : 'View Resource Types'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 4: SELECT RESOURCE TYPE */}
        {currentStepNumber === 4 &&
          selection.mediumId &&
          selection.classId &&
          selection.subjectId && (
            <div className="mt-8">
              <h3 className="text-xl font-serif-display font-semibold text-stone-900 mb-4">
                {isHi
                  ? 'चरण 4: अध्ययन संसाधन का प्रकार चुनें (Select Resource Type)'
                  : 'Step 4: Select Resource Type'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {availableResourceTypes.map((rt) => {
                  const chaptersWithRt = getChaptersForResourceType(
                    selection.mediumId!,
                    selection.classId!,
                    selection.subjectId!,
                    rt.id
                  );
                  return (
                    <button
                      key={rt.id}
                      type="button"
                      onClick={() =>
                        onChangeSelection({
                          ...selection,
                          resourceTypeId: rt.id,
                          chapterId: null,
                        })
                      }
                      className="text-left group p-6 rounded-xl bg-white border border-stone-200/90 hover:border-amber-800 transition-colors flex flex-col justify-between cursor-pointer"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                          <span className="font-mono-num font-semibold text-amber-900">
                            {chaptersWithRt.length}{' '}
                            {isHi ? 'अध्याय उपलब्ध' : 'Chapters Available'}
                          </span>
                          <FolderOpen className="w-4 h-4 text-amber-900" />
                        </div>
                        <h4 className="text-lg font-serif-display font-semibold text-stone-950 group-hover:text-amber-900 transition-colors">
                          {isHi ? rt.labelHi : rt.labelEn}
                        </h4>
                        <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                          {isHi ? rt.descriptionHi : rt.descriptionEn}
                        </p>
                      </div>
                      <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-800 group-hover:text-amber-900">
                        <span>{isHi ? 'अध्याय चुनें' : 'Select Chapter'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        {/* STAGE 5: SELECT CHAPTER */}
        {currentStepNumber === 5 &&
          selection.mediumId &&
          selection.classId &&
          selection.subjectId &&
          selection.resourceTypeId && (
            <div className="mt-8">
              <h3 className="text-xl font-serif-display font-semibold text-stone-900 mb-4">
                {isHi
                  ? 'चरण 5: अध्याय चुनें (Select Chapter)'
                  : 'Step 5: Select Chapter'}
              </h3>
              <div className="space-y-4">
                {availableChapters.map((ch) => (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() =>
                      onChangeSelection({
                        ...selection,
                        chapterId: ch.id,
                      })
                    }
                    className="w-full text-left group p-6 rounded-xl bg-white border border-stone-200/90 hover:border-amber-800 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
                  >
                    <div>
                      <span className="text-xs font-mono-num uppercase tracking-wider text-amber-900 font-semibold">
                        {isHi
                          ? `अध्याय ${ch.chapterNumber} (Chapter ${ch.chapterNumber})`
                          : `Chapter ${ch.chapterNumber}`}
                      </span>
                      <h4 className="mt-1 text-lg sm:text-xl font-serif-display font-semibold text-stone-950 group-hover:text-amber-900 transition-colors">
                        {ch.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-stone-600">
                        {ch.subtitle}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-stone-900 text-white group-hover:bg-amber-900 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors">
                      <span>
                        {isHi ? 'अध्ययन सामग्री खोलें' : 'Open Chapter Content'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

        {/* STAGE 6: CHAPTER CONTENT VIEW */}
        {currentStepNumber === 6 &&
          selection.mediumId &&
          selection.resourceTypeId &&
          activeChapter && (
            <div className="mt-8">
              <ChapterContentView
                mediumId={selection.mediumId}
                chapter={activeChapter}
                activeResourceType={selection.resourceTypeId}
                availableResourceTypes={availableResourceTypes}
                onSwitchResourceType={(nextRt) =>
                  onChangeSelection({
                    ...selection,
                    resourceTypeId: nextRt,
                  })
                }
                onBackToChapters={() =>
                  onChangeSelection({
                    ...selection,
                    chapterId: null,
                  })
                }
              />
            </div>
          )}
      </div>
    </section>
  );
};
