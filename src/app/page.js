'use client'

import React, { useRef } from 'react';
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MdOutlineFileDownload } from "react-icons/md";
import { RxTriangleRight } from "react-icons/rx";
import Navbar from "@/components/Navbar";
import Backround from "@/components/Backround";
import CloudinaryVideoPlayer from "@/components/CloudinaryVideoPlayer";


gsap.registerPlugin(useGSAP);

export default function Home() {
  const container = useRef();

  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.to(".hero-copy", {
      autoAlpha: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.16,
      ease: "power3.out",
    });

    timeline.to(".Video", {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=50%");

    timeline.to(".buttons", {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      stagger: 0.2
    }, "-=50%");

    timeline.to(".Card", {
      autoAlpha: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.18,
      ease: "power3.out",
    }, "-=50%");

    return () => {
      timeline.kill();
    };
  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen">
      <div className="absolute inset-0 -z-30 overflow-hidden">
        <Backround />
      </div>

      <Navbar color="" />

      <section
        id="home"
        className="mx-auto flex w-full max-w-6xl flex-col items-center gap-14 px-8 py-25 lg:flex-row lg:items-start lg:py-24"
      >
        <div className="w-full max-w-xl">
          <h1 className="hero-copy text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl invisible translate-y-8">
            Creative Video
            <span className="mt-2 block text-slate-500">Editor</span>
          </h1>

          <p className="hero-copy mt-6 text-base leading-relaxed text-slate-500 sm:text-lg invisible translate-y-8">
            Transforming raw footage into compelling stories. Specializing in commercial,
            documentary, and creative content.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/Protfolio"
              className="buttons inline-flex items-center gap-2 rounded-full bg-black px-3 py-3 pr-5 text-[12px] font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 sm:text-sm invisible translate-y-8"
            >
              <span className="w-4 text-[1.4rem] sm:text-[1.5rem]">
                <RxTriangleRight />
              </span>
              View My Work
            </Link>

            <Link
              href="https://drive.google.com/drive/folders/1OZYZ2_tz8PY9y_jAjGXV-adnFBJip_8q?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto"
              className="buttons inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-[12px] font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-black/20 sm:text-sm invisible translate-y-8"
            >
              <span className="w-4 text-[1.4rem] sm:text-[1.5rem]">
                <MdOutlineFileDownload />
              </span>
              Download Reel
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-[10px] text-slate-500 sm:text-sm">
            <div className="Card invisible translate-y-8">
              <div className="text-2xl font-extrabold text-slate-900">30+</div>
              Projects Completed
            </div>
            <div className="Card invisible translate-y-8">
              <div className="text-2xl font-extrabold text-slate-900">2+</div>
              Years Experience
            </div>
            <div className="Card invisible translate-y-8">
              <div className="text-2xl font-extrabold text-slate-900">20+</div>
              Happy Clients
            </div>
          </div>
        </div>

        <div className="Video mt-20 hidden w-full items-center justify-center overflow-hidden rounded-2xl lg:flex opacity-0 translate-y-8">
          <CloudinaryVideoPlayer
            src="Video1_kjoekw"
            style={{ width: '100%', borderRadius: '0.8rem' }}
            className="items-center-safe"
            controls
            loop
            playsInline
            muted
            fallbackClassName="flex min-h-80 w-full items-center justify-center rounded-2xl bg-slate-100 p-6 text-center text-sm text-slate-500"
            fallbackMessage="Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME to show the reel preview."
          />
        </div>
      </section>
    </main>
  );
}
