import React, { FunctionComponent } from "react";
import { ContextApp } from "./2. Context/ContextApp";
import { ContextTypeApp } from "./3. ContextType/ContextTypeApp";
import { ReactMemoApp } from "./4. React Meme/ReactMemoApp";
import { LazyLoadingApp } from "./6. Lazy Loading/LazyLoadingApp";
import { HooksApp } from "./7. Hooks/HooksApp";
import { ReactPatterns } from "./8. React Patterns/ReactPatterns";

export const App: FunctionComponent = (props) => {
  return (
    <div>
      <ContextApp />
      <ContextTypeApp />
      <ReactMemoApp />
      <LazyLoadingApp />
      <HooksApp />
      <ReactPatterns />
    </div>
  );
};
