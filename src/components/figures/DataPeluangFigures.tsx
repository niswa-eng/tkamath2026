import React from 'react';

export const Soal25RubberCoconut: React.FC = () => {
  const tableData = [
    { tahun: '2018', karet: '3,68', kelapa: '2,83' },
    { tahun: '2019', karet: '3,50', kelapa: '2,83' },
    { tahun: '2020', karet: '3,30', kelapa: '2,81' },
    { tahun: '2021', karet: '3,12', kelapa: '2,85' },
    { tahun: '2022', karet: '2,95', kelapa: '2,86' },
    { tahun: '2023', karet: '2,75', kelapa: '2,90' },
    { tahun: '2024', karet: '2,60', kelapa: '2,89' },
  ];

  return (
    <div className="my-4 space-y-3">
      {/* Table */}
      <div className="overflow-hidden border border-amber-200 rounded-xl bg-white shadow-xs max-w-md mx-auto">
        <div className="bg-[#fef9c3] px-4 py-2 border-b border-amber-200 flex items-center justify-between">
          <div>
            <div className="font-extrabold text-xs text-amber-950">Produksi Karet dan Kelapa tahun 2018-2024</div>
            <div className="text-[10px] text-amber-800">(dalam juta ton)</div>
          </div>
          <div className="text-xl">🥥 🪵</div>
        </div>
        <table className="w-full text-xs text-center">
          <thead className="bg-amber-100/60 text-amber-950 font-bold border-b border-amber-200">
            <tr>
              <th className="py-1.5 px-3">Tahun</th>
              <th className="py-1.5 px-3">Karet</th>
              <th className="py-1.5 px-3">Kelapa</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-100">
            {tableData.map((row) => (
              <tr key={row.tahun} className="hover:bg-amber-50/50">
                <td className="py-1 px-3 font-semibold text-slate-800">{row.tahun}</td>
                <td className="py-1 px-3 font-mono text-slate-700">{row.karet}</td>
                <td className="py-1 px-3 font-mono text-slate-700">{row.kelapa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Line Chart Preview for Option D (the exact matching chart) */}
      <div className="p-3 bg-white border border-slate-200 rounded-xl max-w-md mx-auto shadow-xs">
        <div className="text-center font-bold text-xs text-slate-800 mb-1">
          Grafik Tren Data Produksi Karet (Opsi D)
        </div>
        <svg viewBox="0 0 320 140" className="w-full h-auto">
          {/* Axis */}
          <line x1="40" y1="110" x2="300" y2="110" stroke="#64748b" strokeWidth="1" />
          <line x1="40" y1="20" x2="40" y2="110" stroke="#64748b" strokeWidth="1" />

          {/* Y ticks (0 to 4 juta ton) -> height 90px (0 at 110, 4 at 20) */}
          <text x="32" y="24" textAnchor="end" fontSize="8" fill="#64748b">4</text>
          <text x="32" y="47" textAnchor="end" fontSize="8" fill="#64748b">3</text>
          <text x="32" y="69" textAnchor="end" fontSize="8" fill="#64748b">2</text>
          <text x="32" y="92" textAnchor="end" fontSize="8" fill="#64748b">1</text>
          <text x="32" y="112" textAnchor="end" fontSize="8" fill="#64748b">0</text>

          {/* Points for Rubber: 3.68, 3.50, 3.30, 3.12, 2.95, 2.75, 2.60
              x: 60, 95, 130, 165, 200, 235, 270
              y = 110 - (val / 4) * 90
              3.68 -> 110 - 82.8 = 27.2
              3.50 -> 110 - 78.75 = 31.25
              3.30 -> 110 - 74.25 = 35.75
              3.12 -> 110 - 70.2 = 39.8
              2.95 -> 110 - 66.37 = 43.6
              2.75 -> 110 - 61.87 = 48.1
              2.60 -> 110 - 58.5 = 51.5
          */}
          <polyline
            fill="none"
            stroke="#0284c7"
            strokeWidth="2.5"
            points="60,27.2 95,31.2 130,35.7 165,39.8 200,43.6 235,48.1 270,51.5"
          />

          {[
            { x: 60, y: 27.2, yr: "'18", v: '3,68' },
            { x: 95, y: 31.2, yr: "'19", v: '3,50' },
            { x: 130, y: 35.7, yr: "'20", v: '3,30' },
            { x: 165, y: 39.8, yr: "'21", v: '3,12' },
            { x: 200, y: 43.6, yr: "'22", v: '2,95' },
            { x: 235, y: 48.1, yr: "'23", v: '2,75' },
            { x: 270, y: 51.5, yr: "'24", v: '2,60' },
          ].map((pt) => (
            <g key={pt.yr}>
              <circle cx={pt.x} cy={pt.y} r="3" fill="#0284c7" />
              <text x={pt.x} y={pt.y - 6} textAnchor="middle" fontSize="7" fontWeight="bold" fill="#0369a1">{pt.v}</text>
              <text x={pt.x} y="122" textAnchor="middle" fontSize="8" fill="#475569">{pt.yr}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

export const Soal26ToryBarChart: React.FC = () => {
  const weeks = [
    { w: 'M1', val: 22 },
    { w: 'M2', val: 20 },
    { w: 'M3', val: 18 },
    { w: 'M4', val: 20 },
    { w: 'M5', val: 14, mode: true },
    { w: 'M6', val: 16 },
    { w: 'M7', val: 14, mode: true },
    { w: 'M8', val: 14, mode: true },
    { w: 'M9', val: 12 },
    { w: 'M10', val: 10 },
    { w: 'M11', val: 14, mode: true },
    { w: 'M12', val: 12 },
  ];

  return (
    <div className="my-4 p-4 bg-[#fefce8] border border-amber-200 rounded-xl max-w-xl mx-auto shadow-xs">
      <div className="text-center font-bold text-xs text-amber-950 mb-1">
        DURASI TORY BERMAIN GAME ONLINE SETIAP MINGGU
      </div>
      <div className="flex justify-center">
        <svg viewBox="0 0 400 200" className="w-full max-w-[380px] h-auto">
          {/* Y Axis line */}
          <line x1="40" y1="20" x2="40" y2="160" stroke="#78350f" strokeWidth="1.5" />
          {/* X Axis line */}
          <line x1="40" y1="160" x2="390" y2="160" stroke="#78350f" strokeWidth="1.5" />

          {/* Y Axis labels (0 to 25) */}
          {[0, 5, 10, 15, 20, 25].map((val) => {
            const y = 160 - (val / 25) * 135;
            return (
              <g key={val}>
                <line x1="36" y1={y} x2="390" y2={y} stroke="#fef08a" strokeWidth="1" />
                <text x="32" y={y + 3} textAnchor="end" fontSize="8" fontWeight="bold" fill="#78350f">{val}</text>
              </g>
            );
          })}
          <text x="-90" y="14" transform="rotate(-90)" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#78350f">
            Durasi (jam)
          </text>

          {/* 12 Bars */}
          {weeks.map((item, idx) => {
            const barW = 18;
            const x = 52 + idx * 27;
            const barH = (item.val / 25) * 135;
            const y = 160 - barH;

            return (
              <g key={item.w}>
                <rect
                  x={x}
                  y={y}
                  width={barW}
                  height={barH}
                  rx="2"
                  fill={item.mode ? '#16a34a' : '#86efac'}
                  stroke="#15803d"
                  strokeWidth="1"
                />
                {/* Number on top */}
                <text x={x + barW / 2} y={y - 3} textAnchor="middle" fontSize="9" fontWeight="bold" fill="#14532d">
                  {item.val}
                </text>
                {/* Week label below */}
                <text x={x + barW / 2} y="174" textAnchor="middle" fontSize="8" fill="#78350f">
                  {item.w}
                </text>
              </g>
            );
          })}
          <text x="215" y="192" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#78350f">
            Minggu
          </text>
        </svg>
      </div>
      <div className="text-center text-[11px] text-amber-900 mt-1 font-medium">
        Nilai 14 jam (batang hijau tua) muncul paling sering yaitu sebanyak 4 kali.
      </div>
    </div>
  );
};

export const Soal27ToryPhases: React.FC = () => {
  return (
    <div className="my-4 p-3 bg-white border border-slate-200 rounded-xl max-w-lg mx-auto shadow-xs">
      <div className="text-center font-bold text-xs text-slate-800 mb-2">
        Skema Pemantauan Fase Bermain Game Tory
      </div>
      <div className="flex flex-col gap-2">
        {/* Phase Flow */}
        <div className="grid grid-cols-4 gap-2 text-center text-xs">
          <div className="p-2 bg-emerald-50 border border-emerald-300 rounded-lg">
            <div className="font-bold text-emerald-900 text-[10px]">4 Minggu Pertama</div>
            <div className="text-[11px] font-extrabold text-emerald-700 mt-1">Rata: 20 jam</div>
          </div>
          <div className="p-2 bg-blue-50 border border-blue-300 rounded-lg">
            <div className="font-bold text-blue-900 text-[10px]">4 Minggu Kedua</div>
            <div className="text-[11px] font-extrabold text-blue-700 mt-1">Rata: 14,5 jam</div>
          </div>
          <div className="p-2 bg-purple-50 border border-purple-300 rounded-lg">
            <div className="font-bold text-purple-900 text-[10px]">4 Minggu Ketiga</div>
            <div className="text-[11px] font-extrabold text-purple-700 mt-1">Rata: 12 jam</div>
          </div>
          <div className="p-2 bg-amber-50 border border-amber-300 rounded-lg">
            <div className="font-bold text-amber-900 text-[10px]">Batas Dokter</div>
            <div className="text-[11px] font-extrabold text-amber-700 mt-1">Maks: 7 jam</div>
          </div>
        </div>

        {/* Phase delta badges */}
        <div className="grid grid-cols-2 gap-2 mt-1 text-[11px]">
          <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
            <span className="font-semibold text-slate-700">Fase Pertama:</span>
            <span className="text-emerald-700 font-bold ml-1">20 - 14,5 = berkurang 5,5 jam</span>
          </div>
          <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
            <span className="font-semibold text-slate-700">Fase Penyembuhan:</span>
            <span className="text-emerald-700 font-bold ml-1">20 - 12 = berkurang 8 jam</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Soal28SakaKirana: React.FC = () => {
  return (
    <div className="my-4 p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-md mx-auto shadow-xs">
      <div className="grid grid-cols-2 gap-4">
        {/* Saka */}
        <div className="bg-white p-3 rounded-xl border border-slate-200 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-3xl mb-1 shadow-inner">
            🧚‍♂️
          </div>
          <div className="font-extrabold text-sm text-slate-900">Saka</div>
          <div className="text-xs text-slate-500 mb-1">Karakter Laki-laki</div>
          <div className="text-base font-black text-emerald-700 font-mono bg-emerald-50 px-3 py-0.5 rounded-full border border-emerald-200">
            8 buah
          </div>
        </div>

        {/* Kirana */}
        <div className="bg-white p-3 rounded-xl border border-slate-200 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-3xl mb-1 shadow-inner">
            🧚‍♀️
          </div>
          <div className="font-extrabold text-sm text-slate-900">Kirana</div>
          <div className="text-xs text-slate-500 mb-1">Karakter Perempuan</div>
          <div className="text-base font-black text-pink-700 font-mono bg-pink-50 px-3 py-0.5 rounded-full border border-pink-200">
            12 buah
          </div>
        </div>
      </div>
      <div className="mt-3 text-center text-xs text-slate-600 bg-white p-2 rounded-lg border border-slate-200">
        Total awal = 20 figur. Diambil Riana: 1 Saka & 2 Kirana. Sisa di kotak = 7 Saka & 10 Kirana (Total 17).
      </div>
    </div>
  );
};

export const Soal29EggIncubator: React.FC = () => {
  const eggData = [
    { usia: '2 hari', jumlah: 20 },
    { usia: '4 hari', jumlah: 35 },
    { usia: '6 hari', jumlah: 30 },
    { usia: '8 hari', jumlah: 15, hatch: true },
  ];

  return (
    <div className="my-4 p-4 bg-amber-50/50 border border-amber-200 rounded-xl max-w-md mx-auto shadow-xs">
      <div className="flex items-center justify-between mb-3 bg-white p-2.5 rounded-lg border border-amber-200">
        <div className="flex items-center gap-2">
          <div className="text-2xl">🥚</div>
          <div>
            <div className="font-bold text-xs text-slate-800">Mesin Tetas Telur Puyuh</div>
            <div className="text-[10px] text-amber-700 font-medium">Masa pengeraman = 18 hari</div>
          </div>
        </div>
        <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-1 rounded font-bold">
          Total 100 Butir
        </span>
      </div>

      <div className="overflow-hidden border border-slate-200 rounded-lg bg-white">
        <table className="w-full text-xs text-left">
          <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
            <tr>
              <th className="py-2 px-3">Usia Telur di Mesin</th>
              <th className="py-2 px-3 text-right">Banyak Telur</th>
              <th className="py-2 px-3 text-right">Usia + 10 Hari</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {eggData.map((e) => (
              <tr key={e.usia} className={e.hatch ? 'bg-emerald-50/80 font-semibold' : ''}>
                <td className="py-2 px-3 text-slate-800">{e.usia}</td>
                <td className="py-2 px-3 text-right font-mono">{e.jumlah} butir</td>
                <td className="py-2 px-3 text-right">
                  {e.hatch ? (
                    <span className="text-emerald-700 font-bold bg-emerald-100 px-1.5 py-0.5 rounded text-[10px]">
                      18 hari (Menetas!)
                    </span>
                  ) : (
                    <span className="text-slate-400 text-[10px]">Belum menetas</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const Soal30TeacherExam: React.FC = () => {
  return (
    <div className="my-4 p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-md mx-auto shadow-xs">
      <div className="flex items-center gap-4 bg-white p-3 rounded-lg border border-slate-200">
        <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-3xl shrink-0">
          👩‍🏫
        </div>
        <div>
          <div className="font-bold text-xs text-slate-800">Guru Matematika</div>
          <div className="text-[11px] text-slate-500">
            Mengambil 3 kertas gulungan bertuliskan kode yang sama.
          </div>
          <div className="mt-1 flex gap-1.5">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">Kode A</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800 border border-purple-200">Kode B</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">Kode C</span>
          </div>
        </div>
      </div>
      <div className="mt-3 text-xs bg-emerald-50 border border-emerald-200 p-2.5 rounded-lg text-emerald-900 space-y-1">
        <div className="font-semibold">Fakta Kunci Setelah Pengambilan 3 Kertas:</div>
        <div>• Sisa kertas di kotak = 28 lembar.</div>
        <div>• Peluang C = 2/7 → Sisa kertas C = 8 lembar.</div>
        <div>• Sisa A + B = 20 lembar, dan B &gt; C → B &gt; 8.</div>
      </div>
    </div>
  );
};
