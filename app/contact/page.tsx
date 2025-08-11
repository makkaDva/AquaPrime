// app/contact/page.jsx
'use client';
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar"; // putanja ka tvojoj navbar komponenti

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero sekcija */}
      <section className="py-20 px-8 bg-[#5171fb] text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Kontaktirajte nas
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          Tu smo da odgovorimo na sva vaša pitanja o filterima za vodu Aqua Prime.
        </p>
      </section>

      {/* Kontakt kartice */}
      <section className="py-20 px-8 bg-[#F8F4EC] flex-1">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Telefon */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
            <Image 
              src="/phone.png" 
              alt="Telefon"
              width={80}
              height={80}
              className="mb-6 object-contain"
            />
            <h2 className="text-2xl font-bold mb-3 text-[#5171fb]">
              Pozovite nas
            </h2>
            <p className="text-gray-600 mb-4">
              Za sve informacije i porudžbine
            </p>
            <p className="text-xl font-semibold text-[#162a38]">
              +381 67 7274114
            </p>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
            <Image 
              src="/email.png" 
              alt="Email"
              width={80}
              height={80}
              className="mb-6 object-contain"
            />
            <h2 className="text-2xl font-bold mb-3 text-[#5171fb]">
              Pišite nam
            </h2>
            <p className="text-gray-600 mb-4">
              Odgovaramo u najkraćem roku
            </p>
            <p className="text-xl font-semibold text-[#162a38]">
              nevenmail@gmail.com
            </p>
          </div>

          {/* Instagram */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
            <Image 
              src="/instagram.png" 
              alt="Instagram"
              width={80}
              height={80}
              className="mb-6 object-contain"
            />
            <h2 className="text-2xl font-bold mb-3 text-[#5171fb]">
              Instagram
            </h2>
            <p className="text-gray-600 mb-4">
              Pratite nas za novosti i ponude
            </p>
            <p className="text-xl font-semibold text-[#162a38]">
              @nevensd123
            </p>
          </div>
        </div>
      </section>

      {/* CTA sekcija */}
      <section className="py-16 bg-[#5171fb] text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Spremni za zdraviju vodu?
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Kontaktirajte nas i saznajte koji Aqua Prime filter je idealan za vaš dom.
        </p>
        <Link href="/products">
          <button className="bg-white text-[#5171fb] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Pogledajte proizvode
          </button>
        </Link>
      </section>
    </div>
  );
}
