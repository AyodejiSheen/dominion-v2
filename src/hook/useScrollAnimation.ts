import { useState, useEffect } from "react";

interface ScrollAnimationValues {
  scrollY: number;
  scale: number;
  opacity: number;
  translateY: number;
}

export function useScrollAnimation() {
  const [values, setValues] = useState<ScrollAnimationValues>({
    scrollY: 0,
    scale: 1,
    opacity: 1,
    translateY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate animation values based on scroll position
      // Animation happens in the first viewport height
      const scrollProgress = Math.min(scrollY / windowHeight, 1);

      // Scale: starts at 1, zooms out to 0.8
      const scale = 1 - scrollProgress * 0.4;

      // Opacity: starts at 1, fades to 0
      const opacity = 1 - scrollProgress;

      // TranslateY: moves up as we scroll
      const translateY = scrollProgress * -100;

      setValues({
        scrollY,
        scale,
        opacity,
        translateY,
      });
    };

    // Initial call
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return values;
}
