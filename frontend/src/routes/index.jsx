import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingScreen from "../components/loading/LoadingScreen";
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
]);

// import React, { Suspense } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import LoadingScreen from "../components/loading/LoadingScreen";
// const Home = React.lazy(() => import("../pages/home"));
// const AdminPage = React.lazy(() => import("../pages/admin"));
// const Dashboard = React.lazy(() => import("../pages/admin/Dashboard"));
// const MainLayout = React.lazy(() => import("../../layout"));
// const NotFound = React.lazy(() => import("../components/notFound/NotFound"));

// // const Login = React.lazy(() => import("../pages/auth/login/Login"));
// // const Register = React.lazy(() => import("../pages/auth/register/Register"));

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <Suspense fallback={<LoadingScreen />}>
//         <MainLayout />
//       </Suspense>
//     ),
//     errorElement: <NotFound />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "admin",
//         element: <AdminPage />,
//         children: [
//           {
//             index: true,
//             element: <Dashboard />,
//           },
//         ],
//       },
//     ],
//   },
//   // {
//   //   path: "/auth",
//   //   children: [
//   //     {
//   //       path: "login",
//   //       lazy: () => import("../pages/auth/login/Login"),
//   //     },
//   //     {
//   //       path: "register",
//   //       lazy: () => import("../pages/auth/register/Register"),
//   //     },
//   //   ],
//   // },
// ]);
