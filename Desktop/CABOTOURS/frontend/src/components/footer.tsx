export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm">

        <div>
          <h3 className="font-semibold mb-2">Cabo Tours & Travels Kerala</h3>
          <p>Reliable travel partner for all your travel needs.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Policies</h3>
          <ul className="space-y-1">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cancellation Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <a
            href="https://www.instagram.com/cabotours_"
            target="_blank"
            className="hover:text-pink-400"
          >
            Instagram
          </a>
        </div>

      </div>

      <p className="text-center text-xs mt-6 text-gray-400">
        © {new Date().getFullYear()} Cabo Tours & Travels Kerala
      </p>
    </footer>
  );
}
