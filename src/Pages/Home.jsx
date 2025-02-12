import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import ArtifactCards from "../Components/ArtifactCards";
import AboutUs from "../Components/AboutUs";
import Team from "../Components/Team";
import Testimonials from "../Components/Testimonials";



const Home = () => {
      return (
            <div >
                  <Helmet>
                        <title>HeritageHub | Home</title>
                  </Helmet>
                  <Banner></Banner>
                  <AboutUs></AboutUs>
                  <ArtifactCards></ArtifactCards>
                  <Team></Team>
                  <Testimonials></Testimonials>
                  
                  
            </div>
      );
};

export default Home;