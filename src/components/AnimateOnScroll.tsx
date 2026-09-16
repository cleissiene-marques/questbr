"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimateOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    const setup = () => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
              setTimeout(() => entry.target.classList.add("visible"), i * 60);
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );

      document.querySelectorAll(".animate-on-scroll").forEach((el) => observer?.observe(el));
    };

    const ric = window.requestIdleCallback as typeof window.requestIdleCallback | undefined;
    const idleId = ric ? ric(setup) : window.setTimeout(setup, 200);

    return () => {
      observer?.disconnect();
      if (ric) window.cancelIdleCallback(idleId as number);
      else window.clearTimeout(idleId as number);
    };
  }, [pathname]);

  return null;
}
