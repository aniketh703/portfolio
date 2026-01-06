export const projects = [
  { 
    id: 1, 
    title: "NEURAL SYNTHESIS", 
    category: "Interface Design", 
    year: "2024", 
    span: "col-span-1 md:col-span-2 row-span-2", 
    description: "An exploration into AI-driven interfaces.", 
    details: ["React Native", "TensorFlow"], 
    color: "#FF4500",
    modules: [
        { type: "intro", content: "Redefining the interaction between human capability and artificial intelligence through adaptive interfaces." },
        { type: "text", title: "The Challenge", content: "Design a system that adapts to user intent real-time, reducing cognitive load during complex data analysis tasks." },
        { type: "grid", title: "UX Process", items: [
            { label: "01. Research", text: "Conducted user interviews with 15 data scientists to identify pain points in current dashboard workflows." },
            { label: "02. Ideation", text: "Sketched 50+ layout variations focusing on 'progressive disclosure' of AI insights." },
            { label: "03. Wireframing", text: "Low-fidelity wireframes established the core hierarchy before moving to high-fidelity prototyping." }
        ]},
        { type: "quote", content: "The interface shouldn't just display data; it should anticipate the question." },
        { type: "text", title: "Usability Testing", content: "Early testing revealed that users preferred a 'conversational' sidebar over static tooltips. This insight led to a 40% increase in task completion speed during the beta phase." },
        { type: "text", title: "Final Prototype", content: "The final high-fidelity interactive prototype demonstrates the adaptive layout engine, responding dynamically to the complexity of the dataset being analyzed." }
    ]
  },
  { 
    id: 2, 
    title: "VOID / FORM", 
    category: "Spatial Computing", 
    year: "2023", 
    span: "col-span-1 md:col-span-1 row-span-1", 
    description: "Architectural visualization for non-existent spaces.", 
    details: ["Three.js", "WebGL"], 
    color: "#2A2A2A", 
    modules: [
        { type: "intro", content: "A digital showroom for NullSpace." }, 
        { type: "quote", content: "Hallucinating a new reality." }, 
        { type: "grid", title: "Methodology", items: [{ label: "01. Raymarching", text: "SDFs for infinite resolution." }, { label: "02. Lighting", text: "Baked ambient occlusion." }, { label: "03. Interaction", text: "Gravity well cursor." }] }, 
        { type: "code", title: "GLSL", code: "float map(vec3 p) { return length(p) - 1.0; }" }, 
        { type: "text", title: "Optimization", content: "Dynamic resolution scaling." }
    ] 
  },
  { 
    id: 3, 
    title: "TYPOGRAPHIC REVOLT", 
    category: "Editorial Web", 
    year: "2024", 
    span: "col-span-1 md:col-span-1 row-span-2", 
    description: "A brutalist news aggregator.", 
    details: ["Next.js", "Tailwind"], 
    color: "#1a4ed1" 
  },
  { 
    id: 4, 
    title: "ECHO CHAMBER", 
    category: "Sonic Branding", 
    year: "2022", 
    span: "col-span-1 md:col-span-2 row-span-1", 
    description: "Visualizing sound waves.", 
    details: ["Processing", "p5.js"], 
    color: "#000000" 
  },
  { 
    id: 5, 
    title: "AESTHETIC NULL", 
    category: "Design Systems", 
    year: "2023", 
    span: "col-span-1 md:col-span-1 row-span-1", 
    description: "Anti-design system.", 
    details: ["Figma", "React"], 
    color: "#333333" 
  },
];
