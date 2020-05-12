import React, { FunctionComponent } from "react";
import { Home } from "./Home";
import { UserProvider } from "./UserProvider";

export const ContextApp: FunctionComponent = (props) => {
  return (
    <UserProvider>
      <Home />
    </UserProvider>
  );
};
