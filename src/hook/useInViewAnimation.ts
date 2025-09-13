import { useState, useEffect, useRef } from "react";

interface InViewAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

interface InViewAnimationValues {
  isInView: boolean;
  hasAnimated: boolean;
  progress: number;
}

export function useInViewAnimation({
  threshold = 0.1,
  rootMargin = "0px 0px -100px 0px",
  triggerOnce = true,
  delay = 0,
}: InViewAnimationOptions = {}) {
  const [values, setValues] = useState<InViewAnimationValues>({
    isInView: false,
    hasAnimated: false,
    progress: 0,
  });

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isInView = entry.isIntersecting;

        if (isInView && !values.hasAnimated) {
          setTimeout(() => {
            setValues((prev) => ({
              ...prev,
              isInView: true,
              hasAnimated: true,
              progress: 1,
            }));
          }, delay);
        } else if (!triggerOnce) {
          setValues((prev) => ({
            ...prev,
            isInView,
            progress: isInView ? 1 : 0,
          }));
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, delay, values.hasAnimated]);

  return { ...values, elementRef };
}
