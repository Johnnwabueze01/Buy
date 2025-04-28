import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="container mx-auto mt-8 text-center">
      <h2 className="text-3xl font-bold text-red-600">Payment Canceled ❌</h2>
      <p className="mt-4 text-gray-600">It looks like you canceled the payment. No worries!</p>

      <Link href="/cart" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Go Back to Cart
      </Link>
    </div>
  );
}
