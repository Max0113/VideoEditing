"use client"
import React , { useRef } from "react";
import Navbar from "@/components/Navbar";
import { IoIosStarOutline } from "react-icons/io";
import { BsPersonBoundingBox } from "react-icons/bs";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother , SplitText);



function page() {


    const container = useRef()


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

      timeline.to(".imge", {
        autoAlpha: 1,
        y: 0,
        duration: 1.5,
      });

      timeline.to(".psotitle", {
        autoAlpha: 0.8,
        y: 0,
        duration: 1.5,
      },"-=50%");

      timeline.to(".skils", {
        autoAlpha: 0.8,
        y: 0,
        duration: 1.5,
        stagger: 0.1
      },"-=70%");

      timeline.to(".card", {
        autoAlpha: 0.8,
        y: 0,
        duration: 1,
        stagger: 0.1
      },"-=50%");

      return () => {
    splitTitle.revert();
    splitDescription.revert();
    timeline.kill();
  };
  
    }, { scope: container });


  return (
    <section ref={container} className="min-h-screen bg-white">
      <Navbar />

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-start lg:gap-16 items-center ">
        <div className="w-full max-w-xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl splitTitleP opacity-0">
            About Me
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base splitDescriptionP opacity-0">
            I'm a passionate video editor with over 2 years of experience
            crafting compelling visual stories. My approach combines technical
            expertise with creative vision to deliver content that resonates
            with audiences and achieves your goals.
          </p>

          <div className="mt-8">
            <h2 className="text-sm font-bold tracking-wide text-slate-900 psotitle invisible translate-y-6">
              Skills &amp; Software
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Adobe Premiere Pro",
                "After Effects",
                "Photoshop",
                "Color Grading",
                "Motion Graphics",
                "Sound Design",
                "Frontend developer",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 skils invisible translate-y-6"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-0 text-center grid-cols-3 sm:gap-6">
            {[
              {
                title: "Award Winning",
                icon: (
                  <span
                    className="text-[1.4rem]"
                  >
                    <IoIosStarOutline />
                  </span>
                ),
              },
              {
                title: "Client Focused",
                icon: (
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
              {
                title: "Story Driven",
                icon: (
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M7 7h10" />
                    <path d="M7 12h10" />
                    <path d="M7 17h10" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="space-y-3 card invisible">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-slate-600">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex-1">
          <div className="overflow-hidden rounded-3xl imge invisible translate-y-5">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
              alt="Video editor portrait"
              className="h-120 w-full object-cover imge"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
