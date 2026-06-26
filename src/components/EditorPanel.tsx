import { useState } from 'react';
import { motion } from 'motion/react';
import { X, Save, RotateCcw, User, GraduationCap, Code2, Briefcase, Plus, Trash2 } from 'lucide-react';
import { PortfolioData, Project, Experience, Education } from '../types';

interface EditorPanelProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onSave: (updatedData: PortfolioData) => void;
  onReset: () => void;
}

export default function EditorPanel({ isOpen, onClose, data, onSave, onReset }: EditorPanelProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'education' | 'projects' | 'experience'>('profile');
  const [editedData, setEditedData] = useState<PortfolioData>({ ...data });

  // Sync state if initial props change
  useState(() => {
    setEditedData({ ...data });
  });

  const handleChange = (field: keyof PortfolioData, value: any) => {
    setEditedData((prev) => ({ ...prev, [field]: value }));
  };

  const handleEducationChange = (field: keyof Education, value: any) => {
    setEditedData((prev) => ({
      ...prev,
      education: { ...prev.education, [field]: value }
    }));
  };

  const handleEducationHighlightChange = (index: number, value: string) => {
    const updatedHighlights = [...editedData.education.highlights];
    updatedHighlights[index] = value;
    handleEducationChange('highlights', updatedHighlights);
  };

  const addEducationHighlight = () => {
    handleEducationChange('highlights', [...editedData.education.highlights, '']);
  };

  const removeEducationHighlight = (index: number) => {
    const updatedHighlights = editedData.education.highlights.filter((_, idx) => idx !== index);
    handleEducationChange('highlights', updatedHighlights);
  };

  // Projects State Managers
  const handleProjectChange = (id: string, field: keyof Project, value: any) => {
    const updatedProjects = editedData.projects.map((proj) => {
      if (proj.id === id) {
        return { ...proj, [field]: value };
      }
      return proj;
    });
    handleChange('projects', updatedProjects);
  };

  const addProject = () => {
    const newProj: Project = {
      id: Date.now().toString(),
      title: "New Modern Project",
      description: "A short, engaging description for list items.",
      longDescription: "A deeper, detailed technical breakdown of achievements, architectural solutions, and outcomes.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      role: "Lead Software Engineer"
    };
    handleChange('projects', [...editedData.projects, newProj]);
  };

  const removeProject = (id: string) => {
    const updatedProjects = editedData.projects.filter((proj) => proj.id !== id);
    handleChange('projects', updatedProjects);
  };

  // Experience State Managers
  const handleExperienceChange = (id: string, field: keyof Experience, value: any) => {
    const updatedExps = editedData.experiences.map((exp) => {
      if (exp.id === id) {
        return { ...exp, [field]: value };
      }
      return exp;
    });
    handleChange('experiences', updatedExps);
  };

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      role: "Software Developer",
      company: "Innovate Tech",
      duration: "2026 - Present",
      location: "San Francisco, CA",
      description: ["Designed responsive views", "Created secure API endpoints"]
    };
    handleChange('experiences', [...editedData.experiences, newExp]);
  };

  const removeExperience = (id: string) => {
    const updatedExps = editedData.experiences.filter((exp) => exp.id !== id);
    handleChange('experiences', updatedExps);
  };

  const handleSaveAll = () => {
    onSave(editedData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div onClick={onClose} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Slideout Panel - Styled in clean minimalist white/grey */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative w-full max-w-2xl bg-white border-l border-[#D1D1D1] h-full shadow-2xl flex flex-col justify-between z-10 text-[#1A1A1A]"
      >
        {/* Header */}
        <div className="p-6 border-b border-[#D1D1D1] flex items-center justify-between bg-[#F5F5F5]">
          <div>
            <h3 className="text-xs font-bold text-[#1A1A1A] flex items-center gap-2 font-mono uppercase tracking-widest">
              <Code2 size={14} />
              Portfolio Parameters
            </h3>
            <p className="text-[10px] text-neutral-500 font-mono mt-1">
              Personalize every line. Changes save dynamically to your session.
            </p>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-full text-neutral-400 hover:text-[#1A1A1A] hover:bg-[#EAEAEA] transition-colors cursor-pointer">
            <X size={16} />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-[#D1D1D1] bg-[#F5F5F5] px-4 pt-2 gap-1 overflow-x-auto">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-1.5 px-3 py-2 text-[10px] font-mono font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'profile'
                ? 'border-[#1A1A1A] text-[#1A1A1A]'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            <User size={12} />
            Identity
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-1.5 px-3 py-2 text-[10px] font-mono font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'education'
                ? 'border-[#1A1A1A] text-[#1A1A1A]'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            <GraduationCap size={12} />
            Diploma
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center gap-1.5 px-3 py-2 text-[10px] font-mono font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'projects'
                ? 'border-[#1A1A1A] text-[#1A1A1A]'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            <Code2 size={12} />
            Projects
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-1.5 px-3 py-2 text-[10px] font-mono font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'experience'
                ? 'border-[#1A1A1A] text-[#1A1A1A]'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            <Briefcase size={12} />
            Experience
          </button>
        </div>

        {/* Form Body - Scrollable content area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#EAEAEA]/30">
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={editedData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="w-full px-3 py-2 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">Job Title</label>
                  <input
                    type="text"
                    value={editedData.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    className="w-full px-3 py-2 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono font-semibold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">Tagline Pitch</label>
                <input
                  type="text"
                  value={editedData.tagline}
                  onChange={(e) => handleChange('tagline', e.target.value)}
                  className="w-full px-3 py-2 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono font-semibold"
                />
              </div>

              <div>
                <label className="block text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">About Bio</label>
                <textarea
                  rows={4}
                  value={editedData.about}
                  onChange={(e) => handleChange('about', e.target.value)}
                  className="w-full px-3 py-2 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono resize-none font-light"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">Email</label>
                  <input
                    type="email"
                    value={editedData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full px-2.5 py-2 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">Phone</label>
                  <input
                    type="text"
                    value={editedData.phone || ''}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full px-2.5 py-2 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">GitHub Link</label>
                  <input
                    type="text"
                    value={editedData.github}
                    onChange={(e) => handleChange('github', e.target.value)}
                    className="w-full px-2.5 py-2 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">LinkedIn Link</label>
                  <input
                    type="text"
                    value={editedData.linkedin}
                    onChange={(e) => handleChange('linkedin', e.target.value)}
                    className="w-full px-2.5 py-2 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono font-semibold"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">Degree / Diploma</label>
                  <input
                    type="text"
                    value={editedData.education.degree}
                    onChange={(e) => handleEducationChange('degree', e.target.value)}
                    className="w-full px-3 py-2 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">Institution</label>
                  <input
                    type="text"
                    value={editedData.education.institution}
                    onChange={(e) => handleEducationChange('institution', e.target.value)}
                    className="w-full px-3 py-2 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono font-semibold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">Duration</label>
                  <input
                    type="text"
                    value={editedData.education.duration}
                    onChange={(e) => handleEducationChange('duration', e.target.value)}
                    className="w-full px-3 py-2 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">Grade / Achievements</label>
                  <input
                    type="text"
                    value={editedData.education.grade || ''}
                    onChange={(e) => handleEducationChange('grade', e.target.value)}
                    className="w-full px-3 py-2 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono font-semibold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">Diploma Overview</label>
                <textarea
                  rows={3}
                  value={editedData.education.description}
                  onChange={(e) => handleEducationChange('description', e.target.value)}
                  className="w-full px-3 py-2 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono resize-none font-light"
                />
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-400">Key Achievements</label>
                  <button
                    onClick={addEducationHighlight}
                    className="flex items-center gap-1 text-[10px] font-mono font-bold text-neutral-500 hover:text-[#1A1A1A] transition-colors cursor-pointer"
                  >
                    <Plus size={10} /> Add Item
                  </button>
                </div>
                {editedData.education.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={highlight}
                      onChange={(e) => handleEducationHighlightChange(index, e.target.value)}
                      className="flex-1 px-3 py-1.5 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono"
                    />
                    <button
                      onClick={() => removeEducationHighlight(index)}
                      className="p-1.5 text-neutral-400 hover:text-red-500 rounded transition-colors cursor-pointer"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono font-bold uppercase text-neutral-400">Project Collections</span>
                <button
                  onClick={addProject}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-[#1A1A1A] hover:bg-neutral-800 text-[10px] font-mono font-bold uppercase text-white tracking-wider transition-colors cursor-pointer"
                >
                  <Plus size={12} /> New Project
                </button>
              </div>

              {editedData.projects.map((proj) => (
                <div key={proj.id} className="p-4 rounded border border-[#D1D1D1] bg-white space-y-3 relative shadow-sm">
                  <button
                    onClick={() => removeProject(proj.id)}
                    className="absolute top-4 right-4 text-neutral-400 hover:text-red-500 transition-colors p-1 rounded cursor-pointer"
                    title="Remove Project"
                  >
                    <Trash2 size={14} />
                  </button>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] font-mono font-bold text-neutral-400 mb-1">Project Title</label>
                      <input
                        type="text"
                        value={proj.title}
                        onChange={(e) => handleProjectChange(proj.id, 'title', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-mono font-bold text-neutral-400 mb-1">Your Role</label>
                      <input
                        type="text"
                        value={proj.role || ''}
                        onChange={(e) => handleProjectChange(proj.id, 'role', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono font-semibold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] font-mono font-bold text-neutral-400 mb-1">Short Description</label>
                    <input
                      type="text"
                      value={proj.description}
                      onChange={(e) => handleProjectChange(proj.id, 'description', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-mono font-bold text-neutral-400 mb-1">Deep Details</label>
                    <textarea
                      rows={3}
                      value={proj.longDescription || ''}
                      onChange={(e) => handleProjectChange(proj.id, 'longDescription', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono resize-none font-light"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-mono font-bold text-neutral-400 mb-1">Technologies (comma-separated)</label>
                    <input
                      type="text"
                      value={proj.technologies.join(', ')}
                      onChange={(e) => handleProjectChange(proj.id, 'technologies', e.target.value.split(',').map((s) => s.trim()))}
                      className="w-full px-2.5 py-1.5 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono font-semibold"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono font-bold uppercase text-neutral-400">Experience History</span>
                <button
                  onClick={addExperience}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-[#1A1A1A] hover:bg-neutral-800 text-[10px] font-mono font-bold uppercase text-white tracking-wider transition-colors cursor-pointer"
                >
                  <Plus size={12} /> New Experience
                </button>
              </div>

              {editedData.experiences.map((exp) => (
                <div key={exp.id} className="p-4 rounded border border-[#D1D1D1] bg-white space-y-3 relative shadow-sm">
                  <button
                    onClick={() => removeExperience(exp.id)}
                    className="absolute top-4 right-4 text-neutral-400 hover:text-red-500 transition-colors p-1 rounded cursor-pointer"
                    title="Remove Experience"
                  >
                    <Trash2 size={14} />
                  </button>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] font-mono font-bold text-neutral-400 mb-1">Role Title</label>
                      <input
                        type="text"
                        value={exp.role}
                        onChange={(e) => handleExperienceChange(exp.id, 'role', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-mono font-bold text-neutral-400 mb-1">Company</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono font-semibold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] font-mono font-bold text-neutral-400 mb-1">Duration</label>
                      <input
                        type="text"
                        value={exp.duration}
                        onChange={(e) => handleExperienceChange(exp.id, 'duration', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-mono font-bold text-neutral-400 mb-1">Location</label>
                      <input
                        type="text"
                        value={exp.location}
                        onChange={(e) => handleExperienceChange(exp.id, 'location', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono font-semibold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] font-mono font-bold text-neutral-400 mb-1">Bullet Achievements (line-separated)</label>
                    <textarea
                      rows={3}
                      value={exp.description.join('\n')}
                      onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value.split('\n').filter((l) => l.trim()))}
                      className="w-full px-2.5 py-1.5 rounded bg-white border border-[#D1D1D1] text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-none font-mono resize-none font-light"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer controls */}
        <div className="p-6 border-t border-[#D1D1D1] bg-[#F5F5F5] flex items-center justify-between gap-3">
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded border border-[#D1D1D1] bg-white hover:bg-[#F5F5F5] text-neutral-500 hover:text-[#1A1A1A] text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
          >
            <RotateCcw size={12} />
            Reset Defaults
          </button>

          <button
            onClick={handleSaveAll}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 text-white text-[10px] font-mono font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
          >
            <Save size={12} />
            Apply Changes
          </button>
        </div>
      </motion.div>
    </div>
  );
}
