export interface Education {
  degree: string;
  institution: string;
  duration: string;
  grade?: string;
  description: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  role?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  about: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  resumeUrl?: string;
  education: Education;
  skills: {
    category: string;
    items: string[];
  }[];
  projects: Project[];
  experiences: Experience[];
}
