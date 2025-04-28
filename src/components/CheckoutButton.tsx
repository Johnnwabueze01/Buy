export default function CheckoutButton({ cartItems }: { cartItems: any[] }) {
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cartItems }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url; // Redirect to Stripe Checkout
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
    >
      Checkout
    </button>
  );
}


/*export default function CheckoutButton({ cartItems }: { cartItems: any[] }) {
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cartItems }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url; // Redirect to Stripe Checkout
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
    >
      Checkout
    </button>
  );
}
*/
/*
ChecoutButton.tsx

export default function CheckoutButton({ cartItems }: { cartItems: any[] }) {
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cartItems }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url; // Redirect to Stripe Checkout
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
    >
      Checkout
    </button>
  );
}

hero.tsx

import Image from "next/image"; // Use Next.js Image for optimization
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

const slides = [
  { text: "Big Discounts on Electronics!", img: "/carousel 1.svg" },
  { text: "Shop the Latest Fashion!", img: "/carousel 2.svg" },
  { text: "Best Deals on Mobile Phones!", img: "/carousel 3.svg" },
];

export default function Hero() {
  return (
    <div className="relative w-full h-[400px]">
      <div className="flex space-x-6 md:justify-end justify-center items-center text-center lg:-mt-14 -mt-0 pb-10">
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

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <Image
              src={slide.img}
              alt={slide.text}
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 m-10 w-2 bg-opacity-40 flex items-baseline justify-start">
              <h2 className="text-3xl md:text-4xl font-bold">
                {slide.text}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden md:block">
        <div className="swiper-button-next text-white absolute top-1/2 right-5 transform -translate-y-1/2 z-10 cursor-pointer"></div>
        <div className="swiper-button-prev text-white absolute top-1/2 left-5 transform -translate-y-1/2 z-10 cursor-pointer"></div>
      </div>
    </div>
  );
}

Navbar.tsx


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

        <div className="flex flex-col sm:flex-row items-center sm:justify-between">

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

         
          
        </div>
      </div>
    </nav>
  );
}

authcontext.tsx

import { createContext, useContext, ReactNode } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const AuthContext = createContext({
  user: null as any,
  signIn: () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();

  return (
    <AuthContext.Provider value={{ user: session?.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

checkout.ts 

import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2023-10-16",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { items } = req.body;

    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: process.env.NEXT_PUBLIC_STRIPE_SUCCESS_URL || "",
      cancel_url: process.env.NEXT_PUBLIC_STRIPE_CANCEL_URL || "",
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}

[category].tsx

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