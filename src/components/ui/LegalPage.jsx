import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function LegalPage({ eyebrow, title, accent, updated, children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f4faff] pt-4">
      <div className="sticky top-0 z-50 pt-4">
        <Navbar />
      </div>

      <section className="relative px-4 pb-16 pt-10 sm:pt-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-160px] top-[-40px] h-[380px] w-[380px] rounded-full bg-[#dff2ff] blur-[100px]" />
          <div className="absolute right-[-140px] top-[80px] h-[320px] w-[320px] rounded-full bg-[#ffe8ef] blur-[110px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[860px]">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-[#168be8]">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-[#092957] sm:text-5xl">
            {title} <span className="text-[#ed174c]">{accent}</span>
          </h1>
          {updated ? (
            <p className="mt-3 text-sm text-[#71839e]">Last updated: {updated}</p>
          ) : null}

          <div className="mt-10 space-y-8 rounded-[24px] border border-[#e5eef7] bg-white/80 p-6 text-[#52708c] shadow-sm sm:p-10">
            {children}
          </div>

          <Link
            href="/"
            className="mt-8 inline-flex text-sm font-semibold text-[#168be8] hover:text-[#ed174c]"
          >
            ← Back to home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
