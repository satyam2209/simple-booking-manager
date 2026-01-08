import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="text-xl font-bold text-blue-600">Booking Manager</h1>

        <div className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "text-gray-600"
            }
          >
            Create Booking
          </NavLink>

          <NavLink
            to="/bookinglist"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "text-gray-600"
            }
          >
            Booking List
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
