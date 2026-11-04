import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildResourceBreadcrumbs,
  evaluateQuizSubmission,
  getAllMediums,
  getAvailableResourceTypes,
  getChapterById,
  getChaptersForResourceType,
  getClassesForMedium,
  getSubjectsForClass,
  isResourceAvailableInChapter,
  stepBackSelection,
} from './resourceEngine';
import {
  ENGLISH_MEDIUM_REPOSITORY,
  HINDI_MEDIUM_REPOSITORY,
} from '../content/contentRegistry';
import { ClassId, MediumId, ResourceTypeId, SubjectId } from '../types/education';

test('Separate Hindi Medium and English Medium content repositories exist and are populated', () => {
  assert.ok(HINDI_MEDIUM_REPOSITORY['class-6']?.['social-science']?.length);
  assert.ok(HINDI_MEDIUM_REPOSITORY['class-7']?.['social-science']?.length);
  assert.ok(HINDI_MEDIUM_REPOSITORY['class-10']?.['social-science']?.length);
  assert.ok(ENGLISH_MEDIUM_REPOSITORY['class-6']?.['social-science']?.length);
  assert.ok(ENGLISH_MEDIUM_REPOSITORY['class-10']?.['social-science']?.length);
});

test('Both Hindi Medium and English Medium expose all classes from Class 6 to Class 12', () => {
  const mediums = getAllMediums();
  assert.equal(mediums.length, 2);

  for (const medium of mediums) {
    const classes = getClassesForMedium(medium.id);
    assert.equal(classes.length, 7);
    assert.deepEqual(
      classes.map((c) => c.number),
      [6, 7, 8, 9, 10, 11, 12]
    );
  }
});

test('Classes 6-10 configure middle/secondary subjects and Classes 11-12 configure senior subjects', () => {
  const c8Subjects = getSubjectsForClass('hindi', 'class-8').map((s) => s.id);
  assert.ok(c8Subjects.includes('social-science'));
  assert.ok(c8Subjects.includes('science'));
  assert.ok(c8Subjects.includes('mathematics'));
  assert.ok(c8Subjects.includes('hindi'));
  assert.ok(c8Subjects.includes('english'));

  const c11Subjects = getSubjectsForClass('hindi', 'class-11').map((s) => s.id);
  assert.ok(c11Subjects.includes('political-science'));
  assert.ok(c11Subjects.includes('history'));
  assert.ok(c11Subjects.includes('geography'));
  assert.ok(c11Subjects.includes('economics'));
  assert.ok(c11Subjects.includes('sociology'));
  assert.ok(c11Subjects.includes('physics'));
  assert.ok(c11Subjects.includes('chemistry'));
  assert.ok(c11Subjects.includes('biology'));
});

test('New multi-chapter sample entries in Hindi and English Medium support all 9 resource types and filter empty resources', () => {
  const all9Types: ResourceTypeId[] = [
    'notes',
    'summary',
    'qa',
    'quiz',
    'practice',
    'important',
    'activities',
    'worksheets',
    'books',
  ];

  // Verify Hindi Class 7 Social Science Chapter 2 has all 9 resource types
  const hiC7Ch2 = getChapterById('hindi', 'class-7', 'social-science', 'hi-c7-sst-ch2');
  assert.ok(hiC7Ch2, 'Expected Hindi Class 7 Social Science Chapter 2 to exist');
  for (const rt of all9Types) {
    assert.equal(
      isResourceAvailableInChapter(hiC7Ch2, rt),
      true,
      `Expected ${rt} to be available in hi-c7-sst-ch2`
    );
  }

  // Verify English Class 6 Social Science Chapter 2 has all 9 resource types
  const enC6Ch2 = getChapterById('english', 'class-6', 'social-science', 'en-c6-sst-ch2');
  assert.ok(enC6Ch2, 'Expected English Class 6 Social Science Chapter 2 to exist');
  for (const rt of all9Types) {
    assert.equal(
      isResourceAvailableInChapter(enC6Ch2, rt),
      true,
      `Expected ${rt} to be available in en-c6-sst-ch2`
    );
  }

  // Verify both Chapter 1 and Chapter 2 are returned for Class 10 Social Science in Hindi and English
  const hiC10Chs = getChaptersForResourceType('hindi', 'class-10', 'social-science', 'notes');
  assert.equal(hiC10Chs.length, 2);
  assert.deepEqual(hiC10Chs.map((c) => c.chapterNumber), [1, 2]);

  const enC10Chs = getChaptersForResourceType('english', 'class-10', 'social-science', 'notes');
  assert.equal(enC10Chs.length, 2);
  assert.deepEqual(enC10Chs.map((c) => c.chapterNumber), [1, 2]);
});

test('All 7 required Hindi Medium and English Medium content paths resolve to meaningful chapter content', () => {
  const requiredPaths: Array<{
    mediumId: MediumId;
    classId: ClassId;
    subjectId: SubjectId;
    resourceTypeId: ResourceTypeId;
  }> = [
    { mediumId: 'hindi', classId: 'class-6', subjectId: 'social-science', resourceTypeId: 'notes' },
    { mediumId: 'hindi', classId: 'class-7', subjectId: 'social-science', resourceTypeId: 'quiz' },
    { mediumId: 'hindi', classId: 'class-8', subjectId: 'science', resourceTypeId: 'practice' },
    { mediumId: 'hindi', classId: 'class-9', subjectId: 'social-science', resourceTypeId: 'important' },
    { mediumId: 'hindi', classId: 'class-10', subjectId: 'mathematics', resourceTypeId: 'notes' },
    { mediumId: 'hindi', classId: 'class-11', subjectId: 'political-science', resourceTypeId: 'summary' },
    { mediumId: 'hindi', classId: 'class-12', subjectId: 'economics', resourceTypeId: 'qa' },
    // English Medium equivalents
    { mediumId: 'english', classId: 'class-6', subjectId: 'social-science', resourceTypeId: 'notes' },
    { mediumId: 'english', classId: 'class-7', subjectId: 'social-science', resourceTypeId: 'quiz' },
    { mediumId: 'english', classId: 'class-8', subjectId: 'science', resourceTypeId: 'practice' },
    { mediumId: 'english', classId: 'class-9', subjectId: 'social-science', resourceTypeId: 'important' },
    { mediumId: 'english', classId: 'class-10', subjectId: 'mathematics', resourceTypeId: 'notes' },
    { mediumId: 'english', classId: 'class-11', subjectId: 'political-science', resourceTypeId: 'summary' },
    { mediumId: 'english', classId: 'class-12', subjectId: 'economics', resourceTypeId: 'qa' },
  ];

  for (const path of requiredPaths) {
    const resourceTypes = getAvailableResourceTypes(path.mediumId, path.classId, path.subjectId);
    assert.ok(
      resourceTypes.some((rt) => rt.id === path.resourceTypeId),
      `Expected resource type ${path.resourceTypeId} for ${path.mediumId} ${path.classId} ${path.subjectId}`
    );

    const chapters = getChaptersForResourceType(
      path.mediumId,
      path.classId,
      path.subjectId,
      path.resourceTypeId
    );
    assert.ok(chapters.length > 0, `Expected chapters for ${JSON.stringify(path)}`);
    const ch1 = chapters[0];
    assert.ok(ch1.title.length > 5);
  }
});

test('Breadcrumbs and stepBackSelection work accurately across all 6 hierarchy levels', () => {
  const chapters = getChaptersForResourceType('hindi', 'class-7', 'social-science', 'notes');
  const fullState = {
    mediumId: 'hindi' as const,
    classId: 'class-7' as const,
    subjectId: 'social-science' as const,
    resourceTypeId: 'notes' as const,
    chapterId: chapters[0].id,
  };

  const crumbs = buildResourceBreadcrumbs(fullState);
  assert.equal(crumbs.length, 6);
  assert.equal(crumbs[0].label, 'Home');
  assert.equal(crumbs[2].label, 'Class 7');
  assert.equal(crumbs[3].label, 'Social Science');
  assert.equal(crumbs[4].label, 'Notes');
  assert.equal(crumbs[5].label, 'Chapter 1');

  const back1 = stepBackSelection(fullState);
  assert.equal(back1.chapterId, null);
  assert.equal(back1.resourceTypeId, 'notes');

  const back2 = stepBackSelection(back1);
  assert.equal(back2.resourceTypeId, null);
  assert.equal(back2.subjectId, 'social-science');
});

test('Quiz scoring calculates correct answers and percentage accurately', () => {
  const chapters = getChaptersForResourceType('hindi', 'class-7', 'social-science', 'quiz');
  const quizQuestions = chapters[0].resources.quiz!;
  assert.ok(quizQuestions.length >= 4);

  const answers: Record<string, number> = {};
  for (const q of quizQuestions) {
    answers[q.id] = q.correctIndex;
  }

  const result = evaluateQuizSubmission(quizQuestions, answers);
  assert.equal(result.correctCount, quizQuestions.length);
  assert.equal(result.scorePercentage, 100);
});
