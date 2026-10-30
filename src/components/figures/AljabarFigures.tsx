import React from 'react';
import MathRenderer from '../../utils/MathRenderer';

export const Soal6Algebra: React.FC = () => (
  <div className="my-3 p-4 bg-purple-50/50 border border-purple-200 rounded-xl text-center">
    <div className="text-xs font-semibold text-purple-700 mb-2">Bentuk Aljabar:</div>
    <div className="text-xl md:text-2xl font-bold text-slate-800 bg-white py-3 px-6 rounded-lg inline-block border border-purple-100 shadow-xs">
      <MathRenderer content="$$2ab - b^2 + 3a^2 b + ab^2 - 5$$" inline={false} />
    </div>
  </div>
);

export const Soal7Arrows: React.FC = () => {
  return (
    <div className="my-4 p-3 bg-slate-50 border border-slate-200 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Diagram 1 */}
        <div className="bg-white border border-slate-200 rounded-lg p-2.5 flex flex-col items-center shadow-xs">
          <svg viewBox="0 0 160 180" className="w-full max-w-[150px] h-auto">
            {/* Ellipses */}
            <ellipse cx="40" cy="90" rx="30" ry="70" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <ellipse cx="120" cy="90" rx="30" ry="70" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <text x="40" y="32" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#78350f">A</text>
            <text x="120" y="32" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#78350f">B</text>

            {/* Elements A */}
            <circle cx="50" cy="50" r="3" fill="#1e293b" />
            <text x="35" y="54" fontSize="12" fontWeight="bold" fill="#1e293b">5</text>

            <circle cx="50" cy="77" r="3" fill="#1e293b" />
            <text x="35" y="81" fontSize="12" fontWeight="bold" fill="#1e293b">9</text>

            <circle cx="50" cy="104" r="3" fill="#1e293b" />
            <text x="30" y="108" fontSize="12" fontWeight="bold" fill="#1e293b">13</text>

            <circle cx="50" cy="131" r="3" fill="#1e293b" />
            <text x="30" y="135" fontSize="12" fontWeight="bold" fill="#1e293b">17</text>

            {/* Elements B */}
            <circle cx="110" cy="50" r="3" fill="#1e293b" />
            <text x="123" y="54" fontSize="12" fontWeight="bold" fill="#1e293b">p</text>

            <circle cx="110" cy="77" r="3" fill="#1e293b" />
            <text x="123" y="81" fontSize="12" fontWeight="bold" fill="#1e293b">q</text>

            <circle cx="110" cy="104" r="3" fill="#1e293b" />
            <text x="123" y="108" fontSize="12" fontWeight="bold" fill="#1e293b">r</text>

            <circle cx="110" cy="131" r="3" fill="#1e293b" />
            <text x="123" y="135" fontSize="12" fontWeight="bold" fill="#1e293b">s</text>

            {/* Arrows: 5 -> r, 13 -> p, 17 -> s (9 has NO arrow) */}
            <defs>
              <marker id="arr1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#0f172a" />
              </marker>
            </defs>
            <line x1="53" y1="50" x2="105" y2="103" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#arr1)" />
            <line x1="53" y1="104" x2="105" y2="52" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#arr1)" />
            <line x1="53" y1="131" x2="105" y2="131" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#arr1)" />
          </svg>
          <div className="mt-2 text-center bg-amber-200 text-amber-900 font-bold text-xs px-3 py-0.5 rounded-full">
            DIAGRAM 1
          </div>
          <div className="text-[10px] text-slate-500 mt-1">Titik 9 tidak memiliki pasangan</div>
        </div>

        {/* Diagram 2 */}
        <div className="bg-white border border-slate-200 rounded-lg p-2.5 flex flex-col items-center shadow-xs">
          <svg viewBox="0 0 160 180" className="w-full max-w-[150px] h-auto">
            <ellipse cx="40" cy="90" rx="30" ry="70" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <ellipse cx="120" cy="90" rx="30" ry="70" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <text x="40" y="32" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#78350f">A</text>
            <text x="120" y="32" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#78350f">B</text>

            <circle cx="50" cy="50" r="3" fill="#1e293b" />
            <text x="35" y="54" fontSize="12" fontWeight="bold" fill="#1e293b">5</text>

            <circle cx="50" cy="77" r="3" fill="#1e293b" />
            <text x="35" y="81" fontSize="12" fontWeight="bold" fill="#1e293b">9</text>

            <circle cx="50" cy="104" r="3" fill="#1e293b" />
            <text x="30" y="108" fontSize="12" fontWeight="bold" fill="#1e293b">13</text>

            <circle cx="50" cy="131" r="3" fill="#1e293b" />
            <text x="30" y="135" fontSize="12" fontWeight="bold" fill="#1e293b">17</text>

            <circle cx="110" cy="50" r="3" fill="#1e293b" />
            <text x="123" y="54" fontSize="12" fontWeight="bold" fill="#1e293b">p</text>

            <circle cx="110" cy="77" r="3" fill="#1e293b" />
            <text x="123" y="81" fontSize="12" fontWeight="bold" fill="#1e293b">q</text>

            <circle cx="110" cy="104" r="3" fill="#1e293b" />
            <text x="123" y="108" fontSize="12" fontWeight="bold" fill="#1e293b">r</text>

            <circle cx="110" cy="131" r="3" fill="#1e293b" />
            <text x="123" y="135" fontSize="12" fontWeight="bold" fill="#1e293b">s</text>

            {/* Arrows: 5 -> r, 9 -> q, 13 -> r, 13 -> s (two arrows!), 17 -> p */}
            <line x1="53" y1="50" x2="105" y2="103" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#arr1)" />
            <line x1="53" y1="77" x2="105" y2="77" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#arr1)" />
            <line x1="53" y1="104" x2="105" y2="104" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#arr1)" />
            <line x1="53" y1="104" x2="105" y2="130" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#arr1)" />
            <line x1="53" y1="131" x2="105" y2="53" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#arr1)" />
          </svg>
          <div className="mt-2 text-center bg-amber-200 text-amber-900 font-bold text-xs px-3 py-0.5 rounded-full">
            DIAGRAM 2
          </div>
          <div className="text-[10px] text-slate-500 mt-1">Titik 13 bercabang ke r dan s</div>
        </div>

        {/* Diagram 3 */}
        <div className="bg-white border border-slate-200 rounded-lg p-2.5 flex flex-col items-center shadow-xs">
          <svg viewBox="0 0 160 180" className="w-full max-w-[150px] h-auto">
            <ellipse cx="40" cy="90" rx="30" ry="70" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <ellipse cx="120" cy="90" rx="30" ry="70" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <text x="40" y="32" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#78350f">A</text>
            <text x="120" y="32" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#78350f">B</text>

            <circle cx="50" cy="50" r="3" fill="#1e293b" />
            <text x="35" y="54" fontSize="12" fontWeight="bold" fill="#1e293b">5</text>

            <circle cx="50" cy="77" r="3" fill="#1e293b" />
            <text x="35" y="81" fontSize="12" fontWeight="bold" fill="#1e293b">9</text>

            <circle cx="50" cy="104" r="3" fill="#1e293b" />
            <text x="30" y="108" fontSize="12" fontWeight="bold" fill="#1e293b">13</text>

            <circle cx="50" cy="131" r="3" fill="#1e293b" />
            <text x="30" y="135" fontSize="12" fontWeight="bold" fill="#1e293b">17</text>

            <circle cx="110" cy="50" r="3" fill="#1e293b" />
            <text x="123" y="54" fontSize="12" fontWeight="bold" fill="#1e293b">p</text>

            <circle cx="110" cy="77" r="3" fill="#1e293b" />
            <text x="123" y="81" fontSize="12" fontWeight="bold" fill="#1e293b">q</text>

            <circle cx="110" cy="104" r="3" fill="#1e293b" />
            <text x="123" y="108" fontSize="12" fontWeight="bold" fill="#1e293b">r</text>

            <circle cx="110" cy="131" r="3" fill="#1e293b" />
            <text x="123" y="135" fontSize="12" fontWeight="bold" fill="#1e293b">s</text>

            {/* Arrows: 5 -> p, 9 -> r, 13 -> s, 17 -> p */}
            <line x1="53" y1="50" x2="105" y2="50" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#arr1)" />
            <line x1="53" y1="77" x2="105" y2="103" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#arr1)" />
            <line x1="53" y1="104" x2="105" y2="130" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#arr1)" />
            <line x1="53" y1="131" x2="105" y2="53" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#arr1)" />
          </svg>
          <div className="mt-2 text-center bg-amber-200 text-amber-900 font-bold text-xs px-3 py-0.5 rounded-full">
            DIAGRAM 3
          </div>
          <div className="text-[10px] text-emerald-700 font-medium mt-1">Setiap anggota A tepat 1 kawan</div>
        </div>
      </div>
    </div>
  );
};

export const Soal8WaterGraph: React.FC = () => {
  return (
    <div className="my-4 p-4 bg-[#fbf6ec] border border-[#e5d8be] rounded-xl max-w-lg mx-auto shadow-xs text-slate-800">
      <div className="text-center font-bold text-xs text-slate-800 mb-2">
        Grafik Tarif Pemakaian Air PDAM dengan Pemasangan Awal
      </div>
      <div className="flex justify-center">
        <svg viewBox="0 0 380 260" className="w-full max-w-[360px] h-auto">
          {/* Background grid */}
          <rect x="60" y="20" width="280" height="180" fill="#faf8f4" stroke="#d5c8b2" strokeWidth="1" />

          {/* Grid lines */}
          <line x1="60" y1="155" x2="340" y2="155" stroke="#e6decb" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="60" y1="110" x2="340" y2="110" stroke="#e6decb" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="60" y1="65" x2="340" y2="65" stroke="#e6decb" strokeWidth="1" strokeDasharray="2 2" />

          <line x1="116" y1="20" x2="116" y2="200" stroke="#e6decb" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="172" y1="20" x2="172" y2="200" stroke="#e6decb" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="228" y1="20" x2="228" y2="200" stroke="#e6decb" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="284" y1="20" x2="284" y2="200" stroke="#e6decb" strokeWidth="1" strokeDasharray="2 2" />

          {/* Y Axis */}
          <line x1="60" y1="200" x2="60" y2="15" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr-up)" />
          {/* X Axis */}
          <line x1="60" y1="200" x2="350" y2="200" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr-right)" />

          <defs>
            <marker id="arr-up" markerWidth="6" markerHeight="6" refX="3" refY="1" orient="auto">
              <path d="M1,6 L3,0 L5,6 Z" fill="#1e293b" />
            </marker>
            <marker id="arr-right" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,1 L6,3 L0,5 Z" fill="#1e293b" />
            </marker>
          </defs>

          {/* Y Labels */}
          <text x="52" y="204" textAnchor="end" fontSize="10" fontWeight="bold" fill="#334155">800.000</text>
          <text x="52" y="159" textAnchor="end" fontSize="10" fontWeight="bold" fill="#334155">820.000</text>
          <text x="52" y="114" textAnchor="end" fontSize="10" fontWeight="bold" fill="#334155">840.000</text>
          <text x="52" y="69" textAnchor="end" fontSize="10" fontWeight="bold" fill="#334155">860.000</text>

          {/* X Labels */}
          <text x="55" y="214" textAnchor="end" fontSize="10" fontWeight="bold" fill="#334155">0</text>
          <text x="116" y="216" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155">10</text>
          <text x="172" y="216" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155">20</text>
          <text x="228" y="216" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155">30</text>
          <text x="284" y="216" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155">40</text>
          <text x="330" y="216" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155">50</text>

          {/* Linear Function Line:
              (0, 800000) -> (60, 200)
              (10, 820000) -> (116, 155)
              (20, 840000) -> (172, 110)
              (30, 860000) -> (228, 65)
              (35, 870000) -> (256, 42.5)
          */}
          <line x1="60" y1="200" x2="260" y2="40" stroke="#0f172a" strokeWidth="2.5" />
          <circle cx="60" cy="200" r="3" fill="#0f172a" />
          <circle cx="116" cy="155" r="3" fill="#0f172a" />
          <circle cx="172" cy="110" r="3" fill="#0f172a" />
          <circle cx="228" cy="65" r="3" fill="#0f172a" />

          {/* Axis Titles */}
          <text
            x="-105"
            y="14"
            transform="rotate(-90)"
            textAnchor="middle"
            fontSize="10"
            fontWeight="bold"
            fill="#1e293b"
          >
            Tarif Pemakaian Air (Rupiah)
          </text>
          <text x="200" y="245" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e293b">
            Banyak air (m³)
          </text>
        </svg>
      </div>
    </div>
  );
};

export const Soal9GardenMap: React.FC = () => {
  return (
    <div className="my-4 p-4 bg-white border border-slate-200 rounded-xl max-w-xl mx-auto shadow-xs">
      <div className="text-center font-bold text-xs text-slate-800 mb-2">
        Peta Pekarangan Rumah Ayunda (Sistem Koordinat Kartesius)
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
        {/* SVG Grid */}
        <div className="md:col-span-3 flex justify-center">
          <svg viewBox="0 0 280 280" className="w-full max-w-[270px] h-auto border border-slate-300 rounded-lg">
            {/* Quadrant backgrounds */}
            {/* Kuadran II (kiri atas): Lokasi 2 (Kuning) */}
            <rect x="10" y="10" width="130" height="130" fill="#fef08a" opacity="0.6" />
            {/* Kuadran I (kanan atas): Lokasi 1 (Peach) */}
            <rect x="140" y="10" width="130" height="130" fill="#fed7aa" opacity="0.6" />
            {/* Kuadran III (kiri bawah): Lokasi 3 (Hijau) */}
            <rect x="10" y="140" width="130" height="130" fill="#bbf7d0" opacity="0.6" />
            {/* Kuadran IV (kanan bawah): Lokasi 4 (Cyan) */}
            <rect x="140" y="140" width="130" height="130" fill="#a5f3fc" opacity="0.6" />

            {/* Grid lines (-10 to 10) scale: center is 140, 140, 1 unit = 12px */}
            {[...Array(21)].map((_, i) => {
              const pos = 20 + i * 12;
              return (
                <g key={i}>
                  <line x1={pos} y1="10" x2={pos} y2="270" stroke="#cbd5e1" strokeWidth="0.5" />
                  <line x1="10" y1={pos} x2="270" y2={pos} stroke="#cbd5e1" strokeWidth="0.5" />
                </g>
              );
            })}

            {/* Axes */}
            <line x1="140" y1="10" x2="140" y2="270" stroke="#334155" strokeWidth="1.5" />
            <line x1="10" y1="140" x2="270" y2="140" stroke="#334155" strokeWidth="1.5" />
            <text x="264" y="136" fontSize="9" fontWeight="bold" fill="#0f172a">X</text>
            <text x="144" y="18" fontSize="9" fontWeight="bold" fill="#0f172a">Y</text>

            {/* Axis Numbers */}
            <text x="140" y="26" textAnchor="middle" fontSize="6" fill="#475569">10</text>
            <text x="140" y="86" textAnchor="middle" fontSize="6" fill="#475569">5</text>
            <text x="140" y="196" textAnchor="middle" fontSize="6" fill="#475569">-5</text>
            <text x="140" y="258" textAnchor="middle" fontSize="6" fill="#475569">-10</text>
            <text x="24" y="146" textAnchor="middle" fontSize="6" fill="#475569">-10</text>
            <text x="80" y="146" textAnchor="middle" fontSize="6" fill="#475569">-5</text>
            <text x="200" y="146" textAnchor="middle" fontSize="6" fill="#475569">5</text>
            <text x="256" y="146" textAnchor="middle" fontSize="6" fill="#475569">10</text>

            {/* Plants/beds:
                Kuadran II: 4 vertical long beds
            */}
            <rect x="35" y="30" width="16" height="80" rx="3" fill="#84cc16" stroke="#4d7c0f" strokeWidth="0.8" />
            <rect x="60" y="30" width="16" height="80" rx="3" fill="#84cc16" stroke="#4d7c0f" strokeWidth="0.8" />
            <rect x="85" y="30" width="16" height="80" rx="3" fill="#84cc16" stroke="#4d7c0f" strokeWidth="0.8" />
            <rect x="110" y="30" width="16" height="80" rx="3" fill="#84cc16" stroke="#4d7c0f" strokeWidth="0.8" />

            {/* Kuadran I: 6 flower shrubs (2 cols x 3 rows) */}
            {[0, 1].map((col) =>
              [0, 1, 2].map((row) => (
                <g key={`k1-${col}-${row}`} transform={`translate(${165 + col * 40}, ${35 + row * 32})`}>
                  <circle cx="12" cy="12" r="11" fill="#4ade80" />
                  <circle cx="12" cy="12" r="4" fill="#facc15" />
                </g>
              ))
            )}

            {/* Kuadran III: 6 small beds around (-9 to -4) and (-5.5 to -9) -> px x: 32..92, y: 206..248 */}
            <g fill="#15803d" stroke="#14532d" strokeWidth="0.8">
              {[0, 1, 2].map((col) =>
                [0, 1].map((row) => (
                  <rect
                    key={`k3-${col}-${row}`}
                    x={28 + col * 26}
                    y={195 + row * 26}
                    width="22"
                    height="20"
                    rx="2"
                    fill="#16a34a"
                  />
                ))
              )}
            </g>

            {/* Kuadran IV: 4 shrubs (x: 1..6.5, y: -2..-8) -> px x: 152..218, y: 164..236 */}
            {[0, 1].map((col) =>
              [0, 1].map((row) => (
                <g key={`k4-${col}-${row}`} transform={`translate(${155 + col * 32}, ${162 + row * 36})`}>
                  <circle cx="12" cy="12" r="13" fill="#059669" />
                  <circle cx="12" cy="12" r="5" fill="#34d399" />
                </g>
              ))
            )}

            {/* Key test points highlight for user insight:
                (9, -2) -> px x = 140 + 9*12 = 248, y = 140 - (-2)*12 = 164
                (-2, 9) -> px x = 140 - 2*12 = 116, y = 140 - 9*12 = 32
                (-9, -9) -> px x = 140 - 9*12 = 32, y = 140 - (-9)*12 = 248
            */}
            <circle cx="248" cy="164" r="4" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="116" cy="32" r="4" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="32" cy="248" r="4" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Legend */}
        <div className="space-y-2 text-xs">
          <div className="font-semibold text-slate-700 pb-1 border-b border-slate-200">Legenda Lokasi:</div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-orange-200 border border-orange-400" />
            <span className="font-medium text-slate-700">Lokasi 1 (Kuadran I)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-yellow-200 border border-yellow-400" />
            <span className="font-medium text-slate-700">Lokasi 2 (Kuadran II)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-emerald-200 border border-emerald-400" />
            <span className="font-medium text-slate-700">Lokasi 3 (Kuadran III)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-cyan-200 border border-cyan-400" />
            <span className="font-medium text-slate-700">Lokasi 4 (Kuadran IV)</span>
          </div>

          <div className="pt-2 border-t border-slate-200">
            <div className="flex items-center gap-2">
              <span className="text-xl">🥭</span>
              <span className="font-bold text-slate-800 text-[11px]">Pohon Mangga</span>
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">
              Hanya ditanam di Lokasi 1, 3, & 4 pada lahan yang masih kosong.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Soal10NumberLine: React.FC = () => {
  return (
    <div className="my-3 space-y-2 text-xs">
      <div className="text-slate-600 font-medium mb-1">
        <MathRenderer content="Pilihan garis bilangan penyelesaian $3x + 17 \le 7 - 2x$:" inline={true} />
      </div>
      {/* Option A (Correct: closed at -2, shaded to left) */}
      <div className="p-2.5 bg-white border border-slate-200 rounded-lg shadow-xs">
        <div className="font-bold text-slate-800 text-[11px] mb-1">Opsi A (Tertutup di -2, arsiran ke kiri):</div>
        <svg viewBox="0 0 340 40" className="w-full h-8">
          <line x1="20" y1="20" x2="320" y2="20" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arr-r)" markerStart="url(#arr-l)" />
          {/* Shading left from -2 */}
          <line x1="20" y1="12" x2="110" y2="12" stroke="#06b6d4" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
          {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((val, idx) => {
            const x = 50 + idx * 20;
            return (
              <g key={val}>
                <line x1={x} y1="16" x2={x} y2="24" stroke="#0f172a" strokeWidth="1" />
                <text x={x} y="34" textAnchor="middle" fontSize="8" fill="#475569">{val}</text>
              </g>
            );
          })}
          {/* Closed circle at -2 (x = 110) */}
          <circle cx="110" cy="20" r="4.5" fill="#0f172a" />
          <defs>
            <marker id="arr-r" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,1 L6,3 L0,5 Z" fill="#0f172a" />
            </marker>
            <marker id="arr-l" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto">
              <path d="M6,1 L0,3 L6,5 Z" fill="#0f172a" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Option C (Open circle at -2, shaded left) */}
      <div className="p-2.5 bg-white border border-slate-200 rounded-lg shadow-xs">
        <div className="font-bold text-slate-800 text-[11px] mb-1">Opsi C (Terbuka di -2, arsiran ke kiri):</div>
        <svg viewBox="0 0 340 40" className="w-full h-8">
          <line x1="20" y1="20" x2="320" y2="20" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arr-r)" markerStart="url(#arr-l)" />
          <line x1="20" y1="12" x2="110" y2="12" stroke="#06b6d4" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
          {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((val, idx) => {
            const x = 50 + idx * 20;
            return (
              <g key={val}>
                <line x1={x} y1="16" x2={x} y2="24" stroke="#0f172a" strokeWidth="1" />
                <text x={x} y="34" textAnchor="middle" fontSize="8" fill="#475569">{val}</text>
              </g>
            );
          })}
          {/* Open circle at -2 (x = 110) */}
          <circle cx="110" cy="20" r="4" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export const Soal11Snacks: React.FC = () => {
  return (
    <div className="my-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Tumpukan Kiri (3 Putu Mayang + 2 Pancong = Rp58.000) */}
        <div className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col items-center">
          <div className="w-full max-w-[150px] space-y-1.5 my-2">
            <div className="bg-emerald-600 text-white text-[10px] font-bold py-2 px-3 rounded shadow-xs text-center border-t border-emerald-400">
              Kue Putu Mayang
            </div>
            <div className="bg-emerald-600 text-white text-[10px] font-bold py-2 px-3 rounded shadow-xs text-center border-t border-emerald-400">
              Kue Putu Mayang
            </div>
            <div className="bg-red-600 text-white text-[10px] font-bold py-2 px-3 rounded shadow-xs text-center border-t border-red-400">
              Kue Pancong
            </div>
            <div className="bg-emerald-600 text-white text-[10px] font-bold py-2 px-3 rounded shadow-xs text-center border-t border-emerald-400">
              Kue Putu Mayang
            </div>
            <div className="bg-red-600 text-white text-[10px] font-bold py-2 px-3 rounded shadow-xs text-center border-t border-red-400">
              Kue Pancong
            </div>
          </div>
          <div className="text-base font-extrabold text-slate-900 mt-2 font-mono">
            Rp58.000,00
          </div>
          <div className="text-[10px] text-slate-500">3 Putu Mayang + 2 Pancong</div>
        </div>

        {/* Tumpukan Kanan (2 Putu Mayang + 3 Pancong = Rp62.000) */}
        <div className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col items-center">
          <div className="w-full max-w-[150px] space-y-1.5 my-2">
            <div className="bg-emerald-600 text-white text-[10px] font-bold py-2 px-3 rounded shadow-xs text-center border-t border-emerald-400">
              Kue Putu Mayang
            </div>
            <div className="bg-emerald-600 text-white text-[10px] font-bold py-2 px-3 rounded shadow-xs text-center border-t border-emerald-400">
              Kue Putu Mayang
            </div>
            <div className="bg-red-600 text-white text-[10px] font-bold py-2 px-3 rounded shadow-xs text-center border-t border-red-400">
              Kue Pancong
            </div>
            <div className="bg-red-600 text-white text-[10px] font-bold py-2 px-3 rounded shadow-xs text-center border-t border-red-400">
              Kue Pancong
            </div>
            <div className="bg-red-600 text-white text-[10px] font-bold py-2 px-3 rounded shadow-xs text-center border-t border-red-400">
              Kue Pancong
            </div>
          </div>
          <div className="text-base font-extrabold text-slate-900 mt-2 font-mono">
            Rp62.000,00
          </div>
          <div className="text-[10px] text-slate-500">2 Putu Mayang + 3 Pancong</div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-6 text-xs text-slate-700 pt-2 border-t border-slate-200">
        <div className="flex items-center gap-1.5">
          <span className="w-3.5 h-3.5 rounded bg-emerald-600 inline-block" />
          <span className="font-semibold">= Kue Putu Mayang (p)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3.5 h-3.5 rounded bg-red-600 inline-block" />
          <span className="font-semibold">= Kue Pancong (k)</span>
        </div>
      </div>
    </div>
  );
};

export const Soal12Stationery: React.FC = () => {
  return (
    <div className="my-4 space-y-2.5">
      {/* Rino Card */}
      <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl">
            👦
          </div>
          <div>
            <div className="font-bold text-xs text-slate-800">Rino</div>
            <div className="text-[11px] text-slate-500">Pembeli Acuan</div>
          </div>
        </div>
        <div className="text-right text-xs">
          <div className="font-semibold text-slate-800">Buku Tulis: <span className="text-blue-600 font-bold">4 buah</span></div>
          <div className="font-semibold text-slate-800">Pulpen: <span className="text-blue-600 font-bold">3 buah</span></div>
        </div>
      </div>

      {/* Tiko Card */}
      <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-xl">
            🧒
          </div>
          <div>
            <div className="font-bold text-xs text-slate-800">Tiko</div>
            <div className="text-[11px] text-indigo-600 font-medium">Dua kali lipat dari Rino</div>
          </div>
        </div>
        <div className="text-right text-xs text-slate-600">
          <div>2 × (4 buku & 3 pulpen)</div>
          <div className="font-bold text-indigo-700">= 8 buku + 6 pulpen</div>
        </div>
      </div>

      {/* Bayu Card */}
      <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-xl">
            🤓
          </div>
          <div>
            <div className="font-bold text-xs text-slate-800">Bayu</div>
            <div className="text-[11px] text-purple-600 font-medium">Tiga kali lipat dari Rino</div>
          </div>
        </div>
        <div className="text-right text-xs text-slate-600">
          <div>3 × (4 buku & 3 pulpen)</div>
          <div className="font-bold text-purple-700">= 12 buku + 9 pulpen</div>
        </div>
      </div>
    </div>
  );
};

export const Soal13Notebook: React.FC = () => {
  return (
    <div className="my-4 max-w-md mx-auto p-4 bg-teal-50 border-2 border-teal-300 rounded-2xl shadow-xs relative">
      {/* Spiral notebook top rings */}
      <div className="flex justify-around absolute -top-3 left-6 right-6">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-2.5 h-6 bg-slate-300 border border-slate-400 rounded-full" />
        ))}
      </div>
      <div className="pt-2 text-center">
        <div className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-2">
          Catatan Paket Kuota Internet Nusantara Mobile
        </div>
        <div className="bg-white p-3 rounded-xl border border-teal-200 text-xs sm:text-sm font-mono font-bold text-teal-950 inline-block shadow-xs">
          {'{ (5, 14.000), (10, 23.000), (20, 41.000), (25, 50.000) }'}
        </div>
        <div className="text-[10px] text-teal-700 mt-2">
          Format: (kuota dalam GB, harga dalam Rupiah)
        </div>
      </div>
    </div>
  );
};

export const Soal14BrickPattern: React.FC = () => {
  return (
    <div className="my-4 p-4 bg-[#fefce8] border border-amber-200 rounded-2xl max-w-lg mx-auto shadow-xs">
      <div className="text-center font-bold text-xs text-amber-950 mb-3">
        Susunan Batu Bata Persegi Panjang dan Segitiga
      </div>
      <div className="flex justify-center">
        <svg viewBox="0 0 320 220" className="w-full max-w-[300px] h-auto">
          {/* Level 1: 1 triangle on top of 2 rectangles */}
          {/* Triangle 1 */}
          <polygon points="120,45 105,75 135,75" fill="#e2e8f0" stroke="#0f172a" strokeWidth="1.5" />
          {/* 2 Rectangles */}
          <rect x="90" y="75" width="30" height="15" fill="#cbd5e1" stroke="#0f172a" strokeWidth="1.5" />
          <rect x="120" y="75" width="30" height="15" fill="#cbd5e1" stroke="#0f172a" strokeWidth="1.5" />

          {/* Level 2: 2 triangles on top of 3 rectangles */}
          <polygon points="105,100 90,130 120,130" fill="#e2e8f0" stroke="#0f172a" strokeWidth="1.5" />
          <polygon points="135,100 120,130 150,130" fill="#e2e8f0" stroke="#0f172a" strokeWidth="1.5" />

          <rect x="75" y="130" width="30" height="15" fill="#cbd5e1" stroke="#0f172a" strokeWidth="1.5" />
          <rect x="105" y="130" width="30" height="15" fill="#cbd5e1" stroke="#0f172a" strokeWidth="1.5" />
          <rect x="135" y="130" width="30" height="15" fill="#cbd5e1" stroke="#0f172a" strokeWidth="1.5" />

          {/* Level 3: 3 triangles on top of 4 rectangles */}
          <polygon points="90,155 75,185 105,185" fill="#e2e8f0" stroke="#0f172a" strokeWidth="1.5" />
          <polygon points="120,155 105,185 135,185" fill="#e2e8f0" stroke="#0f172a" strokeWidth="1.5" />
          <polygon points="150,155 135,185 165,185" fill="#e2e8f0" stroke="#0f172a" strokeWidth="1.5" />

          <rect x="60" y="185" width="30" height="15" fill="#cbd5e1" stroke="#0f172a" strokeWidth="1.5" />
          <rect x="90" y="185" width="30" height="15" fill="#cbd5e1" stroke="#0f172a" strokeWidth="1.5" />
          <rect x="120" y="185" width="30" height="15" fill="#cbd5e1" stroke="#0f172a" strokeWidth="1.5" />
          <rect x="150" y="185" width="30" height="15" fill="#cbd5e1" stroke="#0f172a" strokeWidth="1.5" />

          {/* Dimension indicators on the right */}
          <line x1="175" y1="45" x2="175" y2="90" stroke="#0f172a" strokeWidth="1.2" />
          <text x="185" y="70" fontSize="11" fontWeight="bold" fill="#0f172a">Tingkat 1</text>

          <line x1="190" y1="100" x2="190" y2="145" stroke="#0f172a" strokeWidth="1.2" />
          <text x="200" y="125" fontSize="11" fontWeight="bold" fill="#0f172a">Tingkat 2</text>

          <line x1="210" y1="155" x2="210" y2="200" stroke="#0f172a" strokeWidth="1.2" />
          <text x="220" y="180" fontSize="11" fontWeight="bold" fill="#0f172a">Tingkat 3</text>
        </svg>
      </div>
      <div className="mt-2 text-center text-[11px] text-amber-900 font-medium">
        <MathRenderer content="Tingkat $n$: terdiri dari $n$ buah batu bata segitiga dan $(n + 1)$ batu bata persegi panjang." inline={true} />
      </div>
    </div>
  );
};
