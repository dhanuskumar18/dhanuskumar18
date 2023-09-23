import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import fbicon from '../../assets/facebook-icon.png'
import twittericon from '../../assets/twitter.png'
import yt from '../../assets/youtube.png'
import insta from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p6onotq', 'template_gl7m0jw', form.current, '0J_1VFdtt2A1E5DL5')
      .then((result) => {
           console.log(result.text);
           e.target.reset();
           alert('Email Sent')

      }, (error) => {
            console.log(error.text);
      });
  };
  return (
    <section id='contactPage'> 
    <div id='clients'>
<h1 className='contactPageTitle'>My Clients</h1>
<p className='clientDesc'>I have had the opportunity to work wih a diverse group of companies.Some of the notable companies I have worked with includes</p>
    <div className='clientImgs'>
        <img src={Walmart} alt='client' className='clientImg' />
        <img src={Adobe}  alt='client' className='clientImg' />
        <img src={Microsoft}  alt='client' className='clientImg' />
        <img src={Facebook}  alt='client' className='clientImg' />
        
    </div>
    </div>
    <div id='contact'>
<h1 className='contactPageTitle'>Contact</h1>
<span className='contactDesc'>Please fill out the form below to discuss any work opportunity</span>
<form className='contactForm' ref= {form} onSubmit={sendEmail}>
    <input type='text' className='name' placeholder='your name' name='from_name'/>
    <input type='email' className='email' placeholder='your email' name='from_email'/>
    <textarea className='msg' placeholder='your message' name='message' rows='5' ></textarea>
    <button type='submit' value='Send' className='submitBtn'>Submit</button>
    <div className='links'>
      <img src={fbicon} alt='img' className='link'/>
      <img src={twittericon} alt='img' className='link'/>
      <img src={insta} alt='img' className='link'/>
      <img src={yt} alt='img' className='link'/>
    </div>
</form>
    </div>
    </section>
    
  )
}

export default Contact;