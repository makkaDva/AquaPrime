"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-[#F8F4EC] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/AquaPrimeLogo1.png"
                alt="Aqua Prime Logo"
                width={50}
                height={50}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Links */}
          <div className="flex space-x-8">
            <Link
              href="/about"
              className="text-[#5171fb] font-semibold hover:underline"
            >
              O nama
            </Link>
            <Link
              href="/products"
              className="text-[#5171fb] font-semibold hover:underline"
            >
              Proizvodi
            </Link>
            <Link
              href="/contact"
              className="text-[#5171fb] font-semibold hover:underline"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
