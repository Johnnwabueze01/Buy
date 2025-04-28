import Link from "next/link";
import { AiOutlineHome, AiOutlineAppstore, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

export default function BottomNav() {
  return (
    <nav className="sticky bottom-0 left-0 w-full bg-white shadow-lg border-t flex justify-around py-3">
      <Link href="/" className="flex flex-col items-center text-gray-600 hover:text-[#FF9FDA]">
        <AiOutlineHome size={24} />
        <span className="text-xs">Home</span>
      </Link>
      <Link href="/categories" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
        <AiOutlineAppstore size={24} />
        <span className="text-xs">Categories</span>
      </Link>
      <Link href="/cart" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
        <AiOutlineShoppingCart size={24} />
        <span className="text-xs">Cart</span>
      </Link>
      <Link href="/account" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
        <AiOutlineUser size={24} />
        <span className="text-xs">Account</span>
      </Link>
    </nav>
  );
}
