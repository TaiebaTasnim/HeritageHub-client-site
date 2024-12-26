import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
      const {user,loading}=useContext(AuthContext)
      if(loading)
      {
            return <div className="flex min-h-screen justify-center items-center"><span className="loading loading-bars loading-lg text-[#e20934]"></span></div>
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

