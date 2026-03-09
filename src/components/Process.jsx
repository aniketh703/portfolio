import React from 'react';
import { MessageSquare, Search, PenTool, Rocket } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            icon: <MessageSquare />,
            title: "Discovery",
            description: "Understanding your vision, goals, and audience through deep conversation."
        },
        {
            icon: <Search />,
            title: "Strategy",
            description: "Planning the roadmap, selecting technologies, and defining the architecture."
        },
        {
            icon: <PenTool />,
            title: "Design & Build",
            description: "Crafting the visual identity and implementing the solution with clean code."
        },
        {
            icon: <Rocket />,
            title: "Launch",
            description: "Testing, optimizing, and deploying your project to the world."
        }
    ];

    return (
        <section className="mx-auto my-10 md:my-12 flex w-full max-w-7xl flex-col gap-6 bg-stone-900 px-4 py-14 md:py-20 text-stone-50 rounded-xl md:gap-12 md:px-8">
             <div className="flex justify-between items-end mb-10 md:mb-12 border-b border-stone-700 pb-6">
                <div>
                    <span className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-400 opacity-70 block mb-2">Methodology</span>
                    <h2 className="font-serif text-3xl md:text-5xl tracking-tight">Process</h2>
                </div>
                <span className="font-sans text-xs uppercase tracking-widest text-stone-500 opacity-60 hidden sm:block">How I work</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="relative pt-8 group">
                        <span className="absolute top-0 left-0 text-6xl md:text-7xl font-serif opacity-10 font-bold select-none">{index + 1}</span>
                        <div className="mb-4 text-stone-400 group-hover:text-brand-orange transition-colors duration-300 relative z-10 w-8 h-8">
                            {React.cloneElement(step.icon, { className: "w-full h-full" })}
                        </div>
                        <h3 className="font-serif text-xl md:text-2xl mb-2 relative z-10">{step.title}</h3>
                        <p className="font-sans text-sm text-stone-400 leading-relaxed relative z-10 opacity-85">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Process;
