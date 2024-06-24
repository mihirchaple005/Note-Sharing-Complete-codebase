import React, { useState } from 'react';
import './Page1.css';
import openBook from './photos/openBook4.png'
import note1 from './photos/notesh.png'
import note2 from './photos/notesh2.png'
import note3 from './photos/notesh4.png'
export default function Page1(){
    
    return(
<>
<div className='nav'>
<div className='logo'><h1>MARCOS</h1></div>
<div className='navContent'>
<h5 className='Community'>Community</h5>
<h5 className='Saved'>Saved</h5>
<h5 className='Account'>Account</h5>
<h5 className='Purchase'> Purchase</h5>
<div className="dropdown">
  <button className="dropbtn"><i className='fas fa-list-alt' style={{fontSize:'36px',color:'blueviolet'}}></i></button>
  <div className="dropdown-content">
    <h4>Log out</h4>
    <h4>Change<br></br>mode</h4>
    <h4>Review</h4>
  </div>
</div>
</div>
</div>

<div className='main'>
<div className='sideAnim'>
<img className='note1' src={note1}></img>
<img className='note2' src={note2}></img> 
<img className='note3' src={note3}></img>
  
 
  <img className='book' src={openBook}></img>
  
</div>
</div>
</>

    )
}