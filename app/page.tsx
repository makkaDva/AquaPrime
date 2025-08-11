import Navbar from "../components/Navbar";
import { Droplets, ShieldCheck, Leaf, CupSoda } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#5171fb] text-[#F8F4EC] py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Aqua Prime</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Čista voda nije privilegija – Aqua Prime filteri čuvaju zdravlje vaših najmilijih.
        </p>
      </section>

      {/* Main Content */}
      <section className="bg-[#F8F4EC] flex-1 p-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-[#5171fb] font-bold">Dobrodošli u Aqua Prime</h2>
          <p className="mt-4 text-gray-700">
            Sa Aqua Prime filterima, vaša porodica pije samo najčišću vodu. Naši filteri su jednostavni za upotrebu i prilagođeni potrebama domaćinstava širom Srbije.
          </p>
        </div>
      </section>

      {/* Zašto su filteri bitni */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-[#5171fb] mb-6">
            Zašto su filteri za vodu bitni?
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
            Kvalitetna voda je osnova zdravog života. Aqua Prime filteri uklanjaju nečistoće, hlor i teške metale, osiguravajući da svaki gutljaj bude čist, svež i bezbedan.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  <div className="bg-[#F8F4EC] p-6 rounded-xl shadow-md hover:shadow-lg transition">
    <Droplets className="mx-auto text-[#5171fb] w-10 h-10 mb-4" />
    <h3 className="text-lg font-semibold mb-2 text-[#5171fb]">Čista voda</h3>
    <p className="text-gray-600">Uklanja pesticide, hemikalije i teške metale.</p>
  </div>
  <div className="bg-[#F8F4EC] p-6 rounded-xl shadow-md hover:shadow-lg transition">
    <CupSoda className="mx-auto text-[#5171fb] w-10 h-10 mb-4" />
    <h3 className="text-lg font-semibold mb-2 text-[#5171fb]">Bolji ukus</h3>
    <p className="text-gray-600">Voda bez mirisa i neprijatnog ukusa.</p>
  </div>
  <div className="bg-[#F8F4EC] p-6 rounded-xl shadow-md hover:shadow-lg transition">
    <ShieldCheck className="mx-auto text-[#5171fb] w-10 h-10 mb-4" />
    <h3 className="text-lg font-semibold mb-2 text-[#5171fb]">Zaštita uređaja</h3>
    <p className="text-gray-600">Sprečava stvaranje kamenca u cevima i aparatima.</p>
  </div>
  <div className="bg-[#F8F4EC] p-6 rounded-xl shadow-md hover:shadow-lg transition">
    <Leaf className="mx-auto text-[#5171fb] w-10 h-10 mb-4" />
    <h3 className="text-lg font-semibold mb-2 text-[#5171fb]">Ekološki pristup</h3>
    <p className="text-gray-600">Manje plastičnih flaša, više čiste prirode.</p>
  </div>
</div>


          <p className="mt-10 text-gray-700 max-w-2xl mx-auto">
            Naši filteri su namenjeni kućnoj upotrebi i zadovoljavaju potrebe domaćinstava u Srbiji, prateći nacionalne standarde za pitku vodu.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#5171fb] text-[#F8F4EC] py-10 text-center">
        <h3 className="text-3xl font-bold mb-4">Spremni za čistiju vodu?</h3>
        <p className="mb-6">
          Pređite na Aqua Prime filtere i omogućite svojoj porodici zdravu i sigurnu vodu.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/products" className="bg-white text-[#5171fb] px-6 py-3 font-semibold rounded shadow-md hover:shadow-lg transition">
            Pogledajte proizvode
          </a>
          <a href="/contact" className="border border-white text-white px-6 py-3 font-semibold rounded hover:bg-white hover:text-[#5171fb] transition">
            Kontaktirajte nas
          </a>
        </div>
      </section>

      {/* Video Section */}
      <section className="p-10 bg-[#F8F4EC]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-[#5171fb] font-bold mb-4">
            Vrednost čistog izvora
          </h2>
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <video
              src="/videos/HomePageFilterVideo.mp4"
              controls
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
