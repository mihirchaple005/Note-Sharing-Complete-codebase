import React, { useState } from 'react';
import './Purchase.css';
import avgPulse from './photos/notebook1.webp';
import StoreItem from './StoreItem';
import FlowerPulse from './photos/notebook3.webp'
import PinkBook from './photos/notebook4.jpeg'
import exrBook from './photos/notebbok2.webp'
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Cart from './Cart'
import cart from './photos/cart.png'
export default function Store(){
    const location = useLocation();
    const showMainContent = location.pathname === '/Purchase/store';
    return (
        <> {showMainContent && (
<div className='main'>
<div className='storepage'>
    <nav>
        <Link className='cart' to='cart'><img src={cart}style={{width:'80px',height:'80px'}}></img></Link>
    </nav>
    <div className='inArow'>
    <StoreItem Itemimg={avgPulse} name="Avengers Classmate Pulse-UnRuled,300 Pages,SpiralBinding" price='103'></StoreItem>
    <StoreItem Itemimg={FlowerPulse} name="Flower Cover Classmate Pulse-UnRuled,300 Pages,SpiralBinding" price='130'></StoreItem>
    </div>
    <div className='inArow'>
    <StoreItem Itemimg={PinkBook} name="Pink Classmate Pulse-UnRuled,300 Pages,SpiralBinding" price='130'></StoreItem>
    <StoreItem Itemimg={exrBook} name="Classmate Longbook A4 Single Line 140 Pages" price='40'></StoreItem>
    </div>
</div>
</div>)}
<Routes><Route path='cart' element={<Cart/>}></Route></Routes>
</>
    )
}
