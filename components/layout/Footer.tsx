"use client";

import Link from "next/link";
import { business } from "@/config/business";
import { useBranding } from "@/components/branding/BrandingProvider";

export default function Footer() {
  const { businessName } = useBranding();
  return (
    <footer className="bg-[#10233F] text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-extrabold text-white">
            {businessName}
            <span className="text-[#FF8A26]">.</span>
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-7 text-gray-300">
            {business.description}
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Quick Links</h3>

          <div className="flex flex-col gap-3 text-sm text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/products">Our Products</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Contact Us</h3>

          <div className="flex flex-col gap-3 text-sm text-gray-300">
            <p>{business.contact.phone}</p>
            <p>{business.contact.email}</p>
            <p>{business.contact.address}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col justify-between gap-3 py-5 text-xs text-gray-400 sm:flex-row">
          <p>
            © 2026 {business.name}. All rights reserved.
          </p>

          <p>Reliable Energy. A Brighter Future.</p>
        </div>
      </div>
    </footer>
  );
}