"use client";

import {
  HelpCircle,
  LayoutList,
  ChevronDown,
  Bookmark,
  Table2,
  Volume2,
  Settings2,
  MonitorSmartphone,
} from "lucide-react";

export default function PulseHeaderBar() {
  return (
    <div className=" mt-7 flex h-12 w-full items-center justify-between border-b border-[#000000] bg-[#000000] px-4 lg:px-6 text-gray-200">
  
      <div className="flex items-center gap-3">
     
        <span className="text-lg font-semibold text-white">Pulse</span>

      
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#151624]">
          <span className="h-4 w-4 rounded-[6px] bg-gradient-to-tr from-[#9945FF] via-[#43B4CA] to-[#19FB9B]" />
        </div>

        
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#151624] text-yellow-400">
          📦
        </div>
      </div>

     
      <div className="flex items-center gap-3 text-xs">
        
        <button className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/5">
          <HelpCircle className="h-4 w-4" />
        </button>

        
        <button className="flex items-center gap-2 rounded-full bg-[#101119] px-3 py-1 text-[11px] font-medium hover:bg-white/10">
          <LayoutList className="h-4 w-4" />
          <span>Display</span>
          <ChevronDown className="h-3 w-3 text-gray-400" />
        </button>

        <button className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/5">
          <Bookmark className="h-4 w-4" />
        </button>

        
        <button className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/5">
          <Table2 className="h-4 w-4" />
        </button>

       
        <button className="hidden md:flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/5">
          <Volume2 className="h-4 w-4" />
        </button>

        
        <button className="hidden md:flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/5">
          <Settings2 className="h-4 w-4" />
        </button>

       
        <div className="flex items-center gap-2 rounded-full border border-white/12 bg-[#101119] px-3 py-1 text-[11px]">
          <MonitorSmartphone className="h-3.5 w-3.5 text-gray-300" />
          <span className="font-medium text-gray-100">1</span>
          <span className="h-4 w-4 rounded-[6px] bg-gradient-to-tr from-[#9945FF] via-[#43B4CA] to-[#19FB9B]" />
          <span className="font-medium text-gray-100">0</span>
          <ChevronDown className="h-3 w-3 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
