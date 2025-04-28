import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="container mx-auto mt-8 text-center">
      <h2 className="text-3xl font-bold text-green-600">Payment Successful! 🎉</h2>
      <p className="mt-4 text-gray-600">Thank you for your purchase. Your order has been processed.</p>

      <Link href="/" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Back to Home
      </Link>
    </div>
  );
}
