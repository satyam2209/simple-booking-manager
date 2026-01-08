import { useEffect, useState } from "react";
import { api } from "../api";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    api.get("/bookings").then((res) => setBookings(res.data));
  }, []);

  const formatDate = (dateString) => {
  return new Date(dateString).toISOString().split("T")[0];
};

  return (
    <div className="max-w-6xl mx-auto mt-10 px-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">All Bookings</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((b) => (
          <div
            key={b.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <p className="text-lg font-semibold">{b.name}</p>
            <p className="text-gray-500">{formatDate(b.date)}</p>
            <p className="text-gray-600 mt-2">{b.destination}</p>
          </div>
        ))}
      </div>

      {bookings.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No bookings found.</p>
      )}
    </div>
  );
};

export default BookingList;
