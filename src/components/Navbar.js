import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="Navbar_options">
            <input type="radio" className='radio1' name="Nav" id="Men" />
            <label htmlFor="Men" className='sizeOptions'>Men</label>
            <input type="radio" className='radio1' name="Nav" id="Women" />
            <label htmlFor="Women" className='sizeOptions'>Women</label>
            <input type="radio" className='radio1' name="Nav" id="Kids" />
            <label htmlFor="Kids" className='sizeOptions'>Kids</label>
        </div>
        <div className="Navbar_links">
            <span>&#128269;</span>
            <Link to={'./cart'}>
                <span>Cart</span>
            </Link>
        </div>
    </div>
  )
}

export default Navbar