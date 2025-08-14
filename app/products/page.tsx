"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { LanguageTransition } from "@/components/LanguageTransition";
import { useLanguage } from "@/components/LanguageContext";

export default function ProductsPage() {
  const { language } = useLanguage();

  // Svi tekstovi prevedeni po jezicima
  const translations = {
    sr: {
      heroTitle: "Naši proizvodi",
      heroText: "Otkrijte liniju savremenih aparata za filtriranje i prečišćavanje vode Aqua Prime.",
      ctaButton: "Kontaktirajte nas",
      nero: {
        name: "NERO Water Filter",
        tagline: "Najnovija generacija prečišćivača vode",
        description:
          "NERO kombinuje naprednu Reverse Osmosis (RO) tehnologiju i inovativne CBPA filtere, uklanjajući do 99% soli, teških metala, bakterija, virusa, pesticida i drugih zagađivača. Idealno za domaćinstva i manje poslovne objekte.",
        features: [
          "RO tehnologija – maksimalna čistoća vode",
          "CBPA filteri – uklanjaju hlor, mirise i hemikalije",
          "Kapacitet filtracije: 400 GPD (do 1500L/dan)",
          "Višestepeni sistem zaštite i smanjena količina otpadne vode",
          "Kompaktan i moderan dizajn – lako se uklapa u svaki prostor",
          "Jednostavno održavanje i zamena filtera",
        ],
      },
      fonsStand: {
        name: "Aqua Fons Samostojeći",
        tagline: "Filtriranje, grejanje i hlađenje vode",
        description:
          "Savremeni aparat za kuhinje i kancelarije. Greje vodu do 90°C i hladi do 4°C. Predfilteri, RO filter i postfilter sa mineralizatorom čine vodu kristalno čistom i zdravom.",
        features: [
          "Predfilteri uklanjaju čestice, rđu i pesak",
          "RO filter eliminiše viruse, bakterije i teške metale",
          "Postfilter sa mineralizatorom obogaćuje vodu mineralima",
          "Kompaktan dizajn – dimenzije: 111 x 30 x 36 cm",
          "Montaža od ovlašćenih servisera",
        ],
      },
      fonsUp: {
        name: "Aqua Fons Nadgradni",
        tagline: "Idealno za postavljanje na kuhinjske elemente",
        description:
          "Praktičan aparat za kuhinje i kancelarije. Greje do 98°C i hladi do 4°C. Predfilteri, RO filter i postfilter sa mineralizatorom osiguravaju kristalno čistu vodu.",
        features: [
          "Predfilteri uklanjaju čestice, rđu i pesak",
          "RO filter eliminiše viruse, bakterije i teške metale",
          "Postfilter sa mineralizatorom obogaćuje vodu mineralima",
          "Kompaktan dizajn – dimenzije: 52 x 30 x 36 cm",
          "Jednostavna montaža uz servisere",
        ],
      },
      featuresTitle: "Ključne karakteristike:",
    },
    en: {
      heroTitle: "Our Products",
      heroText: "Discover our line of advanced water purification and filtration devices from Aqua Prime.",
      ctaButton: "Contact Us",
      nero: {
        name: "NERO Water Filter",
        tagline: "The latest generation water purifier",
        description:
          "NERO combines advanced Reverse Osmosis (RO) technology and innovative CBPA filters, removing up to 99% of salts, heavy metals, bacteria, viruses, pesticides, and other contaminants. Perfect for households and small businesses.",
        features: [
          "RO technology – maximum water purity",
          "CBPA filters – remove chlorine, odors, and chemicals",
          "Filtration capacity: 400 GPD (up to 1500L/day)",
          "Multistage protection system and reduced wastewater",
          "Compact and modern design – fits any space",
          "Easy maintenance and filter replacement",
        ],
      },
      fonsStand: {
        name: "Aqua Fons Freestanding",
        tagline: "Filtration, heating and cooling water",
        description:
          "Modern appliance for kitchens and offices. Heats water up to 90°C and cools down to 4°C. Prefilters, RO filter, and postfilter with mineralizer ensure crystal clear and healthy water.",
        features: [
          "Prefilters remove particles, rust, and sand",
          "RO filter eliminates viruses, bacteria, and heavy metals",
          "Postfilter with mineralizer enriches water with minerals",
          "Compact design – dimensions: 111 x 30 x 36 cm",
          "Installation by authorized service technicians",
        ],
      },
      fonsUp: {
        name: "Aqua Fons Countertop",
        tagline: "Perfect for countertop installation",
        description:
          "Practical appliance for kitchens and offices. Heats up to 98°C and cools down to 4°C. Prefilters, RO filter, and postfilter with mineralizer ensure crystal clear water.",
        features: [
          "Prefilters remove particles, rust, and sand",
          "RO filter eliminates viruses, bacteria, and heavy metals",
          "Postfilter with mineralizer enriches water with minerals",
          "Compact design – dimensions: 52 x 30 x 36 cm",
          "Easy installation with service technicians",
        ],
      },
      featuresTitle: "Key Features:",
    },
  };

  const t = translations[language];

  // proizvodi sada koriste prevodljive stringove
  const products = [
    { ...t.nero, images: ["/NeroImage1.jpeg", "/NeroImage2.jpeg"], videos: ["/videos/NeroVideo1.mp4", "/videos/NeroVideo2.mp4"], isHero: true },
    { ...t.fonsStand, images: ["/AquaFonsStand.jpeg"], videos: [], isHero: false },
    { ...t.fonsUp, images: ["/AquaFonsUp.jpeg"], videos: [], isHero: false },
  ];

  return (
    <LanguageTransition>
      <main className="flex flex-col min-h-screen">
        <Navbar />

        {/* HERO SECTION */}
        <section className="py-20 px-6 text-center text-white bg-cyan-600 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.heroTitle}</h1>
            <p className="text-lg md:text-xl">{t.heroText}</p>
          </motion.div>
        </section>

        {/* PRODUCTS SECTION */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 space-y-32">
            {products.map((product, index) => {
              const isHero = product.isHero ?? false; // ✅ Type-safe
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {isHero ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          {product.images.map((img, idx) => (
                            <Image
                              key={idx}
                              src={img}
                              alt={`${product.name} image ${idx + 1}`}
                              width={300}
                              height={300}
                              className="rounded-xl shadow-md hover:scale-105 transition-transform"
                            />
                          ))}
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {product.videos.map((vid, idx) => (
                            <video
                              key={idx}
                              src={vid}
                              controls
                              autoPlay
                              muted
                              loop
                              className="rounded-xl shadow-md w-full"
                            />
                          ))}
                        </div>
                      </div>

                      <div className="text-left flex flex-col justify-center">
                        <h2 className="text-4xl font-bold text-[#181918] mb-4">{product.name}</h2>
                        <p className="text-lg text-gray-700 italic mb-6">{product.tagline}</p>
                        <p className="text-gray-800 mb-6">{product.description}</p>
                        <h3 className="font-semibold text-gray-900 mb-2">{t.featuresTitle}</h3>
                        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
                          {product.features.map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                        <Link href="/contact">
                          <button className="px-8 py-3 bg-cyan-500 text-white font-semibold rounded-full shadow-lg hover:bg-cyan-600 transition">
                            {t.ctaButton}
                          </button>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`flex flex-col md:flex-row items-center gap-10 ${
                        index % 2 === 1 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="flex-1 space-y-4">
                        {product.images.map((img, idx) => (
                          <Image
                            key={idx}
                            src={img}
                            alt={`${product.name} image ${idx + 1}`}
                            width={600}
                            height={400}
                            className="rounded-xl shadow-md hover:scale-105 transition-transform"
                          />
                        ))}
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <h2 className="text-4xl font-bold text-[#181918] mb-4">{product.name}</h2>
                        <p className="text-lg text-gray-700 italic mb-6">{product.tagline}</p>
                        <p className="text-gray-800 mb-6">{product.description}</p>
                        <h3 className="font-semibold text-gray-900 mb-2">{t.featuresTitle}</h3>
                        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
                          {product.features.map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                        <Link href="/contact">
                          <button className="px-8 py-3 bg-cyan-500 text-white font-semibold rounded-full shadow-lg hover:bg-cyan-600 transition">
                            {t.ctaButton}
                          </button>
                        </Link>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
    </LanguageTransition>
  );
}
