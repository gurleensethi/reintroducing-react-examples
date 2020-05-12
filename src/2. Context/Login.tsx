import React, { FunctionComponent } from "react";
import { UserConsumer } from "./UserProvider";

export const Login: FunctionComponent = (props) => {
  return (
    <UserConsumer>
      {(state) => (
        <div>
          <button onClick={state.login}>Login</button>
        </div>
      )}
    </UserConsumer>
  );
};
