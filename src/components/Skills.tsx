import { motion } from 'motion/react';
import { Code, Database, Cpu, Layers, Star } from 'lucide-react';
import { useState } from 'react';

interface SkillCategory {
  category: string;
  items: string[];
}

interface SkillsProps {
  skills: SkillCategory[];
}

export default function Skills({ skills }: SkillsProps) {
  const [activeTab, setActiveTab] = useState(0);

  // Helper icons for categories
  const getCategoryIcon = (category: string) => {
    const name = category.toLowerCase();
    if (name.includes('front')) return <Layers size={13} />;
    if (name.includes('back') || name.includes('data')) return <Database size={13} />;
    if (name.includes('tool') || name.includes('devops')) return <Cpu size={13} />;
    return <Code size={13} />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.95, opacity: 0, y: 10 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 18 }
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#EAEAEA] relative border-b border-[#D1D1D1]">
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
            <Cpu size={12} />
            Capability Deck
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-light tracking-tight text-[#1A1A1A]"
          >
            Technical <span className="italic font-serif">Toolbox</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-500 font-mono text-[10px] font-bold uppercase tracking-wider mt-2.5"
          >
            A selective stack of technologies engineered to high standards
          </motion.p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {skills.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-200 relative cursor-pointer ${
                activeTab === idx
                  ? 'text-white'
                  : 'text-neutral-500 hover:text-[#1A1A1A] bg-white hover:bg-[#F5F5F5] border border-[#D1D1D1] shadow-sm'
              }`}
            >
              {activeTab === idx && (
                <motion.div
                  layoutId="active-skill-tab"
                  className="absolute inset-0 bg-[#1A1A1A] rounded z-0"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{getCategoryIcon(category.category)}</span>
              <span className="relative z-10">{category.category}</span>
            </button>
          ))}
        </div>

        {/* Selected Category Skill Badges Grid */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 min-h-[160px]"
        >
          {skills[activeTab]?.items.map((skill, index) => (
            <motion.div
              key={skill}
              variants={itemVariants}
              whileHover={{ y: -3, borderColor: '#1A1A1A' }}
              className="flex flex-col justify-between p-4.5 rounded bg-white border border-[#D1D1D1] hover:bg-white transition-all duration-200 cursor-default shadow-sm group relative overflow-hidden"
            >
              {/* Card subtle shine */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-neutral-100/50 rounded-full filter blur-lg pointer-events-none" />

              <div className="flex items-start justify-between mb-3.5">
                <span className="font-mono text-xs font-bold text-[#1A1A1A] transition-colors">
                  {skill}
                </span>
                <Star size={11} className="text-neutral-300 group-hover:text-[#1A1A1A] transition-colors" />
              </div>

              {/* Progress bar visual indicator */}
              <div className="h-1.5 w-full bg-[#EAEAEA] rounded overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${82 + (index * 4) % 18}%` }}
                  transition={{ duration: 0.8, delay: index * 0.04 }}
                  className="h-full bg-[#1A1A1A] rounded group-hover:bg-[#1A1A1A] transition-colors"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick summary line */}
        <p className="text-center text-[9px] font-mono font-bold tracking-widest text-neutral-400 mt-10 uppercase">
          Clean Architecture • Dynamic Tool Assessment
        </p>

      </div>
    </section>
  );
}
