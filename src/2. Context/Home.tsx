import React, { FunctionComponent } from "react";
import { Login } from "./Login";
import { AccountDetails } from "./AccountDetails";
import { UserConsumer } from "./UserProvider";

export const Home: FunctionComponent = (props) => {
  return (
    <div>
      <h1>Very Real Bank Account</h1>
      <UserConsumer>
        {(state) => {
          return state.isLoggedIn ? <AccountDetails /> : <Login />;
        }}
      </UserConsumer>
    </div>
  );
};
