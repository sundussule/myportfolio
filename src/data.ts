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
    degree: "Bachelor of Science in Software Engineering",
    institution: "Zetech University",
    duration: "2022 - 2026 (Expected)",
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
      id: "sundus-peace",
      title: "Sundus Peace Platform",
      description: "An elegant, interactive web portal hosted on Cloud Run, designed to provide a serene space for mindful digital engagement.",
      longDescription: "The Sundus Peace Platform is a fully responsive web application engineered to demonstrate modern layout techniques, seamless client-side state synchronization, and containerized deployment pipelines. It features micro-interactions and smooth transitions, representing a sanctuary-like digital canvas for modern users.",
      technologies: ["React", "Tailwind CSS", "Motion", "Cloud Run", "Node.js"],
      liveUrl: "https://sundus-peace-72867870240.europe-west3.run.app/",
      githubUrl: "#",
      role: "Lead Software Architect"
    },
    {
      id: "laptop-sandbox",
      title: "Device Control & Terminal",
      description: "A fun, keyboard-driven interactive CLI simulation playing homage to my early days of playing with laptops.",
      longDescription: "This interactive web shell mimics classic operating system prompts, allowing users to run simulated system diagnostics, explore mock storage directories, and run memory checks. Built with pure custom state machines to handle nesting command histories.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Custom State Engines", "Shell Scripting"],
      liveUrl: "#",
      githubUrl: "#",
      role: "Solo Creator"
    },
    {
      id: "zetech-navigator",
      title: "Academic Path Optimizer",
      description: "A student-centric scheduling helper that simplifies module planning, grades estimation, and credit tracking.",
      longDescription: "Designed to address student planning challenges at Zetech University, this tool implements a custom sorting algorithm that maps out prerequisite courses and optimizes graduation paths based on student semester availability and grade goals.",
      technologies: ["JavaScript", "HTML5 Canvas", "Tailwind CSS", "Algorithmic Sorting"],
      liveUrl: "#",
      githubUrl: "#",
      role: "Full-Stack Contributor"
    }
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
