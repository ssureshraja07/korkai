import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to top instantly on every route change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Small delay to let the new page render into the DOM
    const timer = setTimeout(() => {
      // If there's a hash, scroll to that element
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }

      // Reset reveal-section classes so animations replay on this page
      const sections = document.querySelectorAll(".reveal-section");
      sections.forEach((s) => s.classList.remove("show"));

      // Use IntersectionObserver so each section animates when it
      // enters the viewport — this works correctly on back navigation too
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05 } // low threshold so top sections trigger immediately
      );

      sections.forEach((s) => observer.observe(s));

      // Cleanup observer when component re-runs
      return () => observer.disconnect();
    }, 80);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
