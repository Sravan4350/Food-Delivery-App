import { useState } from "react"
import { Link } from "react-router-dom"
import {LOGO_URL} from '../../utils/constants'
import './Navbar.css'
const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <div className="nav-container">
      <img 
        className="logo-image" 
        src={LOGO_URL}
        alt="Logo"
      />
      <ul className="nav-items">
        <li className="nav-item"><Link to='/'>Home</Link></li>
        <li className="nav-item"><Link to="/about">About us</Link></li>
        <li className="nav-item"><Link to="/contact">Contact us</Link></li>
        <li>
          <button onClick={() => setIsClicked(prev => !prev)}>
            {isClicked ? "Logout" : "Log In"}
          </button>
        </li>
      </ul>
    </div>
  )
}
export default NavBar