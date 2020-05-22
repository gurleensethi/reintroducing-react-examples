import React, { FunctionComponent } from "react";

export const CounterApp: FunctionComponent = (props) => {
  const [count, setCount] = React.useState<number>(0);
  const [time, setTime] = React.useState<Date>(new Date());
  React.useEffect(() => {
    console.log("Effect here...");
  }, []);
  const handleClick = () => {
    setCount(count + 1);
    setTime(new Date());
  };

  return (
    <div>
      <div>Welcome to counter of life</div>
      <button onClick={handleClick}>{count}</button>
      <div>Clicked at {time.toLocaleTimeString()}</div>
    </div>
  );
};
