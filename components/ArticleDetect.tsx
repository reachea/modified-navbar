import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useIntersection } from "../hook/useIntersection";
import { ArticleDetectContext } from "./ArticleDetectController";

interface Props extends React.PropsWithChildren<unknown> {
  id: string;
  title: string;
}

export default function ArticleDetect(props: Props) {
  const { setIntersect, register } = useContext(ArticleDetectContext);
  const { isIntersecting, elRef } = useIntersection(props);
  const data = useMemo(() => register(props.title, props.id), [register]);

  useEffect(() => {
    setIntersect(data, isIntersecting);
  }, [data, isIntersecting, props]);

  return <div ref={elRef}>{props.children}</div>;
}
