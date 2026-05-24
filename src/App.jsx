import React, { useState, useRef, useEffect } from 'react';
import { 
  User, GraduationCap, Phone, Mail, MapPin, MessageSquare, 
  Send, Sun, Moon, CheckCircle2, Play, Info, ArrowRight,
  Sparkles, Award, Cpu, Star, ExternalLink, Globe, RotateCcw,
  BookOpen, Terminal, Check
} from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [activeProjectTab, setActiveProjectTab] = useState('all');
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: "Hi there! I am Laiba's virtual AI assistant. Ask me anything about her skills, experience, or how to hire her!" }
  ]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const initialBoard = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
  ];
  const [board, setBoard] = useState(initialBoard);
  const [selectedCell, setSelectedCell] = useState(null);
  const [chessTurn, setChessTurn] = useState('White');
  const [moveHistory, setMoveHistory] = useState([]);
  const chatEndRef = useRef(null);

  const personalInfo = {
    name: "Laiba Nadeem",
    title: "Front-End Developer",
    email: "laibanadeem1218my@gmail.com",
    phone: "0321-4158767",
    location: "Punjab Society, Lahore, Pakistan",
    about: "Passionate Front-End Developer experienced in designing highly responsive and interactive websites using HTML5, CSS3, Tailwind CSS, Bootstrap, JavaScript, and React.js. Skilled in implementing modern state management, debugging, and leveraging AI-powered tools to optimize workflow and deliver premium user experiences.",
    education: [
      { degree: "FSc (Pre-Medical)", institution: "Govt. College Lahore", duration: "2019 - 2021" },
      { degree: "Matric (Science)", institution: "Private School", duration: "2017 - 2019" }
    ],
    experience: [
      {
        role: "Front-End Developer (Junior)",
        company: "Corvit Systems",
        duration: "6 Months Experience",
        highlights: [
          "Worked as a junior front-end developer designing high-fidelity user interfaces.",
          "Created responsive, mobile-first web designs using HTML5, CSS3, JavaScript, and Bootstrap.",
          "Built interactive, high-performance user interfaces with React.js and managed dynamic states using Hooks (useState, useEffect).",
          "Engineered reusable components to streamline rendering and improve codebase modularity.",
          "Debugged complex visual and functional bugs to elevate browser compatibility and application speed.",
          "Collaborated closely with design frameworks to implement precise fluid layout parameters."
        ]
      }
    ],
    skills: [
      { name: "React.js", category: "frontend", level: 90 },
      { name: "JavaScript", category: "frontend", level: 85 },
      { name: "HTML5 / CSS3", category: "frontend", level: 95 },
      { name: "Tailwind CSS", category: "design", level: 90 },
      { name: "Bootstrap", category: "design", level: 95 },
      { name: "DOM Manipulation", category: "frontend", level: 85 },
      { name: "Git & GitHub", category: "tools", level: 80 },
      { name: "Responsive Web Design", category: "design", level: 95 },
      { name: "Debugging & QA", category: "tools", level: 85 },
      { name: "AI Web Tools Integration", category: "tools", level: 88 },
      { name: "UI/UX Foundations", category: "design", level: 80 }
    ],
    projects: [
      {
        title: "TaskApp Checklist Manager",
        desc: "A premium checklist and task prioritization productivity application featuring dynamic state filtering, item organization, and reactive workflow optimization.",
        tech: ["React.js", "Tailwind CSS", "Task Automation", "State Management"],
        link: "https://taskapp-2chl.vercel.app",
        category: "react"
      },
      {
        title: "Fancy Counter Tool",
        desc: "An elegant interactive numeric value tracking workspace built with visual status indicator limits, custom trigger resets, and sleek micro-interactions.",
        tech: ["React.js", "CSS Animations", "UX Design", "Interactive State"],
        link: "https://fancycounter-tau.vercel.app",
        category: "tools"
      },
      {
        title: "TrekBag Travel Assistant",
        desc: "A luxury luggage checking and itinerary packing assistant. Built to solve live item-counting state, custom checklists, and client-side data persistence.",
        tech: ["React.js", "Tailwind CSS", "State Management", "LocalStorage"],
        link: "https://trek-bag-sand.vercel.app/",
        category: "react"
      },
      {
        title: "Interactive Periodic Chemical Table",
        desc: "An educational interactive Periodic Table elements grid. Users can click elements to view properties, utilizing structured JSON data grids.",
        tech: ["React.js", "Tailwind CSS", "Interactive State", "UX Design"],
        link: "https://periodictable-chi.vercel.app/",
        category: "tools"
      },
      {
        title: "Word Analytics Dashboard",
        desc: "Real-time copywriting and text analysis engine. Counts words, characters, paragraph limits, and social media constraints in real-time.",
        tech: ["JavaScript", "CSS3", "DOM Architecture", "Live RegEx"],
        link: "https://word-analytics-snowy.vercel.app",
        category: "tools"
      },
      {
        title: "AI Interactive Agency Portal",
        desc: "Futuristic digital services portal showcasing modern layout principles, interactive service cards, and rich CSS gradient graphics.",
        tech: ["React.js", "Tailwind CSS", "Framer Effects", "Modern UI"],
        link: "https://ai-website-murex-two.vercel.app",
        category: "react"
      },
      {
        title: "Modern Office Solutions Portal",
        desc: "Premium corporate design system layout showing office dynamics, team frameworks, service pipelines, and client grids.",
        tech: ["React.js", "Tailwind CSS", "Responsive Design", "Components"],
        link: "https://office-project-website.vercel.app",
        category: "design"
      },
      {
        title: "Nature & Eco-Tourism Guide",
        desc: "Responsive layout showcasing natural landscapes, tour pricing tiers, client testimonials, and booking queries.",
        tech: ["HTML5", "CSS3 Animations", "Bootstrap Layouts", "Mobile First"],
        link: "https://nature-travel-rose.vercel.app",
        category: "design"
      },
      {
        title: "Ice Cream Delight Parlor",
        desc: "Sweet dessert customized platform featuring interactive product displays, smooth hover feedback, and colorful thematic components.",
        tech: ["HTML5", "CSS3", "Bootstrap Grid", "Hover Effects"],
        link: "https://ice-cream-website-puce.vercel.app",
        category: "design"
      },
      {
        title: "React Space Hub (React9)",
        desc: "Complex state mechanism module showcasing API simulation, nested component render tracking, and structured CSS themes.",
        tech: ["React.js", "State Architecture", "Custom Hooks"],
        link: "https://react9-ebon.vercel.app",
        category: "react"
      },
      {
        title: "Creative Landing Showcase (Project 4)",
        desc: "High-performance modular React block layout featuring customized icons, smooth layout cards, and form hooks.",
        tech: ["React.js", "Tailwind CSS", "Component Modularity"],
        link: "https://reactproject4-eta.vercel.app",
        category: "react"
      }
    ]
  };

  const getBotResponse = (input) => {
    const text = input.toLowerCase();
    if (text.includes('hi') || text.includes('hello') || text.includes('hey')) {
      return "Hello! Hope you are having a wonderful day. I can share details about Laiba's technical projects, experience at Corvit, or contact details. What would you like to know?";
    }
    if (text.includes('skills') || text.includes('tech') || text.includes('languages') || text.includes('code')) {
      return "Laiba is highly proficient in React.js, JavaScript, Tailwind CSS, Bootstrap, and HTML5/CSS3. She also incorporates AI-powered design tools to accelerate development speed and clean layout structures.";
    }
    if (text.includes('experience') || text.includes('work') || text.includes('corvit') || text.includes('job')) {
      return "Laiba completed 6 months of hands-on experience as a Junior Front-End Developer at Corvit Systems, where she worked extensively on dynamic React.js state mechanisms and cross-device interface rendering.";
    }
    if (text.includes('project') || text.includes('chess') || text.includes('game') || text.includes('vercel') || text.includes('links') || text.includes('taskapp') || text.includes('counter')) {
      return "Laiba has multiple impressive projects hosted on Vercel, including TaskApp Checklist Manager, Fancy Counter Tool, TrekBag, an Interactive Periodic Table, Word Analytics Dashboard, and several responsive landing pages. You can browse them below!";
    }
    if (text.includes('contact') || text.includes('email') || text.includes('phone') || text.includes('hire')) {
      return `You can reach Laiba directly via email at ${personalInfo.email} or call her at ${personalInfo.phone}. She is currently open to front-end and React roles!`;
    }
    if (text.includes('education') || text.includes('degree') || text.includes('college')) {
      return "Laiba completed her FSc (Pre-Medical) at Govt. College Lahore and matriculated with a Science background, building a strong analytical foundation for software engineering.";
    }
    return "That's an interesting question! Laiba is passionate about building solid responsive designs, writing reusable React blocks, and collaborating on production teams. Feel free to contact her directly via the form below!";
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = { sender: 'user', text: chatInput };
    setChatMessages(prev => [...prev, userMsg]);
    setChatInput('');

    setTimeout(() => {
      const botReply = { sender: 'bot', text: getBotResponse(chatInput) };
      setChatMessages(prev => [...prev, botReply]);
    }, 700);
  };

  const handleSuggestionClick = (phrase) => {
    const userMsg = { sender: 'user', text: phrase };
    setChatMessages(prev => [...prev, userMsg]);
    setTimeout(() => {
      const botReply = { sender: 'bot', text: getBotResponse(phrase) };
      setChatMessages(prev => [...prev, botReply]);
    }, 600);
  };

  const handleCellClick = (row, col) => {
    if (selectedCell) {
      const [selRow, selCol] = selectedCell;
      const piece = board[selRow][selCol];
      
      if (selRow === row && selCol === col) {
        setSelectedCell(null);
        return;
      }

      const newBoard = board.map(r => [...r]);
      newBoard[row][col] = piece;
      newBoard[selRow][selCol] = '';
      setBoard(newBoard);

      const colLabels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      const rowLabels = ['8', '7', '6', '5', '4', '3', '2', '1'];
      const moveStr = `${piece} ${colLabels[selCol]}${rowLabels[selRow]} → ${colLabels[col]}${rowLabels[row]}`;
      setMoveHistory(prev => [moveStr, ...prev.slice(0, 7)]);

      setChessTurn(chessTurn === 'White' ? 'Black' : 'White');
      setSelectedCell(null);
    } else {
      if (board[row][col] !== '') {
        setSelectedCell([row, col]);
      }
    }
  };

  const resetChessGame = () => {
    setBoard(initialBoard);
    setSelectedCell(null);
    setChessTurn('White');
    setMoveHistory([]);
  };

  const filteredSkills = activeTab === 'all' 
    ? personalInfo.skills 
    : personalInfo.skills.filter(s => s.category === activeTab);

  const filteredProjects = activeProjectTab === 'all'
    ? personalInfo.projects
    : personalInfo.projects.filter(p => p.category === activeProjectTab);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50/50 text-slate-800'}`}>
      
      {}
      <header className={`sticky top-0 z-50 backdrop-blur-xl border-b ${darkMode ? 'bg-slate-950/80 border-slate-900' : 'bg-white/80 border-slate-200'} transition-all`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 flex items-center justify-center text-white font-extrabold tracking-wider text-xl shadow-lg shadow-blue-500/20 animate-pulse">
              LN
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight block">Laiba Nadeem</span>
              <span className="text-xs text-cyan-400 font-semibold block -mt-1">Web Developer Portfolio</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#bot" className="hover:text-cyan-400 transition-colors">AI Assistant</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className={`p-2 rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-cyan-400 hover:border-cyan-500/30' : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-700 hover:border-blue-500/30'} transition-all`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm py-2 px-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all flex items-center gap-1 hover:scale-105 active:scale-95"
            >
              Hire Me <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </header>

      {}
      <section className="relative overflow-hidden pt-12 pb-24 px-4 sm:px-6">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-cyan-500/10 rounded-full blur-[80px]"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-blue-500/10 text-cyan-400 border border-cyan-500/20">
              <Sparkles size={12} className="animate-spin" /> Available for Remote & On-Site Roles
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">{personalInfo.name}</span>
            </h1>
            <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Expert Front-End Developer
            </p>
            <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'} max-w-xl mx-auto lg:mx-0`}>
              Specializing in building flawless custom React.js platforms, smooth CSS designs, responsive layouts, and incorporating intuitive state control architectures.
            </p>

            {/* Premium Metric Badges */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 pt-2">
              <div className={`p-3 rounded-2xl border transition-all hover:scale-105 ${darkMode ? 'bg-slate-900/50 border-slate-800 hover:border-blue-500/30 shadow-md shadow-blue-500/5' : 'bg-white border-slate-200 hover:shadow-lg hover:border-blue-500/20'} text-center`}>
                <span className="text-2xl font-black bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent block">11+</span>
                <span className="text-xs text-slate-400 uppercase font-bold">Live Projects</span>
              </div>
              <div className={`p-3 rounded-2xl border transition-all hover:scale-105 ${darkMode ? 'bg-slate-900/50 border-slate-800 hover:border-indigo-500/30 shadow-md shadow-indigo-500/5' : 'bg-white border-slate-200 hover:shadow-lg hover:border-indigo-500/20'} text-center`}>
                <span className="text-2xl font-black bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent block">11+</span>
                <span className="text-xs text-slate-400 uppercase font-bold">Skills Mastered</span>
              </div>
              <div className={`p-3 rounded-2xl border transition-all hover:scale-105 ${darkMode ? 'bg-slate-900/50 border-slate-800 hover:border-cyan-500/30 shadow-md shadow-cyan-500/5' : 'bg-white border-slate-200 hover:shadow-lg hover:border-cyan-500/20'} text-center`}>
                <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent block">100%</span>
                <span className="text-xs text-slate-400 uppercase font-bold">Responsive Layout</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="#projects" 
                className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg shadow-blue-500/20 transition-all text-center flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                <Play size={16} /> View Vercel Projects
              </a>
              <a 
                href="#bot" 
                className={`py-3 px-6 rounded-2xl font-semibold border text-center transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 ${darkMode ? 'bg-slate-900 border-slate-800 hover:bg-slate-850 hover:border-blue-500/30 text-cyan-400' : 'bg-white border-slate-300 hover:bg-slate-100 hover:border-blue-400/50 text-blue-600'}`}
              >
                <MessageSquare size={16} /> Chat with Laiba-Bot
              </a>
            </div>
          </div>

          {}
          <div className="lg:col-span-5">
            <div className={`p-6 sm:p-8 rounded-3xl border shadow-2xl relative overflow-hidden transition-all duration-300 hover:scale-[1.02] ${darkMode ? 'bg-slate-900/70 border-blue-500/20 shadow-blue-500/5' : 'bg-white border-blue-100 shadow-blue-100/40'}`}>
              <div className="absolute top-0 right-0 h-28 w-28 bg-gradient-to-bl from-cyan-500/15 to-transparent rounded-bl-full pointer-events-none animate-pulse"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-400 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-md shadow-cyan-500/25">
                  LN
                </div>
                <div>
                  <h3 className="font-bold text-lg">{personalInfo.name}</h3>
                  <p className="text-xs text-cyan-400 font-semibold">{personalInfo.title}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <div className="h-8 w-8 rounded-lg bg-blue-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail size={16} />
                  </div>
                  <div className="truncate">
                    <span className="text-xs text-slate-400 block">Email Address</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold hover:text-cyan-400 transition-colors truncate block">{personalInfo.email}</a>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="h-8 w-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Phone Connection</span>
                    <span className="text-sm font-semibold">{personalInfo.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="h-8 w-8 rounded-lg bg-indigo-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Location</span>
                    <span className="text-sm font-semibold">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1"><Award size={12} className="text-cyan-400" /> Corvit Verified</span>
                <span className="text-cyan-400 font-medium">Active React Developer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="about" className={`py-20 px-4 sm:px-6 border-t ${darkMode ? 'bg-slate-900/40 border-slate-900' : 'bg-slate-100/60 border-slate-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-black tracking-tight">About Me</h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-600 rounded-full mx-auto shadow-md shadow-blue-500/30"></div>
            <p className="text-slate-400 pt-2 text-sm sm:text-base">Get to know Laiba's background, journey, and technical goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
            <div className={`md:col-span-7 p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:border-blue-500/30 ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200 shadow-md'}`}>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-cyan-400">
                  <User size={12} /> Professional Summary
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Front-End Engineer & UI Builder</h3>
                <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {personalInfo.about}
                </p>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  I design user journeys that are highly responsive. Driven by clean, semantic structures, I specialize in crafting UI components in React that look beautiful and work correctly across all device screens.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-850">
                <div>
                  <h4 className="font-bold text-cyan-400 text-sm">Design Focus</h4>
                  <p className="text-xs text-slate-400 mt-1">Responsive layouts, elegant animations, clean structures.</p>
                </div>
                <div>
                  <h4 className="font-bold text-indigo-400 text-sm">Technical Philosophy</h4>
                  <p className="text-xs text-slate-400 mt-1">Modular reusable code, fast rendering, state safety.</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col gap-6">
              <div className={`p-6 rounded-3xl border flex-1 transition-all duration-300 hover:border-cyan-500/30 ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200 shadow-md'}`}>
                <div className="flex items-center gap-2 mb-6">
                  <GraduationCap className="text-cyan-400" size={20} />
                  <h3 className="font-black text-lg">Education History</h3>
                </div>

                <div className="space-y-6">
                  {personalInfo.education.map((edu, idx) => (
                    <div key={idx} className="relative pl-5 border-l-2 border-blue-500/30 last:border-0 pb-1">
                      <div className="absolute left-[-5px] top-1 h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
                      <span className="text-xs font-semibold text-cyan-400 block">{edu.duration}</span>
                      <h4 className="font-bold text-sm sm:text-base">{edu.degree}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{edu.institution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="skills" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-3xl font-black tracking-tight">Core Competencies</h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-600 rounded-full mx-auto shadow-md shadow-blue-500/30"></div>
            <p className="text-slate-400 pt-2 text-sm sm:text-base">Filterable skills categorizing Laiba's technical competencies.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['all', 'frontend', 'design', 'tools'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold capitalize transition-all ${
                  activeTab === tab 
                    ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/30 scale-105' 
                    : darkMode 
                      ? 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white' 
                      : 'bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {tab === 'all' ? 'All Skills' : tab}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <div 
                key={index} 
                className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  darkMode 
                    ? 'bg-slate-900/60 border-slate-800 hover:bg-slate-900 hover:border-blue-500/30 shadow-md hover:shadow-cyan-500/5' 
                    : 'bg-white border-slate-200 hover:shadow-lg hover:border-blue-500/25'
                }`}
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md shadow-cyan-500/50 animate-pulse"></div>
                    <span className="font-bold text-sm sm:text-base">{skill.name}</span>
                  </div>
                  <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md">{skill.level}%</span>
                </div>
                {/* Glowing Progress bar background with colorful accent fill */}
                <div className={`h-2.5 w-full rounded-full overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 rounded-full transition-all duration-1000 ease-out shadow-inner" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="experience" className={`py-20 px-4 sm:px-6 border-t ${darkMode ? 'bg-slate-900/40 border-slate-900' : 'bg-slate-100/60 border-slate-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-black tracking-tight">Work Experience</h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-600 rounded-full mx-auto shadow-md shadow-blue-500/30"></div>
            <p className="text-slate-400 pt-2 text-sm sm:text-base">Laiba's industrial experience designing active interfaces.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {personalInfo.experience.map((exp, index) => (
              <div 
                key={index} 
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:border-blue-500/30 ${
                  darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200 shadow-lg'
                }`}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-slate-800/80">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-450 to-indigo-600 flex items-center justify-center text-white text-xl font-black shadow-md shadow-blue-500/20">
                      C
                    </div>
                    <div>
                      <h3 className="font-black text-lg sm:text-xl">{exp.role}</h3>
                      <p className="text-sm font-semibold text-cyan-400">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <span className="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">{exp.duration}</span>
                    <span className="text-xs text-slate-400 mt-1">Lahore, Pakistan</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-slate-400 uppercase tracking-wider">Key Accomplishments & Scope:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exp.highlights.map((bullet, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm">
                        <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="projects" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-black tracking-tight">Technical Projects</h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-600 rounded-full mx-auto shadow-md shadow-blue-500/30"></div>
            <p className="text-slate-400 pt-2 text-sm sm:text-base">Explore my interactive React Sandbox game and live deployed professional Vercel projects.</p>
          </div>

          {/* Chess Game Sandbox */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
            
            {/* Project description card */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className={`p-6 sm:p-8 rounded-3xl border h-full flex flex-col justify-between transition-all duration-300 hover:border-blue-500/20 ${darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-md'}`}>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-cyan-400 mb-4">
                    <Star size={12} className="text-cyan-400" /> Live Interactive Sandbox
                  </div>
                  <h3 className="text-2xl font-black mb-3 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">React Chess Engine Demo</h3>
                  <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    An interactive, freeform virtual Chess Board programmed purely inside React. This showcases advanced 2D-matrix array manipulation, click selection events, state resetting cycles, and real-time movement action tracking.
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex gap-2 text-xs">
                      <span className="font-bold text-cyan-400 shrink-0">Current Turn:</span>
                      <span className="font-semibold">{chessTurn}</span>
                    </div>
                    <div className="flex gap-2 text-xs">
                      <span className="font-bold text-cyan-400 shrink-0">Controls:</span>
                      <span className="text-slate-400">Click piece to select (turns blue), click empty square to move!</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className={`p-4 rounded-xl border text-xs ${darkMode ? 'bg-slate-950 border-slate-850' : 'bg-slate-100/80 border-slate-200'}`}>
                    <span className="font-bold text-slate-400 block mb-2">Move History (Recent 7)</span>
                    {moveHistory.length === 0 ? (
                      <span className="text-slate-500 italic">No moves logged yet. Make a move!</span>
                    ) : (
                      <div className="grid grid-cols-2 gap-2 max-h-24 overflow-y-auto">
                        {moveHistory.map((mov, i) => (
                          <div key={i} className="flex items-center gap-1 text-[11px] font-mono">
                            <span className="text-cyan-400 font-bold">#{moveHistory.length - i}:</span>
                            <span className="opacity-90">{mov}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button 
                    onClick={resetChessGame}
                    className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-md shadow-blue-500/10 hover:scale-[1.02]"
                  >
                    <RotateCcw size={14} /> Reset Sandbox Board
                  </button>
                </div>
              </div>
            </div>

            {/* Chessboard grid styled beautifully as a glass neon chess board */}
            <div className="lg:col-span-7 flex items-center justify-center">
              <div className={`p-6 rounded-3xl border flex flex-col items-center justify-center w-full max-w-md transition-all hover:border-cyan-500/20 ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}>
                <div className="grid grid-cols-8 gap-1 w-full aspect-square border-4 border-slate-850 rounded-2xl overflow-hidden bg-slate-850 shadow-2xl relative">
                  {board.map((row, rIdx) => 
                    row.map((cell, cIdx) => {
                      const isDark = (rIdx + cIdx) % 2 === 1;
                      const isSelected = selectedCell && selectedCell[0] === rIdx && selectedCell[1] === cIdx;
                      
                      let bgClass = "";
                      if (isSelected) {
                        bgClass = "bg-cyan-500 text-slate-950 animate-pulse shadow-inner border-2 border-white scale-[0.98]";
                      } else if (isDark) {
                        bgClass = darkMode ? "bg-slate-800/90 hover:bg-slate-700 text-slate-100" : "bg-slate-400 hover:bg-slate-300 text-slate-900";
                      } else {
                        bgClass = darkMode ? "bg-slate-900/90 hover:bg-slate-800 text-slate-350" : "bg-slate-100 hover:bg-slate-200 text-slate-800";
                      }

                      return (
                        <button
                          key={`${rIdx}-${cIdx}`}
                          onClick={() => handleCellClick(rIdx, cIdx)}
                          className={`${bgClass} flex items-center justify-center text-xl sm:text-2xl font-bold transition-all relative outline-none focus:ring-1 focus:ring-cyan-500`}
                        >
                          <span className="select-none transform hover:scale-110 active:scale-90 transition-transform">{cell}</span>
                        </button>
                      );
                    })
                  )}
                </div>
                <div className="flex justify-between w-full mt-3 text-[10px] text-slate-500 font-mono px-1">
                  <span>Interactive Engine: React state matrix</span>
                  <span>Active Live Sandbox</span>
                </div>
              </div>
            </div>

          </div>

          {}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['all', 'react', 'design', 'tools'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveProjectTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold capitalize transition-all ${
                  activeProjectTab === tab 
                    ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white shadow-md shadow-blue-500/25 scale-105' 
                    : darkMode 
                      ? 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white' 
                      : 'bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {tab === 'all' ? 'All Deployments' : tab}
              </button>
            ))}
          </div>

          {/* Deployed Vercel Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <div 
                key={idx} 
                className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  darkMode 
                    ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/30 hover:shadow-cyan-500/5' 
                    : 'bg-white border-slate-200 hover:border-blue-500/20 hover:shadow-blue-500/10'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white text-lg shadow-sm shadow-blue-500/20">
                      <Terminal size={18} />
                    </span>
                    <span className="text-[10px] font-bold tracking-wider uppercase bg-cyan-500/10 text-cyan-400 px-2.5 py-1 rounded-md">
                      {project.category}
                    </span>
                  </div>

                  <h4 className="font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                  <p className={`text-xs leading-relaxed mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {project.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((techItem, tIdx) => (
                      <span key={tIdx} className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${darkMode ? 'bg-slate-800/80 text-slate-300' : 'bg-slate-100 text-slate-750'}`}>
                        {techItem}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 text-cyan-400 font-bold py-2 px-4 rounded-xl text-xs transition-all border border-blue-500/15"
                  >
                    Open Live Deployment <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="bot" className={`py-20 px-4 sm:px-6 border-t ${darkMode ? 'bg-slate-900/40 border-slate-900' : 'bg-slate-100/60 border-slate-200'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-3xl font-black tracking-tight flex items-center justify-center gap-2">
              <Cpu className="text-cyan-400 animate-pulse" size={28} /> AI Chatbot Assistant
            </h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-600 rounded-full mx-auto shadow-md shadow-blue-500/30"></div>
            <p className="text-slate-400 pt-2 text-sm">Ask my autonomous agent questions regarding my availability, stacks, or work highlights.</p>
          </div>

          <div className={`rounded-3xl border overflow-hidden shadow-2xl transition-all duration-300 hover:border-cyan-500/20 ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
            {/* Bot Header with online pulsing icon indicator */}
            <div className={`p-4 border-b flex items-center justify-between ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-600 flex items-center justify-center text-white">
                    <Cpu size={18} />
                  </div>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-slate-950 animate-ping"></span>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-slate-950"></span>
                </div>
                <div>
                  <span className="font-bold text-sm block">Laiba's AI Assistant</span>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-0.5">Online & Active</span>
                </div>
              </div>
              <span className="text-[10px] font-mono opacity-60">React Powered</span>
            </div>

            {/* Chat message logs */}
            <div className="h-96 overflow-y-auto p-4 sm:p-6 space-y-4">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] sm:max-w-[70%] rounded-2xl p-4 text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white rounded-br-none shadow-md shadow-blue-500/15' 
                      : darkMode
                        ? 'bg-slate-900 text-slate-100 rounded-bl-none border border-slate-800'
                        : 'bg-slate-100 text-slate-800 rounded-bl-none'
                  }`}>
                    <p className="leading-relaxed text-xs sm:text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef}></div>
            </div>

            {/* Starter Suggestion Chips */}
            <div className="p-4 border-t border-slate-800/60 flex flex-wrap gap-2 justify-center bg-slate-900/10">
              <button 
                onClick={() => handleSuggestionClick("What skills do you have?")}
                className="text-[10px] font-semibold bg-blue-500/10 hover:bg-blue-500/20 text-cyan-400 px-3 py-1 rounded-full transition-all border border-blue-500/15"
              >
                💡 Core Skills
              </button>
              <button 
                onClick={() => handleSuggestionClick("Tell me about your Corvit work experience.")}
                className="text-[10px] font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full transition-all border border-cyan-500/15"
              >
                💼 Work Experience
              </button>
              <button 
                onClick={() => handleSuggestionClick("How can I hire or contact you?")}
                className="text-[10px] font-semibold bg-indigo-500/10 hover:bg-indigo-500/20 text-cyan-400 px-3 py-1 rounded-full transition-all border border-indigo-500/15"
              >
                📬 Direct Contact
              </button>
            </div>

            {/* Input Form Panel */}
            <form onSubmit={handleSendMessage} className={`p-4 border-t flex items-center gap-2 ${darkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <input
                type="text"
                placeholder="Ask me something..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                className={`flex-1 text-sm rounded-xl px-4 py-3 outline-none transition-all ${
                  darkMode 
                    ? 'bg-slate-900 border border-slate-800 focus:border-cyan-500 text-white focus:ring-1 focus:ring-cyan-500/50' 
                    : 'bg-white border border-slate-200 focus:border-blue-500 text-slate-800 focus:ring-1 focus:ring-blue-500/50'
                }`}
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white p-3 rounded-xl shadow-lg transition-all shrink-0 hover:scale-105"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {}
      <section id="contact" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-black tracking-tight">Contact Portal</h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-600 rounded-full mx-auto shadow-md shadow-blue-500/30"></div>
            <p className="text-slate-400 pt-2 text-sm sm:text-base">Drop a line to partner up on software development services.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left side details card styled nicely */}
            <div className="lg:col-span-5 space-y-6">
              <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:border-blue-500/20 ${darkMode ? 'bg-slate-900/40 border-slate-800 shadow-md' : 'bg-white border-slate-200 shadow-lg'}`}>
                <h3 className="font-bold text-xl mb-3">Let's discuss your next project</h3>
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Whether you need a full-scale reactive platform built with React, modular elements engineered, or high-fidelity fluid web screens styled with Tailwind, I'm ready to collaborate.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="h-9 w-9 rounded-lg bg-blue-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                      <Mail size={16} />
                    </span>
                    <div className="truncate">
                      <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Direct Mail</span>
                      <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold hover:text-cyan-400 block truncate transition-colors">{personalInfo.email}</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="h-9 w-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                      <Phone size={16} />
                    </span>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Direct Hotline</span>
                      <span className="text-sm font-semibold">{personalInfo.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="h-9 w-9 rounded-lg bg-indigo-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                      <MapPin size={16} />
                    </span>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Base Location</span>
                      <span className="text-sm font-semibold">{personalInfo.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side interactive message form with dynamic states */}
            <div className="lg:col-span-7">
              <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:border-cyan-500/20 ${darkMode ? 'bg-slate-900/40 border-slate-800 shadow-md' : 'bg-white border-slate-200 shadow-lg'}`}>
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="h-16 w-16 rounded-full bg-cyan-500/15 text-cyan-400 flex items-center justify-center mx-auto text-3xl">
                      <Check size={28} />
                    </div>
                    <h3 className="text-xl font-bold">Message Dispatched Successfully!</h3>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto">Thank you for reaching out. I will read your message and respond via email within 24 business hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-slate-400 block mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        className={`w-full text-sm rounded-xl px-4 py-3 outline-none transition-all ${
                          darkMode 
                            ? 'bg-slate-950 border border-slate-800 focus:border-cyan-500 text-white focus:ring-1 focus:ring-cyan-500/50' 
                            : 'bg-slate-50 border border-slate-200 focus:border-blue-500 text-slate-800 focus:ring-1 focus:ring-blue-500/50'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-400 block mb-1">Your Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                        className={`w-full text-sm rounded-xl px-4 py-3 outline-none transition-all ${
                          darkMode 
                            ? 'bg-slate-950 border border-slate-800 focus:border-cyan-500 text-white focus:ring-1 focus:ring-cyan-500/50' 
                            : 'bg-slate-50 border border-slate-200 focus:border-blue-500 text-slate-800 focus:ring-1 focus:ring-blue-500/50'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-400 block mb-1">Inquiry Message</label>
                      <textarea
                        rows="4"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="How can I help you?"
                        className={`w-full text-sm rounded-xl px-4 py-3 outline-none transition-all resize-none ${
                          darkMode 
                            ? 'bg-slate-950 border border-slate-800 focus:border-cyan-500 text-white focus:ring-1 focus:ring-cyan-500/50' 
                            : 'bg-slate-50 border border-slate-200 focus:border-blue-500 text-slate-800 focus:ring-1 focus:ring-blue-500/50'
                        }`}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all text-center flex items-center justify-center gap-2 hover:scale-[1.02]"
                    >
                      Send Message <Send size={14} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <footer className={`py-12 border-t ${darkMode ? 'bg-slate-950 border-slate-900 text-slate-400' : 'bg-white border-slate-200 text-slate-600'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
              LN
            </div>
            <span className="font-bold text-sm tracking-tight text-cyan-400">Laiba Nadeem</span>
          </div>

          <p className="text-xs text-center md:text-left">
            &copy; 2026 Laiba Nadeem. All rights reserved. Deployed via Vercel.
          </p>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a href="#about" className="hover:text-cyan-400 transition-all">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-all">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-all">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-all">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}