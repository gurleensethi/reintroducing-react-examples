import React, { FunctionComponent } from "react";

export const ReactMemoApp: FunctionComponent = React.memo((props) => {
  return (
    <div>
      <h1>
        <u>React Memo App</u>
      </h1>
      <p>
        This cmoponent is wrapped in{" "}
        <code
          style={{
            display: "inline-block",
            backgroundColor: "lightgrey",
            padding: "4px",
            borderRadius: "2px",
          }}
        >
          React.memo({"<Component />"})
        </code>
      </p>
      <hr />
    </div>
  );
});
