"use client";

import React from "react";
import { FileText } from "lucide-react";

/* ---------------------------------------------
   Helper: generate consistent color per symbol
---------------------------------------------- */
function stringToColor(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 70%, 45%)`;
}

/* ---------------------------------------------
   Types
---------------------------------------------- */
type Stat = { label: string; cls?: string };

type PairItem = {
  id: string;
  symbol: string;
  name: string;
  age: string;
  marketCap: string;
  volume: string;
  stats: Stat[];
};

/* ---------------------------------------------
   Generate demo data (no images needed)
---------------------------------------------- */
function makeItems(prefix: string, count = 15): PairItem[] {
  return Array.from({ length: count }).map((_, i) => {
    const SYMBOL = (prefix + (i + 1)).toUpperCase();
    return {
      id: `${prefix}-${i}`,
      symbol: SYMBOL,
      name: `${SYMBOL} Token`,
      age: `${Math.floor(Math.random() * 50) + 1}s`,
      marketCap: `$${(Math.random() * 5000 + 1000).toFixed(0)}`,
      volume: `$${(Math.random() * 500).toFixed(0)}`,
      stats: [
        { label: `${Math.round(Math.random() * 20)}%`, cls: "text-emerald-400 bg-emerald-900/20" },
        { label: `${Math.round(Math.random() * 10)}%`, cls: "text-blue-300 bg-blue-900/20" },
        { label: `${Math.round(Math.random() * 30)}%`, cls: "text-red-400 bg-red-900/20" },
      ],
    };
  });
}

const NEW_PAIRS = makeItems("np", 15);
const FINAL_STRETCH = makeItems("fs", 16);
const MIGRATED = makeItems("mg", 18);

/* ---------------------------------------------
   Small Components
---------------------------------------------- */

const StatPill: React.FC<{ s: Stat }> = ({ s }) => (
  <span className={`px-1.5 py-0.5 rounded text-[10px] ${s.cls ?? "text-gray-300 bg-white/5"}`}>
    {s.label}
  </span>
);

/* Row Component (auto icon + details + log icon + button) */
const PairRow: React.FC<{ item: PairItem }> = ({ item }) => (
  <div className="flex gap-3 border-b border-white/5 px-3 py-2 hover:bg-white/5 transition-colors">
    
    {/* AUTO ICON */}
    <div className="relative flex-shrink-0">
      <div
        className="h-12 w-12 rounded-md flex items-center justify-center text-white font-bold text-sm"
        style={{ backgroundColor: stringToColor(item.symbol) }}
      >
        {item.symbol[0]}
      </div>
      <span className="absolute -bottom-1 left-1 h-3 w-3 rounded-full bg-emerald-400 border border-black" />
    </div>

    {/* Middle Content */}
    <div className="flex flex-1 min-w-0 flex-col gap-1">
      {/* Title */}
      <div className="flex items-center gap-2">
        <span className="truncate text-sm font-semibold text-white">{item.symbol}</span>
        <span className="truncate text-xs text-gray-400 max-w-[140px]">{item.name}</span>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-2 text-[11px] text-gray-400">
        <span className="text-emerald-400">{item.age}</span>
        <span>🔍</span>
        <span>🔗</span>
        <span>👥</span>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-2">
        {item.stats.map((s, i) => (
          <StatPill key={i} s={s} />
        ))}
      </div>
    </div>

    {/* Right Side */}
    <div className="flex flex-col items-end justify-between">
      <div className="text-[11px] text-right">
        <p className="text-gray-400">MC</p>
        <p className="text-sky-300 font-semibold">{item.marketCap}</p>
      </div>

      <div className="flex gap-2 mt-2">
        {/* Button */}
        <button className="rounded-full bg-[#526fff] px-3 py-[6px] text-[11px] font-semibold text-white hover:bg-[#6c7aff]">
          0 SOL
        </button>

        {/* LOG ICON */}
        <button
          className="h-8 w-8 rounded-md bg-[#111] border border-white/10 flex items-center justify-center text-gray-300 hover:bg-white/5"
          onClick={() => console.log("LOG OPEN:", item.symbol)}
        >
          <FileText className="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
);

/* ---------------------------------------------
   Column Component (scrollable)
---------------------------------------------- */
const Column: React.FC<{ title: string; items: PairItem[] }> = ({ title, items }) => (
  <div className="flex h-[520px] min-w-[300px] max-w-[420px] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#050608]">
    
    {/* Header */}
    <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 text-xs">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-white">{title}</span>
        <button className="bg-white/5 px-2 py-0.5 rounded-full text-[10px]">0</button>
        <button className="bg-white/5 px-2 py-0.5 rounded-full text-[10px]">P1</button>
        <button className="px-2 py-0.5 rounded-full text-[10px] text-gray-300 hover:bg-white/5">P2</button>
        <button className="px-2 py-0.5 rounded-full text-[10px] text-gray-300 hover:bg-white/5">P3</button>
      </div>
      <button className="p-1 rounded hover:bg-white/5">≡</button>
    </div>

    {/* Scrollable List */}
    <div className="flex-1 overflow-y-auto">
      {items.map(item => (
        <PairRow key={item.id} item={item} />
      ))}
    </div>

  </div>
);

/* ---------------------------------------------
   MAIN — Three Column Board
---------------------------------------------- */
export default function ThreeColumnsBoard() {
  return (
    <section className="px-3 md:px-6 lg:px-10 py-4">

      {/* Horizontal scroll on mobile — Grid on desktop */}
      <div
        className="overflow-x-auto -mx-3 px-3 lg:overflow-visible"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div
          className="
            flex gap-4 w-max
            lg:w-full lg:grid lg:grid-cols-3 lg:gap-4
          "
        >
          <div className="snap-start lg:snap-none">
            <Column title="New Pairs" items={NEW_PAIRS} />
          </div>

          <div className="snap-start lg:snap-none">
            <Column title="Final Stretch" items={FINAL_STRETCH} />
          </div>

          <div className="snap-start lg:snap-none">
            <Column title="Migrated" items={MIGRATED} />
          </div>
        </div>
      </div>

    </section>
  );
}
