'use client'
import Navbar from "@/components/Navbar";
import React, { useRef } from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { RxTriangleRight } from "react-icons/rx";
import Backround from "@/components/Backround";
import Link from "next/link"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText); 

import Video from 'next-video';
import getStarted from '../../videos/Video1.mp4';

export default function Home() {

  const container = useRef();

  useGSAP(() => {

    const splitTitle = new SplitText(".splitTitle", { type: "words" });
    const splitDescription = new SplitText(".splitDescription", { type: "lines" });

    // ✅ الاثنين لازم يظهرون قبل ما GSAP يحرك الأجزاء
    gsap.set(".splitTitle", { opacity: 1 });
    gsap.set(".splitDescription", { opacity: 1 });

    gsap.set(splitTitle.words, { autoAlpha: 0, y: -30 });
    gsap.set(splitDescription.lines, { autoAlpha: 0, y: 30 });

    const timeline = gsap.timeline();

    timeline.to(splitTitle.words, {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });

    timeline.to(splitDescription.lines, {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });

    timeline.to(".Video", {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: "power",
    },"-=50%");

    timeline.to(".buttons", {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power",
    },"-=20%");

    timeline.to(".Card", {
      autoAlpha: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power",
    },"-=50%");

    return () => {
      splitTitle.revert();
      splitDescription.revert();
      timeline.kill();
  };

}, { scope: container });

  return (
    <main ref={container} className="min-h-screen">

      <div className="absolute -z-30">
        <Backround />
      </div>
      
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/20">
        <Navbar color="" />
      </nav>
      <section id="home" className="mx-auto flex w-full max-w-6xl flex-col items-center gap-14 px-6 py-20 lg:flex-row lg:items-start lg:py-24">
        <div className="w-full max-w-xl">

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl splitTitle opacity-0">
            Creative Video
            <span className="mt-2 block text-slate-500">Editor</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-slate-500 sm:text-lg splitDescription opacity-0">
            Transforming raw footage into compelling stories. Specializing in commercial, documentary, and creative content.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/Protfolio" className="inline-flex items-center gap-2 rounded-full bg-black px-3 pr-5 py-3 text-[12px] sm:text-sm font-semibold text-white shadow-lg shadow-black/20 hover:-translate-y-0.5 transition-all duration-300 buttons invisible translate-y-4">
              <span className="text-[1.4rem] sm:text-[1.5rem] w-4">
                <RxTriangleRight />
              </span>
              View My Work
            </Link>
            <Link href="https://drive.google.com/drive/folders/1OZYZ2_tz8PY9y_jAjGXV-adnFBJip_8q?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto" className="inline-flex text-[12px] sm:text-sm items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3  font-semibold text-slate-800 hover:border-black/20 hover:-translate-y-0.5 transition-all duration-300 buttons invisible translate-y-4">
              <span className="text-[1.4rem] sm:text-[1.5rem] w-4">
                <MdOutlineFileDownload />
              </span>
              Download Reel
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-[10px] sm:text-sm text-slate-500">
            <div className="Card invisible">
              <div className="text-2xl font-extrabold text-slate-900">30+</div>
              Projects Completed
            </div>
            <div className="Card invisible">
              <div className="text-2xl font-extrabold text-slate-900">2+</div>
              Years Experience
            </div>
            <div className="Card invisible">
              <div className="text-2xl font-extrabold text-slate-900">20+</div>
              Happy Clients
            </div>
          </div>
        </div>

        <div className="w-full hidden lg:flex mt-20  justify-center items-center rounded-2xl overflow-hidden Video invisible translate-y-8">
          <Video
            src={getStarted}
            style={{ width: '100%', borderRadius: '0.8rem' }}
            className=" items-center-safe"
            controls
            loop
            playsInline
            muted
          />
        </div>
      </section>
    </main>
  );
}