import { useState } from "react"
import { Link } from "react-router-dom"
import { LOGO_URL } from '../utils/constants'
import useOnlineStatus from "../utils/useOnlineStatus"

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false)
  const status = useOnlineStatus()

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-50">
      <img
        className="w-28 h-auto object-contain"
        src={LOGO_URL}
        alt="Logo"
      />
      <ul className="flex items-center gap-6">
        <li className="flex items-center gap-1 text-sm font-medium text-gray-500">
          {status ? "🟢 Online" : "🔴 Offline"}
        </li>
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About Us" },
          { to: "/contact", label: "Contact Us" },
          { to: "/grocery", label: "Grocery" },
        ].map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className="text-gray-700 font-medium hover:text-orange-500 transition-colors duration-200"
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <button
            onClick={() => setIsClicked(prev => !prev)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 
              ${isClicked
                ? "bg-red-100 text-red-600 hover:bg-red-200 hover:cursor-pointer"
                : "bg-orange-500 text-white hover:bg-orange-600  hover:cursor-pointer"
              }`}
          >
            {isClicked ? "Logout" : "Log In"}
          </button>
        </li>

      </ul>
    </nav>
  )
}

export default NavBar