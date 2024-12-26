import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider"; // Assumes you have an AuthProvider set up
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AddArtifacts = () => {
      const { user } = useContext(AuthContext);
       // Context to get logged-in user's details
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

      const artifactTypes = ["Tools", "Weapons", "Documents", "Writings"];

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
      };
      const axiosSecure=useAxiosSecure()

      const handleSubmit = async (e) => {
            e.preventDefault();
            const newArtifact = {
                  ...formData,
                  addedByName: user?.displayName || "Anonymous",
                  addedByEmail: user?.email || "No Email",
            };
            console.log(newArtifact)

            axiosSecure.post("/artifacts",newArtifact, {
                  headers: {
                        "Content-Type": "application/json",
                  },
            })
                  .then((response) => {
                        const { insertedId } = response.data;
                        console.log(insertedId);
                        if (insertedId) {
                              Swal.fire({
                                    title: "Artifact Added!",
                                    text: "Artifact has been added successfully.",
                                    icon: "success",
                              });
                              setFormData({
                                    artifactName: "",
                                    artifactImage: "",
                                    artifactType: "",
                                    historicalContext: "",
                                    createdAt: "",
                                    discoveredAt: "",
                                    discoveredBy: "",
                                    presentLocation: "",
                              });
                        }
                  })
                  .catch((error) => {
                        console.error(error);
                        Swal.fire({
                              title: "Error",
                              text: "There was an error adding the artifact. Please try again.",
                              icon: "error",
                        });
                  });


            //     fetch("https://heritage-hub-server-site.vercel.app/artifacts", {
            //       method: "POST",
            //       headers: {
            //         "Content-Type": "application/json",
            //       },
            //       body: JSON.stringify(newArtifact),
            //     })
            //       .then((res) => res.json())
            //       .then((data) => {
            //             console.log(data.insertedId)
            //         if (data.insertedId) {
            //           Swal.fire({
            //             title: "Artifact Added!",
            //             text: "Artifact has been added successfully.",
            //             icon: "success",
            //           });
            //           setFormData({
            //             artifactName: "",
            //             artifactImage: "",
            //             artifactType: "Tools",
            //             historicalContext: "",
            //             createdAt: "",
            //             discoveredAt: "",
            //             discoveredBy: "",
            //             presentLocation: "",
            //           });
            //         }
            //       })
            //       .catch((error) => {
            //         console.error(error);
            //         Swal.fire({
            //           title: "Error",
            //           text: "There was an error adding the artifact. Please try again.",
            //           icon: "error",
            //         });
            //       });
      };

      return (
            <div className="bg-white my-10">
                  <Helmet>
                        <title>Add Artifacts</title>
                  </Helmet>
                  <div className="container w-[90%] mx-auto border-2 border-[#000029] bg-white text-black p-8 shadow-lg rounded-md">
                        <h2 className="text-3xl font-bold mb-6 text-center text-[#000029]">
                              Add Artifact
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
                                          <option disabled value="">Pick an Artifact type</option>
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

                              {/* Read-Only Logged-In User Info */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                          <label className="font-semibold mb-2 block text-[#000029]">Added By</label>
                                          <input
                                                type="text"
                                                value={user?.displayName || "Anonymous"}
                                                className="w-full border border-[#000029] bg-[#000029] px-3 py-2 rounded text-gray-500"
                                                readOnly
                                          />
                                    </div>
                                    <div>
                                          <label className="font-semibold mb-2 block text-[#000029]">Email</label>
                                          <input
                                                type="text"
                                                value={user?.email || "No Email"}
                                                className="w-full border border-[#000029] bg-[#000029] px-3 py-2 rounded text-gray-500"
                                                readOnly
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
                                          Add Artifact
                                    </span>
                              </button>
                        </form>
                  </div>
            </div>

            //       <div className="bg-white my-10">
            //       <Helmet>
            //         <title>Add Artifacts</title>
            //       </Helmet>
            //       <div className="max-w-4xl mx-auto border-2 border-[#000029] bg-white text-white p-8 shadow-lg rounded-md">
            //         <h2 className="text-3xl font-bold mb-6 text-center text-[#000029]">
            //           Add Artifact
            //         </h2>
            //         <form onSubmit={handleSubmit} className="space-y-6">
            //           {/* Artifact Name */}
            //           <div>
            //             <label className="font-semibold mb-2 block text-[#000029]">Artifact Name</label>
            //             <input
            //               type="text"
            //               name="artifactName"
            //               value={formData.artifactName}
            //               onChange={handleChange}
            //               className="w-full border border-[#000029] bg-transparent px-3 py-2 rounded text-white"
            //               required
            //             />
            //           </div>

            //           {/* Artifact Image */}
            //           <div>
            //             <label className="font-semibold mb-2 block text-[#000029]">Artifact Image URL</label>
            //             <input
            //               type="text"
            //               name="artifactImage"
            //               value={formData.artifactImage}
            //               onChange={handleChange}
            //               className="w-full border border-[#000029] bg-transparent px-3 py-2 rounded text-white"
            //               required
            //             />
            //           </div>

            //           {/* Artifact Type */}
            //           <div>
            //             <label className="font-semibold mb-2 block text-[#000029]">Artifact Type</label>
            //             <select
            //               name="artifactType"
            //               value={formData.artifactType}
            //               onChange={handleChange}
            //               className="w-full border border-[#000029] bg-[#000029] px-3 py-2 rounded text-white"
            //             >
            //               <option disabled value="">Pick an Artifact type</option>
            //               {artifactTypes.map((type, idx) => (
            //                 <option key={idx} value={type}>
            //                   {type}
            //                 </option>
            //               ))}
            //             </select>
            //           </div>

            //           {/* Historical Context */}
            //           <div>
            //             <label className="font-semibold mb-2 block text-[#000029]">Historical Context</label>
            //             <textarea
            //               name="historicalContext"
            //               value={formData.historicalContext}
            //               onChange={handleChange}
            //               className="w-full border border-[#000029] bg-transparent px-3 py-2 rounded text-white"
            //               rows="4"
            //               required
            //             ></textarea>
            //           </div>

            //           {/* Created At */}
            //           <div>
            //             <label className="font-semibold mb-2 block text-[#000029]">Created At</label>
            //             <input
            //               type="text"
            //               name="createdAt"
            //               value={formData.createdAt}
            //               onChange={handleChange}
            //               className="w-full border border-[#000029] bg-transparent px-3 py-2 rounded text-white"
            //               required
            //             />
            //           </div>

            //           {/* Discovered At */}
            //           <div>
            //             <label className="font-semibold mb-2 block text-[#000029]">Discovered At</label>
            //             <input
            //               type="text"
            //               name="discoveredAt"
            //               value={formData.discoveredAt}
            //               onChange={handleChange}
            //               className="w-full border border-[#000029] bg-transparent px-3 py-2 rounded text-white"
            //               required
            //             />
            //           </div>

            //           {/* Discovered By */}
            //           <div>
            //             <label className="font-semibold mb-2 block text-[#000029]">Discovered By</label>
            //             <input
            //               type="text"
            //               name="discoveredBy"
            //               value={formData.discoveredBy}
            //               onChange={handleChange}
            //               className="w-full border border-[#000029] bg-transparent px-3 py-2 rounded text-white"
            //               required
            //             />
            //           </div>

            //           {/* Present Location */}
            //           <div>
            //             <label className="font-semibold mb-2 block text-[#000029]">Present Location</label>
            //             <input
            //               type="text"
            //               name="presentLocation"
            //               value={formData.presentLocation}
            //               onChange={handleChange}
            //               className="w-full border border-[#000029] bg-transparent px-3 py-2 rounded text-white"
            //               required
            //             />
            //           </div>

            //           {/* Read-Only Logged-In User Info */}
            //           <div>
            //             <label className="font-semibold mb-2 block text-[#000029]">Added By</label>
            //             <input
            //               type="text"
            //               value={user?.displayName || "Anonymous"}
            //               className="w-full border  bg-[#000029] px-3 py-2 rounded text-gray-500"
            //               readOnly
            //             />
            //           </div>
            //           <div>
            //             <label className="font-semibold mb-2 block text-[#000029]">Email</label>
            //             <input
            //               type="text"
            //               value={user?.email || "No Email"}
            //               className="w-full border  bg-[#000029] px-3 py-2 rounded text-gray-500"
            //               readOnly
            //             />
            //           </div>

            //           {/* Submit Button */}
            //           <button type="submit" className="w-full py-3 px-6 bg-[#000029] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group text-center ">
            //         <span className="absolute inset-0 bg-gradient-to-r from-[#000029] to-[#00FFFF] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            //         <span className="relative group-hover:text-white transition duration-500 ease-in-out text-center">
            //           Add Artifact
            //         </span>
            //       </button>
            //         </form>
            //       </div>
            //     </div>


            // <div className="bg-black">
            //                  <Helmet>
            //                     <title>Add Artifacts</title>
            //                    </Helmet>
            //       <div className="max-w-4xl mx-auto bg-black text-white p-8 shadow-lg rounded-md">
            //             <h2 className="text-3xl font-bold mb-6 text-center text-[#e20934]">
            //                   Add Artifact
            //             </h2>
            //             <form onSubmit={handleSubmit} className="space-y-6">
            //                   {/* Artifact Name */}
            //                   <div>
            //                         <label className="font-semibold mb-2 block">Artifact Name</label>
            //                         <input
            //                               type="text"
            //                               name="artifactName"
            //                               value={formData.artifactName}
            //                               onChange={handleChange}
            //                               className="w-full border border-[#e20934] bg-transparent px-3 py-2 rounded text-white"
            //                               required
            //                         />
            //                   </div>

            //                   {/* Artifact Image */}
            //                   <div>
            //                         <label className="font-semibold mb-2 block">Artifact Image URL</label>
            //                         <input
            //                               type="text"
            //                               name="artifactImage"
            //                               value={formData.artifactImage}
            //                               onChange={handleChange}
            //                               className="w-full border border-[#e20934] bg-transparent px-3 py-2 rounded text-white"
            //                               required
            //                         />
            //                   </div>

            //                   {/* Artifact Type */}
            //                   <div>
            //                         <label className="font-semibold mb-2 block">Artifact Type</label>
            //                         <select
            //                               name="artifactType"
            //                               value={formData.artifactType}
            //                               onChange={handleChange}
            //                               className="w-full border border-[#e20934] bg-black px-3 py-2 rounded text-white"
            //                         >
            //                               <option disabled value="">Pick an Artifact type</option>



            //                               {artifactTypes.map((type, idx) => (
            //                                     <option key={idx} value={type}>
            //                                           {type}
            //                                     </option>
            //                               ))}
            //                         </select>
            //                   </div>

            //                   {/* Historical Context */}
            //                   <div>
            //                         <label className="font-semibold mb-2 block">Historical Context</label>
            //                         <textarea
            //                               name="historicalContext"
            //                               value={formData.historicalContext}
            //                               onChange={handleChange}
            //                               className="w-full border border-[#e20934] bg-transparent px-3 py-2 rounded text-white"
            //                               rows="4"
            //                               required
            //                         ></textarea>
            //                   </div>

            //                   {/* Created At */}
            //                   <div>
            //                         <label className="font-semibold mb-2 block">Created At</label>
            //                         <input
            //                               type="text"
            //                               name="createdAt"
            //                               value={formData.createdAt}
            //                               onChange={handleChange}
            //                               className="w-full border border-[#e20934] bg-transparent px-3 py-2 rounded text-white"
            //                               required
            //                         />
            //                   </div>

            //                   {/* Discovered At */}
            //                   <div>
            //                         <label className="font-semibold mb-2 block">Discovered At</label>
            //                         <input
            //                               type="text"
            //                               name="discoveredAt"
            //                               value={formData.discoveredAt}
            //                               onChange={handleChange}
            //                               className="w-full border border-[#e20934] bg-transparent px-3 py-2 rounded text-white"
            //                               required
            //                         />
            //                   </div>

            //                   {/* Discovered By */}
            //                   <div>
            //                         <label className="font-semibold mb-2 block">Discovered By</label>
            //                         <input
            //                               type="text"
            //                               name="discoveredBy"
            //                               value={formData.discoveredBy}
            //                               onChange={handleChange}
            //                               className="w-full border border-[#e20934] bg-transparent px-3 py-2 rounded text-white"
            //                               required
            //                         />
            //                   </div>

            //                   {/* Present Location */}
            //                   <div>
            //                         <label className="font-semibold mb-2 block">Present Location</label>
            //                         <input
            //                               type="text"
            //                               name="presentLocation"
            //                               value={formData.presentLocation}
            //                               onChange={handleChange}
            //                               className="w-full border border-[#e20934] bg-transparent px-3 py-2 rounded text-white"
            //                               required
            //                         />
            //                   </div>

            //                   {/* Read-Only Logged-In User Info */}
            //                   <div>
            //                         <label className="font-semibold mb-2 block">Added By</label>
            //                         <input
            //                               type="text"
            //                               value={user?.displayName || "Anonymous"}
            //                               className="w-full border border-gray-600 bg-gray-800 px-3 py-2 rounded text-gray-500"
            //                               readOnly
            //                         />
            //                   </div>
            //                   <div>
            //                         <label className="font-semibold mb-2 block">Email</label>
            //                         <input
            //                               type="text"
            //                               value={user?.email || "No Email"}
            //                               className="w-full border border-gray-600 bg-gray-800 px-3 py-2 rounded text-gray-500"
            //                               readOnly
            //                         />
            //                   </div>

            //                   {/* Submit Button */}
            //                   <button
            //                         type="submit"
            //                         className="w-full py-2 bg-[#e20934] text-white rounded-lg font-semibold transition duration-300 hover:bg-black border border-[#e20934]"
            //                   >
            //                         Add Artifact
            //                   </button>
            //             </form>
            //       </div>
            // </div>
      );
};

export default AddArtifacts;
