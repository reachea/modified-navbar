import React, { PropsWithChildren, useCallback, useContext, useState } from "react";

export const ArticleDetectContext = React.createContext<{
  id: string,
  title: string,
  setIntersect: (title: number, intersect: boolean) => void,
  register: (title: string, id: string) => number,
}>({
  id: '',
  title: "",
  setIntersect: () => { },
  register: () => 0
})

interface Props extends PropsWithChildren<unknown> { }

export function ArticleDetectController(props: Props) {
  const [registerArticle] = useState([]);
  const [title, setTitle] = useState("");
  const [id, setId] = useState('')
  const register = useCallback((title: string, id: string) => {
    registerArticle.push({
      id,
      title,
      intersect: false,
    });
    return registerArticle.length - 1;
  }, [registerArticle])


  const setIntersect = useCallback((data: number, intersect: boolean) => {
    registerArticle[data].intersect = intersect;

    let { newTitle, newId }: any = '';

    for (let i = 0; i < registerArticle.length; i++) {
      if (registerArticle[i].intersect) {
        newTitle = registerArticle[i].title;
        newId = registerArticle[i].id
      }
    }

    setTitle(newTitle);
    setId(newId)
  }, [registerArticle])

  return <ArticleDetectContext.Provider value={{ id, title, setIntersect, register }}>{props.children}</ArticleDetectContext.Provider>
}