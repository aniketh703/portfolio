export const projects = [
  { 
    id: 1, 
    title: "GITA APP", 
    category: "Mobile Application", 
    year: "2026", 
    span: "col-span-1 md:col-span-2 row-span-2", 
    description: "Bhagavad Gita mobile application with comprehensive data normalization pipeline.", 
    details: ["TypeScript", "React Native", "Data Engineering", "Schema Design"], 
    color: "#FF6B35",
    repoUrl: "https://github.com/aniketh703/gita-app",
    repoLabel: "View Repository",
    featured: true,
    modules: [
        { type: "intro", content: "A modern mobile experience for the Bhagavad Gita built on a robust data engineering foundation. TypeScript-first architecture with comprehensive schema validation and automated data processing pipelines." },
        { type: "text", title: "The Challenge", content: "Building a reliable mobile app required solving complex data normalization challenges first. The Bhagavad Gita contains 18 chapters and 700 verses with multiple translations, commentaries, and transliterations—requiring a sophisticated data architecture to ensure consistency and accuracy." },
        { type: "grid", title: "Data Engineering Pipeline", items: [
            { label: "01. Schema Design", text: "Canonical schema definition with comprehensive validation rules ensuring data integrity across all verses and chapters." },
            { label: "02. Normalization", text: "Automated data normalization scripts converting CSV sources into validated JSON structures with edge case handling." },
            { label: "03. Generation", text: "Chapter generation tools with batch processing capabilities for efficient data transformation and export." },
            { label: "04. Validation", text: "Multi-layer validation system checking schema compliance, data completeness, and referential integrity." }
        ]},
        { type: "quote", content: "Ancient wisdom meets modern data engineering." },
        { type: "text", title: "Technical Architecture", content: "TypeScript-based (63.3%) data processing pipeline with JavaScript automation scripts (33.3%). The system includes CSV converters, data normalizers, chapter generators, and comprehensive validation tools. Shell and batch scripts enable cross-platform automation for developer workflows." },
        { type: "grid", title: "Key Components", items: [
            { label: "Data Tools", text: "convert-csv.js for data transformation, normalize-gita-data.js for schema normalization, generate-gita-chapters.js for structured output." },
            { label: "Documentation", text: "Comprehensive guides including CANONICAL_SCHEMA.md, VALIDATION_COMPLETE.md, NORMALIZER_COMPLETE_GUIDE.md, and QUICKSTART.md." },
            { label: "Automation", text: "Cross-platform scripts (generate-chapters.sh/bat, NORMALIZER_QUICKSTART.sh) for reproducible data processing workflows." }
        ]},
        { type: "text", title: "Mobile Application", content: "React Native mobile app delivering the processed content with offline-first capabilities. The UI focuses on readability, chapter navigation, verse search, and multi-language support. Clean separation between data layer and presentation ensures easy updates and maintenance." }
    ]
  },
  { 
    id: 2, 
    title: "LAKSHYA", 
    category: "Career Platform", 
    year: "2025", 
    span: "col-span-1 md:col-span-1 row-span-2", 
    description: "Career guidance platform similar to Google Career Dreamer.", 
    details: ["TypeScript", "React", "T-Hub"], 
    color: "#4A90E2",
    repoUrl: "https://github.com/aniketh703/Lakshya-Project",
    repoLabel: "View Repository",
    featured: true,
    modules: [
        { type: "intro", content: "Empowering job seekers with AI-driven career guidance and pathways. Built for T-Hub to democratize career exploration." },
        { type: "text", title: "The Project", content: "Lakshya is a comprehensive career guidance platform designed to help job seekers discover career paths, skill requirements, and actionable roadmaps. Inspired by Google Career Dreamer, it provides personalized recommendations." },
        { type: "grid", title: "Core Features", items: [
            { label: "01. Career Paths", text: "Interactive visualizations of various career trajectories and skill requirements." },
            { label: "02. Skill Mapping", text: "Gap analysis between current skills and dream job requirements." },
            { label: "03. Resources", text: "Curated learning resources and actionable next steps for career growth." }
        ]},
        { type: "quote", content: "Your career compass in the digital age." },
        { type: "text", title: "Impact", content: "Developed for T-Hub's innovation ecosystem, helping hundreds of job seekers identify clear career paths and acquire necessary skills through data-driven insights." }
    ]
  },
  { 
    id: 3, 
    title: "INDIAN COOK APP", 
    category: "Web Application", 
    year: "2025", 
    span: "col-span-1 md:col-span-1 row-span-2", 
    description: "Recipe discovery platform for Indian cuisine based on available ingredients.", 
    details: ["React 18", "Vite", "Tailwind CSS", "React Router"], 
    color: "#D4745C",
    repoUrl: "https://github.com/aniketh703/Cook-app",
    repoLabel: "View Repository",
    modules: [
        { type: "intro", content: "A modern, user-friendly web application for discovering and cooking Indian recipes. Built with React 18 and Vite, featuring ingredient-based search, step-by-step cooking guidance, and a warm, inviting design system." },
        { type: "text", title: "The Concept", content: "Solving the everyday question: 'What can I cook with what I have?' The app lets users browse Indian recipes filtered by ingredients in their kitchen, dietary preferences, and regional cuisine styles. Perfect for home cooks exploring Indian cooking traditions." },
        { type: "grid", title: "Core Features", items: [
            { label: "01. Smart Filtering", text: "Browse recipes by available ingredients, region (North/South/East/West Indian), and dietary preferences (vegetarian, vegan, etc.)." },
            { label: "02. Cooking Mode", text: "Step-by-step cooking interface with built-in timers for each stage, ensuring perfect execution every time." },
            { label: "03. Collections", text: "Save favorite recipes and organize them into custom collections for meal planning and quick access." },
            { label: "04. Responsive Design", text: "Seamless experience across mobile and desktop devices, perfect for kitchen use." }
        ]},
        { type: "quote", content: "Cook what you have, discover what you love." },
        { type: "text", title: "Design System", content: "Warm, homey color palette featuring Terracotta (primary accents), Beige (neutral backgrounds), and Sage (earth tones). The design evokes the warmth of Indian kitchens while maintaining modern usability standards." },
        { type: "grid", title: "Technical Architecture", items: [
            { label: "React 18", text: "Component-based architecture with custom hooks for recipe filtering and cooking state management." },
            { label: "Vite", text: "Lightning-fast development with Hot Module Replacement and optimized builds for production performance." },
            { label: "Tailwind CSS", text: "Utility-first styling enabling rapid UI development with consistent design tokens and responsive patterns." },
            { label: "React Router v6", text: "Client-side routing for seamless navigation between recipe browsing, details, and cooking modes." }
        ]},
        { type: "text", title: "Project Structure", content: "Modular component organization: common UI components, specialized filter components, recipe display modules, and cooking mode interface. Context API for state management, custom hooks for reusable logic, and JSON-based recipe data storage." },
        { type: "text", title: "Impact", content: "Created an accessible platform for exploring Indian cuisine, making traditional recipes discoverable and approachable for modern home cooks. The ingredient-based filtering reduces food waste and encourages creative cooking with available resources." }
    ]
  },
  { 
    id: 4, 
    title: "SPEECH TRANSCRIPTION", 
    category: "Web Application", 
    year: "2023", 
    span: "col-span-1 md:col-span-1 row-span-1", 
    description: "Real-time speech-to-text transcription with multi-input support.", 
    details: ["Python", "Flask", "Google Speech API", "MoviePy", "PyDub"], 
    color: "#4285F4",
    repoUrl: "https://github.com/aniketh703/Speech-to-Text--Transcription",
    repoLabel: "View Repository",
    modules: [
        { type: "intro", content: "A versatile speech-to-text web application built with Flask. Supports real-time microphone input, audio file uploads, and video file transcription using Google Web Speech API." },
        { type: "text", title: "The Application", content: "A full-featured transcription platform handling multiple input sources. Users can transcribe live audio from their microphone, upload pre-recorded audio files, or extract and transcribe audio from video files—all through an intuitive web interface." },
        { type: "grid", title: "Key Features", items: [
            { label: "01. Multi-Input", text: "Three transcription modes: real-time microphone capture, audio file upload (MP3/WAV), and video file processing with automatic audio extraction." },
            { label: "02. Media Processing", text: "MoviePy integration for extracting audio streams from video files. PyDub for format conversion (MP3 to WAV). Automatic format detection and handling." },
            { label: "03. Speech Recognition", text: "Google Web Speech API integration via SpeechRecognition library. High-accuracy transcription with support for multiple audio formats and quality levels." },
            { label: "04. Transcript Management", text: "Save transcripts to text files with unique naming. Download functionality for processed transcripts. Multiple output formats supported." }
        ]},
        { type: "quote", content: "From speech to text, one click at a time." },
        { type: "text", title: "Technical Stack", content: "Python (35.6%) backend with Flask framework for routing and request handling. HTML (24.4%) and CSS (29.0%) for responsive user interface. JavaScript (11.0%) for interactive client-side features. SpeechRecognition library wrapping Google's speech API for transcription accuracy." },
        { type: "text", title: "Application Flow", content: "Web interface allows input type selection. For microphone mode, real-time audio capture with instant transcription feedback. For file uploads, automatic format detection triggers appropriate processing pipeline. Video files pass through audio extraction before transcription. All results can be saved with timestamped filenames." },
        { type: "text", title: "Fun Detail", content: "Includes an Easter egg trigger responding to the creator's name 'VANI' for personalized interaction—adding a human touch to the technical application." }
    ]
  },
  { 
    id: 5, 
    title: "ANIKETH BLOG", 
    category: "Content Platform", 
    year: "2025", 
    span: "col-span-1 md:col-span-1 row-span-1", 
    description: "Feature-rich blog template built with SvelteKit and TypeScript.", 
    details: ["SvelteKit", "TypeScript", "Tailwind CSS", "Markdown"], 
    color: "#FF3E00",
    liveUrl: "https://aniketh-blog.appwrite.network/",
    liveLabel: "Open Blog",
    repoUrl: "https://github.com/aniketh703/blog-template?tab=readme-ov-file",
    repoLabel: "View Repository",
    modules: [
        { type: "intro", content: "A modern, performant blog platform built with SvelteKit. Markdown-based content management with automated blurhash image placeholders, comprehensive categorization, and production-optimized build pipeline." },
        { type: "text", title: "The Platform", content: "A feature-rich blog template designed for personal or professional publishing. Built with SvelteKit's file-based routing and server-side rendering capabilities, delivering exceptional performance and SEO out of the box." },
        { type: "grid", title: "Core Features", items: [
            { label: "01. Markdown CMS", text: "Write posts in Markdown with frontmatter for metadata (title, description, categories, author, reading time). File-based content management with automatic slug generation." },
            { label: "02. Image Optimization", text: "Automated blurhash generation for beautiful image placeholders during loading. Optimized image delivery with modern formats (AVIF) and responsive sizing." },
            { label: "03. Content Organization", text: "Featured posts highlighting, multi-category support, pagination for post navigation, and estimated reading time calculation." },
            { label: "04. Developer Experience", text: "TypeScript for type safety, Prettier for code formatting, automated pre-build scripts for image processing, and hot module replacement in development." }
        ]},
        { type: "quote", content: "Content first, performance always." },
        { type: "text", title: "Technical Stack", content: "SvelteKit (57.7%) for the framework layer with server-side rendering and static site generation. TypeScript (29.7%) ensuring type safety across components and utilities. Tailwind CSS (4.1%) for rapid UI development with utility classes. Markdown processing for content authoring and automated blurhash generation via CI scripts." },
        { type: "text", title: "Content Workflow", content: "Posts live in src/posts/ as Markdown files. Each post includes comprehensive frontmatter: title, description, cover image path, categories array, author slug, publication date, reading time, and featured status. Author definitions managed in centralized utils/blog.ts for consistency across posts." },
        { type: "text", title: "Production Features", content: "Production build optimization with SvelteKit's adapter system. Automated image processing pipeline generating blurhash strings on every build. SEO-friendly routing with automatic sitemap generation. Fast page loads with code splitting and lazy loading." }
    ]
  },
  { 
    id: 6, 
    title: "VNAV ASSOCIATES", 
    category: "Professional Website", 
    year: "2026", 
    span: "col-span-1 md:col-span-2 row-span-1", 
    description: "Modern portfolio website for Chartered Accountancy firm built with React and TypeScript.", 
    details: ["React", "TypeScript", "Vite", "ESLint"], 
    color: "#2C3E50",
    repoUrl: "https://github.com/aniketh703/vnav-associates-website",
    repoLabel: "View Repository",
    featured: true,
    modules: [
        { type: "intro", content: "Professional web presence for VNAV Associates, a chartered accountancy firm. Built with modern React + TypeScript architecture, delivering a fast, type-safe, and maintainable solution." },
        { type: "text", title: "Client Requirements", content: "The firm needed a professional website that establishes credibility, showcases services, and makes it easy for potential clients to get in touch. The design prioritizes clarity, trust, and seamless user experience across all devices." },
        { type: "grid", title: "Technical Architecture", items: [
            { label: "01. React + TypeScript", text: "Type-safe component architecture ensuring code reliability and developer productivity with full IntelliSense support." },
            { label: "02. Vite Build System", text: "Lightning-fast development with Hot Module Replacement (HMR) and optimized production builds for excellent performance." },
            { label: "03. Component Structure", text: "Modular site components including SiteFooter, organized in src/components/site/ for clean separation of concerns." },
            { label: "04. ESLint Integration", text: "Strict code quality enforcement with React-specific linting rules ensuring consistent, maintainable codebase." }
        ]},
        { type: "text", title: "Development Workflow", content: "Leveraging Vite's blazing-fast build tooling with React's component model. TypeScript provides compile-time safety, catching errors before deployment. The project structure follows best practices with separate tsconfig files for application and Node.js tooling." },
        { type: "text", title: "Design Philosophy", content: "Conservative color palette and professional typography conveying trust and financial expertise. Fully responsive design ensuring perfect display across all devices. Clear service descriptions and intuitive navigation tailored for diverse client audiences." },
        { type: "text", title: "Outcome", content: "Delivered a production-ready, type-safe React application with comprehensive code quality tooling. The modern tech stack ensures long-term maintainability while the professional design successfully represents the firm's brand and expertise." }
    ]
  },
  { 
    id: 7, 
    title: "DIABETES MLOPS", 
    category: "Machine Learning & MLOps", 
    year: "2025", 
    span: "col-span-1 md:col-span-2 row-span-2", 
    description: "End-to-end MLOps pipeline for diabetes prediction with experiment tracking and deployment.", 
    details: ["Python", "MLflow", "DVC", "FastAPI", "Docker", "Prefect"], 
    color: "#00ACC1",
    repoUrl: "https://github.com/aniketh703/Mtech-diabetes-mlops-project",
    repoLabel: "View Repository",
    featured: true,
    modules: [
        { type: "intro", content: "A production-grade MLOps pipeline implementing the complete ML lifecycle from data versioning to model deployment and monitoring." },
        { type: "text", title: "The Challenge", content: "Building a comprehensive diabetes prediction system using the Pima Indians Diabetes Database. The goal was to create not just a model, but a complete MLOps ecosystem with experiment tracking, data versioning, automated workflows, and production-ready API deployment." },
        { type: "grid", title: "MLOps Architecture", items: [
            { label: "01. Data Pipeline", text: "DVC for data versioning, automated preprocessing, feature engineering, and train-test splitting with validation checks." },
            { label: "02. Experiment Tracking", text: "MLflow for comprehensive experiment tracking, hyperparameter logging, metrics visualization, and model registry management." },
            { label: "03. Orchestration", text: "Prefect workflows for pipeline automation with task dependencies, retry logic, caching, and comprehensive logging." },
            { label: "04. Deployment", text: "FastAPI REST API with single/batch predictions, file uploads, health checks, and background model retraining capabilities." }
        ]},
        { type: "quote", content: "From raw data to production predictions—the complete ML lifecycle." },
        { type: "text", title: "Technical Stack", content: "Machine learning with scikit-learn, pandas, and numpy. MLflow for experiment tracking and model management. DVC for data version control. Prefect for workflow orchestration. FastAPI for high-performance API deployment. Docker for containerization and Evidently AI for data drift monitoring." },
        { type: "text", title: "Key Features", content: "Automated data preprocessing with missing value imputation and feature scaling. Model training with hyperparameter tracking and cross-validation. Comprehensive evaluation metrics including accuracy, precision, recall, F1-score, and AUC-ROC. RESTful API supporting single predictions, batch processing up to 1000 patients, and CSV file uploads with risk level classification." },
        { type: "grid", title: "DevOps & Testing", items: [
            { label: "CI/CD", text: "GitHub Actions pipeline with automated linting, testing, model building, and Docker deployment." },
            { label: "Testing", text: "Comprehensive pytest suite covering data loading, model training, predictions, and API endpoints with coverage reporting." },
            { label: "Monitoring", text: "Model performance tracking, API request/response logging, and data drift detection for production reliability." }
        ]},
        { type: "text", title: "Impact & Results", content: "Achieved reproducible ML experiments with complete lineage tracking. Reduced model deployment time through automated CI/CD pipelines. Enabled real-time predictions via scalable API supporting thousands of concurrent requests. Established monitoring frameworks for production model health and data quality." }
    ]
  },
  { 
    id: 8, 
    title: "PROJECT MANAGER", 
    category: "Web Application", 
    year: "2023", 
    span: "col-span-1 md:col-span-1 row-span-2", 
    description: "Collaborative task management application with real-time team chat.", 
    details: ["JavaScript", "HTML5", "CSS3", "Real-time Chat"], 
    color: "#6C63FF",
    repoUrl: "https://github.com/aniketh703/Project-manager",
    repoLabel: "View Repository",
    modules: [
        { type: "intro", content: "A lightweight yet powerful project management tool enabling teams to create tasks, assign responsibilities, and communicate in real-time—all through a clean, intuitive web interface." },
        { type: "text", title: "The Application", content: "Built with vanilla JavaScript, this project demonstrates that you don't need heavy frameworks to create functional collaboration tools. The app handles task lifecycle management from creation to completion, while providing team members with instant communication capabilities." },
        { type: "grid", title: "Core Features", items: [
            { label: "01. Task Management", text: "Create tasks with descriptions, assign to team members, set due dates, track completion status. Simple drag-and-drop interface for task organization." },
            { label: "02. Team Collaboration", text: "Assign tasks to specific team members, add comments and updates to tasks, view team workload distribution and task ownership." },
            { label: "03. Real-time Chat", text: "Integrated team chat for instant communication. Message history persistence with clear chat functionality for fresh starts when needed." },
            { label: "04. Progress Tracking", text: "Visual indicators for task completion status, due date tracking with overdue alerts, team productivity overview dashboard." }
        ]},
        { type: "quote", content: "Simplicity is the ultimate sophistication in team collaboration." },
        { type: "text", title: "Technical Implementation", content: "JavaScript (47.8%) handles all application logic including DOM manipulation, event handling, and state management. CSS (26.5%) provides responsive styling and smooth interactions. HTML (25.7%) structures the semantic layout. No external frameworks—pure web fundamentals demonstrating clean code architecture." },
        { type: "grid", title: "Technical Highlights", items: [
            { label: "Vanilla JS", text: "Pure JavaScript implementation without framework dependencies. Custom event system for real-time updates and state synchronization across components." },
            { label: "Modular Design", text: "Separation of concerns with main.js for application logic, style.css for presentation layer, and index.html for structure." },
            { label: "Local Storage", text: "Client-side data persistence ensuring tasks and chat history survive page refreshes without backend infrastructure." }
        ]},
        { type: "text", title: "User Experience", content: "Clean, minimal interface reduces cognitive load during task management. Intuitive form-based task creation with immediate visual feedback. Responsive design ensures seamless experience across desktop and mobile devices. Chat integration keeps communication contextual without switching tools." },
        { type: "text", title: "Project Impact", content: "Demonstrates that effective collaboration tools can be built with fundamental web technologies. The lightweight architecture ensures fast load times and smooth performance even on low-bandwidth connections. Perfect for small teams needing straightforward project tracking without enterprise complexity." }
    ]
  },
  { 
    id: 9, 
    title: "CONTENT MANAGER", 
    category: "Web Application", 
    year: "2023", 
    span: "col-span-1 md:col-span-1 row-span-1", 
    description: "Comprehensive content organization platform with multimedia support and dark mode.", 
    details: ["JavaScript", "CSS3", "HTML5", "Local Storage"], 
    color: "#9B59B6",
    repoUrl: "https://github.com/aniketh703/Content-manager",
    repoLabel: "View Repository",
    modules: [
        { type: "intro", content: "A versatile web application for organizing projects and content in a single, user-friendly platform. Features external media URL support, local storage persistence, and a sleek dark mode interface." },
        { type: "text", title: "The Problem", content: "Managing multiple projects with diverse content types—text, images, videos—across different platforms creates fragmentation and inefficiency. Content Manager solves this by providing a centralized hub where all project-related information stays organized and accessible." },
        { type: "grid", title: "Core Features", items: [
            { label: "01. Content Organization", text: "Create, edit, and delete project tasks with titles and rich content. Structured layout for managing multiple projects simultaneously." },
            { label: "02. Multimedia Support", text: "Add external images and videos via URLs with seamless embedding. Support for various media formats with responsive display." },
            { label: "03. Dark Mode", text: "Toggle between light and dark themes for comfortable viewing in any lighting condition. User preference persisted across sessions." },
            { label: "04. Data Persistence", text: "Automatic local storage saves all content, ensuring no data loss even after closing the browser. Resume work exactly where you left off." }
        ]},
        { type: "quote", content: "All your projects, one place, zero chaos." },
        { type: "text", title: "Technical Implementation", content: "CSS (46.4%) drives the sophisticated styling system including theme switching and responsive layouts. JavaScript (41.0%) handles application logic, DOM manipulation, and local storage operations. HTML (12.6%) provides semantic structure for content organization. Pure vanilla stack demonstrating efficiency without framework overhead." },
        { type: "grid", title: "Technical Highlights", items: [
            { label: "State Management", text: "Custom JavaScript state management using local storage API. Real-time synchronization between UI and persisted data." },
            { label: "Theme System", text: "CSS variable-based theming allowing instant dark/light mode switching without page reload. Smooth transitions for visual comfort." },
            { label: "Media Handling", text: "URL validation and embedding for external images and videos. Responsive media containers adapting to various screen sizes." }
        ]},
        { type: "text", title: "User Experience", content: "Intuitive interface reduces learning curve for new users. Add Image and Add Video buttons provide clear calls-to-action. Edit and delete controls offer full content lifecycle management. Responsive design ensures usability across desktop, tablet, and mobile devices." },
        { type: "text", title: "Use Cases", content: "Perfect for freelancers managing client projects, students organizing coursework, developers tracking side projects, or teams needing lightweight project documentation. The external media support makes it ideal for visual portfolios and content-rich project briefs." }
    ]
  },
  { 
    id: 10, 
    title: "WEATHER FORECAST", 
    category: "CLI Application", 
    year: "2023", 
    span: "col-span-1 md:col-span-1 row-span-1", 
    description: "Python CLI tool for retrieving and displaying weather forecasts from Weather API.", 
    details: ["Python", "REST API", "JSON", "CLI"], 
    color: "#3498DB",
    modules: [
        { type: "intro", content: "A command-line weather forecast application built with Python. Retrieves real-time weather data from Weather API, formats it into readable tables, and saves forecasts to text files for offline access." },
        { type: "text", title: "The Project", content: "My first internship project—a practical introduction to API integration, data parsing, and file I/O in Python. The application demonstrates clean code organization with modular functions for data retrieval, formatting, and persistence." },
        { type: "grid", title: "Core Features", items: [
            { label: "01. API Integration", text: "GET requests to Weather API with location-based queries. JSON response parsing and error handling for robust data retrieval." },
            { label: "02. Forecast Table", text: "Formatted console output displaying multi-day weather forecasts. Clean tabular presentation with temperature, conditions, and date information." },
            { label: "03. Data Persistence", text: "Save forecast data to text files with location-based naming. Offline access to previously retrieved forecasts." },
            { label: "04. User Input", text: "Interactive CLI prompting users for location queries. Real-time feedback during API requests and data processing." }
        ]},
        { type: "quote", content: "Every developer's first API project—weather forecasts never go out of style." },
        { type: "text", title: "Technical Implementation", content: "Pure Python (100%) leveraging standard libraries and third-party modules. The requests library handles HTTP communication, json module parses API responses, datetime/timedelta manage temporal data, and os module handles file operations. Modular function design separates concerns: get_weather_forecast() for API calls, print_forecast_table() for display logic, and save_forecast_data() for persistence." },
        { type: "grid", title: "Function Architecture", items: [
            { label: "get_weather_forecast()", text: "Accepts location parameter, constructs API request, handles response, returns list of tuples containing forecast data for each day." },
            { label: "print_forecast_table()", text: "Takes forecast data as input, formats and displays information in clean tabular layout with headers and aligned columns." },
            { label: "save_forecast_data()", text: "Receives forecast data and location, writes formatted forecast to text file, provides user feedback with saved filename." }
        ]},
        { type: "text", title: "Learning Journey", content: "This internship project taught fundamental skills: working with RESTful APIs, handling JSON data structures, managing user input/output, and organizing code into reusable functions. The experience of integrating external APIs and presenting data meaningfully laid the groundwork for more complex projects." },
        { type: "text", title: "Project Files", content: "weather.py contains the main application logic with all three core functions. forecast_hyderabad.txt demonstrates saved output with real forecast data. Clean separation between code and data outputs following best practices for CLI applications." }
    ]
  },
  { 
    id: 11, 
    title: "RBAC UI", 
    category: "Web Application", 
    year: "2024", 
    span: "col-span-1 md:col-span-2 row-span-2", 
    description: "Role-Based Access Control dashboard built with Next.js and TypeScript for managing users, roles, and permissions.", 
    details: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"], 
    color: "#10B981",
    repoUrl: "https://github.com/aniketh703/Role-Based-Access-Control-UI",
    repoLabel: "View Repository",
    modules: [
        { type: "intro", content: "A comprehensive Role-Based Access Control (RBAC) administration interface built with Next.js 15 and TypeScript. Provides intuitive user, role, and permission management with a modern, accessible UI powered by shadcn/ui components." },
        { type: "text", title: "The Challenge", content: "Organizations need granular control over user access and permissions. Building an RBAC system requires careful consideration of security models, user experience, and maintainability. This project creates an admin dashboard that makes complex permission management intuitive and efficient." },
        { type: "grid", title: "Core Features", items: [
            { label: "01. User Management", text: "Create, read, update, and delete users with profile information. Assign roles to users with real-time permission updates. Status management (active/inactive) and bulk operations." },
            { label: "02. Role Management", text: "Define custom roles with descriptive names and metadata. Assign multiple permissions to roles with hierarchical organization. Role templates for common access patterns." },
            { label: "03. Permission System", text: "Granular permission controls for resources and actions. Permission inheritance through role hierarchy. Visual permission matrix for understanding access patterns." },
            { label: "04. Admin Dashboard", text: "Comprehensive overview of users, roles, and permissions. Search, filter, and sort capabilities for large datasets. Real-time validation and error handling with user feedback." }
        ]},
        { type: "quote", content: "Security is not just about locks—it's about knowing who has the keys." },
        { type: "text", title: "Technical Stack", content: "TypeScript (95.5%) ensures type safety across the entire application with strict compiler settings. JavaScript (4.5%) for configuration files and build scripts. Next.js 15 provides server-side rendering, API routes, and optimized font loading with Geist font family. Tailwind CSS delivers utility-first styling with responsive design patterns." },
        { type: "grid", title: "Architecture & Tech", items: [
            { label: "Next.js 15", text: "App Router for file-based routing, Server Components for improved performance, next/font for automatic font optimization, and built-in TypeScript support." },
            { label: "shadcn/ui", text: "Accessible component library built on Radix UI primitives. Components include tables, dialogs, forms, and buttons with full keyboard navigation and ARIA compliance." },
            { label: "TypeScript", text: "Strict type checking prevents runtime errors. Interface definitions for users, roles, and permissions ensure data consistency. Type-safe API routes and component props." },
            { label: "Tailwind CSS", text: "Responsive utility classes for mobile-first design. Custom configuration for brand colors and spacing. Dark mode support with CSS variables." }
        ]},
        { type: "text", title: "Project Structure", content: "app/ directory contains pages using Next.js App Router with page.tsx as entry points. components/ houses reusable UI components following atomic design principles. lib/ includes utility functions and shared logic. Configuration files (next.config.ts, tailwind.config.ts, tsconfig.json) define build and compiler settings." },
        { type: "text", title: "Development Features", content: "ESLint configuration ensures code quality and consistency. Hot Module Replacement (HMR) for instant feedback during development. TypeScript strict mode catches potential issues at compile time. PostCSS processes Tailwind directives for optimized CSS output." },
        { type: "text", title: "Real-World Application", content: "This RBAC UI demonstrates enterprise-grade access control patterns applicable to SaaS platforms, content management systems, and internal admin tools. The modular architecture allows easy extension for custom business logic while maintaining security best practices." }
    ]
  },
    { 
        id: 12, 
        title: "AESTHETIC SYNTHESIS", 
        category: "Interactive Web Experience", 
        year: "2026", 
        span: "col-span-1 md:col-span-2 row-span-2", 
        description: "Interactive field guide to 2026 visual trends and future-facing design directions.", 
        details: ["HTML5", "Visual Design", "Trend Curation", "GitHub Pages"], 
        color: "#7C3AED",
        liveUrl: "https://aniketh703.github.io/one/",
        liveLabel: "Open Live Guide",
        repoUrl: "https://github.com/aniketh703/one",
        repoLabel: "View Repository",
        modules: [
                { type: "intro", content: "A digital field guide translating future design trend research into an immersive web experience. Built to make aesthetic movements accessible, explorable, and experiential for designers and curious creators." },
                { type: "text", title: "Credits & Roles", content: "Research and concept foundation by Ioana Adriana Teleanu via UX Goodies / Bootcamp. Web development and visual execution by Aniketh Vustepalle. This project intentionally keeps credit transparent and front-facing." },
                { type: "grid", title: "Featured Aesthetic Directions", items: [
                        { label: "01. Technical Mono", text: "Code Brutalism interfaces, monospaced systems, terminal-inspired visual language, and utilitarian digital textures." },
                        { label: "02. Surveillance Dystopia", text: "High-contrast, system-alert motifs and control-room UI metaphors expressing tension between utility and unease." },
                        { label: "03. Tech-Organic", text: "Bio-computing inspired visuals blending synthetic structures with natural forms, gradients, and living system aesthetics." },
                        { label: "04. Nostalgic Futurisms", text: "Frutiger Aero, Heisei retro, Lo-Fi pixel, Kidcore, Y3K hyperfuturism, Dreamcore, and adjacent hybrid internet aesthetics." }
                ]},
                { type: "quote", content: "Research-led aesthetics, translated into interaction." },
                { type: "text", title: "Implementation", content: "Single-page HTML experience optimized for fast loading and straightforward deployment on GitHub Pages. Crafted interactions and typography hierarchy turn static trend analysis into a guided digital narrative." },
                { type: "grid", title: "Project Links", items: [
                        { label: "Live Guide", text: "https://aniketh703.github.io/one/" },
                        { label: "Repository", text: "https://github.com/aniketh703/one" },
                        { label: "Context", text: "Launched as a 2026 field guide announcement highlighting transparent collaboration and credit where due." }
                ]},
                { type: "text", title: "Why It Matters", content: "The project demonstrates how design research can be transformed into a public educational artifact—not just summarized in slides but experienced interactively on the web." }
        ]
    },
];
