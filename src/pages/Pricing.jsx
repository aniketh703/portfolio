import React, { useEffect } from 'react';
import { ArrowUpRight, Check, X, Tag, FileCode, Smartphone, Rocket, Shield, Clock } from 'lucide-react';
import Footer from '../components/Footer';

const Pricing = ({ onNavigate }) => {
  useEffect(() => {
    document.title = "Packages & Pricing | Aniketh Vustepalle";
  }, []);

  const websitePackages = [
    {
      name: "BASIC",
      price: "₹8,000",
      description: "Perfect for personal portfolios and small businesses.",
      features: [
        "3–4 pages (Home, About, Services, Contact)",
        "Simple Figma design",
        "Responsive HTML/CSS/JS",
        "Basic contact form",
        "1 revision round",
        "7–10 days delivery"
      ],
      recommended: false
    },
    {
      name: "STANDARD",
      price: "₹12,000",
      description: "Ideal for startups and growing businesses.",
      features: [
        "5–6 pages with better visuals",
        "Figma design + basic components",
        "Fully responsive design",
        "Light animations",
        "Contact form + basic SEO",
        "2 revision rounds",
        "10–14 days delivery"
      ],
      recommended: true
    },
    {
      name: "PREMIUM",
      price: "₹15,000",
      description: "For established businesses needing scale.",
      features: [
        "7–8 pages with advanced design",
        "Complete design system & style guide",
        "Advanced animations & interactions",
        "SEO + Google Analytics setup",
        "Backend form integration",
        "3 revision rounds",
        "14–18 days delivery"
      ],
      recommended: false
    }
  ];

  const designOnly = [
    { name: "Basic Design", price: "₹4,000", features: ["Up to 4 pages in Figma", "Simple layouts & colors", "1 revision round", "Organized file delivery"] },
    { name: "Standard Design", price: "₹6,000", features: ["Up to 6 pages in Figma", "Component library included", "Style guide documentation", "2 revision rounds"] },
    { name: "Premium Design", price: "₹8,000", features: ["Up to 8 pages in Figma", "Complete design system", "Interactive prototypes", "3 revision rounds"] }
  ];

  const devOnly = [
    { name: "Basic Development", price: "₹4,000", features: ["3–4 pages HTML/CSS/JS", "Mobile responsive", "Basic contact form", "1 bug fix round"] },
    { name: "Standard Development", price: "₹7,000", features: ["5–6 pages development", "Advanced animations", "Form + basic SEO", "2 bug fix rounds"] },
    { name: "Premium Development", price: "₹9,000", features: ["7–8 pages development", "Custom JS features", "Full SEO + Analytics", "3 bug fix rounds"] }
  ];

  const addons = [
     { name: "Hosting + Domain", price: "₹2,000 / year", features: ["Domain registration (Cost extra - prices volatile)", "Shared hosting with SSL", "10GB storage", "Email accounts included", "Annual renewal management"] },
     { name: "Standard Maintenance", price: "₹800 / month", features: ["Everything in Basic", "Up to 2 hours updates/month", "Performance monitoring", "Priority support"] },
     { name: "Basic Maintenance", price: "₹500 / month", features: ["Monthly backups", "Security monitoring", "Small text updates", "Email support"] }
  ];

  return (
    <>
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pt-32 pb-20 md:gap-12 md:px-8 bg-white min-h-screen animate-in fade-in duration-700">
      <div className="mb-20 pt-8 border-t border-stone-300">
        <h1 style={{ fontSize: 'clamp(2rem, 8vw, 7rem)' }} className="leading-[0.9] font-serif font-medium tracking-tighter mb-8">
            PRICING <br/> <span className="italic text-stone-400">& PACKAGES</span>
        </h1>
        <p className="font-mono text-sm max-w-xl leading-relaxed text-justify uppercase tracking-tight ml-auto">
            ( Offerings ) — Transparent pricing for transparent work. Whether you need a full website, just the design, or just the code, I have a package that fits your needs.
        </p>
      </div>

      {/* Website Packages */}
      <section className="mb-32">
        <div className="flex items-center gap-4 mb-12">
             <Rocket size={32} />
             <h2 className="font-serif text-4xl italic">Website Packages</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {websitePackages.map((pkg, i) => (
                <div key={i} className={`relative p-8 border ${pkg.recommended ? 'border-brand-orange bg-stone-50' : 'border-stone-200 bg-white'} hover:shadow-xl transition-shadow duration-300 flex flex-col`}>
                    {pkg.recommended && <span className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-mono px-3 py-1 uppercase tracking-widest">Recommended</span>}
                    <h3 className="font-serif text-2xl mb-2">{pkg.name}</h3>
                    <p className="font-mono text-sm text-stone-500 mb-6 h-10">{pkg.description}</p>
                    <div className="text-4xl font-serif font-bold mb-8">{pkg.price}<span className="text-base font-normal text-stone-400 ml-2">/ one-time</span></div>
                    <ul className="space-y-4 mb-8 flex-grow">
                        {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm font-mono text-stone-600">
                                <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <a href={`mailto:anikethvustepalle03@gmail.com?subject=Inquiry about ${pkg.name} Website Package`} className="mt-auto w-full py-4 border border-stone-900 text-stone-900 font-mono text-xs uppercase tracking-widest text-center hover:bg-stone-900 hover:text-white transition-colors duration-300">Select Package</a>
                </div>
            ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Design Only */}
          <section>
            <div className="flex items-center gap-4 mb-8">
                 <Tag size={28} />
                 <h2 className="font-serif text-3xl italic">Design Only</h2>
                 <span className="font-mono text-xs uppercase tracking-widest text-stone-400 border border-stone-200 px-3 py-1 rounded-full">Figma</span>
            </div>
            <div className="space-y-6">
                {designOnly.map((pkg, i) => (
                    <div key={i} className="p-6 border border-stone-200 hover:border-brand-orange transition-colors duration-300">
                        <div className="flex justify-between items-baseline mb-4">
                            <h3 className="font-serif text-xl">{pkg.name}</h3>
                            <span className="font-bold text-lg">{pkg.price}</span>
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                             {pkg.features.map((f, idx) => (
                                 <span key={idx} className="font-mono text-xs text-stone-500 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-stone-300 rounded-full"></span>{f}</span>
                             ))}
                        </div>
                    </div>
                ))}
            </div>
          </section>

          {/* Development Only */}
          <section>
            <div className="flex items-center gap-4 mb-8">
                 <FileCode size={28} />
                 <h2 className="font-serif text-3xl italic">Development Only</h2>
                 <span className="font-mono text-xs uppercase tracking-widest text-stone-400 border border-stone-200 px-3 py-1 rounded-full">HTML/CSS/JS</span>
            </div>
            <div className="space-y-6">
                {devOnly.map((pkg, i) => (
                    <div key={i} className="p-6 border border-stone-200 hover:border-brand-orange transition-colors duration-300">
                         <div className="flex justify-between items-baseline mb-4">
                            <h3 className="font-serif text-xl">{pkg.name}</h3>
                            <span className="font-bold text-lg">{pkg.price}</span>
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                             {pkg.features.map((f, idx) => (
                                 <span key={idx} className="font-mono text-xs text-stone-500 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-stone-300 rounded-full"></span>{f}</span>
                             ))}
                        </div>
                    </div>
                ))}
            </div>
          </section>
      </div>

      {/* Add-ons */}
      <section className="mb-32">
        <div className="flex items-center gap-4 mb-12">
             <Shield size={32} />
             <h2 className="font-serif text-4xl italic">Optional Add-Ons</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addons.map((pkg, i) => (
                 <div key={i} className="p-6 bg-stone-100 border border-stone-200">
                    <h3 className="font-serif text-xl mb-2">{pkg.name}</h3>
                    <div className="text-2xl font-bold font-serif mb-6 text-stone-700">{pkg.price}</div>
                     <ul className="space-y-3">
                        {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-xs font-mono text-stone-600">
                                <Check size={12} className="text-stone-400" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                 </div>
            ))}
        </div>
      </section>

      {/* Terms */}
      <section className="border-t border-stone-300 pt-16">
          <h2 className="font-mono text-sm uppercase tracking-widest mb-8 text-stone-400">Terms & Conditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-mono text-xs text-stone-500 leading-relaxed">
              <div>
                  <h4 className="font-bold text-stone-900 mb-2">Payment</h4>
                  <p>50% upfront, 50% on delivery. Payments via Bank Transfer, UPI, or PayPal.</p>
              </div>
              <div>
                  <h4 className="font-bold text-stone-900 mb-2">Timeline</h4>
                  <p>Delivery time as per selected package. Delays in providing content may affect timeline.</p>
              </div>
               <div>
                  <h4 className="font-bold text-stone-900 mb-2">Revisions</h4>
                  <p>Revisions as specified in package. Additional revisions charged hourly.</p>
              </div>
               <div>
                  <h4 className="font-bold text-stone-900 mb-2">Source Files</h4>
                  <p>Delivered after full payment. Valid for 30 days from quote date.</p>
              </div>
          </div>
      </section>

      <section className="mt-32 p-12 bg-stone-900 text-stone-100 relative overflow-hidden group">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                   <h2 className="font-serif text-4xl italic mb-4">Ready to get started?</h2>
                   <p className="font-mono text-sm uppercase tracking-widest text-stone-400">Let's build your dream website today</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                   <a href="mailto:anikethvustepalle03@gmail.com" className="flex items-center gap-3 px-6 py-3 bg-white text-stone-900 hover:bg-brand-orange hover:text-white transition-colors duration-300 font-mono text-xs uppercase tracking-widest">
                       <Smartphone size={16} /> +91 9311761114
                   </a>
                    <a href="mailto:anikethvustepalle03@gmail.com" className="flex items-center gap-3 px-6 py-3 border border-white text-white hover:bg-white hover:text-stone-900 transition-colors duration-300 font-mono text-xs uppercase tracking-widest">
                       Email Me
                   </a>
              </div>
          </div>
      </section>

    </main>
    <Footer onNavigate={onNavigate} />
    </>
  );
};

export default Pricing;
