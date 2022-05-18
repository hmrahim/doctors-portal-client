import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import VerifyEmail from "../Shared/VeryEmail/VerifyEmail";

const RequireAdmin = ({ children }) => {
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const [admin,adminLoading] = useAdmin(user)
  const navigate = useNavigate()

 
  if (loading || adminLoading) {
    return (
      <div className="flex justify-center mt-11 items-center w-2/4 mx-auto">
        <button className="btn loading text-center">loading</button>
      </div>
    );
  }

  if (!user || !admin) {
      signOut(auth)
    //   navigate("/login")
    
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if(!user?.emailVerified){
    return <VerifyEmail></VerifyEmail>
  }
  return children;
};

export default RequireAdmin;
