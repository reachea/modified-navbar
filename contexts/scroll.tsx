import React from "react";

interface ScrollContextProps {
  viewOne: boolean | null;
  setViewOne: (e: any) => void;
  viewTwo: boolean | null;
  setViewTwo: (e: any) => void;
}

export const ScrollContext = React.createContext<ScrollOneContextProps>({
  viewOne: null,
  setViewOne: (e) => {},
  viewTwo: null,
  setViewTwo: (e) => {},
});
