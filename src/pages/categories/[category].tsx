import { useRouter } from "next/router";
import { categories } from "../../data/categories";
import ProductCard from "../../components/ProductCard";
import Link from "next/link";

const allProducts = [
  { id: 1, title: "Product 1", image: "/carousel 1.svg", price: "$199.99" },
  { id: 2, title: "Product 2", image: "/carousel 3.svg", price: "$299.99" },
  { id: 3, title: "Product 3", image: "/carousel 2.svg", price: "$399.99" },
  { id: 4, title: "Product 4", image: "/carousel 2.svg", price: "$499.99" },
  { id: 5, title: "Product 5", image: "/carousel 4.svg", price: "$599.99" },
  { id: 6, title: "Product 6", image: "/carousel 1.svg", price: "$699.99" },
  { id: 7, title: "Product 7", image: "/carousel 1.svg", price: "$799.99" },
  { id: 8, title: "Product 8", image: "/carousel 4.svg", price: "$899.99" },
];

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  const categoryData = categories.find(
    (cat) => cat.name.toLowerCase() === category
  );

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  const categoryProducts = allProducts.filter((product) =>
    categoryData.products.includes(String(product.id))
  );

  return (
    <div>
      <div className="flex space-x-6 md:justify-end justify-center items-center text-center md:-mt-14 pb-10">
        <Link href="/" className="text-black hover:text-gray-600 text-lg font-medium">
          All
        </Link>
        <Link href="/categories/men%27s" className="text-black hover:text-gray-600 text-lg font-medium">
          Men's
        </Link>
        <Link href="/categories/women%27s" className="text-black hover:text-gray-600 text-lg font-medium">
          Women's
        </Link>
        <Link href="/categories/electronics" className="text-black hover:text-gray-600 text-lg font-medium">
          Electronics
        </Link>
        <Link href="/categories/mobile" className="text-black hover:text-gray-600 text-lg font-medium">
          Mobile
        </Link>
      </div>
      <div className="container mx-auto flex mt-8 gap-20">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-gray-800">{categoryData.name}</h2>
          <div className="flex flex-wrap h-fit gap-20">
            {categoryProducts.map((product) => (
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
      </div>
    </div>
  );
}



/*import { useRouter } from "next/router";
import { categories } from "../../data/categories";
import ProductCard from "../../components/ProductCard";
import Link from "next/link";

const allProducts = [
  { id: 1, title: "Product 1", image: "/carousel 1.svg", price: "$199.99" },
  { id: 2, title: "Product 2", image: "/carousel 3.svg", price: "$299.99" },
  { id: 3, title: "Product 3", image: "/carousel 2.svg", price: "$399.99" },
  { id: 4, title: "Product 4", image: "/carousel 2.svg", price: "$499.99" },
  { id: 5, title: "Product 5", image: "/carousel 4.svg", price: "$599.99" },
  { id: 6, title: "Product 6", image: "/carousel 1.svg", price: "$699.99" },
  { id: 7, title: "Product 7", image: "/carousel 1.svg", price: "$799.99" },
  { id: 8, title: "Product 8", image: "/carousel 4.svg", price: "$899.99" },
];

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  const categoryData = categories.find(
    (cat) => cat.name.toLowerCase() === category
  );

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  const categoryProducts = allProducts.filter((product) =>
    categoryData.products.includes(String(product.id))
  );

  return (
    <div>
    <div className=" flex space-x-6 md:justify-end justify-center items-center text-center md:-mt-14 pb-10">
                <Link href="/" className="text-black hover:text-gray-600 text-lg font-medium">
                  All
                </Link>
                <Link href="/categories/men's" className="text-black hover:text-gray-600 text-lg font-medium">
                  Men's
                </Link>
                <Link href="/categories/women's" className="text-black hover:text-gray-600 text-lg font-medium">
                  Women's
                </Link>
                <Link href="/categories/electronics" className="text-black hover:text-gray-600 text-lg font-medium">
                  Electronics
                </Link>
                <Link href="/categories/mobile" className="text-black hover:text-gray-600 text-lg font-medium">
                  Mobile
                </Link>
              </div>
    <div className="container mx-auto flex mt-8 gap-20">
      
          <div className="flex flex-col">
      <h2 className="text-2xl font-semibold text-gray-800">{categoryData.name}</h2>
      <div className="flex flex-wrap h-fit gap-20 ">
        {categoryProducts.map((product) => (
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
    </div>
    </div>
  );
}
*/