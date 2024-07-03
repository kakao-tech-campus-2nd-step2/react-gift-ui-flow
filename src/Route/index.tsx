import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export function index() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
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
