import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import login from "../assets/Lottie/login.json"

const Login = () => {
      const {signUser}=useContext(AuthContext)
  const [success,setSuccess]=useState(false)
  const [errorMsg,setErrorMsg]=useState('')
  const [show,setShow]=useState(false)
  const provider=new GoogleAuthProvider()
  const navigate=useNavigate()
  const handleSignup=()=>{
    signInWithPopup(auth,provider)
        .then((result)=>{
          navigate('/')
          
          //console.log(result)
          //setUser(result.user)
    
        }).catch(error=>{
          //console.log('error:',error)
          
          //setUser(null)
        });

  }

  const handlelogin=(e)=>
        {
            e.preventDefault();
            const email=e.target.email.value;
            const password=e.target.password.value; 
            setErrorMsg('')
      setSuccess(false)
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

            if(!passwordRegex.test(password))
            {
              setErrorMsg('Invalid Password')
              return;
            }

       signUser(email, password)
    .then((result) => {
      // Check if the login was successful
      if (result.user) {
        setSuccess(true);
        setErrorMsg('');
        e.target.reset(); // Reset form
        navigate('/'); // Redirect to the home page
      }
    })
    .catch((error) => {
      console.log(error.message);
      setErrorMsg('Invalid email or password. Please try again.');
      setSuccess(false);
    });

      
      }
      return (
       
            <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
            // style={{
            //   backgroundImage: "url('https://i.ibb.co.com/bFGz7FV/visa-9.jpg')", // Replace with your image URL
            // }}
          >
             <Helmet>
              <title>Login</title>
             </Helmet>
             <div>
        <Lottie animationData={login}></Lottie>
      </div>
        
            {/* Animated Form */}
            <div
               className="z-10 w-[90%] max-w-md px-8 py-10 mt-0 rounded-lg shadow-xl bg-white bg-opacity-15 backdrop-blur-md border border-[#000029] " 
              >
                <h1 className="text-3xl font-bold text-center text-[#000029] mb-6">
                  Login
                </h1>
                <form onSubmit={handlelogin}>
                  <div className="form-control mb-4" >
                    <label className="label">
                      <span className="text-[#000029] font-semibold">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="input input-bordered w-full bg-white bg-opacity-30 text-black"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-control mb-6 relative">
                    <label className="label">
                      <span className="text-[#000029] font-semibold">Password</span>
                    </label>
                    <input
                      type={show ? "text" : "password"}
                      placeholder="Enter your password"
                      name="password"
                      className="input input-bordered w-full bg-white bg-opacity-30 text-black"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShow(!show)}
                      className="absolute text-[#000029] right-3 top-[55px]"
                    >
                      {show ? <FaEye /> : <FaEyeSlash />}
                    </button>
                   
                  </div>
                  <div className="form-control mb-6">
                  <button type="submit" className="py-3 px-6 bg-[#000029] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group text-center">
              <span className="absolute inset-0 bg-gradient-to-r from-[#000029] to-[#00FFFF] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative group-hover:text-white transition duration-500 ease-in-out text-center">
                Login
              </span>
            </button>
                  </div>
                  {success && (
                    <h1 className="text-[16px] text-[#e20934] text-center">
                      Logged in Successfully!
                    </h1>
                  )}
                  {errorMsg && (
                    <h1 className="text-[16px] text-red-700 text-center">{errorMsg}</h1>
                  )}
                  <p className="text-center text-black">
                    New to this site?{" "}
                    <span className="font-bold text-[#000029]">
                      <Link to="/register">Register</Link>
                    </span>
                  </p>
                </form>
                <div className="divider mt-0 text-[#000029]">OR</div>
                <div onClick={handleSignup}  className="flex justify-center items-center py-3 rounded-lg px-4 border-[#000029] border-2 text-[#000029] font-bold  gap-3 mb-4 mx-3">
                <FaGoogle className="text-[#000029]"></FaGoogle>
                <button className=""> Login with Google</button>
        
                </div>
              </div>
          </div>
      );
};

export default Login;