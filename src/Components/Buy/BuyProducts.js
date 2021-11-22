import React from "react";
import { useAuth } from "../../context/AuthContext";
import Login from '../../Components/Auth/Login'
import Buy from "../Buy/Buy";

const Auth = () => {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <Login/>
        </>
      ) : (
        <Buy />
      )}
    </div>
  );
};

export default Auth;
