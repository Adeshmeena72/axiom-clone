"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Bell,
  Star,
  Wallet,
  ChevronDown,
  Menu,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Discover", href: "/discover" },
  { label: "Pulse", href: "/pulse" },
  { label: "Trackers", href: "/trackers" },
  { label: "Perpetuals", href: "/perps" },
  { label: "Yield", href: "/yield" },
  { label: "Vision", href: "/vision" },
  { label: "Portfolio", href: "/portfolio" },
];

const Navbar: React.FC = () => {
  const active = "/pulse";

  return (
    <nav className=" left-0 z-50 flex h-16 w-full items-center justify-between border-b border-white/10 bg-[#050505] px-4 text-white md:px-6">
      
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4 lg:gap-6">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <Image
            src="/icon.png"
            alt="App Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />

          <span className="flex items-baseline gap-1">
            <span className="text-xl md:text-2xl font-semibold tracking-tight">
              AXIOM
            </span>
            <span className="text-sm md:text-base text-gray-300">Pro</span>
          </span>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden lg:flex items-center gap-1 text-[14px]">
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === active;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md transition-colors no-underline ${
                  isActive
                    ? "bg-[#526FFF]/30 text-white"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-3">
        
        {/* SEARCH (DESKTOP) */}
        <div className="hidden md:flex h-8 w-40 lg:w-56 items-center rounded-full border border-white/10 bg-black/80 px-3 text-sm text-white focus-within:border-gray-400 transition">
          <Search className="h-4 w-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search by token or CA..."
            className="flex-1 bg-transparent outline-none text-xs placeholder:text-gray-500"
          />
          <span className="hidden lg:flex text-[10px] text-gray-400 border border-white/10 px-1.5 rounded ml-2">
            /
          </span>
        </div>

        {/* CHAIN SELECT */}
        <button className="hidden sm:flex h-8 items-center gap-2 rounded-full border border-white/10 bg-[#0f1114] px-3 text-xs hover:bg-white/5">
          <span className="h-4 w-4">
            {/* sol svg */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.44955 6.75999H12.0395C12.1595 6.75999..."
                fill="url(#solanaGradient)"
              />
              <defs>
                <linearGradient
                  id="solanaGradient"
                  x1="1"
                  y1="1"
                  x2="15"
                  y2="15"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9945FF" />
                  <stop offset="1" stopColor="#19FB9B" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span>SOL</span>
          <ChevronDown className="h-3 w-3 text-gray-400" />
        </button>

        {/* PRIMARY ACTION */}
        <button className="h-8 rounded-full bg-[#5e6ad2] px-5 text-xs font-semibold text-black shadow-[0_0_12px_-2px_rgba(94,106,210,0.7)] hover:bg-[#526fff] transition">
          Deposit
        </button>

        {/* ICONS */}
        <button className="h-8 w-8 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition">
          <Star className="h-4 w-4" />
        </button>

        <button className="h-8 w-8 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition">
          <Bell className="h-4 w-4" />
        </button>

        {/* WALLET */}
        <div className="hidden xl:flex items-center gap-2 h-8 rounded-full bg-[#0f1114] border border-white/10 pl-3 pr-2 text-xs hover:border-white/20 transition cursor-pointer">
          <Wallet className="h-3 w-3 text-gray-400" />
          <span className="h-3 w-px bg-gray-800"></span>
          <span className="flex items-center gap-1 text-gray-300">
            <span className="text-cyan-400">≡</span> 0
          </span>
          <span className="flex items-center gap-1 text-gray-300">
            <span className="h-3 w-3 flex items-center justify-center rounded-full bg-green-500/20 text-[8px] text-green-400">$</span>
            0
          </span>
          <ChevronDown className="h-3 w-3 text-gray-500" />
        </div>

        {/* AVATAR */}
        <button className="h-8 w-8 rounded-full overflow-hidden border border-white/10 bg-gray-700 hover:border-white/30 transition">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=AxiomAvatar"
            alt="User"
            className="h-full w-full object-cover"
          />
        </button>

        {/* MOBILE MENU */}
        <button className="lg:hidden h-8 w-8 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
