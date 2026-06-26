import { motion } from 'motion/react';
import { Menu, X, Code, Edit2, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  name: string;
  onOpenEditor: () => void;
  github: string;
  linkedin: string;
  email: string;
}

export default function Header({ name, onOpenEditor, github, linkedin, email }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-40 bg-[#EAEAEA]/85 backdrop-blur-md border-b border-[#D1D1D1]"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#about" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 18, scale: 1.1 }}
            className="w-8 h-8 rounded bg-white border border-[#D1D1D1] flex items-center justify-center text-[#1A1A1A] shadow-sm"
          >
            <Code size={14} />
          </motion.div>
          <span className="font-mono text-xs tracking-widest text-[#1A1A1A] group-hover:text-neutral-600 transition-colors font-semibold">
            {name.split(' ')[0].toUpperCase()}.DEV
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-500 hover:text-[#1A1A1A] transition-colors relative group py-2"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#1A1A1A] transition-all group-hover:w-full" />
            </a>
          ))}
          
          <div className="h-4 w-[1px] bg-[#D1D1D1]" />

          {/* Socials & Edit Toggle */}
          <div className="flex items-center gap-4">
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-[#1A1A1A] transition-colors">
              <Github size={15} />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-[#1A1A1A] transition-colors">
              <Linkedin size={15} />
            </a>
            <button
              onClick={onOpenEditor}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white border border-[#D1D1D1] hover:border-[#1A1A1A] text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A] transition-all hover:scale-105 active:scale-95 cursor-pointer font-bold shadow-sm"
            >
              <Edit2 size={10} />
              <span>Customize</span>
            </button>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onOpenEditor}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-white border border-[#D1D1D1] text-[10px] font-mono font-semibold uppercase tracking-wider text-[#1A1A1A]"
          >
            <Edit2 size={10} />
            <span>Edit</span>
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#1A1A1A] hover:opacity-70 p-1"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t border-[#D1D1D1] bg-[#EAEAEA] py-4 px-6 flex flex-col gap-4 shadow-lg"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 hover:text-[#1A1A1A] py-1 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="h-[1px] bg-[#D1D1D1] my-1" />
          <div className="flex items-center gap-4 py-1">
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-[#1A1A1A]">
              <Github size={18} />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-[#1A1A1A]">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${email}`} className="text-neutral-500 hover:text-[#1A1A1A]">
              <Mail size={18} />
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
