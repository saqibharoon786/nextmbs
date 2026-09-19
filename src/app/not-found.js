import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f4faff] px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[3px] text-[#168be8]">
        404
      </p>
      <h1 className="mt-3 text-4xl font-extrabold text-[#092957]">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-[#71839e]">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-[#ed174c] px-6 py-3 text-sm font-semibold text-white hover:bg-[#d91243]"
      >
        Back to home
      </Link>
    </main>
  );
}
