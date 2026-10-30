import Link from "next/link";
import { business } from "@/config/business";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const whatsappLink = `https://wa.me/${business.contact.whatsapp}`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="container flex h-[76px] items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#10233F] text-xl font-bold text-[#FF8A26]">
            S
          </div>

          <div>
            <span className="block text-lg font-extrabold tracking-tight text-[#10233F]">
              {business.logoText}
            </span>
            <span className="block text-[9px] tracking-[2px] text-gray-500">
              POWERING YOUR FUTURE
            </span>
          </div>
        </Link>

        {/* Navigation links */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition hover:text-[#FF8A26]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-[#10233F] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#19375d]"
        >
          <span className="hidden sm:inline">Get a Quote</span>
          <span className="sm:hidden">Enquire</span>
        </a>
      </nav>
    </header>
  );
}