import PageLayout from "@/components/common/layouts/PageLayout";
import NotForLoggedInUser from "@/components/permission/NotForLoggedInUser";
import ROUTE_PATH from "@/constants/path";
import AuthContextProvider from "@/contexts/AuthContext";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import MyAccount from "@/pages/MyAccount";
import ThemeDetail from "@/pages/ThemeDetail";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export function RootRoute() {
  const router = createBrowserRouter([
    {
      path: ROUTE_PATH.ROOT,
      element: <PageLayout />,
      children: [
        {
          path: ROUTE_PATH.ROOT,
          element: <Home />,
        },
        {
          path: ROUTE_PATH.THEME_ROUTE,
          element: <ThemeDetail />,
        },
        {
          path: ROUTE_PATH.MY_ACCOUNT,
          element: <MyAccount />,
        },
      ],
    },
    {
      path: ROUTE_PATH.LOGIN,
      element: (
        <NotForLoggedInUser>
          <Login />
        </NotForLoggedInUser>
      ),
    },
  ]);
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />;
    </AuthContextProvider>
  );
}
