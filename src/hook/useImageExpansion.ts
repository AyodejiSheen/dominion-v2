import { useState, useEffect, useRef } from "react";

interface ImageExpansionValues {
  width: string;
  isInView: boolean;
}

export function useImageExpansion(
  initialWidth = "95vw",
  finalWidth = "100vw",
  startOffset = 0,
  endOffset = 500
) {
  const [values, setValues] = useState<ImageExpansionValues>({
    width: initialWidth,
    isInView: false,
  });

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Check if element is in view
      const isInView = rect.top < windowHeight && rect.bottom > 0;

      // Calculate scroll progress relative to the element
      const elementTop = elementRef.current.offsetTop;
      const scrollStart = elementTop - windowHeight + startOffset;
      const scrollEnd = elementTop + endOffset;

      // Calculate progress (0 to 1)
      let progress = 0;
      if (scrollY >= scrollStart && scrollY <= scrollEnd) {
        progress = (scrollY - scrollStart) / (scrollEnd - scrollStart);
      } else if (scrollY > scrollEnd) {
        progress = 1;
      }

      // Clamp progress between 0 and 1
      progress = Math.max(0, Math.min(1, progress));

      // Calculate width based on progress
      const initialWidthNum = Number.parseFloat(initialWidth);
      const finalWidthNum = Number.parseFloat(finalWidth);
      const currentWidthNum =
        initialWidthNum + (finalWidthNum - initialWidthNum) * progress;
      const width = `${currentWidthNum}vw`;

      setValues({
        width,
        isInView,
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [initialWidth, finalWidth, startOffset, endOffset]);

  return { ...values, elementRef };
}
