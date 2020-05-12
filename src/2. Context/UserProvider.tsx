import React, { FunctionComponent } from "react";

export const UserContext = React.createContext({
  isLoggedIn: false,
  login: () => {},
  amount: 1000,
  deductAmount: (x: number) => {},
  addAmount: (x: number) => {},
});

export const UserProvider: FunctionComponent = (props) => {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [amount, setAmount] = React.useState(1000);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const deductAmount = (x: number) => {
    setAmount(amount - x);
  };

  const addAmount = (x: number) => {
    setAmount(amount + x);
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        login: handleLogin,
        amount,
        deductAmount,
        addAmount,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export const UserConsumer = UserContext.Consumer;
