import PageLayout from "@/components/common/layouts/PageLayout";
import NotForLoggedInUser from "@/components/permission/NotForLoggedInUser";
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
          element: <MyAccount />,
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
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />;
    </AuthContextProvider>
  );
}
