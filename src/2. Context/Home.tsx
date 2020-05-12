import React, { FunctionComponent } from "react";
import { Login } from "./Login";
import { AccountDetails } from "./AccountDetails";
import { UserConsumer } from "./UserProvider";

export const Home: FunctionComponent = (props) => {
  return (
    <div>
      <h2>Very Real Bank Account</h2>
      <UserConsumer>
        {(state) => {
          return state.isLoggedIn ? <AccountDetails /> : <Login />;
        }}
      </UserConsumer>
    </div>
  );
};
