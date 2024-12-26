import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const ArtifactCard = ({artifact}) => {
      const {user}=useContext(AuthContext)
      return (
            <div className="card card-compact bg-white shadow-2xl border-[#000029] border-2 rounded-lg flex flex-col justify-between h-full">
      <figure className="p-6 flex-shrink-0">
        <img
          src={artifact?.artifacts?.artifactImage}
          alt={`${artifact?.artifacts?.artifactName} image`}
          className="w-full h-52 object-cover rounded-lg"
        />
      </figure>
      <div className="px-6 pb-6 flex flex-col flex-grow">
        {/* Artifact Name */}
        <h2 className="text-[#000029] text-2xl font-bold mb-3">
          {artifact?.artifacts?.artifactName}
        </h2>

        {/* Artifact Details */}
        <p className="text-gray-600">
          <span className="font-semibold">Artifact Type:</span>{' '}
          {artifact?.artifacts?.artifactType}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Discovered At:</span>{' '}
          {artifact?.artifacts?.discoveredAt}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Discovered By:</span>{' '}
          {artifact?.artifacts?.discoveredBy}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Present Location:</span>{' '}
          {artifact?.artifacts?.presentLocation}
        </p>

        {/* Like Count */}
        <p className="text-gray-600">
          <span className="font-semibold">Like Count:</span> {artifact?.likeCount || 0}
        </p>

        {/* View Details Button */}
        <div className="card-actions justify-end mt-4 flex-shrink-0">
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