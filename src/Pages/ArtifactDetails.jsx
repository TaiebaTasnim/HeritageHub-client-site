
import { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import useAxiosSecure from '../hooks/useAxiosSecure';

const ArtifactDetails = () => {
      const {user}=useContext(AuthContext)
      const {email,id}=useParams()
      //const loadArtifacts=useLoaderData()
      const [artifact, setArtifact] = useState(null);
      const [likecount,setLikecount]=useState(artifact?.artifacts?.likeCount)
      //console.log(loadArtifacts)
      const userEmail=user.email
      console.log(userEmail)
      const axiosSecure=useAxiosSecure()

      useEffect(()=>{
            
            axiosSecure.get(`/artifacts4/${id}/${email}`)
            .then(res=>{
                  console.log(res.data)
                  setArtifact(res.data)
    
            }
                   )
      },[email,id])  
      useEffect(()=>{
            
            axiosSecure.get(`/artifacts1/${id}/${email}`)
            .then(res=>{
                  console.log(res.data)
                  setArtifact(res.data)
    
            }
                   )
      },[email,id])

      const handleLike = async () => {
            try {
              const response = await fetch(
                `https://heritage-hub-server-site.vercel.app/like-artifact/${artifact?._id}`,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ userEmail }),
                }
              );
              
              
          
              const data = await response.json();
          
              if (response.ok) {
                setArtifact((prevArtifact) => ({
                  ...prevArtifact,
                  likeCount: data.isLiked
                    ? prevArtifact.likeCount + 1
                    : prevArtifact.likeCount - 1,
                  likedBy: data.isLiked
                    ? [...prevArtifact.likedBy, userEmail] // Add userEmail if liked
                    : prevArtifact.likedBy.filter((email) => email !== userEmail), // Remove userEmail if unliked
                }));
              } else {
                alert(data.message || "Something went wrong");
              }
            } catch (error) {
              console.error(error);
              alert("Error liking/unliking artifact");
            }
          };
          

      // const handleLike = async () => {
      //       try {
      //         const response = await fetch(
      //           `https://heritage-hub-server-site.vercel.app/like-artifact/${artifact?._id}`,
      //           {
      //             method: "POST",
      //             headers: { "Content-Type": "application/json" },
      //             body: JSON.stringify({ userEmail }),
      //           }
      //         );
          
      //         const data = await response.json();
          
      //         if (response.ok) {
                
      //           setArtifact((prevArtifact) => ({
      //             ...prevArtifact,
      //             likeCount: data.isLiked ? prevArtifact.likeCount + 1 : prevArtifact.likeCount - 1,
      //           }));
      //         } else {
                
      //           alert(data.message || "Something went wrong");
      //         }
      //       } catch (error) {
      //         console.error(error);
      //         alert("Error liking/unliking artifact");
      //       }
      //     };
          
          
     

      // const handleLike = async () => {
      //       try {
      //           const response = await fetch(`https://heritage-hub-server-site.vercel.app/like-artifact/${artifact?._id}`, {
      //               method: 'POST',
      //               headers: { 'Content-Type': 'application/json' },
      //               body: JSON.stringify({ userEmail  })
      //           });
      //           const data = await response.json();
      //           if (response.ok) {
      //             setArtifact((prevArtifact) => ({
      //                   ...prevArtifact,
      //                   likeCount: prevArtifact.likeCount + 1, // Increment UI immediately
      //               }));
      //             //   setArtifact({ ...artifact });
      //             //    setLikecount((prevCount) => prevCount + 1);
      //           } else {
      //               alert(data.message);
      //           }
      //       } catch (error) {
      //           alert('Error liking artifact');
      //       }
      //   };
      return (
            <div>
            {/* Helmet for dynamic title */}
            {artifact?.artifacts && (
              <Helmet>
                <title>Artifact Details: {artifact.artifacts.artifactName}</title>
              </Helmet>
            )}
      
            {/* Page Container */}
            <div className="bg-white min-h-screen text-white p-6">
              <div className="text-center mb-10">
                <h1
                  className="text-5xl font-bold text-[#000029] animate__animated animate__bounceIn"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Artifact Details
                </h1>
                <p
                  className="text-lg text-gray-800 mt-2"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Discover the fascinating history behind this artifact.
                </p>
              </div>
      
              {/* Artifact Details Section */}
              <div
                className="max-w-4xl mx-auto space-y-6"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                {/* Artifact Image */}
                <div className="w-full overflow-hidden mb-8">
                  <img
                    src={artifact?.artifacts?.artifactImage}
                    alt={artifact?.artifacts?.artifactName}
                    className="w-full h-[350px] object-cover rounded-md shadow-md "
                  />
                </div>
      
                {/* Artifact Name */}
                <h2
                  className="text-5xl font-bold text-center text-[#000029] mb-6 animate__animated animate__fadeInDown"
                  data-aos="fade-down"
                >
                  {artifact?.artifacts?.artifactName}
                </h2>
      
                {/* Artifact Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white">

                    {/* Historical Context */}
                    <div className="sm:col-span-2">
                    
                    <p className="text-lg text-gray-800 mt-2 text-center">{artifact?.artifacts?.historicalContext}</p>
                  </div>
                  {/* Artifact Type */}
                  <div className="flex items-center gap-4">
                    <span className="text-[#000029]  text-xl font-semibold">
                      Artifact Type:
                    </span>
                    <p className="text-lg text-gray-800 ">{artifact?.artifacts?.artifactType}</p>
                  </div>
      
                
      
                  {/* Created At */}
                  <div className="flex items-center gap-4">
                    <span className="text-[#000029]  text-xl font-semibold">
                      Created At:
                    </span>
                    <p className="text-lg text-gray-800 ">{artifact?.artifacts?.createdAt}</p>
                  </div>
      
                  {/* Discovered At */}
                  <div className="flex items-center gap-4">
                    <span className="text-[#000029] text-xl font-semibold">
                      Discovered At:
                    </span>
                    <p className="text-lg text-gray-800 ">{artifact?.artifacts?.discoveredAt}</p>
                  </div>
      
                  {/* Discovered By */}
                  <div className="flex items-center gap-4">
                    <span className="text-[#000029] text-xl font-semibold">
                      Discovered By:
                    </span>
                    <p className="text-lg text-gray-800 ">{artifact?.artifacts?.discoveredBy}</p>
                  </div>
      
                  {/* Present Location */}
                  <div className="sm:col-span-2 flex items-center gap-4">
                    <span className="text-[#000029] text-xl font-semibold">
                      Present Location:
                    </span>
                    <p className="text-lg text-gray-800  mt-2">{artifact?.artifacts?.presentLocation}</p>
                  </div>
                </div>
      
                {/* Like Dislike Section */}
                <div className="mt-6 flex items-center justify-center gap-6">
  <button
    onClick={handleLike}
    className={`py-3 px-6 rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group text-center ${
      artifact?.likedBy?.includes(userEmail)
        ? "bg-[#00FFFF] text-[#000029]" 
        : "bg-[#000029] text-white" 
    }`}
  >
    
      {artifact?.likedBy?.includes(userEmail) ? "Unlike" : "Like"}
    
  </button>
  <span className="text-lg font-semibold text-gray-800">
    Likes: {artifact?.likeCount}
  </span>
</div>

                {/* <div
                  className="mt-6 flex items-center justify-center gap-6"
                  
                >
                   <button
                   onClick={handleLike}
                    className="py-3 px-6 bg-[#000029] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group text-center">
              <span className="absolute inset-0 bg-gradient-to-r from-[#000029] to-[#00FFFF] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative group-hover:text-white transition duration-500 ease-in-out text-center">
                Like
              </span>
            </button>
                  <span className="text-lg font-semibold text-gray-800">
                    Likes: {artifact?.likeCount}
                  </span>
                </div> */}
              </div>
            </div>
          </div>
//             <div>
//                   {artifact?.artifacts && (
//     <Helmet>
//         <title>Artifact Details: {artifact.artifacts.artifactName}</title>
//     </Helmet>
// )}
//                   <div className="bg-black min-h-screen text-white p-6">
//       <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
//         <img
//           src={artifact?.artifacts?.artifactImage}
//           alt={artifact?.artifacts?.artifactName}
//           className="w-full h-64 object-cover rounded-md mb-4"
//         />
//         <h2 className="text-3xl font-bold mb-4">{artifact?.artifacts?.artifactName}</h2>
//         <p><strong>Type:</strong> {artifact?.artifacts?.artifactType}</p>
//         <p><strong>Historical Context:</strong> {artifact?.artifacts?.historicalContext}</p>
//         <p><strong>Created At:</strong> {artifact?.artifacts?.createdAt}</p>
//         <p><strong>Discovered At:</strong> {artifact?.artifacts?.discoveredAt}</p>
//         <p><strong>Discovered By:</strong> {artifact?.artifacts?.discoveredBy}</p>
//         <p><strong>Present Location:</strong> {artifact?.artifacts?.presentLocation}</p>

//         {/* Like Button and Like Count */}
//         <div className="mt-6 flex items-center gap-4">
//           <button
//             onClick={handleLike}
//             className="bg-[#e20934] text-white px-4 py-2 rounded"
//           >
//             Like
//           </button>
//           <span className="text-lg font-semibold text-white">Likes: {artifact?.likeCount}</span>
//         </div>
//       </div>
//     </div>
                  
//             </div>
      );
};

export default ArtifactDetails;