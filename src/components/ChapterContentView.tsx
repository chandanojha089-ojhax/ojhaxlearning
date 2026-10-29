import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import {
  ChapterData,
  MediumId,
  ResourceTypeId,
  ResourceTypeMeta,
} from '../types/education';
import { evaluateQuizSubmission } from '../utils/resourceEngine';

interface ChapterContentViewProps {
  mediumId: MediumId;
  chapter: ChapterData;
  activeResourceType: ResourceTypeId;
  availableResourceTypes: ResourceTypeMeta[];
  onSwitchResourceType: (rt: ResourceTypeId) => void;
  onBackToChapters?: () => void;
}

export const ChapterContentView: React.FC<ChapterContentViewProps> = ({
  mediumId,
  chapter,
  activeResourceType,
  availableResourceTypes,
  onSwitchResourceType,
  onBackToChapters,
}) => {
  const isHi = mediumId === 'hindi';
  const [selectedQuizOptions, setSelectedQuizOptions] = useState<
    Record<string, number>
  >({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>(
    {}
  );

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    setSelectedQuizOptions((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleResetQuiz = () => {
    setSelectedQuizOptions({});
    setQuizSubmitted(false);
  };

  const toggleHint = (id: string) => {
    setRevealedHints((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const res = chapter.resources;

  return (
    <div className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 lg:p-10">
      {/* Chapter Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs font-mono-num uppercase tracking-widest text-amber-900 font-semibold">
            {isHi
              ? `अध्याय ${chapter.chapterNumber} (Chapter ${chapter.chapterNumber})`
              : `Chapter ${chapter.chapterNumber}`}
          </p>
          {onBackToChapters && (
            <button
              type="button"
              onClick={onBackToChapters}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-[#FAF8F5] border border-stone-300 rounded-lg hover:bg-stone-200/70 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{isHi ? 'अध्याय सूची पर वापस जाएँ' : 'Back to Chapters'}</span>
            </button>
          )}
        </div>
        <h3 className="mt-2 text-2xl sm:text-3xl font-serif-display font-semibold text-stone-950 leading-snug">
          {chapter.title}
        </h3>
        <p className="mt-2 text-sm sm:text-base text-stone-600">
          {chapter.subtitle}
        </p>

        {/* Resource Type Switcher Bar for this Chapter */}
        <div className="mt-6">
          <p className="text-xs font-medium text-stone-500 mb-2.5">
            {isHi
              ? 'इस अध्याय के उपलब्ध अध्ययन संसाधन (Switch Resource Type):'
              : 'Available Resource Formats for this Chapter:'}
          </p>
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-stone-100 rounded-xl">
            {availableResourceTypes.map((rt) => {
              const isCurrent = rt.id === activeResourceType;
              return (
                <button
                  key={rt.id}
                  type="button"
                  onClick={() => onSwitchResourceType(rt.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isCurrent
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/70'
                  }`}
                >
                  {isHi ? rt.shortLabelHi : rt.shortLabelEn}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 1. CHAPTER-WISE NOTES */}
      {activeResourceType === 'notes' && res.notes && (
        <article className="mt-8 space-y-8">
          <div className="bg-[#FAF8F5] border border-stone-200/80 rounded-xl p-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
              {isHi ? 'प्रस्तावना (Introduction)' : 'Chapter Introduction'}
            </h4>
            <p className="text-base text-stone-800 leading-relaxed max-w-3xl">
              {res.notes.introduction}
            </p>
          </div>

          <div className="space-y-8">
            {res.notes.sections.map((sec, idx) => (
              <div
                key={idx}
                className="pb-6 border-b border-stone-200/80 last:border-b-0"
              >
                <h4 className="text-lg sm:text-xl font-serif-display font-semibold text-stone-900">
                  {sec.heading}
                </h4>
                <p className="mt-3 text-base text-stone-700 leading-relaxed whitespace-pre-line max-w-3xl">
                  {sec.body}
                </p>
                {sec.keyPoints && sec.keyPoints.length > 0 && (
                  <ul className="mt-4 space-y-2 bg-stone-50 p-4 rounded-xl border border-stone-200/70">
                    {sec.keyPoints.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="text-sm text-stone-800 flex items-start gap-2.5 leading-relaxed"
                      >
                        <span className="text-amber-900 font-bold mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {res.notes.keyTerms && res.notes.keyTerms.length > 0 && (
            <div className="pt-4">
              <h4 className="text-base font-serif-display font-semibold text-stone-900 mb-4">
                {isHi
                  ? 'प्रमुख पारिभाषिक शब्दावली (Key Vocabulary & Concepts)'
                  : 'Key Terms & Definitions'}
              </h4>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {res.notes.keyTerms.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200/90"
                  >
                    <dt className="text-sm font-semibold text-amber-950">
                      {item.term}
                    </dt>
                    <dd className="mt-1 text-sm text-stone-700 leading-relaxed">
                      {item.meaning}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </article>
      )}

      {/* 2. SUMMARY / QUICK REVISION */}
      {activeResourceType === 'summary' && res.summary && (
        <div className="mt-8 space-y-8">
          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-stone-200">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-900">
              {isHi ? 'अध्याय का संक्षिप्त सार (Chapter Synthesis)' : 'Chapter Overview'}
            </h4>
            <p className="mt-2 text-base text-stone-800 leading-relaxed max-w-3xl">
              {res.summary.overview}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif-display font-semibold text-stone-900 mb-4">
              {isHi
                ? 'मुख्य स्मरणीय बिंदु (Core Revision Takeaways)'
                : 'Core Revision Takeaways'}
            </h4>
            <ul className="space-y-3">
              {res.summary.coreTakeaways.map((point, index) => (
                <li
                  key={index}
                  className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 text-sm sm:text-base text-stone-800 flex items-start gap-3 leading-relaxed"
                >
                  <span className="font-mono-num text-xs font-semibold text-amber-900 mt-1">
                    0{index + 1}.
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {res.summary.quickRevisionTable.length > 0 && (
            <div>
              <h4 className="text-lg font-serif-display font-semibold text-stone-900 mb-4">
                {isHi
                  ? 'त्वरित पुनरावृत्ति तालिका (Quick Revision Sheet)'
                  : 'Quick Revision Reference Table'}
              </h4>
              <div className="overflow-x-auto border border-stone-200 rounded-xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-stone-100 border-b border-stone-200 text-xs uppercase tracking-wider text-stone-600">
                      <th className="py-3 px-4 font-semibold">
                        {isHi ? 'विषय / अवधारणा (Concept)' : 'Concept / Term'}
                      </th>
                      <th className="py-3 px-4 font-semibold">
                        {isHi ? 'मुख्य विवरण (Key Detail)' : 'Key Revision Detail'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-sm">
                    {res.summary.quickRevisionTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/80">
                        <td className="py-3.5 px-4 font-semibold text-stone-900">
                          {row.concept}
                        </td>
                        <td className="py-3.5 px-4 text-stone-700">
                          {row.detail}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 3. QUESTION & ANSWERS */}
      {activeResourceType === 'qa' && res.qa && (
        <div className="mt-8 space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-serif-display font-semibold text-stone-900">
              {isHi
                ? 'पाठ्यपुस्तक एवं बोधात्मक प्रश्नोत्तर (Model Question & Answers)'
                : 'Structured Question & Answers'}
            </h4>
            <span className="text-xs text-stone-500 font-mono-num">
              {res.qa.length} {isHi ? 'प्रश्नोत्तर' : 'Questions'}
            </span>
          </div>

          <div className="space-y-5">
            {res.qa.map((item, idx) => (
              <div
                key={item.id}
                className="p-5 sm:p-6 rounded-xl bg-[#FAF8F5] border border-stone-200/90"
              >
                <div className="flex items-center gap-2 text-xs text-amber-900 font-medium mb-2">
                  <span className="font-mono-num font-semibold">
                    {isHi ? `प्रश्न ${idx + 1}` : `Question ${idx + 1}`}
                  </span>
                  {item.questionType && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{item.questionType}</span>
                    </>
                  )}
                </div>
                <h5 className="text-base sm:text-lg font-semibold text-stone-950 leading-snug">
                  {item.question}
                </h5>
                <div className="mt-3 pt-3 border-t border-stone-200/80">
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                    {isHi ? 'उत्तर (Answer):' : 'Model Answer:'}
                  </p>
                  <p className="text-sm sm:text-base text-stone-800 leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. INTERACTIVE QUIZ */}
      {activeResourceType === 'quiz' && res.quiz && (
        <div className="mt-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 bg-[#FAF8F5] p-5 rounded-xl border border-stone-200">
            <div>
              <h4 className="text-lg font-serif-display font-semibold text-stone-900">
                {isHi
                  ? 'इंटरैक्टिव अध्याय क्विज़ (Interactive 4-Option MCQ Quiz)'
                  : 'Interactive Multiple-Choice Quiz'}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                {isHi
                  ? 'प्रत्येक प्रश्न के चार विकल्पों में से सही विकल्प चुनें और तुरंत व्याख्या देखें।'
                  : 'Select an option for each question to check your understanding and view detailed explanations.'}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setQuizSubmitted(true)}
                className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-amber-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {isHi ? 'परिणाम जाँचें (Check Score)' : 'Check All Answers'}
              </button>
              <button
                type="button"
                onClick={handleResetQuiz}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{isHi ? 'रीसेट (Reset)' : 'Reset Quiz'}</span>
              </button>
            </div>
          </div>

          {/* Quiz Score Summary Banner */}
          {(quizSubmitted ||
            Object.keys(selectedQuizOptions).length === res.quiz.length) && (
            <div
              role="status"
              className="p-4 rounded-xl bg-amber-50/90 border border-amber-300 flex flex-wrap items-center justify-between gap-4"
            >
              {(() => {
                const stats = evaluateQuizSubmission(
                  res.quiz,
                  selectedQuizOptions
                );
                return (
                  <>
                    <div>
                      <p className="text-sm font-semibold text-stone-900">
                        {isHi ? 'क्विज़ प्रदर्शन सारांश:' : 'Quiz Score Summary:'}{' '}
                        <span className="font-mono-num text-amber-900">
                          {stats.correctCount} / {stats.totalQuestions} (
                          {stats.scorePercentage}%)
                        </span>
                      </p>
                      <p className="text-xs text-stone-600 mt-0.5">
                        {isHi
                          ? `आपने ${stats.totalQuestions} में से ${stats.answeredCount} प्रश्नों के उत्तर दिए हैं।`
                          : `You have answered ${stats.answeredCount} of ${stats.totalQuestions} questions.`}
                      </p>
                    </div>
                  </>
                );
              })()}
            </div>
          )}

          {/* Questions List */}
          <div className="space-y-6">
            {res.quiz.map((q, qIdx) => {
              const userChoice = selectedQuizOptions[q.id];
              const isAnswered = userChoice !== undefined;
              const isCorrect = userChoice === q.correctIndex;

              return (
                <div
                  key={q.id}
                  className="p-5 sm:p-6 rounded-xl bg-white border border-stone-200/90"
                >
                  <p className="text-xs font-mono-num text-stone-500 font-semibold mb-1.5">
                    {isHi
                      ? `प्रश्न ${qIdx + 1} / ${res.quiz!.length}`
                      : `Question ${qIdx + 1} of ${res.quiz!.length}`}
                  </p>
                  <h5 className="text-base sm:text-lg font-semibold text-stone-950">
                    {q.question}
                  </h5>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {q.options.map((optText, optIdx) => {
                      const isThisSelected = userChoice === optIdx;
                      const isThisCorrectOption = q.correctIndex === optIdx;
                      const showFeedback = isAnswered || quizSubmitted;

                      let btnStyle =
                        'bg-[#FAF8F5] border-stone-200 text-stone-800 hover:border-stone-400';
                      if (showFeedback) {
                        if (isThisCorrectOption) {
                          btnStyle =
                            'bg-emerald-50 border-emerald-600 text-emerald-950 font-semibold';
                        } else if (isThisSelected && !isThisCorrectOption) {
                          btnStyle =
                            'bg-red-50 border-red-500 text-red-950 font-semibold';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={`text-left p-3.5 rounded-xl border text-sm transition-colors flex items-start justify-between gap-3 cursor-pointer ${btnStyle}`}
                        >
                          <span className="flex items-start gap-2.5">
                            <span className="font-mono-num font-semibold text-xs mt-0.5 text-stone-500">
                              {String.fromCharCode(65 + optIdx)}.
                            </span>
                            <span>{optText}</span>
                          </span>
                          {showFeedback && isThisCorrectOption && (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 shrink-0">
                              <CheckCircle2 className="w-4 h-4" />
                              <span>{isHi ? 'सही' : 'Correct'}</span>
                            </span>
                          )}
                          {showFeedback &&
                            isThisSelected &&
                            !isThisCorrectOption && (
                              <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 shrink-0">
                                <XCircle className="w-4 h-4" />
                                <span>{isHi ? 'गलत' : 'Incorrect'}</span>
                              </span>
                            )}
                        </button>
                      );
                    })}
                  </div>

                  {(isAnswered || quizSubmitted) && (
                    <div
                      className={`mt-4 p-3.5 rounded-lg text-xs sm:text-sm border ${
                        isCorrect
                          ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                          : 'bg-amber-50/70 border-amber-200 text-stone-800'
                      }`}
                    >
                      <span className="font-semibold">
                        {isCorrect
                          ? isHi
                            ? '✓ सही उत्तर! व्याख्या: '
                            : '✓ Correct Answer! Explanation: '
                          : isHi
                            ? `सही विकल्प (${String.fromCharCode(65 + q.correctIndex)}) है। व्याख्या: `
                            : `Correct Option is (${String.fromCharCode(65 + q.correctIndex)}). Explanation: `}
                      </span>
                      <span>{q.explanation}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 5. PRACTICE QUESTIONS */}
      {activeResourceType === 'practice' && res.practice && (
        <div className="mt-8 space-y-5">
          <div>
            <h4 className="text-lg font-serif-display font-semibold text-stone-900">
              {isHi
                ? 'विद्यार्थी स्व-अभ्यास प्रश्न (Student Practice Questions)'
                : 'Student Self-Practice Questions'}
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              {isHi
                ? 'पहले स्वयं उत्तर लिखने का प्रयास करें, तत्पश्चात "संकेत / मुख्य बिंदु देखें" पर क्लिक कर अपने उत्तर का मिलान करें।'
                : 'Attempt these questions in your notebook first, then click "Show Answer Key / Hint" to verify key points.'}
            </p>
          </div>

          {res.practice.map((item, idx) => {
            const isRevealed = Boolean(revealedHints[item.id]);
            return (
              <div
                key={item.id}
                className="p-5 rounded-xl bg-[#FAF8F5] border border-stone-200"
              >
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5">
                  <span className="font-mono-num font-semibold text-amber-900">
                    {isHi ? `अभ्यास प्रश्न ${idx + 1}` : `Practice Q${idx + 1}`}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{item.difficulty}</span>
                </div>
                <p className="text-base font-semibold text-stone-900 leading-snug">
                  {item.prompt}
                </p>
                <div className="mt-3">
                  <button
                    type="button"
                    onClick={() => toggleHint(item.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 hover:text-amber-950 cursor-pointer"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>
                      {isRevealed
                        ? isHi
                          ? 'संकेत छुपाएँ (Hide Hint)'
                          : 'Hide Answer Hint'
                        : isHi
                          ? 'संकेत एवं मुख्य उत्तर बिंदु देखें (Show Answer Hint)'
                          : 'Show Answer Key / Hint'}
                    </span>
                    {isRevealed ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                  {isRevealed && (
                    <div className="mt-2.5 p-3.5 rounded-lg bg-white border border-stone-200 text-sm text-stone-700 leading-relaxed">
                      <span className="font-semibold text-stone-900">
                        {isHi ? 'उत्तर संकेत: ' : 'Key Guidance: '}
                      </span>
                      {item.hintOrKey}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 6. IMPORTANT QUESTIONS */}
      {activeResourceType === 'important' && res.important && (
        <div className="mt-8 space-y-6">
          <div>
            <h4 className="text-lg font-serif-display font-semibold text-stone-900">
              {isHi
                ? 'परीक्षा उपयोगी महत्वपूर्ण प्रश्न (Exam-Oriented Important Questions)'
                : 'Exam-Oriented Important Questions'}
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              {isHi
                ? 'विद्यालयी एवं बोर्ड परीक्षाओं की दृष्टि से उच्च प्राथमिकता वाले प्रश्न एवं उनके आदर्श उत्तर बिंदु।'
                : 'High-priority questions frequently asked in school and board examinations with structured marking points.'}
            </p>
          </div>

          {res.important.map((imp, idx) => (
            <div
              key={imp.id}
              className="p-6 rounded-xl bg-[#FAF8F5] border border-stone-200"
            >
              <div className="flex items-center gap-2 text-xs text-amber-900 font-semibold mb-2">
                <span className="font-mono-num">
                  {isHi ? `महत्वपूर्ण प्रश्न ${idx + 1}` : `Important Question ${idx + 1}`}
                </span>
                <span aria-hidden="true">·</span>
                <span>{imp.examFocus}</span>
              </div>
              <h5 className="text-base sm:text-lg font-semibold text-stone-950">
                {imp.question}
              </h5>
              <div className="mt-4 pt-3 border-t border-stone-200">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  {isHi
                    ? 'उत्तर में शामिल किए जाने वाले मुख्य बिंदु:'
                    : 'Key Points to Include in Your Answer:'}
                </p>
                <ul className="space-y-2">
                  {imp.keyAnswerPoints.map((pt, pIdx) => (
                    <li
                      key={pIdx}
                      className="text-sm sm:text-base text-stone-800 flex items-start gap-2.5 leading-relaxed"
                    >
                      <span className="font-mono-num text-xs font-bold text-amber-900 mt-1">
                        {pIdx + 1}.
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 7. CLASSROOM & STUDENT ACTIVITIES */}
      {activeResourceType === 'activities' && res.activities && (
        <div className="mt-8 space-y-6">
          {res.activities.map((act) => (
            <div
              key={act.id}
              className="p-6 rounded-xl bg-[#FAF8F5] border border-stone-200 space-y-4"
            >
              <div>
                <p className="text-xs uppercase tracking-wider text-amber-900 font-semibold">
                  {isHi
                    ? 'प्रयोगात्मक एवं गतिविधि-आधारित शिक्षण'
                    : 'Experiential Classroom / Student Activity'}
                </p>
                <h4 className="text-xl font-serif-display font-semibold text-stone-950 mt-1">
                  {act.title}
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="p-3.5 bg-white rounded-lg border border-stone-200">
                  <span className="font-semibold text-stone-900 block mb-1">
                    {isHi ? 'गतिविधि का उद्देश्य (Objective):' : 'Learning Objective:'}
                  </span>
                  <span className="text-stone-700">{act.objective}</span>
                </div>
                <div className="p-3.5 bg-white rounded-lg border border-stone-200">
                  <span className="font-semibold text-stone-900 block mb-1">
                    {isHi ? 'आवश्यक सामग्री (Materials):' : 'Materials Needed:'}
                  </span>
                  <span className="text-stone-700">{act.materialsNeeded}</span>
                </div>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-stone-900 mb-2">
                  {isHi ? 'गतिविधि के चरण (Step-by-Step Procedure):' : 'Activity Steps:'}
                </h5>
                <ol className="space-y-2">
                  {act.steps.map((step, sIdx) => (
                    <li
                      key={sIdx}
                      className="text-sm text-stone-800 flex items-start gap-2.5"
                    >
                      <span className="font-mono-num font-semibold text-amber-900">
                        {sIdx + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="pt-3 border-t border-stone-200 text-sm text-stone-700">
                <span className="font-semibold text-stone-900">
                  {isHi ? 'अधिगम प्रतिफल (Learning Outcome): ' : 'Learning Outcome: '}
                </span>
                {act.learningOutcome}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 8. WORKSHEETS / PRACTICE SHEETS */}
      {activeResourceType === 'worksheets' && res.worksheets && (
        <div className="mt-8 space-y-6">
          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-stone-200 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-amber-900 font-semibold">
                {isHi ? 'संरचित अभ्यास पत्रक (Structured Worksheet)' : 'Classroom Practice Sheet'}
              </p>
              <h4 className="text-xl font-serif-display font-semibold text-stone-950 mt-0.5">
                {res.worksheets.title}
              </h4>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono-num text-stone-700">
              <span>
                {isHi
                  ? `निर्धारित समय: ${res.worksheets.durationMinutes} मिनट`
                  : `Time: ${res.worksheets.durationMinutes} Mins`}
              </span>
              <span aria-hidden="true">·</span>
              <span>
                {isHi
                  ? `पूर्णांक: ${res.worksheets.maxMarks} अंक`
                  : `Max Marks: ${res.worksheets.maxMarks}`}
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {res.worksheets.tasks.map((task) => (
              <div
                key={task.id}
                className="p-5 sm:p-6 rounded-xl bg-white border border-stone-200"
              >
                <h5 className="text-base font-serif-display font-semibold text-stone-900">
                  {task.sectionTitle}
                </h5>
                <p className="text-xs text-stone-500 mt-1 mb-4">
                  {task.instructions}
                </p>
                <ul className="space-y-3">
                  {task.items.map((line, lIdx) => (
                    <li
                      key={lIdx}
                      className="p-3 rounded-lg bg-[#FAF8F5] border border-stone-200/70 text-sm sm:text-base text-stone-800"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 9. BOOKS / STUDY MATERIAL */}
      {activeResourceType === 'books' && res.books && (
        <div className="mt-8 space-y-5">
          <h4 className="text-lg font-serif-display font-semibold text-stone-900">
            {isHi
              ? 'अनुशंसित पाठ्यपुस्तकें एवं अध्ययन सामग्री (Books & Study Material)'
              : 'Recommended Textbooks & Study Material'}
          </h4>
          {res.books.map((bk) => (
            <div
              key={bk.id}
              className="p-6 rounded-xl bg-[#FAF8F5] border border-stone-200 space-y-3"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs text-amber-900 font-medium">
                <span>{bk.classLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{bk.subjectLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{bk.authorOrPublisher}</span>
              </div>
              <h5 className="text-xl font-serif-display font-semibold text-stone-950">
                {bk.title}
              </h5>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                {bk.description}
              </p>
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1.5">
                  {isHi ? 'प्रमुख इकाई एवं विषय:' : 'Key Units & Chapters Covered:'}
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-stone-800 font-medium">
                  {bk.keyTopicsCovered.map((topic, tIdx) => (
                    <React.Fragment key={tIdx}>
                      {tIdx > 0 && (
                        <span className="text-stone-400" aria-hidden="true">
                          ·
                        </span>
                      )}
                      <span>{topic}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
