import React, { FunctionComponent } from "react";
import { ContextApp } from "./2. Context/ContextApp";
import { ContextTypeApp } from "./3. ContextType/ContextTypeApp";

export const App: FunctionComponent = (props) => {
  return (
    <div>
      <ContextApp />
      <ContextTypeApp />
    </div>
  );
};
