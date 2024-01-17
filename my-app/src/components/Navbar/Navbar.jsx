import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/ingerba.png';
import { FaBars, FaTimes} from 'react-icons/fa';

import "./Navbar.css";


export default function Navbar() {
  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)

  return (
    <div className="navbar">
       <div className="container">
        <div>
          <img src={logo} alt="logo" width={300}></img>
        </div>
    <ul className={nav ? 'nav-menu active' : 'nav-menu'} >
      <li>
        <Link exact to="/" style={{textDecoration: 'none', color: 'black'}}>Home</Link>
      </li>
      <li>
        <Link exact to="/nosotros" style={{textDecoration: 'none', color: 'black'}}>Nosotros</Link>
      </li>
      <li>
        <Link exact to="/servicios" style={{textDecoration: 'none', color: 'black'}}>Servicios</Link>
      </li>
      <li>
        <Link exact to="/valores" style={{textDecoration: 'none', color: 'black'}}>Valores</Link>
      </li>
      <li>
        <Link exact to="/contacto" style={{textDecoration: 'none', color: 'black'}}>Contacto</Link>
      </li>
    </ul>

    <div className='hamburger' style={{color: 'black'}} onClick={handleNav}>
    {nav ? (
            <FaTimes size={20} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={20} />
          )}
    </div>
    </div>
    </div>
   
  )
}
