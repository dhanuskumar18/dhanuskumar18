import React from 'react';
import './intro.css';
import bg from '../../assets/dhanus.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
        <span className='hello,'>Hello</span>
        <span className='introText'>I'm <span className='introName'>Dhanus</span> <br/>website designer</span>
   <p className='introPara'>I am a skilled web desinger with experience in creating<br/>visually appealing and user friendlywebsites</p>
   <Link><button className='btn'><img src={btnImg} alt='Hire me' className='btnImg'/>Hire me</button></Link></div>
   <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro;