import React from 'react';
import "./works.css";
import  portfolio1 from '../../assets/mdk1.png';
import  portfolio2 from '../../assets/mdk5.jpg';
import  portfolio3 from '../../assets/mdk2.jpg';
import  portfolio4 from '../../assets/mdk6.jpg';
import  portfolio5 from '../../assets/mdk4.jpg';
import  portfolio6 from '../../assets/mdk3.jpg';
const Works = () => {
  return (
   <section id='works'>
    <h2 className='workstitle'>My Portfolio</h2>
    <span className='workDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.I excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence. </span>
<div className='worksImgs'>
    <img src={portfolio1} alt=' ' className='worksImg'/>
    <img src={portfolio2} alt=' ' className='worksImg'/>
    <img src={portfolio3} alt=' ' className='worksImg'/>
    <img src={portfolio4} alt=' ' className='worksImg'/>
    <img src={portfolio5} alt=' ' className='worksImg'/>
    <img src={portfolio6} alt=' ' className='worksImg'/>
</div>
<button className='workBtn'>see more</button>
   </section>

  )
}

export default Works;