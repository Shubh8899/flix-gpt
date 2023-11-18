import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateCredentials, validateSignUpCred } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    if (isSignIn) {
      const message = validateCredentials(
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
    } else {
      const errorMessage = validateSignUpCred(name.current.value);
      setErrorMessage(errorMessage);
    }

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
          })
            .then(() => {
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="absolute">
        <img
          alt="bg-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        ></img>
      </div>
      <div>
        <form
          className="absolute bg-black px-12 mt-52 ml-[36rem] grid rounded-2xl bg-opacity-80"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-white text-2xl py-5">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="p-4 rounded-xl w-80"
          ></input>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 rounded-xl mt-2 w-80"
            ></input>
          )}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 rounded-xl mt-2 w-80"
          ></input>
          <button
            className="bg-red-700 rounded-md my-8 h-12 text-white"
            onClick={handleButtonClick}
          >
            {isSignIn ? "Sign-In" : "Sign-Up"}
          </button>
          <p className="text-red-600 w-80">{errorMessage}</p>

          <div>
            <h2
              className="p-2 my-4 cursor-pointer text-white"
              onClick={toggleSignIn}
            >
              {isSignIn
                ? "New to Netflix? Sign Up Now."
                : "Already a User? Login now."}
            </h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
