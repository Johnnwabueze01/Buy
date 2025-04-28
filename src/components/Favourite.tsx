import ProductCard from "./ProductCard";
import { IoStar } from "react-icons/io5";

const products = [
  { id: 4, title: "Product 4", image: "/carousel 2.svg", price: "$199.99" },
  { id: 5, title: "Product 5", image: "/carousel 4.svg", price: "$299.99" },
  { id: 6, title: "Product 6", image: "/carousel 3.svg", price: "$399.99" },
];

export default function Favourite() {
  return (
    <section className="container mx-auto py-10 px-4">
      <h2 className="text-xl rounded flex gap-3 justify-center items-center font-bold text-white mb-6 w-32 p-1 text-center bg-[#FF9FDA]">
        Favourite<IoStar />   </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
    </section>
  );
}
