import { useState, useEffect } from "react";
import { useData } from "../context/DataContext";
import FilterSection from "../components/FilterSection";
import Loading from "../assets/Loading4.webm";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import { SearchX } from "lucide-react";

const Products = () => {
  const { data, fetchAllProducts } = useData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchAllProducts();
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  const filteredData = data?.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" ||
        item.category.slug.toLowerCase() === category.toLowerCase()) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
    );
  });

  const dynamicPage = Math.ceil(filteredData?.length / 8);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">

        {data?.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">

          
            <div className="w-full lg:w-1/4">
              <FilterSection
                search={search}
                setSearch={setSearch}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                category={category}
                setCategory={setCategory}
                handleCategoryChange={handleCategoryChange}
              />
            </div>

            <div className="w-full lg:w-3/4 flex flex-col items-center">

              {filteredData?.length > 0 ? (
                <>

                  <div className="
                    w-full
                    grid grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    xl:grid-cols-4 
                    gap-4 sm:gap-6 mt-4
                  ">
                    {filteredData
                      ?.slice(page * 8 - 8, page * 8)
                      .map((product, index) => (
                        <ProductCard key={index} product={product} />
                      ))}
                  </div>


                  <div className="mt-8">
                    <Pagination
                      pageHandler={pageHandler}
                      page={page}
                      dynamicPage={dynamicPage}
                    />
                  </div>
                </>
              ) : (

                <div className="flex flex-col items-center justify-center w-full min-h-[300px] text-center mt-10">
                  <SearchX size={60} className="text-gray-400 mb-4" />

                  <h2 className="text-lg md:text-xl font-semibold text-gray-700">
                    No Results Found
                  </h2>

                  <p className="text-gray-500 text-sm mt-2 max-w-md">
                    Try different keywords or adjust filters
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (

          <div className="flex items-center justify-center h-[300px] md:h-[400px]">
            <video muted autoPlay loop className="w-24 md:w-32">
              <source src={Loading} type="video/webm" />
            </video>
          </div>
        )}

      </div>
    </div>
  );
};

export default Products;