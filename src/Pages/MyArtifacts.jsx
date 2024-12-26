import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {  useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import loadingSpinner from '../assets/Lottie/loading.json'
import Lottie from "lottie-react";

const MyArtifacts = () => {
      //const loadedArtifacts=useLoaderData()
      const {email}=useParams()
      //console.log(email)
      const [myArtifact,setMyArtifact]=useState([])
      const [loading,setLoading]=useState(true)
      const navigate=useNavigate()
      const axiosSecure=useAxiosSecure()

      useEffect(()=>{
            setLoading(true)
            axiosSecure.get(`/myArtifacts/${email}`)
            .then(res=>{
                  setMyArtifact(res.data)
                  setLoading(false)

            }
                  )
      },[email])

      if (loading) {
            return  <div className="flex justify-center items-center min-h-screen text-[#000029]"><Lottie animationData={loadingSpinner}></Lottie></div>
        }

      const handleDelete = (id) => {
            //console.log(id)
            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
            })
                  .then((result) => {
                        if (result.isConfirmed) {

                              fetch(`https://heritage-hub-server-site.vercel.app/myArtifact/${id}`, {
                                    method: "Delete",
                              })
                                    .then(res => res.json())
                                    .then(data => {
                                          if (data.deletedCount > 0) {
                                                //console.log(data)
                                                Swal.fire({
                                                      title: "Deleted!",
                                                      text: "Your visa has been deleted.",
                                                      icon: "success"
                                                });

                                                const remainning = myArtifact.filter(artifact => artifact._id !== id);
                                                //console.log("remainning:", remainning)
                                                setMyArtifact(remainning)
                                                navigate("/allArtifact")

                                          }
                                    })

                        }
                  });

      }
      return (
            <div>
                  <Helmet>
                        <title>My Artifacts</title>
                  </Helmet>
                  <div className="bg-white min-h-screen text-[#000029] p-6">
    {/* Page Title */}
    <h2 className="text-3xl font-bold text-center mb-8 text-[#000029]">
      My Artifacts
    </h2>
                   <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      { myArtifact.length>0?(
            myArtifact.map((artifact,index)=>(
              
                   <div key={index}
           
            className="relative bg-[#000029] p-6 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between"
            data-aos="zoom-in"
            data-aos-duration="1000"
            style={{ minHeight: "500px" }} // Ensures consistent card height
          >
            {/* Artifact Image */}
            <figure className="relative h-56 overflow-hidden rounded-lg  border-2 mb-0">
              <img
                src={artifact.artifacts.artifactImage}
                alt={artifact.artifacts.artifactName}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              <h2 className="absolute bottom-5 left-5 text-white text-2xl font-bold">
                {artifact.artifacts.artifactName}
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
                  {artifact.artifacts.artifactType}
                </p>
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-[#00FFFF]">Created At:</span>{' '}
                  {artifact.artifacts.createdAt}
                </p>
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-[#00FFFF]">Discovered At:</span>{' '}
                  {artifact.artifacts.discoveredAt}
                </p>
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-[#00FFFF]">Discovered By:</span>{' '}
                  {artifact.artifacts.discoveredBy}
                </p>
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-[#00FFFF]">Present Location:</span>{' '}
                  {artifact.artifacts.presentLocation}
                </p>
              </div>
            </div>
            <div className="flex gap-8 mt-4">
            <button
                  onClick={() =>
                    navigate(`/artifactUpdate/${artifact._id}`)
                  }
                  className="py-2 px-6 border-2 border-[#00FFFF] text-[#00FFFF] font-semibold rounded-full inline-flex items-center justify-center gap-2 transition-all duration-300 group-hover:bg-[#000029] hover:text-[white] hover:border-white"
                >
                  Update
                </button>
                <button
                  onClick={()=>handleDelete(artifact?._id)}
                  className="py-2 px-6 border-2 border-[#00FFFF] text-[#00FFFF] font-semibold rounded-full inline-flex items-center justify-center gap-2 transition-all duration-300 group-hover:bg-[#000029] hover:text-[white] hover:border-white"
                >
                  Delete
                </button>
            </div>

            </div>
                  
              
              
                   
         
            ))
          ):(
            
              <div className="col-span-full">
               <p className=" text-center text-[#000029] text-2xl mt-10">No artifacts found in your collection. Start exploring and add artifacts to your list!</p>

            </div>
            
            

           
          )
          
          }
      
  </div>
  </div>
                  
            </div>
      );
};

export default MyArtifacts;