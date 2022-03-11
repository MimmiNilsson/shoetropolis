//=============================================================================
/*===== MIMMI: CHECKOUT / CHECKOUT MESSAGE PAGE =====*/
//=============================================================================

import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import './CheckoutMsg.css';

function CheckoutMsg() {
    
  return (
    <div className='checkout-msg-container'>
      <Wrap className='checkout-msg-wrap'>
        <Title2 className='checkout-msg-h2'><Strong>Thank you</Strong> for choosing Shoetropolis!</Title2>
        <P className='checkout-msg-p'>Your order is being processed and you will receive an order confirmation to your email shortly with your purchase details and tracking information.</P>
        <motion.div
          whileHover= {{
            scale: 1.05
           }} 
           whileTap= {{
             scale: 0.95
           }}>
           <Link to='/home'><MsgBtn className='checkout-msg-return-btn'>Back to Shoetropolis</MsgBtn></Link>
        </motion.div>
      </Wrap>
    </div>
  )
}

const Wrap = styled.div `
  text-align: center;
  width: 50%;
  margin-top: 33vh;
  color: #fff;
`;

const Title2 = styled.h2 `
  text-transform: uppercase;
  text-align: center;
  font-size: 1.8rem;
`;

const Strong = styled(Title2) `
  font-size: 2.5rem;
`;

const P = styled.p `
  padding: 5px;   
`;

const MsgBtn = styled.button `
  width: 100%;
  padding: 10px;
  margin-top: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.2rem;
  border: none;
  background-color: #fff;
  &:hover {
    background-color: black;
    color: #fff;
  }
`;

export default CheckoutMsg;