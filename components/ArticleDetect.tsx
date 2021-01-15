import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { ArticleDetectContext } from "./ArticleDetectController";

interface Props extends React.PropsWithChildren<unknown> {
  id: string
  title: string
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
  const data = useMemo(() => register(props.title, props.id), [register])

  useEffect(() => {
    setIntersect(data, isIntersecting);
  }, [data, isIntersecting, props])

  return <div ref={elRef}>{props.children}</div>
}