"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Droplets, ShieldCheck, Leaf, CupSoda } from "lucide-react";
import { LanguageTransition } from "@/components/LanguageTransition";
import { useLanguage } from "@/components/LanguageContext";

export default function HomePage() {
  const { language } = useLanguage();

  const translations = {
    sr: {
      heroTitle: "Čista voda. Čist život.",
      heroText:
        "Inovativni sistemi za prečišćavanje vode za vaš dom, biznis i industriju.",
      heroButton: "Pogledaj proizvode",
      features: [
        {
          icon: <Droplets size={40} className="text-cyan-500" />,
          title: "Napredna filtracija",
          text: "Uklanja nečistoće, bakterije i viruse iz vaše vode.",
        },
        {
          icon: <ShieldCheck size={40} className="text-cyan-500" />,
          title: "Bezbednost",
          text: "Provereni sistemi sa sertifikatima kvaliteta.",
        },
        {
          icon: <Leaf size={40} className="text-cyan-500" />,
          title: "Ekološki dizajn",
          text: "Smanjuje upotrebu plastike i štiti okolinu.",
        },
        {
          icon: <CupSoda size={40} className="text-cyan-500" />,
          title: "Savršen ukus",
          text: "Uživajte u svežoj i ukusnoj vodi svaki dan.",
        },
      ],
      aboutTitle: "O Nama — Više od filtera",
      aboutText:
        "Naša misija je jednostavna: pružiti vam najčistiju vodu koristeći najnaprednije tehnologije filtracije. Verujemo da je zdravlje temelj kvalitetnog života, a voda je njegov izvor. Sa timom stručnjaka i više od 10 godina iskustva, garantujemo rešenja koja odgovaraju vašim potrebama, bilo da je reč o kućnoj upotrebi, biznisu ili industriji.",
      aboutButton: "Saznaj više o nama",
      ctaTitle: "Spremni za čistu i zdravu vodu?",
      ctaText: "Kontaktirajte nas danas i saznajte koje rešenje je najbolje za vas.",
      ctaButton: "Kontaktiraj nas",
    },
    en: {
      heroTitle: "Pure Water. Pure Life.",
      heroText:
        "Innovative water purification systems for your home, business, and industry.",
      heroButton: "View Products",
      features: [
        {
          icon: <Droplets size={40} className="text-cyan-500" />,
          title: "Advanced Filtration",
          text: "Removes impurities, bacteria, and viruses from your water.",
        },
        {
          icon: <ShieldCheck size={40} className="text-cyan-500" />,
          title: "Safety",
          text: "Certified systems with proven quality standards.",
        },
        {
          icon: <Leaf size={40} className="text-cyan-500" />,
          title: "Eco-friendly Design",
          text: "Reduces plastic usage and protects the environment.",
        },
        {
          icon: <CupSoda size={40} className="text-cyan-500" />,
          title: "Perfect Taste",
          text: "Enjoy fresh and delicious water every day.",
        },
      ],
      aboutTitle: "About Us — More Than Filters",
      aboutText:
        "Our mission is simple: to provide you with the purest water using the most advanced filtration technologies. We believe health is the foundation of a quality life, and water is its source. With a team of experts and over 10 years of experience, we guarantee solutions tailored to your needs, whether for home use, business, or industry.",
      aboutButton: "Learn More About Us",
      ctaTitle: "Ready for clean and healthy water?",
      ctaText: "Contact us today to find the best solution for you.",
      ctaButton: "Contact Us",
    },
  };

  const t = translations[language];

  return (
    <LanguageTransition>
      <main className="flex flex-col min-h-screen">
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center text-center text-white">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/HomePageFIlterVIdeo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 px-4 max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.heroTitle}</h1>
            <p className="text-lg md:text-xl mb-8">{t.heroText}</p>
            <Link
              href="/products"
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg transition"
            >
              {t.heroButton}
            </Link>
          </motion.div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
            {t.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#181918" }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ABOUT PREVIEW SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#181918" }}>
                {t.aboutTitle}
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{t.aboutText}</p>
              <Link
                href="/about"
                className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg transition"
              >
                {t.aboutButton}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/HomePageFIlterVIdeo.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-16 bg-cyan-500 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.ctaTitle}</h2>
          <p className="mb-8 text-lg">{t.ctaText}</p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-white text-cyan-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            {t.ctaButton}
          </Link>
        </section>
      </main>
    </LanguageTransition>
  );
}
