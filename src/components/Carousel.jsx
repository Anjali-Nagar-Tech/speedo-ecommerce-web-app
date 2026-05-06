import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext.jsx";
import { useNavigate } from "react-router-dom";
import Loading from "../assets/Loading4.webm";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  const { data: productData, fetchAllProducts } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  if (!productData || productData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-75 md:h-100">
        <p className="text-sm md:text-base">Wait for few moments....</p>
        <video muted autoPlay loop className="w-24 md:w-32">
          <source src={Loading} type="video/webm" />
        </video>
      </div>
    );
  }

  return (
    <div className="relative mt-6 md:mt-10">

      
      <div className="hidden md:flex swiper-button-prev-custom absolute left-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-red-500 p-3 rounded-full text-white shadow-lg">
        <AiOutlineArrowLeft size={20} />
      </div>

      <div className="hidden md:flex swiper-button-next-custom absolute right-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-red-500 p-3 rounded-full text-white shadow-lg">
        <AiOutlineArrowRight size={20} />
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={600}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
      >
        {productData.slice(0, 10).map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">

              <div className="
                flex flex-col md:flex-row 
                items-center justify-between 
                gap-6 md:gap-10 
                px-4 sm:px-6 md:px-10 lg:px-16 
                py-10 md:py-16
                min-h-112.5 md:min-h-137.5
              ">

                
                <div className="text-center md:text-left space-y-3 md:space-y-5 max-w-xl">
                  
                  <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white line-clamp-2 md:line-clamp-3">
                    {item.title}
                  </h1>

                  <p className="text-gray-300 text-sm sm:text-base line-clamp-3">
                    {item.description}
                  </p>

                  <button
                    onClick={() => navigate("/products")}
                    className="bg-linear-to-r from-red-500 to-purple-500 
                               text-white px-4 py-2 md:px-5 md:py-3 
                               rounded-md cursor-pointer 
                               hover:scale-105 transition"
                  >
                    Shop Now
                  </button>
                </div>

                
                <div className="flex justify-center w-full md:w-auto">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="
                      w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
                      max-h-[250px] sm:max-h-[300px] md:max-h-[400px]
                      object-contain
                      rounded-2xl
                      shadow-xl shadow-red-400/40
                      hover:scale-105 transition duration-300
                    "
                  />
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;