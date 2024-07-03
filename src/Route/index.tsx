import Home from "@/pages/Home";
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
      path: "/theme",
      element: <div>Hello world!</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}
