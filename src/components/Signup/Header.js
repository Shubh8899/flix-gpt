import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute z-10 w-full bg-gradient-to-b from-black flex justify-between">
      <div>
        <img
          className="w-46 h-16 pl-10"
          alt="logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        ></img>
      </div>

      {user && <div className="flex">
        <img
          className="w-12 h-12 mr-2 mt-2"
          alt="logout-logo"
          src={user.photoURL}
        ></img>
        <button onClick={handleSignOut} className="text-lg font-bold mr-10">
          (Sign Out)
        </button>
      </div>}
    </div>
  );
};

export default Header;
