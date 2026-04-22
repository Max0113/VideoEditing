'use client'
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { FaLink } from "react-icons/fa6";
import CloudinaryVideoPlayer from "@/components/CloudinaryVideoPlayer";


const items = [
  { id: 0, duration: "1:00", src: "Video11_dnudcg" },
  { id: 1, duration: "1:00", src: "Video_2_toxdxl" },
  { id: 3, duration: "1:00", src: "Comp_1_2_yntq2w" },
  { id: 4, duration: "1:00", src: "video10_wwckwc" },
  { id: 5, duration: "1:00", src: "Video8_e5xiqv" },
  { id: 6, duration: "1:00", src: "video_work_r7ibki" },
  { id: 7, duration: "1:00", src: "FinalVideo1_nwq6vu" },
  { id: 8, duration: "1:00", src: "video7_n9h70z" },
];


gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother , SplitText);

function Page() {

  const container = useRef();

  useGSAP(() => {

    const splitTitle = new SplitText(".splitTitleP", { type: "words" });
    const splitDescription = new SplitText(".splitDescriptionP", { type: "lines" });
    
    gsap.set(".splitTitleP", { opacity: 1 });
    gsap.set(".splitDescriptionP", { opacity: 1 });
    
    gsap.set(splitTitle.words, { autoAlpha: 0, y: -30 });
    gsap.set(splitDescription.lines, { autoAlpha: 0, y: 30 });

    const timeline = gsap.timeline()

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

    timeline.to(".Selection", {
      autoAlpha: 1,
      duration: 2,
      stagger: 0.2
    });

    timeline.to(".Video", {
      autoAlpha: 1,
      y: 0,
      duration: 1.5,
      stagger: 0.1
    },"-=70%");

    return () => {
      splitTitle.revert();
      splitDescription.revert();
      timeline.kill();
    };

  }, { scope: container });

  // ✅ volume="0" via useEffect sur tous les éléments video
  useEffect(() => {
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      video.volume = 1;
    });
  }, []);

  return (
        <section ref={container} className="min-h-screen bg-white">
          <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/20">
                  <Navbar />
          </nav>

          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl splitTitleP opacity-0">
                Featured Work
              </h1>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500 sm:text-base splitDescriptionP opacity-0">
                A selection of my recent video editing projects across various
                industries and styles.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {["All", "Commercial", "Documentary", "Creative", "Corporate", "Event"].map((label) => (
                <button
                  key={label}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold transition Selection invisible ${
                    label === "All"
                      ? "border-black bg-black text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                  }`}
                  type="button"
                >
                  {label}
                </button>
              ))}
            </div>

            <div>
              <div className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <div key={item.id} className="Video opacity-0 translate-y-8">
                  <CloudinaryVideoPlayer
                    key={item.id}
                    src={item.src}
                    className="w-full h-auto min-h-auto sm:min-h-154 rounded-2xl"
                    controls
                    loop
                    fallbackClassName="flex min-h-56 items-center justify-center rounded-2xl bg-slate-100 p-6 text-center text-sm text-slate-500 sm:min-h-154"
                    fallbackMessage="Add NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME to enable portfolio previews."
                   />
                   </div>
                ))}
              </div>
              <div className="p-10">
                <h1 className="text-center mt-10 font-extrabold text-[1.5rem]">
                  😉 There is more
                </h1> 
                <Link 
                  className="flex gap-1 justify-center items-center font-bold text-blue-600"
                  href="https://drive.google.com/drive/folders/1OZYZ2_tz8PY9y_jAjGXV-adnFBJip_8q?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto"
                >
                  <FaLink /><p>Link</p> 
              </Link>
              </div>
            </div>
          </div>
        </section>
  );
}

export default Page;
