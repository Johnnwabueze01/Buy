import Link from "next/link"
import ProductCard from "../components/ProductCard";
import { BsFilter } from "react-icons/bs";

const products = [
    { id: 1, title: "Product 1", image: "/carousel 1.svg", price: "$199.99" },
    { id: 2, title: "Product 2", image: "/carousel 3.svg", price: "$299.99" },
    { id: 3, title: "Product 3", image: "/carousel 2.svg", price: "$399.99" },
    { id: 4, title: "Product 4", image: "/carousel 4.svg", price: "$199.99" },
    { id: 5, title: "Product 5", image: "/carousel 2.svg", price: "$299.99" },
    { id: 6, title: "Product 6", image: "/carousel 1.svg", price: "$399.99" },
    { id: 7, title: "Product 7", image: "/carousel 3.svg", price: "$399.99" },
    { id: 8, title: "Product 8", image: "/carousel 4.svg", price: "$399.99" },
  ];

export default function categories() {
    return(
      
        <div className="container">
           <div className="  flex space-x-3 md:space-x-6 md:justify-end justify-center items-center text-center lg:-mt-14 -mt-0 pb-10">
            <Link href="/categories" className="text-black hover:text-gray-600 shadow-lg bg-white rounded-3xl md:pr-8 md:pl-8 px-5 text-lg font-medium">
             Top Offer
            </Link>
            <Link href="/categories" className="text-black hover:text-gray-600 shadow-lg bg-white rounded-3xl md:pr-8 md:pl-8 px-5 text-lg font-medium">
             Shippes From Nigeria
            </Link>
            <Link href="/categories" className="text-black hover:text-gray-600 shadow-lg bg-white rounded-3xl md:pr-8 md:pl-8 px-5 text-lg font-medium">
              Brand
           </Link>
            <Link href="/categories" className="text-black hover:text-gray-600 shadow-lg bg-white rounded-3xl md:pr-8 md:pl-8  px-5 text-lg font-medium">
             Laptop
            </Link>
            <Link href="/categories" className="text-black hover:text-gray-600 shadow-lg bg-white rounded-3xl md:pr-8 md:pl-8 px-5 text-lg font-medium">
             Headphones
            </Link>
            <BsFilter className="text-4xl shadow-lg border-0 h-fit w-fit"/>
          </div>

                <div className="card flex flex-wrap gap-10 items-center justify-center ">
                     {products.map((product) => (
                              <ProductCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                image={product.image}
                                price={product.price}
                              />
                            ))}
                </div>
            </div>
    )
}