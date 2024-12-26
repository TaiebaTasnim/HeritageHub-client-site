import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import AOS from "aos";



const Root = () => {
      useEffect(() => {
            AOS.init({ duration: 800 }); // Initialize AOS with animation duration
      }, []);
      return (

            <div className="font-display border-2 border-red-600">
                  <div className="bg-[#000029]">
                  <Header></Header>

                  </div>
                 
                  <div className="min-h-[calc(100vh-246px)]">
                  <Outlet></Outlet>

                  </div>
                  
                  <Footer></Footer>
                  
            </div>
      );
};

export default Root;