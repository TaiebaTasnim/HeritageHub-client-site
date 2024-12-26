import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../hooks/useAxiosSecure";


const LikedArtifact = () => {
      //const {user}=useContext(AuthContext)
      const {email}=useParams()
      const [likes,setLikes]=useState([])
      const [loading,setLoading]=useState(true)
      const axiosSecure=useAxiosSecure()

      useEffect(()=>{
            setLoading(true)
            // fetch(`http://localhost:4000/liked-artifacts/${user.email}`)
            // .then(res=>res.json())
            // .then(data=>{
            //       //console.log(data)
            //       setLikes(data)
            //       //console.log(targetApp)
            // })
            axiosSecure.get(`/liked-artifacts/${email}`)
            .then(res=>{
                  setLikes(res.data)
                  setLoading(false)

            }
                   )
      },[email])
      if (loading) {
            return  <div className="flex min-h-screen justify-center items-center"><span className="loading loading-bars loading-lg text-[#e20934]"></span></div>
        }
      return (
            <div>
  {/* Helmet for dynamic title */}
  <Helmet>
    <title>My Liked Artifacts</title>
  </Helmet>

  {/* Page Container */}
  <div className="bg-white min-h-screen text-[#000029] p-6">
    {/* Page Title */}
    <h2 className="text-3xl font-bold text-center mb-8 text-[#000029]">
      My Liked Artifacts
    </h2>

    {/* Grid Layout for Liked Artifacts */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {likes.length > 0 ? (
        likes.map((like, index) => (
            <div
            key={index}
            className="relative bg-[#000029] p-6 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between"
            data-aos="zoom-in"
            data-aos-duration="1000"
            style={{ minHeight: "500px" }} // Ensures consistent card height
          >
            {/* Artifact Image */}
            <figure className="relative h-56 overflow-hidden rounded-lg  border-2 mb-0">
              <img
                src={like.artifacts.artifactImage}
                alt={like.artifacts.artifactName}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              <h2 className="absolute bottom-5 left-5 text-white text-2xl font-bold">
                {like.artifacts.artifactName}
              </h2>
            </figure>
          
            {/* Artifact Information */}
            <div className="  rounded-lg shadow-md">
              <h3 className="text-[#00FFFF] text-xl font-semibold mb-4  text-center">
                Artifact Details
              </h3>
              <div className="space-y-2">
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-[#00FFFF]">Artifact Type:</span>{' '}
                  {like.artifacts.artifactType}
                </p>
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-[#00FFFF]">Created At:</span>{' '}
                  {like.artifacts.createdAt}
                </p>
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-[#00FFFF]">Discovered At:</span>{' '}
                  {like.artifacts.discoveredAt}
                </p>
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-[#00FFFF]">Discovered By:</span>{' '}
                  {like.artifacts.discoveredBy}
                </p>
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-[#00FFFF]">Present Location:</span>{' '}
                  {like.artifacts.presentLocation}
                </p>
              </div>
            </div>
            </div>
        ))
      ) : (
        <div className="col-span-full">
          <p className="text-center text-[#000029] text-2xl mt-10">
          You haven't liked any artifacts yet. Explore history and find artifacts that inspire you!
          </p>
        </div>
      )}
    </div>
  </div>
</div>
//             <div>
//                   <Helmet>
//                         <title>My LikedArtifacts</title>
//                   </Helmet>
//                   <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//     >
//       { likes.length>0?(
//             likes.map((like,index)=>(
//               <div className="">
//                  <div
//         key={index}
//         className="relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-[#e20934]"
       
//       >
//         {/* Visa Image */}
//         <figure className="relative h-48 overflow-hidden p-2">
//           <img
//             src={like.artifacts.artifactImage}
//             alt='image'
//             className="w-full h-full object-cover rounded-lg"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
//           <h2 className="absolute bottom-5 left-5 text-white text-2xl font-bold">
//             {like.artifacts.artifactName}
//           </h2>
//         </figure>

//         {/* Application Info */}
//         <div className="p-4">
//           <h3 className="text-[#e20934] text-lg font-semibold mb-2">
//             Artifact Type: {like.artifacts.artifactType}
//           </h3>
          
//         </div>
//                  </div>
//               </div>
               
//             ))
//           ):(
            
//               <div >
//                <p className=" text-center text-gray-300 text-2xl mt-10">No applications found for your search.</p>

//             </div>
            
            

           
//           )
          
//           }
      
//   </div>
                  
//             </div>
      );
};

export default LikedArtifact;