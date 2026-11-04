import {
  CLASS_SUBJECT_MAP,
  synthesizeChaptersForSubject,
} from '../data/subjectCatalogBlueprints';
import { CLASSES } from '../data/taxonomy';
import {
  ChapterData,
  ClassId,
  MediumCurriculum,
  MediumId,
  SubjectId,
} from '../types/education';
import { getEnglishMediumCuratedMap } from './englishMedium';
import {
  ClassSubjectChapterMap,
  getHindiMediumCuratedMap,
} from './hindiMedium';

/**
 * SCALABLE LOCAL CONTENT MANAGEMENT REGISTRY
 *
 * Hierarchy:
 *   Medium (hindi | english)
 *   → Class (class-6 .. class-12)
 *   → Subject (social-science, science, mathematics, hindi, english, history, geography, political-science, economics, sociology, physics, chemistry, biology)
 *   → Resource Type (notes, summary, qa, quiz, practice, important, activities, worksheets, books)
 *   → Chapter
 *   → Content
 *
 * Separate content sources:
 *   - Hindi Medium: src/content/hindiMedium/index.ts
 *   - English Medium: src/content/englishMedium/index.ts
 */
export const HINDI_MEDIUM_REPOSITORY: ClassSubjectChapterMap =
  getHindiMediumCuratedMap();

export const ENGLISH_MEDIUM_REPOSITORY: ClassSubjectChapterMap =
  getEnglishMediumCuratedMap();

export function getRepositoryForMedium(
  mediumId: MediumId
): ClassSubjectChapterMap {
  return mediumId === 'hindi'
    ? HINDI_MEDIUM_REPOSITORY
    : ENGLISH_MEDIUM_REPOSITORY;
}

export function buildMediumCurriculumFromRepository(
  mediumId: MediumId
): MediumCurriculum {
  const mediumRepo = getRepositoryForMedium(mediumId);

  return {
    mediumId,
    classes: CLASSES.map((cls) => {
      const configuredSubjects = CLASS_SUBJECT_MAP[cls.id] || [];
      const classRepo = mediumRepo[cls.id] || {};

      // Also include any new subject added directly in the medium repository for this class
      const repoSubjectKeys = Object.keys(classRepo) as SubjectId[];
      const allSubjectIds = Array.from(
        new Set<SubjectId>([...configuredSubjects, ...repoSubjectKeys])
      );

      return {
        classId: cls.id,
        subjects: allSubjectIds.map((subjectId) => {
          const baselineChapters = synthesizeChaptersForSubject(
            mediumId,
            cls.id,
            subjectId,
            cls.number
          );
          const explicitChapters = classRepo[subjectId] || [];

          if (explicitChapters.length === 0) {
            return {
              subjectId,
              chapters: baselineChapters,
            };
          }

          // Merge explicit chapters with baseline chapters so every subject has complete chapters
          const byNumber = new Map<number, ChapterData>();
          for (const baseCh of baselineChapters) {
            byNumber.set(baseCh.chapterNumber, baseCh);
          }
          for (const expCh of explicitChapters) {
            byNumber.set(expCh.chapterNumber, expCh);
          }

          return {
            subjectId,
            chapters: Array.from(byNumber.values()).sort(
              (a, b) => a.chapterNumber - b.chapterNumber
            ),
          };
        }),
      };
    }),
  };
}

/**
 * Helper to programmatically register or append a chapter to any Medium, Class, and Subject
 * without modifying any UI components.
 */
export function registerChapterContent(
  mediumId: MediumId,
  classId: ClassId,
  subjectId: SubjectId,
  chapter: ChapterData
): void {
  const repo = getRepositoryForMedium(mediumId);
  if (!repo[classId]) {
    repo[classId] = {};
  }
  const currentList = repo[classId]![subjectId] || [];
  const existingIdx = currentList.findIndex((c) => c.id === chapter.id);
  if (existingIdx >= 0) {
    currentList[existingIdx] = chapter;
  } else {
    currentList.push(chapter);
  }
  repo[classId]![subjectId] = currentList;
}
