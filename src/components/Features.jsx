import { Truck, Lock, RotateCcw, Clock } from "lucide-react";

const features = [
  { icon: Truck, text: "Free Shipping", subtext: "On orders over $100" },
  { icon: Lock, text: "Secure Payment", subtext: "100% protected payments" },
  { icon: RotateCcw, text: "Easy Returns", subtext: "30-day return policy" },
  { icon: Clock, text: "24/7 Support", subtext: "Dedicated customer service" },
];

const Features = () => {
  return (
    <div className="bg-gray-100 py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center sm:flex-row sm:items-start
                text-center sm:text-left
                gap-4
                bg-white
                p-5 sm:p-6
                rounded-2xl
                shadow-sm hover:shadow-md
                transition
              "
            >
         
              <div className="flex items-center justify-center bg-red-100 p-3 rounded-full">
                <feature.icon
                  className="h-6 w-6 sm:h-7 sm:w-7 text-red-500"
                  aria-hidden="true"
                />
              </div>

        
              <div>
                <p className="text-base sm:text-lg font-semibold text-gray-900">
                  {feature.text}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {feature.subtext}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Features;