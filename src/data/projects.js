
export const projects = [
  { 
    id: 1, 
    title: "NEURAL SYNTHESIS", 
    category: "Interface Design", 
    year: "2024", 
    span: "col-span-1 md:col-span-2 row-span-2", 
    description: "An exploration into AI-driven interfaces.", 
    details: ["React Native", "TensorFlow"], 
    color: "#FF4500" 
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
