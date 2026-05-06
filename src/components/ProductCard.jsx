import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);

    toast.success("Product added to cart 🛒", {
      duration: 2000,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <div className="border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max">
      
      <img
        src={product.images[0]}
        alt={product.title}
        className="bg-gray-100 aspect-square"
        onClick={() => navigate(`/products/${product._id}`)}
      />

      <h1 className="line-clamp-2 p-1 font-semibold">
        {product.title}
      </h1>

      <p className="my-1 text-lg text-gray-800 font-bold">
        ${product.price}
      </p>

      <button
        onClick={handleAddToCart}
        className="bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold hover:bg-red-600 transition"
      >
        <IoCartOutline className="w-6 h-6" />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;