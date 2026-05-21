export const projects = [
  {
    id: 1,
    title: "GITA APP",
    category: "Mobile Application",
    type: 'design',
    year: "2026", 
    span: "col-span-1 md:col-span-2 row-span-2", 
    description: "Bhagavad Gita mobile application with comprehensive data normalization pipeline.", 
    details: ["TypeScript", "React Native", "Data Engineering", "Schema Design"], 
    color: "#FF6B35",
    coverImage: "https://picsum.photos/seed/gita-app/1200/800",
    repoUrl: "https://github.com/aniketh703/gita-app",
    repoLabel: "View Repository",
    featured: true,
    featuredRank: 2,
    modules: [
        { type: "intro", content: "A modern mobile experience for the Bhagavad Gita built on a robust data engineering foundation. TypeScript-first architecture with comprehensive schema validation and automated data processing pipelines." },
        { type: "text", title: "The Problem & User Needs", content: "The Bhagavad Gita contains 18 chapters and 700 verses with multiple translations, commentaries, and transliterations. Users needed a mobile application that presented this ancient text in an accessible, distraction-free interface while ensuring the integrity of the complex underlying data." },
        { type: "grid", title: "Role & Contributions", items: [
            { label: "Role", text: "Lead Developer & Data Engineer" },
            { label: "Responsibilities", text: "End-to-end development including data pipeline architecture, mobile application UI/UX design, and React Native implementation." },
            { label: "Timeline", text: "8 Weeks from concept to functional prototype." }
        ]},
        { type: "text", title: "Research Methods", content: "Conducted competitive analysis of existing spiritual apps to identify UX pain points. Found that most apps suffered from cluttered interfaces and inconsistent data formatting. Analyzed reading patterns to optimize typographic hierarchy and translation toggle mechanisms." },
        { type: "grid", title: "Design Process & Architecture", items: [
            { label: "01. Schema Design", text: "Created canonical schema definitions with comprehensive validation rules to ensure data integrity across all verses." },
            { label: "02. Wireframing", text: "Low-fidelity sketches focusing on readability, smooth navigation between chapters, and an intuitive verse search experience." },
            { label: "03. UI Iteration", text: "Refined the color palette and typography for long-form reading, incorporating dark mode and adjustable font sizes." }
        ]},
        { type: 'metrics', items: [
            { value: '700+', unit: '',    label: 'Verses indexed' },
            { value: '8',    unit: 'wks', label: 'Build time' },
            { value: '3',    unit: 'x',   label: 'Faster than alternatives' },
        ]},
        { type: "image", url: "https://picsum.photos/seed/gita-wireframes/1200/600", caption: "Early wireframe iterations focusing on navigation and verse layout." },
        { type: "text", title: "Measurable Outcomes", content: "Established a scalable, validated JSON data structure capable of supporting multiple languages. Created a working React Native prototype that demonstrates smooth scrolling and instant data retrieval. Internal testing showed highly positive feedback regarding readability and interface simplicity." }
    ]
  },
  {
    id: 2,
    title: "LAKSHYA",
    category: "Career Platform",
    type: 'design',
    year: "2025", 
    span: "col-span-1 md:col-span-1 row-span-2", 
    description: "Career guidance platform similar to Google Career Dreamer.", 
    details: ["TypeScript", "React", "T-Hub"], 
    color: "#4A90E2",
    coverImage: "https://picsum.photos/seed/lakshya/1200/800",
    repoUrl: "https://github.com/aniketh703/Lakshya-Project",
    repoLabel: "View Repository",
    featured: true,
    featuredRank: 3,
    modules: [
        { type: "intro", content: "Empowering job seekers with AI-driven career guidance and pathways. Built for T-Hub to democratize career exploration." },
        { type: "text", title: "The Problem & User Needs", content: "Job seekers often struggle to identify clear career paths and understand the specific skill gaps they need to close to reach their dream roles. There was a need for an interactive tool to visualize career trajectories and provide actionable roadmaps." },
        { type: "grid", title: "Role & Contributions", items: [
            { label: "Role", text: "Frontend Developer & UI Designer" },
            { label: "Responsibilities", text: "Designing the interactive career visualization interfaces, developing the React frontend, and ensuring responsive behavior." },
            { label: "Collaboration", text: "Worked closely with domain experts at T-Hub." }
        ]},
        { type: "text", title: "Research Methods", content: "Analyzed existing tools like Google Career Dreamer. Conducted qualitative interviews with recent graduates to understand their anxieties regarding career planning, which informed the 'Skill Mapping' gap analysis feature." },
        { type: "grid", title: "Design Process", items: [
            { label: "01. Information Architecture", text: "Mapped out user flows from onboarding to career discovery, ensuring users don't feel overwhelmed." },
            { label: "02. Visualizations", text: "Designed interactive node-based maps to represent career trajectories intuitively." },
            { label: "03. Prototyping", text: "Iterative testing of the skill gap analysis dashboard for clarity." }
        ]},
        { type: "image", url: "https://picsum.photos/seed/lakshya-design/1200/600", caption: "Interactive career pathway visualization mockups." },
        { type: "text", title: "Measurable Outcomes", content: "Developed a robust frontend prototype for T-Hub. Preliminary user testing indicated a significant increase in user confidence regarding their understanding of required skills for target roles. Setup the foundation for scalable AI integration." }
    ]
  },
  {
    id: 3,
    title: "INDIAN COOK APP",
    category: "Web Application",
    type: 'design',
    year: "2025", 
    span: "col-span-1 md:col-span-1 row-span-2", 
    description: "Recipe discovery platform for Indian cuisine based on available ingredients.", 
    details: ["React 18", "Vite", "Tailwind CSS", "React Router"], 
    color: "#D4745C",
    coverImage: "https://picsum.photos/seed/indian-cook/1200/800",
    repoUrl: "https://github.com/aniketh703/Cook-app",
    repoLabel: "View Repository",
    modules: [
        { type: "intro", content: "A modern, user-friendly web application for discovering and cooking Indian recipes. Built with React 18 and Vite, featuring ingredient-based search, step-by-step cooking guidance, and a warm, inviting design system." },
        { type: "text", title: "The Problem & User Needs", content: "Home cooks frequently face the dilemma of 'what can I cook with what I have?' specifically within the context of Indian cuisine. Users needed a way to filter traditional recipes based on their pantry contents to reduce food waste and decision fatigue." },
        { type: "grid", title: "Role & Contributions", items: [
            { label: "Role", text: "Full Stack Creator (Design & Code)" },
            { label: "Responsibilities", text: "UI/UX design, React application development, state management for complex filtering, and curating the JSON recipe database." },
            { label: "Timeline", text: "4 Weeks" }
        ]},
        { type: "text", title: "Research Methods", content: "Performed a heuristic evaluation of popular recipe apps (e.g., SuperCook) and noted a lack of focus on regional Indian cuisines. Surveyed amateur cooks to understand how they categorize their ingredients and dietary preferences." },
        { type: "grid", title: "Design Process", items: [
            { label: "01. UX Flows", text: "Created streamlined flows for ingredient selection and recipe matching without forcing user registration." },
            { label: "02. UI Design System", text: "Developed a warm color palette (Terracotta, Beige, Sage) to evoke the feeling of a traditional kitchen." },
            { label: "03. Interaction Design", text: "Implemented a step-by-step 'Cooking Mode' interface with built-in timers to prevent users from losing their place." }
        ]},
        { type: "image", url: "https://picsum.photos/seed/cook-app-ui/1200/600", caption: "Design system exploration and cooking mode UI iterations." },
        { type: "text", title: "Measurable Outcomes", content: "Successfully implemented complex multi-parameter filtering (ingredients, region, dietary restrictions) with zero noticeable lag. User testing sessions highlighted the 'Cooking Mode' as a standout feature that improved the hands-on kitchen experience." }
    ]
  },
  {
    id: 4,
    title: "SPEECH TRANSCRIPTION",
    category: "Web Application",
    type: 'engineering',
    year: "2023", 
    span: "col-span-1 md:col-span-1 row-span-1", 
    description: "Real-time speech-to-text transcription with multi-input support.", 
    details: ["Python", "Flask", "Google Speech API", "MoviePy", "PyDub"], 
    color: "#4285F4",
    coverImage: "https://picsum.photos/seed/speech-transcription/1200/800",
    repoUrl: "https://github.com/aniketh703/Speech-to-Text--Transcription",
    repoLabel: "View Repository",
    modules: [
        { type: "intro", content: "A versatile speech-to-text web application built with Flask. Supports real-time microphone input, audio file uploads, and video file transcription using Google Web Speech API." },
        { type: "text", title: "The Problem & User Needs", content: "Accessibility and documentation generation often require transcribing audio from various sources. Users needed a unified tool that could handle real-time dictation as well as pre-recorded audio and video files without requiring complex software installations." },
        { type: "grid", title: "Role & Contributions", items: [
            { label: "Role", text: "Backend & Frontend Developer" },
            { label: "Responsibilities", text: "Integrating Google Speech API, building the Flask backend, handling audio/video file conversions, and creating the web interface." }
        ]},
        { type: "text", title: "Research Methods", content: "Investigated API limitations and constraints regarding audio formats and file sizes. Researched Python libraries for robust media processing (MoviePy, PyDub) to ensure seamless handling of diverse user uploads." },
        { type: "grid", title: "Design Process", items: [
            { label: "01. Architecture", text: "Designed a processing pipeline that normalizes various media inputs into a standard WAV format for the Speech API." },
            { label: "02. Interface Design", text: "Created a minimalist, straightforward HTML/CSS interface allowing users to easily select between the three input modes." }
        ]},
        { type: "image", url: "https://picsum.photos/seed/speech-app/1200/600", caption: "Application flow diagram and interface design." },
        { type: "text", title: "Measurable Outcomes", content: "Delivered a functional tool capable of handling MP3, WAV, and video files. The automatic format detection and conversion pipeline reduced transcription failure rates during testing. Successfully demonstrated real-time API integration." }
    ]
  },
  {
    id: 5,
    title: "ANIKETH BLOG",
    category: "Content Platform",
    type: 'engineering',
    year: "2025", 
    span: "col-span-1 md:col-span-1 row-span-1", 
    description: "Feature-rich blog template built with SvelteKit and TypeScript.", 
    details: ["SvelteKit", "TypeScript", "Tailwind CSS", "Markdown"], 
    color: "#FF3E00",
    coverImage: "https://picsum.photos/seed/aniketh-blog/1200/800",
    liveUrl: "https://aniketh-blog.appwrite.network/",
    liveLabel: "Open Blog",
    repoUrl: "https://github.com/aniketh703/blog-template?tab=readme-ov-file",
    repoLabel: "View Repository",
    modules: [
        { type: "intro", content: "A modern, performant blog platform built with SvelteKit. Markdown-based content management with automated blurhash image placeholders, comprehensive categorization, and production-optimized build pipeline." },
        { type: "text", title: "The Problem & User Needs", content: "Developers often want a high-performance, SEO-optimized personal blog but find existing CMS platforms bloated or overly complex to set up. There was a need for a lightweight, file-based (Markdown) system with modern aesthetic features out of the box." },
        { type: "grid", title: "Role & Contributions", items: [
            { label: "Role", text: "Frontend Engineer & UX Designer" },
            { label: "Responsibilities", text: "Architecting the SvelteKit application, designing the UI with Tailwind CSS, and implementing automated image processing pipelines." }
        ]},
        { type: "text", title: "Research Methods", content: "Analyzed top developer blogs for performance metrics and UX patterns. Identified features like reading time estimates, dark mode, and fast image loading (blurhash) as critical requirements for a premium reading experience." },
        { type: "grid", title: "Design Process", items: [
            { label: "01. Content Strategy", text: "Designed a frontmatter structure to support comprehensive metadata (categories, authors, reading time)." },
            { label: "02. Visual Design", text: "Focused on typography and whitespace to maximize readability for long-form technical content." },
            { label: "03. Performance", text: "Implemented CI scripts for automated blurhash generation to improve perceived load times." }
        ]},
        { type: "image", url: "https://picsum.photos/seed/blog-design/1200/600", caption: "Typography scale and layout explorations." },
        { type: "text", title: "Measurable Outcomes", content: "Achieved near-perfect Lighthouse scores (Performance, Accessibility, SEO). The template provides a seamless authoring experience, allowing new posts to be published simply by adding a Markdown file, drastically reducing publication friction." }
    ]
  },
  {
    id: 6,
    title: "VNAV ASSOCIATES",
    category: "Professional Website",
    type: 'design',
    year: "2026", 
    span: "col-span-1 md:col-span-2 row-span-1", 
    description: "Modern portfolio website for Chartered Accountancy firm built with React and TypeScript.", 
    details: ["React", "TypeScript", "Vite", "ESLint"], 
    color: "#2C3E50",
    coverImage: "https://picsum.photos/seed/vnav-associates/1200/800",
    repoUrl: "https://github.com/aniketh703/vnav-associates-website",
    repoLabel: "View Repository",
    featured: true,
    featuredRank: 1,
    modules: [
        { type: "intro", content: "Professional web presence for VNAV Associates, a chartered accountancy firm. Built with modern React + TypeScript architecture, delivering a fast, type-safe, and maintainable solution." },
        { type: "text", title: "The Problem & User Needs", content: "The accountancy firm needed to modernize its digital presence to attract new clients and clearly articulate its comprehensive services. The existing solutions were outdated and didn't convey the trust and professionalism expected in the financial sector." },
        { type: "grid", title: "Role & Contributions", items: [
            { label: "Role", text: "Lead Frontend Engineer & Designer" },
            { label: "Responsibilities", text: "Client consultation, brand identity translation to web, UI/UX design, and full TypeScript React implementation." }
        ]},
        { type: "text", title: "Research Methods", content: "Conducted stakeholder interviews to understand the firm's target audience and key service offerings. Performed a competitive analysis of top-tier financial firm websites to establish a baseline for trust-inducing design patterns." },
        { type: "grid", title: "Design Process", items: [
            { label: "01. Brand Alignment", text: "Developed a conservative yet modern color palette (deep blues, clean whites) to emphasize reliability." },
            { label: "02. Information Architecture", text: "Restructured the service offerings into clear, accessible categories." },
            { label: "03. Component Library", text: "Built reusable, accessible UI components (navigation, service cards, contact forms) using Tailwind." }
        ]},
        { type: "image", url: "https://picsum.photos/seed/vnav-ui/1200/600", caption: "High-fidelity mockups of the service and contact pages." },
        { type: "text", title: "Measurable Outcomes", content: "Delivered a highly performant, fully responsive application. The rigorous use of TypeScript and ESLint ensures long-term maintainability for future updates. Client feedback indicated high satisfaction with the modernized brand presentation." }
    ]
  },
  {
    id: 7,
    title: "DIABETES MLOPS",
    category: "Machine Learning & MLOps",
    type: 'ml',
    year: "2025", 
    span: "col-span-1 md:col-span-2 row-span-2", 
    description: "End-to-end MLOps pipeline for diabetes prediction with experiment tracking and deployment.", 
    details: ["Python", "MLflow", "DVC", "FastAPI", "Docker", "Prefect"], 
    color: "#00ACC1",
    coverImage: "https://picsum.photos/seed/diabetes-mlops/1200/800",
    repoUrl: "https://github.com/aniketh703/Mtech-diabetes-mlops-project",
    repoLabel: "View Repository",
    modules: [
        { type: "intro", content: "A production-grade MLOps pipeline implementing the complete ML lifecycle from data versioning to model deployment and monitoring." },
        { type: "text", title: "The Problem & User Needs", content: "Developing an ML model is only a small fraction of deploying AI in production. The challenge was to construct a robust MLOps ecosystem that ensures reproducibility, automates retraining, tracks experiments, and provides a scalable inference API." },
        { type: "grid", title: "Role & Contributions", items: [
            { label: "Role", text: "MLOps Engineer" },
            { label: "Responsibilities", text: "Designing the pipeline architecture, implementing DVC/MLflow tracking, building the FastAPI service, and configuring Docker deployments." }
        ]},
        { type: "text", title: "Research Methods", content: "Researched industry standards for ML deployment architectures. Evaluated various orchestration tools (Airflow vs Prefect) and selected Prefect for its Pythonic simplicity. Analyzed model drift monitoring requirements." },
        { type: "grid", title: "Design Process & Architecture", items: [
            { label: "01. Pipeline Design", text: "Mapped out the data flow from raw extraction through DVC to model training logged via MLflow." },
            { label: "02. API Architecture", text: "Designed a FastAPI REST interface supporting both single predictions and batch CSV processing." },
            { label: "03. CI/CD Integration", text: "Formulated automated testing strategies using pytest for both data validation and API endpoints." }
        ]},
        { type: "image", url: "https://picsum.photos/seed/mlops-arch/1200/600", caption: "System architecture diagram of the MLOps pipeline." },
        { type: "text", title: "Measurable Outcomes", content: "Successfully established complete data lineage and experiment reproducibility. The API handles scalable concurrent requests, and the CI/CD pipeline automates testing and containerization, drastically reducing model deployment time." }
    ]
  },
  {
    id: 8,
    title: "PROJECT MANAGER",
    category: "Web Application",
    type: 'engineering',
    year: "2023", 
    span: "col-span-1 md:col-span-1 row-span-2", 
    description: "Collaborative task management application with real-time team chat.", 
    details: ["JavaScript", "HTML5", "CSS3", "Real-time Chat"], 
    color: "#6C63FF",
    coverImage: "https://picsum.photos/seed/project-manager/1200/800",
    repoUrl: "https://github.com/aniketh703/Project-manager",
    repoLabel: "View Repository",
    modules: [
        { type: "intro", content: "A lightweight yet powerful project management tool enabling teams to create tasks, assign responsibilities, and communicate in real-time—all through a clean, intuitive web interface." },
        { type: "text", title: "The Problem & User Needs", content: "Small teams and student groups often find enterprise project management tools (like Jira) overwhelmingly complex. They needed a lightweight, accessible tool that combines basic task tracking with immediate communication without a steep learning curve." },
        { type: "grid", title: "Role & Contributions", items: [
            { label: "Role", text: "Frontend Developer" },
            { label: "Responsibilities", text: "Full application development using vanilla JavaScript, UI design, and implementing local state management." }
        ]},
        { type: "text", title: "Research Methods", content: "Conducted usability testing on existing simple tools like Trello. Identified that context switching between a task board and a separate chat app was a major friction point for small teams." },
        { type: "grid", title: "Design Process", items: [
            { label: "01. Wireframing", text: "Designed a unified interface featuring a task management board alongside a persistent chat sidebar." },
            { label: "02. State Management", text: "Architected a custom vanilla JS event system to keep the UI synchronized with LocalStorage." },
            { label: "03. UI Polish", text: "Implemented drag-and-drop metaphors and visual status indicators (colors, icons) for quick scanning." }
        ]},
        { type: "image", url: "https://picsum.photos/seed/pm-wireframes/1200/600", caption: "Initial layout sketches and state management flow." },
        { type: "text", title: "Measurable Outcomes", content: "Created a fully functional, zero-dependency web application. Demonstrates a strong grasp of DOM manipulation and vanilla JS architecture. The application loads instantly and performs seamlessly on low-bandwidth connections." }
    ]
  },
  {
    id: 9,
    title: "CONTENT MANAGER",
    category: "Web Application",
    type: 'engineering',
    year: "2023", 
    span: "col-span-1 md:col-span-1 row-span-1", 
    description: "Comprehensive content organization platform with multimedia support and dark mode.", 
    details: ["JavaScript", "CSS3", "HTML5", "Local Storage"], 
    color: "#9B59B6",
    coverImage: "https://picsum.photos/seed/content-manager/1200/800",
    repoUrl: "https://github.com/aniketh703/Content-manager",
    repoLabel: "View Repository",
    modules: [
        { type: "intro", content: "A versatile web application for organizing projects and content in a single, user-friendly platform. Features external media URL support, local storage persistence, and a sleek dark mode interface." },
        { type: "text", title: "The Problem & User Needs", content: "Managing diverse content types (text, images, video embeds) across different platforms creates fragmentation. Freelancers and students needed a centralized, lightweight dashboard to curate and organize project-specific multimedia resources." },
        { type: "grid", title: "Role & Contributions", items: [
            { label: "Role", text: "Developer & UI Designer" },
            { label: "Responsibilities", text: "Designing the grid layout, implementing theme switching (dark/light mode), and managing local storage data persistence." }
        ]},
        { type: "text", title: "Research Methods", content: "Surveyed peers on how they organize research materials. Discovered a high reliance on browser bookmarks and messy local folders. The core requirement was identified as visual organization with immediate preview capabilities." },
        { type: "grid", title: "Design Process", items: [
            { label: "01. Layout Design", text: "Implemented a responsive grid system allowing for masonry-style visual content presentation." },
            { label: "02. Theming", text: "Utilized CSS variables to create a robust, seamless dark mode toggle without page reloads." },
            { label: "03. Media Handling", text: "Created modular rendering functions to seamlessly embed external image and video URLs." }
        ]},
        { type: "image", url: "https://picsum.photos/seed/content-mgr-ui/1200/600", caption: "Dark mode color palette exploration and card layouts." },
        { type: "text", title: "Measurable Outcomes", content: "Delivered a highly visual, persistent personal content dashboard. The vanilla JS architecture guarantees fast load times, and the application serves as a reliable tool for curating reference materials directly in the browser." }
    ]
  },
  {
    id: 10,
    title: "WEATHER FORECAST",
    category: "CLI Application",
    type: 'engineering',
    year: "2023", 
    span: "col-span-1 md:col-span-1 row-span-1", 
    description: "Python CLI tool for retrieving and displaying weather forecasts from Weather API.", 
    details: ["Python", "REST API", "JSON", "CLI"], 
    color: "#3498DB",
    coverImage: "https://picsum.photos/seed/weather-forecast/1200/800",
    modules: [
        { type: "intro", content: "A command-line weather forecast application built with Python. Retrieves real-time weather data from Weather API, formats it into readable tables, and saves forecasts to text files for offline access." },
        { type: "text", title: "The Problem & User Needs", content: "Command-line users and developers often prefer fetching utility information like weather without leaving the terminal. The goal was to build a clean CLI tool that formats complex JSON weather data into easily readable text tables." },
        { type: "grid", title: "Role & Contributions", items: [
            { label: "Role", text: "Backend Developer (Internship Project)" },
            { label: "Responsibilities", text: "API integration, data parsing, CLI formatting, and implementing file I/O operations." }
        ]},
        { type: "text", title: "Research Methods", content: "Evaluated several weather APIs (OpenWeatherMap vs. WeatherAPI) based on documentation clarity, response time, and JSON structure complexity. Determined the necessary data fields required for a concise terminal output." },
        { type: "grid", title: "Design Process & Architecture", items: [
            { label: "01. Data Modeling", text: "Extracted relevant fields (temp, conditions, dates) from deeply nested API responses." },
            { label: "02. CLI UX", text: "Designed a tabular output format that aligns properly regardless of terminal width." },
            { label: "03. Modularity", text: "Separated concerns into distinct functions: fetch, format, and save, ensuring clean code." }
        ]},
        { type: "image", url: "https://picsum.photos/seed/cli-design/1200/600", caption: "Terminal output formatting and architecture planning." },
        { type: "text", title: "Measurable Outcomes", content: "Successfully delivered a robust CLI tool handling network errors gracefully. The project cemented foundational skills in REST API consumption, JSON parsing, and Python scripting." }
    ]
  },
  {
    id: 11,
    title: "RBAC UI",
    category: "Web Application",
    type: 'design',
    year: "2024", 
    span: "col-span-1 md:col-span-2 row-span-2", 
    description: "Role-Based Access Control dashboard built with Next.js and TypeScript for managing users, roles, and permissions.", 
    details: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"], 
    color: "#10B981",
    coverImage: "https://picsum.photos/seed/rbac-ui/1200/800",
    repoUrl: "https://github.com/aniketh703/Role-Based-Access-Control-UI",
    repoLabel: "View Repository",
    modules: [
        { type: "intro", content: "A comprehensive Role-Based Access Control (RBAC) administration interface built with Next.js 15 and TypeScript. Provides intuitive user, role, and permission management with a modern, accessible UI powered by shadcn/ui components." },
        { type: "text", title: "The Problem & User Needs", content: "Managing complex user permissions and roles in enterprise applications is notoriously difficult and prone to security errors. Administrators needed an intuitive, visual interface to manage these permissions securely without diving into raw databases." },
        { type: "grid", title: "Role & Contributions", items: [
            { label: "Role", text: "Frontend Architect & UI Developer" },
            { label: "Responsibilities", text: "Designing the dashboard layout, implementing complex state management for permissions, and integrating accessible shadcn/ui components." }
        ]},
        { type: "text", title: "Research Methods", content: "Analyzed administrative dashboards in AWS IAM and Google Workspace. Identified that hierarchical permission displays and bulk assignment tools were critical for reducing cognitive load on administrators." },
        { type: "grid", title: "Design Process", items: [
            { label: "01. UX Workflows", text: "Created user flows for common administrative tasks (e.g., onboarding a new employee, revoking access)." },
            { label: "02. UI Components", text: "Utilized shadcn/ui to build accessible data tables, complex nested forms, and confirmation dialogs." },
            { label: "03. Data Handling", text: "Implemented strict TypeScript interfaces to map roles and permissions, ensuring UI state matches the backend contract." }
        ]},
        { type: "image", url: "https://picsum.photos/seed/rbac-dash/1200/600", caption: "Dashboard layout iterations and permission matrix design." },
        { type: "text", title: "Measurable Outcomes", content: "Created a highly modular, enterprise-ready administrative interface. The strict typing and accessible component library provide a scalable foundation that can be easily integrated with backend authentication services." }
    ]
  },
    {
        id: 12,
        title: "AESTHETIC SYNTHESIS",
        category: "Interactive Web Experience",
        type: 'creative',
        year: "2026", 
        span: "col-span-1 md:col-span-2 row-span-2", 
        description: "Interactive field guide to 2026 visual trends and future-facing design directions.", 
        details: ["HTML5", "Visual Design", "Trend Curation", "GitHub Pages"], 
        color: "#7C3AED",
        coverImage: "https://picsum.photos/seed/aesthetic-synthesis/1200/800",
        liveUrl: "https://aniketh703.github.io/one/",
        liveLabel: "Open Live Guide",
        repoUrl: "https://github.com/aniketh703/one",
        repoLabel: "View Repository",
        modules: [
                { type: "intro", content: "A digital field guide translating future design trend research into an immersive web experience. Built to make aesthetic movements accessible, explorable, and experiential for designers and curious creators." },
                { type: "text", title: "The Problem & User Needs", content: "Design trends and aesthetic research are typically presented in static, uninspiring slide decks. There was an opportunity to build an interactive web experience that actually embodies the future design trends it discusses." },
                { type: "grid", title: "Role & Contributions", items: [
                        { label: "Role", text: "Web Developer & Creative Coder" },
                        { label: "Responsibilities", text: "Translating static research into an interactive, performant web experience. Handling typography, layout, and deployment." },
                        { label: "Collaboration", text: "Visual execution based on research foundation by Ioana Adriana Teleanu." }
                ]},
                { type: "text", title: "Research Methods", content: "Curated research on upcoming visual movements like Code Brutalism, Tech-Organic, and Nostalgic Futurisms. Analyzed how interaction design can reflect these specific aesthetic philosophies." },
                { type: "grid", title: "Design Process", items: [
                        { label: "01. Visual Translation", text: "Designed interface metaphors matching the trends (e.g., terminal aesthetics for 'Technical Mono')." },
                        { label: "02. Interaction Design", text: "Implemented scroll-based triggers and hover states that feel tactile and futuristic." },
                        { label: "03. Performance", text: "Optimized a single-page HTML architecture for immediate loading on GitHub Pages." }
                ]},
                { type: "image", url: "https://picsum.photos/seed/aesthetic-ui/1200/600", caption: "Typography and visual motif explorations." },
                { type: "text", title: "Measurable Outcomes", content: "Successfully deployed a highly engaging interactive artifact. Demonstrates the ability to bridge the gap between abstract design research and concrete web development, creating an immersive educational tool." }
        ]
    }
];
