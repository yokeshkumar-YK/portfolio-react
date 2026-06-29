import { useEffect } from "react";

const useReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },

      {
        threshold: 0.2,
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useReveal;
