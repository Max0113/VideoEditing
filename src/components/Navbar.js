'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { TfiAlignJustify } from "react-icons/tfi";

function Navbar({ color }) {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        isActive &&
        !menuRef.current?.contains(e.target) &&
        !iconRef.current?.contains(e.target)
      ) {
        setIsActive(false);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [isActive]);

  return (
    <header className="border-b border-black/10 bg-white/70 backdrop-blur-xl z-50">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <div className="text-lg font-extrabold tracking-tight">VideoEditor</div>

        <div
          ref={menuRef}
          className={`
            flex flex-col bg-white backdrop-blur-2xl top-0 
            px-20 py-30 h-screen md:h-auto md:p-0 md:bg-transparent
            md:backdrop-blur-none absolute z-40 items-center gap-8 
            text-sm font-semibold text-slate-600 md:flex-row 
            md:relative transition-all duration-300 md:border-0 
            border-l-[0.2px] border-black/10
            ${isActive ? "right-0" : "-right-100 md:right-auto"}
          `}
        >
          <Link className="transition hover:text-black hover:border-b-2" href="/">Home</Link>
          <Link className="transition hover:text-black hover:border-b-2" href="/Protfolio">Portfolio</Link>
          <Link className="transition hover:text-black hover:border-b-2" href="/About">About</Link>
          <Link className="transition hover:text-black hover:border-b-2" href="/Contact">Contact</Link>
        </div>

        <div ref={iconRef} className="z-200 text-[1.4rem] block md:hidden">
          <TfiAlignJustify onClick={() => setIsActive(!isActive)} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;