import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that uses the Intersection Observer API to detect
 * when an element enters the viewport. Triggers only once.
 *
 * @param {number} threshold - How much of the element must be visible (0-1)
 * @returns {[React.RefObject, boolean]} - [ref to attach to element, isInView]
 */
export function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    // SSR safety: IntersectionObserver is not available on the server
    if (!element || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Fire once, then stop observing
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

export default useInView;
