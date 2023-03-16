import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <header>
            <Link to='/' className='logo'>
            <i className='ri-home-heart-fill'></i><span>Logo</span>
            </Link>
        
        <ul className='navbar'>
            <li><Link to='/' className='active'>Home</Link></li>
            <li><Link to='/aboutus'>About Us</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='contact'>Contacts</Link></li>
        </ul>

        <div className='main'>
            <Link to='signin' className='user'><i className='ri-user-fill'></i>Sign In</Link>
            <Link to='register'>Register</Link>
            <div className='bx bx-menu' id='menu-icon'
            onClick={() => {
                let menu = document.querySelector('#menu-icon');
                let navbar = document.querySelector('.navbar');
                menu.classList.toggle('bx-x');
                navbar.classList.toggle('open');
            }}
            >
            </div>
        </div>
        </header>
    )
}

export default Navbar