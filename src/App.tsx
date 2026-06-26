import { useState, useEffect } from 'react';
import { initialPortfolioData } from './data';
import { PortfolioData } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import EducationCard from './components/EducationCard';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import EditorPanel from './components/EditorPanel';
import { motion, AnimatePresence } from 'motion/react';
import { Edit2, RefreshCw } from 'lucide-react';

const LOCAL_STORAGE_KEY = 'software_engineer_portfolio_data';

export default function App() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(initialPortfolioData);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from local storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        let updated = false;
        if (parsed.github === "https://github.com") {
          parsed.github = "https://github.com/settings/profile";
          updated = true;
        }
        if (parsed.linkedin === "https://linkedin.com") {
          parsed.linkedin = "https://www.linkedin.com/in/sundus-suleiman-5841b134b?utm_source=share_via&utm_content=profile&utm_medium=member_ios";
          updated = true;
        }
        setPortfolioData(parsed);
        if (updated) {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(parsed));
        }
      }
    } catch (e) {
      console.error('Failed to load portfolio data from localStorage', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save changes handler
  const handleSave = (updatedData: PortfolioData) => {
    setPortfolioData(updatedData);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedData));
    } catch (e) {
      console.error('Failed to save portfolio data to localStorage', e);
    }
  };

  // Reset handler
  const handleReset = () => {
    if (window.confirm('Are you sure you want to restore default portfolio details? All current changes will be overwritten.')) {
      setPortfolioData(initialPortfolioData);
      try {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      } catch (e) {
        console.error(e);
      }
    }
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#EAEAEA] flex flex-col items-center justify-center font-mono">
        <div className="w-8 h-8 rounded bg-white border border-[#D1D1D1] animate-spin flex items-center justify-center shadow-sm">
          <RefreshCw size={14} className="text-neutral-500" />
        </div>
        <span className="text-[10px] font-bold text-neutral-500 mt-4 tracking-widest uppercase">Initializing Canvas...</span>
      </div>
    );
  }

  return (
    <div className="relative bg-[#EAEAEA] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-white min-h-screen">
      {/* Scrollable container */}
      <Header
        name={portfolioData.name}
        onOpenEditor={() => setIsEditorOpen(true)}
        github={portfolioData.github}
        linkedin={portfolioData.linkedin}
        email={portfolioData.email}
      />

      {/* Main content Sections with staggered fade/slides */}
      <main className="relative">
        <Hero
          name={portfolioData.name}
          title={portfolioData.title}
          tagline={portfolioData.tagline}
          about={portfolioData.about}
          degreeName={portfolioData.education.degree}
        />
        
        <EducationCard education={portfolioData.education} />
        
        <Skills skills={portfolioData.skills} />
        
        <Projects projects={portfolioData.projects} />
        
        <Experience experiences={portfolioData.experiences} />
        
        <Contact
          email={portfolioData.email}
          phone={portfolioData.phone}
          github={portfolioData.github}
          linkedin={portfolioData.linkedin}
        />
      </main>

      {/* Footer */}
      <footer className="bg-[#F5F5F5] border-t border-[#D1D1D1] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-center sm:text-left">
            <span className="font-mono text-[10px] font-bold tracking-widest text-[#1A1A1A] uppercase">
              {portfolioData.name.toUpperCase()} • PORTFOLIO INDEX
            </span>
            <span className="text-[10px] text-neutral-400 font-mono mt-1">
              Engineered with modern typography & clean Motion layouts
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-mono text-neutral-500">
            <span>© 2026</span>
            <span className="h-3 w-[1px] bg-[#D1D1D1]" />
            <button
              onClick={() => setIsEditorOpen(true)}
              className="hover:text-[#1A1A1A] transition-colors flex items-center gap-1.5 cursor-pointer font-bold"
            >
              <Edit2 size={10} />
              Customize Content
            </button>
            <span className="h-3 w-[1px] bg-[#D1D1D1]" />
            <button
              onClick={handleReset}
              className="hover:text-red-500 transition-colors cursor-pointer font-bold"
            >
              Reset to Defaults
            </button>
          </div>
        </div>
      </footer>

      {/* Persistent floating edit action bottom right */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsEditorOpen(true)}
        className="fixed bottom-6 right-6 z-30 p-3 rounded bg-[#1A1A1A] hover:bg-neutral-800 text-white shadow-2xl flex items-center justify-center cursor-pointer border border-neutral-700"
        title="Customize your portfolio details"
      >
        <Edit2 size={16} />
      </motion.button>

      {/* Slideout customization modal */}
      <AnimatePresence>
        {isEditorOpen && (
          <EditorPanel
            isOpen={isEditorOpen}
            onClose={() => setIsEditorOpen(false)}
            data={portfolioData}
            onSave={handleSave}
            onReset={handleReset}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
