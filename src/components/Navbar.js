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
    <header className="sticky top-0 border-b border-black/10 bg-white/70 backdrop-blur-xl z-50">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <div className="text-lg font-extrabold tracking-tight">VideoEditor</div>

        <div
          ref={menuRef}
          className={`
            fixed top-0 right-0 w-[75%] h-screen bg-white z-40
            flex flex-col items-center justify-center gap-8
            text-sm font-semibold text-slate-600
            transition-transform duration-300 ease-in-out
            md:static md:w-auto md:h-auto md:flex-row md:bg-transparent
            md:translate-x-0 md:justify-normal
            ${isActive ? "translate-x-0" : "translate-x-full"}
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