import React, { FunctionComponent, Suspense } from "react";
import { ErrorBoundary } from "./ErrorBoundary";
const LazyLoadedComponent = React.lazy(() => import("./LazyLoadedComponent"));

export const LazyLoadingApp: FunctionComponent = (props) => {
  const [isLoaded, setLoaded] = React.useState(false);

  return (
    <div>
      <h1>
        <u>Lazy/Suspense App</u>
      </h1>
      {isLoaded ? (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyLoadedComponent />
          </Suspense>
        </ErrorBoundary>
      ) : (
        <button onClick={() => setLoaded(true)}>Load Lazy Component</button>
      )}
      <hr />
    </div>
  );
};
