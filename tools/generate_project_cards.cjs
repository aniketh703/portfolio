const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const cards = [
  {
    fileName: 'indian-cook.jpg',
    tag: 'CULINARY INTERFACE · SMART SEARCH',
    title: 'Indian Cook App',
    subtitle: 'Interactive pantry-based recipe discovery and distraction-free cooking mode.',
    tech: ['React 18', 'Vite', 'Tailwind CSS', 'Smart Search'],
    iconUrl: 'https://img.icons8.com/fluency/512/curry.png',
    bgGradient: 'radial-gradient(circle at 75% 50%, rgba(212, 116, 92, 0.28) 0%, rgba(28, 19, 16, 0.95) 70%, #120b09 100%)',
    accentColor: '#E27D60',
    borderGlow: 'rgba(212, 116, 92, 0.3)'
  },
  {
    fileName: 'speech.jpg',
    tag: 'SPEECH-TO-TEXT · AUDIO PIPELINE',
    title: 'Speech Transcription',
    subtitle: 'Automated media audio & video transcription engine with real-time waveform input.',
    tech: ['Python', 'Flask', 'Google Speech API', 'PyDub'],
    iconUrl: 'https://img.icons8.com/3d-fluency/512/microphone.png',
    bgGradient: 'radial-gradient(circle at 75% 50%, rgba(66, 133, 244, 0.28) 0%, rgba(10, 17, 40, 0.95) 70%, #060b18 100%)',
    accentColor: '#4285F4',
    borderGlow: 'rgba(66, 133, 244, 0.3)'
  },
  {
    fileName: 'blog.jpg',
    tag: 'EDITORIAL CMS · DEVELOPER PUBLICATION',
    title: 'Aniketh Blog',
    subtitle: 'High-performance Markdown publication engine with automated blurhash loading.',
    tech: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Markdown'],
    iconUrl: 'https://img.icons8.com/3d-fluency/512/blog.png',
    bgGradient: 'radial-gradient(circle at 75% 50%, rgba(255, 62, 0, 0.25) 0%, rgba(24, 17, 16, 0.95) 70%, #0e0a09 100%)',
    accentColor: '#FF5722',
    borderGlow: 'rgba(255, 62, 0, 0.3)'
  },
  {
    fileName: 'project-manager.jpg',
    tag: 'COLLABORATIVE WORKSPACE · SPRINT TRACKING',
    title: 'Project Manager',
    subtitle: 'Kanban sprint tracking dashboard with drag-and-drop workflows and real-time state.',
    tech: ['JavaScript', 'HTML5 / CSS3', 'Event Bus', 'LocalStorage'],
    iconUrl: 'https://img.icons8.com/3d-fluency/512/flow-chart.png',
    bgGradient: 'radial-gradient(circle at 75% 50%, rgba(108, 99, 255, 0.28) 0%, rgba(15, 14, 30, 0.95) 70%, #0a0914 100%)',
    accentColor: '#8C85FF',
    borderGlow: 'rgba(108, 99, 255, 0.3)'
  },
  {
    fileName: 'content-manager.jpg',
    tag: 'MEDIA CURATION · DIGITAL ASSETS',
    title: 'Content Manager',
    subtitle: 'Masonry multimedia curation dashboard with instant URL embeds and theme switching.',
    tech: ['CSS Custom Properties', 'HTML5', 'Local Storage API', 'Media Embeds'],
    iconUrl: 'https://img.icons8.com/3d-fluency/512/folder-invoices.png',
    bgGradient: 'radial-gradient(circle at 75% 50%, rgba(155, 89, 182, 0.28) 0%, rgba(20, 13, 27, 0.95) 70%, #0d0812 100%)',
    accentColor: '#BA68C8',
    borderGlow: 'rgba(155, 89, 182, 0.3)'
  },
  {
    fileName: 'weather.jpg',
    tag: 'CLI UTILITY · METEOROLOGICAL API',
    title: 'Weather Forecast CLI',
    subtitle: 'Command-line weather reports and multi-day meteorological forecasts via REST APIs.',
    tech: ['Python', 'REST API', 'JSON Schema', 'Terminal UX'],
    iconUrl: 'https://img.icons8.com/3d-fluency/512/partly-cloudy-day.png',
    bgGradient: 'radial-gradient(circle at 75% 50%, rgba(52, 152, 219, 0.28) 0%, rgba(9, 19, 29, 0.95) 70%, #060d14 100%)',
    accentColor: '#3498DB',
    borderGlow: 'rgba(52, 152, 219, 0.3)'
  },
  {
    fileName: 'diabetes-mlops.jpg',
    tag: 'PRODUCTION ML · EXPERIMENT TRACKING',
    title: 'Diabetes MLOps',
    subtitle: 'Production ML pipeline with automated data versioning, MLflow tracking, and FastAPI.',
    tech: ['Python', 'MLflow', 'DVC', 'FastAPI', 'Docker', 'Prefect'],
    iconUrl: 'https://img.icons8.com/3d-fluency/512/medical-doctor.png',
    bgGradient: 'radial-gradient(circle at 75% 50%, rgba(0, 172, 193, 0.28) 0%, rgba(6, 23, 27, 0.95) 70%, #041013 100%)',
    accentColor: '#00ACC1',
    borderGlow: 'rgba(0, 172, 193, 0.3)'
  },
  {
    fileName: 'human-ai-feedback.jpg',
    tag: 'HUMAN-IN-THE-LOOP · CONVERSATIONAL AI',
    title: 'Human-AI Feedback Loop',
    subtitle: 'Rasa chatbot platform with live agent escalation queue and continuous learning loop.',
    tech: ['Rasa NLU', 'React', 'Flask', 'SQLite', 'HITL Workflow'],
    iconUrl: 'https://img.icons8.com/3d-fluency/512/bot.png',
    bgGradient: 'radial-gradient(circle at 75% 50%, rgba(16, 185, 129, 0.28) 0%, rgba(7, 25, 20, 0.95) 70%, #04120f 100%)',
    accentColor: '#10B981',
    borderGlow: 'rgba(16, 185, 129, 0.3)'
  },
  {
    fileName: 'lakshya.jpg',
    tag: 'CAREER PLATFORM · SKILL MAPPING',
    title: 'Lakshya',
    subtitle: 'AI-driven career navigation platform mapping skills to multi-stage progression paths.',
    tech: ['TypeScript', 'React', 'Tailwind CSS'],
    iconUrl: 'https://img.icons8.com/3d-fluency/512/goal.png',
    bgGradient: 'radial-gradient(circle at 75% 50%, rgba(74, 144, 226, 0.28) 0%, rgba(9, 17, 31, 0.95) 70%, #060b14 100%)',
    accentColor: '#4A90E2',
    borderGlow: 'rgba(74, 144, 226, 0.3)'
  },
  {
    fileName: 'legal-contract.jpg',
    tag: 'LEGAL TECH & NLP · STATUTE RETRIEVAL',
    title: 'Legal Contract Analyzer',
    subtitle: 'Clause segmentation, risk classification, and Indian Contract Act 1872 FAISS/BM25 retrieval.',
    tech: ['Python', 'InLegalBERT', 'FAISS', 'BM25', 'Flask'],
    iconUrl: 'https://img.icons8.com/3d-fluency/512/law.png',
    bgGradient: 'radial-gradient(circle at 75% 50%, rgba(245, 158, 11, 0.25) 0%, rgba(11, 18, 32, 0.95) 70%, #070c16 100%)',
    accentColor: '#F59E0B',
    borderGlow: 'rgba(245, 158, 11, 0.3)'
  }
];

function generateHTML(card) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1200px;
      height: 800px;
      background-color: #0b0b0f;
      background: ${card.bgGradient};
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
    }
    .grid-overlay {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 48px 48px;
      mask-image: radial-gradient(circle at 50% 50%, black 40%, transparent 80%);
      pointer-events: none;
    }
    .card-frame {
      width: 1120px;
      height: 720px;
      background: rgba(18, 18, 24, 0.65);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 28px;
      padding: 64px 72px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      position: relative;
      box-shadow: 0 32px 64px -16px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.15);
    }
    .content {
      max-width: 620px;
      z-index: 2;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 9999px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid ${card.borderGlow};
      color: ${card.accentColor};
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 28px;
    }
    .badge-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${card.accentColor};
      box-shadow: 0 0 10px ${card.accentColor};
    }
    h1 {
      font-size: 54px;
      font-weight: 800;
      color: #ffffff;
      line-height: 1.1;
      letter-spacing: -0.025em;
      margin-bottom: 20px;
    }
    p.subtitle {
      font-size: 20px;
      line-height: 1.5;
      color: #a1a1aa;
      font-weight: 400;
      margin-bottom: 36px;
      letter-spacing: -0.01em;
    }
    .tech-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .tech-chip {
      padding: 6px 14px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 13px;
      color: #d4d4d8;
      font-weight: 500;
      letter-spacing: 0.02em;
    }
    .visual-wrapper {
      width: 380px;
      height: 380px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 2;
    }
    .visual-glow {
      position: absolute;
      width: 280px;
      height: 280px;
      background: ${card.accentColor};
      filter: blur(90px);
      opacity: 0.28;
      border-radius: 50%;
    }
    .visual-img {
      width: 320px;
      height: 320px;
      object-fit: contain;
      filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.5));
      position: relative;
      z-index: 3;
    }
    .signature {
      position: absolute;
      bottom: 28px;
      left: 72px;
      font-size: 12px;
      color: #71717a;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="grid-overlay"></div>
  <div class="card-frame">
    <div class="content">
      <div class="badge">
        <span class="badge-dot"></span>
        ${card.tag}
      </div>
      <h1>${card.title}</h1>
      <p class="subtitle">${card.subtitle}</p>
      <div class="tech-row">
        ${card.tech.map(t => `<span class="tech-chip">${t}</span>`).join('')}
      </div>
    </div>
    <div class="visual-wrapper">
      <div class="visual-glow"></div>
      <img class="visual-img" src="${card.iconUrl}" alt="${card.title}" />
    </div>
    <div class="signature">Aniketh Vustepalle · Portfolio</div>
  </div>
</body>
</html>
  `;
}

async function buildCards() {
  console.log('Launching Puppeteer browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 1 });

  const outputDir = path.resolve(__dirname, '../public/projects');

  const filter = process.argv[2];
  const targets = filter
    ? cards.filter(c => c.fileName === filter || c.title.toLowerCase() === filter.toLowerCase())
    : cards;

  for (const card of targets) {
    console.log(`Generating card for: ${card.title} -> ${card.fileName}`);
    const html = generateHTML(card);
    await page.setContent(html, { waitUntil: 'networkidle0' });
    const targetPath = path.join(outputDir, card.fileName);
    await page.screenshot({ path: targetPath, type: 'jpeg', quality: 95 });
    console.log(`Saved: ${targetPath}`);
  }

  await browser.close();
  console.log('All project cards generated successfully!');
}

buildCards().catch(console.error);
