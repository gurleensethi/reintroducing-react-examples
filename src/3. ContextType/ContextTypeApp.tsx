import React, { FunctionComponent } from "react";
import { BankWithContextType } from "./BankWithContextType";
import { UserProvider } from "../2. Context/UserProvider";

export const ContextTypeApp: FunctionComponent = (props) => {
  return (
    <div>
      <h1>
        <u>ContextType App</u>
      </h1>
      <UserProvider>
        <BankWithContextType />
      </UserProvider>
      <br />
    </div>
  );
};
