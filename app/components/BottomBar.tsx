"use client";

import {
  LayoutList,
  ChevronDown,
  Settings,
  Monitor,
  Bell,
  User,
  Gamepad2,
} from "lucide-react";

const MENU_ITEMS = [
  { name: "Wallet", icon: "wallet" },
  { name: "Twitter", icon: "twitter" },
  { name: "Discover", icon: "discover" },
  { name: "Pulse", icon: "pulse" },
  { name: "PnL", icon: null },
];

export default function BottomBar() {
  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 z-40
        flex items-center gap-3
        border-t border-white/10
        bg-[#070708]/95
        px-3 sm:px-4 py-1.5
        text-[10.5px] sm:text-[11px] text-gray-300
        backdrop-blur-md
        overflow-x-auto sm:overflow-visible
        whitespace-nowrap
      "
    >
      
      <button className="flex items-center gap-2 rounded-md border border-[#3a4aff] bg-[#12182b] px-2.5 sm:px-3 py-0.5 font-semibold text-[#97a6ff] shadow-[0_0_12px_-3px_rgba(82,111,255,0.7)]">
        <LayoutList className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        PRESET 1
      </button>

      <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-[#0c0e14] px-3 py-0.5">
        <span className="font-medium">1</span>

        <span className="h-4 w-4 rounded-[6px] bg-gradient-to-tr from-[#9945FF] via-[#43B4CA] to-[#19FB9B]" />

        <span className="font-medium">0</span>

        <ChevronDown className="h-3 w-3 text-gray-400" />
      </div>

      <button className="hidden md:flex h-6 w-6 items-center justify-center rounded-md border border-white/15 bg-[#0c0e14] text-gray-400 hover:bg-white/10 hover:text-white">
        <Settings className="h-3.5 w-3.5" />
      </button>

      
      <div className="flex items-center gap-3 sm:gap-5">
        {MENU_ITEMS.map((item) => (
          <button
            key={item.name}
            className="relative flex items-center gap-1 cursor-pointer text-gray-300 hover:text-white"
          >
      
            <span className="absolute -top-1 right-0 translate-x-1/2 h-1.5 w-1.5 rounded-full bg-pink-400" />

            {item.icon === "wallet" && (
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-white/20 bg-[#0c0e14] text-[9px]">
                🧾
              </span>
            )}

            {item.icon === "twitter" && (
              <span className="text-[10px] sm:text-[11px]">𝕏</span>
            )}

            {item.icon === "discover" && (
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-white/20 text-[9px]">
                ⓘ
              </span>
            )}

            {item.icon === "pulse" && (
              <span className="inline-flex h-4 w-4 items-center justify-center text-[12px]">
                ∿
              </span>
            )}

            <span>{item.name}</span>
          </button>
        ))}
      </div>

      <div className="ml-auto hidden lg:flex items-center gap-3 pr-2">
        <span className="flex items-center gap-1 font-semibold text-orange-400">
          🪙 $86.5K
        </span>

        <span className="flex items-center gap-1 font-semibold text-cyan-300">
          💠 $2834
        </span>

        <span className="flex items-center gap-1 font-semibold text-emerald-400">
          $133.59
        </span>

        <span className="text-gray-400">$54.7K</span>
        <span className="text-gray-400">0.006</span>
        <span className="text-gray-400">0.0246</span>
      </div>

   
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-[#0c0e14] px-2 py-0.5">
        <span className="h-2 w-2 rounded-full bg-green-400" />
        <span className="h-2 w-2 rounded-full bg-yellow-400" />
        <span className="h-2 w-2 rounded-full bg-red-500" />
      </div>

     
      <div className="hidden sm:flex items-center gap-2 rounded-full bg-emerald-600/20 px-3 py-0.5 font-medium text-emerald-300">
        <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
        Connection is stable
      </div>

  
      <button className="hidden md:flex items-center gap-1 rounded-md border border-white/10 bg-[#0c0e14] px-2 py-0.5 text-gray-200 hover:bg-white/10">
        GLOBAL
        <ChevronDown className="h-4 w-4" />
      </button>

      
      <div className="flex items-center gap-1 pl-1">
        <Bell className="h-4 w-4 cursor-pointer text-gray-400 hover:text-white" />
        <Monitor className="hidden sm:inline-flex h-4 w-4 cursor-pointer text-gray-400 hover:text-white" />
        <User className="hidden sm:inline-flex h-4 w-4 cursor-pointer text-gray-400 hover:text-white" />
        <Gamepad2 className="hidden sm:inline-flex h-4 w-4 cursor-pointer text-gray-400 hover:text-white" />
      </div>
    </div>
  );
}
