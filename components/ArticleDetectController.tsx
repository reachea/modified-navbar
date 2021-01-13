import React, { PropsWithChildren, useCallback, useContext, useState } from "react";

export const ArticleDetectContext = React.createContext<{
  title: string,
  setIntersect: (id: number, intersect: boolean) => void,
  register: (value: string) => number,
}>({
  title: "",
  setIntersect: () => { },
  register: () => 0
})

interface Props extends PropsWithChildren<unknown> { }

export function useDetectedTitle() {
  const ctx = useContext(ArticleDetectContext);
  return ctx.title || '';
}

export function ArticleDetectController(props: Props) {
  const [registerArticle] = useState([]);
  const [title, setTitle] = useState("");

  const register = useCallback((value: string) => {
    registerArticle.push({
      value,
      intersect: false,
    });
    return registerArticle.length - 1;
  }, [registerArticle])

  const setIntersect = useCallback((id: number, intersect: boolean) => {
    registerArticle[id].intersect = intersect;
    let newTitle = '';
    for (let i = 0; i < registerArticle.length; i++) {
      if (registerArticle[i].intersect) {
        newTitle = registerArticle[i].value;
      }
    }

    setTitle(newTitle);
  }, [registerArticle])

  return <ArticleDetectContext.Provider value={{ title, setIntersect, register }}>{props.children}</ArticleDetectContext.Provider>
}