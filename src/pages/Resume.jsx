import React, { useEffect } from 'react';
import { Briefcase, Award, GraduationCap, BookOpen, Download } from 'lucide-react';
import Footer from '../components/Footer';

const SectionHeader = ({ title, icon: Icon }) => (
  <div className="mt-14 md:mt-20 mb-6 border-b border-stone-300 pb-4">
    <div className="flex items-center gap-3">
      <Icon size={18} className="text-brand-orange opacity-70" />
      <h2 className="font-serif text-2xl md:text-4xl tracking-tight">{title}</h2>
    </div>
  </div>
);

const Resume = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Resume | Aniketh Vustepalle';
  }, []);

  return (
    <>
      <section className="page-container bg-stone-50 text-stone-900">
        <div className="mx-auto w-full max-w-5xl px-4 md:px-8">
          <div className="border-t border-stone-300 pt-8 md:pt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-3 opacity-60">Curriculum Vitae</p>
              <h1 className="font-serif text-4xl md:text-7xl tracking-tight">Resume</h1>
            </div>
            <a
              href="/portfolio/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-stone-900 bg-stone-900 text-stone-50 px-5 py-3 font-mono text-xs uppercase tracking-widest hover:bg-stone-700 transition-colors"
            >
              <Download size={14} />
              Download PDF
            </a>
          </div>

          <section>
            <SectionHeader title="Experience" icon={Briefcase} />
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl md:text-2xl">Associate - UI/UX Designer</h3>
                <p className="font-mono text-xs uppercase tracking-widest text-stone-500 mt-2">PanTerra Networks / Nov 2025 - Present</p>
                <p className="text-stone-700 mt-3 leading-relaxed">Designing and developing responsive interfaces while collaborating with product and engineering teams to improve usability and business outcomes.</p>
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl">UX Designer Trainee</h3>
                <p className="font-mono text-xs uppercase tracking-widest text-stone-500 mt-2">PanTerra Networks / May 2025 - Nov 2025</p>
                <p className="text-stone-700 mt-3 leading-relaxed">Focused on usability testing, design systems, and front-end handoff for production-ready interfaces.</p>
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl">Data and Tools Intern</h3>
                <p className="font-mono text-xs uppercase tracking-widest text-stone-500 mt-2">Q-DITS / Sep 2024 - Dec 2024</p>
                <p className="text-stone-700 mt-3 leading-relaxed">Worked on website redesign, SEO collaboration, internal GUI tools, and Python automation workflows.</p>
              </div>
            </div>
          </section>

          <section>
            <SectionHeader title="Education" icon={GraduationCap} />
            <div className="border border-stone-200 bg-white p-6 md:p-8">
              <h3 className="font-serif text-2xl">Bachelor of Engineering, Computer Science</h3>
              <p className="font-mono text-xs uppercase tracking-widest text-stone-500 mt-2">Sri Chandrasekharendra Saraswathi Vishwa Mahavidyalaya / Dec 2020 - Jul 2024</p>
              <p className="text-stone-700 mt-4 leading-relaxed">Coursework and projects across software engineering, web development, cloud fundamentals, and AI/ML systems.</p>
            </div>
          </section>

          <section>
            <SectionHeader title="Certifications" icon={Award} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-stone-200 p-5 bg-white">
                <h3 className="font-serif text-xl">Google UX Design Professional Certificate</h3>
                <p className="font-mono text-xs uppercase tracking-widest text-stone-500 mt-2">Google / Dec 2025</p>
              </div>
              <div className="border border-stone-200 p-5 bg-white">
                <h3 className="font-serif text-xl">GitHub Foundations</h3>
                <p className="font-mono text-xs uppercase tracking-widest text-stone-500 mt-2">GitHub / Feb 2025</p>
              </div>
            </div>
          </section>

          <section>
            <SectionHeader title="Publications and Honors" icon={BookOpen} />
            <div className="space-y-4 text-stone-700 leading-relaxed">
              <p><span className="font-semibold text-stone-900">Publication:</span> Telemedicine for India: A Health Care Revolution.</p>
              <p><span className="font-semibold text-stone-900">Publication:</span> The Future of AI: Transforming Tomorrow.</p>
              <p><span className="font-semibold text-stone-900">Award:</span> Winner, Under 25 ID Card Design (Jan 2025).</p>
            </div>
          </section>

          <section>
            <SectionHeader title="Skills" icon={Briefcase} />
            <div className="flex flex-wrap gap-2 pb-8">
              {['UI/UX Design', 'React', 'TypeScript', 'JavaScript', 'Python', 'Figma', 'Design Systems', 'Prototyping', 'User Research', 'Tailwind CSS', 'GitHub Actions', 'Responsive Design'].map((skill) => (
                <span key={skill} className="border border-stone-300 px-3 py-1 rounded-full text-xs font-mono bg-white text-stone-700">{skill}</span>
              ))}
            </div>
          </section>

          {onNavigate && (
            <div className="pb-12">
              <button
                onClick={() => onNavigate('brand')}
                className="font-mono text-xs uppercase tracking-widest text-stone-600 border-b border-stone-400 hover:text-brand-orange hover:border-brand-orange transition-colors"
              >
                Back to brand system
              </button>
            </div>
          )}
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
    </>
  );
};

export default Resume;
