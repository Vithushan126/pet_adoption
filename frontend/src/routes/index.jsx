import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingScreen from "../components/loading/LoadingScreen";
const SignUp = React.lazy(() => import("../pages/auth/SignUp"));
const Login = React.lazy(() => import("../pages/auth/Login"));
const Home = React.lazy(() => import("../pages/home"));
const AdminPage = React.lazy(() => import("../pages/admin"));
const Dashboard = React.lazy(() => import("../pages/admin/Dashboard"));
const MainLayout = React.lazy(() => import("../../layout"));
const NotFound = React.lazy(() => import("../components/notFound/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <MainLayout />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<LoadingScreen />}>
        <NotFound />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "admin",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AdminPage />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <Dashboard />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "signup",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "login",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Login />
      </Suspense>
    ),
  },
]);
