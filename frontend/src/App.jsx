import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index";
import LoadingScreen from "./components/loading";
import ErrorBoundary from "./components/error-boundry";

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
