"use client";

import { Settings, Star, LineChart } from "lucide-react";

export default function TopToolsBar() {
  return (
    <div className="h-6 w-full flex items-center border-b border-[#1a1717] bg-[#000000] px-4 text-gray-300">
      
      
      <div className="flex items-center gap-2">
        <button className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-white/5">
          <Settings className="h-4 w-4" />
        </button>

        <button className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-white/5">
          <Star className="h-4 w-4" />
        </button>

        <button className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-white/5">
          <LineChart className="h-4 w-4" />
        </button>
      </div>

      
      <div className="mx-3 h-5 w-px bg-[#2a2c34]" />

      
      <div className="flex-1" />
    </div>
  );
}
