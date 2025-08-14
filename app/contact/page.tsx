"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { LanguageTransition } from "@/components/LanguageTransition";
import { useLanguage } from "@/components/LanguageContext";

export default function ContactPage() {
  const { language } = useLanguage();

  const translations = {
    sr: {
      heroTitle: "Kontaktirajte nas",
      heroText: "Tu smo da odgovorimo na sva vaša pitanja o filterima za vodu Aqua Prime.",
      callTitle: "Pozovite nas",
      callText: "Za sve informacije i porudžbine",
      callPhone: "+381 67 7274114",
      emailTitle: "Pišite nam",
      emailText: "Odgovaramo u najkraćem roku",
      emailAddress: "nevenmail@gmail.com",
      instaTitle: "Instagram",
      instaText: "Pratite nas za novosti i ponude",
      instaHandle: "@nevensd123",
      mapTitle: "Naša lokacija",
      ctaTitle: "Spremni za zdraviju vodu?",
      ctaText: "Kontaktirajte nas i saznajte koji Aqua Prime filter je idealan za vaš dom.",
      ctaButton: "Pogledajte proizvode",
      formTitle: "Pošaljite nam poruku",
      formName: "Ime i prezime",
      formEmail: "Email adresa",
      formMessage: "Poruka",
      formButton: "Pošalji",
    },
    en: {
      heroTitle: "Contact Us",
      heroText: "We are here to answer all your questions about Aqua Prime water filters.",
      callTitle: "Call Us",
      callText: "For all information and orders",
      callPhone: "+381 67 7274114",
      emailTitle: "Write to Us",
      emailText: "We respond as soon as possible",
      emailAddress: "nevenmail@gmail.com",
      instaTitle: "Instagram",
      instaText: "Follow us for news and offers",
      instaHandle: "@nevensd123",
      mapTitle: "Our Location",
      ctaTitle: "Ready for Healthier Water?",
      ctaText: "Contact us to find out which Aqua Prime filter is ideal for your home.",
      ctaButton: "View Products",
      formTitle: "Send Us a Message",
      formName: "Full Name",
      formEmail: "Email Address",
      formMessage: "Message",
      formButton: "Send Mail",
    },
  };

  const t = translations[language];

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSuccess(false);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Greška pri slanju, pokušajte ponovo.");
    } finally {
      setSending(false);
    }
  };

  return (
    <LanguageTransition>
      <main className="flex flex-col min-h-screen">
        {/* Navbar */}
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

        {/* CONTACT CARDS SECTION */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <Image src="/phone.png" alt="Telefon" width={80} height={80} className="mb-4 object-contain" />
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#181918" }}>{t.callTitle}</h3>
              <p className="text-gray-600 mb-2">{t.callText}</p>
              <p className="text-cyan-600 font-semibold">{t.callPhone}</p>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <Image src="/email.png" alt="Email" width={80} height={80} className="mb-4 object-contain" />
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#181918" }}>{t.emailTitle}</h3>
              <p className="text-gray-600 mb-2">{t.emailText}</p>
              <p className="text-cyan-600 font-semibold">{t.emailAddress}</p>
            </motion.div>

            {/* Instagram */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <Image src="/instagram.png" alt="Instagram" width={80} height={80} className="mb-4 object-contain" />
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#181918" }}>{t.instaTitle}</h3>
              <p className="text-gray-600 mb-2">{t.instaText}</p>
              <p className="text-cyan-600 font-semibold">{t.instaHandle}</p>
            </motion.div>
          </div>
        </section>

        {/* MAP SECTION */}
        <section className="py-16 bg-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#181918" }}>{t.mapTitle}</h2>
          <Link href="https://maps.app.goo.gl/QATRgpGnR5n3wmcc9" target="_blank">
            <Image src="/mapa.png" alt="Lokacija" width={800} height={400} className="rounded-xl shadow-lg mx-auto hover:scale-105 transition-transform" />
          </Link>
        </section>

        {/* EMAIL FORM SECTION */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: "#181918" }}>
              {t.formTitle}
            </h2>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-6">
              <input
                type="text"
                name="name"
                placeholder={t.formName}
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-500 placeholder-opacity-80 focus:placeholder-transparent text-gray-900"
              />
              <input
                type="email"
                name="email"
                placeholder={t.formEmail}
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-500 placeholder-opacity-80 focus:placeholder-transparent text-gray-900"
              />
              <textarea
                name="message"
                placeholder={t.formMessage}
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-500 placeholder-opacity-80 focus:placeholder-transparent text-gray-900"
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full py-3 bg-cyan-500 text-white font-semibold rounded-full shadow-lg hover:bg-cyan-600 transition"
              >
                {sending ? "Sending..." : t.formButton}
              </button>
              {success && <p className="text-green-600 mt-2">Poruka je poslata uspešno!</p>}
            </form>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-16 bg-cyan-600 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.ctaTitle}</h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">{t.ctaText}</p>
          <Link href="/products">
            <button className="px-8 py-3 bg-white text-cyan-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition">
              {t.ctaButton}
            </button>
          </Link>
        </section>
      </main>
    </LanguageTransition>
  );
}
