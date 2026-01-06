import React from 'react';

const GenerativeArt = ({ id, color }) => {
  const shapes = [];
  for (let i = 0; i < 5; i++) shapes.push({ x: (id * 17 * (i + 1) + 12) % 100, y: (id * 23 * (i + 1) + 45) % 100, w: (id * 10 * (i + 1)) % 40 + 15, h: (id * 8 * (i + 1)) % 40 + 15, r: (id * i) % 2 === 0 ? 0 : 50 });
  return (
    <div className="w-full h-full overflow-hidden relative bg-stone-200/50 mix-blend-multiply">
      <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 opacity-80">
        {shapes.map((s, idx) => <rect key={idx} x={s.x} y={s.y} width={s.w} height={s.h} rx={s.r} fill={idx % 2 === 0 ? color : 'transparent'} stroke={color} strokeWidth="0.5" className="transition-all duration-700 ease-in-out transform group-hover:scale-110 group-hover:rotate-3" />)}
      </svg>
    </div>
  );
};

export default GenerativeArt;
