import { motion } from 'motion/react';
import { Award, BookOpen, Calendar, CheckCircle2, ChevronDown, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { Education } from '../types';

interface EducationCardProps {
  education: Education;
}

export default function EducationCard({ education }: EducationCardProps) {
  const [isCourseworkExpanded, setIsCourseworkExpanded] = useState(false);

  const coreCoursework = [
    { title: "Object-Oriented Programming", desc: "Design patterns, classes, inheritance, polymorphism, and modular software architectures." },
    { title: "Data Structures & Algorithms", desc: "Complexity analysis, searching/sorting, graph traversals, and algorithmic optimization." },
    { title: "Database Systems", desc: "Relational modeling, SQL optimization, schema design, and transactional safety." },
    { title: "Software Architecture & Design", desc: "Clean Code paradigms, SOLID principles, UML, and robust design practices." },
    { title: "Web Application Development", desc: "Modern full-stack, state synchronization, client-server models, and secure REST APIs." },
    { title: "Agile Engineering & QA", desc: "Scrum cycles, continuous integration, test-driven development (TDD), and quality standards." }
  ];

  return (
    <section id="education" className="py-24 bg-[#F5F5F5] relative border-y border-[#D1D1D1]">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E1E1E2_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D1D1D1] font-mono text-[9px] font-bold tracking-widest text-[#1A1A1A] uppercase mb-4 shadow-sm"
          >
            <GraduationCap size={12} />
            Academic Credentials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-light tracking-tight text-[#1A1A1A]"
          >
            Diploma in <span className="italic font-serif">Software Engineering</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-500 font-mono text-[10px] font-bold uppercase tracking-wider mt-2.5"
          >
            Structured industry-aligned engineering credential
          </motion.p>
        </div>

        {/* Education Body Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-[#D1D1D1] rounded p-6 sm:p-8 shadow-md"
        >
          {/* Degree title & details */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#D1D1D1] pb-6 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A]">
                {education.degree}
              </h3>
              <p className="text-[#555555] font-mono text-xs mt-1.5 font-medium">
                {education.institution}
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#F5F5F5] border border-[#D1D1D1] font-mono text-[10px] font-bold text-[#1A1A1A]">
                <Calendar size={10} />
                <span>{education.duration}</span>
              </div>
              {education.grade && (
                <div className="flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-50 border border-emerald-300 font-mono text-[10px] font-bold text-emerald-800">
                  <Award size={10} />
                  <span>{education.grade}</span>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-[#555555] leading-relaxed mb-6 font-light">
            {education.description}
          </p>

          {/* Core Highlights */}
          <div className="mb-6">
            <h4 className="text-[10px] font-mono font-bold tracking-wider text-[#1A1A1A] uppercase mb-4 flex items-center gap-1.5">
              <CheckCircle2 size={12} className="text-neutral-500" />
              Key Achievements & Milestones
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {education.highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-2.5 text-xs text-[#555555] leading-normal font-light"
                >
                  <span className="text-neutral-400 font-mono mt-0.5">•</span>
                  <span>{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Core Coursework Accordion */}
          <div className="border-t border-[#D1D1D1] pt-6">
            <button
              onClick={() => setIsCourseworkExpanded(!isCourseworkExpanded)}
              className="w-full flex items-center justify-between group text-[#1A1A1A] hover:opacity-85 transition-opacity cursor-pointer"
            >
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase flex items-center gap-1.5">
                <BookOpen size={12} className="text-neutral-500" />
                Specialized Coursework Modules
              </span>
              <motion.div
                animate={{ rotate: isCourseworkExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-[#1A1A1A]"
              >
                <ChevronDown size={14} />
              </motion.div>
            </button>

            {/* Coursework Expandable Area */}
            <motion.div
              initial={false}
              animate={{
                height: isCourseworkExpanded ? 'auto' : 0,
                opacity: isCourseworkExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 mt-2">
                {coreCoursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded bg-[#F5F5F5] border border-[#D1D1D1] flex flex-col gap-1 hover:border-[#999999] transition-colors"
                  >
                    <span className="font-mono text-xs font-bold text-[#1A1A1A]">
                      {course.title}
                    </span>
                    <span className="text-[11px] text-[#555555] leading-relaxed font-light">
                      {course.desc}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
