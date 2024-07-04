import PageLayout from "@/components/common/layouts/PageLayout";
import NotForLoggedInUser from "@/components/permission/NotForLoggedInUser";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ThemeDetail from "@/pages/ThemeDetail";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export function RootRoute() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/theme/:themeKey",
          element: <ThemeDetail />,
        },
        {
          path: "/my-account",
          element: <div>Hello world!</div>,
        },
      ],
    },
    {
      path: "/login",
      element: (
        <NotForLoggedInUser>
          <Login />
        </NotForLoggedInUser>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}
