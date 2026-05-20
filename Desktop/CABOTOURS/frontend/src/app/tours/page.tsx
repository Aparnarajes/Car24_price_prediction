"use client";

const tourCategories = [
  {
    slug: "kerala",
    title: "Kerala Tour Packages",
    image: "/services/kerala.jpg",
    description:
      "Backwaters, hill stations, beaches, houseboats, Ayurveda & cultural experiences.",
  },
  {
    slug: "india",
    title: "India Tour Packages",
    image: "/services/india.jpg",
    description:
      "North & South India tours including heritage sites, hill stations and spiritual destinations.",
  },
  {
    slug: "international",
    title: "International Tour Packages",
    image: "/services/international.jpg",
    description:
      "Dubai, Maldives, Singapore, Thailand and other international destinations.",
  },
];

const services = [
  {
    title: "Flight Ticket Bookings",
    image: "/services/flights.jpg",
    description:
      "Domestic and international flight ticket bookings at best prices.",
  },
  {
    title: "Airport Transfers",
    image: "/services/airport.jpg",
    description:
      "Comfortable airport pickup and drop services for stress-free travel.",
  },
  {
    title: "Hotel Booking",
    image: "/services/hotel.jpg",
    description:
      "Verified hotels and resorts ensuring comfort, safety and budget flexibility.",
  },
  {
    title: "Sightseeing Activities",
    image: "/services/sightseeing.jpg",
    description:
      "Guided sightseeing covering popular attractions and hidden gems.",
  },
];

export default function Tours() {
  const whatsapp = (text: string) =>
    `https://wa.me/917736406630?text=${encodeURIComponent(text)}`;

  return (
    <>
     {/* HEADER */}
<header className="fixed top-0 left-0 w-full z-40 bg-[#0b1f33]/95 backdrop-blur border-b border-white/10">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    
    {/* LEFT – BRAND */}
    <h1 className="text-white font-bold text-lg">
      Cabo Tours & Travels
    </h1>

    {/* RIGHT – ACTIONS */}
    <div className="flex items-center gap-6">
      
      {/* CABO CUSTOMERS ICON */}
      <a
        href="/customers"
        title="Cabo Customers"
        className="flex items-center gap-2 text-white hover:text-teal-300 transition"
      >
        <img
          src="/logo.png"
          alt="Cabo Customers"
          className="w-7 h-7 rounded-full object-contain"
        />
        <span className="hidden sm:inline text-sm font-medium">
          Cabo Customers
        </span>
      </a>

      <span className="hidden md:block text-sm text-teal-300 font-semibold">
        Comfort & Safety Guaranteed
      </span>
    </div>

  </div>
</header>


      {/* MAIN */}
      <main className="min-h-screen pt-24 px-6 py-12 bg-gradient-to-b from-[#0b1f33] via-[#0f2a44] to-[#143b63]">

        {/* INTRO */}
        <div className="max-w-6xl mx-auto text-center mb-16 text-white">
          <h1 className="text-4xl font-bold mb-4">
            Cabo Tours & Travels Kerala
          </h1>
          <p className="text-gray-200">
            Flight tickets | Airport transfers | Hotel booking | Sightseeing
          </p>
        </div>

        {/* TOUR PACKAGES */}
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            🌍 Our Tour Packages
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {tourCategories.map((tour) => (
              <div
                key={tour.slug}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden hover:-translate-y-1"
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">
                    {tour.title}
                  </h3>

                  <p className="text-gray-600 mb-6">
                    {tour.description}
                  </p>

                  <div className="flex gap-3">
                    <a href={`/tours/${tour.slug}`} className="flex-1">
                      <button className="w-full border border-[#0f2a44] text-[#0f2a44] py-2 rounded-lg hover:bg-gray-100 transition">
                        View Details
                      </button>
                    </a>

                    <a
                      href={whatsapp(
                        `Hello Cabo Tours & Travels, I would like to enquire about ${tour.title}.`
                      )}
                      target="_blank"
                      className="flex-1"
                    >
                      <button className="w-full bg-[#0f2a44] text-white py-2 rounded-lg hover:bg-[#143b63] transition">
                        WhatsApp
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            ✈️ Our Travel Services
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden hover:-translate-y-1"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-40 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>

                  {/* WHATSAPP BUTTON – BLUE */}
                  <a
                    href={whatsapp(
                      `Hello Cabo Tours & Travels, I would like to enquire about ${service.title}.`
                    )}
                    target="_blank"
                  >
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

      {/* FOOTER */}
      <footer className="bg-[#0b1f33] text-gray-300 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="text-white font-bold text-lg mb-2">
              Cabo Tours & Travels
            </h3>
            <p>Kerala • India • International Tours</p>
          </div>

          <div>
            <p>📞 89215 97244</p>
            <p>📞 77364 06630</p>
            <p>📧 cabotourskerala@gmail.com</p>
          </div>

          <div>
            <p className="hover:underline cursor-pointer">Privacy Policy</p>
            <p className="hover:underline cursor-pointer">Terms & Conditions</p>
            <p className="hover:underline cursor-pointer">Cancellation Policy</p>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 text-center text-xs">
          © 2026 Cabo Tours & Travels. All rights reserved.
        </div>
      </footer>
    </>
  );
}
