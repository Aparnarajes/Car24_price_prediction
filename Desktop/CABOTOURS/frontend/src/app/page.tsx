"use client";

import { useEffect, useState } from "react";

const testimonials = [
  { text: "Amazing Kerala trip. Everything was perfectly arranged.", name: "Anjali R.", source: "Google Review" },
  { text: "Professional service and great coordination.", name: "Rahul S.", source: "Instagram Review" },
  { text: "Comfortable travel & excellent planning.", name: "Naveen K.", source: "Google Review" },
  { text: "Very polite staff and smooth experience.", name: "Sreelakshmi P.", source: "Google Review" },
  { text: "Best travel agency in Kerala!", name: "Arjun M.", source: "Instagram Review" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Hello Cabo Tours & Travels, I would like to enquire about tour packages."
  );

  return (
    <main className="relative bg-[#f1f6fd] text-gray-800">

      {/* FLOATING WHATSAPP */}
      <a
        href={`https://wa.me/917736406630?text=${whatsappMessage}`}
        target="_blank"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 transition"
      >
       <svg
  viewBox="0 0 32 32"
  className="w-9 h-9 fill-white"
  aria-hidden="true"
>
  <path d="M16.04 2C8.29 2 2 8.29 2 16.04c0 2.82.73 5.44 2.01 7.72L2 30l6.46-1.9a13.96 13.96 0 007.58 2.21c7.75 0 14.04-6.29 14.04-14.04C30.08 8.29 23.79 2 16.04 2zm0 25.5a11.4 11.4 0 01-5.81-1.6l-.42-.25-3.83 1.12 1.15-3.73-.27-.44a11.39 11.39 0 01-1.7-6.06c0-6.3 5.13-11.43 11.43-11.43 6.3 0 11.43 5.13 11.43 11.43 0 6.3-5.13 11.43-11.43 11.43z"/>
  <path d="M22.6 19.55c-.28-.14-1.67-.82-1.93-.91-.26-.09-.45-.14-.64.14-.18.28-.74.91-.9 1.1-.17.18-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.17.18-.28.28-.47.09-.18.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.18 0-.49.07-.75.35-.26.28-.98.96-.98 2.34 0 1.38 1 2.72 1.14 2.91.14.18 1.97 3.01 4.78 4.22.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.67-.68 1.9-1.34.24-.65.24-1.21.17-1.34-.07-.13-.26-.2-.54-.34z"/>
</svg>
      </a>

      {/* HERO */}
      <section className="min-h-screen bg-[url('/hero.jpg')] bg-cover bg-center">
        <div className="min-h-screen bg-black/60 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10">

            {/* LEFT */}
            <div className="text-white mt-16 md:mt-0">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-orange-400">Cabo</span> Tours & Travels
              </h1>
              <p className="text-xl mt-1 text-teal-300 font-semibold">Kerala</p>

              <p className="mt-4 text-lg text-gray-200">
                Reliable travel partner for all your travel needs.
              </p>

              {/* GOOGLE BADGE */}
              <div className="flex items-center gap-2 mt-4">
                ⭐⭐⭐⭐⭐
                <span className="text-sm text-gray-200">5.0 Google Rating</span>
              </div>

              <a href="tel:8921597244">
                <button className="mt-6 bg-[#0f2a44] hover:bg-[#143b63] px-6 py-3 rounded-lg text-lg font-semibold transition">
                  📞 Call Now
                </button>
              </a>
            </div>

            {/* CONTACT BOX */}
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 text-white shadow-xl border border-white/30">
              <h2 className="text-xl font-bold text-center mb-4">Contact Us</h2>

              <p className="text-center text-lg font-semibold">📞  7736406630 | 89215 97244 </p>
              <p className="text-center">📧 cabotourskerala@gmail.com</p>
              <p className="text-center text-sm">📍 Kaloor, Ernakulam, Kerala</p>

              <a href="/tours">
                <button className="mt-4 w-full bg-white text-gray-900 py-3 rounded-lg font-semibold">
                  View Our Packages →
                </button>
              </a>

              <div className="grid grid-cols-2 gap-4 mt-6 text-center">
                <div>
                  <p className="text-2xl font-bold">6+</p>
                  <p className="text-sm">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-sm">Happy Customers</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PACKAGE CARDS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Popular Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Kerala Packages", desc: "Backwaters, hill stations & beaches" },
              { title: "India Tours", desc: "North & South India destinations" },
              { title: "International Tours", desc: "Dubai, Maldives & more" },
            ].map((p, i) => (
              <div key={i} className="p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="py-16 bg-[#e8f0fb]">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">About Cabo Tours & Travels</h2>
          <p className="text-lg text-gray-700">
            Cabo Tours and Travels offers reliable and comfortable travel services with a strong focus on safety and customer satisfaction. We provide flight bookings, hotel reservations, airport transfers, sightseeing services and customized tours.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
          <div className="bg-[#e8f0fb] p-8 rounded-xl shadow">
            <p className="italic text-lg">“{testimonials[active].text}”</p>
            <p className="mt-4 font-semibold">— {testimonials[active].name}</p>
            <p className="text-sm text-gray-600">{testimonials[active].source}</p>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Travel Moments</h2>
          {mounted && (
            <iframe
              src="https://www.instagram.com/cabotours_/embed"
              className="w-full max-w-4xl mx-auto h-[480px] rounded-xl shadow"
              loading="lazy"
            />
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-sm px-6">
          <div>
            <h3 className="text-white font-bold mb-2">Cabo Tours & Travels</h3>
            <p>Reliable & comfortable travel services.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">Legal</h3>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Cancellation Policy</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">Contact</h3>
            <p>📞 7736406630</p>
            <p>📧 cabotourskerala@gmail.com</p>
          </div>
        </div>
        <p className="text-center text-xs mt-6">© 2026 Cabo Tours & Travels. All rights reserved.</p>
      </footer>

    </main>
  );
}
