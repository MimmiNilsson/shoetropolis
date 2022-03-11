//=============================================================================
/*===== MIMMI: CHECKOUT / CHECKOUT MESSAGE PAGE =====*/
//=============================================================================

import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import './CheckoutMsg.css'

function CheckoutMsg() {
    
  return (
    <div className='checkout-msg-container'>
      <Wrap className='checkout-msg-wrap'>
        <Title2 className='checkout-msg-h2'>Thank you for choosing Shoetropolis!</Title2>
        <P className='checkout-msg-p'>Your order is being processed and you will shortly receive an order confirmation to your email with your purchase details and tracking information.</P>
        <Link to='/home'><MsgBtn className='checkout-msg-return-btn'>Back to Shoetropolis</MsgBtn></Link>
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
`;

const P = styled.p `
  padding: 5px;   
`;

const MsgBtn = styled.button `
  width: 100%;
  padding: 10px;
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