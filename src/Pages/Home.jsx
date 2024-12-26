import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import ArtifactCards from "../Components/ArtifactCards";
import AboutUs from "../Components/AboutUs";
import Team from "../Components/Team";



const Home = () => {
      return (
            <div>
                  <Helmet>
                        <title>HeritageHub | Home</title>
                  </Helmet>
                  <Banner></Banner>
                  <AboutUs></AboutUs>
                  <ArtifactCards></ArtifactCards>
                  <Team></Team>
                  
                  
            </div>
      );
};

export default Home;