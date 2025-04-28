import { useRouter } from "next/router";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import { BiShareAlt } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { BiStar } from "react-icons/bi";

const productData = [
  { id: 1, title: "Product 1", description: "Coloured silicone iphone case for 11/ 11pro /12 / 12 pro/ 13/ 13pro/ 13 pro max/ 14/ 14 pro...", price: "$199.99", image: "/carousel 1.svg" },
  { id: 2, title: "Product 2", description: "Coloured silicone iphone case for 11/ 11pro /12 / 12 pro/ 13/ 13pro/ 13 pro max/ 14/ 14 pro...", price: "$299.99", image: "/carousel 3.svg" },
  { id: 3, title: "Product 3", description: "Coloured silicone iphone case for 11/ 11pro /12 / 12 pro/ 13/ 13pro/ 13 pro max/ 14/ 14 pro...", price: "$399.99", image: "/carousel 2.svg" },
  { id: 4, title: "Product 4", description: "Coloured silicone iphone case for 11/ 11pro /12 / 12 pro/ 13/ 13pro/ 13 pro max/ 14/ 14 pro...", price: "$399.99", image: "/carousel 2.svg" },
  { id: 5, title: "Product 5", description: "Coloured silicone iphone case for 11/ 11pro /12 / 12 pro/ 13/ 13pro/ 13 pro max/ 14/ 14 pro...", price: "$399.99", image: "/carousel 4.svg" },
  { id: 6, title: "Product 6", description: "Coloured silicone iphone case for 11/ 11pro /12 / 12 pro/ 13/ 13pro/ 13 pro max/ 14/ 14 pro...", price: "$399.99", image: "/carousel 3.svg" },
  { id: 7, title: "Product 7", description: "Coloured silicone iphone case for 11/ 11pro /12 / 12 pro/ 13/ 13pro/ 13 pro max/ 14/ 14 pro...", price: "$399.99", image: "/carousel 1.svg" },
  { id: 8, title: "Product 8", description: "Coloured silicone iphone case for 11/ 11pro /12 / 12 pro/ 13/ 13pro/ 13 pro max/ 14/ 14 pro...", price: "$399.99", image: "/carousel 3.svg" },


];

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  // Find the product based on the id
  const product = productData.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container bg-white p-5 mx-auto mt-8">
      <div className="flex justify-between p-1">
        <Link href="/">
      <MdArrowBackIosNew className="text-2xl bg-[#E0E4E0] rounded-xl w-10 h-9 p-2"/>
      </Link>
      <BiShareAlt className="text-2xl bg-[#E0E4E0] rounded-xl w-10 h-9 p-2"/>
      </div>
      <div className="flex flex-col ">
        <img src={product.image} alt={product.title} className="w-screen  h-[100%] object-cover" />
        <div className="md:ml-8 mt-4 md:mt-0">
          {/*<h2 className="text-3xl font-bold text-gray-800">{product.title}</h2>*/}
          <p className="text-xl text-gray-600 mt-4">{product.description}</p>
          <div className="flex gap-5">
            <img src="/des 1.svg" alt="des 1" />
            <img src="/des 2.svg" alt="des 2" />
            <img src="/des 3.svg" alt="des 3" />
          </div>
          <div className="flex justify-between gap-4 p-2">
            <p className="flex gap-3">
            <span className="bg-[#D45AA5] w-10 text-center rounded text-white">-</span>
            <span className="bg-[#D45AA5] w-10 text-center rounded text-white">1</span>
            <span className="bg-[#D45AA5] w-10 text-center rounded text-white">+</span>
            </p>
            <p>1,000+ sold</p>
          </div>
          <p className="font-semibold flex gap-6 text-gray-800 mt-4">{product.price}
            <span className="line-through text-sm justify-center flex">$2500</span>
            <p className="rounded h-5 text-sm text-center bg-[#FF9FDA] text-[#00000066]">-25%</p>
          </p>
          <div className="">
            <div className="flex justify-between">
              <h2>Reviews</h2>
              <div className="flex gap-5">
                <h2>4.3</h2>
                <BiStar className="text-2xl"/>
                <BiStar className="text-2xl"/>
                <BiStar className="text-2xl"/>
                <BiStar className="text-2xl"/>
                <BiStar className="text-2xl"/>
              </div>
            </div>
            <p className="flex justify-end">650 ratings</p>
          </div>
          <div className="border-[#FF9FDA] border-1 p-5">
            <div className="flex justify-between">
              <p>4.0/5.0 rating</p>
              <p>11/10/2023</p>
            </div>
            <p>Its very comfortable to use</p>
            <p className="text-[#00000080] font-Inter Inter">by james</p>
            <div className="flex justify-between">
              <p>3.8/5.0 rating</p>
              <p>20/10/2023</p>
            </div>
            <p>Its very comfortable to use and soft to the touch. Highly recommend it</p>
            <p className="text-[#00000080] Inter">by Sandra</p>
          </div>
          <div className="flex justify-center">
            
          <button className="flex m-4 gap-3 text-center justify-center w-[80%] items-center  py-2 bg-[#D45AA5] text-white cursor-pointer rounded hover:bg-[#d45aa5c7]">
          <BsCart /> Add to Cart
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
