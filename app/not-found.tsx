import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 text-center">
      <h1 className="text-2xl font-bold text-espresso mb-4">Page not found</h1>
      <p className="text-earth mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block bg-cabernet text-white px-5 py-2 rounded font-medium hover:bg-cabernet-dark"
      >
        Back to home
      </Link>
    </div>
  );
}
