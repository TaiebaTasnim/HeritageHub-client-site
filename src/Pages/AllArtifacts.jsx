import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const AllArtifacts = () => {
      const {user}=useContext(AuthContext)
      const loadArtifacts=useLoaderData()
      const [allArtifact, setAllArtifact] = useState(loadArtifacts)
      const [search,setSearch]=useState("")
      //console.log(loadArtifacts)
      const navigate=useNavigate()
      const handleChange=(e)=>{
        //console.log(e.target.value)
        setSearch(e.target.value)

      }

      const handleSearch=()=>{
        console.log(search)
        fetch(`https://heritage-hub-server-site.vercel.app/artifact2?searchArtifact=${search}`)
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          // const filteredArtifacts = data.filter((artifact) => artifact?.artifacts?.addedByEmail === user?.email); // Ensure filtering by user email
          setAllArtifact(data);
        })
      }
      

      return (
        <div>
      <Helmet>
        <title>All Artifacts</title>
      </Helmet>
      <div className="bg-white min-h-screen text-[#000029] p-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#000029]">
         All Artifacts
        </h2>
        <div className="flex justify-center mb-8">
    <input
      type="text"
      placeholder="Search by Artifact name..."
      onChange={handleChange}
      className="px-4 py-2 w-3/4 sm:w-1/2 lg:w-1/3 rounded-l-lg bg-gray-700 text-white border border-gray-600 focus:outline-none"
    />
    <button
    onClick={handleSearch}
     className="py-3 px-6 bg-[#000029] text-white rounded-r-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group text-center">
              <span className="absolute inset-0 bg-gradient-to-r from-[#000029] to-[#00FFFF] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative group-hover:text-white transition duration-500 ease-in-out text-center">
                Search
              </span>
            </button>
  </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        { allArtifact.length>0?(
          allArtifact.map((artifact) => (
            <div
              key={artifact._id}
              className="relative bg-[#000029] p-6 rounded-lg shadow-lg overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white border-2 hover:border-[#000029] flex flex-col justify-between"
              data-aos="zoom-in"
              data-aos-duration="1000"
              style={{ minHeight: "500px" }} // Ensures that all cards are at least 500px tall
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={artifact?.artifacts?.artifactImage}
                  alt={artifact?.artifacts?.artifactName}
                  className="w-full h-48 object-cover rounded-lg border-2 border-white transition-all duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="text-center flex-grow">
                {/* Title */}
                <h3 className="text-xl font-semibold text-[#00FFFF] mb-4 group-hover:text-[#000029] transition-colors duration-300">
                  {artifact?.artifacts?.artifactName}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-2 group-hover:text-gray-600 transition-colors duration-300">
                  <strong>Artifact Type:</strong> {artifact?.artifacts?.artifactType}
                </p>
                <p className="text-gray-300 mb-2 group-hover:text-gray-600 transition-colors duration-300">
                  <strong>Discovered By:</strong> {artifact?.artifacts?.discoveredBy}
                </p>

                <p className="text-gray-300 mb-2 group-hover:text-gray-600 transition-colors duration-300">
                  <strong>Present Location:</strong> {artifact?.artifacts?.presentLocation}
                </p>

                {/* Button */}
                <button
                  onClick={() =>
                    navigate(`/artifactDetail/${artifact._id}/${user.email}`)
                  }
                  className="py-2 px-6 border-2 border-[#00FFFF] text-[#00FFFF] font-semibold rounded-full inline-flex items-center justify-center gap-2 transition-all duration-300 group-hover:bg-[#000029] hover:text-[white] hover:border-white"
                >
                  View Detail
                </button>
              </div>
            </div>
          ))  
        ):(
          
            <div >
             <p className=" text-center text-gray-300 text-2xl mt-10">No applications found for your search.</p>

          </div>
          
          

         
        )
        
        }
    
        </div>
      </div>
    </div>
    
    //         <div>
    //           <Helmet>
    //             <title>All Artifacts</title>
    //           </Helmet>
    //               <div className="bg-black min-h-screen text-white p-6">
    //   <h2 className="text-3xl font-bold text-center mb-8">Artifacts</h2>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {allArtifact.map((artifact) => (
    //       <div
    //         key={artifact._id}
    //         className="bg-gray-800 p-4 rounded-lg shadow-md"
    //       >
    //         <img
    //           src={artifact?.artifacts?.
    //               artifactImage
    //               }
    //           alt={artifact.name}
    //           className="w-full h-40 object-cover rounded-md mb-4"
    //         />
    //         <h3 className="text-xl font-semibold">{artifact?.artifacts?.
    //               artifactName}</h3>
    //         <p className="text-sm text-gray-400">
    //           Type: {artifact?.artifacts?.
    //               artifactType} | Discovered By: {artifact?.artifacts?.discoveredBy}
    //         </p>
    //         <p className="text-sm text-gray-400">
    //           Like Count: {artifact?.
    //               likeCount} 
    //         </p>
    //         <button
    //           onClick={() => navigate(`/artifactDetail/${artifact._id}/${user.email}`)}
    //           className="mt-4 bg-[#e20934] text-white px-4 py-2 rounded"
    //         >
    //           View Detail
    //         </button>
    //       </div>
    //     ))}
    //   </div>
    // </div>
                  
    //         </div>
      );
};

export default AllArtifacts;