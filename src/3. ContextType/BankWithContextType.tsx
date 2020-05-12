import React, { Component } from "react";
import { UserContext } from "../2. Context/UserProvider";

export class BankWithContextType extends Component {
  static contextType = UserContext;
  context!: React.ContextType<typeof UserContext>;

  render() {
    return (
      <div>
        {!this.context.isLoggedIn ? (
          <div>
            <button onClick={this.context.login}>Login</button>
          </div>
        ) : (
          <div>
            <h3>Current Amount: ${this.context.amount}</h3>
            <button onClick={() => this.context.deductAmount(20)}>
              Deduct $20
            </button>
            <button onClick={() => this.context.addAmount(20)}>Add $20</button>
          </div>
        )}
      </div>
    );
  }
}
