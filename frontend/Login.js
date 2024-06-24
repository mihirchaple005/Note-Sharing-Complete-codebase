import React, { useState } from 'react';
import './Login.css';
export default function Login(props){
    var [name,setname]=useState('name');
    var[email,setEmail]=useState('Email');
    var[password,setPassword]=useState("Password");
    const ValidateName=(Event)=>{
        setname(Event.target.value);
        if(setname==''){
            alert("Enter correct name");
        }
    };

    return(
        <><div className='loginpage'>
            <div className='LoginBox'>
            <p className='login'>Log in</p>
            
            <div className='logindata'>
            <input type='text' className='firstname'placeholder='Firstname' onInput={ValidateName}></input>
            <input  type='text' className='lastname'placeholder='Lastname'></input><br></br>
            <input type='text' className='email'  placeholder='Email'></input><br></br>
            <input type='text' className='password' placeholder='Password'></input><br></br>
            <button className='logInButton' >Log in</button>
           </div>
           
        </div>
        </div>
        
        </>
    );
}
