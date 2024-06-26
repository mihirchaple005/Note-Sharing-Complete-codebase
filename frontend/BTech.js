import React from 'react';
import './Programme.css'
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import AIML from './AIML';
import Civil from './Civil';
import CSE from './CSE'
import CyberS from './CyberS'
import DS from './DS'
import Electrical from './Electrical'
import ElectronicAndComm from './ElectronicandComm'
import Electronics from './Electronics'
import ElectronicsAndCS from './ElectronicsAndCS'
import ElectronicsDesignTech from './ElectronicsDesignTech'
import Industrial from './Industrial'
import IT from './IT'
import Mechanical from './Mechanical'
import addnotes from './photos2/addnotes.png';
import plus from './photos2/plus2.png';
import Addnotes from './Addnotes';
export default function BTech() {
   const location = useLocation();
    const showMainContent = location.pathname ==='/Community/BTech';
    return (<>
    {showMainContent && (<div className='main'> 
         <div className='Btechpage'>
            <nav className='Branch'>
                <div className='inArow'>
                <h1 className='branchTitle'>B.Teck Branch</h1>
                <Link className='addNotes' to='ADDNotes'><img src={addnotes} className='noteadd'></img><img src={plus} className='plus'></img></Link>
                </div>
                
                <div className='inArow'><Link  id="btech"className='CSE' to='CSE'>Computer Science and Engineering</Link>
                <Link id="btech"className='AIML' to='aiml'>Computer Science & Engineering
                (Artificial Intelligence & Machine learning)</Link>
                <Link id="btech"className='DS' to='DataScience'> Computer Science and Engineering ( Data Science )</Link></div>
                
                <div className='inArow'><Link  id="btech"className='CyberS' to='CyberS'>Computer Science and Engineering ( Cyber Security )</Link>
                <Link id="btech"className='Electronics' to='Electronics'>Electronics Engineering</Link>
                <Link id="btech"className='ECS' to='EletronicsAndComputerScience'> Electronics and Computer Science</Link></div>
                
                <div className='inArow'> <Link id="btech"className='IT' to='IT'>Information Technology</Link>
                <Link id="btech"className='EC' to='ElectronicsAndCommunication'>Electronics and Communication</Link>
                <Link id="btech"className='EE' to='Electrical'>Electrical Engineering</Link></div>
               
                <div className='inArow'> <Link id="btech"className='IE' to='Idustrial'>Industrial Engineering</Link>
                <Link id="btech" className='ME' to='MechanicalEngineering'>Mechanical Engineering</Link>
                <Link id="btech" className='CE' to='CivilEngineering'>Civil Engineering</Link></div>
               <div className='inArow'> <Link id="btech"className='EDT' to='ElectronicsDesignTech'>Electronics Design Tech</Link></div>
               
            </nav>
            </div>
            </div>
    )}
    <Routes>
    <Route path='ADDNotes' element={<Addnotes/>}></Route>
    <Route path='CSE/*' element={<CSE/>}></Route>
         <Route path='aiml' element={<AIML/>}></Route>
        <Route path='DataScience' element={<DS/>}></Route>
        <Route path='CyberS'  element={<CyberS/>}></Route>
        <Route path='Electronics'  element={<Electronics/>}></Route>
        <Route path='EletronicsAndComputerScience' element={<ElectronicsAndCS/>}></Route>
        <Route path='IT'  element={<IT/>}></Route>
        <Route path='ElectronicsAndCommunication'  element={<ElectronicAndComm/>}></Route>
        <Route path='Electrical'  element={<Electrical/>}></Route>
        <Route path='Idustrial'  element={<Industrial/>}></Route>
        <Route path='MechanicalEngineering'  element={<Mechanical/>}></Route>
        <Route path='CivilEngineering'  element={<Civil/>}></Route>
        <Route path='ElectronicsDesignTech'  element={<ElectronicsDesignTech/>}></Route></Routes>
        
            </>
        
      
    );
}