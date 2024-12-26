import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Lottie from "lottie-react";
import loadingSpinner from '../assets/Lottie/loading.json'



const PrivateRoute = ({children}) => {
      const {user,loading}=useContext(AuthContext)
      if(loading)
      {
            return <div className="flex justify-center items-center min-h-screen text-[#000029]"><Lottie animationData={loadingSpinner}></Lottie></div>
      }

      if(user && user?.email)
      {
            return children
      }
      return (
            <Navigate to="/login"></Navigate>
      );
};

export default PrivateRoute;

