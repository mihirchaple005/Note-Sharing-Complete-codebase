import React, { useState } from 'react';
import './Purchase.css'
import StoreItem from './StoreItem';
import { useOrder } from './OrderContext';

export default function Cart() {
    const { order1 } = useOrder();
    const orders = order1 || [];

    const deleteData=(idTodelete)=>{
        fetch("https://jsonplaceholder.typicode.com/posts/?id="+{idTodelete}
            , {  method: "DELETE"}).then(response => {  console.log(response.status);}).catch(error => {
                console.error('Error:', error);
            }); 
    }
    
    return (<>
    <div className='main'>
        <h1 className='cartTitle'>Cart</h1>
        <br></br>
    <div id="cart-container1">
        {orders.map(order => (
          <div key={order.id} className="cart">
            <div className='inArow'>   <img className='ImgOrder' src={order.img} alt={order.name}></img>
            <h4 className='Itemname'>{order.name}</h4>
            </div>
            <div className='inArow'><h3 className='Itemprice'>price: Rs{order.price}</h3>
          <button className="cancelorder" onClick={() => deleteData(order.id)}>Remove from cart</button></div></div>))}
    </div>
    </div>
    </>)};