import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";



const Header = () => {
      const { user, signout } = useContext(AuthContext)
     
      const links = (
        <>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#00FFFF] font-bold border-b-2 border-[#00FFFF]  pb-1"
                  : "text-white hover:text-[#00FFFF] transition duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allArtifact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#00FFFF] font-bold border-b-2 border-[#00FFFF]  pb-1"
                  : "text-white hover:text-[#00FFFF] transition duration-300"
              }
            >
              All Artifacts
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to={`/liked/${user?.email}`}
              className={({ isActive }) =>
                isActive
                  ? "text-[#00FFFF] font-bold border-b-2 border-[#00FFFF] pb-1"
                  : "text-white hover:text-[#00FFFF] transition duration-300"
              }
            >
              Liked Artifacts
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/myArtifact/${user?.email}`}
              className={({ isActive }) =>
                isActive
                  ? "text-[#00FFFF] font-bold border-b-2 border-[#00FFFF] pb-1"
                  : "text-white hover:text-[#00FFFF] transition duration-300"
              }
            >
              My Artifacts
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/addartifact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#00FFFF] font-bold border-b-2 border-[#00FFFF] pb-1"
                  : "text-white hover:text-[#00FFFF] transition duration-300"
              }
            >
              Add Artifacts
            </NavLink>
          </li>
        </>
      );
      

      // const links=
      // <>
      //   <nav className="">
      //   <ul className="flex items-center text-[16px]  pr-4">
      //     <li>
      //       <NavLink to="/" 
      //       className={({ isActive }) =>
      //         isActive
      //           ? " text-[#00FFFF] px-4 py-2 "
      //           : "text-white  "
      //       }
      //       >
      //         Home
      //       </NavLink>
      //     </li>
      //     <li>
      //       <NavLink to="/allArtifact" className={({ isActive }) =>
      //         isActive
      //           ? " text-[#00FFFF] px-4 py-2 "
      //           : "text-white  "
      //       } >
      //         All Artifacts
      //       </NavLink>
      //     </li>
      //     <li>
      //       <NavLink to={`liked/${user?.email}`} 
      //       className={({ isActive }) =>
      //         isActive
      //           ? "text-[#00FFFF] px-4 py-2 "
      //           : "text-white  "
      //       }
      //       >
      //         Liked Artifacts
      //       </NavLink>
      //     </li>
      //     <li>
      //       <NavLink to={`myArtifact/${user?.email}`} 
      //        className={({ isActive }) =>
      //         isActive
      //           ? " text-[#00FFFF] px-4 py-2 "
      //           : "text-white  "
      //       }
      //        >
      //         My Artifacts
      //       </NavLink>
      //     </li>
          
      //     <li>
      //       <NavLink to="/addartifact" className={({ isActive }) =>
      //         isActive
      //           ? " text-[#00FFFF] px-4 py-2 rounded"
      //           : "text-white  px-4 py-2"
      //       }>
      //         Add Artifacts
      //       </NavLink>
      //     </li>
         
      //   </ul>
      // </nav>
      // </>

const handlesignout = () => {
      signout()
        .then((result) => result.user)
        .catch(error => error.message)
    }
      return (
        <div className="bg-[#000029] text-white shadow-md">
        <div className="container mx-auto md:w-[90%] navbar px-4 py-3">
          {/* Navbar Start */}
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-[#000029] rounded-box z-[1] mt-3 w-48 p-2  shadow"
              >
                {links}
              </ul>
            </div>
            <a
              href="/"
              className="text-white text-[16px] md:text-2xl font-style font-bold tracking-wide hover:text-[#00FFFF] transition duration-300"
            >
              Heritage<span className="text-[#00FFFF]">Hub</span>
            </a>
          </div>
  
          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
  
          {/* Navbar End */}
          <div className="navbar-end gap-2">
            {user ? (
              <div className="flex items-center gap-3">
                {/* User Photo */}
                <img
                  src={user.photoURL}
                  alt="User"
                  data-tooltip-id="userTooltip"
                  
                  className="w-9 h-9 border-2 border-[#00FFFF] rounded-full object-cover cursor-pointer"
                />
                {/* React Tooltip */}
                <ReactTooltip
                  id="userTooltip"
                  place="bottom"
                  clickable
                  style={{
                    zIndex: "10000",
                    backgroundColor: "#000029",
                    color: "white",
                    borderRadius: "8px",
                    boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
                    fontSize: "14px",
                    padding: "20px",
                  }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <span className="font-semibold">{user.displayName}</span>
                    <div className="">
                    <li>
            <NavLink
              to={`/liked/${user?.email}`}
              className={({ isActive }) =>
                isActive
                  ? "text-[#00FFFF] font-bold  pb-1"
                  : "text-white hover:text-[#00FFFF] transition duration-300"
              }
            >
              Liked Artifacts
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/myArtifact/${user?.email}`}
              className={({ isActive }) =>
                isActive
                  ? "text-[#00FFFF] font-bold pb-1"
                  : "text-white hover:text-[#00FFFF] transition duration-300"
              }
            >
              My Artifacts
            </NavLink>
          </li> 
                    </div>
                    <button
                      onClick={handlesignout}
                      className="py-2 px-4 bg-[#00FFFF] text-[#000029] rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-[#00FFFF] to-[#000029] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                      <span className="relative group-hover:text-white transition duration-500 ease-in-out">
                        LogOut
                      </span>
                    </button>
                  </div>
                </ReactTooltip>
                
              </div>
            ) : (
              <div className="flex gap-1 md:gap-2">
                <Link
                  to="/login"
                  className="py-2 px-2 bg-[#00FFFF] text-[#000029] rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#00FFFF] to-[#000029] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  <span className="relative group-hover:text-white transition duration-500 ease-in-out">
                    LogIn
                  </span>
                </Link>
                <Link
                  to="/register"
                  className="py-2 px-2 bg-[#00FFFF] text-[#000029] rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#00FFFF] to-[#000029] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  <span className="relative group-hover:text-white transition duration-500 ease-in-out">
                    Register
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
//             <div>
//                   <div className="navbar container mx-auto w-[90%] ">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16" />
//         </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//        {links}
//       </ul>
//     </div>
//     <a className="text-white text-2xl font-style font-bold">HeritageHub</a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       {links}
//     </ul>
//   </div>
//   <div className="navbar-end gap-2">
//   {user ? (
//               <div className="flex items-center gap-3">
//                 {/* User Photo */}
//                 <img
//                   src={user.photoURL}
//                   alt="User"
//                   data-tooltip-id="userTooltip" // Set the id for tooltip targeting
//                   className="w-9 h-9 border-2 border-white rounded-full object-cover cursor-pointer relative"
//                 />
//                 <ReactTooltip
//                   id="userTooltip" // Match the id of the element
//                   place="bottom"
//                   clickable // Allows interaction with the tooltip
//                   style={{
//                     backgroundColor: "#ffffff",
//                     color: "black",
//                     borderRadius: "8px",
//                     boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
//                     fontSize: "14px",
//                     padding: "10px",
//                     display:'absolute',
//                     left:'0px',
//                     top:'100%',
//                     zIndex:'50',

//                   }}
//                 >
//                   <div className="flex flex-col items-center gap-4">
//                     <span className="font-semibold">{user.displayName}</span>
//                     <button onClick={handlesignout} className="py-2 px-2 text-center bg-[#e20934] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group">
//                   <span className="absolute inset-0 bg-gradient-to-r from-[#e20934] to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
//                    <span className="relative group-hover:text-white transition duration-500 ease-in-out">
//                      <Link to="/">LogOut</Link>
//                    </span>
//                  </button>
//                     {/* <button
//                       onClick={handlesignout}
//                       className="mt-2 py-1 px-3 bg-[#e20934] text-white rounded-lg font-semibold hover:bg-[#c1072e] transition duration-300"
//                     >
//                       Logout
//                     </button> */}
//                   </div>
//                 </ReactTooltip>
//               </div>
//               // <div className="flex items-center gap-1">
//               //   <img
//               //     src={user.photoURL}
//               //     alt="user photo"
//               //     className="w-9 h-9 border-2 border-white rounded-full object-cover"
//               //   />
//               //   <button onClick={handlesignout} className="py-2 px-2 text-center bg-white text-[#e20934] rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group">
//               //     <span className="absolute inset-0 bg-gradient-to-r from-[#e20934] to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
//               //     <span className="relative group-hover:text-white transition duration-500 ease-in-out">
//               //       <Link to="/">SignOut</Link>
//               //     </span>
//               //   </button>
//               //   {/* <button

//               //     className="py-2 px-5 bg-white text-[#e20934] rounded-lg font-semibold  transition duration-300">
//               //     <Link to="/">Sign Out</Link>
//               //   </button> */}
//               // </div>
//             ) : (
//               <div className="flex gap-1 items-center">
//                 <button className="py-2 px-2 bg-white text-[#e20934] rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group">
//                   <span className="absolute inset-0 bg-gradient-to-r from-[#e20934] to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
//                   <span className="relative group-hover:text-white transition duration-500 ease-in-out">
//                     <Link to="/login">LogIn</Link>
//                   </span>
//                 </button>


//                 {/* <button className="py-2 px-3 bg-white text-[#e20934] rounded-lg font-semibold  transition duration-300">
//             <Link to="/login">LogIn</Link>
//           </button> */}
//                 <button className="py-2 px-2 bg-white text-[#e20934] rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group">
//                   <span className="absolute inset-0 bg-gradient-to-r from-[#e20934] to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
//                   <span className="relative group-hover:text-white transition duration-500 ease-in-out">
//                     <Link to="/register">Register</Link>
//                   </span>
//                 </button>
//               </div>
//             )}
//       {/* <button className="btn"><Link to="/login">Login</Link></button>
//       <button className="btn"><Link to="/register">Register</Link></button> */}
    
    
//   </div>
// </div>
                  
// </div>
      );
};

export default Header;