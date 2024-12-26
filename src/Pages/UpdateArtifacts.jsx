import axios from "axios";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";




const UpdateArtifacts = () => {
      const { id } = useParams(); // Get artifact ID from URL
      const navigate = useNavigate();
      const [artifact, setArtifact] = useState(null);
      const [loading, setLoading] = useState(true);
      const [formData, setFormData] = useState({
            artifactName: "",
            artifactImage: "",
            artifactType: "",
            historicalContext: "",
            createdAt: "",
            discoveredAt: "",
            discoveredBy: "",
            presentLocation: "",
      });
  
      const artifactTypes = ["Tools", "Weapons", "Documents", "Writings"]; // Dropdown options
       const axiosSecure=useAxiosSecure()
      // Fetch artifact data on load
      useEffect(() => {
            setLoading(true)
      //     fetch(`https://heritage-hub-server-site.vercel.app/myArtifact/${id}`)
      //         .then((response) => response.json())
      //         .then((data) => {
      //             if (data.artifacts) {
      //                   setArtifact(data.artifacts);
      //                   setFormData(data.artifacts); // Pre-fill form with fetched data
      //               } else {
      //                   // Handle the case when artifacts is null or undefined
      //                   console.error("No artifact data found");
      //               }
      //               setLoading(false); // Stop loading
      //           })
      //           .catch((error) => {
      //               console.error("Error fetching artifact:", error);
      //               setLoading(false); // Stop loading on error
      //           });
      axiosSecure.get(`/myArtifact/${id}`)
      .then(res=>{
            console.log(res.data)
            if (res.data.artifacts) {
                                    setArtifact(res.data.artifacts);
                                     setFormData(res.data.artifacts); // Pre-fill form with fetched data
                                 } else {
                                     // Handle the case when artifacts is null or undefined
                                    console.error("No artifact data found");
                                }
                                 setLoading(false); // Stop loading
                             })
                             .catch((error) => {
                                             console.error("Error fetching artifact:", error);
                                             setLoading(false); // Stop loading on error
                                         });

          

      

            
      }, [id]);

      if (loading) {
            return  <div className="flex min-h-screen justify-center items-center"><span className="loading loading-bars loading-lg text-[#e20934]"></span></div>
        }
  
      const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
      };
  
      const handleSubmit = (e) => {
          e.preventDefault();
  
          fetch(`https://heritage-hub-server-site.vercel.app/myArtifact/${id}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
          })
              .then((response) => response.json())
              .then((data) => {
                  if (data.modifiedCount > 0) {
                        Swal.fire({
                          title: "Updated!",
                          text: "Visa information has been updated successfully.",
                          icon: "success",
                        });
              
                        setArtifact((prevArtifact) => ({
                              ...prevArtifact,
                              artifacts: {
                                  ...prevArtifact,
                                  ...formData, // Merge the updated form data with the existing artifact data
                              }
                          }));
      
                        
                          
                      }
                      else {
                        Swal.fire({
                            title: "No Changes!",
                            text: "No changes were made to the artifact.",
                            icon: "info",
                        });
                    }
                  
                  // if (data.message) {
                  //     alert(data.message); // Display success or error message
                  //     navigate("/artifacts"); // Redirect to artifacts list
                  // }
              });
            }
      return (
            <div>
                  {/* <Helmet>
                        <title>Update Artifact:{artifact?.artifactName}</title>
                  </Helmet> */}
                  {artifact && (
              <Helmet>
                <title>Update Artifact:{artifact?.artifactName}</title>
              </Helmet>
            )}

<div className="container w-[90%] my-10 mx-auto border-2 border-[#000029] bg-white text-black p-8 shadow-lg rounded-md">
  <h2 className="text-3xl font-bold mb-6 text-center text-[#000029]">
    Update Artifact
  </h2>
  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Artifact Name */}
    <div>
      <label className="font-semibold mb-2 block text-[#000029]">Artifact Name</label>
      <input
        type="text"
        name="artifactName"
        value={formData.artifactName}
        onChange={handleChange}
        className="w-full border border-[#000029] bg-transparent px-3 py-2 rounded text-black"
        required
      />
    </div>

    {/* Artifact Image */}
    <div>
      <label className="font-semibold mb-2 block text-[#000029]">Artifact Image URL</label>
      <input
        type="text"
        name="artifactImage"
        value={formData.artifactImage}
        onChange={handleChange}
        className="w-full border border-[#000029] bg-transparent px-3 py-2 rounded text-black"
        required
      />
    </div>

    {/* Artifact Type */}
    <div>
      <label className="font-semibold mb-2 block text-[#000029]">Artifact Type</label>
      <select
        name="artifactType"
        value={formData.artifactType}
        onChange={handleChange}
        className="w-full border border-[#000029] bg-[#000029] px-3 py-2 rounded text-white"
      >
        <option disabled value="">
          Pick an Artifact type
        </option>
        {artifactTypes.map((type, idx) => (
          <option key={idx} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>

    {/* Historical Context */}
    <div>
      <label className="font-semibold mb-2 block text-[#000029]">Historical Context</label>
      <textarea
        name="historicalContext"
        value={formData.historicalContext}
        onChange={handleChange}
        className="w-full border border-[#000029] bg-transparent px-3 py-2 rounded text-black"
        rows="4"
        required
      ></textarea>
    </div>

    {/* Row for Created At and Discovered At */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Created At */}
      <div>
        <label className="font-semibold mb-2 block text-[#000029]">Created At</label>
        <input
          type="text"
          name="createdAt"
          value={formData.createdAt}
          onChange={handleChange}
          className="w-full border border-[#000029] bg-transparent px-3 py-2 rounded text-black"
          required
        />
      </div>

      {/* Discovered At */}
      <div>
        <label className="font-semibold mb-2 block text-[#000029]">Discovered At</label>
        <input
          type="text"
          name="discoveredAt"
          value={formData.discoveredAt}
          onChange={handleChange}
          className="w-full border border-[#000029] bg-transparent px-3 py-2 rounded text-black"
          required
        />
      </div>
    </div>

    {/* Row for Discovered By and Present Location */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Discovered By */}
      <div>
        <label className="font-semibold mb-2 block text-[#000029]">Discovered By</label>
        <input
          type="text"
          name="discoveredBy"
          value={formData.discoveredBy}
          onChange={handleChange}
          className="w-full border border-[#000029] bg-transparent px-3 py-2 rounded text-black"
          required
        />
      </div>

      {/* Present Location */}
      <div>
        <label className="font-semibold mb-2 block text-[#000029]">Present Location</label>
        <input
          type="text"
          name="presentLocation"
          value={formData.presentLocation}
          onChange={handleChange}
          className="w-full border border-[#000029] bg-transparent px-3 py-2 rounded text-black"
          required
        />
      </div>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full py-3 px-6 bg-[#000029] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group text-center "
    >
      <span className="absolute inset-0 bg-gradient-to-r from-[#000029] to-[#00FFFF] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      <span className="relative group-hover:text-white transition duration-500 ease-in-out text-center">
        Update Artifact
      </span>
    </button>
  </form>
</div>

                  {/* <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Update Artifact</h1>
            <form onSubmit={handleSubmit}>
                 Artifact Name
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Artifact Name</label>
                    <input
                        type="text"
                        name="artifactName"
                        value={formData.artifactName}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>

                
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Artifact Image (URL)</label>
                    <input
                        type="text"
                        name="artifactImage"
                        value={formData.artifactImage}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>

                
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Artifact Type</label>
                    <select
                        name="artifactType"
                        value={formData.artifactType}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                    >
                        {artifactTypes.map((type, idx) => (
                            <option key={idx} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>

               
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Historical Context</label>
                    <textarea
                        name="historicalContext"
                        value={formData.historicalContext}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                    ></textarea>
                </div>

               
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Created At</label>
                    <input
                        type="text"
                        name="createdAt"
                        value={formData.createdAt}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>

                
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Discovered At</label>
                    <input
                        type="text"
                        name="discoveredAt"
                        value={formData.discoveredAt}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>

               
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Discovered By</label>
                    <input
                        type="text"
                        name="discoveredBy"
                        value={formData.discoveredBy}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>

                
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Present Location</label>
                    <input
                        type="text"
                        name="presentLocation"
                        value={formData.presentLocation}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>

                
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Update Artifact
                </button>
            </form>
        </div>  */}
                  
            </div>
      );
};

export default UpdateArtifacts;