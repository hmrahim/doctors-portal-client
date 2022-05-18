import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import VerifyEmail from "../Shared/VeryEmail/VerifyEmail";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);

 
  if (loading) {
    return (
      <div className="flex justify-center mt-11 items-center w-2/4 mx-auto">
        <button className="btn loading text-center">loading</button>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if(!user?.emailVerified){
    return <VerifyEmail></VerifyEmail>
  }
  return children;
};

export default RequireAuth;
