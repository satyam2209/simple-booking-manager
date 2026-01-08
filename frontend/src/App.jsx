import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateBooking from "./pages/CreateBooking";
import BookingList from "./pages/BookingList";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<CreateBooking />} />
        <Route path="/bookinglist" element={<BookingList />} />
      </Routes>
    </div>
  );
}
