import React, { FunctionComponent } from "react";
import { Home } from "./Home";
import { UserProvider } from "./UserProvider";

export const ContextApp: FunctionComponent = (props) => {
  return (
    <UserProvider>
      <h1>
        <u>Context App</u>
      </h1>
      <Home />
      <hr />
    </UserProvider>
  );
};
