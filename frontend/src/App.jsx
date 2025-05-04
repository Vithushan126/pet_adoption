import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import ErrorBoundary from "./components/error-boundry";
import LoadingScreen from "./components/loading/LoadingScreen";
import { router } from "./routes";

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingScreen />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
