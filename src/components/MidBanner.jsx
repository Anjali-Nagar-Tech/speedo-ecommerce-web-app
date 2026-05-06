import banner from "../assets/banner1.jpg";
import { useNavigate } from "react-router-dom";

const MidBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 py-8 md:py-12 lg:py-16">
      
      <div
        className="
          relative max-w-7xl mx-auto 
          rounded-none md:rounded-2xl 
          overflow-hidden
          min-h-75 sm:min-h-87.5 md:min-h-112.5 lg:min-h-137.5
          bg-cover bg-center
        "
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4 text-center">
          
          <div className="text-white max-w-2xl space-y-4 md:space-y-6">
            
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Shopping at Your Fingertips
            </h1>

          
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
              Discover the best products with unbeatable prices and free
              shipping on all orders.
            </p>

            
            <button
              onClick={() => navigate("/products")}
              className="
                bg-red-500 hover:bg-red-600 
                text-white font-semibold 
                px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3
                rounded-lg transition duration-300
              "
            >
              Shop Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MidBanner;