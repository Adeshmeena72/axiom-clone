"use client";

import { ChevronDown } from "lucide-react";

export default function BottomBar() {
  return (
    <div className="fixed bottom-0 left-0 z-40 w-full border-t border-white/10 bg-[#050505]/95 backdrop-blur-md px-4 py-2 flex items-center gap-4 text-xs text-gray-300">

      {/* PRESET BUTTON */}
      <button className="flex items-center gap-2 rounded-md bg-[#1c2bff]/20 px-3 py-1 text-[#8fa0ff] font-medium">
        PRESET 1
      </button>

      {/* QUICK LINKS */}
      <div className="hidden md:flex items-center gap-4 text-gray-400">
        <span className="cursor-pointer hover:text-white">Wallet</span>
        <span className="cursor-pointer hover:text-white">Twitter</span>
        <span className="cursor-pointer hover:text-white">Discover</span>
        <span className="cursor-pointer hover:text-white">Pulse</span>
        <span className="cursor-pointer hover:text-white">PnL</span>
      </div>

      {/* PORTFOLIO NUMBERS */}
      <div className="flex items-center gap-3 ml-auto text-[11px]">

        <span className="flex items-center gap-1 text-orange-400 font-semibold">
          <span className="text-lg">🟠</span> $86.5K
        </span>

        <span className="flex items-center gap-1 text-cyan-300 font-semibold">
          <span className="text-lg">🔷</span> $2834
        </span>

        <span className="flex items-center gap-1 text-emerald-400 font-semibold">
          $133.59
        </span>

        <span className="flex items-center gap-1 text-gray-400">
          $54.7K
        </span>

        <span className="flex items-center gap-1 text-gray-400">
          0.006
        </span>

        <span className="flex items-center gap-1 text-gray-400">
          0.0246
        </span>
      </div>

      {/* CONNECTION STATUS */}
      <div className="ml-4 flex items-center gap-2 rounded-full bg-emerald-600/20 text-emerald-300 px-3 py-1 font-medium">
        <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
        Connection is stable
      </div>

      {/* GLOBAL DROPDOWN */}
      <button className="flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-gray-200 hover:bg-white/10">
        GLOBAL
        <ChevronDown className="h-4 w-4" />
      </button>

      {/* RIGHT SIDE ICONS */}
      <div className="flex items-center gap-2">
        <span className="cursor-pointer hover:text-white">📺</span>
        <span className="cursor-pointer hover:text-white">🔔</span>
        <span className="cursor-pointer hover:text-white">⚙️</span>
        <span className="cursor-pointer hover:text-white">👾</span>
      </div>
    </div>
  );
}
