import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Signup/Login";
import Browse from "./Browse/Browse";

const MainContainer = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default MainContainer;
