import React from "react";

interface ScrollContextProps {
  viewOne: boolean | null;
  setViewOne: (e: any) => void;
}

export const ScrollContext = React.createContext<ScrollContextProps>({
  viewOne: null,
  setViewOne: (e) => {},
});
