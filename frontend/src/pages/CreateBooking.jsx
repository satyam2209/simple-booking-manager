import { useState } from "react";
import { api } from "../api";

const CreateBooking = () => {
  const [form, setForm] = useState({
    name: "",
    date: "",
    destination: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    await api.post("/bookings", form);
    alert("Booking created successfully!");
    setForm({ name: "", date: "", destination: "" });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
        Create New Booking
      </h2>

      <form onSubmit={submitHandler} className="space-y-4">
        <input
          className="w-full border p-3 rounded"
          placeholder="Customer Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          type="date"
          className="w-full border p-3 rounded"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
        />

        <input
          className="w-full border p-3 rounded"
          placeholder="Destination"
          value={form.destination}
          onChange={(e) => setForm({ ...form, destination: e.target.value })}
          required
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 cursor-pointer">
          Save Booking
        </button>
      </form>
    </div>
  );
};

export default CreateBooking;
