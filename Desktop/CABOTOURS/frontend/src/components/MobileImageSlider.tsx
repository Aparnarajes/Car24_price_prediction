"use client";

import { useState } from "react";

type Props = {
  images?: string[];
  titles?: string[];
};

export default function MobileImageSlider({
  images = [],
  titles = [],
}: Props) {
  const [active, setActive] = useState(0);

  if (!images.length) return null;

  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-lg mb-10">
      <div className="aspect-[4/5] w-full">
        <img
          src={images[active]}
          alt={titles[active] || "Slide"}
          className="w-full h-full object-cover"
        />
      </div>

      {titles[active] && (
        <div className="absolute bottom-3 left-3 right-3 bg-black/60 text-white text-sm px-3 py-2 rounded-lg">
          {titles[active]}
        </div>
      )}

      {/* DOTS */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2.5 h-2.5 rounded-full ${
              i === active ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
