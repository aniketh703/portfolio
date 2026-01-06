import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Layout, Palette, Type, Image as ImageIcon, MessageSquare, Grid3X3, Maximize2, MoveRight, Check, Ban, Copy, X } from 'lucide-react';
import GenerativeArt from '../components/GenerativeArt';

const BrandShowcase = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const copyToClipboard = (text) => { 
    navigator.clipboard.writeText(text).catch(err => console.error('Unable to copy', err));
  };

  const SectionHeader = ({ title, icon: Icon }) => (
    <div className="flex items-center gap-3 mb-8 border-b border-stone-300 pb-4 mt-24">
      <Icon size={20} className="text-orange-500" />
      <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
    </div>
  );

  const menuItems = ['overview', 'logo', 'color', 'typography', 'imagery', 'voice', 'stationery', 'digital', 'utilities'];
  
  const scrollTo = (id) => { 
    const element = document.getElementById(id); 
    if (element) { 
        element.scrollIntoView({ behavior: 'smooth' }); 
        setActiveSection(id); 
    } 
  };

  return (
    <div className="bg-stone-50 min-h-screen text-stone-900 pb-32">
      <header className="pt-40 pb-20 px-4 md:px-12 bg-stone-900 text-stone-50">
        <div className="max-w-[90vw] container">
            <span className="font-mono text-xs text-orange-500 uppercase tracking-widest mb-4 block">Internal Documentation</span>
            <h1 className="text-6xl md:text-9xl font-serif leading-none tracking-tighter mb-8">BRAND <br/> SYSTEM</h1>
            <p className="max-w-2xl font-mono text-sm leading-relaxed text-stone-400 uppercase tracking-wide">The visual and verbal identity for Aniketh Vustepalle.</p>
        </div>
      </header>
      <div className="flex flex-col md:flex-row container">
        <aside className="w-full md:w-64 bg-stone-100 border-r border-stone-200 md:h-screen md:sticky md:top-0 p-6 overflow-y-auto z-40 no-scrollbar">
            <span className="font-mono text-xs text-stone-400 uppercase tracking-widest mb-6 block">Contents</span>
            <ul className="space-y-3 font-mono text-xs uppercase tracking-wide">
                {menuItems.map((item) => (
                    <li key={item}>
                        <button onClick={() => scrollTo(item)} className={`flex items-center gap-2 hover:text-orange-500 transition-colors duration-200 ${activeSection === item ? 'text-orange-500 font-bold' : 'text-stone-600'}`}>
                            {activeSection === item && <MoveRight size={10} />}
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
        <main className="flex-1 px-4 md:px-16 max-w-6xl">
          <section id="overview" className="pt-20">
            <h3 className="font-mono text-xs uppercase tracking-widest text-stone-400 mb-4">01 — Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h4 className="text-2xl font-serif mb-4">Mission & Vision</h4>
                    <p className="text-stone-600 leading-relaxed mb-6">To dismantle the barrier between functional utility and artistic expression.</p>
                    <h4 className="text-2xl font-serif mb-4">Core Values</h4>
                    <ul className="space-y-2 font-mono text-sm text-stone-600">
                        <li className="flex items-center gap-2"><Check size={14} className="text-orange-500"/> Intentional Friction</li>
                        <li className="flex items-center gap-2"><Check size={14} className="text-orange-500"/> Raw Authenticity</li>
                        <li className="flex items-center gap-2"><Check size={14} className="text-orange-500"/> Typography First</li>
                    </ul>
                </div>
                <div className="bg-stone-200 p-8 flex items-center justify-center">
                    <p className="font-serif text-3xl italic text-center">"We design for the pause, not the scroll."</p>
                </div>
            </div>
          </section>
          <section id="logo">
            <SectionHeader title="Logo System" icon={Layout} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-stone-900 text-white p-12 flex items-center justify-center aspect-square">
                    <div className="text-center">
                        <span className="font-serif text-6xl font-bold block">AV.24</span>
                        <span className="font-mono text-xs tracking-[0.5em] mt-2 block opacity-50">PORTFOLIO</span>
                    </div>
                </div>
                <div className="bg-white border border-stone-200 p-12 flex items-center justify-center aspect-square text-stone-900">
                    <div className="text-center">
                        <span className="font-serif text-6xl font-bold block">AV.24</span>
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
                    <div className="h-40 bg-orange-600 text-white flex items-end p-4 relative">
                        <Copy size={16} className="absolute top-4 right-4 opacity-0 group-hover:opacity-50"/>
                        <div><p className="font-bold">Int. Orange</p><p className="font-mono text-xs text-white/70">#FF4500</p></div>
                    </div>
                </div>
            </div>
          </section>
          <section id="typography">
            <SectionHeader title="Typography" icon={Type} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div><span className="font-mono text-xs text-stone-400 mb-2 block">Primary Serif</span><h3 className="text-6xl font-serif mb-4">Times Now</h3></div>
                <div><span className="font-mono text-xs text-stone-400 mb-2 block">Secondary Mono</span><h3 className="text-4xl font-mono mb-4">JetBrains Mono</h3></div>
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
            <div className="bg-white border border-stone-200 p-6"><h4 className="font-serif text-xl mb-4">We Are:</h4></div>
          </section>
          <section id="stationery">
            <SectionHeader title="Stationery" icon={Grid3X3} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="aspect-[3.5/2] bg-stone-900 text-white p-4">AV.24</div>
            </div>
          </section>
          <section id="digital">
            <SectionHeader title="Digital" icon={Maximize2} />
            <div className="flex gap-4"><button className="px-6 py-3 bg-stone-900 text-white font-mono text-xs uppercase">Primary</button></div>
          </section>
          <section id="utilities">
            <SectionHeader title="Utilities" icon={Layout} />
            <div className="space-y-8">
                <div>
                    <h4 className="font-mono text-xs uppercase mb-4 text-stone-400">Dynamic Year</h4>
                    <div className="bg-stone-900 p-8 border-t border-stone-800">
                        <div className="flex justify-between items-center font-mono text-xs text-stone-500">
                            <p>© <span className="text-orange-500" data-current-year>{new Date().getFullYear()}</span> Aniketh Vustepalle</p>
                            <span>System Status: Online</span>
                        </div>
                    </div>
                </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default BrandShowcase;
