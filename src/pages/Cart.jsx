import { FaRegTrashAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const Cart = ({ getLocation }) => {
  const { cartItem, increaseQty, decreaseQty, removeFromCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    state: "",
    postcode: "",
    country: "",
    phone: "",
  });

  const [loadingLocation, setLoadingLocation] = useState(false);

  const handleDetectLocation = async () => {
    try {
      setLoadingLocation(true);
      const loc = await getLocation();

      setFormData((prev) => ({
        ...prev,
        address: loc.fullAddress,
        state: loc.state,
        postcode: loc.postcode,
        country: loc.country,
      }));
    } catch (err) {
      alert("Location access denied or failed");
      console.error(err);
      
    } finally {
      setLoadingLocation(false);
      
    }
  };

  const subtotal = cartItem.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="mt-6 md:mt-10 max-w-7xl mx-auto mb-16 px-4 sm:px-6">
      {cartItem.length > 0 ? (
        <>
        
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-8 tracking-tight">
            <IoCartOutline className="inline mr-2" />
            Your Cart
          </h1>

          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-10">

          
            <div className="lg:col-span-2 space-y-4 md:space-y-5">
              {cartItem.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 md:p-5 rounded-xl shadow-sm hover:shadow-md transition"
                >
              
                  <div className="flex gap-4 items-center">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg border"
                    />

                    <div>
                      <h2 className="font-medium text-sm sm:text-base md:text-lg line-clamp-2">
                        {item.title}
                      </h2>
                      <p className="text-red-500 font-bold text-base md:text-lg">
                        ${item.price}
                      </p>
                    </div>
                  </div>

            
                  <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6">
                    
           
                    <div className="flex items-center border rounded-full overflow-hidden">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-3 py-1 hover:bg-gray-200"
                      >
                        −
                      </button>

                      <span className="px-3 font-semibold text-sm sm:text-base">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 py-1 hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>

   
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 rounded-full hover:bg-red-100 transition"
                    >
                      <FaRegTrashAlt className="text-red-500 text-lg sm:text-xl" />
                    </button>
                  </div>
                </div>
              ))}
            </div>


            <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm lg:sticky lg:top-24 h-fit">
              
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Order Summary
              </h2>


              <div className="space-y-2 text-sm md:text-base text-gray-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="border-t pt-3 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-green-600">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>


              <div className="mt-5 space-y-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-2 border rounded-lg text-sm md:text-base"
                />

                <input
                  type="text"
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full p-2 border rounded-lg"
                />

                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="State"
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                    className="w-full p-2 border rounded-lg"
                  />

                  <input
                    type="text"
                    placeholder="Postcode"
                    value={formData.postcode}
                    onChange={(e) =>
                      setFormData({ ...formData, postcode: e.target.value })
                    }
                    className="w-full p-2 border rounded-lg"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Country"
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                    className="w-full p-2 border rounded-lg"
                  />

                  <input
                    type="text"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
              </div>


              <button
                onClick={handleDetectLocation}
                className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition text-sm md:text-base"
              >
                {loadingLocation
                  ? "Detecting location..."
                  : "Detect Location"}
              </button>

           
              <button className="w-full mt-3 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold text-sm md:text-base">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center mt-16 space-y-4">
          <h1 className="text-xl sm:text-2xl font-semibold">
            <IoCartOutline className="inline mr-2" />
            Your cart is empty
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Looks like you haven't added anything yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;