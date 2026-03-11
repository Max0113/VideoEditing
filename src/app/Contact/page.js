'use client'
import React , { useRef } from "react";
import Navbar from "@/components/Navbar";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

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
  
        timeline.to(".block1", {
          autoAlpha: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
        });
  

        timeline.to(".block2", {
          autoAlpha: 1,
          y: 0,
          duration: 1.5,
          stagger:0.1,
          ease: "power3.out",
        });      
    
      }, { scope: container });

  return (
    <section ref={container} className="min-h-screen bg-white">
      <Navbar />

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl splitTitleP opacity-0">
            Let's Work Together
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500 sm:text-base splitDescriptionP opacity-0">
            Ready to bring your vision to life? Get in touch and let's discuss
            your next video project.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="space-y-6">
            {[
              {
                label: "Email",
                value: "hello@videoeditor.com",
                icon: (
                <span
                    className="text-[1.4rem]"
                >
                    <MdOutlineMailOutline />
                </span>
                ),
              },
              {
                label: "Phone",
                value: "+1 (555) 123-4567",
                icon: (
                  <span
                    className="text-[1.4rem]"
                >
                    <FiPhone />
                </span>
                ),
              },
              {
                label: "Location",
                value: "Los Angeles, CA",
                icon: (
                  <span
                    className="text-[1.4rem]"
                >
                    <IoLocationOutline />
                </span>
                ),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 p-5 shadow-sm sm:p-6 block2 invisible translate-6"
              >
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-900">
                  <span className="text-slate-700">{item.icon}</span>
                  {item.label}
                </div>
                <p className="mt-4 text-sm text-slate-500">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-200 p-5 shadow-sm sm:p-8 block1 invisible translate-7">
            <h2 className="text-base font-semibold text-slate-900">
              Start Your Project
            </h2>
            <form className="mt-6 space-y-5">
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                <label className="text-xs font-semibold text-slate-600">
                  Name *
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-xl border border-transparent bg-slate-100 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-slate-300 focus:bg-white sm:text-base"
                  />
                </label>
                <label className="text-xs font-semibold text-slate-600">
                  Email *
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="mt-2 w-full rounded-xl border border-transparent bg-slate-100 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-slate-300 focus:bg-white sm:text-base"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                <label className="text-xs font-semibold text-slate-600">
                  Project Type
                  <div className="relative mt-2">
                    <select className="w-full appearance-none rounded-xl border border-transparent bg-slate-100 px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-slate-300 focus:bg-white sm:text-base">
                      <option>Select project type</option>
                      <option>Commercial</option>
                      <option>Documentary</option>
                      <option>Creative</option>
                      <option>Corporate</option>
                      <option>Event</option>
                    </select>
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </label>
                <label className="text-xs font-semibold text-slate-600">
                  Budget Range
                  <div className="relative mt-2">
                    <select className="w-full appearance-none rounded-xl border border-transparent bg-slate-100 px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-slate-300 focus:bg-white sm:text-base">
                      <option>Select budget range</option>
                      <option>$500 - $1,000</option>
                      <option>$1,000 - $2,500</option>
                      <option>$2,500 - $5,000</option>
                      <option>$5,000+</option>
                    </select>
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </label>
              </div>

              <label className="text-xs font-semibold text-slate-600">
                Project Details *
                <textarea
                  rows="4"
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                  className="mt-2 w-full resize-none rounded-xl border border-transparent bg-slate-100 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-slate-300 focus:bg-white sm:text-base"
                />
              </label>

              <button
                type="submit"
                className="my-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 hover:-translate-y-0.5 sm:my-8 sm:w-auto transition-all duration-300 cursor-pointer"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
