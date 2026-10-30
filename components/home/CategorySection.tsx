import Link from "next/link";

const categories = [
  {
    name: "Solar Panels",
    description: "High-performance solar panels.",
    slug: "solar-panels",
    icon: "☀️",
  },
  {
    name: "Inverters",
    description: "Reliable power conversion systems.",
    slug: "inverters",
    icon: "⚡",
  },
  {
    name: "Batteries",
    description: "Dependable energy storage.",
    slug: "batteries",
    icon: "🔋",
  },
  {
    name: "Complete Systems",
    description: "Integrated solar solutions.",
    slug: "complete-systems",
    icon: "🏠",
  },
  {
    name: "Accessories",
    description: "Essential solar components.",
    slug: "accessories",
    icon: "🔌",
  },
];

export default function CategorySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">

        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#FF8A26]">
              Browse our collection
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#10233F] md:text-4xl">
              Shop by Category
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-7 text-gray-500">
              Find the right products for your energy needs.
              Explore our range of solar solutions.
            </p>
          </div>

          <Link
            href="/products"
            className="text-sm font-bold text-[#10233F] transition hover:text-[#FF8A26]"
          >
            View all products →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group rounded-2xl border border-gray-100 bg-[#F8FAFC] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-3xl shadow-sm transition group-hover:scale-110">
                {category.icon}
              </div>

              <h3 className="mt-6 font-bold text-[#10233F]">
                {category.name}
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                {category.description}
              </p>

              <span className="mt-5 inline-block text-sm font-bold text-[#FF8A26]">
                Explore →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}