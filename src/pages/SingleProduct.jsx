import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../assets/Loading4.webm";
import BreadCrumbs from "../components/BreadCrumbs";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";

const SingleProduct = () => {
  const params = useParams();
  const { addToCart } = useCart();

  const [singleProduct, setSingleProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://zeptro-ecommerce-app.onrender.com/products/single/${params.id}`
      );
      setSingleProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  const discount = Math.ceil(Math.random() * (30 - 10) + 10);
  const originalPrice = singleProduct
    ? Math.ceil(
        singleProduct.price +
          (singleProduct.price * discount) / 100
      )
    : 0;


  const handleAddToCart = () => {
    if (!singleProduct) return;


    for (let i = 0; i < quantity; i++) {
      addToCart(singleProduct);
    }
  };

  return (
    <>
      {singleProduct ? (
        <div className="bg-gray-50 min-h-screen px-4 py-6 md:py-10">
          <BreadCrumbs title={singleProduct.title} />

          <div className="max-w-6xl mx-auto md:p-6 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            
        
            <div className="w-full">
              <img
                src={singleProduct.images[0]}
                alt={singleProduct.title}
                className="rounded-2xl w-full h-80 md:h-105 object-contain shadow-md hover:scale-[1.02] transition"
              />
            </div>

           
            <div className="flex flex-col gap-5">
              
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                {singleProduct.title}
              </h1>

              <p className="text-sm text-gray-500">
                Category:{" "}
                <span className="text-gray-800 font-medium">
                  {singleProduct.category?.name?.toUpperCase()}
                </span>
              </p>

       
              <p className="text-xl font-bold text-red-500 flex items-center gap-3 flex-wrap">
                ${singleProduct.price}

                <span className="line-through text-gray-500 text-base">
                  ${originalPrice}
                </span>

                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                  {discount}% OFF
                </span>
              </p>

              <p className="text-gray-600">
                {singleProduct.description}
              </p>

  
              <div className="flex items-center gap-4 mt-3">
                <label className="font-medium">Quantity:</label>

                <div className="flex items-center border rounded-full overflow-hidden">
                  <button
                    onClick={() =>
                      setQuantity((prev) => Math.max(1, prev - 1))
                    }
                    className="px-4 py-1 hover:bg-gray-200"
                  >
                    −
                  </button>

                  <span className="px-4 font-semibold">
                    {quantity}
                  </span>

                  <button
                    onClick={() =>
                      setQuantity((prev) => prev + 1)
                    }
                    className="px-4 py-1 hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>

      
              <div className="flex gap-4 mt-4">
                <button
                  onClick={handleAddToCart}
                  className="flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition"
                >
                  <IoCartOutline className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen bg-gray-50">
          <video muted autoPlay loop className="w-32 md:w-40 opacity-80">
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </>
  );
};

export default SingleProduct;