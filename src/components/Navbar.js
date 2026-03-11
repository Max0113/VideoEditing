import React from 'react';
import Link from "next/link";


function Navbar({ color }) {
  return (
    <header className="border-b border-black/10 bg-white/70 backdrop-blur-xl ">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
            <div className="text-lg font-extrabold tracking-tight">VideoEditor</div>
            <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
                <Link className="transition hover:text-black hover:border-b-2"  href="/">Home</Link>
                <Link className="transition hover:text-black hover:border-b-2" href="/Protfolio">Portfolio</Link>
                <Link className="transition hover:text-black hover:border-b-2" href="/About">About</Link>
                <Link className="transition hover:text-black hover:border-b-2" href="/Contact">Contact</Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar