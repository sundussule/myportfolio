import { PortfolioData } from './types';

export const initialPortfolioData: PortfolioData = {
  name: "Sundus Suleiman Rashid",
  title: "Software Engineer & Creative Developer",
  tagline: "Driven by a lifelong curiosity for technology to craft beautiful, functional, and highly optimized digital architectures.",
  about: "I am a 20-year-old software engineering student currently pursuing my credentials at Zetech University. My path in technology began with a simple fascination: I was always deeply intrigued by how computers worked and spent countless hours playing with my laptop. Today, I translate that playful curiosity into elegant code, designing secure, performant, and user-friendly web solutions that solve real-world problems.",
  email: "sundussuleiman83@gmail.com",
  phone: "+254118304952",
  github: "https://github.com/settings/profile",
  linkedin: "https://www.linkedin.com/in/sundus-suleiman-5841b134b?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  resumeUrl: "#",
  education: {
    degree: "Diploma in Software Engineering",
    institution: "Zetech University",
    duration: "2024 - 2026 (Expected)",
    grade: "Track: First Class Honors",
    description: "Rigorous academic curriculum with a strong focus on practical software development, architectural design, database systems, and modern web application development. Active member of the university's Tech Innovation Club.",
    highlights: [
      "Expected Graduation: December 2026",
      "Specializing in Cloud Computing & Full-Stack Systems Design",
      "Consistently recognized for top performance in Advanced Web Programming and Database Engineering"
    ]
  },
  skills: [
    {
      category: "Frontend Development",
      items: ["React.js", "TypeScript", "Tailwind CSS", "Motion Animations", "HTML5 & CSS3", "Responsive UI Design"]
    },
    {
      category: "Backend & Systems",
      items: ["Node.js", "Express", "REST APIs", "SQL & Databases", "System Architecture", "Application Logic"]
    },
    {
      category: "Tools & Clouds",
      items: ["Vite / Webpack", "Git & GitHub", "Cloud Run", "Docker Basics", "Linux Shell", "Server Deployment"]
    },
    {
      category: "Personal & Creative",
      items: ["Problem Solving", "UI/UX Empathy", "Creative Ideation", "Technical Writing", "Continuous Learning", "Rapid Prototyping"]
    }
  ],
  projects: [
    {
      id: "Effor",
      title: "Effor E-Commerce Storefront",
      description: "A modern, responsive e-commerce web application featuring item filtering and cart management.",
      longDescription: "Effor is a sleek e-commerce storefront designed for seamless browsing and online shopping. Built with React and Express, it provides real-time product filtering and secure dynamic routing.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Express", "Prisma", "TSQL"],
      liveUrl: "https://effor-v2.vercel.app",
      githubUrl: "https://github.com/sundussule/EfforV2.git",
      role: "Lead Software Architect"
    },
    {
      id: "Bringo",
      title: "Bringo On-Demand Delivery Marketplace",
      description: "An interactive multi-category marketplace for local food, grocery, health, and courier delivery services.",
      longDescription: "Bringo is an on-demand local delivery application that connects users with nearby restaurants, supermarkets, pharmacies, and express couriers through localized search, category filtering, and order tracking.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      liveUrl: "https://bringo-ruby.vercel.app",
      githubUrl: "https://github.com/sundussule/Bringo.git",
      role: "Solo Creator"
    },
   {
      id: "Sattva",
      title: "Sattva Web Application",
      description: "A responsive web application built with modern frontend technologies and clean architectural patterns.",
      longDescription: "Sattva is a modern web application built using React, TypeScript, and Vite. It features a fully responsive layout using Tailwind CSS, structured type safety, and optimized build pipeline integration.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      liveUrl: "https://sattva-alpha.vercel.app",
      githubUrl: "https://github.com/sundussule/Sattva.git",
      role: "Solo Creator"
    },
  ],
  experiences: [
    {
      id: "1",
      role: "Student Software Engineer",
      company: "Zetech University Tech Labs",
      duration: "2024 - Present",
      location: "Nairobi, Kenya",
      description: [
        "Led a team of fellow students to design and code localized responsive web solutions, reducing navigation complexity by 30%.",
        "Configured deployment environments utilizing cloud pipelines and modern container services like Cloud Run.",
        "Integrated client-side state controls, introducing smooth, performant animation frameworks for better interactive feel."
      ]
    },
    {
      id: "2",
      role: "Peer Coding Facilitator",
      company: "Zetech Innovation Club",
      duration: "2023 - 2024",
      location: "Nairobi, Kenya",
      description: [
        "Mentored over 40+ first-year students in web development fundamentals, object-oriented concepts, and Git workflow.",
        "Created custom training sandboxes and interactive responsive playgrounds to fast-track hands-on coding skills.",
        "Co-organized university hackathons, facilitating team formation and project evaluation frameworks."
      ]
    }
  ]
};
