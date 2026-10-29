export interface SAVMilestone {
  id: string;
  theme: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface TeachingActivityCategory {
  id: string;
  title: string;
  kicker: string;
  description: string;
  practices: string[];
  classroomApplication: string;
}

export const CHANDAN_PROFILE = {
  name: 'Chandan Ojha',
  designation: 'Government Teacher | Social Science Educator',
  education: 'B.Ed.',
  brandName: 'OjhaX',
  tagline: '“Learning. Exploring. Growing.”',
  shortIntro:
    'Welcome to OjhaX — a personal educational platform created by Chandan Ojha, a Government Teacher and Social Science Educator dedicated to making classroom learning simple, practical, and meaningful for students across Classes 6 to 12.',
  platformPurpose:
    'This website brings together structured bilingual study materials (Hindi Medium and English Medium), chapter-wise notes, quick revision summaries, interactive quizzes, practice worksheets, and classroom activity ideas so that students can learn with clarity and confidence.',
  aboutParagraphs: [
    'I am Chandan Ojha, a Government Teacher and Social Science Educator with a B.Ed. degree. At the heart of my work is a simple belief: education should never feel distant or mechanical—teaching should be simple, practical, and genuinely engaging for every learner in the classroom.',
    'In teaching Social Science and allied school subjects, I focus on connecting textbook concepts with everyday civic life, geographical observation, historical inquiry, and economic understanding. When students see how concepts relate to their own surroundings, learning transforms from rote memorisation into lasting comprehension.',
    'Alongside traditional chalkboard and textbook pedagogy, I actively use digital tools in education. I create and use structured PowerPoint presentations, visual concept maps, and digital resources for classroom teaching and student activities to make complex chapters easier to visualise and revise.',
    'As an education-focused digital learner, I also explore practical applications of AI in teaching and education—using modern workflows thoughtfully to organise bilingual study notes, design formative quizzes, prepare practice worksheets, and curate accessible educational content for school students.',
  ],
  corePillars: [
    {
      title: 'Simple, Practical & Engaging Pedagogy',
      description:
        'Breaking down complex Social Science and school curriculum topics into clear, relatable ideas grounded in real-life examples.',
    },
    {
      title: 'Digital Tools & PowerPoint Resources',
      description:
        'Creating structured PowerPoint presentations, visual timelines, map slides, and digital handouts that support active classroom instruction.',
    },
    {
      title: 'Practical AI Exploration in Education',
      description:
        'Exploring thoughtful, practical ways to apply AI tools in lesson structuring, bilingual content preparation, and formative student practice.',
    },
    {
      title: 'Bilingual Student-Centred Content',
      description:
        'Developing structured chapter-wise study resources in both Hindi Medium and English Medium for Classes 6 through 12.',
    },
  ],
};

export const SAV_JOURNEY_DATA = {
  heading: 'My SAV Journey',
  roleTitle: 'Former Teacher at Simultala Awasiya Vidyalaya (SAV), Jamui',
  leadNarrative:
    'Serving as a teacher at Simultala Awasiya Vidyalaya (SAV), Jamui remains an important and cherished chapter of my teaching journey. Working in a residential academic environment offered meaningful opportunities to engage closely with curious learners both inside and beyond the classroom.',
  secondaryNarrative:
    'During this chapter of my teaching life, my focus remained on making Social Studies a living, inquiry-driven subject—combining rigorous academic preparation with co-curricular clubs, environmental stewardship, and activity-based learning.',
  chapters: [
    {
      id: 'sav-social-studies',
      theme: 'Social Studies Teaching & Academic Rigor',
      subtitle: 'Conceptual Clarity & Inquiry in the Classroom',
      description:
        'Taught Social Studies with an emphasis on conceptual depth, map reading, civic awareness, and analytical answer writing. Encouraged students to ask questions, compare historical perspectives, and connect geographical phenomena with real-world contexts.',
      highlights: [
        'Interactive classroom discussions on History, Geography, Political Life, and Economics',
        'Structured chapter notes, map-marking exercises, and analytical writing practice',
        'Supporting students in building strong foundational understanding across middle and secondary classes',
      ],
    },
    {
      id: 'sav-student-centred',
      theme: 'Student-Centred & Activity-Based Learning',
      subtitle: 'Working Closely with Residential Learners',
      description:
        'Fostered a participatory classroom atmosphere where students learned through dialogue, peer collaboration, thematic presentations, and hands-on academic activities rather than passive listening.',
      highlights: [
        'Group presentations, quiz circles, and student-led topic summaries',
        'Activity-based exploration of constitutional values, resources, and local heritage',
        'Mentoring students across both academic study routines and co-curricular participation',
      ],
    },
    {
      id: 'sav-rise-club',
      theme: 'RISE Social Studies Club',
      subtitle: 'Subject Enrichment & Co-Curricular Engagement',
      description:
        'Contributed to subject enrichment through the RISE Social Studies Club—creating a collaborative space where students explored civic themes, current affairs, quiz rounds, map challenges, and heritage discussions.',
      highlights: [
        'Thematic discussions on Indian Constitution, parliamentary processes, and historical milestones',
        'Geographical map literacy and quiz sessions designed to make Social Studies enjoyable',
        'Encouraging student curiosity, public speaking, and collaborative teamwork',
      ],
    },
    {
      id: 'sav-mission-life',
      theme: 'Mission LiFE & Eco Club Activities',
      subtitle: 'Environmental Awareness & Sustainable Habits',
      description:
        'Engaged students in Mission LiFE (Lifestyle for Environment) and Eco Club initiatives, connecting classroom geography and environmental studies with practical daily habits of conservation and sustainability.',
      highlights: [
        'Student awareness drives on water conservation, waste reduction, and energy saving',
        'Campus greenery care, cleanliness reflections, and ecological responsibility discussions',
        'Linking textbook environmental chapters with responsible everyday citizenship',
      ],
    },
  ] as SAVMilestone[],
};

export const TEACHING_ACTIVITIES_DATA: TeachingActivityCategory[] = [
  {
    id: 'classroom-activities',
    title: 'Classroom Activities',
    kicker: 'Interactive Pedagogy',
    description:
      'Everyday classroom sessions are designed to keep students actively thinking, questioning, and participating through structured micro-activities.',
    practices: [
      'Map-reading and atlas locating drills at the end of Geography lessons',
      'Timeline sequencing and cause-and-effect charting in History chapters',
      'Mock civic dialogues and constitutional article discussions in Political Science',
      'Quick 5-minute formative board quizzes to verify concept retention',
    ],
    classroomApplication:
      'Helps every student participate actively regardless of their initial confidence level.',
  },
  {
    id: 'student-activities',
    title: 'Student Activities',
    kicker: 'Experiential & Peer Learning',
    description:
      'Encouraging students to learn from and with one another through structured group inquiries, chart preparation, and thematic speaking tasks.',
    practices: [
      'Student-led 3-minute chapter recaps at the start of a new class period',
      'Peer quiz teams where groups frame and answer textbook-based questions',
      'Creating thematic wall charts on river systems, fundamental rights, and economic sectors',
      'Vocabulary and key-term flashcards in both Hindi and English Medium',
    ],
    classroomApplication:
      'Builds communication skills, self-expression, and collaborative responsibility among students.',
  },
  {
    id: 'eco-club-activities',
    title: 'Eco Club Activities',
    kicker: 'Environment & Mission LiFE',
    description:
      'Connecting environmental education with tangible daily habits so students understand ecological stewardship as a lived responsibility.',
    practices: [
      'Observing local biodiversity, seasonal weather patterns, and soil/water conservation methods',
      'Mission LiFE pledges focusing on reducing single-use plastic and conserving electricity and water',
      'Plantation care and school campus cleanliness awareness sessions',
      'Student posters and short reflections on sustainable development goals',
    ],
    classroomApplication:
      'Transforms abstract environmental geography concepts into mindful everyday habits.',
  },
  {
    id: 'educational-projects',
    title: 'Educational Projects',
    kicker: 'Inquiry-Based Assignments',
    description:
      'Guiding students through small, practical project assignments that encourage observation, local data collection, and structured presentation.',
    practices: [
      'Local village/town livelihood and economic activity observation surveys',
      'Scrapbook projects on Indian freedom movement leaders and regional heritage',
      'Disaster preparedness and local resource mapping exercises',
      'Comparative study charts on forms of government and democratic institutions',
    ],
    classroomApplication:
      'Develops independent observation, analytical organisation, and presentation skills.',
  },
  {
    id: 'digital-teaching',
    title: 'Digital Teaching',
    kicker: 'Technology-Enabled Instruction',
    description:
      'Integrating digital tools thoughtfully into daily teaching and lesson preparation to support visual clarity and continuous revision.',
    practices: [
      'Using digital maps, historical diagrams, and structured visual layouts in the classroom',
      'Exploring practical applications of AI to structure bilingual study notes and question banks',
      'Organising chapter-wise digital quizzes and revision checklists for self-paced student practice',
      'Blending traditional board work with clear digital visual aids',
    ],
    classroomApplication:
      'Bridges classroom instruction with structured self-study material accessible anytime.',
  },
  {
    id: 'powerpoint-resources',
    title: 'PowerPoint / Digital Resources',
    kicker: 'Visual Classroom Presentations',
    description:
      'Creating and using clean, well-structured PowerPoint presentations and digital study slides tailored for school-level curriculum topics.',
    practices: [
      'Chapter-wise slide decks with clear bullet points, flowcharts, and comparative tables',
      'Visual map slides highlighting physical features, soil types, and historical sites',
      'Step-by-step revision slides for quick pre-examination classroom recaps',
      'Bilingual slide summaries supporting both Hindi Medium and English Medium learners',
    ],
    classroomApplication:
      'Makes abstract concepts visually structured and easy for students to follow and note down.',
  },
  {
    id: 'useful-teaching-resources',
    title: 'Useful Teaching Resources',
    kicker: 'Curated Study & Revision Aids',
    description:
      'Developing practical, curriculum-aligned study aids that help students revise systematically and prepare effectively for school and board assessments.',
    practices: [
      'Chapter-wise Notes and Quick Revision Summary tables for Classes 6–12',
      'Structured Question & Answer banks covering very short, short, and long answer formats',
      'Topic-wise MCQ Quizzes and printable Practice Worksheets',
      'Curated guides to NCERT/SCERT textbooks and foundational study materials',
    ],
    classroomApplication:
      'Provides students with reliable, distraction-free study material directly aligned with their syllabus.',
  },
];
