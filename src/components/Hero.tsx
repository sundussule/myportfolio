import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, GraduationCap, Terminal, Laptop, Heart, Code2, Sparkles } from 'lucide-react';

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  about: string;
  degreeName: string;
}

type TabType = 'curiosity' | 'laptop' | 'zetech';

export default function Hero({ name, title, tagline, about, degreeName }: HeroProps) {
  const [activeTab, setActiveTab] = useState<TabType>('curiosity');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#EAEAEA]">
      {/* Dynamic Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#DCDCDD_1px,transparent_1px),linear-gradient(to_bottom,#DCDCDD_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_75%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Elegant, warm ambient glows - giving a creative, chic, aesthetic vibe */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neutral-300/30 rounded-full filter blur-[120px] pointer-events-none pulse-subtle" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-stone-300/20 rounded-full filter blur-[100px] pointer-events-none pulse-subtle" style={{ animationDelay: '3s' }} />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Column: Introspective Bio, Wording optimized for her passion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Creative Interactive Badge */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D1D1D1] w-fit mb-6 shadow-sm hover:border-[#1A1A1A] transition-all cursor-default"
          >
            <GraduationCap size={13} className="text-[#1A1A1A]" />
            <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-[#1A1A1A]">
              {degreeName} • expected 2026
            </span>
          </motion.div>

          {/* Introspective creative heading */}
          <motion.h2 variants={itemVariants} className="text-neutral-500 font-mono text-[10px] font-bold tracking-[0.25em] uppercase mb-4 flex items-center gap-2">
            <Sparkles size={11} /> Creative Software Developer
          </motion.h2>
          
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-[#1A1A1A] leading-[0.95] mb-6">
            From playing with laptops to <span className="font-serif italic font-normal text-stone-600 block sm:inline">engineering tomorrow's</span> software.
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base sm:text-lg font-mono text-neutral-700 font-medium mb-6 leading-relaxed">
            Hi, I'm <span className="font-sans font-extrabold text-[#1A1A1A] underline decoration-stone-400 decoration-2 underline-offset-4">{name}</span>. I transform simple intrigue and tech curiosity into polished, secure systems.
          </motion.p>

          <motion.p variants={itemVariants} className="text-sm text-[#555555] max-w-xl mb-8 leading-relaxed font-light">
            {about}
          </motion.p>

          {/* Action buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            <a
              href="#projects"
              className="px-6 py-3 rounded bg-[#1A1A1A] text-white font-mono text-[10px] font-bold tracking-widest uppercase hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 duration-200 shadow-md flex items-center gap-2"
            >
              <span>Explore My Code</span>
              <span className="text-neutral-400">→</span>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded border border-[#1A1A1A] text-[#1A1A1A] bg-white/50 backdrop-blur-sm font-mono text-[10px] font-bold tracking-widest uppercase hover:bg-[#1A1A1A] hover:text-white transition-all duration-200"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Interactive Multi-Tab Notebook Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col justify-center w-full"
        >
          {/* Mock Interactive Device */}
          <div className="w-full bg-white border border-[#D1D1D1] rounded shadow-xl overflow-hidden flex flex-col">
            
            {/* Device Frame Header */}
            <div className="bg-[#F5F5F5] px-4 py-3 border-b border-[#D1D1D1] flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/30 border border-red-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/30 border border-yellow-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/30 border border-green-400/50" />
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500">
                <Laptop size={11} className="text-[#1A1A1A]" />
                <span>sundus_laptop_workspace</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[8px] font-mono font-bold text-neutral-400 uppercase">ONLINE</span>
              </div>
            </div>

            {/* Interactive File Tabs */}
            <div className="flex bg-[#EAEAEA] border-b border-[#D1D1D1] text-[10px] font-mono">
              <button
                onClick={() => setActiveTab('curiosity')}
                className={`px-4 py-2.5 border-r border-[#D1D1D1] transition-colors flex items-center gap-1.5 font-bold cursor-pointer ${
                  activeTab === 'curiosity' ? 'bg-white text-[#1A1A1A] border-b-2 border-b-[#1A1A1A] -mb-[1px]' : 'text-neutral-500 hover:bg-[#F0F0F0]'
                }`}
              >
                <Heart size={10} className="text-red-500" />
                <span>curiosity.ts</span>
              </button>
              
              <button
                onClick={() => setActiveTab('laptop')}
                className={`px-4 py-2.5 border-r border-[#D1D1D1] transition-colors flex items-center gap-1.5 font-bold cursor-pointer ${
                  activeTab === 'laptop' ? 'bg-white text-[#1A1A1A] border-b-2 border-b-[#1A1A1A] -mb-[1px]' : 'text-neutral-500 hover:bg-[#F0F0F0]'
                }`}
              >
                <Code2 size={10} className="text-amber-500" />
                <span>laptop.json</span>
              </button>

              <button
                onClick={() => setActiveTab('zetech')}
                className={`px-4 py-2.5 border-r border-[#D1D1D1] transition-colors flex items-center gap-1.5 font-bold cursor-pointer ${
                  activeTab === 'zetech' ? 'bg-white text-[#1A1A1A] border-b-2 border-b-[#1A1A1A] -mb-[1px]' : 'text-neutral-500 hover:bg-[#F0F0F0]'
                }`}
              >
                <Terminal size={10} className="text-blue-500" />
                <span>zetech.log</span>
              </button>
            </div>

            {/* Tab Body with elegant animations */}
            <div className="p-6 font-mono text-[11px] leading-relaxed text-[#1A1A1A] bg-white min-h-[220px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {activeTab === 'curiosity' && (
                  <motion.div
                    key="curiosity"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-neutral-400 mb-2">// Why Software Engineering?</div>
                    <div>
                      <span className="text-[#1A1A1A] font-semibold">import</span> &#123; <span className="text-stone-600">Passion</span> &#125; <span className="text-neutral-500 font-bold">from</span> <span className="text-neutral-600">"digital-intrigue"</span>;
                    </div>
                    <div className="mt-3">
                      <span className="text-neutral-500 font-bold">const</span> <span className="text-[#1A1A1A] font-semibold">originStory</span> = () =&gt; &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-[#555555]">intrigueLevel</span>: <span className="text-neutral-600">"highest"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#555555]">motivation</span>: <span className="text-neutral-600">"I loved playing with my laptop"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#555555]">mission</span>: <span className="text-neutral-600">"Design secure & peaceful web architectures"</span>
                    </div>
                    <div>&#125;;</div>
                    
                    <div className="mt-4 p-3 bg-stone-50 border border-stone-200 rounded text-xs text-stone-700 italic font-light">
                      "I was always intrigued by software engineering. Designing code is my creative outlet, transforming blank files into elegant platforms."
                    </div>
                  </motion.div>
                )}

                {activeTab === 'laptop' && (
                  <motion.div
                    key="laptop"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-neutral-400 mb-2">// Setup details & playground parameters</div>
                    <div>&#123;</div>
                    <div className="pl-4">
                      <span className="text-neutral-500">"owner"</span>: <span className="text-neutral-600">"Sundus Suleiman Rashid"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-neutral-500">"vibe"</span>: <span className="text-neutral-600">"Minimalist Developer"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-neutral-500">"currentProject"</span>: <span className="text-emerald-600">"Sundus Peace Platform"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-neutral-500">"primaryTools"</span>: [
                      <span className="text-neutral-600">"React"</span>, <span className="text-neutral-600">"TypeScript"</span>, <span className="text-neutral-600">"Cloud Run"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-neutral-500">"laptopIntrigueSince"</span>: <span className="text-neutral-600">"Early Childhood"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-neutral-500">"status"</span>: <span className="text-neutral-600">"Ready to create clean systems"</span>
                    </div>
                    <div>&#125;</div>
                  </motion.div>
                )}

                {activeTab === 'zetech' && (
                  <motion.div
                    key="zetech"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <div className="text-neutral-400 mb-1">// Academic logs & timeline</div>
                    <div className="flex gap-2 text-stone-500">
                      <span>[2022-09]</span>
                      <span className="text-[#1A1A1A] font-medium">Began engineering foundation</span>
                    </div>
                    <div className="flex gap-2 text-stone-500">
                      <span>[2024-05]</span>
                      <span className="text-[#1A1A1A] font-medium">Deployed 'Sundus Peace' to Cloud Run</span>
                    </div>
                    <div className="flex gap-2 text-stone-500">
                      <span>[2026-12]</span>
                      <span className="text-emerald-700 font-bold">Graduation (Expected Class of 2026)</span>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50/50 border border-blue-200/50 rounded flex items-center justify-between text-[10px] text-blue-900 font-bold">
                      <span>University: Zetech University</span>
                      <span className="px-2 py-0.5 rounded bg-blue-100 border border-blue-300">HQ</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom detail row */}
              <div className="mt-6 border-t border-[#F0F0F0] pt-4 flex justify-between items-center text-[9px] font-mono text-neutral-400 font-semibold uppercase tracking-wider">
                <span>click tabs to query</span>
                <span>Inter Font Loaded</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Elegant Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60">
        <span className="font-mono text-[9px] font-bold tracking-widest text-[#1A1A1A] uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="text-[#1A1A1A]"
        >
          <ArrowDown size={14} />
        </motion.div>
      </div>
    </section>
  );
}
