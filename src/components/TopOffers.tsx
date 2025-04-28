import ProductCard from "./ProductCard";

const products = [
  { id: 1, title: "Product 1", image: "/carousel 1.svg", price: "$199.99" },
  { id: 2, title: "Product 2", image: "/carousel 3.svg", price: "$299.99" },
  { id: 3, title: "Product 3", image: "/carousel 2.svg", price: "$399.99" },
];

export default function TopOffers() {
  return (
    <section className="container mx-auto  py-20 px-4">
      <h2 className="text-xl rounded font-bold text-white mb-6 w-30 p-1 text-center bg-[#FF9FDA]">Top Offers</h2>
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
