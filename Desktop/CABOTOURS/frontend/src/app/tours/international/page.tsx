"use client";

import Footer from "../../../components/footer";
import Header from "../../../components/header";

const mainImage = "/international/main.jpeg";

const destinations = [
  {
    name: "Azerbaijan",
    image: "/international/azerbaijan.jpg",
    description: "A blend of modern architecture, ancient history, and scenic landscapes.",
  },
  {
    name: "Bali",
    image: "/international/bali.jpg",
    description: "Island paradise with beaches, temples, rice terraces and vibrant culture.",
  },
  {
    name: "Bhutan",
    image: "/international/bhutan.jpg",
    description: "Land of happiness, monasteries, Himalayan views and peaceful culture.",
  },
  {
    name: "Kazakhstan",
    image: "/international/kazakhstan.jpg",
    description: "Vast landscapes, modern cities and rich Silk Road history.",
  },
  {
    name: "Malaysia",
    image: "/international/malaysia.jpg",
    description: "A mix of modern cities, rainforests, beaches and cultural diversity.",
  },
  {
    name: "Maldives",
    image: "/international/maldives.jpg",
    description: "Luxury overwater villas, crystal-clear waters and romantic escapes.",
  },
  {
    name: "Nepal",
    image: "/international/nepal.jpg",
    description: "Himalayan adventures, trekking, temples and spiritual experiences.",
  },
  {
    name: "Philippines",
    image: "/international/philippines.jpg",
    description: "Tropical islands, white sand beaches and vibrant marine life.",
  },
  {
    name: "Singapore",
    image: "/international/singapore.jpg",
    description: "Ultra-modern city with iconic attractions, shopping and food culture.",
  },
  {
    name: "Sri Lanka",
    image: "/international/srilanka.jpg",
    description: "Golden beaches, tea plantations, wildlife and cultural heritage.",
  },
  {
    name: "Thailand",
    image: "/international/thailand.jpg",
    description: "Famous for beaches, nightlife, temples and delicious cuisine.",
  },
  {
    name: "Vietnam",
    image: "/international/vietnam.jpg",
    description: "Scenic landscapes, historic cities, cruises and rich traditions.",
  },
];

export default function InternationalTourPage() {
  const whatsapp = (place: string) =>
    `https://wa.me/917736406630?text=${encodeURIComponent(
      `Hello Cabo Tours & Travels, I would like to know more about ${place} international tour package.`
    )}`;

  return (
    <>
      <Header />

      <main className="pt-24 bg-gradient-to-b from-[#0b1f33] via-[#0f2a44] to-[#143b63] min-h-screen text-white">

        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">
            International Tour Packages
          </h1>

          <div className="aspect-[4/5] max-w-md mx-auto rounded-xl overflow-hidden shadow-lg">
            <img
              src={mainImage}
              alt="International Tours"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="mt-6 text-gray-200 max-w-4xl mx-auto">
            Explore the world with Cabo Tours & Travels. Carefully curated international
            holidays with comfort, safety and unforgettable experiences.
          </p>
        </section>

        {/* DESTINATIONS */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular International Destinations
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {destinations.map((place, i) => (
              <div
                key={i}
                className="bg-white text-gray-800 rounded-xl shadow-xl overflow-hidden
                           hover:-translate-y-1 transition"
              >
                <div className="aspect-[4/5]">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    {place.name}
                  </h3>

                  <p className="text-gray-600 mb-6">
                    {place.description}
                  </p>

                  <a href={whatsapp(place.name)} target="_blank">
                    <button className="w-full bg-[#0f2a44] text-white py-2 rounded-lg hover:bg-[#143b63] transition">
                      Enquire on WhatsApp
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
