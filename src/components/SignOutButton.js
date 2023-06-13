import React from "react";
import { useMsal } from "@azure/msal-react";

export const SignOutButton = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutPopup({
      postLogoutRedirectUri: "/",
      mainWindowRedirectUri: "/",
    });
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => handleLogout()}
      >
        Sign Out
      </button>
    </>
  );
};
