"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, translations } = useLanguage();

  const navLinks = [
    { href: "/about", text: translations.nav_about[language] },
    { href: "/products", text: translations.nav_products[language] },
    { href: "/contact", text: translations.nav_contact[language] },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#181918]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/APLOGO.png"
            alt="Aqua Prime"
            width={120}
            height={50}
            priority
          />
        </Link>

        {/* Desktop navigacija */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex items-center space-x-8 text-white font-medium">
            {navLinks.map((link, idx) => (
              <li
                key={idx}
                className="hover:text-cyan-400 transition-colors duration-200"
              >
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
          {/* Flags */}
          <div className="flex space-x-2">
            <button
              onClick={() => setLanguage("sr")}
              className={`p-1 rounded-full border transition ${
                language === "sr"
                  ? "bg-cyan-500 border-cyan-600"
                  : "bg-white border-gray-300"
              }`}
            >
              🇷🇸
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`p-1 rounded-full border transition ${
                language === "en"
                  ? "bg-cyan-500 border-cyan-600"
                  : "bg-white border-gray-300"
              }`}
            >
              🇬🇧
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center space-x-3">
          {/* Flags */}
          <button
            onClick={() => setLanguage("sr")}
            className={`p-1 rounded-full border ${
              language === "sr"
                ? "bg-cyan-500 border-cyan-600"
                : "bg-white border-gray-300"
            }`}
          >
            🇷🇸
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`p-1 rounded-full border ${
              language === "en"
                ? "bg-cyan-500 border-cyan-600"
                : "bg-white border-gray-300"
            }`}
          >
            🇬🇧
          </button>
          {/* Menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-md text-white px-4 py-4 space-y-3 border-t border-gray-700">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 hover:text-cyan-400 transition-colors duration-200"
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
