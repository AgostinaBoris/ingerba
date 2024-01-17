import React from 'react'
import './Footer.css';
import logo from '../../assets/logo.png';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer">
        <div className="container">
            
            <div className="col">
                <h3>Conocenos</h3>
                <p>Sobre nosotros</p>
                <p>Contáctanos</p>
            </div>
            <img src={logo} alt='logo' width={150}></img>
            <div className="social">
                <FaFacebookSquare className='icon' />
                <FaInstagramSquare className='icon'/>
                <FaTwitterSquare className='icon'/>
            </div>
        </div>
    </div>
  )
}
