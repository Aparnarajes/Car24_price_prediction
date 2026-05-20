"use client";

import Footer from "../../components/footer";
import Header from "../../components/header";

const customerImages = [
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
  return (
    <>
      <Header />

      <main className="pt-24 min-h-screen bg-gradient-to-b from-[#0b1f33] via-[#0f2a44] to-[#143b63] px-6 py-16">

        {/* TITLE */}
        <div className="max-w-6xl mx-auto text-center mb-14 text-white">
          <h1 className="text-4xl font-bold mb-3">
            Cabo Customers Gallery
          </h1>
          <p className="text-gray-300">
            Happy moments from our journeys ✨
          </p>
        </div>

        {/* IMAGE GALLERY */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {customerImages.map((img, index) => (
            <div
              key={index}
              className="aspect-[4/5] overflow-hidden rounded-xl
                         shadow-lg hover:shadow-2xl
                         hover:-translate-y-1 transition bg-white"
            >
              <img
                src={img}
                alt="Cabo Customer"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </>
  );
}
