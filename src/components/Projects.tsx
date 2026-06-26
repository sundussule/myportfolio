import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Layers, X, Eye, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#F5F5F5] border-y border-[#D1D1D1]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D1D1D1] font-mono text-[9px] font-bold tracking-widest text-[#1A1A1A] uppercase mb-4 shadow-sm"
          >
            <Layers size={12} />
            Works Archive
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-light tracking-tight text-[#1A1A1A]"
          >
            Selected <span className="italic font-serif">Engineering</span> Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-500 font-mono text-[10px] font-bold uppercase tracking-wider mt-2.5"
          >
            A physical display of robust logic, optimization, and interfaces
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => {
            // Let's make the 3rd project (or last project if 3 or more) full width to match the theme mockup!
            const isFeaturedBanner = idx === 2 || (projects.length < 3 && idx === projects.length - 1 && projects.length === 1);
            
            if (isFeaturedBanner) {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="md:col-span-2 lg:col-span-3 bg-[#1A1A1A] text-white p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 group cursor-pointer rounded shadow-lg relative overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="space-y-4 max-w-2xl relative z-10">
                    <div className="flex items-center gap-4 font-mono text-[10px] text-neutral-400">
                      <span className="opacity-60">0{idx + 1} / FEATURED WORK</span>
                      <span>•</span>
                      <span className="font-bold uppercase tracking-widest">{project.role || 'Software Engineer'}</span>
                    </div>
                    <h3 className="text-3xl font-light tracking-tight group-hover:italic transition-all">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed font-light">
                      {project.description}
                    </p>
                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="font-mono text-[9px] text-neutral-300 bg-neutral-800/80 px-2.5 py-0.5 rounded border border-neutral-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-2xl font-light opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all text-white shrink-0 self-end sm:self-center">
                    <ArrowRight size={24} />
                  </div>
                </motion.div>
              );
            }

            // Alternating backgrounds for standard cards
            const bgClass = idx % 2 === 0 ? 'bg-white' : 'bg-[#EAEAEA]';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className={`${bgClass} border border-[#D1D1D1] p-6 flex flex-col justify-between group cursor-pointer transition-all rounded shadow-sm`}
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  <div className="flex justify-between items-center mb-5 font-mono text-[10px] text-neutral-400">
                    <span>0{idx + 1} / PROJECT</span>
                    <span className="font-bold uppercase tracking-widest text-[#1A1A1A]">{project.role?.split(' ')[0] || 'System'}</span>
                  </div>

                  <h3 className="text-2xl font-medium tracking-tight text-[#1A1A1A] group-hover:italic mb-3 transition-all">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#555555] leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="font-mono text-[9px] text-neutral-500 bg-white/80 border border-[#D1D1D1] px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="font-mono text-[9px] text-neutral-400 px-1 py-0.5">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="border-t border-[#D1D1D1] pt-4 mt-auto flex justify-between items-center font-mono text-[10px] text-neutral-500 uppercase tracking-wider font-bold">
                  <span>Explore Specs</span>
                  <span className="group-hover:translate-x-1.5 transition-transform text-[#1A1A1A]">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-[#1A1A1A]/85 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative bg-white border border-[#D1D1D1] rounded max-w-xl w-full p-6 sm:p-8 shadow-2xl z-10 max-h-[85vh] overflow-y-auto text-[#1A1A1A]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-neutral-400 hover:text-[#1A1A1A] p-1.5 rounded transition-colors"
                >
                  <X size={18} />
                </button>

                {/* Title */}
                <div className="mb-4">
                  <span className="font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                    {selectedProject.role || 'Software Engineer'}
                  </span>
                  <h3 className="text-2xl font-light tracking-tight text-[#1A1A1A]">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-[#D1D1D1] my-4" />

                {/* Description */}
                <div className="space-y-4">
                  <p className="text-sm text-[#555555] leading-relaxed font-light">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                {/* Tech specifications */}
                <div className="mt-6">
                  <span className="font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-wider block mb-2">
                    Technologies Implemented:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="font-mono text-[10px] text-[#1A1A1A] bg-[#F5F5F5] px-2.5 py-1 rounded border border-[#D1D1D1] font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-[#D1D1D1]">
                  {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-5 py-2.5 rounded bg-[#1A1A1A] hover:bg-neutral-800 text-white font-mono text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm"
                    >
                      <ExternalLink size={12} />
                      <span>Live Deployment</span>
                    </a>
                  )}
                  {selectedProject.githubUrl && selectedProject.githubUrl !== '#' && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-5 py-2.5 rounded border border-[#D1D1D1] bg-white hover:bg-[#F5F5F5] text-[#1A1A1A] font-mono text-[10px] font-bold uppercase tracking-widest transition-all"
                    >
                      <Github size={12} />
                      <span>Source Repository</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
