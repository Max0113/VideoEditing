// components/PageTransition.jsx
"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation دخول الصفحة
      gsap.to(
        containerRef.current,
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    });

    return () => ctx.revert(); // ✅ تنظيف عند مغادرة الصفحة
  }, [pathname]); // يشتغل عند كل تغيير صفحة

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}