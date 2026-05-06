import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Show, SignInButton, UserButton } from "@clerk/react";
import { Link, NavLink } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const Navbar = ({ location, getLocation, openDropdown, setOpenDropdown }) => {
  const { cartItem } = useCart();
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleDropdown = () => setOpenDropdown(!openDropdown);

  return (
    <div className="bg-white py-3 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        
        <div className="flex items-center gap-4 md:gap-7">
          
          
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <HiMenu />
          </button>

          
          <Link to={"/"}>
            <h1 className="font-bold text-2xl md:text-3xl">
              <span className="text-red-500 font-serif">S</span>peedo
            </h1>
          </Link>

          
          <div className="hidden md:flex gap-1 cursor-pointer text-gray-700 items-center relative">
            <MapPin className="text-red-500" />
            <span className="font-semibold text-sm">
              {location ? (
                <div className="leading-tight">
                  <p>{location.city || location.county}</p>
                  <p className="text-xs text-gray-500">
                    {location.state}
                  </p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown onClick={toggleDropdown} />

            
            {openDropdown && (
              <div className="absolute top-12 left-0 w-64 shadow-xl bg-white border p-4 rounded-md">
                <div className="flex justify-between items-center mb-3">
                  <h1 className="font-semibold">Change Location</h1>
                  <CgClose
                    onClick={toggleDropdown}
                    className="cursor-pointer"
                  />
                </div>

                <button
                  onClick={getLocation}
                  className="bg-red-500 text-white px-3 py-1 rounded-md w-full"
                >
                  Detect my location
                </button>
              </div>
            )}
          </div>
        </div>

        
        <div className="flex items-center gap-4 md:gap-6">
          
          
          <nav className="hidden md:flex">
            <ul className="flex gap-6 text-lg font-semibold">
              <NavLink to="/">
                {({ isActive }) => (
                  <li className={isActive ? "text-red-500" : ""}>
                    Home
                  </li>
                )}
              </NavLink>
              <NavLink to="/products">
                {({ isActive }) => (
                  <li className={isActive ? "text-red-500" : ""}>
                    Products
                  </li>
                )}
              </NavLink>
              <NavLink to="/about">
                {({ isActive }) => (
                  <li className={isActive ? "text-red-500" : ""}>
                    About
                  </li>
                )}
              </NavLink>
              <NavLink to="/contact">
                {({ isActive }) => (
                  <li className={isActive ? "text-red-500" : ""}>
                    Contact
                  </li>
                )}
              </NavLink>
            </ul>
          </nav>

          
          <Link to="/cart" className="relative">
            <IoCartOutline className="h-6 w-6 md:h-7 md:w-7" />
            {cartItem.length > 0 && (
              <span className="bg-red-500 px-2 text-xs rounded-full absolute -top-2 -right-2 text-white">
                {cartItem.length}
              </span>
            )}
          </Link>

        
          <div>
            <Show when="signed-out">
              <SignInButton className="bg-red-500 text-white px-3 py-1 rounded-md text-sm cursor-pointer" />
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </div>
      </div>

      
      {mobileMenu && (
        <div className="md:hidden bg-white border-t shadow-md px-4 py-4 space-y-4">
          
        
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MapPin className="text-red-500" />
              <span className="text-sm">
                {location?.city || "Add Address"}
              </span>
            </div>

            <button
              onClick={getLocation}
              className="text-xs bg-red-500 text-white px-2 py-1 rounded"
            >
              Detect
            </button>
          </div>

          
          <NavLink to="/" onClick={() => setMobileMenu(false)}>
            <p>Home</p>
          </NavLink>
          <NavLink to="/products" onClick={() => setMobileMenu(false)}>
            <p>Products</p>
          </NavLink>
          <NavLink to="/about" onClick={() => setMobileMenu(false)}>
            <p>About</p>
          </NavLink>
          <NavLink to="/contact" onClick={() => setMobileMenu(false)}>
            <p>Contact</p>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;