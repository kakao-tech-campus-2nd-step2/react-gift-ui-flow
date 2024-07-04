import Home from "@/pages/Home";
import ThemeDetail from "@/pages/ThemeDetail";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export function RootRoute() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <div>Hello world!</div>,
    },
    {
      path: "/my-account",
      element: <div>Hello world!</div>,
    },
    {
      path: "/theme/:themeKey",
      element: <ThemeDetail />,
    },
  ]);
  return <RouterProvider router={router} />;
}
