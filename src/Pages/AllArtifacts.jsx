import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const AllArtifacts = () => {
  const { user } = useContext(AuthContext);
  const loadArtifacts = useLoaderData();
  const [allArtifact, setAllArtifact] = useState(loadArtifacts);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const [selectedArtifactType, setSelectedArtifactType] = useState("");

  // Filter visas based on the selected type
  const filteredartifact = selectedArtifactType
    ? allArtifact.filter((artifact) => artifact?.artifacts?.artifactType === selectedArtifactType)
    : allArtifact;

  const handleArtifactTypeChange = (event) => {
    const artifactType = event.target.value;
    setSelectedArtifactType(artifactType);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    fetch(`https://heritage-hub-server-site.vercel.app/artifact2?searchArtifact=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setAllArtifact(data);
      });
  };

  return (
    <div className="container mx-auto w-[90%] ">
      <Helmet>
        <title>All Artifacts</title>
      </Helmet>
      <div className="bg-white dark:bg-black min-h-screen py-6 ">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#000029] dark:text-white">
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
            className="py-3 px-6 bg-[#000029] text-white rounded-r-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group text-center"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#000029] to-[#00FFFF] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            <span className="relative group-hover:text-white transition duration-500 ease-in-out text-center">
              Search
            </span>
          </button>
        </div>
        <div className="mb-6 text-center">
          <label htmlFor="artifactType" className="text-[#000029] dark:text-white text-xl font-bold mr-2">
            Select Artifact Type:
          </label>
          <select
            id="visaType"
            className="p-2 rounded-lg text-black border-[#000029] border-2"
            value={selectedArtifactType}
            onChange={handleArtifactTypeChange}
          >
             <option value="">All Artifact</option>
            <option value="Tool">Tool</option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Document</option>
            <option value="Writings">Writings</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredartifact.length > 0 ? (
            filteredartifact.map((artifact) => (
              <div
                key={artifact._id}
                className="relative bg-[#000029] p-6 rounded-lg shadow-lg overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white border-2 hover:border-[#000029] flex flex-col h-full"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg mb-6 h-48 flex-shrink-0">
                  <img
                    src={artifact?.artifacts?.artifactImage}
                    alt={artifact?.artifacts?.artifactName}
                    className="w-full h-full object-cover rounded-lg border-2 border-white transition-all duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="text-center flex-grow flex flex-col justify-between">
                  <div>
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
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => navigate(`/artifactDetail/${artifact._id}/${user?.email}`)}
                    className="mt-4 py-2 px-6 border-2 border-[#00FFFF] text-[#00FFFF] font-semibold rounded-full transition-all duration-300 group-hover:bg-[#000029] hover:text-white hover:border-white"
                  >
                    View Detail
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full">
              <p className="text-center text-[#000029] dark:text-white text-2xl mt-10">No artifacts found for your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllArtifacts;
