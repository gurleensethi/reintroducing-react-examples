import React, { FunctionComponent } from "react";
import { UserConsumer } from "./UserProvider";

export const AccountDetails: FunctionComponent = (props) => {
  return (
    <UserConsumer>
      {(user) => (
        <div>
          <h3>Current Amount: ${user.amount}</h3>
          <button onClick={() => user.deductAmount(20)}>Deduct $20</button>
          <button onClick={() => user.addAmount(20)}>Add $20</button>
        </div>
      )}
    </UserConsumer>
  );
};
