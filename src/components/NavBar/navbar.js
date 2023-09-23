import React, { useState } from 'react';
import './navbar.css';
import contactImg from '../../assets/contact.png';
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
< nav className='navbar'>
    <img src={logo} alt='logo' className='logo'/>
    <div className='desktopMenu'>
        <Link activeClass="active" to='intro' smooth={true} spy={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass="active" to='skills' smooth={true} spy={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass="active" to='works' smooth={true}  spy={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
        <Link activeClass="active" to='clients' smooth={true} spy={true} offset={-50} duration={500} className='desktopMenuListItem'>Clients</Link>
    </div>
    <button className='desktopMenuBtn' onClick= {() => {
      document.getElementById('contact').scrollIntoView({behaviour :'smooth'});
     } }><img src={contactImg} alt='img' className='desktopMenuImg' />contact me</button>

<img src={menu} alt='menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
    <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass="active" to='intro' smooth={true} spy={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to='skills' smooth={true} spy={true} offset={-50} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass="active" to='works' smooth={true}  spy={true} offset={-50} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Portfolio</Link>
        <Link activeClass="active" to='clients' smooth={true} spy={true} offset={-50} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Clients</Link>
     <Link activeClass="active" to='contact' smooth={true} spy={true} offset={-50} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>contact</Link>
    </div>
  

</nav>

  )
}

export default Navbar;