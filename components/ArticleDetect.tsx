import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { ArticleDetectContext } from "./ArticleDetectController";

interface Props extends React.PropsWithChildren<unknown> {
  value: string
}

function useIntersection(options) {
  const [isIntersecting, setEntry] = useState(false);
  const elRef = useRef();
  useEffect(
    () => {
      const observer = new IntersectionObserver(
        entries => {
          setEntry(entries[0].isIntersecting)
        },
        {
          rootMargin: `${window.innerHeight}px 0px -${window.innerHeight}px 0px`
        }
      );
      observer.observe(elRef.current);
      return () => observer.unobserve(elRef.current);
    },
    [elRef]
  );
  return { isIntersecting, elRef };
}

export default function ArticleDetect(props: Props) {
  const { setIntersect, register } = useContext(ArticleDetectContext);
  const { isIntersecting, elRef } = useIntersection(props);
  const id = useMemo(() => register(props.value), [register])

  useEffect(() => {
    setIntersect(id, isIntersecting);
  }, [id, isIntersecting, props])

  return <div ref={elRef}>{props.children}</div>
}