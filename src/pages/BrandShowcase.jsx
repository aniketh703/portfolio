import React, { useState, useEffect } from 'react';
import { Layout, Palette, Type, Image as ImageIcon, MessageSquare, Grid3X3, Maximize2, MoveRight, Check, Ban, Copy } from 'lucide-react';
import GenerativeArt from '../components/GenerativeArt';
import Footer from '../components/Footer';

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

const menuItems = ['overview', 'logo', 'color', 'typography', 'imagery', 'voice', 'stationery', 'digital'];

const BrandShowcase = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState('overview');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).catch(() => {});
  };

  useEffect(() => {
    document.title = 'Brand System | Aniketh Vustepalle';
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -50% 0px' });

    menuItems.forEach((id) => {
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
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif leading-none tracking-tighter mb-6 md:mb-8">BRAND <br /> SYSTEM</h1>
          <p className="max-w-2xl font-sans text-base leading-relaxed text-stone-300 opacity-70 mb-6">The visual and verbal identity for Aniketh Vustepalle.</p>
          {onNavigate && (
            <button
              onClick={() => onNavigate('resume')}
              className="font-mono text-xs uppercase tracking-widest border border-stone-500 px-4 py-2 hover:border-brand-orange hover:text-brand-orange transition-colors duration-300"
            >
              View full resume -&gt;
            </button>
          )}
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
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-500 mb-8 opacity-60">01 - Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-serif mb-4">Mission & Vision</h4>
                <p className="text-stone-600 leading-relaxed mb-6 opacity-85">To dismantle the barrier between functional utility and artistic expression.</p>
                <h4 className="text-2xl font-serif mb-4">Core Values</h4>
                <ul className="space-y-2 font-sans text-sm text-stone-600 opacity-85">
                  <li className="flex items-center gap-2"><Check size={14} className="text-brand-orange" /> Intentional Friction</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-brand-orange" /> Raw Authenticity</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-brand-orange" /> Typography First</li>
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
                <div className="absolute top-2 left-2"><Check size={16} className="text-green-600" /></div>
                <div className="h-24 flex items-center justify-center font-serif text-2xl">AV.24</div>
                <p className="text-[10px] font-mono text-green-800 mt-2">Standard</p>
              </div>
              <div className="border border-red-500/30 bg-red-50 p-4 relative">
                <div className="absolute top-2 left-2"><Ban size={16} className="text-red-600" /></div>
                <div className="h-24 flex items-center justify-center font-serif text-2xl italic transform -rotate-12 text-stone-400">AV.24</div>
                <p className="text-[10px] font-mono text-red-800 mt-2">No Rotate</p>
              </div>
              <div className="border border-red-500/30 bg-red-50 p-4 relative">
                <div className="absolute top-2 left-2"><Ban size={16} className="text-red-600" /></div>
                <div className="h-24 flex items-center justify-center font-serif text-2xl text-orange-500 drop-shadow-md">AV.24</div>
                <p className="text-[10px] font-mono text-red-800 mt-2">No Shadow</p>
              </div>
              <div className="border border-red-500/30 bg-red-50 p-4 relative">
                <div className="absolute top-2 left-2"><Ban size={16} className="text-red-600" /></div>
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
                  <Copy size={16} className="absolute top-4 right-4 opacity-0 group-hover:opacity-50" />
                  <div><p className="font-bold">Off-White</p><p className="font-mono text-xs text-stone-400">#FAFAF9</p></div>
                </div>
              </div>
              <div className="group cursor-pointer" onClick={() => copyToClipboard('#1C1917')}>
                <div className="h-40 bg-stone-900 text-white flex items-end p-4 relative">
                  <Copy size={16} className="absolute top-4 right-4 opacity-0 group-hover:opacity-50" />
                  <div><p className="font-bold">Charcoal</p><p className="font-mono text-xs text-stone-400">#1C1917</p></div>
                </div>
              </div>
              <div className="group cursor-pointer" onClick={() => copyToClipboard('#FF4500')}>
                <div className="h-40 bg-brand-orange text-white flex items-end p-4 relative">
                  <Copy size={16} className="absolute top-4 right-4 opacity-0 group-hover:opacity-50" />
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
                <p className="text-lg leading-relaxed text-stone-700 mb-6">My voice is <span className="font-bold text-stone-900">clinical yet poetic</span>. I speak with the precision of an engineer and the expression of an artist.</p>
                <div className="space-y-3 font-mono text-sm">
                  <p className="flex items-center gap-3"><Check size={14} className="text-green-600" /> Confident, not arrogant.</p>
                  <p className="flex items-center gap-3"><Check size={14} className="text-green-600" /> Brief, not abrupt.</p>
                  <p className="flex items-center gap-3"><Check size={14} className="text-green-600" /> Technical, not robotic.</p>
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
                <div className="w-12 h-12 bg-stone-900 mb-12" />
                <div className="space-y-4 max-w-[200px] opacity-20">
                  <div className="h-2 w-full bg-stone-900 rounded-full" />
                  <div className="h-2 w-3/4 bg-stone-900 rounded-full" />
                  <div className="h-2 w-full bg-stone-900 rounded-full" />
                </div>
                <div className="absolute bottom-4 md:bottom-8 left-6 md:left-8 font-mono text-[10px] text-stone-400">ANIKETH VUSTEPALLE - 2024</div>
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
                      <div className="w-2 h-2 bg-brand-orange" />
                    </div>
                    <span className="font-mono text-xs text-stone-600 uppercase">Checkbox Active</span>
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
