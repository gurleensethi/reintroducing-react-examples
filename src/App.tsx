import React, { FunctionComponent } from "react";
import { ContextApp } from "./2. Context/ContextApp";
import { ContextTypeApp } from "./3. ContextType/ContextTypeApp";
import { ReactMemoApp } from "./4. React Meme/ReactMemoApp";

export const App: FunctionComponent = (props) => {
  return (
    <div>
      <ContextApp />
      <ContextTypeApp />
      <ReactMemoApp />
    </div>
  );
};
