import Features from "../components/Features";
import Carousel from "../components/Carousel";
import MidBanner from "../components/MidBanner";

const Home = () => {
  return (
    <div className="w-full">

     
      <div className="w-full">
        <Carousel />
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-8 md:space-y-12 lg:space-y-16 mt-6 md:mt-10">
        
     
        <div>
          <MidBanner />
        </div>

        <div>
          <Features />
        </div>

      </div>
    </div>
  );
};

export default Home;