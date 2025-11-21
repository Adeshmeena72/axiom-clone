"use client";

import React from "react";

type Stat = { label: string; cls?: string };

type PairItem = {
  id: string;
  symbol: string;
  name: string;
  age: string;
  img: string;
  marketCap: string;
  volume: string;
  stats: Stat[];
};

const sampleData: PairItem[] = [
  {
    id: "1",
    symbol: "PMF",
    name: "Peak Male Performance",
    age: "2s",
    img: "/img1.jpg", // replace with your image (use public folder)
    marketCap: "$4.25K",
    volume: "$271",
    stats: [
      { label: "7%", cls: "text-emerald-400 bg-emerald-900/20" },
      { label: "7%", cls: "text-emerald-400 bg-emerald-900/20" },
      { label: "-7%", cls: "text-red-400 bg-red-900/20" },
    ],
  },
  {
    id: "2",
    symbol: "EIBBLE",
    name: "Eibble",
    age: "3s",
    img: "/img1.jpg",
    marketCap: "$3.74K",
    volume: "$1",
    stats: [{ label: "0%", cls: "text-emerald-400 bg-emerald-900/20" }],
  },
  {
    id: "3",
    symbol: "PIBLON",
    name: "Piblon",
    age: "3s",
    img: "/img1.jpg",
    marketCap: "$4.92K",
    volume: "$1K",
    stats: [{ label: "14%", cls: "text-emerald-400 bg-emerald-900/20" }],
  },
];

const StatPill = ({ s }: { s: Stat }) => (
  <span
    className={`px-1.5 py-[2px] rounded text-[10px] ${s.cls ?? "text-gray-300 bg-white/5"}`}
  >
    {s.label}
  </span>
);

const PairRow = ({ item }: { item: PairItem }) => (
  <div className="flex gap-3 border-b border-white/5 px-3 py-2 hover:bg-white/5 transition-colors">
    {/* TOKEN IMAGE */}
    <div className="relative flex-shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.img}
        alt={item.symbol}
        className="h-12 w-12 rounded-md object-cover"
      />
      <span className="absolute -bottom-1 left-1 h-3 w-3 rounded-full bg-emerald-400 border border-black"></span>
    </div>

    {/* MID CONTENT */}
    <div className="flex flex-col min-w-0 flex-1 gap-1">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-white truncate">
          {item.symbol}
        </span>
        <span className="text-xs text-gray-400 truncate">{item.name}</span>
      </div>

      <div className="flex items-center gap-2 text-[11px] text-gray-400">
        <span className="text-emerald-400">{item.age}</span>
        <span>🔍</span>
        <span>🔗</span>
        <span>👥</span>
      </div>

      <div className="flex items-center gap-2">
        {item.stats.map((s, i) => (
          <StatPill key={i} s={s} />
        ))}
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex flex-col justify-between items-end">
      <div className="text-right text-[11px]">
        <p className="text-gray-400">MC</p>
        <p className="font-semibold text-sky-300">{item.marketCap}</p>
      </div>
      <button className="px-3 py-[2px] rounded-full bg-[#526fff] text-white text-[11px] font-semibold shadow-[0_0_10px_-2px_rgba(82,111,255,0.6)]">
        0 SOL
      </button>
    </div>
  </div>
);

export default function NewPairsSection() {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#050608] h-[520px] flex flex-col">
      {/* HEADER */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">New Pairs</span>
          <button className="rounded-full bg-white/5 px-2 py-[2px] text-gray-300 text-[10px]">
            0
          </button>
          <button className="rounded-full bg-white/5 px-2 py-[2px] text-gray-300 text-[10px]">
            P1
          </button>
          <button className="rounded-full px-2 py-[2px] text-gray-400 text-[10px] hover:bg-white/5">
            P2
          </button>
          <button className="rounded-full px-2 py-[2px] text-gray-400 text-[10px] hover:bg-white/5">
            P3
          </button>
        </div>

        <button className="px-2 py-1 hover:bg-white/5 rounded">
          ≡
        </button>
      </div>

      {/* SCROLL CONTENT */}
      <div className="flex-1 overflow-y-auto">
        {sampleData.map((p) => (
          <PairRow key={p.id} item={p} />
        ))}
      </div>
    </div>
  );
}
