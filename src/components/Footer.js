//=============================================================================
/*===== MIMMI: FOOTER / FOOTER COMPONENT =====*/
//=============================================================================

import React from 'react';
import shoe_logo from '../assets/shoe_logo.png';
import './Footer.css'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs';

function Footer() {
  
  return (
    <div className='main-footer'>
      <div className='footer-container'>
        <div className='footer-box box-1'>
          <h3 className='footer-h3'>About</h3>
          <p className='footer-p'><a href=''>Our mission explained</a></p>
          <p className='footer-p'><a href=''>Annual charity report</a></p>
        </div>
        <div className='footer-box box-2'>
          <h3 className='footer-h3'>Info</h3>
          <p className='footer-p'><a href=''>FAQs</a></p>
          <p className='footer-p'><a href='https://www.collegemagazine.com/michael-scott-quotes/'>Careers</a></p>
          <p className='footer-p'><a href='https://www.youtube.com/watch?v=4_X1rhOq6BU&ab_channel=BenedictPolizzi'>News</a></p>
        </div>
        <div className='footer-box box-3'>
          <h3 className='footer-h3'>Contact</h3>
          <p className='footer-p'><a href="mailto:shoetropolis@shoetropolis.com">Email us</a></p>
          <p className='footer-p'><a href="tel:+46725720236">+46(0)851992310</a></p>
        </div>
        <div className='footer-box box-4'>
          <h3 className='footer-h3'>Follow</h3>
          <p className='footer-socials'><a href='https://www.timesnownews.com/the-buzz/article/facebook-changes-company-name-to-meta-netizens-say-kamaal-hai-mera-ispar-abhi-bhi-account-hai/827585'><BsFacebook  /></a><a href='https://poshmark.com/listing/OMG-ShoesLets-Get-Em-5c7d4e9bd36231e4d66e32e9'> <BsInstagram /></a><a href='https://twitter.com/hashtag/shoes'> <BsTwitter /></a></p>
        </div>
      </div>
      {/* <div className='footer-row'>
        <p>All Rights Reserved &copy;{new Date().getFullYear()} | Shoetropolis, Inc.</p>
      </div> */}
    </div>
  )
}

export default Footer;