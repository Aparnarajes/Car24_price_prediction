"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <span className="text-orange-400">Cabo</span> Tours & Travels
        </div>

        <nav className="hidden md:flex gap-6">
          <a href="/" className="hover:text-orange-400">Home</a>
          <a href="/tours" className="hover:text-orange-400">Tours</a>
       
        </nav>
      </div>
      {/* CABO CUSTOMERS ICON */}
      <a
  href="/customers"
  title="Cabo Customers"
  className="flex items-center gap-2 text-white hover:text-teal-300 transition"
>
 <img
  src="/logo.png"
  alt="Cabo Customers"
  width={36}
  height={36}
  style={{ objectFit: "contain", background: "white", borderRadius: "999px", padding: "4px" }}
/>

  <span className="hidden sm:inline text-sm font-medium">
    Cabo Customers
  </span>
</a>

    </header>
  );
}
