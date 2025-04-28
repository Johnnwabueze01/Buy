
import { useState } from "react";
import Link from "next/link";
import { HiSearch } from "react-icons/hi";

export default function  ONavbar() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);

  // Simulated product list for search suggestions
  const productList = [
    { id: "1", name: "Topffer" },
    { id: "2", name: "Shippes From Nigeria" },
    { id: "3", name: "Brand" },
    { id: "4", name: "Laptop" },
    { id: "5", name: "Headphones" },
    { id: "6", name: "Watch" },
    // Add more products if necessary
  ];

  // Filter products based on search query
  const filteredProducts = productList.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchFocus = () => {
    setIsSearching(true);
  };

  const handleSearchBlur = () => {
    setIsSearching(false);
  };

  return (
    <nav className=" w-full py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Wrapper for Search Bar and Links */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between">

          {/* Search Bar */}
          <div className="relative flex items-center space-x-2 w-full sm:w-2/3 lg:w-1/2 xl:w-1/3">
            <div className="relative flex items-center w-full">
             
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
                className="w-full pl-12 pr-4 py-2 rounded-2xl border border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
               <span className="text-lg font-semibold text-black absolute right-12">AI</span>
              <span className="absolute right-3 text-xl p-1 bg-black rounded text-white">
                <HiSearch />
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          
        </div>
      </div>
    </nav>
  );
}
