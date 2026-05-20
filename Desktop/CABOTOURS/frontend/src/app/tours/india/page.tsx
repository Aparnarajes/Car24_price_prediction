"use client";

import Footer from "../../../components/footer";
import Header from "../../../components/header";
import MobileImageSlider from "../../../components/MobileImageSlider";

/* HERO IMAGE (PORTRAIT) */
const mainImages = ["/india/main.jpeg"];

/* SINGLE DESTINATIONS */
const singleDestinations = [
  {
    name: "Lakshadweep",
    image: "/india/lakshadweep.jpg",
    description: "Pristine coral islands, crystal-clear waters and untouched beaches.",
  },
  {
    name: "Kashmir",
    image: "/india/kashmir.jpg",
    description: "Snow-capped mountains, Dal Lake, meadows and breathtaking landscapes.",
  },
  {
    name: "Andaman Islands",
    image: "/india/andaman.jpg",
    description: "White sandy beaches, scuba diving, snorkeling and tropical beauty.",
  },
  {
    name: "Agra & Delhi",
    image: "/india/agra-delhi.jpg",
    description:
      "Explore the Taj Mahal, Red Fort, India Gate, Qutub Minar and rich Mughal heritage.",
  },
  {
    name: "Hyderabad",
    image: "/india/hyderabad.jpg",
    description: "Charminar, royal heritage, IT hub and famous biryani.",
  },
  {
    name: "Rajasthan",
    image: "/india/rajasthan.jpg",
    description: "Forts, palaces, desert safaris and royal culture.",
  },
  {
    name: "Himachal Pradesh",
    image: "/india/himachal.jpg",
    description: "Hill stations, snow adventures and scenic valleys.",
  },
  {
    name: "Odisha",
    image: "/india/odisha.jpg",
    description: "Temples, beaches, tribal culture and natural beauty.",
  },
];

/* COMBINED DESTINATIONS */
const combinedDestinations = [
  {
    name: "South India – Kerala & Tamil Nadu",
    image: "/india/south-kerala-tamilnadu.jpg",
    description: "Backwaters, temples, hill stations and rich traditions.",
  },
  {
    name: "South India – Goa & Karnataka",
    image: "/india/south-goa-karnataka.jpg",
    description: "Beaches, heritage sites, coffee estates and nightlife.",
  },
  {
    name: "Punjab & Uttarakhand",
    image: "/india/punjab-uttarakhand.jpg",
    description: "Spiritual journeys, mountains and vibrant culture.",
  },
  {
    name: "North East – Meghalaya & Assam",
    image: "/india/northeast-meghalaya-assam.jpg",
    description: "Living root bridges, tea gardens and waterfalls.",
  },
  {
    name: "North East – Sikkim & Tawang",
    image: "/india/northeast-sikkim-tawang.jpg",
    description: "Snow monasteries, Himalayan views and serene landscapes.",
  },
];

export default function IndiaTourPage() {
  const whatsapp = (place: string) =>
    `https://wa.me/917736406630?text=${encodeURIComponent(
      `Hello Cabo Tours & Travels, I would like to enquire about ${place} tour package.`
    )}`;

  return (
    <>
      <Header />

      <main className="pt-24 min-h-screen bg-gradient-to-b from-[#0b1f33] via-[#0f2a44] to-[#143b63] text-white">

        {/* HERO SECTION */}
        <section className="max-w-6xl mx-auto px-6 mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">
            India Tour Packages
          </h1>

          {/* MOBILE SLIDER */}
          <div className="md:hidden">
            <MobileImageSlider images={mainImages} />
          </div>

          {/* DESKTOP PORTRAIT HERO */}
          <div className="hidden md:flex justify-center">
            <div className="aspect-[4/5] w-[420px] rounded-xl overflow-hidden shadow-lg">
              <img
                src={mainImages[0]}
                alt="India Tours"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="mt-6 text-gray-200 max-w-4xl mx-auto">
            Discover the diverse beauty of India with Cabo Tours & Travels —
            from beaches and hill stations to heritage cities and spiritual destinations,
            with comfort & safety guaranteed.
          </p>
        </section>

        {/* SINGLE DESTINATIONS */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Destinations in India
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {singleDestinations.map((place, i) => (
              <div
                key={i}
                className="bg-white text-gray-800 rounded-xl shadow-xl
                           hover:-translate-y-1 hover:shadow-2xl transition overflow-hidden"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{place.name}</h3>
                  <p className="text-gray-600 mb-6">{place.description}</p>

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

        {/* COMBINED DESTINATIONS */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Regional Tour Packages
          </h2>

          <div className="grid sm:grid-cols-2 gap-10">
            {combinedDestinations.map((place, i) => (
              <div
                key={i}
                className="bg-white text-gray-800 rounded-xl shadow-xl
                           hover:-translate-y-1 hover:shadow-2xl transition overflow-hidden"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{place.name}</h3>
                  <p className="text-gray-600 mb-6">{place.description}</p>

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
