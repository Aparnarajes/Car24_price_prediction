"use client";

export default function Book() {
  async function handleSubmit(e: any) {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      date: e.target.date.value,
      package: e.target.package.value,
    };

    await fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Thank you! Our team will call you shortly.");
    e.target.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-8 shadow-lg mt-10"
    >
      <h2 className="text-3xl font-bold mb-6">Request a Booking</h2>

      <input
        name="name"
        placeholder="Full Name"
        className="w-full border p-2 mb-4"
        required
      />

      <input
        name="phone"
        placeholder="Phone Number"
        className="w-full border p-2 mb-4"
        required
      />

      <input
        name="date"
        type="date"
        className="w-full border p-2 mb-4"
        required
      />

      <input
        name="package"
        placeholder="Package Name"
        className="w-full border p-2 mb-6"
        required
      />

      <button className="bg-orange-500 w-full py-3 rounded text-white text-lg">
        Request Booking
      </button>
    </form>
  );
}
