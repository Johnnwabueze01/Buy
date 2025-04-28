import Link from "next/link";

interface ProductCardProps {
  id: number;
  title: string;
  image: string;
  price: string;
}

export default function ProductCard({ id, title, image, price }: ProductCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md w-fit overflow-hidden">
      <Link href={`/product/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full  h-56 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link href={`/product/${id}`} className="text-lg font-semibold text-gray-800">
          {title}
        </Link>
        <p className="text-gray-600 mt-2">Coloured silicone iphone case for 11/...</p>
        <p className="text-gray-600 mt-2">{price}</p>
      </div>
      <div className="flex justify-center">
      <button className=" m-5 items-center w-40 rounded-xl cursor-pointer p-1 text-white text-center bg-[#D45AA5]">Add To Cart</button>
    </div>
    </div>
  );
}
