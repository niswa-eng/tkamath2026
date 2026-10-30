import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Pen,
  Eraser,
  RotateCcw,
  RotateCw,
  Trash2,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { ChalkColor, DrawStroke } from '../types';

interface ChalkboardProps {
  questionNo: number;
}

const CHALK_COLORS: { id: ChalkColor; name: string; hex: string; bgClass: string }[] = [
  { id: 'white', name: 'Kapur Putih', hex: '#f8fafc', bgClass: 'bg-slate-100' },
  { id: 'yellow', name: 'Kapur Kuning', hex: '#fef08a', bgClass: 'bg-yellow-300' },
  { id: 'blue', name: 'Kapur Biru', hex: '#93c5fd', bgClass: 'bg-sky-300' },
  { id: 'pink', name: 'Kapur Merah Muda', hex: '#fca5a5', bgClass: 'bg-rose-300' },
];

export const Chalkboard: React.FC<ChalkboardProps> = ({ questionNo }) => {
  // Drawing tool states
  const [selectedColor, setSelectedColor] = useState<ChalkColor>('yellow');
  const [lineWidth, setLineWidth] = useState<number>(3);
  const [isEraser, setIsEraser] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [strokes, setStrokes] = useState<DrawStroke[]>([]);
  const [redoStack, setRedoStack] = useState<DrawStroke[]>([]);

  // Canvas drawing ref
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef<boolean>(false);
  const currentStrokeRef = useRef<DrawStroke | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Clear user drawings when question changes
  useEffect(() => {
    setStrokes([]);
    setRedoStack([]);
  }, [questionNo]);

  // Redraw canvas whenever strokes change or resize occurs
  const redrawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw all strokes
    strokes.forEach((stroke) => {
      if (stroke.points.length < 2) return;
      ctx.beginPath();
      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.size;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (stroke.isEraser) {
        ctx.globalCompositeOperation = 'destination-out';
      } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.shadowBlur = 1;
        ctx.shadowColor = stroke.color;
      }

      ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
      for (let i = 1; i < stroke.points.length; i++) {
        ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
      }
      ctx.stroke();
    });

    ctx.globalCompositeOperation = 'source-over';
    ctx.shadowBlur = 0;
  }, [strokes]);

  // Sync canvas dimensions
  useEffect(() => {
    const updateCanvasSize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (canvas.width !== rect.width || canvas.height !== rect.height) {
        canvas.width = rect.width;
        canvas.height = rect.height;
        redrawCanvas();
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, [redrawCanvas, isFullscreen]);

  useEffect(() => {
    redrawCanvas();
  }, [redrawCanvas]);

  // Canvas pointer events for freehand drawing
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.setPointerCapture(e.pointerId);

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    isDrawingRef.current = true;

    const strokeColor = isEraser
      ? '#000000'
      : CHALK_COLORS.find((c) => c.id === selectedColor)?.hex || '#fef08a';

    currentStrokeRef.current = {
      color: strokeColor,
      size: isEraser ? lineWidth * 5 : lineWidth,
      isEraser,
      points: [{ x, y }],
    };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current || !currentStrokeRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    currentStrokeRef.current.points.push({ x, y });

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const pts = currentStrokeRef.current.points;
    if (pts.length >= 2) {
      ctx.beginPath();
      ctx.strokeStyle = currentStrokeRef.current.color;
      ctx.lineWidth = currentStrokeRef.current.size;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (currentStrokeRef.current.isEraser) {
        ctx.globalCompositeOperation = 'destination-out';
      } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.shadowBlur = 1;
        ctx.shadowColor = currentStrokeRef.current.color;
      }

      const p1 = pts[pts.length - 2];
      const p2 = pts[pts.length - 1];
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();

      ctx.globalCompositeOperation = 'source-over';
      ctx.shadowBlur = 0;
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current || !currentStrokeRef.current) return;
    const canvas = canvasRef.current;
    if (canvas && canvas.hasPointerCapture(e.pointerId)) {
      canvas.releasePointerCapture(e.pointerId);
    }
    isDrawingRef.current = false;

    if (currentStrokeRef.current.points.length > 1) {
      setStrokes((prev) => [...prev, currentStrokeRef.current!]);
      setRedoStack([]);
    }
    currentStrokeRef.current = null;
  };

  const handleUndo = () => {
    if (strokes.length === 0) return;
    const last = strokes[strokes.length - 1];
    setStrokes((prev) => prev.slice(0, -1));
    setRedoStack((prev) => [...prev, last]);
  };

  const handleRedo = () => {
    if (redoStack.length === 0) return;
    const next = redoStack[redoStack.length - 1];
    setRedoStack((prev) => prev.slice(0, -1));
    setStrokes((prev) => [...prev, next]);
  };

  const handleClear = () => {
    setStrokes([]);
    setRedoStack([]);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div
      ref={containerRef}
      className={`flex flex-col bg-[#14281d] rounded-2xl border-8 border-[#6b4226] shadow-xl overflow-hidden transition-all duration-200 ${
        isFullscreen
          ? 'fixed inset-0 z-50 rounded-none border-4'
          : 'h-[600px] lg:h-[700px]'
      }`}
    >
      {/* Top Wooden Frame / Header */}
      <div className="bg-[#523018] px-3 py-2 text-amber-100 flex items-center justify-between border-b-2 border-[#3d2311] select-none text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90 inline-block shadow-xs" />
          <span className="font-bold tracking-wide text-xs sm:text-sm text-amber-100">
            No. {questionNo}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleClear}
            disabled={strokes.length === 0}
            title="Bersihkan Semua Coretan"
            className="flex items-center gap-1 px-2.5 py-1 bg-amber-900/60 hover:bg-amber-900 text-amber-200 disabled:opacity-30 rounded-lg text-xs transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Bersihkan Papan</span>
          </button>

          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Keluar Layar Penuh' : 'Layar Penuh'}
            className="p-1.5 hover:bg-[#6b4226] text-amber-200 rounded transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Blackboard Surface - COMPLETELY EMPTY / KOSONG TANPA TULISAN APAPUN */}
      <div
        className="flex-1 relative overflow-hidden bg-[#163023]"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 50% 30%, rgba(30, 68, 50, 0.6) 0%, rgba(18, 38, 28, 0.95) 100%)',
        }}
      >
        {/* Subtle chalkboard scratches texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255,255,255,0.08) 15px, rgba(255,255,255,0.08) 17px)',
          }}
        />

        {/* Freehand Drawing Canvas - Blank and ready for interactive chalk drawing */}
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{ touchAction: 'none' }}
          className="absolute inset-0 cursor-crosshair w-full h-full z-10"
        />
      </div>

      {/* Chalk Tray & Bottom Toolbar */}
      <div className="bg-[#523018] border-t-4 border-[#3d2311] p-2.5 text-amber-100 flex flex-wrap items-center justify-between gap-2 shadow-inner select-none relative z-20">
        {/* Tools: Pen, Eraser, Colors, Thickness, Undo/Redo */}
        <div className="flex items-center gap-1.5 bg-[#3d2311]/80 p-1 rounded-xl">
          <button
            onClick={() => setIsEraser(false)}
            title="Pena Kapur"
            className={`p-1.5 rounded-lg transition-colors ${
              !isEraser ? 'bg-amber-500 text-amber-950 font-bold' : 'hover:bg-[#523018] text-amber-200'
            }`}
          >
            <Pen className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsEraser(true)}
            title="Penghapus Kapur"
            className={`p-1.5 rounded-lg transition-colors ${
              isEraser ? 'bg-amber-500 text-amber-950 font-bold' : 'hover:bg-[#523018] text-amber-200'
            }`}
          >
            <Eraser className="w-4 h-4" />
          </button>

          <span className="w-px h-5 bg-amber-900 mx-1" />

          {/* 4 Chalk Colors */}
          <div className="flex items-center gap-1">
            {CHALK_COLORS.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setSelectedColor(c.id);
                  setIsEraser(false);
                }}
                title={c.name}
                className={`w-5 h-5 rounded-full border-2 transition-transform ${c.bgClass} ${
                  selectedColor === c.id && !isEraser
                    ? 'border-white scale-110 shadow-sm'
                    : 'border-transparent opacity-75 hover:opacity-100'
                }`}
              />
            ))}
          </div>

          <span className="w-px h-5 bg-amber-900 mx-1" />

          {/* Line Width */}
          <div className="flex items-center gap-1">
            {[2, 4, 7].map((w) => (
              <button
                key={w}
                onClick={() => setLineWidth(w)}
                title={`Ukuran Garis ${w}px`}
                className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold ${
                  lineWidth === w ? 'bg-amber-600 text-white' : 'text-amber-200 hover:bg-[#523018]'
                }`}
              >
                {w === 2 ? 'S' : w === 4 ? 'M' : 'L'}
              </button>
            ))}
          </div>

          <span className="w-px h-5 bg-amber-900 mx-1" />

          {/* Undo / Redo */}
          <button
            onClick={handleUndo}
            disabled={strokes.length === 0}
            title="Urungkan (Undo)"
            className="p-1 hover:bg-[#523018] disabled:opacity-30 rounded text-amber-200"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleRedo}
            disabled={redoStack.length === 0}
            title="Ulangi (Redo)"
            className="p-1 hover:bg-[#523018] disabled:opacity-30 rounded text-amber-200"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chalkboard;
