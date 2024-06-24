import React, { useState } from 'react';
import './NavLayout.css';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Saved from './Saved';
import Page1 from './Page1';
import Purchase from './Purchase';
import Store from './Store'
import Community from './Community';
import Demopage1 from './Demopage1';
import Demopage2 from './Demopage2';
import Account from './Account';
export default function NavLayout(){
    
    return(
<><BrowserRouter>
<div className='nav'>
<div className='logo'><h1>MARCOS</h1></div>


<div className='navContent'>
    

<nav>
<Link className='Community' to="/Community">Community</Link>
<Link className='Saved'to="/Saved">Saved</Link>
<Link className='Account' to="/Account">Account</Link>
<Link className='Purchase' to="/Purchase"> Purchase</Link>
</nav>
<div className="dropdown">
  <button className="dropbtn"><i className='fas fa-cog' style={{fontSize:'28px',color:'blueviolet'}}></i></button>
  <div className="dropdown-content">
    <h4>Log out</h4>
    <h4>Change<br></br>mode</h4>
    <h4>Review</h4>
  </div>
</div>
</div>
</div>


<Routes>
            <Route path='/Community/*' element={<Community/>}></Route>
            <Route path='/Saved' element={<Saved/>}></Route>
            <Route path='/Account' element={<Account/>}></Route>
            <Route path='/Purchase/*' element={<Purchase/>}></Route>
    </Routes>
    </BrowserRouter>
</>
    )
}