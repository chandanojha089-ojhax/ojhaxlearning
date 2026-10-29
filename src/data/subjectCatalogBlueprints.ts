import { ChapterData, ClassId, MediumId, SubjectId } from '../types/education';

export interface ChapterBlueprint {
  chapterNumber: number;
  titleHi: string;
  subtitleHi: string;
  titleEn: string;
  subtitleEn: string;
  coreConceptHi: string;
  coreConceptEn: string;
  secondaryConceptHi: string;
  secondaryConceptEn: string;
  term1Hi: { term: string; meaning: string };
  term2Hi: { term: string; meaning: string };
  term1En: { term: string; meaning: string };
  term2En: { term: string; meaning: string };
  quizHi: {
    question: string;
    options: [string, string, string, string];
    correctIndex: number;
    explanation: string;
  }[];
  quizEn: {
    question: string;
    options: [string, string, string, string];
    correctIndex: number;
    explanation: string;
  }[];
  bookTitleHi: string;
  bookTitleEn: string;
}

export const CLASS_SUBJECT_MAP: Record<ClassId, SubjectId[]> = {
  'class-6': ['social-science', 'science', 'mathematics', 'hindi', 'english'],
  'class-7': ['social-science', 'science', 'mathematics', 'hindi', 'english'],
  'class-8': ['social-science', 'science', 'mathematics', 'hindi', 'english'],
  'class-9': ['social-science', 'science', 'mathematics', 'hindi', 'english'],
  'class-10': ['social-science', 'science', 'mathematics', 'hindi', 'english'],
  'class-11': [
    'political-science',
    'history',
    'geography',
    'economics',
    'sociology',
    'hindi',
    'english',
    'mathematics',
    'physics',
    'chemistry',
    'biology',
  ],
  'class-12': [
    'economics',
    'political-science',
    'history',
    'geography',
    'sociology',
    'hindi',
    'english',
    'mathematics',
    'physics',
    'chemistry',
    'biology',
  ],
};

interface SubjectTopicSeed {
  titleHi: string;
  subtitleHi: string;
  titleEn: string;
  subtitleEn: string;
  concept1Hi: string;
  concept2Hi: string;
  concept1En: string;
  concept2En: string;
  term1Hi: [string, string];
  term2Hi: [string, string];
  term1En: [string, string];
  term2En: [string, string];
  q1Hi: [string, [string, string, string, string], number, string];
  q2Hi: [string, [string, string, string, string], number, string];
  q1En: [string, [string, string, string, string], number, string];
  q2En: [string, [string, string, string, string], number, string];
  bookHi: string;
  bookEn: string;
}

export const SUBJECT_SYLLABUS_SEEDS: Record<SubjectId, SubjectTopicSeed> = {
  'social-science': {
    titleHi: 'संसाधन, लोकतांत्रिक संस्थाएँ और आधुनिक भारत का निर्माण',
    subtitleHi: 'प्राकृतिक एवं मानव संसाधन, संवैधानिक मूल्य और ऐतिहासिक परिवर्तन',
    titleEn: 'Resources, Democratic Institutions & Making of Modern India',
    subtitleEn: 'Natural and Human Resources, Constitutional Values, and Historical Transformations',
    concept1Hi:
      'प्रत्येक वस्तु जिसका उपयोग मानवीय आवश्यकताओं को पूरा करने के लिए किया जा सकता है और जो प्रौद्योगिकी द्वारा सुलभ, आर्थिक रूप से संभाव्य तथा सांस्कृतिक रूप से मान्य है, "संसाधन" कहलाती है। संसाधनों का विवेकपूर्ण उपयोग और भावी पीढ़ी के लिए संरक्षण ही "सतत पोषणीय विकास" (Sustainable Development) है।',
    concept2Hi:
      'भारतीय संविधान शक्तियों के बँटवारे (संघवाद), मौलिक अधिकारों और संसदीय उत्तरदायित्व के माध्यम से नागरिकों की भागीदारी सुनिश्चित करता है।',
    concept1En:
      'Everything available in our environment which can be used to satisfy our needs—provided it is technologically accessible, economically feasible, and culturally acceptable—can be termed as a Resource. Balancing present needs with future conservation is Sustainable Development.',
    concept2En:
      'Indian constitutional democracy ensures citizen participation through federalism, separation of powers, fundamental rights, and parliamentary accountability.',
    term1Hi: ['सतत पोषणीय विकास', 'पर्यावरण को बिना नुकसान पहुँचाए वर्तमान और भावी पीढ़ी की आवश्यकताओं में संतुलन बनाए रखना।'],
    term2Hi: ['संघवाद (Federalism)', 'शासन की वह प्रणाली जिसमें सत्ता केंद्रीय प्राधिकार और राज्य सरकारों के बीच विभाजित होती है।'],
    term1En: ['Sustainable Development', 'Development that meets the needs of the present without compromising the ability of future generations.'],
    term2En: ['Federalism', 'A system of government in which power is divided between a central authority and various constituent units.'],
    q1Hi: [
      'निम्नलिखित में से कौन-सा "नवीकरणीय संसाधन" (Renewable Resource) का उदाहरण है?',
      ['कोयला', 'सौर एवं पवन ऊर्जा', 'पेट्रोलियम', 'प्राकृतिक गैस'],
      1,
      'सौर एवं पवन ऊर्जा असीमित और नवीकरणीय संसाधन हैं जो प्राकृतिक प्रक्रियाओं से निरंतर प्राप्त होते हैं।',
    ],
    q2Hi: [
      'भारतीय संविधान में कानून बनाने के विषयों को कितनी सूचियों में विभाजित किया गया है?',
      ['दो सूचियाँ', 'तीन सूचियाँ (संघ, राज्य, समवर्ती)', 'चार सूचियाँ', 'केवल एक केंद्रीय सूची'],
      1,
      'संविधान की सातवीं अनुसूची में संघ सूची, राज्य सूची और समवर्ती सूची का प्रावधान है।',
    ],
    q1En: [
      'Which of the following is an example of a Renewable Resource?',
      ['Coal', 'Solar and Wind Energy', 'Petroleum', 'Natural Gas'],
      1,
      'Solar and wind energy are renewable resources that are replenished naturally.',
    ],
    q2En: [
      'Into how many legislative lists does the Seventh Schedule of the Indian Constitution divide law-making subjects?',
      ['Two Lists', 'Three Lists (Union, State, Concurrent)', 'Four Lists', 'One Unitary List'],
      1,
      'The Seventh Schedule divides subjects into the Union List, State List, and Concurrent List.',
    ],
    bookHi: 'सामाजिक विज्ञान एनसीईआरटी/एससीईआरटी पाठ्यपुस्तक (इतिहास, भूगोल एवं नागरिक शास्त्र)',
    bookEn: 'NCERT / SCERT Social Science Textbook (History, Geography & Civics)',
  },
  science: {
    titleHi: 'पदार्थ की प्रकृति, सजीवों में जैव प्रक्रम तथा बल एवं ऊर्जा',
    subtitleHi: 'भौतिक व रासायनिक परिवर्तन, पोषण एवं श्वसन तथा गति के नियम',
    titleEn: 'Nature of Matter, Life Processes in Organisms & Force and Energy',
    subtitleEn: 'Physical and Chemical Changes, Nutrition and Respiration, and Laws of Motion',
    concept1Hi:
      'हरे पौधे सूर्य के प्रकाश और क्लोरोफिल की उपस्थिति में कार्बन डाइऑक्साइड तथा जल से अपना भोजन (ग्लूकोज़) स्वयं तैयार करते हैं, जिसे प्रकाश-संश्लेषण (Photosynthesis) कहते हैं। इस प्रक्रिया में ऑक्सीजन गैस मुक्त होती है जो सभी जीवधारियों के श्वसन के लिए अनिवार्य है।',
    concept2Hi:
      'किसी वस्तु की गति की अवस्था में परिवर्तन के लिए बल उत्तरदायी होता है, तथा ऊर्जा को न तो उत्पन्न किया जा सकता है और न ही नष्ट किया जा सकता है—केवल एक रूप से दूसरे रूप में रूपांतरित किया जा सकता है।',
    concept1En:
      'Autotrophic green plants synthesise their own food (glucose) from carbon dioxide and water in the presence of sunlight and chlorophyll through Photosynthesis, releasing life-sustaining oxygen.',
    concept2En:
      'Force causes a change in the state of motion of an object, while the Law of Conservation of Energy states that energy can neither be created nor destroyed, only transformed from one form to another.',
    term1Hi: ['प्रकाश-संश्लेषण (Photosynthesis)', 'हरे पौधों द्वारा सूर्य के प्रकाश और क्लोरोफिल की सहायता से भोजन निर्माण की प्रक्रिया।'],
    term2Hi: ['ऊर्जा संरक्षण का नियम', 'ऊर्जा केवल एक रूप से दूसरे रूप में बदलती है; कुल ऊर्जा नियत रहती है।'],
    term1En: ['Photosynthesis', 'Process by which green plants synthesise carbohydrates from CO₂ and water using sunlight and chlorophyll.'],
    term2En: ['Conservation of Energy', 'Total energy of an isolated system remains constant across transformations.'],
    q1Hi: [
      'पौधों की पत्तियों में पाया जाने वाला हरा वर्णक जो सूर्य के प्रकाश को अवशोषित करता है, क्या कहलाता है?',
      ['हीमोग्लोबिन', 'क्लोरोफिल (पर्णहरित)', 'जाइलम', 'फ्लोएम'],
      1,
      'क्लोरोफिल (पर्णहरित) सूर्य के प्रकाश की ऊर्जा का संग्रहण करने में पत्तियों की सहायता करता है।',
    ],
    q2Hi: [
      'अंतरराष्ट्रीय मात्रक प्रणाली (SI) में "बल" (Force) का मात्रक क्या है?',
      ['जूल (Joule)', 'न्यूटन (Newton)', 'वाट (Watt)', 'पास्कल (Pascal)'],
      1,
      'बल का SI मात्रक न्यूटन (N) या kg·m/s² होता है।',
    ],
    q1En: [
      'Which green pigment present in plant leaves captures solar energy during photosynthesis?',
      ['Haemoglobin', 'Chlorophyll', 'Xylem', 'Phloem'],
      1,
      'Chlorophyll traps solar energy required to synthesise food from carbon dioxide and water.',
    ],
    q2En: [
      'What is the SI unit of Force?',
      ['Joule', 'Newton', 'Watt', 'Pascal'],
      1,
      'The SI unit of Force is Newton (N), whereas Joule is the unit of Work/Energy.',
    ],
    bookHi: 'विज्ञान पाठ्यपुस्तक (एनसीईआरटी / एससीईआरटी पाठ्यक्रम)',
    bookEn: 'NCERT / SCERT Science Textbook',
  },
  mathematics: {
    titleHi: 'संख्या पद्धति, बीजगणितीय व्यंजक, ज्यामिति एवं क्षेत्रमिति',
    subtitleHi: 'परिमेय व वास्तविक संख्याएँ, समीकरण हल करने की विधियाँ और आकृतियों का क्षेत्रफल',
    titleEn: 'Number Systems, Algebraic Expressions, Geometry & Mensuration',
    subtitleEn: 'Rational and Real Numbers, Linear Equations, Geometric Properties, and Surface Area',
    concept1Hi:
      'वह संख्या जिसे p/q के रूप में व्यक्त किया जा सके—जहाँ p और q पूर्णांक हैं तथा q ≠ 0 है—परिमेय संख्या (Rational Number) कहलाती है। बीजगणित में अज्ञात राशियों (चर) और अचरों के संबंध को समीकरण द्वारा हल किया जाता है।',
    concept2Hi:
      'समकोण त्रिभुज में पाइथागोरस प्रमेय के अनुसार कर्ण का वर्ग शेष दो भुजाओं (लंब और आधार) के वर्गों के योग के बराबर होता है: कर्ण² = आधार² + लंब²।',
    concept1En:
      'A number that can be expressed in the form p/q, where p and q are integers and q ≠ 0, is called a Rational Number. Algebraic equations establish equality between expressions involving variables.',
    concept2En:
      'In a right-angled triangle, the Pythagoras Theorem states that the square of the hypotenuse equals the sum of the squares of the other two sides (H² = B² + P²).',
    term1Hi: ['परिमेय संख्या (Rational Number)', 'p/q के रूप में लिखी जाने वाली संख्या जहाँ q शून्य न हो।'],
    term2Hi: ['पाइथागोरस प्रमेय', 'समकोण त्रिभुज में कर्ण² = लंब² + आधार²।'],
    term1En: ['Rational Number', 'Any number expressible as a ratio p/q of two integers with non-zero denominator q.'],
    term2En: ['Pythagoras Theorem', 'In a right triangle, the square of the hypotenuse equals the sum of squares of the perpendicular and base.'],
    q1Hi: [
      'यदि किसी समकोण त्रिभुज का आधार 3 सेमी और लंब 4 सेमी है, तो उसके कर्ण की लंबाई क्या होगी?',
      ['5 सेमी', '6 सेमी', '7 सेमी', '12 सेमी'],
      0,
      'कर्ण = √(3² + 4²) = √(9 + 16) = √25 = 5 सेमी।',
    ],
    q2Hi: [
      'परिमेय संख्याओं के योग के लिए "तत्समक अवयव" (Additive Identity) कौन-सी संख्या है?',
      ['1', '0', '-1', '2'],
      1,
      'किसी भी संख्या में 0 जोड़ने पर उसका मान अपरिवर्तित रहता है (a + 0 = a), अतः 0 योज्य तत्समक है।',
    ],
    q1En: [
      'If the base and perpendicular of a right-angled triangle are 3 cm and 4 cm respectively, the length of its hypotenuse is:',
      ['5 cm', '6 cm', '7 cm', '12 cm'],
      0,
      'By Pythagoras theorem, Hypotenuse = √(3² + 4²) = √25 = 5 cm.',
    ],
    q2En: [
      'Which number acts as the Additive Identity for rational and real numbers?',
      ['1', '0', '-1', '10'],
      1,
      'Adding 0 to any number leaves it unchanged (a + 0 = a), so 0 is the additive identity.',
    ],
    bookHi: 'गणित पाठ्यपुस्तक (एनसीईआरटी / एससीईआरटी)',
    bookEn: 'NCERT / SCERT Mathematics Textbook',
  },
  hindi: {
    titleHi: 'हिंदी गद्य-पद्य साहित्य, भाषा-बोध एवं व्यावहारिक व्याकरण',
    subtitleHi: 'कविता व कहानी का भावार्थ, संधि, समास, उपसर्ग-प्रत्यय और पत्र-निबंध लेखन',
    titleEn: 'Hindi Literature (Prose & Poetry) and Applied Grammar (Vyakaran)',
    subtitleEn: 'Literary Appreciation, Sandhi, Samas, Idioms, and Formal Writing',
    concept1Hi:
      'हिंदी साहित्य में गद्य और पद्य की रचनाएँ मानवीय संवेदना, प्रकृति-प्रेम, सामाजिक सरोकार और नैतिक मूल्यों का विकास करती हैं। व्याकरण भाषा को शुद्ध, व्यवस्थित और प्रभावशाली बनाने का शास्त्र है।',
    concept2Hi:
      'दो वर्णों के मेल से उत्पन्न विकार को "संधि" कहते हैं, जबकि दो या दो से अधिक शब्दों के संक्षिप्तीकरण से नया सार्थक शब्द बनाने की प्रक्रिया को "समास" कहते हैं।',
    concept1En:
      'Hindi prose and poetry cultivate literary sensitivity, social awareness, and ethical values, while Vyakaran (grammar) provides structural accuracy in expression.',
    concept2En:
      'Sandhi joins adjacent phonetic sounds resulting in euphonic transformation, whereas Samas compounds two or more words into a concise semantic unit.',
    term1Hi: ['संधि (Sandhi)', 'दो निकटवर्ती वर्णों के परस्पर मेल से जो परिवर्तन होता है, उसे संधि कहते हैं।'],
    term2Hi: ['समास (Samas)', 'दो या दो से अधिक शब्दों को संक्षिप्त करके नया शब्द बनाने की व्याकरणिक प्रक्रिया।'],
    term1En: ['Sandhi', 'Phonetic combination of two adjacent letters/sounds producing a modified sound.'],
    term2En: ['Samas (Compound Word)', 'Formation of a single compound word by condensing two or more related words.'],
    q1Hi: [
      '"विद्या + आल = विद्यालय" में कौन-सी स्वर संधि है?',
      ['गुण संधि', 'दीर्घ स्वर संधि', 'वृद्धि संधि', 'यण संधि'],
      1,
      'समान स्वरों (आ + आ = आ) के मेल से दीर्घ स्वर बनने के कारण यहाँ दीर्घ स्वर संधि है।',
    ],
    q2Hi: [
      'जो शब्दांश किसी मूल शब्द के आरंभ (आदि) में जुड़कर उसके अर्थ में विशेषता या परिवर्तन ला देते हैं, उन्हें क्या कहते हैं?',
      ['प्रत्यय', 'उपसर्ग (Prefix)', 'निपात', 'अव्यय'],
      1,
      'शब्द के पूर्व जुड़ने वाले शब्दांश "उपसर्ग" (जैसे—सु, प्र, अनु) कहलाते हैं।',
    ],
    q1En: [
      'In Hindi grammar, "Vidya + Alaya = Vidyalaya" is an example of which Sandhi?',
      ['Guna Sandhi', 'Dirgha Swara Sandhi', 'Vriddhi Sandhi', 'Yan Sandhi'],
      1,
      'Combining two similar vowels (aa + aa = aa) results in Dirgha Swara Sandhi.',
    ],
    q2En: [
      'Syllables added at the beginning of a root word in Hindi to modify its meaning are called:',
      ['Pratyaya (Suffix)', 'Upasarga (Prefix)', 'Avyaya', 'Karak'],
      1,
      'Upasarga (prefix) is attached before a root word to form a new derivative meaning.',
    ],
    bookHi: 'हिंदी पाठ्यपुस्तक (वसंत / क्षितिज / आरोह) एवं हिंदी व्याकरण',
    bookEn: 'NCERT / SCERT Hindi Reader & Applied Hindi Vyakaran',
  },
  english: {
    titleHi: 'अंग्रेज़ी साहित्य, पठन-बोध एवं व्यावहारिक व्याकरण (English Language & Literature)',
    subtitleHi: 'गद्य एवं काव्य पाठ, काल (Tenses), वाच्य (Voice), कथन (Narration) और रचनात्मक लेखन',
    titleEn: 'English Literature, Reading Comprehension & Grammar in Context',
    subtitleEn: 'Prose & Poetry Analysis, Tenses, Active-Passive Voice, Reported Speech, and Formal Writing',
    concept1Hi:
      'अंग्रेज़ी भाषा शिक्षण में साहित्य (Prose एवं Poetry) के माध्यम से शब्द-संपदा और भाव-ग्रहण की क्षमता बढ़ती है, जबकि Tenses, Subject-Verb Agreement और Direct-Indirect Speech से शुद्ध वाक्य निर्माण सीखा जाता है।',
    concept2Hi:
      'औपचारिक पत्र (Formal Letter), नोटिस (Notice Writing) और अनुच्छेद लेखन (Analytical Paragraph) विद्यार्थियों में स्पष्ट संप्रेषण कौशल विकसित करते हैं।',
    concept1En:
      'Studying prose and poetry builds critical reading comprehension, vocabulary in context, and empathy, while grammar rules (Subject-Verb Concord, Modals, Tenses, and Reported Speech) ensure precision in written and spoken English.',
    concept2En:
      'Structured writing tasks—including Formal Letters to the Editor, Notices, and Analytical Paragraphs—train students to organise arguments logically and concisely.',
    term1Hi: ['Subject-Verb Concord', 'वाक्य के कर्ता (Subject) के वचन और पुरुष के अनुसार क्रिया (Verb) का प्रयोग।'],
    term2Hi: ['Metaphor (रूपक अलंकार)', 'जब दो भिन्न वस्तुओं में बिना "like" या "as" के सीधी समानता दिखाई जाए।'],
    term1En: ['Subject-Verb Concord', 'Grammatical agreement between the subject and the verb in number and person.'],
    term2En: ['Poetic Metaphor', 'An implied comparison between two unrelated things without using "like" or "as".'],
    q1Hi: [
      'Choose the grammatically correct verb form: "Neither the teacher nor the students ________ present yesterday."',
      ['was', 'were', 'is', 'has been'],
      1,
      'When two subjects are joined by "Neither...nor", the verb agrees with the nearer subject ("students" — plural, past tense "were").',
    ],
    q2Hi: [
      'Identify the poetic device in the line: "All the world’s a stage, and all the men and women merely players."',
      ['Simile', 'Metaphor', 'Alliteration', 'Oxymoron'],
      1,
      'The world is directly compared to a stage without using "like" or "as", making it a Metaphor.',
    ],
    q1En: [
      'Choose the correct verb form: "Each of the students in the social science club ________ submitted the project report."',
      ['have', 'has', 'are', 'were'],
      1,
      '"Each of..." takes a singular verb ("has").',
    ],
    q2En: [
      'Which poetic device is used when comparing two things directly without using "like" or "as"?',
      ['Simile', 'Metaphor', 'Personification', 'Hyperbole'],
      1,
      'A metaphor makes a direct implicit comparison between two distinct concepts.',
    ],
    bookHi: 'एनसीईआरटी/एससीईआरटी अंग्रेज़ी पाठ्यपुस्तक एवं ग्रामर वर्कबुक',
    bookEn: 'NCERT English Literature Reader (Honeysuckle / Beehive / First Flight / Flamingo)',
  },
  history: {
    titleHi: 'प्राचीन सभ्यताएँ, साम्राज्य निर्माण और आधुनिक विश्व व भारत के ऐतिहासिक मोड़',
    subtitleHi: 'हड़प्पा सभ्यता, मौर्य-गुप्त काल, औपनिवेशिक परिवर्तन और राष्ट्रीय आंदोलन',
    titleEn: 'Early Civilisations, Empire Building & Modern Historical Transformations',
    subtitleEn: 'Harappan Archaeology, Mauryan Inscriptions, Cultural Traditions, and National Movement',
    concept1Hi:
      'हड़प्पा सभ्यता (सिंधु घाटी सभ्यता, लगभग 2600-1900 ई.पू.) अपनी सुनियोजित नगर-निर्माण प्रणाली, जल-निकास व्यवस्था, पक्की ईंटों के भवनों और मुहरों के लिए विश्व प्रसिद्ध है।',
    concept2Hi:
      'छठी शताब्दी ईसा पूर्व से मगध के उत्कर्ष, अशोक के धम्म अभिलेखों और आधुनिक काल में महात्मा गांधी के नेतृत्व में जन-आंदोलनों ने भारत के ऐतिहासिक स्वरूप को निर्मित किया।',
    concept1En:
      'The Harappan Civilisation (c. 2600–1900 BCE) is distinguished by its grid-patterned urban planning, covered drainage system, Great Bath at Mohenjodaro, and steatite seals.',
    concept2En:
      'From the 6th century BCE rise of Mahajanapadas and Ashoka’s Dhamma inscriptions to the 20th-century freedom struggle, historical sources reveal both royal policies and popular movements.',
    term1Hi: ['अशोक का धम्म', 'सम्राट अशोक द्वारा प्रचारित नैतिक आचार-संहिता जिसमें अहिंसा, सहिष्णुता और बड़ों के आदर पर बल दिया गया।'],
    term2Hi: ['मोहनजोदड़ो का विशाल स्नानागार', 'दुर्ग क्षेत्र में स्थित एक आयताकार जलाशय जो अनुष्ठानिक स्नान के लिए प्रयुक्त होता था।'],
    term1En: ['Citadel & Lower Town', 'The two distinct urban sections of Harappan cities—the elevated Citadel and the residential Lower Town.'],
    term2En: ['Numismatics', 'The historical study of coins, including their scripts, symbols, and metal composition.'],
    q1Hi: [
      'हड़प्पा सभ्यता का प्रसिद्ध "गोदीबाड़ा" (बंदरगाह / Dockyard) किस पुरास्थल से प्राप्त हुआ है?',
      ['कालीबंगा', 'लोथल (गुजरात)', 'बनावली', 'राखीगढ़ी'],
      1,
      'गुजरात में भोगवा नदी के तट पर स्थित लोथल से हड़प्पाकालीन गोदीबाड़ा (Dockyard) के प्रमाण मिले हैं।',
    ],
    q2Hi: [
      'सम्राट अशोक के अधिकांश अभिलेख किस लिपि में उत्कीर्ण पाए गए हैं?',
      ['देवनागरी लिपि', 'ब्राह्मी एवं खरोष्ठी लिपि', 'रोमन लिपि', 'शारदा लिपि'],
      1,
      'अशोक के अधिकांश अभिलेख ब्राह्मी लिपि (जिसका वाचन जेम्स प्रिंसेप ने 1838 में किया) और उत्तर-पश्चिम में खरोष्ठी लिपि में हैं।',
    ],
    q1En: [
      'At which Harappan archaeological site was a brick Dockyard discovered?',
      ['Kalibangan', 'Lothal (Gujarat)', 'Banawali', 'Ropar'],
      1,
      'Lothal in Gujarat was a major port town of the Harappan Civilisation featuring a tidal dockyard.',
    ],
    q2En: [
      'Who deciphered the Brahmi and Kharosthi scripts used in early Mauryan inscriptions in 1838?',
      ['Alexander Cunningham', 'James Prinsep', 'John Marshall', 'R.E.M. Wheeler'],
      1,
      'James Prinsep, an officer in the mint of the East India Company, deciphered Brahmi and Kharosthi in 1838.',
    ],
    bookHi: 'विश्व इतिहास के कुछ विषय एवं भारतीय इतिहास के कुछ विषय (एनसीईआरटी)',
    bookEn: 'Themes in World History & Themes in Indian History (NCERT)',
  },
  geography: {
    titleHi: 'भौतिक भूगोल के मूल सिद्धांत, भारत का अपवाह तंत्र एवं मानव भूगोल',
    subtitleHi: 'भू-आकृतिक प्रक्रियाएँ, जलवायु, मानसून तंत्र, जनसंख्या वितरण और मानव विकास',
    titleEn: 'Fundamentals of Physical & Human Geography and India’s Physical Environment',
    subtitleEn: 'Geomorphic Processes, Monsoon Climate, Drainage Systems, and Human Development',
    concept1Hi:
      'भारत का अपवाह तंत्र मुख्यतः दो वर्गों में विभक्त है—हिमालय की बारहमासी नदियाँ (सिंधु, गंगा और ब्रह्मपुत्र तंत्र) तथा प्रायद्वीपीय भारत की ऋतुनिष्ठ नदियाँ (नर्मदा, तापी, गोदावरी, कृष्णा, कावेरी और महानदी)।',
    concept2Hi:
      'मानव भूगोल भौतिक पर्यावरण और मानवीय समाज के बीच के गत्यात्मक संबंधों का अध्ययन करता है, जहाँ शिक्षा, स्वास्थ्य और संसाधनों तक पहुँच मानव विकास के मूल स्तंभ हैं।',
    concept1En:
      'India’s drainage system comprises the perennial Himalayan rivers (Indus, Ganga, and Brahmaputra) fed by both snowmelt and rainfall, and the peninsular rivers (Godavari, Krishna, Kaveri, Narmada, Tapi).',
    concept2En:
      'Human Geography examines the spatial relationship between human societies and the earth’s surface, measuring progress through Human Development indicators (health, education, and access to resources).',
    term1Hi: ['जलसंभर (Watershed)', 'एक नदी और उसकी सहायक नदियों द्वारा अपवाहित क्षेत्र तथा जल-विभाजक सीमा।'],
    term2Hi: ['मानव विकास के चार स्तंभ', 'समता (Equity), सतत पोषणीयता, उत्पादकता और सशक्तीकरण।'],
    term1En: ['Drainage Basin', 'An area drained by a single river system and its tributaries.'],
    term2En: ['Four Pillars of Human Development', 'Equity, Sustainability, Productivity, and Empowerment.'],
    q1Hi: [
      'प्रायद्वीपीय भारत की सबसे लंबी नदी कौन-सी है जिसे "दक्षिण गंगा" भी कहा जाता है?',
      ['कावेरी', 'गोदावरी', 'कृष्णा', 'महानदी'],
      1,
      'गोदावरी प्रायद्वीपीय भारत की सबसे बड़ी नदी है जिसकी लंबाई लगभग 1465 किमी है और इसे "दक्षिण गंगा" कहा जाता है।',
    ],
    q2Hi: [
      'वायुमंडल की किस सबसे निचली परत में बादल, वर्षा और सभी मौसमी परिघटनाएँ घटित होती हैं?',
      ['समतापमंडल (Stratosphere)', 'क्षोभमंडल (Troposphere)', 'मध्यमंडल (Mesosphere)', 'आयनमंडल'],
      1,
      'क्षोभमंडल (Troposphere) वायुमंडल की सबसे निचली और महत्वपूर्ण परत है जहाँ सभी मौसमी परिवर्तन होते हैं।',
    ],
    q1En: [
      'Which is the largest Peninsular river system in India, also known as the "Dakshin Ganga"?',
      ['Kaveri', 'Godavari', 'Krishna', 'Mahanadi'],
      1,
      'The Godavari is the largest Peninsular river (approx. 1465 km long) rising in the Nasik district of Maharashtra.',
    ],
    q2En: [
      'In which lowermost layer of the atmosphere do almost all weather phenomena like rainfall and fog occur?',
      ['Stratosphere', 'Troposphere', 'Mesosphere', 'Thermosphere'],
      1,
      'The Troposphere is the lowest atmospheric layer where all weather and climatic phenomena take place.',
    ],
    bookHi: 'भौतिक भूगोल के मूल सिद्धांत एवं मानव भूगोल के मूल सिद्धांत (एनसीईआरटी)',
    bookEn: 'Fundamentals of Physical Geography & Human Geography (NCERT)',
  },
  'political-science': {
    titleHi: 'भारतीय संविधान, राजनीतिक सिद्धांत एवं समकालीन विश्व व भारतीय राजनीति',
    subtitleHi: 'संवैधानिक लोकतंत्र, राष्ट्र-निर्माण की चुनौतियाँ और अंतरराष्ट्रीय संगठन',
    titleEn: 'Indian Constitution, Political Theory & Contemporary Politics',
    subtitleEn: 'Constitutional Democracy, Nation-Building Challenges, and International Organisations',
    concept1Hi:
      'स्वतंत्र भारत के समक्ष राष्ट्र-निर्माण की तीन प्रमुख चुनौतियाँ थीं—विविधता से भरे देश को एकता के सूत्र में बाँधना, लोकतांत्रिक व्यवस्था कायम करना और पूरे समाज का समावेशी आर्थिक विकास सुनिश्चित करना।',
    concept2Hi:
      'राजनीतिक सिद्धांत स्वतंत्रता, समानता, न्याय, धर्मनिरपेक्षता और नागरिकता के मूल्यों का तार्किक विश्लेषण करता है।',
    concept1En:
      'Independent India faced three foundational challenges of nation-building: forging national unity amidst deep diversity, establishing constitutional democracy, and ensuring inclusive socio-economic development.',
    concept2En:
      'Political theory critically examines core democratic values including liberty, equality, social justice, citizenship, and secularism.',
    term1Hi: ['राज्य पुनर्गठन आयोग (1953)', 'भाषाई आधार पर राज्यों के सीमांकन की सिफारिश करने वाला आयोग (1956 में अधिनियम पारित)।'],
    term2Hi: ['नीति आयोग (NITI Aayog)', '1 जनवरी 2015 को योजना आयोग के स्थान पर गठित भारत सरकार का नीतिगत थिंक-टैंक।'],
    term1En: ['States Reorganisation Commission (1953)', 'Commission that recommended the redrawing of state boundaries on linguistic lines (Act passed in 1956).'],
    term2En: ['Harm Principle (J.S. Mill)', 'Individual liberty should only be constrained to prevent harm to others.'],
    q1Hi: [
      '1953 में गठित "राज्य पुनर्गठन आयोग" के अध्यक्ष कौन थे?',
      ['सरदार वल्लभभाई पटेल', 'न्यायमूर्ति फ़ज़ल अली', 'पट्टाभि सीतारमैया', 'के.एम. पणिक्कर'],
      1,
      'न्यायमूर्ति फ़ज़ल अली राज्य पुनर्गठन आयोग के अध्यक्ष थे (अन्य सदस्य हृदयनाथ कुंजरू और के.एम. पणिक्कर थे)।',
    ],
    q2Hi: [
      'भारत सरकार द्वारा योजना आयोग के स्थान पर "नीति आयोग" का गठन कब किया गया?',
      ['15 अगस्त 2014', '1 जनवरी 2015', '26 जनवरी 2016', '2 अक्टूबर 2015'],
      1,
      '1 जनवरी 2015 को सहकारी संघवाद की भावना को मजबूत करने हेतु नीति आयोग का गठन हुआ।',
    ],
    q1En: [
      'On what primary principle did the States Reorganisation Act of 1956 reorganise Indian state boundaries?',
      ['Geographical size', 'Linguistic and cultural homogeneity', 'Industrial output', 'River basin boundaries'],
      1,
      'The States Reorganisation Act of 1956 created 14 states and 6 union territories primarily on a linguistic basis.',
    ],
    q2En: [
      'When was NITI Aayog established to replace the Planning Commission of India?',
      ['15 August 2014', '1 January 2015', '26 January 2016', '1 April 2015'],
      1,
      'NITI Aayog was constituted on 1 January 2015 as the premier policy think tank of the Government of India.',
    ],
    bookHi: 'स्वतंत्र भारत में राजनीति एवं समकालीन विश्व राजनीति (एनसीईआरटी)',
    bookEn: 'Politics in India Since Independence & Contemporary World Politics (NCERT)',
  },
  economics: {
    titleHi: 'व्यष्टि व समष्टि अर्थशास्त्र, सांख्यिकी तथा भारतीय अर्थव्यवस्था का विकास',
    subtitleHi: 'माँग-पूर्ति के नियम, केंद्रीय समस्याएँ, राष्ट्रीय आय और आर्थिक सुधार',
    titleEn: 'Micro & Macroeconomics, Economic Statistics and Indian Economic Development',
    subtitleEn: 'Central Problems of an Economy, Consumer Equilibrium, National Income, and Economic Reforms',
    concept1Hi:
      'संसाधनों की दुर्लभता और मानवीय आवश्यकताओं की असीमितता के कारण प्रत्येक अर्थव्यवस्था को तीन केंद्रीय समस्याओं का सामना करना पड़ता है—क्या और कितनी मात्रा में उत्पादन किया जाए, कैसे उत्पादन किया जाए (श्रम-प्रधान या पूँजी-प्रधान तकनीक), और किसके लिए उत्पादन किया जाए।',
    concept2Hi:
      'माँग का नियम (Law of Demand) बताता है कि अन्य बातें समान रहने पर (Ceteris Paribus), किसी वस्तु की कीमत और उसकी माँग की गई मात्रा के बीच विपरीत (ऋणात्मक) संबंध होता है।',
    concept1En:
      'Due to scarcity of resources having alternative uses, every economy faces three central problems: What to produce, How to produce (labour-intensive vs capital-intensive), and For whom to produce.',
    concept2En:
      'The Law of Demand states that, other things remaining constant (ceteris paribus), there is an inverse relationship between the price of a commodity and its quantity demanded.',
    term1Hi: ['अवसर लागत (Opportunity Cost)', 'किसी वस्तु के उत्पादन के लिए त्यागे गए अगले सर्वश्रेष्ठ विकल्प का मूल्य।'],
    term2Hi: ['माँग का नियम (Law of Demand)', 'अन्य बातें समान रहने पर कीमत बढ़ने पर माँग घटती है और कीमत घटने पर माँग बढ़ती है।'],
    term1En: ['Opportunity Cost', 'The value of the next best alternative foregone when making an economic choice.'],
    term2En: ['Production Possibility Frontier (PPF)', 'Curve showing maximum possible combinations of two goods produced with given resources and technology.'],
    q1Hi: [
      'अर्थव्यवस्था की केंद्रीय समस्या "कैसे उत्पादन किया जाए" का संबंध किसके चयन से है?',
      ['वस्तुओं के चयन से', 'उत्पादन की तकनीक (श्रम-प्रधान या पूँजी-प्रधान) के चयन से', 'आय के वितरण से', 'विदेशी व्यापार से'],
      1,
      '"कैसे उत्पादन किया जाए" का संबंध उत्पादन तकनीक (श्रम-प्रधान बनाम पूँजी-प्रधान) के चुनाव से है।',
    ],
    q2Hi: [
      'किसी विकल्प को चुनने पर त्यागे गए अगले सर्वश्रेष्ठ विकल्प के मूल्य को अर्थशास्त्र में क्या कहते हैं?',
      ['सीमांत लागत', 'कुल लागत', 'अवसर लागत (Opportunity Cost)', 'स्थिर लागत'],
      2,
      'त्यागे गए अगले सर्वश्रेष्ठ विकल्प की लागत को अवसर लागत (Opportunity Cost) कहते हैं।',
    ],
    q1En: [
      'The central problem of "How to produce" in an economy primarily refers to the choice of:',
      ['Consumer vs Capital goods', 'Technique of production (Labour-intensive vs Capital-intensive)', 'Distribution of national income', 'Taxation policy'],
      1,
      '"How to produce" deals with selecting between labour-intensive and capital-intensive production techniques.',
    ],
    q2En: [
      'The cost of the next best alternative foregone is termed in economics as:',
      ['Marginal Cost', 'Average Cost', 'Opportunity Cost', 'Sunk Cost'],
      2,
      'Opportunity Cost is defined as the value of the next best alternative foregone.',
    ],
    bookHi: 'व्यष्टि अर्थशास्त्र एक परिचय एवं अर्थशास्त्र में सांख्यिकी (एनसीईआरटी)',
    bookEn: 'Introductory Microeconomics & Statistics for Economics (NCERT)',
  },
  sociology: {
    titleHi: 'समाजशास्त्र का परिचय, भारतीय समाज की संरचना एवं सामाजिक परिवर्तन',
    subtitleHi: 'सामाजिक संस्थाएँ, परिवार-नातेदारी, विविधता और आधुनिकीकरण की प्रक्रियाएँ',
    titleEn: 'Introducing Sociology, Indian Society & Social Change in India',
    subtitleEn: 'Social Institutions, Demographic Structure, Cultural Diversity, and Modernisation',
    concept1Hi:
      'समाजशास्त्र व्यक्तिगत परेशानियों और व्यापक सामाजिक मुद्दों के बीच के अंतर्संबंधों का वैज्ञानिक अध्ययन करता है (सी. राइट मिल्स की "समाजशास्त्रीय कल्पना")। भारतीय समाज ग्रामीण-नगरीय सातत्य, विविधता और परिवर्तनशील संस्थाओं का संगम है।',
    concept2Hi:
      'एम.एन. श्रीनिवास ने भारतीय समाज में गतिशीलता और परिवर्तन को समझाने के लिए "संस्कृतीकरण" (Sanskritisation) और "पश्चिमीकरण" की अवधारणाएँ प्रस्तुत कीं।',
    concept1En:
      'Sociology systematically studies human society, social groups, and institutions, linking personal biography with historical social structures (C. Wright Mills’ "Sociological Imagination").',
    concept2En:
      'M.N. Srinivas formulated the concepts of Sanskritisation, Westernisation, and Dominant Caste to analyse structural and cultural change in Indian society.',
    term1Hi: ['सामाजिक स्तरीकरण (Social Stratification)', 'समाज के समूहों के बीच संसाधनों और प्रतिष्ठा के आधार पर श्रेणीबद्ध संरचना।'],
    term2Hi: ['जनसांख्यिकीय लाभांश (Demographic Dividend)', 'कुल जनसंख्या में कार्यशील आयु वर्ग (15–59 वर्ष) के अनुपात में वृद्धि से मिलने वाला आर्थिक लाभ।'],
    term1En: ['Sociological Imagination', 'Ability to see the connection between individual experiences and larger social forces.'],
    term2En: ['Demographic Dividend', 'Economic growth potential resulting from a high proportion of working-age population (15–59 years).'],
    q1Hi: [
      '"द सोशियोलॉजिकल इमेजिनेशन" (समाजशास्त्रीय कल्पना) की प्रसिद्ध अवधारणा किस समाजशास्त्री ने दी?',
      ['एमिल दुर्खीम', 'मैक्स वेबर', 'सी. राइट मिल्स', 'कार्ल मार्क्स'],
      2,
      'सी. राइट मिल्स (C. Wright Mills) ने व्यक्तिगत जीवन और सामाजिक इतिहास के संबंध को समझाने के लिए यह अवधारणा दी।',
    ],
    q2Hi: [
      'जनगणना में प्रति 1000 पुरुषों पर स्त्रियों की संख्या को क्या कहा जाता है?',
      ['साक्षरता दर', 'लिंगानुपात (Sex Ratio)', 'जन्म दर', 'निर्भरता अनुपात'],
      1,
      'प्रति 1000 पुरुषों पर महिलाओं की संख्या को लिंगानुपात (Sex Ratio) कहते हैं।',
    ],
    q1En: [
      'Who introduced the concept of "Sociological Imagination" connecting personal troubles with public issues?',
      ['Emile Durkheim', 'Max Weber', 'C. Wright Mills', 'Auguste Comte'],
      2,
      'C. Wright Mills wrote The Sociological Imagination to explain the link between biography and history.',
    ],
    q2En: [
      'In Indian demography, the number of females per 1000 males in a given population is defined as:',
      ['Fertility Rate', 'Dependency Ratio', 'Sex Ratio', 'Maternal Ratio'],
      2,
      'Sex Ratio measures the number of females per 1000 males.',
    ],
    bookHi: 'समाजशास्त्र का परिचय एवं भारतीय समाज (एनसीईआरटी)',
    bookEn: 'Introducing Sociology & Indian Society (NCERT)',
  },
  physics: {
    titleHi: 'भौतिक जगत, मात्रक एवं मापन, गति के नियम तथा विद्युत-चुंबकत्व',
    subtitleHi: 'सदिश-अदिश राशियाँ, न्यूटन के गति नियम, कार्य-ऊर्जा-शक्ति और ओम का नियम',
    titleEn: 'Units & Measurements, Laws of Motion, Work-Energy & Electromagnetism',
    subtitleEn: 'Dimensional Analysis, Newton’s Laws, Conservation Principles, and Electric Current',
    concept1Hi:
      'न्यूटन के गति के द्वितीय नियम के अनुसार किसी पिंड के संवेग परिवर्तन की दर आरोपित असंतुलित बल के समानुपाती होती है (F = ma)। कार्य-ऊर्जा प्रमेय के अनुसार किसी बल द्वारा किया गया कार्य गतिज ऊर्जा में परिवर्तन के बराबर होता है।',
    concept2Hi:
      'विद्युत धारािकी में ओम का नियम (V = IR) विभवांतर, धारा और प्रतिरोध के बीच मूलभूत संबंध स्थापित करता है।',
    concept1En:
      'Newton’s Second Law of Motion states that the rate of change of momentum of a body is directly proportional to the applied net external force (F = dp/dt = ma). The Work-Energy Theorem states that net work done equals change in kinetic energy.',
    concept2En:
      'In electromagnetism, Ohm’s Law (V = IR) and Kirchhoff’s rules govern electrical circuits, while Faraday’s law explains electromagnetic induction.',
    term1Hi: ['संवेग संरक्षण का नियम', 'बाह्य बल की अनुपस्थिति में किसी निकाय का कुल रेखीय संवेग संरक्षित रहता है।'],
    term2Hi: ['ओम का नियम (Ohm’s Law)', 'नियत ताप पर किसी चालक के सिरों का विभवांतर उसमें प्रवाहित धारा के समानुपाती होता है (V = IR)।'],
    term1En: ['Conservation of Linear Momentum', 'In the absence of net external force, the total linear momentum of an isolated system remains constant.'],
    term2En: ['Ohm’s Law', 'At constant physical conditions, potential difference V across a conductor is proportional to current I (V = IR).'],
    q1Hi: [
      'वेग-समय ग्राफ (Velocity-Time Graph) के अंतर्गत आने वाला क्षेत्रफल किस भौतिक राशि को दर्शाता है?',
      ['त्वरण', 'विस्थापन (Displacement)', 'बल', 'शक्ति'],
      1,
      'वेग-समय ग्राफ और समय अक्ष के बीच घिरा क्षेत्रफल वस्तु द्वारा तय किए गए विस्थापन (Displacement) को व्यक्त करता है।',
    ],
    q2Hi: [
      'विद्युत प्रतिरोधकता (Electrical Resistivity) का SI मात्रक क्या है?',
      ['ओम (Ω)', 'ओम-मीटर (Ω·m)', 'एम्पियर', 'वोल्ट-मीटर'],
      1,
      'प्रतिरोध R = ρ(L/A) से प्रतिरोधकता ρ का SI मात्रक ओम-मीटर (Ω·m) होता है।',
    ],
    q1En: [
      'The area under a Velocity–Time (v–t) graph represents which physical quantity?',
      ['Acceleration', 'Displacement', 'Force', 'Momentum'],
      1,
      'The area enclosed under a velocity–time graph gives the displacement of the moving body.',
    ],
    q2En: [
      'What is the SI unit of Electrical Resistivity (ρ)?',
      ['Ohm (Ω)', 'Ohm-metre (Ω·m)', 'Siemens', 'Volt per metre'],
      1,
      'From R = ρ(L/A), the SI unit of resistivity ρ is Ohm-metre (Ω·m).',
    ],
    bookHi: 'भौतिकी भाग 1 एवं भाग 2 (एनसीईआरटी उच्च माध्यमिक पाठ्यपुस्तक)',
    bookEn: 'Physics Part I & Part II (NCERT Senior Secondary Textbook)',
  },
  chemistry: {
    titleHi: 'रसायन विज्ञान की मूल अवधारणाएँ, परमाणु संरचना, रासायनिक आबंधन एवं विलयन',
    subtitleHi: 'मोल संकल्पना, आवर्त सारणी के गुणधर्म, ऊष्मागतिकी और वैद्युतरसायन',
    titleEn: 'Basic Concepts of Chemistry, Atomic Structure, Chemical Bonding & Solutions',
    subtitleEn: 'Mole Concept, Periodic Classification, Chemical Equilibrium, and Electrochemistry',
    concept1Hi:
      'किसी पदार्थ के एक मोल में कणों (परमाणु, अणु या आयन) की संख्या सदैव निश्चित होती है जिसे आवोगाद्रो स्थिरांक (N_A = 6.022 × 10²³ mol⁻¹) कहते हैं। आधुनिक आवर्त नियम के अनुसार तत्वों के भौतिक और रासायनिक गुण उनके परमाणु क्रमांकों के आवर्ती फलन होते हैं।',
    concept2Hi:
      'विलयन की सांद्रता को मोलरता (Molarity — प्रति लीटर विलयन में विलेय के मोल) और मोललता (Molality — प्रति किग्रा विलायक में विलेय के मोल) द्वारा व्यक्त किया जाता है।',
    concept1En:
      'One mole of any substance contains exactly 6.022 × 10²³ elementary entities (Avogadro’s number). According to the Modern Periodic Law, the properties of elements are a periodic function of their atomic numbers.',
    concept2En:
      'Solution concentration is quantitatively expressed using Molarity (moles of solute per litre of solution) and Molality (moles of solute per kilogram of solvent, independent of temperature).',
    term1Hi: ['आवोगाद्रो संख्या (N_A)', '1 मोल पदार्थ में उपस्थित कणों की संख्या = 6.022 × 10²³।'],
    term2Hi: ['मोललता (Molality, m)', '1 किलोग्राम (1000 ग्राम) विलायक में घुले विलेय के मोलों की संख्या (यह ताप पर निर्भर नहीं करती)।'],
    term1En: ['Avogadro Constant (N_A)', 'Number of entities in one mole of a substance: 6.022 × 10²³ mol⁻¹.'],
    term2En: ['Molality (m)', 'Moles of solute dissolved per kilogram of solvent; independent of temperature changes.'],
    q1Hi: [
      'निम्नलिखित में से कौन-सी सांद्रता इकाई तापमान (Temperature) में परिवर्तन से प्रभावित नहीं होती?',
      ['मोलरता (Molarity)', 'नॉर्मलता (Normality)', 'मोललता (Molality)', 'आयतन प्रतिशत'],
      2,
      'मोललता द्रव्यमान पर आधारित होती है (प्रति किग्रा विलायक में मोल), इसलिए ताप बदलने पर यह परिवर्तित नहीं होती।',
    ],
    q2Hi: [
      '18 ग्राम शुद्ध जल (H₂O) में जल के कितने मोल उपस्थित होते हैं? (H = 1, O = 16)',
      ['0.5 मोल', '1 मोल', '2 मोल', '18 मोल'],
      1,
      'जल (H₂O) का मोलर द्रव्यमान = 2(1) + 16 = 18 g/mol; अतः 18 ग्राम जल = 18/18 = 1 मोल।',
    ],
    q1En: [
      'Which concentration term is independent of temperature?',
      ['Molarity (M)', 'Normality (N)', 'Molality (m)', 'Volume percentage'],
      2,
      'Molality depends on the mass of the solvent rather than volume, making it independent of temperature.',
    ],
    q2En: [
      'How many moles are present in 18 g of pure water (H₂O)?',
      ['0.5 mole', '1.0 mole', '2.0 moles', '18.0 moles'],
      1,
      'Molar mass of H₂O = 2(1) + 16 = 18 g/mol, so 18 g corresponds to 1.0 mole.',
    ],
    bookHi: 'रसायन विज्ञान भाग 1 एवं भाग 2 (एनसीईआरटी पाठ्यपुस्तक)',
    bookEn: 'Chemistry Part I & Part II (NCERT Textbook)',
  },
  biology: {
    titleHi: 'कोशिका: जीवन की इकाई, वंशागति के सिद्धांत तथा पारिस्थितिकी एवं पर्यावरण',
    subtitleHi: 'कोशिकांगों के कार्य, मेंडल के आनुवंशिकी नियम, डीएनए संरचना और जैव-विविधता संरक्षण',
    titleEn: 'Cell: The Unit of Life, Principles of Inheritance & Ecology',
    subtitleEn: 'Cell Organelles, Mendelian Genetics, Molecular Basis of Inheritance, and Biodiversity',
    concept1Hi:
      'सभी जीवधारी कोशिकाओं से मिलकर बने हैं। माइटोकॉन्ड्रिया में वायवीय श्वसन द्वारा ATP के रूप में ऊर्जा का निर्माण होता है, इसलिए इसे "कोशिका का ऊर्जा-गृह" (Powerhouse of the Cell) कहा जाता है।',
    concept2Hi:
      'ग्रेगर जॉन मेंडल ने मटर के पौधे (Pisum sativum) पर प्रयोग कर प्रभाविता का नियम, पृथक्करण का नियम और स्वतंत्र अपव्यूहन का नियम प्रस्तुत किया।',
    concept1En:
      'The cell is the fundamental structural and functional unit of all living organisms. Mitochondria generate cellular energy in the form of ATP through aerobic respiration, earning the title "Powerhouse of the Cell".',
    concept2En:
      'Gregor Johann Mendel established the foundational laws of inheritance (Law of Dominance, Law of Segregation, and Law of Independent Assortment) through hybridisation experiments on garden peas (Pisum sativum).',
    term1Hi: ['माइटोकॉन्ड्रिया', 'कोशिका का ऊर्जा-गृह जहाँ ATP (एडिनोसिन ट्राइफॉस्फेट) का संश्लेषण होता है।'],
    term2Hi: ['पारिस्थितिक पिरामिड (10% नियम)', 'लिंडमान के नियम के अनुसार एक पोषी स्तर से अगले पोषी स्तर में केवल 10% ऊर्जा ही स्थानांतरित होती है।'],
    term1En: ['ATP (Adenosine Triphosphate)', 'The energy currency of the cell synthesised in mitochondria.'],
    term2En: ['Lindeman’s 10% Energy Law', 'Only 10% of energy is transferred from one trophic level to the next higher trophic level in a food chain.'],
    q1Hi: [
      'किस कोशिकांग को "कोशिका का बिजलीघर / ऊर्जा-गृह" (Powerhouse of the Cell) कहा जाता है?',
      ['राइबोसोम', 'माइटोकॉन्ड्रिया', 'गॉल्जी उपकरण', 'लाइसोसोम'],
      1,
      'माइटोकॉन्ड्रिया में कोशिकीय श्वसन द्वारा ATP के रूप में ऊर्जा उत्पन्न होती है।',
    ],
    q2Hi: [
      'आनुवंशिकी का जनक (Father of Genetics) किसे कहा जाता है जिन्होंने मटर के पौधे पर प्रयोग किए?',
      ['चार्ल्स डार्विन', 'ग्रेगर जॉन मेंडल', 'वाटसन एवं क्रिक', 'रॉबर्ट हुक'],
      1,
      'ग्रेगर जॉन मेंडल ने उद्यान मटर (Pisum sativum) पर प्रयोग कर आनुवंशिकी के मूल नियम प्रतिपादित किए।',
    ],
    q1En: [
      'Which cell organelle is known as the "Powerhouse of the Cell" due to ATP synthesis?',
      ['Ribosome', 'Mitochondria', 'Golgi apparatus', 'Lysosome'],
      1,
      'Mitochondria produce ATP molecules through oxidative phosphorylation.',
    ],
    q2En: [
      'Who is regarded as the Father of Genetics for discovering the laws of inheritance in garden peas?',
      ['Charles Darwin', 'Gregor Johann Mendel', 'James Watson', 'Robert Hooke'],
      1,
      'Gregor Johann Mendel discovered the principles of heredity through experiments on Pisum sativum.',
    ],
    bookHi: 'जीव विज्ञान पाठ्यपुस्तक (एनसीईआरटी कक्षा 11 एवं 12)',
    bookEn: 'Biology Textbook for Class XI & XII (NCERT)',
  },
};

export function synthesizeChaptersForSubject(
  mediumId: MediumId,
  classId: ClassId,
  subjectId: SubjectId,
  classNumber: number
): ChapterData[] {
  const seed = SUBJECT_SYLLABUS_SEEDS[subjectId];
  const isHi = mediumId === 'hindi';

  const ch1Id = `${mediumId}-${classId}-${subjectId}-ch1`;
  const ch2Id = `${mediumId}-${classId}-${subjectId}-ch2`;

  if (isHi) {
    return [
      {
        id: ch1Id,
        chapterNumber: 1,
        title: `${seed.titleHi} (कक्षा ${classNumber})`,
        subtitle: seed.subtitleHi,
        resources: {
          notes: {
            introduction: `कक्षा ${classNumber} के इस अध्याय में हम "${seed.titleHi}" की मूल अवधारणाओं, सिद्धांतों और उनके व्यावहारिक अनुप्रयोगों का क्रमबद्ध अध्ययन करेंगे।`,
            sections: [
              {
                heading: '1. मूलभूत अवधारणा एवं सिद्धांत',
                body: seed.concept1Hi,
                keyPoints: [
                  `${seed.term1Hi[0]}: ${seed.term1Hi[1]}`,
                  'अवधारणा को दैनिक जीवन के उदाहरणों और पाठ्यपुस्तक के आरेखों से जोड़कर समझना आवश्यक है।',
                ],
              },
              {
                heading: '2. संरचनात्मक विश्लेषण एवं मुख्य अनुप्रयोग',
                body: seed.concept2Hi,
                keyPoints: [
                  `${seed.term2Hi[0]}: ${seed.term2Hi[1]}`,
                  `कक्षा ${classNumber} के पाठ्यक्रम के अनुसार परीक्षा में इस खंड से विश्लेषणात्मक प्रश्न पूछे जाते हैं।`,
                ],
              },
            ],
            keyTerms: [
              { term: seed.term1Hi[0], meaning: seed.term1Hi[1] },
              { term: seed.term2Hi[0], meaning: seed.term2Hi[1] },
            ],
          },
          summary: {
            overview: `कक्षा ${classNumber} के लिए "${seed.titleHi}" का त्वरित पुनरावृत्ति सार एवं परीक्षा उपयोगी बिंदु।`,
            coreTakeaways: [seed.concept1Hi, seed.concept2Hi],
            quickRevisionTable: [
              { concept: seed.term1Hi[0], detail: seed.term1Hi[1] },
              { concept: seed.term2Hi[0], detail: seed.term2Hi[1] },
            ],
          },
          qa: [
            {
              id: `${ch1Id}-qa1`,
              question: `${seed.term1Hi[0]} से आप क्या समझते हैं? उदाहरण सहित स्पष्ट कीजिए।`,
              answer: `${seed.term1Hi[1]} ${seed.concept1Hi}`,
              questionType: 'लघु उत्तरीय प्रश्न',
            },
            {
              id: `${ch1Id}-qa2`,
              question: `${seed.term2Hi[0]} के प्रमुख सिद्धांत और महत्व का वर्णन कीजिए।`,
              answer: `${seed.term2Hi[1]} ${seed.concept2Hi}`,
              questionType: 'दीर्घ उत्तरीय प्रश्न',
            },
          ],
          quiz: [
            {
              id: `${ch1Id}-q1`,
              question: seed.q1Hi[0],
              options: seed.q1Hi[1],
              correctIndex: seed.q1Hi[2],
              explanation: seed.q1Hi[3],
            },
            {
              id: `${ch1Id}-q2`,
              question: seed.q2Hi[0],
              options: seed.q2Hi[1],
              correctIndex: seed.q2Hi[2],
              explanation: seed.q2Hi[3],
            },
          ],
          practice: [
            {
              id: `${ch1Id}-p1`,
              prompt: `"${seed.term1Hi[0]}" और "${seed.term2Hi[0]}" के मुख्य बिंदुओं की तुलना करते हुए एक संक्षिप्त टिप्पणी लिखिए।`,
              difficulty: `कक्षा ${classNumber} अभ्यास स्तर`,
              hintOrKey: `${seed.term1Hi[1]} तथा ${seed.term2Hi[1]}`,
            },
          ],
          important: [
            {
              id: `${ch1Id}-imp1`,
              question: `इस अध्याय की मुख्य अवधारणाओं (${seed.term1Hi[0]} एवं ${seed.term2Hi[0]}) की सोदाहरण व्याख्या कीजिए।`,
              examFocus: `कक्षा ${classNumber} वार्षिक परीक्षा हेतु महत्वपूर्ण`,
              keyAnswerPoints: [seed.concept1Hi, seed.concept2Hi],
            },
          ],
          activities: [
            {
              id: `${ch1Id}-act1`,
              title: `कक्षा गतिविधि: ${seed.term1Hi[0]} पर चार्ट एवं समूह चर्चा`,
              objective: 'पाठ्यपुस्तक की अवधारणा को व्यावहारिक उदाहरणों के माध्यम से प्रस्तुत करना।',
              materialsNeeded: 'चार्ट पेपर, रंगीन पेन, पाठ्यपुस्तक और नोटबुक।',
              steps: [
                `अध्याय के मुख्य बिंदुओं (${seed.term1Hi[0]} व ${seed.term2Hi[0]}) की सूची बनाएँ।`,
                '4-4 विद्यार्थियों के समूह में अवधारणा का प्रवाह-चार्ट (Flowchart) तैयार करें।',
                'कक्षा में 3 मिनट की संक्षिप्त प्रस्तुति दें।',
              ],
              learningOutcome: 'विद्यार्थियों में विषयगत स्पष्टता और अभिव्यक्ति कौशल का विकास होगा।',
            },
          ],
          worksheets: {
            title: `अभ्यास पत्रक (कक्षा ${classNumber}): ${seed.titleHi}`,
            durationMinutes: 30,
            maxMarks: 15,
            tasks: [
              {
                id: `${ch1Id}-ws1`,
                sectionTitle: 'खंड क: परिभाषा एवं अवधारणा जाँच',
                instructions: 'निम्नलिखित प्रश्नों के उत्तर 30-50 शब्दों में लिखिए:',
                items: [
                  `1. ${seed.term1Hi[0]} की परिभाषा लिखिए।`,
                  `2. ${seed.term2Hi[0]} का मुख्य महत्व क्या है?`,
                  `3. इस अध्याय से सीखे गए किन्हीं तीन मुख्य बिंदुओं को सूचीबद्ध कीजिए।`,
                ],
              },
            ],
          },
          books: [
            {
              id: `${ch1Id}-bk1`,
              title: seed.bookHi,
              classLabel: `कक्षा ${classNumber}`,
              subjectLabel: seed.titleHi,
              authorOrPublisher: 'एनसीईआरटी (NCERT) / एससीईआरटी (SCERT)',
              description: `कक्षा ${classNumber} के विद्यार्थियों के लिए निर्धारित पाठ्यक्रम पर आधारित प्रामाणिक अध्ययन सामग्री एवं पाठ्यपुस्तक।`,
              keyTopicsCovered: [seed.term1Hi[0], seed.term2Hi[0], seed.subtitleHi],
            },
          ],
        },
      },
      {
        id: ch2Id,
        chapterNumber: 2,
        title: `व्यावहारिक अनुप्रयोग एवं विश्लेषणात्मक अध्ययन (कक्षा ${classNumber})`,
        subtitle: `${seed.term1Hi[0]} तथा ${seed.term2Hi[0]} का विस्तृत अनुप्रयोग`,
        resources: {
          notes: {
            introduction: `यह द्वितीय अध्याय प्रथम अध्याय में पढ़े गए सिद्धांतों के व्यावहारिक और विश्लेषणात्मक पक्ष को मजबूत करता है।`,
            sections: [
              {
                heading: '1. व्यावहारिक विश्लेषण',
                body: seed.concept2Hi,
              },
            ],
            keyTerms: [{ term: seed.term2Hi[0], meaning: seed.term2Hi[1] }],
          },
          summary: {
            overview: 'द्वितीय अध्याय के प्रमुख बिंदुओं का त्वरित पुनरावलोकन।',
            coreTakeaways: [seed.concept2Hi],
            quickRevisionTable: [{ concept: seed.term2Hi[0], detail: seed.term2Hi[1] }],
          },
          qa: [
            {
              id: `${ch2Id}-qa1`,
              question: `${seed.term2Hi[0]} का व्यावहारिक जीवन में क्या महत्व है?`,
              answer: seed.concept2Hi,
              questionType: 'बोधात्मक प्रश्न',
            },
          ],
          quiz: [
            {
              id: `${ch2Id}-q1`,
              question: seed.q2Hi[0],
              options: seed.q2Hi[1],
              correctIndex: seed.q2Hi[2],
              explanation: seed.q2Hi[3],
            },
          ],
        },
      },
    ];
  }

  return [
    {
      id: ch1Id,
      chapterNumber: 1,
      title: `${seed.titleEn} (Class ${classNumber})`,
      subtitle: seed.subtitleEn,
      resources: {
        notes: {
          introduction: `In this Class ${classNumber} chapter, we systematically explore the foundational concepts, principles, and real-world applications of "${seed.titleEn}".`,
          sections: [
            {
              heading: '1. Core Conceptual Framework',
              body: seed.concept1En,
              keyPoints: [
                `${seed.term1En[0]}: ${seed.term1En[1]}`,
                'Connecting theoretical definitions with real-world illustrations strengthens long-term retention.',
              ],
            },
            {
              heading: '2. Structural Analysis & Applications',
              body: seed.concept2En,
              keyPoints: [
                `${seed.term2En[0]}: ${seed.term2En[1]}`,
                `Key analytical theme aligned with the Class ${classNumber} curriculum.`,
              ],
            },
          ],
          keyTerms: [
            { term: seed.term1En[0], meaning: seed.term1En[1] },
            { term: seed.term2En[0], meaning: seed.term2En[1] },
          ],
        },
        summary: {
          overview: `Concise revision synthesis of "${seed.titleEn}" for Class ${classNumber} students.`,
          coreTakeaways: [seed.concept1En, seed.concept2En],
          quickRevisionTable: [
            { concept: seed.term1En[0], detail: seed.term1En[1] },
            { concept: seed.term2En[0], detail: seed.term2En[1] },
          ],
        },
        qa: [
          {
            id: `${ch1Id}-qa1`,
            question: `Define and explain the significance of ${seed.term1En[0]} with an example.`,
            answer: `${seed.term1En[1]} ${seed.concept1En}`,
            questionType: 'Short Answer',
          },
          {
            id: `${ch1Id}-qa2`,
            question: `Elaborate on the core principle of ${seed.term2En[0]}.`,
            answer: `${seed.term2En[1]} ${seed.concept2En}`,
            questionType: 'Long Answer',
          },
        ],
        quiz: [
          {
            id: `${ch1Id}-q1`,
            question: seed.q1En[0],
            options: seed.q1En[1],
            correctIndex: seed.q1En[2],
            explanation: seed.q1En[3],
          },
          {
            id: `${ch1Id}-q2`,
            question: seed.q2En[0],
            options: seed.q2En[1],
            correctIndex: seed.q2En[2],
            explanation: seed.q2En[3],
          },
        ],
        practice: [
          {
            id: `${ch1Id}-p1`,
            prompt: `Write a structured analytical note comparing ${seed.term1En[0]} and ${seed.term2En[0]}.`,
            difficulty: `Class ${classNumber} Practice`,
            hintOrKey: `${seed.term1En[1]} | ${seed.term2En[1]}`,
          },
        ],
        important: [
          {
            id: `${ch1Id}-imp1`,
            question: `Explain the fundamental concepts of ${seed.term1En[0]} and ${seed.term2En[0]} with suitable examples.`,
            examFocus: `Class ${classNumber} Examination Priority`,
            keyAnswerPoints: [seed.concept1En, seed.concept2En],
          },
        ],
        activities: [
          {
            id: `${ch1Id}-act1`,
            title: `Classroom Concept Mapping: ${seed.term1En[0]}`,
            objective: 'Synthesise textbook concepts into a visual flowchart and peer presentation.',
            materialsNeeded: 'Chart paper, markers, textbook, and notebook.',
            steps: [
              `Identify the key definitions of ${seed.term1En[0]} and ${seed.term2En[0]}.`,
              'Prepare a structured concept map linking causes, features, and examples.',
              'Present a 3-minute summary before the class.',
            ],
            learningOutcome: 'Enhances conceptual clarity and collaborative presentation skills.',
          },
        ],
        worksheets: {
          title: `Practice Worksheet (Class ${classNumber}): ${seed.titleEn}`,
          durationMinutes: 30,
          maxMarks: 15,
          tasks: [
            {
              id: `${ch1Id}-ws1`,
              sectionTitle: 'Section A: Conceptual & Analytical Tasks',
              instructions: 'Answer each question in 30–50 words:',
              items: [
                `1. Define ${seed.term1En[0]} in your own words.`,
                `2. Explain why ${seed.term2En[0]} is important in this chapter.`,
                `3. List three key takeaways from this unit.`,
              ],
            },
          ],
        },
        books: [
          {
            id: `${ch1Id}-bk1`,
            title: seed.bookEn,
            classLabel: `Class ${classNumber}`,
            subjectLabel: seed.titleEn,
            authorOrPublisher: 'NCERT / SCERT',
            description: `Recommended curriculum textbook and reference guide for Class ${classNumber}.`,
            keyTopicsCovered: [seed.term1En[0], seed.term2En[0], seed.subtitleEn],
          },
        ],
      },
    },
  ];
}
