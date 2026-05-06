import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      
   
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
  
          <div>
            <Link to="/">
              <h1 className="text-red-500 text-2xl font-bold">
                Speedo
              </h1>
            </Link>

            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Powering Your World with the Best Products in Market.
            </p>

            <div className="mt-3 text-sm text-gray-400 space-y-1">
              <p>123 Electronics St, Style City</p>
              <p>Email: support@speedo.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>

   
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Customer Service
            </h3>

            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">Shipping & Returns</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Order Tracking</li>
              <li className="hover:text-white cursor-pointer">Size Guide</li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-3">
              Follow Us
            </h3>

            <div className="flex gap-4 text-2xl">
              <FaFacebook className="hover:text-red-500 cursor-pointer transition" />
              <FaInstagram className="hover:text-red-500 cursor-pointer transition" />
              <FaTwitterSquare className="hover:text-red-500 cursor-pointer transition" />
              <FaPinterest className="hover:text-red-500 cursor-pointer transition" />
            </div>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-3">
              Stay in the Loop
            </h3>

            <p className="text-sm text-gray-400">
              Subscribe to get special offers, free giveaways, and more
            </p>

            <form className="mt-4 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2 rounded-md sm:rounded-l-md sm:rounded-r-none text-gray-900 focus:outline-none"
              />

              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-red-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-red-500 font-semibold">
            Speedo
          </span>
          . All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;