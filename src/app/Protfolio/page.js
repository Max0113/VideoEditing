'use client'
import React, { useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother , SplitText);

function Page() {
  const items = [
    { id: 0, duration: "1:00", url: "/Video/video11.mp4" },
    { id: 1, duration: "1:00", url: "/Video/video 2.mp4" },
    { id: 2, duration: "1:00", url: "/Video/video10.mp4" },
    { id: 3, duration: "1:00", url: "/Video/video8.mp4" },
    { id: 4, duration: "1:00", url: "/Video/video7.mp4" },
    { id: 5, duration: "1:00", url: "/Video/Comp 1_1.mp4" },
    { id: 6, duration: "1:00", url: "/Video/Comp 1_2.mp4" },
    { id: 7, duration: "1:00", url: "/Video/video_work.mp4" },
    { id: 8, duration: "1:00", url: "/Video/FinalVideo1.mp4" },
  ];

  const container = useRef();

  // ✅ ScrollSmoother à l'intérieur de useGSAP
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

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

  }, { scope: container });

  // ✅ volume="0" via useEffect sur tous les éléments video
  useEffect(() => {
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      video.volume = 1;
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <section ref={container} className="min-h-screen bg-white">
          <Navbar />

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
              <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <video
                    key={item.id}
                    className="w-full h-auto min-h-150 rounded-2xl Video invisible translate-y-8"
                    controls
                    loop
                    playsInline
                    muted  // ✅ muted pour autoplay + volume initial à 0
                  >
                    <source src={item.url} type="video/mp4" />
                  </video>
                ))}
              </div>
              <h1 className="text-center my-10 font-extrabold text-[1.5rem]">
                😉 There is more
              </h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;