export type MediumId = 'hindi' | 'english';

export type ClassId =
  | 'class-6'
  | 'class-7'
  | 'class-8'
  | 'class-9'
  | 'class-10'
  | 'class-11'
  | 'class-12';

export type SubjectId =
  | 'social-science'
  | 'science'
  | 'mathematics'
  | 'hindi'
  | 'english'
  | 'history'
  | 'geography'
  | 'political-science'
  | 'economics'
  | 'sociology'
  | 'physics'
  | 'chemistry'
  | 'biology';

export type ResourceTypeId =
  | 'notes'
  | 'summary'
  | 'qa'
  | 'quiz'
  | 'practice'
  | 'important'
  | 'activities'
  | 'worksheets'
  | 'books';

export interface MediumMeta {
  id: MediumId;
  label: string;
  nativeLabel: string;
  description: string;
}

export interface ClassMeta {
  id: ClassId;
  number: number;
  labelEn: string;
  labelHi: string;
  stageEn: string;
  stageHi: string;
}

export interface SubjectMeta {
  id: SubjectId;
  labelEn: string;
  labelHi: string;
  category: 'middle-secondary' | 'senior-humanities' | 'senior-science' | 'language';
  descriptionEn: string;
  descriptionHi: string;
}

export interface ResourceTypeMeta {
  id: ResourceTypeId;
  labelEn: string;
  labelHi: string;
  shortLabelEn: string;
  shortLabelHi: string;
  descriptionEn: string;
  descriptionHi: string;
}

export interface NoteSection {
  heading: string;
  body: string;
  keyPoints?: string[];
}

export interface QAItem {
  id: string;
  question: string;
  answer: string;
  questionType?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
}

export interface PracticeQuestionItem {
  id: string;
  prompt: string;
  difficulty: string;
  hintOrKey: string;
}

export interface ImportantQuestionItem {
  id: string;
  question: string;
  examFocus: string;
  keyAnswerPoints: string[];
}

export interface ActivityItem {
  id: string;
  title: string;
  objective: string;
  materialsNeeded: string;
  steps: string[];
  learningOutcome: string;
}

export interface WorksheetTask {
  id: string;
  sectionTitle: string;
  instructions: string;
  items: string[];
}

export interface BookStudyMaterial {
  id: string;
  title: string;
  classLabel: string;
  subjectLabel: string;
  authorOrPublisher: string;
  description: string;
  keyTopicsCovered: string[];
}

export interface ChapterData {
  id: string;
  chapterNumber: number;
  title: string;
  subtitle: string;
  resources: {
    notes?: {
      introduction: string;
      sections: NoteSection[];
      keyTerms: { term: string; meaning: string }[];
    };
    summary?: {
      overview: string;
      coreTakeaways: string[];
      quickRevisionTable: { concept: string; detail: string }[];
    };
    qa?: QAItem[];
    quiz?: QuizQuestion[];
    practice?: PracticeQuestionItem[];
    important?: ImportantQuestionItem[];
    activities?: ActivityItem[];
    worksheets?: {
      title: string;
      durationMinutes: number;
      maxMarks: number;
      tasks: WorksheetTask[];
    };
    books?: BookStudyMaterial[];
  };
}

export interface SubjectCurriculum {
  subjectId: SubjectId;
  chapters: ChapterData[];
}

export interface ClassCurriculum {
  classId: ClassId;
  subjects: SubjectCurriculum[];
}

export interface MediumCurriculum {
  mediumId: MediumId;
  classes: ClassCurriculum[];
}

export interface ExplorerSelectionState {
  mediumId: MediumId | null;
  classId: ClassId | null;
  subjectId: SubjectId | null;
  resourceTypeId: ResourceTypeId | null;
  chapterId: string | null;
}
