import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { AiFillLike } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

const ArtifactCard = ({ artifact }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="card card-compact bg-white shadow-2xl border-[#000029] border-2 rounded-lg flex flex-col h-full">
      {/* Image */}
      <figure className="p-6 flex-shrink-0 h-52">
        <img
          src={artifact?.artifacts?.artifactImage}
          alt={`${artifact?.artifacts?.artifactName} image`}
          className="w-full h-full object-cover rounded-lg"
        />
      </figure>
      
      {/* Card Content */}
      <div className="px-6 pb-6 flex flex-col flex-grow justify-between">
        <div>
          <h2 className="text-[#000029] text-2xl font-bold mb-3">
            {artifact?.artifacts?.artifactName}
          </h2>
          
          <p className="text-gray-600">
            <span className="font-semibold text-[#000029]">Type :</span>{' '}
            {artifact?.artifacts?.artifactType}
          </p>
          
          <p className="text-gray-600 flex items-center gap-2">
            <FaLocationDot className="text-[#000029]" />
            {artifact?.artifacts?.presentLocation}
          </p>
          
          <p className="text-gray-600 flex items-center gap-2 text-xl">
            <AiFillLike className="text-[#000029]" /> {artifact?.likeCount || 0}
          </p>
        </div>
        
        {/* Button */}
        <div className="card-actions justify-end mt-4">
          <Link to={`artifactDetail/${artifact?._id}/${user?.email}`}>
            <button className="py-3 px-6 bg-[#000029] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group text-center">
              <span className="absolute inset-0 bg-gradient-to-r from-[#000029] to-[#00FFFF] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative group-hover:text-white transition duration-500 ease-in-out text-center">
                View Details
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtifactCard;
