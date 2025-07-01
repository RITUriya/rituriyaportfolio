import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar text-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          Ritu Riya
        </Link>
        <div className="space-x-4 navbar-links">
          {["/", "/about", "/projects", "/contact"].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-700 navbar-link  ${
                  isActive ? "font-semibold text-blue-700" : ""
                }`
              }
            >
              {path === "/"
                ? "Home"
                : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
