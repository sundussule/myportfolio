import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 bg-[#EAEAEA] relative border-b border-[#D1D1D1]">
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
            <Briefcase size={12} />
            Career Index
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-light tracking-tight text-[#1A1A1A]"
          >
            Professional <span className="italic font-serif">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-500 font-mono text-[10px] font-bold uppercase tracking-wider mt-2.5"
          >
            A timeline of positions, contributions, and engineering impact
          </motion.p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-[#D1D1D1] pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#1A1A1A] group-hover:bg-[#1A1A1A] transition-colors duration-200" />

              {/* Header block */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-[#1A1A1A]">
                    {exp.role}
                  </h3>
                  <div className="font-mono text-xs font-bold uppercase text-neutral-500 mt-1">
                    {exp.company}
                  </div>
                </div>

                {/* Date / Location row */}
                <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                  <span className="flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-[#D1D1D1]">
                    <Calendar size={10} />
                    {exp.duration}
                  </span>
                  <span className="h-3 w-[1px] bg-[#D1D1D1]" />
                  <span className="flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-[#D1D1D1]">
                    <MapPin size={10} />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Accomplishments details */}
              <ul className="space-y-2.5 text-xs text-[#555555] leading-relaxed list-none pl-1 font-light">
                {exp.description.map((desc, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-1 font-mono">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
