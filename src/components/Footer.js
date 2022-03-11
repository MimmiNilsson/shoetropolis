//=============================================================================
/*===== MIMMI: FOOTER / FOOTER COMPONENT =====*/
//=============================================================================

import React from 'react';
import {motion} from 'framer-motion';
import {BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsPinterest} from 'react-icons/bs';
import './Footer.css';


function Footer() {
  
  return (
    <div className='main-footer'>
      <div className='footer-container'>
        <div className='footer-box box-1'>
          <h3 className='footer-h3'>About</h3>
          <p className='footer-p'><a className='a-footer' href=''>Our mission explained</a></p>
          <p className='footer-p'><a className='a-footer' href=''>Annual charity report</a></p>
        </div>
        <div className='footer-box box-2'>
          <h3 className='footer-h3'>Info</h3>
          <p className='footer-p'><a className='a-footer' href=''>Shipping and tracking</a></p>
          <p className='footer-p'><a className='a-footer' href=''>FAQs</a></p>
        </div>
        <div className='footer-box box-3'>
          <h3 className='footer-h3'>Contact</h3>
          <p className='footer-p'><a className='a-footer' href="mailto:shoetropolis@shoetropolis.com">Email us</a></p>
          <p className='footer-p'><a className='a-footer' href="tel:+46725720236">+46(0)851992310</a></p>
        </div>
      </div>
      <div
  
        className='footer-row'>
        <motion.p
            whileHover= {{
              scale: 1.2
             }} 
             whileTap= {{
               scale: 0.9
             }}
          className='footer-socials'>
          <a className='a-footer' href=''><BsFacebook /></a><a className='a-footer' href=''> <BsInstagram /></a> 
           <a className='a-footer' href=''> <BsTwitter /></a>
          <a className='a-footer' href=''><BsYoutube /></a> 
           <a className='a-footer' href=''><BsPinterest /></a></motion.p>
        <p>Shoetropolis, Inc. | All Rights Reserved &copy;{new Date().getFullYear()}</p>
        <p>The content of this site is copyright-protected and is property of Shoetropolis, Inc. Shoetropolis' business concept is to offer fashion and quality at the best price in a sustainable way.</p>
      </div>
    </div>
  )
}

export default Footer;