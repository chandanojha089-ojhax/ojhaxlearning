import { CURATED_SUBJECT_ENTRIES } from '../../data/coreCurriculumData';
import { ChapterData, ClassId, SubjectId } from '../../types/education';
import { ClassSubjectChapterMap } from '../hindiMedium';

/**
 * ENGLISH MEDIUM CONTENT REPOSITORY
 * Organized Class-wise -> Subject-wise -> Chapter-wise -> Resource Types (1 to 9).
 *
 * To add a new chapter or resource in English Medium:
 * Simply add a ChapterData object under the appropriate ClassId and SubjectId below.
 * The website will automatically detect and display only the available resource types and chapters.
 */
const ADDITIONAL_ENGLISH_CHAPTERS: ClassSubjectChapterMap = {
  'class-6': {
    'social-science': [
      {
        id: 'en-c6-sst-ch2',
        chapterNumber: 2,
        title: 'Globe: Latitudes and Longitudes & Motions of the Earth',
        subtitle: 'Heat Zones of the Earth, Prime Meridian, Indian Standard Time (IST), Rotation and Revolution',
        resources: {
          notes: {
            introduction:
              'A globe is a true miniature model of the Earth. By using the grid of horizontal parallels of latitude and vertical meridians of longitude, geographers can pinpoint any location on Earth and calculate local and standard time accurately.',
            sections: [
              {
                heading: '1. Important Parallels of Latitude and Heat Zones',
                body: 'The Equator represents the zero degree (0°) latitude and divides the Earth into the Northern and Southern Hemispheres. Between the Tropic of Cancer (23½°N) and the Tropic of Capricorn (23½°S), the midday sun is exactly overhead at least once a year, forming the Torrid Zone. Beyond the tropics lie the Temperate Zones (up to 66½° N/S) and the Frigid Zones near the Poles.',
                keyPoints: [
                  'Torrid Zone: Receives maximum solar heat between 23½°N and 23½°S.',
                  'Temperate Zone: Moderate temperatures between the Tropics and the Arctic/Antarctic Circles.',
                  'Frigid Zone: Very cold polar regions where rays of the sun are always slanting.',
                ],
              },
              {
                heading: '2. Longitudes and Indian Standard Time (82½°E)',
                body: 'Meridians of longitude run from the North Pole to the South Pole, with the Prime Meridian (0°) passing through Greenwich, UK. As the Earth rotates 360° in 24 hours (15° per hour or 1° in 4 minutes), India adopts 82°30\'E as its Standard Meridian, which is 5 hours and 30 minutes ahead of GMT.',
              },
            ],
            keyTerms: [
              { term: 'Equator (0° Latitude)', meaning: 'An imaginary circular line dividing the Earth into Northern and Southern Hemispheres.' },
              { term: 'Grid', meaning: 'The intersecting network of parallels of latitude and meridians of longitude on a globe.' },
              { term: 'Circle of Illumination', meaning: 'The circle that divides day from night on the globe.' },
            ],
          },
          summary: {
            overview:
              'Latitudes determine climatic heat zones, longitudes govern time calculation, rotation causes day and night, and revolution around the sun causes seasonal changes.',
            coreTakeaways: [
              'The Tropic of Cancer (23½°N) passes right through the middle of India.',
              'Earth rotates from west to east, so places east of Greenwich are ahead of GMT.',
              'Summer Solstice occurs on 21st June and Winter Solstice on 22nd December in the Northern Hemisphere.',
            ],
            quickRevisionTable: [
              { concept: 'Tropic of Cancer', detail: '23½° North Latitude' },
              { concept: 'Standard Meridian of India', detail: '82½° East Longitude (+5:30 GMT)' },
              { concept: 'Equinox Dates', detail: '21st March and 23rd September (Equal day and night)' },
            ],
          },
          qa: [
            {
              id: 'en-c6-sst-ch2-qa1',
              question: 'Why does the Torrid Zone receive the maximum amount of heat?',
              answer:
                'The midday sun is directly overhead at least once a year on all latitudes in between the Tropic of Cancer and the Tropic of Capricorn. Because vertical rays of the sun concentrate solar energy over a smaller surface area, this region receives the maximum heat and is called the Torrid Zone.',
              questionType: 'Short Answer',
            },
            {
              id: 'en-c6-sst-ch2-qa2',
              question: 'Why is it 5:30 p.m. in India when it is 12:00 noon in London?',
              answer:
                'India’s Standard Meridian is located at 82°30\' East of the Prime Meridian at Greenwich (London). Since the Earth rotates 1° in 4 minutes, 82.5 × 4 minutes = 330 minutes = 5 hours 30 minutes. Because India lies east of Greenwich, Indian Standard Time is 5 hours and 30 minutes ahead of GMT.',
              questionType: 'Numerical & Conceptual Q&A',
            },
          ],
          quiz: [
            {
              id: 'en-c6-sst-ch2-q1',
              question: 'What is the value of the Prime Meridian passing through Greenwich?',
              options: ['0° Longitude', '90° East', '23½° North', '180° Longitude'],
              correctIndex: 0,
              explanation: 'The Prime Meridian at Greenwich is designated as 0° Longitude.',
            },
            {
              id: 'en-c6-sst-ch2-q2',
              question: 'The Frigid Zone lies near which geographical regions?',
              options: ['The Equator', 'The Poles', 'The Tropic of Cancer', 'The Indian Ocean'],
              correctIndex: 1,
              explanation: 'The Frigid Zones lie between the Arctic Circle and North Pole, and the Antarctic Circle and South Pole.',
            },
            {
              id: 'en-c6-sst-ch2-q3',
              question: 'Direct rays of the sun fall on the Equator on which of the following Equinox dates?',
              options: ['21st March', '21st June', '22nd December', '15th August'],
              correctIndex: 0,
              explanation: 'On 21st March and 23rd September, direct rays of the sun fall on the equator (Equinox).',
            },
            {
              id: 'en-c6-sst-ch2-q4',
              question: 'Daily motion of the Earth on its axis is called:',
              options: ['Revolution', 'Rotation', 'Inclination', 'Solstice'],
              correctIndex: 1,
              explanation: 'Rotation is the daily movement of the Earth on its axis taking about 24 hours.',
            },
          ],
          practice: [
            {
              id: 'en-c6-sst-ch2-p1',
              prompt: 'Draw a neat diagram of the globe showing the Equator, Tropics, Arctic and Antarctic Circles, and the three Heat Zones.',
              difficulty: 'Diagram Practice',
              hintOrKey: 'Mark 0°, 23½°N/S, 66½°N/S, and 90°N/S clearly and shade Torrid, Temperate, and Frigid zones.',
            },
          ],
          important: [
            {
              id: 'en-c6-sst-ch2-imp1',
              question: 'Differentiate between Rotation and Revolution of the Earth.',
              examFocus: 'Term Exam Important Question (3 Marks)',
              keyAnswerPoints: [
                'Rotation is the spinning of the Earth on its axis in 24 hours, causing day and night.',
                'Revolution is the movement of the Earth around the Sun in a fixed orbit taking 365¼ days, causing change of seasons.',
              ],
            },
          ],
          activities: [
            {
              id: 'en-c6-sst-ch2-act1',
              title: 'Classroom Torch & Globe Day-Night Demonstration',
              objective: 'Visualise how the Circle of Illumination separates day and night on a rotating globe.',
              materialsNeeded: 'Classroom globe, torchlight.',
              steps: [
                'Shine a torch onto the globe from one side in a dimly lit corner of the classroom.',
                'Rotate the globe slowly from West to East and observe how India moves from sunrise to noon and sunset.',
              ],
              learningOutcome: 'Concrete spatial understanding of Earth’s rotation and time zones.',
            },
          ],
          worksheets: {
            title: 'Worksheet 2: Latitudes, Longitudes & Earth Motions',
            durationMinutes: 30,
            maxMarks: 15,
            tasks: [
              {
                id: 'en-c6-sst-ch2-ws1',
                sectionTitle: 'Section A: Concept Check',
                instructions: 'Answer in one or two sentences:',
                items: [
                  '1. What is the total number of meridians of longitude?',
                  '2. Why do poles experience about six months of day and six months of night?',
                ],
              },
            ],
          },
          books: [
            {
              id: 'en-c6-sst-ch2-bk1',
              title: 'The Earth: Our Habitat (Class 6 Geography)',
              classLabel: 'Class 6',
              subjectLabel: 'Social Science',
              authorOrPublisher: 'NCERT',
              description: 'Foundational geography textbook introducing the solar system, globe coordinates, maps, and major domains of the Earth.',
              keyTopicsCovered: ['Globe: Latitudes and Longitudes', 'Motions of the Earth', 'Maps', 'Major Domains of the Earth'],
            },
          ],
        },
      },
    ],
  },
  'class-10': {
    'social-science': [
      {
        id: 'en-c10-sst-ch2',
        chapterNumber: 2,
        title: 'Nationalism in India & Resources and Development',
        subtitle: 'Non-Cooperation and Civil Disobedience Movements, Soil Classification, and Sustainable Resource Planning',
        resources: {
          notes: {
            introduction:
              'This essential Class 10 Social Science unit examines how Mahatma Gandhi transformed the Indian national movement into a mass struggle through Satyagraha, alongside the geographical classification of Indian soils and sustainable resource planning.',
            sections: [
              {
                heading: '1. The Idea of Satyagraha, Rowlatt Act & Non-Cooperation Movement',
                body: 'Returning to India in January 1915, Mahatma Gandhi organised successful Satyagraha movements in Champaran (1917, against the oppressive indigo plantation system), Kheda (1917), and Ahmedabad (1918). Following the Rowlatt Act (1919) and the Jallianwala Bagh tragedy (13 April 1919), the Non-Cooperation-Khilafat Movement was launched in January 1921.',
                keyPoints: [
                  'In February 1922, Mahatma Gandhi called off the Non-Cooperation Movement after the violent incident at Chauri Chaura.',
                  'In December 1929, the Lahore Congress under the presidency of Jawaharlal Nehru formalised the demand for "Purna Swaraj" (Full Independence).',
                ],
              },
              {
                heading: '2. The Salt March and the Civil Disobedience Movement (1930)',
                body: 'On 12 March 1930, Mahatma Gandhi started his historic 240-mile Salt March from Sabarmati Ashram to the coastal town of Dandi with 78 trusted volunteers. Reaching Dandi on 6 April 1930, he ceremonially violated the colonial salt law, launching the Civil Disobedience Movement.',
              },
              {
                heading: '3. Soil Types in India & Resource Conservation',
                body: 'India features diverse relief and climate zones resulting in Alluvial Soils (Khadar and Bangar across the Northern Plains), Black Cotton Soils (Regur soils in the Deccan Trap), Red and Yellow Soils, Laterite Soils, and Arid Soils.',
              },
            ],
            keyTerms: [
              { term: 'Bangar vs. Khadar', meaning: 'Old alluvial soil with higher kankar nodules is Bangar; newer, fine, and fertile floodplain alluvial soil is Khadar.' },
              { term: 'Regur Soil', meaning: 'Black soil ideal for growing cotton, known for its high moisture-retention capacity.' },
              { term: 'Agenda 21', meaning: 'Declaration signed by world leaders in 1992 at the Rio de Janeiro Earth Summit to achieve global sustainable development.' },
            ],
          },
          summary: {
            overview:
              'Mass participation across peasants, tribals, women, and industrialists defined India’s freedom movement, while scientific resource planning and soil conservation safeguard India’s ecological future.',
            coreTakeaways: [
              'Salt was chosen as a unifying symbol because it was consumed equally by the rich and the poor.',
              'Alluvial soil is the most widespread and fertile soil group in India.',
              'Contour ploughing, terrace cultivation, strip cropping, and shelter belts prevent soil erosion.',
            ],
            quickRevisionTable: [
              { concept: 'Champaran Satyagraha', detail: '1917 (Bihar — Indigo peasants)' },
              { concept: 'Jallianwala Bagh Incident', detail: '13 April 1919 (Amritsar)' },
              { concept: 'Dandi Salt March', detail: '12 March 1930 to 6 April 1930' },
              { concept: 'Rio Earth Summit', detail: 'June 1992 (Brazil)' },
            ],
          },
          qa: [
            {
              id: 'en-c10-sst-ch2-qa1',
              question: 'Why did Mahatma Gandhi perceive "Salt" as a powerful symbol that could unite the nation?',
              answer:
                'Salt was one of the most essential items of food consumed by both the rich and the poor alike. The tax on salt and the government monopoly over its production revealed the most oppressive face of British colonial rule. By challenging the salt tax, Mahatma Gandhi connected the abstract ideal of Swaraj with a concrete everyday grievance shared by all Indians.',
              questionType: 'Board Exam Priority Q&A',
            },
            {
              id: 'en-c10-sst-ch2-qa2',
              question: 'Distinguish between Khadar and Bangar alluvial soils.',
              answer:
                '1. Bangar is old alluvial soil found slightly above the floodplains; it contains calcareous deposits (kankar) and is comparatively less fertile.\n2. Khadar is new alluvial soil renewed almost every year in floodplains; it has fine particles and is extremely fertile for intensive agriculture.',
              questionType: 'Geography Comparison Q&A',
            },
          ],
          quiz: [
            {
              id: 'en-c10-sst-ch2-q1',
              question: 'In which Congress Session was the resolution of "Purna Swaraj" (Full Independence) adopted in December 1929?',
              options: ['Nagpur Session', 'Lahore Session', 'Calcutta Session', 'Madras Session'],
              correctIndex: 1,
              explanation: 'The Lahore Congress in December 1929, presided over by Jawaharlal Nehru, formalised the demand for Purna Swaraj.',
            },
            {
              id: 'en-c10-sst-ch2-q2',
              question: 'Which soil is also known as "Regur Soil" and is ideal for growing cotton in the Deccan Plateau?',
              options: ['Alluvial Soil', 'Black Soil', 'Laterite Soil', 'Red Soil'],
              correctIndex: 1,
              explanation: 'Black soil is also called Regur soil or black cotton soil and is widespread across the Deccan trap region.',
            },
            {
              id: 'en-c10-sst-ch2-q3',
              question: 'Where did Mahatma Gandhi organise Satyagraha in 1917 to support peasants against the oppressive indigo plantation system?',
              options: ['Kheda', 'Champaran (Bihar)', 'Bardoli', 'Ahmedabad'],
              correctIndex: 1,
              explanation: 'In 1917, Mahatma Gandhi travelled to Champaran in Bihar to inspire peasants to struggle against the oppressive plantation system.',
            },
            {
              id: 'en-c10-sst-ch2-q4',
              question: 'Ploughing along the contour lines on hill slopes to decelerate the flow of water is known as:',
              options: ['Strip cropping', 'Contour ploughing', 'Gully erosion', 'Sheet erosion'],
              correctIndex: 1,
              explanation: 'Contour ploughing reduces the speed of water running down slopes and prevents soil erosion.',
            },
          ],
          practice: [
            {
              id: 'en-c10-sst-ch2-p1',
              prompt: 'Describe the three stages of Resource Planning in India.',
              difficulty: 'Board Exam Practice',
              hintOrKey: '1. Identification and inventory of resources across regions; 2. Evolving a planning structure with technology and institutions; 3. Matching resource development plans with overall national development plans.',
            },
          ],
          important: [
            {
              id: 'en-c10-sst-ch2-imp1',
              question: 'Explain four measures that can be taken to conserve soil and prevent soil erosion in India.',
              examFocus: 'Class 10 Board Exam Important Question (4 Marks)',
              keyAnswerPoints: [
                'Contour Ploughing: Ploughing parallel to contour lines on slopes to slow down water runoff.',
                'Terrace Cultivation: Cutting steps on western and central Himalayan slopes to restrict erosion.',
                'Strip Cropping: Leaving strips of grass to grow between crops to break the force of wind.',
                'Shelter Belts: Planting rows of trees to stabilise sand dunes and protect agricultural fields.',
              ],
            },
          ],
          activities: [
            {
              id: 'en-c10-sst-ch2-act1',
              title: 'Board Exam Map Skill: Centres of the Indian National Movement',
              objective: 'Locate and label key historical sites from 1917–1930 on a political outline map of India.',
              materialsNeeded: 'Political outline map of India, pencil.',
              steps: [
                'Locate Champaran (Bihar) — Movement of Indigo Planters.',
                'Locate Kheda and Dandi (Gujarat) — Peasant Satyagraha & Civil Disobedience Movement.',
                'Locate Amritsar (Punjab) and Chauri Chaura (Uttar Pradesh).',
              ],
              learningOutcome: 'Full preparation for compulsory Class 10 Board History map items.',
            },
          ],
          worksheets: {
            title: 'Class 10 Social Science Board Practice Sheet',
            durationMinutes: 40,
            maxMarks: 20,
            tasks: [
              {
                id: 'en-c10-sst-ch2-ws1',
                sectionTitle: 'Section A: Chronology & Short Answers',
                instructions: 'Write accurate answers for each item:',
                items: [
                  '1. Who wrote the book Hind Swaraj in 1909?',
                  '2. Explain the significance of the Poona Pact of September 1932.',
                  '3. Name three states having Black Soil and the main crop grown in it.',
                ],
              },
            ],
          },
          books: [
            {
              id: 'en-c10-sst-ch2-bk1',
              title: 'India and the Contemporary World – II & Contemporary India – II',
              classLabel: 'Class 10',
              subjectLabel: 'Social Science',
              authorOrPublisher: 'NCERT',
              description: 'Official Class 10 History and Geography textbooks prescribed for Secondary Board Examinations.',
              keyTopicsCovered: ['Nationalism in India', 'Resources and Development', 'Water Resources & Agriculture', 'Power Sharing & Federalism'],
            },
          ],
        },
      },
    ],
  },
};

export function getEnglishMediumCuratedMap(): ClassSubjectChapterMap {
  const map: ClassSubjectChapterMap = {};

  for (const entry of CURATED_SUBJECT_ENTRIES) {
    if (entry.mediumId !== 'english') continue;
    if (!map[entry.classId]) {
      map[entry.classId] = {};
    }
    map[entry.classId]![entry.subjectId] = [...entry.chapters];
  }

  for (const [classIdKey, subjectsObj] of Object.entries(
    ADDITIONAL_ENGLISH_CHAPTERS
  )) {
    const classId = classIdKey as ClassId;
    if (!map[classId]) {
      map[classId] = {};
    }
    for (const [subKey, extraChapters] of Object.entries(subjectsObj || {})) {
      const subjectId = subKey as SubjectId;
      const existing = map[classId]![subjectId] || [];
      const merged = [...existing];
      for (const ch of extraChapters || []) {
        if (!merged.some((e) => e.id === ch.id)) {
          merged.push(ch);
        }
      }
      map[classId]![subjectId] = merged;
    }
  }

  return map;
}
