import { buildMediumCurriculumFromRepository } from '../content/contentRegistry';
import {
  CLASSES,
  MEDIUMS,
  RESOURCE_TYPES,
  SUBJECTS,
} from '../data/taxonomy';
import {
  ChapterData,
  ClassId,
  ClassMeta,
  ExplorerSelectionState,
  MediumCurriculum,
  MediumId,
  MediumMeta,
  QuizQuestion,
  ResourceTypeId,
  ResourceTypeMeta,
  SubjectId,
  SubjectMeta,
} from '../types/education';

export function buildFullCurriculum(): Record<MediumId, MediumCurriculum> {
  return {
    hindi: buildMediumCurriculumFromRepository('hindi'),
    english: buildMediumCurriculumFromRepository('english'),
  };
}

export const FULL_CURRICULUM_STORE = buildFullCurriculum();

export function getAllMediums(): MediumMeta[] {
  return MEDIUMS;
}

export function getClassesForMedium(mediumId: MediumId): ClassMeta[] {
  const mediumData = FULL_CURRICULUM_STORE[mediumId];
  if (!mediumData) return [];
  const configuredClassIds = new Set(
    mediumData.classes
      .filter((c) => c.subjects.length > 0)
      .map((c) => c.classId)
  );
  return CLASSES.filter((c) => configuredClassIds.has(c.id));
}

export function getSubjectsForClass(
  mediumId: MediumId,
  classId: ClassId
): SubjectMeta[] {
  const mediumData = FULL_CURRICULUM_STORE[mediumId];
  if (!mediumData) return [];
  const classData = mediumData.classes.find((c) => c.classId === classId);
  if (!classData) return [];

  const configuredIds = new Set(
    classData.subjects
      .filter((s) => s.chapters.length > 0)
      .map((s) => s.subjectId)
  );

  return classData.subjects
    .filter((s) => configuredIds.has(s.subjectId))
    .map((s) => SUBJECTS.find((meta) => meta.id === s.subjectId)!)
    .filter(Boolean);
}

export function isResourceAvailableInChapter(
  chapter: ChapterData,
  resourceTypeId: ResourceTypeId
): boolean {
  const res = chapter.resources;
  switch (resourceTypeId) {
    case 'notes':
      return Boolean(res.notes && res.notes.sections.length > 0);
    case 'summary':
      return Boolean(res.summary && res.summary.coreTakeaways.length > 0);
    case 'qa':
      return Boolean(res.qa && res.qa.length > 0);
    case 'quiz':
      return Boolean(res.quiz && res.quiz.length > 0);
    case 'practice':
      return Boolean(res.practice && res.practice.length > 0);
    case 'important':
      return Boolean(res.important && res.important.length > 0);
    case 'activities':
      return Boolean(res.activities && res.activities.length > 0);
    case 'worksheets':
      return Boolean(res.worksheets && res.worksheets.tasks.length > 0);
    case 'books':
      return Boolean(res.books && res.books.length > 0);
    default:
      return false;
  }
}

export function getAvailableResourceTypes(
  mediumId: MediumId,
  classId: ClassId,
  subjectId: SubjectId
): ResourceTypeMeta[] {
  const mediumData = FULL_CURRICULUM_STORE[mediumId];
  if (!mediumData) return [];
  const classData = mediumData.classes.find((c) => c.classId === classId);
  if (!classData) return [];
  const subjectData = classData.subjects.find((s) => s.subjectId === subjectId);
  if (!subjectData) return [];

  return RESOURCE_TYPES.filter((rt) =>
    subjectData.chapters.some((ch) => isResourceAvailableInChapter(ch, rt.id))
  );
}

export function getChaptersForResourceType(
  mediumId: MediumId,
  classId: ClassId,
  subjectId: SubjectId,
  resourceTypeId: ResourceTypeId
): ChapterData[] {
  const mediumData = FULL_CURRICULUM_STORE[mediumId];
  if (!mediumData) return [];
  const classData = mediumData.classes.find((c) => c.classId === classId);
  if (!classData) return [];
  const subjectData = classData.subjects.find((s) => s.subjectId === subjectId);
  if (!subjectData) return [];

  return subjectData.chapters.filter((ch) =>
    isResourceAvailableInChapter(ch, resourceTypeId)
  );
}

export function getChapterById(
  mediumId: MediumId,
  classId: ClassId,
  subjectId: SubjectId,
  chapterId: string
): ChapterData | undefined {
  const mediumData = FULL_CURRICULUM_STORE[mediumId];
  if (!mediumData) return undefined;
  const classData = mediumData.classes.find((c) => c.classId === classId);
  if (!classData) return undefined;
  const subjectData = classData.subjects.find((s) => s.subjectId === subjectId);
  if (!subjectData) return undefined;
  return subjectData.chapters.find((ch) => ch.id === chapterId);
}

export interface BreadcrumbItem {
  step: 'root' | 'medium' | 'class' | 'subject' | 'resourceType' | 'chapter';
  label: string;
}

export function buildResourceBreadcrumbs(
  state: ExplorerSelectionState
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ step: 'root', label: 'Home' }];

  if (!state.mediumId) return items;
  const mediumMeta = MEDIUMS.find((m) => m.id === state.mediumId);
  items.push({
    step: 'medium',
    label:
      state.mediumId === 'hindi'
        ? 'Hindi Medium (हिंदी माध्यम)'
        : mediumMeta?.label || 'English Medium',
  });

  if (!state.classId) return items;
  const classMeta = CLASSES.find((c) => c.id === state.classId);
  items.push({
    step: 'class',
    label: classMeta?.labelEn || state.classId,
  });

  if (!state.subjectId) return items;
  const subjectMeta = SUBJECTS.find((s) => s.id === state.subjectId);
  items.push({
    step: 'subject',
    label: subjectMeta?.labelEn || state.subjectId,
  });

  if (!state.resourceTypeId) return items;
  const rtMeta = RESOURCE_TYPES.find((r) => r.id === state.resourceTypeId);
  items.push({
    step: 'resourceType',
    label: rtMeta?.shortLabelEn || state.resourceTypeId,
  });

  if (!state.chapterId) return items;
  const chapter = getChapterById(
    state.mediumId,
    state.classId,
    state.subjectId,
    state.chapterId
  );
  items.push({
    step: 'chapter',
    label: chapter ? `Chapter ${chapter.chapterNumber}` : 'Chapter',
  });

  return items;
}

export function stepBackSelection(
  state: ExplorerSelectionState
): ExplorerSelectionState {
  if (state.chapterId) {
    return { ...state, chapterId: null };
  }
  if (state.resourceTypeId) {
    return { ...state, resourceTypeId: null };
  }
  if (state.subjectId) {
    return { ...state, subjectId: null };
  }
  if (state.classId) {
    return { ...state, classId: null };
  }
  if (state.mediumId) {
    return {
      mediumId: null,
      classId: null,
      subjectId: null,
      resourceTypeId: null,
      chapterId: null,
    };
  }
  return state;
}

export function evaluateQuizSubmission(
  questions: QuizQuestion[],
  selectedAnswers: Record<string, number>
): {
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  scorePercentage: number;
} {
  const totalQuestions = questions.length;
  let answeredCount = 0;
  let correctCount = 0;

  for (const q of questions) {
    const picked = selectedAnswers[q.id];
    if (picked !== undefined) {
      answeredCount += 1;
      if (picked === q.correctIndex) {
        correctCount += 1;
      }
    }
  }

  const scorePercentage =
    totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  return {
    totalQuestions,
    answeredCount,
    correctCount,
    scorePercentage,
  };
}
