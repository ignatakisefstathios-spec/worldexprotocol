import { useState } from 'react';
import { courses, quizQuestions } from '@/lib/data/mockData';
import type { Course } from '@/types';

interface LearnProps {
  onCourseSelect?: (course: Course) => void;
  onQuizAnswer?: (questionId: string, answerIndex: number) => void;
}

export const Learn: React.FC<LearnProps> = ({
  onCourseSelect,
  onQuizAnswer,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(1); // Pre-select correct answer for demo
  const [currentQuestion] = useState(quizQuestions[0]);

  const featuredCourse = courses[0];
  const completedCourses = courses.filter(c => c.completed);

  const overallProgress = Math.round(
    courses.reduce((acc, c) => acc + c.progress, 0) / courses.length
  );

  return (
    <div className="pt-20 pb-28 px-4 space-y-8">
      {/* Hero Header & Progress */}
      <header className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="space-y-4 max-w-2xl">
          <span className="text-[0.6875rem] font-bold uppercase tracking-[0.05em] text-primary">
            Knowledge Ledger
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface leading-[1.1]">
            Master the <br />Protocol Economy
          </h1>
          <p className="text-on-surface-variant body-md max-w-lg">
            Advanced education for the next generation of DeFi architects. Complete modules to earn WDX incentives.
          </p>
        </div>
        <div className="w-full md:w-80 p-6 rounded-xl bg-surface-container-high relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl">school</span>
          </div>
          <div className="relative z-10 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[0.6875rem] font-bold uppercase tracking-[0.05em] text-on-surface-variant">
                Overall Progress
              </span>
              <span className="text-lg font-bold text-primary">{overallProgress}%</span>
            </div>
            <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary-container to-primary transition-all duration-500"
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
            <p className="text-[0.6875rem] font-medium text-on-surface-variant">
              {completedCourses.length} of {courses.length} Modules Completed
            </p>
          </div>
        </div>
      </header>

      {/* Course Tracks */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-on-surface">Course Tracks</h2>
          <div className="flex gap-2">
            {['all', 'security', 'yield'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`
                  px-4 py-1.5 rounded-full text-[0.6875rem] font-bold uppercase tracking-[0.05em] transition-all
                  ${selectedCategory === cat
                    ? 'bg-surface-container-high text-on-surface'
                    : 'bg-transparent border border-outline-variant/20 text-on-surface-variant hover:border-primary/30'
                  }
                `}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Featured Card */}
          <div 
            onClick={() => onCourseSelect?.(featuredCourse)}
            className="md:col-span-8 group cursor-pointer relative overflow-hidden rounded-xl bg-surface-container aspect-[16/9] md:aspect-auto flex flex-col justify-end p-8 min-h-[300px]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10"></div>
            {featuredCourse.image && (
              <img
                src={featuredCourse.image}
                alt={featuredCourse.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            )}
            <div className="relative z-20 space-y-4">
              <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-[0.6875rem] font-bold uppercase tracking-[0.05em]">
                Advanced Track
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-on-surface max-w-md">
                {featuredCourse.title}
              </h3>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">schedule</span>
                  <span className="text-[0.6875rem] font-bold text-on-surface-variant">
                    {featuredCourse.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-secondary">database</span>
                  <span className="text-[0.6875rem] font-bold text-on-surface-variant">
                    {featuredCourse.rewardFormatted} REWARD
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Small Secondary Cards */}
          <div className="md:col-span-4 space-y-4">
            {courses.slice(1, 3).map((course) => (
              <div
                key={course.id}
                onClick={() => onCourseSelect?.(course)}
                className="bg-surface-container-high p-5 rounded-xl space-y-3 hover:bg-surface-container-highest transition-colors cursor-pointer group active-scale"
              >
                <span className="text-[0.6875rem] font-bold uppercase tracking-[0.05em] text-primary">
                  {course.category}
                </span>
                <h4 className="text-lg font-bold text-on-surface line-clamp-2">{course.title}</h4>
                <div className="h-1 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary-container transition-all duration-500"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-[0.6875rem] font-bold ${course.completed ? 'text-secondary' : 'text-on-surface-variant'}`}>
                    {course.completed ? 'COMPLETED' : `${course.progress}% PROGRESS`}
                  </span>
                  <span className={`material-symbols-outlined text-sm ${course.completed ? 'text-secondary' : 'text-on-surface-variant'}`} style={{ fontVariationSettings: course.completed ? "'FILL' 1" : "'FILL' 0" }}>
                    {course.completed ? 'check_circle' : 'play_circle'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-surface-container-lowest p-6 md:p-8 rounded-[2rem] border border-outline-variant/10">
        <div className="lg:col-span-1 space-y-4">
          <span className="px-3 py-1 rounded-full bg-primary-container/20 text-primary text-[0.6875rem] font-bold uppercase tracking-[0.05em]">
            Interactive Lab
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-on-surface">Protocol Stress Test</h2>
          <p className="text-on-surface-variant text-sm">
            Verify your understanding of liquidity pools. Correct answers instantly deposit WDX tokens into your verified World ID wallet.
          </p>
          <div className="pt-2">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container border border-outline-variant/10">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <span className="material-symbols-filled text-secondary">token</span>
              </div>
              <div>
                <span className="block text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-widest">
                  Prize Pool
                </span>
                <span className="text-xl font-bold text-on-surface">
                  {currentQuestion.prizePool.toLocaleString()} WDX
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-surface-container rounded-2xl p-5 md:p-6 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 blur-3xl"></div>
          <div className="space-y-2">
            <span className="text-[0.6875rem] font-bold text-on-surface-variant">
              QUESTION 1 OF 5
            </span>
            <h3 className="text-lg md:text-xl font-semibold text-on-surface">
              {currentQuestion.question}
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedAnswer(index)}
                className={`
                  w-full text-left p-4 rounded-xl border flex justify-between items-center group transition-all
                  ${selectedAnswer === index
                    ? 'bg-primary-container/10 border-primary/40'
                    : 'bg-surface-container-lowest border-outline-variant/20 hover:border-primary/30'
                  }
                `}
              >
                <span className={selectedAnswer === index ? 'text-primary font-medium' : 'text-on-surface'}>
                  {option}
                </span>
                <div 
                  className={`
                    w-5 h-5 rounded-full border transition-all
                    ${selectedAnswer === index
                      ? 'border-4 border-primary bg-primary-container'
                      : 'border-outline-variant group-hover:border-primary'
                    }
                  `}
                ></div>
              </button>
            ))}
          </div>
          <div className="flex justify-between items-center pt-2">
            <button className="text-on-surface-variant text-[0.6875rem] font-bold uppercase tracking-[0.05em] hover:text-on-surface transition-colors">
              Skip Question
            </button>
            <button 
              onClick={() => selectedAnswer !== null && onQuizAnswer?.(currentQuestion.id, selectedAnswer)}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-br from-primary-container to-primary text-on-primary-fixed font-bold text-sm tracking-tight hover:opacity-90 transition-opacity active-scale"
            >
              Confirm Answer
            </button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-on-surface tracking-tight">
            The Worldex Compliance Standard
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-sm">
            Our commitment to safety is built into the code. We operate with radical transparency and institutional-grade security.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: 'verified_user',
              title: 'World ID Gating',
              description: 'Every participant is verified via biometric proof-of-personhood, eliminating Sybil attacks and ensuring a human-centric economy.',
              color: 'text-primary',
            },
            {
              icon: 'account_balance',
              title: 'Regulatory Alignment',
              description: 'We work proactively with global regulators to ensure that DeFi can scale while maintaining consumer protection standards.',
              color: 'text-secondary',
            },
            {
              icon: 'analytics',
              title: 'Real-time Audits',
              description: 'Our smart contracts are subject to continuous, automated security audits and public bug bounties to ensure capital safety.',
              color: 'text-tertiary',
            },
          ].map((feature, index) => (
            <div key={index} className="p-6 space-y-4 bg-surface-container-low rounded-2xl">
              <span className={`material-symbols-outlined ${feature.color} text-3xl`}>{feature.icon}</span>
              <h5 className="text-lg font-bold text-on-surface">{feature.title}</h5>
              <p className="text-sm text-on-surface-variant leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-[2rem] bg-surface-container p-8 md:p-12 text-center space-y-6">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at center, #6B58F0 0%, transparent 70%)' }}
        ></div>
        <div className="relative z-10 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight">
            Ready to start earning?
          </h2>
          <p className="text-on-surface-variant text-base max-w-xl mx-auto">
            The first 100 WDX tokens are waiting for you in the "Intro to Web3" module.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-br from-primary-container to-primary text-on-primary-fixed font-bold text-base hover:scale-95 transition-transform duration-200 active-scale">
              Start First Lesson
            </button>
            <button className="px-8 py-3 rounded-xl border border-outline-variant/30 text-on-surface font-bold text-base hover:bg-surface-container-high transition-colors">
              View All Courses
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learn;
