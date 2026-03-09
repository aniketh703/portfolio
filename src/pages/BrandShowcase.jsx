import React, { useState, useEffect } from 'react';
import { Layout, Palette, Type, Image as ImageIcon, MessageSquare, Grid3X3, Maximize2, MoveRight, Check, Ban, Copy, Briefcase, Award, GraduationCap, BookOpen } from 'lucide-react';
import GenerativeArt from '../components/GenerativeArt';
import Footer from '../components/Footer';
import CompanyLogo from '../components/CompanyLogo';
import Under25Winner from '../assets/images/projects/Under25_winner.png';

const SectionHeader = ({ title, icon }) => {
  const Icon = icon;
  return (
    <div className="mt-16 md:mt-24 mb-8 border-b border-stone-300 pb-6">
      <span className="font-sans text-xs font-semibold text-stone-500 uppercase tracking-widest block opacity-60 mb-2">Section</span>
      <div className="flex items-center gap-3">
        <Icon size={20} className="text-brand-orange opacity-70" />
                <h2 className="font-serif text-3xl md:text-5xl tracking-tight">{title}</h2>
      </div>
    </div>
  );
};

const menuItems = ['overview', 'logo', 'color', 'typography', 'imagery', 'voice', 'stationery', 'digital', 'experience', 'education', 'achievements', 'publications', 'honors', 'skills', 'utilities'];

const BrandShowcase = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState('overview');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).catch(err => console.error('Unable to copy', err));
  };

  useEffect(() => {
    document.title = "Brand System | Aniketh Vustepalle";
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -50% 0px' });

    menuItems.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
  
  const scrollTo = (id) => { 
    const element = document.getElementById(id); 
    if (element) { 
        element.scrollIntoView({ behavior: 'smooth' }); 
        setActiveSection(id); 
    } 
  };

  return (
    <div className="bg-stone-50 min-h-screen text-stone-900">
      <header className="page-container bg-stone-900 text-stone-50">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
            <span className="font-sans text-xs text-brand-orange uppercase tracking-widest mb-4 block font-semibold opacity-85">Internal Documentation</span>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif leading-none tracking-tighter mb-6 md:mb-8">BRAND <br/> SYSTEM</h1>
            <p className="max-w-2xl font-sans text-base leading-relaxed text-stone-300 opacity-70">The visual and verbal identity for Aniketh Vustepalle.</p>
        </div>
      </header>
    <div className="mx-auto mb-20 flex w-full max-w-7xl flex-col gap-6 px-4 md:flex-row md:gap-12 md:px-8">
        <aside data-lenis-prevent className="w-full md:w-64 bg-stone-100 md:border-r border-stone-200 md:h-screen md:sticky md:top-0 p-4 md:p-6 overflow-y-auto z-40 no-scrollbar rounded-lg md:rounded-r-lg">
            <span className="font-sans text-xs font-semibold text-stone-500 uppercase tracking-widest mb-6 block opacity-60">Contents</span>
            <ul className="grid grid-cols-2 gap-2 md:grid-cols-1 md:space-y-3 font-sans text-xs uppercase tracking-wide">
                {menuItems.map((item) => (
                    <li key={item}>
                        <button onClick={() => scrollTo(item)} className={`flex items-center gap-2 hover:text-brand-orange transition-all duration-300 py-2 touch-target ${activeSection === item ? 'text-brand-orange font-semibold' : 'text-stone-600 opacity-70'}`}>
                            {activeSection === item && <MoveRight size={10} />}
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
        <main className="flex-1 max-w-6xl">
          <section id="overview" className="pt-10 md:pt-20">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-500 mb-8 opacity-60">01 — Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h4 className="text-2xl font-serif mb-4">Mission & Vision</h4>
                    <p className="text-stone-600 leading-relaxed mb-6 opacity-85">To dismantle the barrier between functional utility and artistic expression.</p>
                    <h4 className="text-2xl font-serif mb-4">Core Values</h4>
                    <ul className="space-y-2 font-sans text-sm text-stone-600 opacity-85">
                        <li className="flex items-center gap-2"><Check size={14} className="text-brand-orange"/> Intentional Friction</li>
                        <li className="flex items-center gap-2"><Check size={14} className="text-brand-orange"/> Raw Authenticity</li>
                        <li className="flex items-center gap-2"><Check size={14} className="text-brand-orange"/> Typography First</li>
                    </ul>
                </div>
                <div className="bg-stone-100 border border-stone-200 p-8 flex items-center justify-center rounded-lg hover:shadow-md transition-all duration-300">
                                        <p className="font-serif text-2xl md:text-3xl italic text-center text-stone-800">"I design for the pause, not the scroll."</p>
                </div>
            </div>
          </section>
          <section id="logo">
            <SectionHeader title="Logo System" icon={Layout} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-stone-900 text-white p-8 md:p-12 flex items-center justify-center aspect-square">
                    <div className="text-center">
                        <span className="font-serif text-5xl md:text-6xl font-bold block">AV.24</span>
                        <span className="font-mono text-xs tracking-[0.5em] mt-2 block opacity-50">PORTFOLIO</span>
                    </div>
                </div>
                <div className="bg-white border border-stone-200 p-8 md:p-12 flex items-center justify-center aspect-square text-stone-900">
                    <div className="text-center">
                        <span className="font-serif text-5xl md:text-6xl font-bold block">AV.24</span>
                        <span className="font-mono text-xs tracking-[0.5em] mt-2 block opacity-50">PORTFOLIO</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="border border-green-500/30 bg-green-50 p-4 relative">
                    <div className="absolute top-2 left-2"><Check size={16} className="text-green-600"/></div>
                    <div className="h-24 flex items-center justify-center font-serif text-2xl">AV.24</div>
                    <p className="text-[10px] font-mono text-green-800 mt-2">Standard</p>
                </div>
                <div className="border border-red-500/30 bg-red-50 p-4 relative">
                    <div className="absolute top-2 left-2"><Ban size={16} className="text-red-600"/></div>
                    <div className="h-24 flex items-center justify-center font-serif text-2xl italic transform -rotate-12 text-stone-400">AV.24</div>
                    <p className="text-[10px] font-mono text-red-800 mt-2">No Rotate</p>
                </div>
                <div className="border border-red-500/30 bg-red-50 p-4 relative">
                    <div className="absolute top-2 left-2"><Ban size={16} className="text-red-600"/></div>
                    <div className="h-24 flex items-center justify-center font-serif text-2xl text-orange-500 drop-shadow-md">AV.24</div>
                    <p className="text-[10px] font-mono text-red-800 mt-2">No Shadow</p>
                </div>
                <div className="border border-red-500/30 bg-red-50 p-4 relative">
                    <div className="absolute top-2 left-2"><Ban size={16} className="text-red-600"/></div>
                    <div className="h-24 flex items-center justify-center font-serif text-2xl outline-text">AV.24</div>
                    <p className="text-[10px] font-mono text-red-800 mt-2">No Outline</p>
                </div>
            </div>
          </section>
          <section id="color">
            <SectionHeader title="Color Palette" icon={Palette} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group cursor-pointer" onClick={() => copyToClipboard('#FAFAF9')}>
                    <div className="h-40 bg-stone-50 border border-stone-200 flex items-end p-4 relative">
                        <Copy size={16} className="absolute top-4 right-4 opacity-0 group-hover:opacity-50"/>
                        <div><p className="font-bold">Off-White</p><p className="font-mono text-xs text-stone-400">#FAFAF9</p></div>
                    </div>
                </div>
                <div className="group cursor-pointer" onClick={() => copyToClipboard('#1C1917')}>
                    <div className="h-40 bg-stone-900 text-white flex items-end p-4 relative">
                        <Copy size={16} className="absolute top-4 right-4 opacity-0 group-hover:opacity-50"/>
                        <div><p className="font-bold">Charcoal</p><p className="font-mono text-xs text-stone-400">#1C1917</p></div>
                    </div>
                </div>
                <div className="group cursor-pointer" onClick={() => copyToClipboard('#FF4500')}>
                    <div className="h-40 bg-brand-orange text-white flex items-end p-4 relative">
                        <Copy size={16} className="absolute top-4 right-4 opacity-0 group-hover:opacity-50"/>
                        <div><p className="font-bold">Int. Orange</p><p className="font-mono text-xs text-white/70">#FF4500</p></div>
                    </div>
                </div>
            </div>
          </section>
          <section id="typography">
            <SectionHeader title="Typography" icon={Type} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div><span className="font-mono text-xs text-stone-400 mb-2 block">Primary Serif</span><h3 className="text-4xl md:text-6xl font-serif mb-4">Playfair Display</h3></div>
                                <div><span className="font-mono text-xs text-stone-400 mb-2 block">Secondary Mono</span><h3 className="text-3xl md:text-4xl font-mono mb-4">JetBrains Mono</h3></div>
            </div>
          </section>
          <section id="imagery">
            <SectionHeader title="Imagery" icon={ImageIcon} />
            <div className="h-64 bg-stone-200 relative flex items-center justify-center overflow-hidden group">
                <GenerativeArt id={5} color="#000" />
            </div>
          </section>
          <section id="voice">
            <SectionHeader title="Voice" icon={MessageSquare} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-stone-200 p-8">
                    <h4 className="font-serif text-2xl mb-6">Tone Guidelines</h4>
                    <p className="font-mono text-xs uppercase tracking-widest text-stone-400 mb-4">The Persona</p>
                    <p className="text-lg leading-relaxed text-stone-700 mb-6">My voice is <span className="font-bold text-stone-900">clinical yet poetic</span>. I speak with the precision of an engineer and the expression of an artist. I avoid corporate jargon in favor of direct, impactful statements.</p>
                    <div className="space-y-3 font-mono text-sm">
                        <p className="flex items-center gap-3"><Check size={14} className="text-green-600"/> Confident, not arrogant.</p>
                        <p className="flex items-center gap-3"><Check size={14} className="text-green-600"/> Brief, not abrupt.</p>
                        <p className="flex items-center gap-3"><Check size={14} className="text-green-600"/> Technical, not robotic.</p>
                    </div>
                </div>
                <div className="space-y-4">
                     <div className="bg-stone-50 border border-stone-200 p-6">
                        <p className="font-mono text-xs text-green-600 uppercase mb-2">Do This</p>
                        <p className="font-serif text-xl italic">"Form follows data."</p>
                     </div>
                     <div className="bg-stone-50 border border-stone-200 p-6 opacity-50">
                        <p className="font-mono text-xs text-red-600 uppercase mb-2">Not This</p>
                        <p className="font-serif text-xl italic">"I make things look pretty."</p>
                     </div>
                </div>
            </div>
          </section>
          <section id="stationery">
            <SectionHeader title="Stationery" icon={Grid3X3} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-stone-100 border border-stone-200 p-6 md:p-8 relative shadow-xl md:transform md:rotate-1 transition-transform md:hover:rotate-0">
                   <div className="absolute top-8 right-8 font-mono text-xs text-stone-400 tracking-widest">LETTERHEAD</div>
                   <div className="w-12 h-12 bg-stone-900 mb-12"></div>
                   <div className="space-y-4 max-w-[200px] opacity-20">
                      <div className="h-2 w-full bg-stone-900 rounded-full"></div>
                      <div className="h-2 w-3/4 bg-stone-900 rounded-full"></div>
                      <div className="h-2 w-full bg-stone-900 rounded-full"></div>
                   </div>
                         <div className="absolute bottom-4 md:bottom-8 left-6 md:left-8 font-mono text-[10px] text-stone-400">ANIKETH VUSTEPALLE — 2024</div>
                </div>
                <div className="space-y-4">
                    <div className="aspect-[3.5/2] bg-stone-900 text-white p-6 flex flex-col justify-between shadow-lg">
                        <span className="font-serif text-2xl font-bold">AV.24</span>
                        <div className="font-mono text-[10px] flex justify-between uppercase tracking-widest text-stone-400">
                            <span>UI Engineer</span>
                            <span>HYD, IN</span>
                        </div>
                    </div>
                    <div className="aspect-[3.5/2] bg-white border border-stone-200 p-6 flex items-center justify-center shadow-lg">
                        <div className="text-center">
                            <p className="font-mono text-xs mb-1">anikethvustepalle03@gmail.com</p>
                            <p className="font-mono text-xs text-stone-400">+91 9311761114</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>
          <section id="digital">
            <SectionHeader title="Digital System" icon={Maximize2} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                   <h4 className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-6">Interactive Elements</h4>
                   <div className="space-y-6">
                        <div className="flex gap-4 items-center">
                            <button className="px-8 py-3 bg-stone-900 text-white font-mono text-xs uppercase tracking-widest hover:bg-brand-orange transition-colors">Primary</button>
                            <span className="font-mono text-[10px] text-stone-400">Default Statement</span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <button className="px-8 py-3 bg-transparent border border-stone-900 text-stone-900 font-mono text-xs uppercase tracking-widest hover:bg-stone-100 transition-colors">Secondary</button>
                            <span className="font-mono text-[10px] text-stone-400">Ghost / Outline</span>
                        </div>
                        <div className="flex gap-4 items-center">
                             <a href="#" className="font-serif italic text-lg hover:text-orange-500 border-b border-stone-300 hover:border-orange-500 transition-all">Text Link Style</a>
                        </div>
                   </div>
                </div>
                <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-6">Form Components</h4>
                    <div className="space-y-4">
                        <div className="relative">
                            <input type="text" placeholder="Input Field" className="w-full bg-stone-100 border-b border-stone-300 p-3 font-mono text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-stone-400" />
                        </div>
                        <div className="flex items-center gap-3 p-3 border border-stone-200 bg-white">
                            <div className="w-4 h-4 border border-stone-300 bg-stone-100 flex items-center justify-center">
                                <div className="w-2 h-2 bg-brand-orange"></div>
                            </div>
                            <span className="font-mono text-xs text-stone-600 uppercase">Checkbox Active</span>
                        </div>
                    </div>
                </div>
            </div>
          </section>
          <section id="experience">
            <SectionHeader title="Experience" icon={Briefcase} />
            <div className="space-y-12 border-l border-stone-300 ml-2 md:ml-4 pl-5 md:pl-12">
                <div className="relative">
                    <span className="absolute -left-[1.45rem] md:-left-[3.65rem] top-2 w-3 md:w-4 h-3 md:h-4 bg-brand-orange rounded-full border-4 border-stone-50"></span>
                    <div className="flex items-center gap-3 mb-1">
                        <CompanyLogo domain="panterranetworks.com" name="PanTerra Networks" className="w-8 h-8 rounded border border-stone-200 bg-white object-contain p-1" />
                        <h4 className="font-serif text-2xl md:text-3xl">Associate - UI/UX Designer</h4>
                    </div>
                    <p className="font-mono text-xs text-stone-500 uppercase tracking-widest mt-1 mb-4">PanTerra Networks / Nov 2025 — Present</p>
                    <p className="text-stone-600 leading-relaxed max-w-2xl">Designing and Developing responsive interfaces and improving user experience across digital platforms. Collaborating with cross-functional teams to deliver user-centered solutions aligned with business goals. Specialized in high-fidelity UI design using React, Figma and Adobe XD.</p>
                </div>
                <div className="relative">
                    <span className="absolute -left-[1.45rem] md:-left-[3.65rem] top-2 w-3 md:w-4 h-3 md:h-4 bg-stone-900 rounded-full border-4 border-stone-50"></span>
                    <div className="flex items-center gap-3 mb-1">
                        <CompanyLogo domain="panterranetworks.com" name="PanTerra Networks" className="w-8 h-8 rounded border border-stone-200 bg-white object-contain p-1" />
                        <h4 className="font-serif text-2xl md:text-3xl">UX Designer Trainee</h4>
                    </div>
                    <p className="font-mono text-xs text-stone-500 uppercase tracking-widest mt-1 mb-4">PanTerra Networks / May 2025 — Nov 2025</p>
                    <p className="text-stone-600 leading-relaxed max-w-2xl">Focused on usability testing, design systems, and front-end handoff. Gained practical experience in bridging design concepts with technical implementation requirements.</p>
                </div>
                <div className="relative">
                    <span className="absolute -left-[1.45rem] md:-left-[3.65rem] top-2 w-3 md:w-4 h-3 md:h-4 bg-stone-400 rounded-full border-4 border-stone-50"></span>
                    <div className="flex items-center gap-3 mb-1">
                        <CompanyLogo domain="q-dits.com" name="Q-DITS" className="w-8 h-8 rounded border border-stone-200 bg-white object-contain p-1" />
                        <h4 className="font-serif text-2xl md:text-3xl">Data & Tools Intern</h4>
                    </div>
                    <p className="font-mono text-xs text-stone-500 uppercase tracking-widest mt-1 mb-4">Q-DITS / Sep 2024 — Dec 2024</p>
                    <p className="text-stone-600 leading-relaxed max-w-2xl">Redesigned the company website and collaborated with SEO teams to boost traffic. Developed GUIs for stock market data syncing, assisted with UI for S3 bucket projects, and automated PDF generation tools using Python.</p>
                </div>
                <div className="relative">
                    <span className="absolute -left-[1.45rem] md:-left-[3.65rem] top-2 w-3 md:w-4 h-3 md:h-4 bg-stone-300 rounded-full border-4 border-stone-50"></span>
                    <div className="flex items-center gap-3 mb-1">
                        <CompanyLogo domain="internpixel.com" name="InternPixel" className="w-8 h-8 rounded border border-stone-200 bg-white object-contain p-1" />
                        <h4 className="font-serif text-2xl md:text-3xl">UI/UX Designer Intern</h4>
                    </div>
                    <p className="font-mono text-xs text-stone-500 uppercase tracking-widest mt-1 mb-4">InternPixel / Feb 2024 — Mar 2024</p>
                    <p className="text-stone-600 leading-relaxed max-w-2xl">Collaborated with design and development teams to create visually appealing interfaces for web applications. Utilized Figma extensively for prototyping, ensuring alignment with user experience principles.</p>
                </div>
                <div className="relative">
                    <span className="absolute -left-[1.45rem] md:-left-[3.65rem] top-2 w-3 md:w-4 h-3 md:h-4 bg-stone-200 rounded-full border-4 border-stone-50"></span>
                    <div className="flex items-center gap-3 mb-1">
                        <CompanyLogo domain="bharatintern.live" name="Bharat Intern" className="w-8 h-8 rounded border border-stone-200 bg-white object-contain p-1" />
                        <h4 className="font-serif text-2xl md:text-3xl">Web Developer Intern</h4>
                    </div>
                    <p className="font-mono text-xs text-stone-500 uppercase tracking-widest mt-1 mb-4">Bharat Intern / Sep 2023 — Oct 2023</p>
                    <p className="text-stone-600 leading-relaxed max-w-2xl">Developed and maintained responsive web applications using HTML, CSS, and JavaScript. Successfully delivered 3 projects, participating in code reviews to enhance technical quality.</p>
                </div>
            </div>
          </section>
          <section id="education">
            <SectionHeader title="Education" icon={GraduationCap} />
            <div className="border border-stone-200 p-6 md:p-12 bg-white">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div>
                        <h3 className="font-serif text-3xl md:text-4xl mb-2">Bachelor of Engineering</h3>
                        <h4 className="font-serif text-xl text-stone-600 mb-2">Computer Science</h4>
                        <p className="font-mono text-xs text-stone-500 uppercase tracking-widest">Sri Chandrasekharendra Saraswathi Vishwa Mahavidyalaya</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <span className="font-mono text-xs text-stone-500 border border-stone-300 px-4 py-2 bg-stone-50">Dec 2020 — Jul 2024</span>
                    </div>
                </div>
                <div className="pt-6 border-t border-stone-200">
                    <p className="text-stone-600 leading-relaxed mb-4">Comprehensive program covering software engineering, data structures, algorithms, web development, cloud computing, and AI/ML fundamentals. Applied theoretical knowledge through multiple internships and real-world projects.</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        <span className="text-xs font-mono bg-stone-100 px-3 py-1 text-stone-600">Computer Science</span>
                        <span className="text-xs font-mono bg-stone-100 px-3 py-1 text-stone-600">Software Engineering</span>
                        <span className="text-xs font-mono bg-stone-100 px-3 py-1 text-stone-600">Web Development</span>
                        <span className="text-xs font-mono bg-stone-100 px-3 py-1 text-stone-600">AI/ML</span>
                    </div>
                </div>
            </div>
          </section>
          <section id="achievements">
            <SectionHeader title="Certifications" icon={Check} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* UX & Design */}
                <div className="border border-stone-200 p-6 md:p-8 bg-white group hover:border-orange-200 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                         <h4 className="font-serif text-2xl">Google UX Design</h4>
                         <span className="font-mono text-xs text-orange-500 border border-orange-200 px-2 py-1 bg-orange-50">Dec 2025</span>
                    </div>
                    <p className="font-mono text-xs text-stone-500 mb-4 uppercase tracking-widest">Professional Certificate — Google</p>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">Comprehensive mastery of the design process: Empathize, Define, Ideate, Prototype, and Test.</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] font-mono bg-stone-100 px-2 py-1 text-stone-600">Figma</span>
                        <span className="text-[10px] font-mono bg-stone-100 px-2 py-1 text-stone-600">Wireframing</span>
                        <span className="text-[10px] font-mono bg-stone-100 px-2 py-1 text-stone-600">User Research</span>
                    </div>
                </div>

                <div className="border border-stone-200 p-6 md:p-8 bg-white group hover:border-orange-200 transition-colors">
                   <div className="flex justify-between items-start mb-4">
                         <h4 className="font-serif text-2xl">LottieFiles for Figma</h4>
                         <span className="font-mono text-xs text-stone-400">Nov 2025</span>
                    </div>
                   <p className="font-mono text-xs text-stone-500 mb-4 uppercase tracking-widest">LottieFiles</p>
                   <p className="text-stone-600 text-sm leading-relaxed mb-4">Advanced motion design integration for UI/UX, focusing on visual storytelling and micro-interactions.</p>
                   <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] font-mono bg-stone-100 px-2 py-1 text-stone-600">Motion Design</span>
                        <span className="text-[10px] font-mono bg-stone-100 px-2 py-1 text-stone-600">UI Animation</span>
                    </div>
                </div>

                <div className="border border-stone-200 p-6 md:p-8 bg-white group hover:border-orange-200 transition-colors">
                   <div className="flex justify-between items-start mb-4">
                         <h4 className="font-serif text-2xl">Canva Essentials</h4>
                         <span className="font-mono text-xs text-stone-400">Nov 2025</span>
                    </div>
                   <p className="font-mono text-xs text-stone-500 mb-4 uppercase tracking-widest">Canva</p>
                   <p className="text-stone-600 text-sm leading-relaxed mb-4">Fundamental design principles and visual communication strategies.</p>
                </div>

                {/* Development & Cloud */}
                <div className="border border-stone-200 p-6 md:p-8 bg-white group hover:border-orange-200 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                         <h4 className="font-serif text-2xl">GitHub Foundations</h4>
                         <span className="font-mono text-xs text-stone-400">Feb 2025</span>
                    </div>
                   <p className="font-mono text-xs text-stone-500 mb-4 uppercase tracking-widest">GitHub</p>
                   <p className="text-stone-600 text-sm leading-relaxed mb-4">Expertise in CI/CD pipelines, DevOps practices, and collaborative workflow management.</p>
                   <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] font-mono bg-stone-100 px-2 py-1 text-stone-600">CI/CD</span>
                        <span className="text-[10px] font-mono bg-stone-100 px-2 py-1 text-stone-600">Git Actions</span>
                    </div>
                </div>

                <div className="border border-stone-200 p-6 md:p-8 bg-white group hover:border-orange-200 transition-colors">
                   <div className="flex justify-between items-start mb-4">
                         <h4 className="font-serif text-2xl">Software Engineering</h4>
                         <span className="font-mono text-xs text-stone-400">Jul 2024</span>
                    </div>
                   <p className="font-mono text-xs text-stone-500 mb-4 uppercase tracking-widest">J.P. Morgan Job Simulation</p>
                   <p className="text-stone-600 text-sm leading-relaxed mb-4">Practical application of React.js and Python in a corporate banking software environment.</p>
                   <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] font-mono bg-stone-100 px-2 py-1 text-stone-600">React</span>
                        <span className="text-[10px] font-mono bg-stone-100 px-2 py-1 text-stone-600">Python</span>
                    </div>
                </div>

                 <div className="border border-stone-200 p-8 bg-white group hover:border-orange-200 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                         <h4 className="font-serif text-2xl">Google Cloud Foundations</h4>
                         <span className="font-mono text-xs text-stone-400">Nov 2023</span>
                    </div>
                   <p className="font-mono text-xs text-stone-500 mb-4 uppercase tracking-widest">NPTEL</p>
                   <p className="text-stone-600 text-sm leading-relaxed mb-4">Core concepts of cloud infrastructure, big data, and machine learning integration.</p>
                </div>

                {/* Additional Technical Skills */}
                <div className="col-span-1 md:col-span-2 border border-stone-200 p-8 bg-stone-50">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         <div>
                            <h5 className="font-serif text-xl mb-2">HackerRank Certified</h5>
                            <ul className="space-y-1 font-mono text-xs text-stone-600">
                                <li>JavaScript (Basic) — Aug 2023</li>
                                <li>CSS — Aug 2023</li>
                            </ul>
                         </div>
                         <div>
                            <h5 className="font-serif text-xl mb-2">Aspiring Minds</h5>
                            <ul className="space-y-1 font-mono text-xs text-stone-600">
                                <li>Data Processing Specialist — Jan 2025</li>
                                <li>Software Dev Trainee — Jan 2025</li>
                            </ul>
                         </div>
                         <div>
                            <h5 className="font-serif text-xl mb-2">Other</h5>
                            <ul className="space-y-1 font-mono text-xs text-stone-600">
                                <li>Python Dev Assessment — MTF Institute</li>
                                <li>Foundations of PM — Google</li>
                            </ul>
                         </div>
                    </div>
                </div>
            </div>
          </section>

          <section id="publications">
            <SectionHeader title="Publications & Research" icon={BookOpen} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-stone-200 p-8 bg-white group hover:border-orange-200 transition-colors">
                    <div className="mb-4">
                        <h4 className="font-serif text-2xl mb-2">Telemedicine for India: A Health Care Revolution</h4>
                        <span className="font-mono text-xs text-stone-500 uppercase tracking-widest">Research Publication</span>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">Explored the transformative potential of telemedicine in addressing healthcare accessibility challenges across India. Analyzed digital health platforms, remote diagnostics, and patient engagement strategies.</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] font-mono bg-stone-100 px-2 py-1 text-stone-600">Healthcare Tech</span>
                        <span className="text-[10px] font-mono bg-stone-100 px-2 py-1 text-stone-600">Digital Health</span>
                        <span className="text-[10px] font-mono bg-stone-100 px-2 py-1 text-stone-600">UX Research</span>
                    </div>
                </div>

                <div className="border border-stone-200 p-8 bg-white group hover:border-orange-200 transition-colors">
                    <div className="mb-4">
                        <h4 className="font-serif text-2xl mb-2">The Future of AI: Transforming Tomorrow</h4>
                        <span className="font-mono text-xs text-stone-500 uppercase tracking-widest">Research Publication</span>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">Investigated emerging AI technologies and their societal impact. Examined AI-driven interfaces, machine learning applications, and ethical considerations in automated decision-making systems.</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] font-mono bg-stone-100 px-2 py-1 text-stone-600">Artificial Intelligence</span>
                        <span className="text-[10px] font-mono bg-stone-100 px-2 py-1 text-stone-600">ML Systems</span>
                        <span className="text-[10px] font-mono bg-stone-100 px-2 py-1 text-stone-600">Tech Ethics</span>
                    </div>
                </div>
            </div>
          </section>

          <section id="honors">
            <SectionHeader title="Honors & Awards" icon={Award} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                      <div className="order-2 md:order-1">
                          <h3 className="font-serif text-2xl md:text-3xl mb-2">Winner — ID Card Design</h3>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="font-mono text-xs uppercase tracking-widest text-orange-500">Under 25</span>
                        <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                        <span className="font-mono text-xs text-stone-400">Jan 2025</span>
                    </div>
                    <p className="text-stone-700 leading-relaxed mb-6">Awarded prize money for designing an engaging and visually appealing ID card for Under 25. The design incorporated UI/UX principles, typography, color theory, and visual hierarchy to create a bold, structured, and youthful identity card.</p>
                    <div className="p-4 bg-stone-50 border-l-2 border-orange-500">
                        <p className="font-serif italic text-stone-600">"Recognized innovation in graphic design and branding."</p>
                    </div>
                 </div>
                 <div className="order-1 md:order-2">
                    <div className="aspect-[4/3] bg-stone-100 w-full relative group overflow-hidden border border-stone-200">
                        <img 
                            src={Under25Winner} 
                            alt="Under 25 ID Card Design Winner" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-orange-500/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                 </div>
            </div>
          </section>

          <section id="skills">
            <SectionHeader title="Technical Capabilities" icon={Briefcase} />
            <div className="space-y-12">
                <div>
                   <h3 className="font-mono text-xs uppercase tracking-widest text-stone-400 mb-6 border-b border-stone-200 pb-2">01 — Design & User Experience</h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {['User Experience (UX)', 'User Interface Design', 'Interaction Design', 'Wireframing', 'Prototyping', 'User Research', 'User Flows', 'Inclusive Design', 'Visual Storytelling', 'Motion Design', 'Lottie Animation', 'Design Systems'].map(skill => (
                          <div key={skill} className="border border-stone-200 p-4 bg-white flex items-center justify-center text-center hover:border-orange-500 transition-colors">
                              <span className="font-serif italic">{skill}</span>
                          </div>
                      ))}
                   </div>
                </div>

                <div>
                   <h3 className="font-mono text-xs uppercase tracking-widest text-stone-400 mb-6 border-b border-stone-200 pb-2">02 — Engineering & Development</h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {['React.js', 'JavaScript (ES6+)', 'Python', 'HTML5 & CSS3', 'Tailwind CSS', 'Front-End Development', 'Django', 'Flask', 'Web Applications', 'Responsive Web Design', 'AngularJS', 'Bootstrap'].map(skill => (
                          <div key={skill} className="bg-stone-50 p-4 flex items-center justify-center text-center font-mono text-xs text-stone-600">
                              {skill}
                          </div>
                      ))}
                   </div>
                </div>

                <div>
                   <h3 className="font-mono text-xs uppercase tracking-widest text-stone-400 mb-6 border-b border-stone-200 pb-2">03 — Tools & Infrastructure</h3>
                   <div className="flex flex-wrap gap-2">
                       {['Figma', 'Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'VS Code', 'Git', 'GitHub Actions', 'CI/CD Pipelines', 'AWS Cloud', 'Docker', 'Postman', 'Microsoft Excel'].map(tool => (
                           <span key={tool} className="border border-stone-300 px-3 py-1 rounded-full text-xs font-mono bg-white text-stone-700 hover:bg-stone-900 hover:text-white transition-colors cursor-default">{tool}</span>
                       ))}
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-stone-200">
                   <div>
                       <h3 className="font-mono text-xs uppercase tracking-widest text-stone-400 mb-4">Data Quality</h3>
                       <p className="text-stone-600 text-sm leading-relaxed mb-4">Proficient in Data Analysis, Visualization, and ETL processes (Extract, Transform, Load). Experienced with SQL, PL/SQL, and Python-based data cleaning automation.</p>
                       <div className="flex gap-2">
                           <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                           <span className="font-mono text-[10px] uppercase">Data Certified</span>
                       </div>
                   </div>
                   <div>
                       <h3 className="font-mono text-xs uppercase tracking-widest text-stone-400 mb-4">Soft Skills</h3>
                       <div className="flex flex-wrap gap-x-6 gap-y-2 text-serif italic text-lg text-stone-800">
                           <span>Problem Solving</span>
                           <span>Analytical Thinking</span>
                           <span>Adaptability</span>
                           <span>Collaboration</span>
                           <span>Communication</span>
                       </div>
                   </div>
                </div>
            </div>
          </section>

          <section id="utilities">
            <SectionHeader title="Utilities" icon={Layout} />
            <div className="space-y-8">
                <div>
                    <h4 className="font-mono text-xs uppercase mb-4 text-stone-400">Dynamic Year</h4>
                    <div className="bg-stone-900 p-5 md:p-8 border-t border-stone-800">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 font-mono text-xs text-stone-500">
                            <p>© <span className="text-orange-500" data-current-year>{new Date().getFullYear()}</span> Aniketh Vustepalle</p>
                            <span>System Status: Online</span>
                        </div>
                    </div>
                </div>
            </div>
          </section>
        </main>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default BrandShowcase;
