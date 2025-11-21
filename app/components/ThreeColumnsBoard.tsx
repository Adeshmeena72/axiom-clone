
"use client";

import React, { useState } from "react";
import {
  Zap,
  SlidersHorizontal,
  MoreHorizontal,
  FileText,
  ChartLine,
  ExternalLink,
  Search,
  Users,
  BookOpen,
} from "lucide-react";


const USE_UPLOADED_IMG = false;
const SAMPLE_IMG_PATH = "/mnt/data/8eaf47d1-8dac-405f-9eba-ede7b6b6d044.png";


function stringToColor(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 68%, 44%)`;
}

function shortAddr() {
  return Math.random().toString(36).slice(2, 9);
}

function makePairs(prefix: string, n = 15) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    const sym = (prefix + (i + 1)).toUpperCase();
    arr.push({
      id: `${prefix}-${i}`,
      symbol: sym,
      name: `${sym} ${["Token", "Coin", "Pump", "Project"][i % 4]}`,
      age: `${Math.floor(Math.random() * 59) + 1}s`,
      mc: `$${(Math.random() * 2000 + 1).toFixed(2)}K`,
      v: `$${Math.round(Math.random() * 25000).toLocaleString()}`,
      buys: Math.floor(Math.random() * 900),
      sells: Math.floor(Math.random() * 900),
      tx: Math.floor(Math.random() * 400),
      fdv: (Math.random() * 100).toFixed(2),
      stats: [
        { label: `${Math.round(Math.random() * 25)}%`, cls: "text-rose-400 bg-rose-900/10" },
        { label: `${Math.round(Math.random() * 10)}%`, cls: "text-emerald-400 bg-emerald-900/10" },
        { label: `DS ${Math.round(Math.random() * 12)}mo`, cls: "text-cyan-300 bg-cyan-900/8" },
      ],
      addr: shortAddr(),
    });
  }
  return arr;
}

const NEW_PAIRS = makePairs("BUT", 15);
const FINAL_STRETCH = makePairs("WIF", 16);
const MIGRATED = makePairs("NOO", 18);



const SmallIconButton: React.FC<{ title?: string; onClick?: () => void; children?: React.ReactNode }> = ({
  title,
  onClick,
  children,
}) => (
  <button
    title={title}
    onClick={onClick}
    className="h-7 w-7 flex items-center justify-center rounded-md text-gray-300 hover:text-white hover:bg-white/5"
  >
    {children}
  </button>
);

const MetaIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="inline-flex items-center justify-center text-[12px] text-gray-400">{icon}</div>
);


const Sparkline: React.FC<{ seed?: number }> = ({ seed = 1 }) => {

  const pts = Array.from({ length: 16 }).map((_, i) => {
    const x = (i / 15) * 100;
    const y = 50 + Math.sin((i + seed) * 0.8) * 18 + Math.random() * 8 - 4;
    return `${x},${y}`;
  });
  const d = "M" + pts.map((p, i) => (i === 0 ? p : " L " + p)).join("");
  return (
    <svg width="80" height="28" viewBox="0 0 100 60" className="block">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stopColor="#2dd4bf" stopOpacity="0.9" />
          <stop offset="1" stopColor="#60a5fa" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <path d={d} fill="none" stroke="url(#g)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const PairRow: React.FC<{ data: any }> = ({ data }) => {
  const color = stringToColor(data.symbol);
  const iconLetter = data.symbol?.[0] ?? "?";
  const useImg = USE_UPLOADED_IMG && SAMPLE_IMG_PATH;
  return (
    <div className="flex gap-3 items-start border-b border-white/6 px-3 py-2 hover:bg-white/5">

      <div className="relative flex-shrink-0">
        {useImg ? (

          <img src={SAMPLE_IMG_PATH} alt={data.symbol} className="h-12 w-12 rounded-md object-cover" />
        ) : (
          <div
            className="h-12 w-12 rounded-md flex items-center justify-center text-white font-semibold text-sm"
            style={{ backgroundColor: color }}
          >
            {iconLetter}
          </div>
        )}

        <span className="absolute -bottom-1 left-1 h-3 w-3 rounded-full bg-emerald-400 border border-black" />
      </div>

      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="truncate text-sm font-semibold text-white">{data.symbol}</div>
          <div className="truncate text-xs text-gray-400 max-w-[220px]">{data.name}</div>

        
          <ExternalLink className="ml-1 h-4 w-4 text-gray-400 hover:text-white" />
        </div>

        <div className="flex items-center gap-2 text-[11px] text-gray-400">
          <span className="text-emerald-400">{data.age}</span>
          <MetaIcon icon={<Search className="h-4 w-4" />} />
          <MetaIcon icon={<Users className="h-4 w-4" />} />
          <MetaIcon icon={<BookOpen className="h-4 w-4" />} />
          <div className="text-gray-500">•</div>
          <div className="text-[11px] text-gray-400">#{data.tx} tx</div>
        </div>

        <div className="flex items-center gap-2">
          {data.stats.map((s: any, idx: number) => (
            <span key={idx} className={`px-2 py-[2px] rounded text-[11px] ${s.cls}`}>
              {s.label}
            </span>
          ))}

          <div className="ml-2 inline-flex items-center gap-1">
            <Sparkline seed={Math.abs(data.symbol.charCodeAt(0)) % 10} />
          </div>
        </div>
      </div>

     
      <div className="flex flex-col items-end gap-2">
        <div className="text-right text-[11px]">
          <div className="text-gray-400">MC</div>
          <div className="font-semibold text-sky-300">{data.mc}</div>
          <div className="text-[11px] text-gray-400 mt-0.5">V {data.v}</div>
        </div>

        <div className="flex items-center gap-2">
          <button className="rounded-full bg-[#526fff] px-3 py-[6px] text-[12px] font-semibold text-white shadow-[0_6px_18px_-8px_rgba(82,111,255,0.8)]">
            0 SOL
          </button>

          <button
            title="Row log"
            className="h-8 w-8 rounded-md bg-[#0b0c10] border border-white/10 flex items-center justify-center text-gray-300 hover:bg-white/5"
            onClick={() => {
              
              console.log("Open log for", data.symbol);
            }}
          >
            <FileText className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};


const ColumnHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 text-xs">
      <div className="flex items-center gap-3">
        <div className="text-sm font-semibold text-white">{title}</div>
      </div>

      <div className="flex items-center gap-2">
        <div className="inline-flex items-center gap-2 rounded-full px-2 py-0.5 bg-white/2 text-[11px]">
          <Zap className="h-4 w-4 text-gray-200" />
          <span className="text-gray-100 font-medium">0</span>
        </div>

        <div className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 bg-white/5">
          <span className="px-2 py-[2px] rounded-full bg-white/6 text-[11px] text-gray-200">P1</span>
          <span className="px-2 py-[2px] rounded-full text-[11px] text-gray-300">P2</span>
          <span className="px-2 py-[2px] rounded-full text-[11px] text-gray-300">P3</span>
        </div>

        <SmallIconButton title="Filter">
          <SlidersHorizontal className="h-4 w-4" />
        </SmallIconButton>

        <SmallIconButton title="More">
          <MoreHorizontal className="h-4 w-4" />
        </SmallIconButton>
      </div>
    </div>
  );
};

const ColumnCard: React.FC<{ title: string; rows: any[] }> = ({ title, rows }) => {
  return (
    <div className="flex h-[640px] min-w-[300px] max-w-[520px] flex-col overflow-hidden border-l border-white/6 bg-[#050608]">
      <ColumnHeader title={title} />
      <div className="flex-1 overflow-y-auto">
        {rows.map((r) => (
          <PairRow key={r.id} data={r} />
        ))}
      </div>
    </div>
  );
};



export default function ThreeColumnsFull() {
  
  const [left, setLeft] = useState(false);
  return (
    <section className="px-2 md:px-4 lg:px-6 py-4">
      
      <div
        className="-mx-2 overflow-x-auto px-2 lg:overflow-visible"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div
          className="flex w-max gap-0 lg:grid lg:grid-cols-3 lg:w-full lg:gap-0"
          style={{ scrollSnapType: "x mandatory" }}
        >
          <div className="snap-start lg:snap-none">
            <ColumnCard title="New Pairs" rows={NEW_PAIRS} />
          </div>

          <div className="snap-start lg:snap-none">
            <ColumnCard title="Final Stretch" rows={FINAL_STRETCH} />
          </div>

          <div className="snap-start lg:snap-none">
            <ColumnCard title="Migrated" rows={MIGRATED} />
          </div>
        </div>
      </div>

      
      <style jsx>{`
        /* horizontal scrollbar for the outer container */
        .-mx-2::-webkit-scrollbar {
          height: 6px;
        }
        .-mx-2::-webkit-scrollbar-track {
          background: transparent;
        }
        .-mx-2::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.06);
          border-radius: 999px;
        }

        /* inner vertical scrollbars for columns (webkit) */
        .flex-1::-webkit-scrollbar {
          width: 8px;
        }
        .flex-1::-webkit-scrollbar-track {
          background: transparent;
        }
        .flex-1::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.04);
          border-radius: 6px;
        }

        /* firefox */
        .-mx-2 {
          scrollbar-color: rgba(255, 255, 255, 0.06) transparent;
          scrollbar-width: thin;
        }
        .flex-1 {
          scrollbar-color: rgba(255, 255, 255, 0.04) transparent;
          scrollbar-width: thin;
        }
      `}</style>
    </section>
  );
}
