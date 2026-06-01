const showcaseAsset = (fileName) => `${import.meta.env.BASE_URL}projects/${fileName.split('/').map(segment => encodeURIComponent(segment)).join('/')}`;

export const projects = [
    {
        id: 21,
        title: "LOGO DESIGN",
        category: "Brand Identity",
        type: 'creative',
        year: "2025",
        span: "col-span-1 md:col-span-2 row-span-2",
        description: "Brand identity and logo systems designed for seven clients across wellness, media, fitness, and SaaS.",
        details: ["Brand Identity", "Logo Design", "Adobe Illustrator", "Typography"],
        color: "#7C3AED",
        coverImage: showcaseAsset("logos/gb1.png"),
        featured: true,
        featuredRank: 0,
        modules: [
            { type: "intro", content: "A collection of logo and brand identity systems created for clients spanning wellness, media, SaaS, and fitness verticals. Each mark was developed from a positioning brief — designed to be distinct, scalable, and immediately ownable." },
            { type: "text", title: "GB Aesthetics Miami", content: "A clean, sophisticated wordmark and icon system for a Miami-based aesthetics practice. The visual language balances luxury with clinical confidence — refined letterforms paired with a geometric mark that reads clearly across digital and physical touchpoints." },
            { type: "image", url: showcaseAsset("logos/gb1.png"), caption: "GB Aesthetics Miami — primary mark." },
            { type: "image", url: showcaseAsset("logos/gb2.png"), caption: "GB Aesthetics Miami — alternate lockup." },
            { type: "text", title: "ABU Group", content: "Corporate identity for ABU Group with a strong, geometric logomark built for credibility and versatility across print, digital, and environmental applications." },
            { type: "image", url: showcaseAsset("logos/abu1.png"), caption: "ABU Group — primary mark." },
            { type: "image", url: showcaseAsset("logos/abu2.png"), caption: "ABU Group — secondary variant." },
            { type: "image", url: showcaseAsset("logos/abu3.png"), caption: "ABU Group — full lockup." },
            { type: "text", title: "Paid Ads Podcast", content: "A bold, media-forward logo for a podcast focused on performance marketing. The mark communicates authority and momentum — designed to hold up as a social avatar, thumbnail, and merchandise graphic." },
            { type: "image", url: showcaseAsset("logos/Pap1.png"), caption: "Paid Ads Podcast — logo mark." },
            { type: "text", title: "The Hormone Concierge", content: "Brand identity for a concierge health and hormone wellness practice. Warm, trustworthy tones meet precise, medical-adjacent typography — a system that feels personal without losing clinical credibility." },
            { type: "image", url: showcaseAsset("logos/thc1.png"), caption: "The Hormone Concierge — primary." },
            { type: "image", url: showcaseAsset("logos/thc2.png"), caption: "The Hormone Concierge — color variants." },
            { type: "image", url: showcaseAsset("logos/thc3.png"), caption: "The Hormone Concierge — lockup." },
            { type: "text", title: "MarketingPulse.ai · Durga Yoga Wear · Connectify Therapy", content: "Three further identity systems: a sharp AI-native mark for a SaaS marketing analytics tool, a flowing, spirit-forward logotype for a yoga apparel brand, and a calm, connection-led wordmark for a digital therapy platform." },
            { type: "image", url: showcaseAsset("logos/mp1.png"), caption: "MarketingPulse.ai — logomark." },
            { type: "image", url: showcaseAsset("logos/drg1.png"), caption: "Durga Yoga Wear — primary mark." },
            { type: "image", url: showcaseAsset("logos/drg2.png"), caption: "Durga Yoga Wear — alternate." },
            { type: "image", url: showcaseAsset("logos/ct1.png"), caption: "Connectify Therapy — logo system." },
        ]
    },

    {
        id: 22,
        title: "GRAPHIC DESIGN",
        category: "Visual Design",
        type: 'creative',
        year: "2025",
        span: "col-span-1 md:col-span-2 row-span-2",
        description: "Graphic design and visual systems for Bin Blasters, Inlet.Life, Immo Deboo, and Arena Combat – SSD.",
        details: ["Graphic Design", "Visual Design", "Adobe Illustrator", "Campaign Design"],
        color: "#D97706",
        coverImage: showcaseAsset("graphic design/bb1.png"),
        featured: false,
        modules: [
            { type: "intro", content: "A set of graphic design projects spanning brand collateral, editorial layouts, and campaign visuals for clients in waste management, digital media, real estate, and combat sports." },
            { type: "text", title: "Bin Blasters", content: "Visual system and marketing collateral for Bin Blasters, a waste management startup. The design language is bold and approachable — high-contrast layouts with energetic typography that cuts through cluttered B2B categories." },
            { type: "image", url: showcaseAsset("graphic design/bb1.png"), caption: "Bin Blasters — visual system, layout 1." },
            { type: "image", url: showcaseAsset("graphic design/bb2.png"), caption: "Bin Blasters — layout 2." },
            { type: "image", url: showcaseAsset("graphic design/bb3.png"), caption: "Bin Blasters — layout 3." },
            { type: "image", url: showcaseAsset("graphic design/bb4.png"), caption: "Bin Blasters — layout 4." },
            { type: "text", title: "Inlet.Life", content: "Editorial and content design for Inlet.Life, a digital media platform. Clean grid-based layouts prioritise readability and content hierarchy, with a refined visual language that supports long-form and short-form publishing." },
            { type: "image", url: showcaseAsset("graphic design/il1.png"), caption: "Inlet.Life — editorial design 1." },
            { type: "image", url: showcaseAsset("graphic design/il2.png"), caption: "Inlet.Life — editorial design 2." },
            { type: "text", title: "Immo Deboo", content: "Visual collateral and brand materials for Immo Deboo, a real estate brand. Sophisticated, minimal layouts convey trust and market expertise — clean compositions that position the brand as premium without being inaccessible." },
            { type: "image", url: showcaseAsset("graphic design/id1.png"), caption: "Immo Deboo — visual collateral 1." },
            { type: "image", url: showcaseAsset("graphic design/id2.png"), caption: "Immo Deboo — visual collateral 2." },
            { type: "text", title: "Arena Combat – SSD", content: "Campaign graphics for Arena Combat, a combat sports and event brand. High-energy, kinetic compositions using strong contrast and dynamic type — designed to command attention across social and out-of-home formats." },
            { type: "image", url: showcaseAsset("graphic design/ac1.png"), caption: "Arena Combat – SSD — campaign asset 1." },
            { type: "image", url: showcaseAsset("graphic design/ac2.png"), caption: "Arena Combat – SSD — campaign asset 2." },
            { type: "image", url: showcaseAsset("graphic design/ac3.png"), caption: "Arena Combat – SSD — campaign asset 3." },
        ]
    },

    {
        id: 23,
        title: "PAUL WAGNER",
        category: "Web Design",
        type: 'design',
        year: "2025",
        span: "col-span-1 md:col-span-1 row-span-2",
        description: "Full website design concept for Paul Wagner — layout, typography, and visual hierarchy.",
        details: ["Web Design", "UI Design", "Figma", "Responsive Design"],
        color: "#0EA5E9",
        coverImage: showcaseAsset("web design/Frame.png"),
        featured: false,
        modules: [
            { type: "intro", content: "A complete website design concept for Paul Wagner, focused on clean layout architecture, editorial typography, and a visual hierarchy that guides users from landing to conversion." },
            { type: "grid", title: "Role & Deliverables", items: [
                { label: "Role", text: "Web Designer" },
                { label: "Deliverables", text: "Full-page layouts, component designs, and responsive breakpoints." },
                { label: "Tool", text: "Figma" }
            ]},
            { type: "image", url: showcaseAsset("web design/Frame.png"), caption: "Paul Wagner — full website design layout." },
            { type: "text", title: "Design Approach", content: "The design prioritises clarity and trust: a structured grid keeps content scannable, while restrained typography establishes authority without visual noise. Each section is designed to work as a standalone module so the layout remains flexible across screen sizes." },
        ]
    },

    {
        id: 1,
        title: "GEETA APP",
        category: "Mobile Application",
        type: 'design',
        year: "2026",
        span: "col-span-1 md:col-span-2 row-span-2",
        description: "Bhagavad Geeta mobile application with comprehensive data normalization pipeline.",
        details: ["TypeScript", "React Native", "Data Engineering", "Schema Design"],
        color: "#FF6B35",
        coverImage: showcaseAsset("gita.png"),
        repoUrl: "https://github.com/aniketh703/gita-app",
        repoLabel: "View Repository",
        featured: true,
        featuredRank: 2,
        modules: [
            { type: "intro", content: "A modern mobile experience for the Bhagavad Geeta built on a robust data engineering foundation. TypeScript-first architecture with comprehensive schema validation, automated data processing pipelines, and a distraction-free reading interface designed for daily spiritual practice." },
            { type: "text", title: "The Problem & User Needs", content: "The Bhagavad Geeta contains 18 chapters and 700 verses — each with Sanskrit source text, transliteration, multiple English translations, and chapter-level commentaries. Existing digital versions either presented raw PDFs with no navigation, or fragmented the content across incompatible APIs with inconsistent data schemas.\n\nUsers — students, practitioners, and scholars alike — needed a mobile application that presented this ancient text in a clean, distraction-free interface with instant verse lookup, chapter navigation, and preference-based translation selection. The deeper engineering challenge was ensuring data integrity across 700+ records sourced from multiple formats, normalised into a single validated schema before a single UI component was written." },
            { type: "grid", title: "Role & Contributions", items: [
                { label: "Role", text: "Lead Developer & Data Engineer" },
                { label: "Responsibilities", text: "End-to-end development including data pipeline architecture, mobile application UI/UX design in React Native, and TypeScript schema validation." },
                { label: "Timeline", text: "8 weeks from concept to functional prototype." }
            ]},
            { type: 'metrics', items: [
                { value: '700+', unit: '', label: 'Verses indexed' },
                { value: '8', unit: 'wks', label: 'Build time' },
                { value: '3', unit: 'x', label: 'Faster data retrieval vs alternatives' },
            ]},
            { type: "image", url: showcaseAsset("gita 2.png"), caption: "Preference selection and reading setup." },
            { type: "image", url: showcaseAsset("gita 3.png"), caption: "Chapter browsing and search flow." },
            { type: "text", title: "Design & Engineering Decisions", content: "The data pipeline was built first: a Python normalisation script ingested raw source files, validated each verse entry against a strict TypeScript interface (chapter, verse, Sanskrit, transliteration, translation, commentary), and output a single source-of-truth JSON bundle. This meant the React Native UI could be built with confidence — no runtime null checks or defensive fallbacks needed.\n\nThe reading UI was designed around two core principles: zero distraction and instant access. A bottom sheet for chapter navigation, large-scale Sanskrit rendering with transliteration toggled on demand, and swipe-based verse navigation kept the experience tactile and focused. Translation switching was implemented as a stateless preference stored locally, so users returned to exactly the translation they preferred." },
            { type: "image", url: showcaseAsset("gita 5.png"), caption: "Multi-screen reading experience explorations." },
            { type: "image", url: showcaseAsset("gita 6.png"), caption: "Home, chapter list, and search composition." },
            { type: "text", title: "Measurable Outcomes", content: "Delivered a validated, language-agnostic JSON data structure capable of supporting additional translations and commentary layers without schema migration. The React Native prototype demonstrated smooth 60fps scrolling through 700+ verses with instant search. Internal testing across 10 sessions showed uniformly positive feedback on readability, navigation speed, and visual simplicity — with several users noting it replaced their paper copy for daily reading." }
        ],
    },

    {
        id: 6,
        title: "TAXNEXT",
        category: "Professional Website",
        type: 'design',
        year: "2026",
        span: "col-span-1 md:col-span-2 row-span-1",
        description: "Chartered accountancy website for professional tax, compliance, and advisory services.",
        details: ["React", "TypeScript", "Vite", "ESLint"],
        color: "#2C3E50",
        coverImage: showcaseAsset("taxnext.png"),
        liveUrl: "https://taxnext.in/",
        liveLabel: "Visit TaxNext",
        repoUrl: "https://github.com/aniketh703/vnav-associates-website",
        repoLabel: "View Repository",
        featured: true,
        featuredRank: 1,
        modules: [
            { type: "intro", content: "Professional Standards. Systematic Approach. Regulatory Adherence. TaxNext presents a chartered accountancy practice focused on reliable tax, audit, advisory, and compliance services for individuals, NRIs, and businesses." },
            { type: "text", title: "The Problem & User Needs", content: "The firm needed a credible digital presence that could explain its service scope clearly, signal professionalism immediately, and provide direct paths to calculators, services, and contact information." },
            { type: "grid", title: "Role & Contributions", items: [
                { label: "Role", text: "Lead Frontend Engineer & Designer" },
                { label: "Responsibilities", text: "Client consultation, brand identity translation to web, UI/UX design, and full TypeScript React implementation." }
            ]},
            { type: "grid", title: "Services Shown On Site", items: [
                { label: "Individuals & Employees", text: "Income tax return filing, HRA review, and deduction guidance." },
                { label: "NRIs & PIOs", text: "India income declarations, FEMA compliance, NRO/NRE guidance, and DTAA advisory." },
                { label: "Business Owners", text: "GST registration, return filing, bookkeeping, and annual statutory compliance." }
            ]},
            { type: "grid", title: "Practice Areas", items: [
                { label: "Audit & Assurance", text: "Statutory audits, internal audits, tax audits, and financial reviews." },
                { label: "Business Advisory", text: "Financial planning, structuring, and compliance advisory." },
                { label: "Regulatory Services", text: "Company incorporation, ROC filings, and certification services." }
            ]},
            { type: "grid", title: "Calculator Suite", items: [
                { label: "Income Tax Tool", text: "Multi-regime income tax calculations with surcharge logic and marginal relief." },
                { label: "NPS Tax Engine", text: "Section 80CCD(1B) savings estimation up to ₹50,000." },
                { label: "Loan-Tax Synergy", text: "Home loan tax impact analysis under Section 24(b)." }
            ]},
            { type: "image", url: showcaseAsset("taxnext.png"), caption: "Professional landing page and service positioning." },
            { type: "text", title: "Operating Model", content: "The website emphasizes a structured engagement flow: initial review, document preparation, and statutory filing. Contact options, FAQs, calculators, and quick links support fast client onboarding." },
            { type: "text", title: "Contact & Trust Signals", content: "The site highlights Kurnool and Chennai offices, verified WhatsApp and email contact, ICAI ethical disclaimers, and service continuity through a professional partner-led practice." }
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
        coverImage: null,
        repoUrl: "https://github.com/aniketh703/Mtech-diabetes-mlops-project",
        repoLabel: "View Repository",
        modules: [
            { type: "intro", content: "A production-grade MLOps pipeline implementing the complete ML lifecycle from data versioning to model training and monitoring." },
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
            { type: "text", title: "Measurable Outcomes", content: "Successfully established complete data lineage and experiment reproducibility. The API handles scalable concurrent requests, and the CI/CD pipeline automates testing and containerization, drastically reducing model deployment time." }
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
        coverImage: showcaseAsset("rbac.png"),
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
            { type: "image", url: showcaseAsset("rbac 2.png"), caption: "Dashboard layout iterations and permission matrix design." },
            { type: "image", url: showcaseAsset("rbac (2).png"), caption: "Role management and selection states." },
            { type: "image", url: showcaseAsset("rbac (3).png"), caption: "Detailed permissions and administrative controls." },
            { type: "image", url: showcaseAsset("rbac (4).png"), caption: "Alternative dashboard composition and layout refinement." },
            { type: "text", title: "Measurable Outcomes", content: "Created a highly modular, enterprise-ready administrative interface. The strict typing and accessible component library provide a scalable foundation that can be easily integrated with backend authentication services." }
        ]
    },

    {
        id: 20,
        title: "M-AWARE",
        category: "Python Application",
        type: 'engineering',
        year: "2026",
        span: "col-span-1 md:col-span-2 row-span-2",
        description: "Python application with backend, frontend, and knowledge graph workflows for context-aware retrieval.",
        details: ["Python", "JavaScript", "Neo4j", "Knowledge Graph"],
        color: "#0F766E",
        coverImage: showcaseAsset("m aware.png"),
        repoUrl: "https://github.com/aniketh703/m-aware/tree/master",
        repoLabel: "View Repository",
        modules: [
            { type: "intro", content: "M-Aware is a Python-based application designed to provide context-aware monitoring, analytics, and intelligent automation across backend, frontend, and knowledge graph layers." },
            { type: "text", title: "The Problem & User Needs", content: "The repository is organized to keep core application logic, interface behavior, and graph-based relationships in sync so users can explore connected information without losing context." },
            { type: "grid", title: "Project Structure", items: [
                { label: "Backend", text: "Python backend services for processing and orchestration." },
                { label: "Frontend", text: "HTML/CSS/JavaScript chatbot UI." },
                { label: "Knowledge Graph", text: "Graph layer for linked data and context-aware retrieval." }
            ]},
            { type: "grid", title: "Requirements", items: [
                { label: "Python", text: "Python 3.8+ environment for the backend." },
                { label: "Frontend", text: "Frontend technologies" },
                { label: "Graph DB", text: "Neo4j or another graph database for the knowledge graph." }
            ]},
            { type: "grid", title: "Run Flow", items: [
                { label: "Backend", text: "Create a virtual environment, install dependencies, and run the main Python entry point." },
                { label: "Frontend", text: "Install npm packages and start the frontend dev server." },
                { label: "Knowledge Graph", text: "Start Neo4j and load the graph data before using graph-backed features." }
            ]},
            { type: "image", url: showcaseAsset("maware.png"), caption: "Primary interface and system overview." },
            { type: "image", url: showcaseAsset("maware (2).png"), caption: "Supporting visual and secondary layout." },
            { type: "text", title: "Usage & Support", content: "The app is meant to be used through the frontend UI with backend and graph services running locally. Troubleshooting focuses on service availability, environment configuration, and cross-service connectivity." }
        ]
    },

    {
        id: 17,
        title: "10 Figma Sign-In Page Templates",
        category: "UI/UX",
        type: 'design',
        year: "2025",
        span: "col-span-1 md:col-span-2 row-span-1",
        description: "10 beautifully crafted Figma sign-in page templates designed to help teams launch faster with polished, usable authentication screens.",
        details: ["Figma", "UI Kit", "Gumroad"],
        color: "#A855F7",
        featured: true,
        featuredRank: 1,
        coverImage: showcaseAsset("figma sign in templates/1.png"),
        liveUrl: "https://anikethvustepalle.gumroad.com/l/igpvwn",
        liveLabel: "View on Gumroad",
        modules: [
            { type: "intro", content: "Modern. Usable. Designer-approved. This Figma template pack gives you polished sign-in screens that save time without sacrificing creativity." },
            { type: "text", title: "What's Inside", content: "The pack includes 10 fully designed sign-in mockups for email authentication and social authentication flows, each built to feel fresh, functional, and easy to adapt." },
            { type: "grid", title: "Design Notes", items: [
                { label: "Modern and Simple", text: "Clean layouts that fit easily into apps and websites." },
                { label: "Neat Fonts", text: "Readable typography paired with balanced spacing and color." },
                { label: "Free Assets", text: "Fonts are free and the imagery is sourced from Unsplash." }
            ]},
            { type: "grid", title: "Best For", items: [
                { label: "01. Email Auth", text: "Simple, trustworthy login screens with clear form hierarchy." },
                { label: "02. Social Auth", text: "Layouts that support multiple sign-in providers without clutter." },
                { label: "03. Quick Handoff", text: "Designed for fast reuse in product builds and client work." }
            ]},
            { type: "image", url: showcaseAsset("figma sign in templates/1.png"), caption: "Template 01: minimal sign-in composition." },
            { type: "image", url: showcaseAsset("figma sign in templates/2.png"), caption: "Template 02: split-layout login screen." },
            { type: "image", url: showcaseAsset("figma sign in templates/3.png"), caption: "Template 03: dark sign-in variation." },
            { type: "image", url: showcaseAsset("figma sign in templates/4.png"), caption: "Template 04: image-led authentication layout." },
            { type: "image", url: showcaseAsset("figma sign in templates/5.png"), caption: "Template 05: centered form system." }
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
        coverImage: showcaseAsset("lakshya.jpg"),
        repoUrl: "https://github.com/aniketh703/Lakshya-Project",
        repoLabel: "View Repository",
        featured: true,
        featuredRank: 3,
        modules: [
            { type: "intro", content: "Lakshya is an AI-driven career guidance platform built for T-Hub, Hyderabad's flagship startup incubator, designed to democratise career planning for students and early-career professionals across India. The platform maps a user's current skills against target roles and generates structured, actionable roadmaps to close the gap." },
            { type: "text", title: "The Problem & User Needs", content: "India graduates millions of students annually, yet career counselling remains inaccessible to most. Generic job boards show vacancies but offer no guidance on the path from 'where I am' to 'where I want to be.' Students in Tier-2 and Tier-3 cities have almost no access to structured career mentorship.\n\nT-Hub identified this gap and commissioned Lakshya to serve as a self-serve career intelligence tool — one that could analyse a user's existing skills, map them to market-relevant roles, identify specific gaps, and present a prioritised learning roadmap. The challenge from a UX perspective was making a data-dense, multi-step process feel approachable rather than clinical." },
            { type: "grid", title: "Role & Contributions", items: [
                { label: "Role", text: "Frontend Developer & UI Designer" },
                { label: "Responsibilities", text: "Information architecture, interactive Figma prototyping, React TypeScript frontend, responsive layout, and T-Hub stakeholder presentations." },
                { label: "Collaboration", text: "Worked with T-Hub domain experts and product leads through weekly review cycles." }
            ]},
            { type: "text", title: "Research & Design Process", content: "The research phase involved competitive analysis of Google Career Dreamer, LinkedIn's Career Explorer, and Coursera's career pathway tool. Key finding: all existing tools presented overwhelming lists with no clear prioritisation. Users didn't need more information — they needed a decision.\n\nI conducted five qualitative interviews with recent CS graduates to understand their mental models around skill gaps and career planning. The recurring insight was that users felt paralysed by ambiguity rather than lack of information. This informed the core design decision: Lakshya shows you three specific things to do next, not fifty options.\n\nThe IA was restructured around a three-step flow: profile your skills → explore matched roles → get your roadmap. Node-based career trajectory maps were prototyped in Figma and tested across two rounds before the final visual language was locked." },
            { type: "grid", title: "Design Process", items: [
                { label: "01. Information Architecture", text: "Three-step progressive disclosure: profile → explore → roadmap. No overwhelming dashboards." },
                { label: "02. Visualisations", text: "Interactive node-based career maps in Figma, tested with users before implementation." },
                { label: "03. Prototyping", text: "Two rounds of usability testing on the skill gap dashboard before handoff to development." }
            ]},
            { type: "image", url: showcaseAsset("lakshya.jpg"), caption: "Career pathway visualisation and skill gap dashboard." },
            { type: "text", title: "Measurable Outcomes", content: "Delivered a high-fidelity prototype and working React frontend to T-Hub on schedule. Usability testing with 8 participants showed a marked increase in confidence about next steps after using Lakshya — users reported feeling 'clearer about what to do first' compared to control sessions with job boards. The architecture was designed for AI integration: the skill-gap engine is structured as an API layer, making it straightforward to connect an LLM for personalised learning recommendations in a future release." }
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
        coverImage: showcaseAsset("indian-cook.jpg"),
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
            { type: "image", url: showcaseAsset("indian-cook.jpg"), caption: "Design system exploration and cooking mode UI iterations." },
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
        coverImage: showcaseAsset("speech.jpg"),
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
            { type: "image", url: showcaseAsset("speech.jpg"), caption: "Application flow diagram and interface design." },
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
        coverImage: showcaseAsset("blog.jpg"),
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
            { type: "image", url: showcaseAsset("blog.jpg"), caption: "Typography scale and layout explorations." },
            { type: "text", title: "Measurable Outcomes", content: "Achieved near-perfect Lighthouse scores (Performance, Accessibility, SEO). The template provides a seamless authoring experience, allowing new posts to be published simply by adding a Markdown file, drastically reducing publication friction." }
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
        coverImage: showcaseAsset("project-manager.jpg"),
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
            { type: "image", url: showcaseAsset("project-manager.jpg"), caption: "Initial layout sketches and state management flow." },
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
        coverImage: showcaseAsset("content-manager.jpg"),
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
            { type: "image", url: showcaseAsset("content-manager.jpg"), caption: "Dark mode color palette exploration and card layouts." },
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
        coverImage: showcaseAsset("weather.jpg"),
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
            { type: "image", url: showcaseAsset("weather.jpg"), caption: "Terminal output formatting and architecture planning." },
            { type: "text", title: "Measurable Outcomes", content: "Successfully delivered a robust CLI tool handling network errors gracefully. The project cemented foundational skills in REST API consumption, JSON parsing, and Python scripting." }
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
        coverImage: showcaseAsset("aesthetic-1.jpg"),
        liveUrl: "https://aniketh703.github.io/2026-AESTHETIC-SYNTHESIS-FIELD-GUIDE/",
        liveLabel: "Open Live Guide",
        repoUrl: "https://github.com/aniketh703/one",
        repoLabel: "View Repository",
        modules: [
            { type: "intro", content: "A digital field guide translating future design trend research into an immersive web experience. Built to make aesthetic movements accessible, explorable, and experiential for designers and curious creators." },
            { type: "text", title: "The Problem & User Needs", content: "Design trends and aesthetic research are typically presented in static, uninspiring slide decks. This interactive field guide turns those ideas into a scrollable, systemized experience with distinct visual chapters." },
            { type: "grid", title: "Role & Contributions", items: [
                { label: "Role", text: "Web Developer & Creative Coder" },
                { label: "Responsibilities", text: "Translating static research into an interactive, performant web experience. Handling typography, layout, and deployment." },
                { label: "Collaboration", text: "Visual execution based on research foundation by Ioana Adriana Teleanu." }
            ]},
            { type: "text", title: "Research Methods", content: "Curated research on upcoming visual movements like Code Brutalism, Tech-Organic, Frutiger Aero, Heisei Retro, and Pixel Perfect. Analyzed how interaction design can reflect these specific aesthetic philosophies." },
            { type: "grid", title: "Design Process", items: [
                { label: "01. Visual Translation", text: "Designed interface metaphors matching the trends (e.g., terminal aesthetics for 'Technical Mono')." },
                { label: "02. Interaction Design", text: "Implemented scroll-based triggers and hover states that feel tactile and futuristic." },
                { label: "03. Performance", text: "Optimized a single-page HTML architecture for immediate loading on GitHub Pages." }
            ]},
            { type: "image", url: showcaseAsset("aesthetic-2.jpg"), caption: "Key chapter illustration." },
            { type: "text", title: "Measurable Outcomes", content: "Successfully deployed a highly engaging interactive artifact. The final field guide demonstrates how abstract design research can be translated into a tactile, scroll-driven web experience." }
        ]
    },

    {
        id: 13,
        title: "Water Conservation Website",
        category: "Web Design",
        type: 'design',
        year: "2024",
        span: "col-span-1 md:col-span-1 row-span-1",
        description: "Commercial website design focused on water conservation awareness and conversion-driven storytelling.",
        details: ["UI/UX", "Web Design", "Behance"],
        color: "#1F6FEB",
        coverImage: "https://mir-s3-cdn-cf.behance.net/projects/808/3c102b203475023.Y3JvcCwxNDQwLDExMjYsMCww.jpg",
        liveUrl: "https://www.behance.net/gallery/203475023/Water-conservation-Website-Commercial-project",
        liveLabel: "View on Behance",
        modules: [
            { type: "intro", content: "A commercial awareness website designed to make water conservation feel urgent, local, and actionable through focused storytelling and clear conversion paths." },
            { type: "text", title: "The Problem", content: "Environmental campaigns often struggle with low engagement because content is text-heavy and the call-to-action appears too late. The brief required a website that could educate quickly while still driving measurable action." },
            { type: "grid", title: "Role & Scope", items: [
                { label: "Role", text: "UI/UX Designer" },
                { label: "Scope", text: "Page structure, visual hierarchy, CTA strategy, and responsive layout." },
                { label: "Project Type", text: "Commercial Behance case study." }
            ]},
            { type: "grid", title: "Design Decisions", items: [
                { label: "01. Narrative", text: "Used a problem-to-solution section flow to move users from awareness to commitment." },
                { label: "02. Visual Language", text: "Built the interface around cool blues and high-contrast typography to signal trust and clarity." },
                { label: "03. Conversion", text: "Placed compact CTA blocks at multiple points to reduce dependency on one final action area." }
            ]},
            { type: "metrics", items: [
                { value: "3", unit: "sec", label: "Message clarity target" },
                { value: "4", unit: "x", label: "Primary CTA placements" },
                { value: "1", unit: "flow", label: "Single-page narrative" }
            ]},
            { type: "image", url: "https://mir-s3-cdn-cf.behance.net/projects/808/3c102b203475023.Y3JvcCwxNDQwLDExMjYsMCww.jpg", caption: "Hero and conversion-oriented page composition." },
            { type: "text", title: "Outcome", content: "The final design balances campaign storytelling with practical user action, presenting conservation information in a format that is fast to scan and easy to act on." }
        ]
    },

    {
        id: 14,
        title: "Tribute to ATARI 2600",
        category: "Product Design",
        type: 'creative',
        year: "2024",
        span: "col-span-1 md:col-span-1 row-span-1",
        description: "Personal concept project celebrating retro gaming culture through interface and visual design.",
        details: ["Visual Design", "Product Design", "Behance"],
        color: "#FF7A18",
        coverImage: "https://mir-s3-cdn-cf.behance.net/projects/808/56a753203461807.Y3JvcCwxNDAwLDEwOTUsMCwyNw.jpg",
        liveUrl: "https://www.behance.net/gallery/203461807/Tribute-to-ATARI-2600-Personal-project",
        liveLabel: "View on Behance",
        modules: [
            { type: "intro", content: "A retro-inspired concept celebrating the ATARI 2600 through bold typography, nostalgic color systems, and modern layout discipline." },
            { type: "text", title: "Creative Objective", content: "The challenge was to reference vintage gaming aesthetics without making the experience feel outdated or difficult to read on modern screens." },
            { type: "grid", title: "Role & Contributions", items: [
                { label: "Role", text: "Visual Designer" },
                { label: "Focus", text: "Art direction, composition, and nostalgia-driven interaction concepts." },
                { label: "Context", text: "Personal experimental project." }
            ]},
            { type: "grid", title: "Design Approach", items: [
                { label: "01. Era Cues", text: "Used geometric forms and era-authentic palette references to establish immediate context." },
                { label: "02. Modern Readability", text: "Applied larger spacing and tighter hierarchy rules to keep content legible." },
                { label: "03. Detail Layer", text: "Added subtle texture and display elements inspired by CRT-era visuals." }
            ]},
            { type: "quote", content: "Nostalgia works best when emotion leads and usability keeps pace." },
            { type: "image", url: "https://mir-s3-cdn-cf.behance.net/projects/808/56a753203461807.Y3JvcCwxNDAwLDEwOTUsMCwyNw.jpg", caption: "Retro visual language with modern structure." },
            { type: "text", title: "Outcome", content: "The concept demonstrates how legacy cultural references can be translated into contemporary product visuals without sacrificing clarity." }
        ]
    },

    {
        id: 15,
        title: "Weather App",
        category: "UI/UX",
        type: 'design',
        year: "2024",
        span: "col-span-1 md:col-span-1 row-span-1",
        description: "Personal weather application interface exploring clean data visualization and mobile-first UX.",
        details: ["UI/UX", "App Design", "Behance"],
        color: "#0EA5E9",
        coverImage: "https://mir-s3-cdn-cf.behance.net/projects/808/045554203433929.Y3JvcCwxNDQwLDExMjYsMCww.png",
        liveUrl: "https://www.behance.net/gallery/203433929/Weather-app-Personal-project",
        liveLabel: "View on Behance",
        modules: [
            { type: "intro", content: "A clean weather app interface focused on quick comprehension, minimal friction, and mobile-first information hierarchy." },
            { type: "text", title: "The Problem", content: "Weather apps often overload users with low-priority data. This concept aimed to show essential context first, then progressively reveal detailed metrics." },
            { type: "grid", title: "Core UX Priorities", items: [
                { label: "Priority 1", text: "Instant visibility of temperature, condition, and location." },
                { label: "Priority 2", text: "Simple daily forecast scanning." },
                { label: "Priority 3", text: "Reduced visual noise for routine checks." }
            ]},
            { type: "grid", title: "Design System Decisions", items: [
                { label: "01. Layout", text: "Established a clear top-to-bottom hierarchy from now to next." },
                { label: "02. Color", text: "Used atmospheric gradients and neutral cards to support readability." },
                { label: "03. Components", text: "Designed reusable forecast blocks and metric chips for scalability." }
            ]},
            { type: "metrics", items: [
                { value: "1", unit: "tap", label: "Primary weather access" },
                { value: "7", unit: "day", label: "Forecast overview" },
                { value: "3", unit: "tiers", label: "Information hierarchy" }
            ]},
            { type: "image", url: "https://mir-s3-cdn-cf.behance.net/projects/808/045554203433929.Y3JvcCwxNDQwLDExMjYsMCww.png", caption: "Mobile-first weather dashboard concept." },
            { type: "text", title: "Outcome", content: "The final interface keeps daily weather checks fast while still supporting deeper planning with a structured, low-clutter layout." }
        ]
    },

    {
        id: 16,
        title: "Blog Pages Web Application",
        category: "Web Design",
        type: 'design',
        year: "2024",
        span: "col-span-1 md:col-span-1 row-span-1",
        description: "Commercial blog page design system with structured content hierarchy and editorial layout.",
        details: ["Web Design", "UI/UX", "Behance"],
        color: "#14B8A6",
        coverImage: "https://mir-s3-cdn-cf.behance.net/projects/808/c5e6ca203406285.Y3JvcCwxNDQwLDExMjYsMCww.png",
        liveUrl: "https://www.behance.net/gallery/203406285/Blog-Pages-Web-Application-Commercial-Project",
        liveLabel: "View on Behance",
        modules: [
            { type: "intro", content: "A commercial blog page design focused on editorial readability, content discoverability, and scalable component patterns." },
            { type: "text", title: "Design Goal", content: "Create a content platform layout that supports both frequent readers and first-time visitors without overwhelming either audience." },
            { type: "grid", title: "Role & Scope", items: [
                { label: "Role", text: "Web/UI Designer" },
                { label: "Scope", text: "Article templates, listing pages, spacing system, and responsive behavior." },
                { label: "Type", text: "Commercial project." }
            ]},
            { type: "grid", title: "Information Architecture", items: [
                { label: "01. Listing Logic", text: "Balanced featured content with recency-driven lists." },
                { label: "02. Reading Layout", text: "Used generous line-height and rhythm-based spacing for long-form comfort." },
                { label: "03. Reusability", text: "Componentized card, author, and tag patterns for easy content scaling." }
            ]},
            { type: "image", url: "https://mir-s3-cdn-cf.behance.net/projects/808/c5e6ca203406285.Y3JvcCwxNDQwLDExMjYsMCww.png", caption: "Editorial page layout and content blocks." },
            { type: "text", title: "Outcome", content: "The resulting UI provides a structured reading experience that works across article-heavy pages while keeping the design system consistent." }
        ]
    },

    {
        id: 18,
        title: "World Cancer Day Campaign",
        category: "Campaign Design",
        type: 'creative',
        year: "2024",
        span: "col-span-1 md:col-span-1 row-span-1",
        description: "Paper cup sleeve and social campaign assets designed for World Cancer Day awareness.",
        details: ["Campaign", "Branding", "Behance"],
        color: "#EF4444",
        coverImage: "https://mir-s3-cdn-cf.behance.net/projects/808/e33b07218427073.Y3JvcCw0NjAyLDM2MDAsMCww.png",
        liveUrl: "https://www.behance.net/gallery/218427073/World-Cancer-Day-Paper-Cup-Sleeve-design-socials",
        liveLabel: "View on Behance",
        modules: [
            { type: "intro", content: "A cross-format awareness campaign for World Cancer Day spanning paper cup sleeves and social content touchpoints." },
            { type: "text", title: "Challenge", content: "Campaign assets needed to communicate empathy and urgency in limited physical and digital space while staying visually consistent across mediums." },
            { type: "grid", title: "Role & Deliverables", items: [
                { label: "Role", text: "Campaign Visual Designer" },
                { label: "Deliverables", text: "Cup sleeve artwork, social creatives, and adaptation layouts." },
                { label: "Goal", text: "High awareness with clear emotional resonance." }
            ]},
            { type: "grid", title: "Execution", items: [
                { label: "01. Message Framing", text: "Simplified copy to short, memorable statements for quick recall." },
                { label: "02. Visual Cohesion", text: "Used a unified color and type language across print and social formats." },
                { label: "03. Adaptation", text: "Designed modular compositions to support multiple platform sizes." }
            ]},
            { type: "quote", content: "Awareness design works when people remember the message after the medium is gone." },
            { type: "image", url: "https://mir-s3-cdn-cf.behance.net/projects/808/e33b07218427073.Y3JvcCw0NjAyLDM2MDAsMCww.png", caption: "Campaign assets across physical and digital channels." },
            { type: "text", title: "Outcome", content: "The campaign system maintained consistency across touchpoints while preserving the emotional tone required for a public-health awareness initiative." }
        ]
    },

    {
        id: 19,
        title: "Under 25 ID Card",
        category: "Identity Design",
        type: 'creative',
        year: "2024",
        span: "col-span-1 md:col-span-1 row-span-1",
        description: "Event identity card concept focused on readability, hierarchy, and youth-centric visual language.",
        details: ["Identity", "Visual Design", "Behance"],
        color: "#F59E0B",
        coverImage: "https://mir-s3-cdn-cf.behance.net/projects/808/da803e216405365.Y3JvcCw1NTIzLDQzMjAsMTIzLDA.png",
        liveUrl: "https://www.behance.net/gallery/216405365/Under-25-id-card",
        liveLabel: "View on Behance",
        modules: [
            { type: "intro", content: "An identity card design for Under 25 emphasizing clarity, fast verification, and event-brand personality." },
            { type: "text", title: "Design Constraint", content: "ID cards must remain highly readable at a glance while carrying enough branding to feel premium in an event context." },
            { type: "grid", title: "Role & Focus", items: [
                { label: "Role", text: "Identity Designer" },
                { label: "Focus", text: "Hierarchy, typography, contrast, and practical print behavior." },
                { label: "Context", text: "Youth event identity touchpoint." }
            ]},
            { type: "grid", title: "System Decisions", items: [
                { label: "01. Hierarchy", text: "Prioritized name, role, and key identifiers for distance readability." },
                { label: "02. Visual Markers", text: "Introduced clear zones for branding and access classification." },
                { label: "03. Practicality", text: "Balanced decorative style with print-safe spacing and contrast." }
            ]},
            { type: "metrics", items: [
                { value: "3", unit: "zones", label: "Information blocks" },
                { value: "1", unit: "sec", label: "Scan-read intent" },
                { value: "2", unit: "modes", label: "Brand + utility balance" }
            ]},
            { type: "image", url: "https://mir-s3-cdn-cf.behance.net/projects/808/da803e216405365.Y3JvcCw1NTIzLDQzMjAsMTIzLDA.png", caption: "Identity card concept with clear hierarchy and branding." },
            { type: "text", title: "Outcome", content: "The final card system communicates identity and event branding clearly, supporting both operational use and visual consistency." }
        ]
    },
];
