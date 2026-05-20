"use client";

import { useState } from "react";

const images = [
  "/customers/1.jpg",
  "/customers/2.jpg",
  "/customers/3.jpg",
  "/customers/4.jpg",
  "/customers/5.jpg",
  "/customers/6.jpg",
  "/customers/7.jpg",
  "/customers/8.jpg",
  "/customers/9.jpg",
  "/customers/10.jpg",
];

export default function CustomersPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b1f33] to-[#143b63] pt-24 px-4 text-white">

      <h1 className="text-3xl font-bold text-center mb-10">
        Cabo Customers Gallery
      </h1>

      {/* MOBILE SLIDER */}
      <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="min-w-[80%] snap-center rounded-xl overflow-hidden shadow-lg"
            onClick={() => setActive(img)}
          >
            <img
              src={img}
              className="w-full aspect-[4/5] object-cover"
              alt="Customer"
            />
          </div>
        ))}
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <div
            key={i}
            className="cursor-pointer rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
            onClick={() => setActive(img)}
          >
            <img
              src={img}
              className="w-full aspect-[4/5] object-cover"
              alt="Customer"
            />
          </div>
        ))}
      </div>

      {/* FULLSCREEN MODAL */}
      {active && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setActive(null)}
        >
          <img
            src={active}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            alt="Fullscreen"
          />
        </div>
      )}
    </main>
  );
}
