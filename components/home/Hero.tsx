import Link from "next/link";
import { business } from "@/config/business";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F3F6FA]">
      <div className="container grid min-h-[600px] items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">

        {/* Hero content */}
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#FF8A26]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#10233F]">
              Smarter Energy Solutions
            </span>
          </div>

          <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.12] tracking-tight text-[#10233F] md:text-6xl xl:text-7xl">
            Power Your Life.
            <span className="block text-[#FF8A26]">
              The Smarter Way.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-gray-600 md:text-lg">
            Discover reliable solar panels, powerful inverters and
            dependable battery solutions for your home and business.
            Take control of your energy needs with {business.name}.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/products" className="primary-button">
              Explore Products
              <span aria-hidden="true">→</span>
            </Link>

            <Link href="/contact" className="secondary-button">
              Get a Quote
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-gray-200 pt-7">
            <div>
              <p className="text-2xl font-extrabold text-[#10233F]">
                Quality
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Energy products
              </p>
            </div>

            <div>
              <p className="text-2xl font-extrabold text-[#10233F]">
                Reliable
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Energy solutions
              </p>
            </div>

            <div>
              <p className="text-2xl font-extrabold text-[#10233F]">
                Expert
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Product guidance
              </p>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#FF8A26]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl bg-[#10233F] shadow-2xl">
            <img
              src="/images/images.jpeg"
              alt="Modern solar panel installation"
              className="h-[420px] w-full object-cover md:h-[520px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#10233F]/70 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/95 p-5 shadow-lg backdrop-blur">
              <p className="text-sm font-bold text-[#10233F]">
                Explore smarter energy solutions
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Solar panels, inverters and battery systems for
                different energy needs.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}