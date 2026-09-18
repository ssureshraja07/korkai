import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Trigger reveal sections on the newly loaded page
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll(".reveal-section");
      sections.forEach((section) => {
        section.classList.add("show");
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
