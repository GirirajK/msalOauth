import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch((e) => {
      console.log(e);
    });
  };
  return (
    <button
      type="button"
      className="btn btn-dark"
      onClick={() => handleLogin()}
    >
      Sign in
    </button>
  );
};
