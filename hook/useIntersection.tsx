import { useEffect, useRef, useState } from "react";

export function useIntersection(options) {
  const [isIntersecting, setEntry] = useState(false);
  const elRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setEntry(entries[0].isIntersecting);
      },
      {
        rootMargin: `${window.innerHeight}px 0px -${window.innerHeight}px 0px`,
      }
    );
    observer.observe(elRef.current);
    return () => observer.unobserve(elRef.current);
  }, [elRef]);
  return { isIntersecting, elRef };
}
