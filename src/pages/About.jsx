
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8">
        <h1 className="text-4xl font-bold  text-center">About Speedo</h1>

        <p className="text-gray-700 text-lg">
          Welcome to <span className="font-semibold text-red-600">Speedo</span>, your one-stop destination for all types of products under one Roof. From cutting-edge gadgets to must-have accessories, we’re here to power up your life with best products and unbeatable service.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Mission</h2>
          <p className="text-gray-700 text-base">
            At Speedo, our mission is to simplify the way people shop by delivering high-quality products at the best value, all in one place. We aim to create a seamless and reliable shopping experience, combining speed, convenience, and trust to meet the everyday needs of our customers.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Why Choose Speedo?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Fast & Seamless Shopping – Find products quickly with an intuitive interface</li>
            <li>Quality You Can Trust – Handpicked products that meet high standards</li>
            <li>Quick Delivery – Get your orders delivered without delay</li>
            <li>Customer First Approach – Support that actually cares</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Vision</h2>
          <p className="text-gray-700 text-base">
            We envision a future where technology elevates everyday life. At Speedo, we’re committed to staying ahead of the curve, offering cutting-edge solutions that are both practical and affordable.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-red-600 mb-2">Join the Speedo Family</h3>
          <p className="text-gray-700 mb-4">
            Whether you're into tech, work, or everyday essentials — Speedo has everything you need, all in one place.
          </p>
         <Link to={'/products'}><button className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition duration-300 cursor-pointer">
            Start Shopping
          </button></Link> 
        </div>
      </div>
    </div>
  );
};

export default About;