
import {  useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import register from "../assets/Lottie/register.json"


const Register = () => {
      const {createUser,profileUpdate,setUser}=useContext(AuthContext)
      const [success,setSuccess]=useState(false)
      const [errorMsg,setErrorMsg]=useState('')
      const [show,setShow]=useState(false)
      const navigate=useNavigate()
      const provider=new GoogleAuthProvider()

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

      const handleregister=(e)=>
            {
                e.preventDefault();
                const name=e.target.name.value;
                const email=e.target.email.value;
                const photo=e.target.photo.value;
                const password=e.target.password.value; 
                //console.log(name,email,photo,password)
                setErrorMsg('')
                setSuccess(false)
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

                if(!passwordRegex.test(password))
                {
                  setErrorMsg('Password requirment is not fullfiled.')
                  return;
                }
                createUser(email,password)
                .then(result=>{

                  
                  //console.log(result),
                  setSuccess(true)
                  e.target.reset(),
                  navigate('/')
                  // const newUser={name,email,photo}
                  // //set newUser to DB
                  // fetch('https://visatrek-server-site.vercel.app/users',{
                  //       method:'Post',
                  //       headers:{
                  //             'content-type':'application/json'
                  //       },
                  //       body:JSON.stringify(newUser)
                  // })
                  // .then(res => res.json())
                  // .then(data =>{
                  //       //console.log('created newUser',data)

                  // })
                  
                  //navigate('/login')
                  profileUpdate({ displayName:name, photoURL:photo})
                  .then(()=>{
                    const updatedUser = {
                      ...auth.currentUser, // Firebase's current user object
                      displayName: name,
                      photoURL: photo,
                    };
                    setUser(updatedUser); 
                  } )
                  .catch(error=>{
                        setErrorMsg(error.message)
                        setSuccess(false)
                  })
            })
                  
                  .catch(error=>{
                  setErrorMsg(error.message)
                  setSuccess(false)
            })
            }
      return (
            <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center gap-4 relative"
      // style={{
      //   backgroundImage: "url('https://i.ibb.co.com/bFGz7FV/visa-9.jpg')", 
      // }}
    >
                   <Helmet>
                    <title>Register</title>
                   </Helmet>
     
      {/* <div className="absolute inset-0 bg-black bg-opacity-70"></div> */}
      <div>
        <Lottie animationData={register}></Lottie>
      </div>
      
      <div
        className="z-10 w-[90%] max-w-md my-10 px-8 py-10 rounded-lg shadow-xl bg-white bg-opacity-15 backdrop-blur-md border border-[#000029]"
      //   data-aos="fade-up"
      >
        <h1
          className="text-3xl font-bold text-center text-[#000029] mb-6"
      //     data-aos="fade-down"
        >
          Register
        </h1>
        <form onSubmit={handleregister}>
          <div className="form-control mb-4" >
            <label className="label">
              <span className="text-[#000029] font-semibold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full bg-white bg-opacity-30 text-black"
              name="name"
              required
            />
          </div>
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
          <div className="form-control mb-4" >
            <label className="label">
              <span className="text-[#000029] font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered w-full bg-white bg-opacity-30 text-black"
              name="photo"
              required
            />
          </div>
          <div className="form-control mb-6 relative" >
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
          <div className="form-control mb-6" >
          <button type="submit" className="py-3 px-6 bg-[#000029] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group text-center">
              <span className="absolute inset-0 bg-gradient-to-r from-[#000029] to-[#00FFFF] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative group-hover:text-white transition duration-500 ease-in-out text-center">
                Register
              </span>
            </button>
          </div>
          {success && (
            <h1
              className="text-[16px] text-green-400 text-center"
            //   data-aos="zoom-in"
            >
              Registered Successfully!
            </h1>
          )}
          {errorMsg && (
            <h1
              className="text-[16px] text-red-700 text-center"
            //   data-aos="zoom-in"
            >
              {errorMsg}
            </h1>
          )}
          <p className="text-center text-black">
            Already have an account?{" "}
            <span className="font-bold text-[#000029]">
              <Link to="/login">Log in</Link>
            </span>
          </p>
        </form>
        
         <div className="divider mt-0 text-[#000029]">OR</div>
        <div onClick={handleSignup}  className="flex justify-center items-center py-3 rounded-lg px-4 border-[#000029] border-2 text-[#000029] font-bold  gap-3 mb-4 mx-3">
        <FaGoogle className="text-[#000029]"></FaGoogle>
        <button className=""> Register with Google</button>

        </div> 
      </div>
    </div>
      );
};

export default Register;