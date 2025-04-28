import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <div className="container mx-auto">
        <p className="text-sm">© {new Date().getFullYear()} Buy Safe. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/categories" className="hover:underline">
            Categories
          </Link>
          <Link href="/cart" className="hover:underline">
            Cart
          </Link>
          <Link href="/account" className="hover:underline">
            Account
          </Link>
        </div>
      </div>
    </footer>
  );
}
