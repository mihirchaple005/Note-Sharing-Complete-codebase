import React, { useState } from 'react';
import './Community.css';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import BTech from './Programme/BTech';
import BBA from './Programme/BBA';
import BCA from './Programme/BCA';
import BSC from'./Programme/BSc';
import MCA from './Programme/MCA';
import MBA from './Programme/MBA';
import MTech from './Programme/MTech';
import MSc from './Programme/MSc';
import AIML from './Programme/AIML';
import Civil from './Programme/Civil';
import CSE from './Programme/CSE'
import CyberS from './Programme/CyberS'
import DS from './Programme/DS'
import Electrical from './Programme/Electrical'
import ElectronicAndComm from './Programme/ElectronicandComm'
import Electronics from './Programme/Electronics'
import ElectronicsAndCS from './Programme/ElectronicsAndCS'
import ElectronicsDesignTech from './Programme/ElectronicsDesignTech'
import Industrial from './Programme/Industrial'
import IT from './Programme/IT'
import Mechanical from './Programme/Mechanical'
export default function Community(){
    const location = useLocation();
    const showMainContent2 = location.pathname === '/Community';
    return(
<>
{showMainContent2 && (
                <div className='main'>
                <p>Community</p>
                <div className='Programme'>
                <nav>
                        <Link className='BTech' id='BTech' to='BTech'>Bachelor of Technology</Link>
                        <Link className='BBA' id='BBA' to='BBA'>Bachelor of Business Administration</Link>
                        <Link className='BCA' id='BCA' to='BCA'>Bachelor of Computer Applications</Link>
                        <Link className='BSc' id='BSc' to='BSc'>Bachelor of Science</Link>
                        <Link className='MTech' id='MTech' to='MTech'>Masters of Technology</Link>
                        <Link className='MCA' id='MCA' to='MCA'>Master of Computer Applications</Link>
                        <Link className='MBA' id='MBA' to='MBA'> Master of Business Administration</Link>
                        <Link className='MSc' id='MSc' to='MSc'>Master of Science</Link>
                    </nav>
</div>
</div>)}
<Routes>
    <Route path='BTech/*' element={<BTech />} > <Route path='cse' element={<CSE/>}></Route>
       </Route>
    <Route path='BBA' element={<BBA />} />
    <Route path='BCA' element={<BCA />} />
    <Route path='BSc' element={<BSC />} />
    <Route path='MTech' element={<MTech />} />
    <Route path='MSc' element={<MSc />}/>
    <Route path='MCA' element={<MCA />}/>
    <Route path='MBA' element={<MBA/>}/>
</Routes>
</>
    )
}