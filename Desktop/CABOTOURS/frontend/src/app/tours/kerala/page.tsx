"use client";

import MobileImageSlider from "../../../components/MobileImageSlider";
import Footer from "../../../components/footer";
import Header from "../../../components/header";

/* HERO IMAGES */
const mainImages = [
  "/kerala/main1.jpg",
  "/kerala/main2.jpg",
];

/* DESTINATIONS */
const destinations = [
  {
    name: "Alappuzha",
    image: "/kerala/alappuzha.jpg",
    description:
      "Famous for serene backwaters, houseboat cruises, lagoons and beautiful canals. A perfect destination for relaxed and romantic holidays.",
  },
  {
    name: "Kochi (Cochin)",
    image: "/kerala/kochi.jpg",
    description:
      "A vibrant port city known for Chinese fishing nets, Fort Kochi, colonial architecture, shopping streets and rich cultural heritage.",
  },
  {
    name: "Munnar",
    image: "/kerala/munnar.jpg",
    description:
      "A breathtaking hill station surrounded by tea plantations, misty mountains, waterfalls and cool climate throughout the year.",
  },
  {
    name: "Thekkady",
    image: "/kerala/thekkady.jpg",
    description:
      "Home to Periyar Wildlife Sanctuary, famous for wildlife safaris, spice plantations and nature experiences.",
  },
];

export default function KeralaTourPage() {
  const whatsapp = (place: string) =>
    `https://wa.me/917736406630?text=${encodeURIComponent(
      `Hello Cabo Tours & Travels, I would like to know more about ${place} tour package.`
    )}`;

  return (
    <>
      <Header />

      <main className="pt-24 bg-gradient-to-b from-[#0b1f33] via-[#0f2a44] to-[#143b63] min-h-screen text-white">

        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">
            Kerala Tour Packages
          </h1>

          {/* MOBILE HERO SLIDER */}
          <div className="md:hidden">
            <MobileImageSlider images={mainImages ?? []} />
          </div>

          {/* DESKTOP HERO GRID */}
          <div className="hidden md:grid grid-cols-2 gap-6">
            {mainImages.map((img, i) => (
              <div
                key={i}
                className="w-full aspect-[4/5] overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={img}
                  alt="Kerala Tour"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <p className="mt-6 text-gray-200 max-w-4xl mx-auto">
            Explore God’s Own Country with Cabo Tours & Travels. Enjoy backwaters,
            hill stations, wildlife, beaches and cultural experiences with
            comfort & safety guaranteed.
          </p>
        </section>

        {/* DESTINATIONS */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Destinations in Kerala
          </h2>

          {/* MOBILE DESTINATION SLIDER */}
          <div className="md:hidden">
            <MobileImageSlider
              images={destinations.map(d => d.image)}
              titles={destinations.map(d => d.name)}
            />
          </div>

          {/* DESKTOP GRID */}
          <div className="hidden md:grid sm:grid-cols-2 gap-10">
            {destinations.map((place, i) => (
              <div
                key={i}
                className="bg-white text-gray-800 rounded-xl shadow-xl overflow-hidden
                           hover:-translate-y-1 hover:shadow-2xl transition"
              >
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">
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
