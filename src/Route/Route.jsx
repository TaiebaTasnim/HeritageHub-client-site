import {
      createBrowserRouter,
      
    } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddArtifacts from "../Pages/AddArtifacts";
import ArtifactDetails from "../Pages/ArtifactDetails";
import AllArtifacts from "../Pages/AllArtifacts";
import LikedArtifact from "../Pages/LikedArtifact";
import MyArtifacts from "../Pages/MyArtifacts";
import UpdateArtifacts from "../Pages/UpdateArtifacts";

    const Route = createBrowserRouter([
      {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                  path:"/",
                  element:<Home></Home>,
                  loader:()=>fetch("http://localhost:4000/artifacts")
            },
            {
                  path:"/login",
                  element:<Login></Login>
            },
            {
                  path:"/register",
                  element:<Register></Register>
            },
            {
                  path:"/addArtifact",
                  element:<PrivateRoute>
                        <AddArtifacts></AddArtifacts>
                  </PrivateRoute>
            },
            {
                  path:"/artifactDetail/:id/:email",
                  element:<PrivateRoute>
                        <ArtifactDetails></ArtifactDetails>
                  </PrivateRoute>,
                  //loader:({params})=>fetch(`http://localhost:4000/artifacts1/${params.id}/email`)
            },
            {
                  path:"/artifactDetail/:id/:email",
                  element:<PrivateRoute>
                        <ArtifactDetails></ArtifactDetails>
                  </PrivateRoute>,
                  //loader:({params})=>fetch(`http://localhost:4000/artifacts1/${params.id}/email`)
            },
            {
                  path:"/liked/:email",
                  element:<PrivateRoute>
                        <LikedArtifact></LikedArtifact>
                  </PrivateRoute>,
                  
            },
            {
                  path:"/myArtifact/:email",
                  element:<PrivateRoute>
                        <MyArtifacts></MyArtifacts>
                  </PrivateRoute>,
                  //loader:({params})=>fetch(`http://localhost:4000/myArtifacts/${params.email}`)
            },
            {
                  path:"/artifactUpdate/:id",
                  element:<PrivateRoute>
                        <UpdateArtifacts></UpdateArtifacts>
                  </PrivateRoute>,
                  //loader:({params})=>fetch(`http://localhost:4000/artifactUpdate/${params.id}`)
            },
            {
                  path:"/allArtifact",
                  element:<AllArtifacts></AllArtifacts>,
                  loader:()=>fetch("http://localhost:4000/artifacts1")
                       
            },
        ]
      },
    ]);

export default Route