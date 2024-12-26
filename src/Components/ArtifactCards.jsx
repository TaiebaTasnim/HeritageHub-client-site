import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ArtifactCard from "./ArtifactCard";


const ArtifactCards = () => {
      const loadedartifact = useLoaderData()
      const [artifacts, setArtifacts] = useState(loadedartifact)

      return (
            <div className=" py-12 container mx-auto w-[90%]">
            <div className="container mx-auto">
                  <h2 className="text-4xl text-[#000029] font-bold text-center mb-8" data-aos="fade-up">
                        Our highest Like Artifacts
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                        {
                              artifacts.map((artifact,index) =>(<div key={artifact._id}  data-aos="fade-up" data-aos-delay={index * 200}> <ArtifactCard artifact={artifact}></ArtifactCard></div>))
                        }

                  </div>
                  <div className="text-center mt-8">
                        <Link to="/allArtifact">
                        <button className=" py-3 px-6 bg-[#000029] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group text-center">
                        <span className="absolute inset-0 bg-gradient-to-r from-[#00FFFF] to-[#000029] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  <span className="relative group-hover:text-white transition duration-500 ease-in-out">
                    See All Artifacts
                    
                  </span>
            
          </button>
                        </Link>
                  </div>
            </div>
      </div>
      );
};

export default ArtifactCards;