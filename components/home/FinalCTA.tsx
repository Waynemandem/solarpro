import Link from "next/link";
import { business } from "@/config/business";

export default function FinalCTA() {
  const whatsappLink = `https://wa.me/${business.contact.whatsapp}?text=${encodeURIComponent(
    `Hello ${business.name}, I would like to enquire about your solar products.`
  )}`;

  return (
    <section className="bg-white py-16">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-[#10233F] px-6 py-16 text-center md:px-16">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FF8A26]/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#FF8A26]">
              Let us power your future
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white md:text-5xl">
              Ready to Explore Smarter Energy Solutions?
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-300 md:text-base">
              Talk to our team about the right solar products
              for your home or business.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#FF8A26] px-7 py-4 font-bold text-[#10233F] transition hover:bg-orange-300"
              >
                Chat With Us on WhatsApp
              </a>

              <Link
                href="/products"
                className="rounded-lg border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Browse Products
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}