import React from 'react';
import MathRenderer from '../../utils/MathRenderer';

export const Soal1Formula: React.FC = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-slate-50 border border-slate-200 rounded-xl my-3">
    <div className="text-sm font-medium text-slate-500 mb-2">Bentuk Operasi Pangkat:</div>
    <div className="text-2xl md:text-3xl font-semibold text-slate-800 bg-white px-8 py-4 rounded-lg shadow-xs border border-slate-200">
      <MathRenderer content="$$\\frac{7^3 \\times 7^{-4}}{7^2}$$" inline={false} />
    </div>
  </div>
);

export const Soal2Vouchers: React.FC = () => {
  const vouchers = [
    { code: 'A', discount: '25% s/d 100RB', desc: 'Pk. 21:00-00:00 WIB', category: 'Semua Kategori' },
    { code: 'B', discount: '5% s/d 200RB', desc: 'Berlaku Hingga: 24.09.2023', category: 'Semua Kategori' },
    { code: 'C', discount: '10% s/d 20 RB', desc: 'Berlaku Hingga: 24.09.2023', category: 'Semua Kategori', xtra: true },
    { code: 'D', discount: '40% s/d 20RB', desc: 'Pk. 21:00-00:00 WIB', category: 'Semua Kategori' },
  ];

  return (
    <div className="my-4 p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-xl mx-auto">
      <div className="text-center font-bold text-red-900 tracking-wider text-sm md:text-base mb-3 py-1 bg-red-100/70 rounded-md">
        VOUCHER CASHBACK
      </div>
      <div className="grid gap-2.5">
        {vouchers.map((v) => (
          <div
            key={v.code}
            className="flex items-center justify-between bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs hover:border-red-300 transition-colors"
          >
            {/* Left coupon stub */}
            <div className="bg-[#780016] text-white px-4 py-3 flex flex-col items-center justify-center min-w-[100px] border-r-2 border-dashed border-red-200/40 relative">
              <span className="text-[10px] tracking-widest uppercase opacity-80">Voucher</span>
              <span className="text-2xl font-black">{v.code}</span>
              <span className="text-[9px] opacity-75 mt-0.5">{v.category}</span>
            </div>
            {/* Center coupon details */}
            <div className="flex-1 px-3 py-2 text-left">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-xs">Mall</span>
                {v.xtra && (
                  <span className="bg-teal-500 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-xs">Xtra</span>
                )}
                <span className="text-xs font-semibold text-slate-700">Cashback</span>
              </div>
              <div className="text-base font-extrabold text-slate-900">{v.discount}</div>
              <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{v.desc}</span>
              </div>
            </div>
            {/* Right button */}
            <div className="px-3">
              <button
                type="button"
                className="text-xs font-semibold text-red-700 border border-red-300 bg-red-50/70 hover:bg-red-100 px-3 py-1 rounded-full transition-colors"
              >
                Pakai
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Soal3Cart: React.FC = () => {
  const carts = [
    { no: 1, voucher: 'Voucher D', total: 'Rp50.000,00' },
    { no: 2, voucher: 'Voucher B', total: 'Rp200.000,00' },
    { no: 3, voucher: 'Voucher A', total: 'Rp2.500.000,00' },
  ];

  return (
    <div className="my-4 space-y-3">
      {carts.map((c) => (
        <div key={c.no} className="border border-slate-200 rounded-xl p-3 bg-white shadow-xs">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Voucher Belanja</span>
            </div>
            <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              {c.voucher} &gt;
            </span>
          </div>
          <div className="flex items-center justify-between text-xs pt-1">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border border-slate-300 bg-slate-50 flex items-center justify-center">
                <div className="w-2 h-2 bg-slate-400 rounded-xs" />
              </div>
              <span className="text-slate-600">Semua Item</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-[10px] text-slate-500 block">Total Belanja</span>
                <span className="font-bold text-slate-900 text-sm">{c.total}</span>
              </div>
              <span className="bg-orange-500 text-white font-medium text-xs px-3 py-1.5 rounded-lg shadow-xs">
                Checkout (1)
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Soal4FruitsTable: React.FC = () => {
  const data = [
    { nama: 'Buah A', berat: '118,4', air: '96,3', color: 'bg-amber-100 text-amber-800' },
    { nama: 'Buah B', berat: '130,7', air: '150', color: 'bg-emerald-100 text-emerald-800' },
    { nama: 'Buah C', berat: '130,55', air: '140', color: 'bg-orange-100 text-orange-800' },
    { nama: 'Buah D', berat: '96,255', air: '118,15', color: 'bg-rose-100 text-rose-800' },
  ];

  return (
    <div className="my-4 overflow-hidden border border-slate-200 rounded-xl bg-white shadow-xs">
      <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200 font-semibold text-slate-700 text-xs">
        Tabel Ukuran dan Kandungan Air Buah yang Diuji
      </div>
      <table className="w-full text-xs text-left">
        <thead className="bg-slate-100/70 text-slate-600 font-medium border-b border-slate-200">
          <tr>
            <th className="py-2.5 px-4">Nama Buah</th>
            <th className="py-2.5 px-4 text-right">Berat (gr)</th>
            <th className="py-2.5 px-4 text-right">Kandungan air (mL)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {data.map((b) => (
            <tr key={b.nama} className="hover:bg-slate-50 transition-colors">
              <td className="py-2.5 px-4 font-semibold text-slate-800 flex items-center gap-2">
                <span className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold ${b.color}`}>
                  {b.nama.split(' ')[1]}
                </span>
                {b.nama}
              </td>
              <td className="py-2.5 px-4 text-right font-mono font-medium text-slate-700">{b.berat}</td>
              <td className="py-2.5 px-4 text-right font-mono font-medium text-slate-700">{b.air}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const Soal5FoodTemp: React.FC = () => {
  return (
    <div className="my-4 p-4 bg-[#fbf6ec] border border-[#e8dec8] rounded-2xl max-w-md mx-auto shadow-xs text-slate-800">
      <div className="text-center font-bold text-sm text-[#4a3419] mb-3 pb-1 border-b border-[#e2d4bd]">
        Rekomendasi Suhu Menyimpan Makanan
      </div>
      <div className="space-y-3">
        {/* Daging Merah */}
        <div className="flex items-center justify-between p-2.5 bg-white/80 rounded-xl border border-[#ede3d1]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-xl">
              🥩
            </div>
            <div>
              <div className="font-bold text-xs text-slate-800">Daging Merah</div>
              <div className="text-[10px] text-slate-500">Rekomendasi suhu</div>
            </div>
          </div>
          <div className="text-sm font-extrabold text-red-700 font-mono px-3 py-1 bg-red-50 rounded-lg border border-red-200">
            ≤ -18 °C
          </div>
        </div>

        {/* Makanan Laut */}
        <div className="flex items-center justify-between p-2.5 bg-white/80 rounded-xl border border-[#ede3d1]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-xl">
              🦐
            </div>
            <div>
              <div className="font-bold text-xs text-slate-800">Makanan Laut</div>
              <div className="text-[10px] text-slate-500">Rekomendasi suhu</div>
            </div>
          </div>
          <div className="text-sm font-extrabold text-blue-700 font-mono px-3 py-1 bg-blue-50 rounded-lg border border-blue-200">
            = -18 °C
          </div>
        </div>

        {/* Daging Unggas */}
        <div className="flex items-center justify-between p-2.5 bg-white/80 rounded-xl border-2 border-amber-300 bg-amber-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-xl">
              🍗
            </div>
            <div>
              <div className="font-bold text-xs text-amber-950 flex items-center gap-1">
                Daging Unggas
                <span className="text-[9px] bg-amber-200 text-amber-900 px-1.5 py-0.2 rounded">Ayam</span>
              </div>
              <div className="text-[10px] text-amber-700">Rekomendasi suhu</div>
            </div>
          </div>
          <div className="text-sm font-extrabold text-amber-900 font-mono px-3 py-1 bg-amber-100 rounded-lg border border-amber-300">
            = -19 °C
          </div>
        </div>

        {/* Buah & Sayur */}
        <div className="flex items-center justify-between p-2.5 bg-white/80 rounded-xl border border-[#ede3d1]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-xl">
              🥗
            </div>
            <div>
              <div className="font-bold text-xs text-slate-800">Buah & Sayur</div>
              <div className="text-[10px] text-slate-500">Rekomendasi suhu</div>
            </div>
          </div>
          <div className="text-sm font-extrabold text-green-700 font-mono px-3 py-1 bg-green-50 rounded-lg border border-green-200">
            ≤ 4 °C
          </div>
        </div>
      </div>
    </div>
  );
};
