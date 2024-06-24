import React, { useState } from 'react';
import './Purchase.css';
import avgPulse from './photos/notebook1.webp';
import { useOrder } from './OrderContext';
var orders;
var productDetails;
export default function StoreItem(props){
    const { updateOrder } = useOrder();
    const [order1,setorder1]=useState([]);
    const SubmitDetails=(e)=>{ 
        e.preventDefault();
        productDetails = {
            id:new Date().getTime(),
            img: props.Itemimg,
            name: props.name,
            price: props.price * 1
        };
        
        fetch('your-server-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productDetails)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Update order state after successful POST updateOrder(productDetails); 
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };
    
    return(
        <>
        <div className='itemstr'>
        <form onSubmit={SubmitDetails}>
        <div className='inArow'>
            <img className='itemImg' src={props.Itemimg}alt={props.name}></img>
            <h1 className='price'>Rs{props.price}</h1>
            </div>
            <h3 className='ProdName'>{props.name}</h3>
            <button className='add' type='submit'onClick={() => updateOrder(productDetails)}>Add to cart</button>
            </form>
        </div>
        </>
    )
}
export const order=orders;