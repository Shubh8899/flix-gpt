import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Signup/Login";
import Browse from "./Browse/Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";

const MainContainer = () => {
  const dispatch = useDispatch();

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

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName, photoURL } = user;
      dispatch(addUser({
        uid: uid,
        email: email,
        displayName: displayName,
        photoURL: photoURL
      }));
    } else {
      dispatch(removeUser(null));
    }
  });

  return <RouterProvider router={appRouter} />;
};

export default MainContainer;
