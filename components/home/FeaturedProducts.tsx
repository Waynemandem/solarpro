import Link from "next/link";
import Image from "next/image";

const featuredProducts = [
  {
    name: "550W Solar Panel",
    category: "Solar Panels",
    slug: "550w-mono-solar-panel",
    image: "/images/images.jpeg",
  },
  {
    name: "5kVA Hybrid Inverter",
    category: "Inverters",
    slug: "5kva-hybrid-inverter",
    image: "/images/images2.jpeg",
  },
  {
    name: "5kWh Lithium Battery",
    category: "Batteries",
    slug: "5kwh-lithium-battery",
    image: "/images/images3.jpeg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="section-padding bg-[#F3F6FA]">
      <div className="container">

        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#FF8A26]">
              Our selection
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#10233F] md:text-4xl">
              Featured Products
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              Explore some of our popular solar products.
            </p>
          </div>

          <Link
            href="/products"
            className="text-sm font-bold text-[#10233F] hover:text-[#FF8A26]"
          >
            Browse catalogue →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <article
              key={product.slug}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={`/products/${product.slug}`}>
                <div className="flex h-64 items-center justify-center overflow-hidden bg-gray-50 p-5">
                  <Image
  src={product.image}
  alt={product.name}
  width={500}
  height={500}
  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
/>
                </div>
              </Link>

              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FF8A26]">
                  {product.category}
                </span>

                <h3 className="mt-2 text-lg font-bold text-[#10233F]">
                  {product.name}
                </h3>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">
                    Request a quote
                  </span>

                  <Link
                    href={`/products/${product.slug}`}
                    className="rounded-lg bg-[#10233F] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#FF8A26] hover:text-[#10233F]"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}