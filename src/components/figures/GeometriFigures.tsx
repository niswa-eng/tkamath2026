import React from 'react';
import MathRenderer from '../../utils/MathRenderer';

export const Soal16IntersectingLines: React.FC = () => {
  return (
    <div className="my-4 p-4 bg-white border border-slate-200 rounded-xl max-w-md mx-auto shadow-xs">
      <div className="flex justify-center">
        <svg viewBox="0 0 320 160" className="w-full max-w-[300px] h-auto">
          {/* Line AB */}
          <line x1="30" y1="110" x2="290" y2="110" stroke="#0f172a" strokeWidth="2.5" markerEnd="url(#arr-line)" markerStart="url(#arr-line-rev)" />
          {/* Ray QP */}
          <line x1="150" y1="110" x2="105" y2="25" stroke="#0f172a" strokeWidth="2.5" markerEnd="url(#arr-line)" />

          <defs>
            <marker id="arr-line" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,1 L6,3 L0,5 Z" fill="#0f172a" />
            </marker>
            <marker id="arr-line-rev" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto">
              <path d="M6,1 L0,3 L6,5 Z" fill="#0f172a" />
            </marker>
          </defs>

          {/* Points labels */}
          <text x="35" y="132" fontSize="13" fontWeight="bold" fill="#0f172a">A</text>
          <text x="150" y="132" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">Q</text>
          <text x="280" y="132" fontSize="13" fontWeight="bold" fill="#0f172a">B</text>
          <text x="96" y="22" fontSize="13" fontWeight="bold" fill="#0f172a">P</text>

          {/* Angle arcs */}
          {/* 72 deg arc on left */}
          <path d="M 125,110 A 25 25 0 0 1 142,88" fill="none" stroke="#2563eb" strokeWidth="1.5" />
          <text x="110" y="98" fontSize="11" fontWeight="bold" fill="#1d4ed8">72°</text>

          {/* (4x + 12) deg arc on right */}
          <path d="M 142,88 A 25 25 0 0 1 175,110" fill="none" stroke="#ea580c" strokeWidth="1.5" />
          <text x="178" y="98" fontSize="11" fontWeight="bold" fill="#c2410c">(4x + 12)°</text>
        </svg>
      </div>
      <div className="text-center text-xs text-slate-500 mt-1">
        <MathRenderer content="Garis lurus $AB$ membentuk sudut berpelurus ($180^\circ$) di titik $Q$." inline={true} />
      </div>
    </div>
  );
};

export const Soal17PrismNet: React.FC = () => {
  return (
    <div className="my-4 p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-md mx-auto shadow-xs">
      <div className="text-center font-bold text-xs text-slate-700 mb-2">
        Jaring-Jaring Prisma Segitiga
      </div>
      <div className="flex justify-center">
        <svg viewBox="0 0 340 320" className="w-full max-w-[280px] h-auto">
          {/* Face 4: Green rectangle */}
          <polygon
            points="60,60 145,40 168,130 83,150"
            fill="#22c55e"
            stroke="#15803d"
            strokeWidth="1.5"
          />
          <circle cx="114" cy="95" r="9" fill="#ffffff" />
          <text x="114" y="99" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#15803d">4</text>

          {/* Face 2: Golden triangle (base) */}
          <polygon
            points="83,150 168,130 130,185"
            fill="#d97706"
            stroke="#92400e"
            strokeWidth="1.5"
          />
          <circle cx="127" cy="155" r="9" fill="#ffffff" />
          <text x="127" y="159" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">2</text>

          {/* Face 3: Dark blue rectangle */}
          <polygon
            points="83,150 130,185 75,260 28,225"
            fill="#1e40af"
            stroke="#1e3a8a"
            strokeWidth="1.5"
          />
          <circle cx="79" cy="205" r="9" fill="#ffffff" />
          <text x="79" y="209" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e3a8a">3</text>

          {/* Face 1: Pink rectangle */}
          <polygon
            points="168,130 250,185 210,240 130,185"
            fill="#ec4899"
            stroke="#be185d"
            strokeWidth="1.5"
          />
          <circle cx="189" cy="185" r="9" fill="#ffffff" />
          <text x="189" y="189" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#be185d">1</text>

          {/* Top Triangle ABC: Orange triangle attached to face 1 */}
          <polygon
            points="210,240 250,185 265,270"
            fill="#f97316"
            stroke="#c2410c"
            strokeWidth="1.5"
          />

          {/* Labels A, B, C */}
          <text x="202" y="245" fontSize="12" fontWeight="bold" fill="#0f172a">A</text>
          <text x="254" y="184" fontSize="12" fontWeight="bold" fill="#0f172a">B</text>
          <text x="270" y="280" fontSize="12" fontWeight="bold" fill="#0f172a">C</text>
        </svg>
      </div>
      <div className="text-[11px] text-slate-600 text-center mt-1">
        <MathRenderer content="Sisi ② adalah alas, $ABC$ adalah tutup. Rusuk $AC$ akan merapat ke rusuk sisi ③." inline={true} />
      </div>
    </div>
  );
};

export const Soal18ParallelTriangle: React.FC = () => {
  return (
    <div className="my-4 p-4 bg-white border border-slate-200 rounded-xl max-w-md mx-auto shadow-xs">
      <div className="flex justify-center">
        <svg viewBox="0 0 320 220" className="w-full max-w-[300px] h-auto">
          {/* Main Triangle */}
          <polygon
            points="50,60 270,75 110,180"
            fill="none"
            stroke="#0f172a"
            strokeWidth="2"
          />

          {/* Angle 68° at vertex (50, 60) */}
          <text x="65" y="75" fontSize="11" fontWeight="bold" fill="#0f172a">68°</text>

          {/* Line p */}
          <line x1="30" y1="120" x2="250" y2="35" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#par-arr)" />
          {/* Line q */}
          <line x1="45" y1="170" x2="280" y2="78" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#par-arr)" />

          <defs>
            <marker id="par-arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,1 L6,3 L0,5 Z" fill="#0f172a" />
            </marker>
          </defs>

          {/* Line names p and q */}
          <text x="45" y="115" fontSize="12" fontWeight="bold" fill="#0f172a">p</text>
          <text x="60" y="175" fontSize="12" fontWeight="bold" fill="#0f172a">q</text>

          {/* Parallel arrow markers on lines */}
          <path d="M 120,87 L 125,85 L 120,83" fill="none" stroke="#0f172a" strokeWidth="1.5" />
          <path d="M 150,133 L 155,131 L 150,129" fill="none" stroke="#0f172a" strokeWidth="1.5" />

          {/* Angles: b° and 46° */}
          <text x="110" y="76" fontSize="11" fontWeight="bold" fill="#2563eb">b°</text>
          <text x="215" y="74" fontSize="11" fontWeight="bold" fill="#dc2626">46°</text>
        </svg>
      </div>
      <div className="text-center text-xs text-slate-500 mt-1">
        <MathRenderer content="Garis $p$ sejajar dengan garis $q$. Sudut $46^\circ$ sehadap dengan sudut $b^\circ$." inline={true} />
      </div>
    </div>
  );
};

export const Soal19Stairs: React.FC = () => {
  return (
    <div className="my-4 p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-lg mx-auto shadow-xs">
      <div className="text-center font-bold text-xs text-slate-800 mb-2">
        Rancangan Tangga dan Pagar Pengaman
      </div>
      <div className="flex justify-center">
        <svg viewBox="0 0 360 220" className="w-full max-w-[340px] h-auto">
          {/* Base ground */}
          <line x1="40" y1="190" x2="300" y2="190" stroke="#94a3b8" strokeWidth="2" />

          {/* 8 Steps */}
          {/* Total width 150cm (px ~180px), height 200cm (px ~140px) */}
          {/* Step points: i from 0 to 7 */}
          {(() => {
            const steps = [];
            const stepW = 20;
            const stepH = 17;
            const startX = 60;
            const startY = 190;

            for (let i = 0; i < 8; i++) {
              const x = startX + i * stepW;
              const y = startY - i * stepH;
              steps.push(
                <g key={i}>
                  {/* Step riser & tread */}
                  <rect x={x} y={y - stepH} width={stepW} height={stepH} fill="#f43f5e" opacity="0.8" stroke="#881337" strokeWidth="1" />
                  <rect x={x} y={y - stepH} width={stepW + 15} height={4} fill="#fb7185" />
                </g>
              );
            }
            return steps;
          })()}

          {/* Railing posts and dotted handrail line */}
          {/* Left post */}
          <line x1="60" y1="190" x2="60" y2="135" stroke="#eab308" strokeWidth="4" />
          {/* Right post */}
          <line x1="220" y1="54" x2="220" y2="0" stroke="#eab308" strokeWidth="4" />

          {/* Handrail dashed lines (both sides) */}
          <line x1="60" y1="135" x2="220" y2="0" stroke="#0f172a" strokeWidth="3" strokeDasharray="6 4" />
          <line x1="75" y1="148" x2="235" y2="13" stroke="#0f172a" strokeWidth="2" strokeDasharray="4 3" opacity="0.6" />

          {/* Dimension arrows */}
          {/* Horizontal width = 150 cm */}
          <line x1="60" y1="205" x2="220" y2="205" stroke="#334155" strokeWidth="1.5" markerStart="url(#dim-l)" markerEnd="url(#dim-r)" />
          <text x="140" y="217" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">150 cm</text>

          {/* Vertical height = 200 cm (8 x 25 cm) */}
          <line x1="250" y1="190" x2="250" y2="54" stroke="#334155" strokeWidth="1.5" markerStart="url(#dim-u)" markerEnd="url(#dim-d)" />
          <text x="295" y="125" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">8 × 25 cm</text>
          <text x="295" y="140" textAnchor="middle" fontSize="11" fontWeight="extrabold" fill="#2563eb">= 200 cm</text>

          <defs>
            <marker id="dim-r" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,1 L6,3 L0,5 Z" fill="#334155" />
            </marker>
            <marker id="dim-l" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto">
              <path d="M6,1 L0,3 L6,5 Z" fill="#334155" />
            </marker>
            <marker id="dim-u" markerWidth="6" markerHeight="6" refX="3" refY="1" orient="auto">
              <path d="M1,6 L3,0 L5,6 Z" fill="#334155" />
            </marker>
            <marker id="dim-d" markerWidth="6" markerHeight="6" refX="3" refY="5" orient="auto">
              <path d="M1,0 L3,6 L5,0 Z" fill="#334155" />
            </marker>
          </defs>
        </svg>
      </div>
      <div className="text-[11px] text-slate-600 text-center mt-2">
        Panjang miring 1 pagar = √(150² + 200²) = 250 cm = 2,5 m. Dibutuhkan 2 pagar (kiri & kanan) = 5 m.
      </div>
    </div>
  );
};

export const Soal20CartesianTranslation: React.FC = () => {
  return (
    <div className="my-4 p-4 bg-white border border-slate-200 rounded-xl max-w-lg mx-auto shadow-xs">
      <div className="flex justify-center">
        <svg viewBox="0 0 340 240" className="w-full max-w-[320px] h-auto border border-slate-200 rounded-lg">
          {/* Grid lines (-8 to 6, Y: -1 to 9). Center X=160, Y=180. 1 unit = 18px */}
          {[...Array(16)].map((_, i) => {
            const x = 16 + i * 18;
            return <line key={`gx-${i}`} x1={x} y1="10" x2={x} y2="220" stroke="#f1f5f9" strokeWidth="1" />;
          })}
          {[...Array(12)].map((_, i) => {
            const y = 10 + i * 18;
            return <line key={`gy-${i}`} x1="16" y1={y} x2="300" y2={y} stroke="#f1f5f9" strokeWidth="1" />;
          })}

          {/* Axes */}
          {/* X axis at y = 0 -> 180 */}
          <line x1="16" y1="180" x2="300" y2="180" stroke="#475569" strokeWidth="1.5" />
          {/* Y axis at x = 0 -> 160 */}
          <line x1="160" y1="10" x2="160" y2="220" stroke="#475569" strokeWidth="1.5" />

          {/* Triangle PQR: P(-6, 9), Q(0, 7), R(-3, 4)
              x_px = 160 + x * 18
              y_px = 180 - y * 18
              P: 160 + (-6)*18 = 52, 180 - 9*18 = 18
              Q: 160 + 0 = 160, 180 - 7*18 = 54
              R: 160 + (-3)*18 = 106, 180 - 4*18 = 108
          */}
          <polygon
            points="52,18 160,54 106,108"
            fill="#ffedd5"
            stroke="#c2410c"
            strokeWidth="1.5"
          />
          <circle cx="52" cy="18" r="3.5" fill="#0284c7" />
          <circle cx="160" cy="54" r="3.5" fill="#0284c7" />
          <circle cx="106" cy="108" r="3.5" fill="#0284c7" />

          <text x="44" y="16" fontSize="10" fontWeight="bold" fill="#0f172a">P(-6,9)</text>
          <text x="166" y="52" fontSize="10" fontWeight="bold" fill="#0f172a">Q=K(0,7)</text>
          <text x="96" y="122" fontSize="10" fontWeight="bold" fill="#0f172a">R(-3,4)</text>

          {/* Triangle KLM: K(0, 7), L(6, 5), M(3, 2)
              K: 160, 54
              L: 160 + 6*18 = 268, 180 - 5*18 = 90
              M: 160 + 3*18 = 214, 180 - 2*18 = 144
          */}
          <polygon
            points="160,54 268,90 214,144"
            fill="#fef3c7"
            stroke="#b45309"
            strokeWidth="1.5"
          />
          <circle cx="268" cy="90" r="3.5" fill="#0284c7" />
          <circle cx="214" cy="144" r="3.5" fill="#0284c7" />

          <text x="272" y="92" fontSize="10" fontWeight="bold" fill="#0f172a">L(6,5)</text>
          <text x="216" y="156" fontSize="10" fontWeight="bold" fill="#0f172a">M(3,2)</text>
        </svg>
      </div>
      <div className="text-[11px] text-slate-500 text-center mt-2">
        <MathRenderer content="Translasi $T = (-4, -2)$ menggeser bangun tanpa mengubah orientasi sisi (sisi-sisi tetap sejajar)." inline={true} />
      </div>
    </div>
  );
};

export const Soal21CircleSectors: React.FC = () => {
  return (
    <div className="my-4 p-4 bg-white border border-slate-200 rounded-xl max-w-md mx-auto shadow-xs">
      <div className="flex justify-center">
        <svg viewBox="0 0 260 260" className="w-full max-w-[240px] h-auto">
          {/* Circle outline: center at 130, 130, radius 90 */}
          <circle cx="130" cy="130" r="90" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />

          {/* Sector B: 90 deg (from up to right) -> angle -90 to 0 deg */}
          {/* Path: center (130,130) -> up (130, 40) -> arc to right (220, 130) -> center */}
          <path d="M 130,130 L 130,40 A 90 90 0 0 1 220,130 Z" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1" />
          <text x="175" y="85" fontSize="16" fontWeight="black" fill="#ffffff">B</text>
          {/* Right angle symbol */}
          <rect x="130" y="115" width="15" height="15" fill="none" stroke="#ffffff" strokeWidth="1.5" />

          {/* Sector A: 70 deg (from left (40, 130) up 70 deg)
              Angle from -180 deg to -110 deg
              Point at -110 deg: x = 130 + 90*cos(-110°) = 130 + 90*(-0.342) = 99.2
              y = 130 + 90*sin(-110°) = 130 - 90*0.9397 = 45.4
          */}
          <path d="M 130,130 L 40,130 A 90 90 0 0 1 99.2,45.4 Z" fill="#b45309" stroke="#78350f" strokeWidth="1" />
          <text x="85" y="90" fontSize="16" fontWeight="black" fill="#ffffff">A</text>
          <text x="110" y="118" fontSize="10" fontWeight="bold" fill="#ffffff">70°</text>

          {/* Sector C: 35 deg (from left (40, 130) down 35 deg)
              Angle from -180 deg to -215 deg (or 145 deg)
              Point at 145 deg: x = 130 + 90*cos(145°) = 130 - 90*0.819 = 56.3
              y = 130 + 90*sin(145°) = 130 + 90*0.5736 = 181.6
          */}
          <path d="M 130,130 L 40,130 A 90 90 0 0 0 56.3,181.6 Z" fill="#86efac" stroke="#16a34a" strokeWidth="1" />
          <text x="85" y="155" fontSize="16" fontWeight="black" fill="#14532d">C</text>
          <text x="110" y="142" fontSize="10" fontWeight="bold" fill="#14532d">35°</text>

          {/* Vertical measure line 14 cm */}
          <line x1="130" y1="130" x2="130" y2="220" stroke="#0f172a" strokeWidth="1.5" />
          <line x1="135" y1="130" x2="135" y2="220" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
          <text x="145" y="180" fontSize="11" fontWeight="bold" fill="#0f172a">14 cm</text>
        </svg>
      </div>
      <div className="text-center text-xs text-slate-600 mt-1">
        Perbandingan luas: Luas A : Luas B : Luas C = 70° : 90° : 35°.
      </div>
    </div>
  );
};

export const Soal22SimilarRectangles: React.FC = () => {
  return (
    <div className="my-4 p-4 bg-white border border-slate-200 rounded-xl max-w-md mx-auto shadow-xs">
      <div className="flex items-end justify-center gap-8 py-3">
        {/* Large rectangle: height 20 cm, width 16 cm (ratio 1.25) */}
        <div className="flex items-center gap-1.5">
          <div className="text-center">
            <span className="text-xs font-bold text-slate-700 block -rotate-90">20 cm</span>
          </div>
          <div className="w-28 h-36 bg-amber-400 border-2 border-amber-600 rounded-md shadow-xs flex flex-col items-center justify-center p-2 text-center">
            <span className="text-[11px] font-bold text-amber-950">Luas:</span>
            <span className="text-xs font-extrabold text-amber-950">320 cm²</span>
            <span className="text-[10px] text-amber-800 mt-2 font-mono">lebar = 16 cm</span>
          </div>
        </div>

        {/* Small rectangle: height 5 cm, width 4 cm */}
        <div className="flex items-center gap-1.5">
          <div className="text-center">
            <span className="text-xs font-bold text-slate-700 block -rotate-90">5 cm</span>
          </div>
          <div className="w-14 h-18 bg-amber-400 border-2 border-amber-600 rounded-md shadow-xs flex flex-col items-center justify-center p-1 text-center">
            <span className="text-[9px] font-bold text-amber-950">Sebangun</span>
            <span className="text-[8px] text-amber-800 font-mono">lebar = 4 cm</span>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 mt-1">
        Faktor skala kesebangunan: 5/20 = 1/4. Keliling = 2 × (5 + 4) = 18 cm.
      </div>
    </div>
  );
};

export const Soal23OilTanks: React.FC = () => {
  return (
    <div className="my-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        {/* Tangki A */}
        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs text-center flex flex-col items-center">
          <span className="font-extrabold text-xs text-slate-900 bg-slate-100 px-3 py-1 rounded-full border border-slate-300 mb-2">
            Tangki Jenis A (Hitam)
          </span>
          {/* IBC Tank Vector Graphic */}
          <svg viewBox="0 0 160 140" className="w-36 h-auto my-1">
            {/* Metal cage frame */}
            <rect x="20" y="20" width="120" height="100" rx="6" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
            {/* Grid lines of frame */}
            <line x1="50" y1="20" x2="50" y2="120" stroke="#64748b" strokeWidth="1.5" />
            <line x1="80" y1="20" x2="80" y2="120" stroke="#64748b" strokeWidth="1.5" />
            <line x1="110" y1="20" x2="110" y2="120" stroke="#64748b" strokeWidth="1.5" />
            <line x1="20" y1="50" x2="140" y2="50" stroke="#64748b" strokeWidth="1.5" />
            <line x1="20" y1="80" x2="140" y2="80" stroke="#64748b" strokeWidth="1.5" />
            <line x1="20" y1="110" x2="140" y2="110" stroke="#64748b" strokeWidth="1.5" />
            {/* Tank Cap */}
            <rect x="70" y="14" width="20" height="6" rx="2" fill="#ef4444" />
          </svg>
          <div className="text-xs font-bold text-slate-800 mt-2">Ukuran Tangki:</div>
          <div className="text-xs font-mono font-semibold text-slate-700">6 dm × 2 m × 0,8 m</div>
          <div className="text-[11px] text-blue-700 font-mono font-bold mt-0.5">
            = 6 × 20 × 8 = 960 Liter
          </div>
        </div>

        {/* Tangki B */}
        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs text-center flex flex-col items-center">
          <span className="font-extrabold text-xs text-slate-900 bg-slate-100 px-3 py-1 rounded-full border border-slate-300 mb-2">
            Tangki Jenis B (Putih)
          </span>
          {/* IBC Tank Vector Graphic */}
          <svg viewBox="0 0 160 140" className="w-40 h-auto my-1">
            <rect x="15" y="15" width="130" height="110" rx="6" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
            <line x1="47" y1="15" x2="47" y2="125" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="80" y1="15" x2="80" y2="125" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="113" y1="15" x2="113" y2="125" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="15" y1="50" x2="145" y2="50" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="15" y1="85" x2="145" y2="85" stroke="#94a3b8" strokeWidth="1.5" />
            <rect x="70" y="9" width="20" height="6" rx="2" fill="#ef4444" />
          </svg>
          <div className="text-xs font-bold text-slate-800 mt-2">Ukuran Tangki:</div>
          <div className="text-xs font-mono font-semibold text-slate-700">8 dm × 2,2 m × 1 m</div>
          <div className="text-[11px] text-blue-700 font-mono font-bold mt-0.5">
            = 8 × 22 × 10 = 1.760 Liter
          </div>
        </div>
      </div>
    </div>
  );
};
