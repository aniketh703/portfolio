import { projects } from './projects';

// Facts repeated across Home/Contact/Archive/Resume/Footer/Testimonials —
// centralized here so a change (or a new project) can't drift out of sync
// the way the "24 vs 26 projects" count did.
export const profile = {
  name: 'Aniketh Vustepalle',
  jobTitle: 'AI Product Designer & Creative Developer',
  employer: 'PanTerra Networks',
  location: 'Hyderabad, India',
  locationShort: 'Hyderabad, IN',
  yearsExperience: '1.5+',
  projectCount: projects.length,
};

// Shared with Archive.jsx and Resume.jsx — was duplicated verbatim in both.
export const skills = [
  'AI Product Design', 'HITL AI Systems', 'Design Systems', 'React', 'Next.js',
  'TypeScript', 'Python', 'FastAPI', 'Figma', 'Prompt Engineering',
  'UX Research', 'Prototyping', 'CI/CD', 'SQL', 'Tailwind CSS',
];
