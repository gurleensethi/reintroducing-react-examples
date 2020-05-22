import React, { FunctionComponent } from "react";
import { CounterApp } from "./CounterApp";

export const HooksApp: FunctionComponent = (props) => {
  return (
    <div>
      <h1>
        <u>Hooks App</u>
      </h1>
      <CounterApp />
      <hr />
    </div>
  );
};
