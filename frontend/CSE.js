import React from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Subject from './Subject';
import './Programme.css'
export default function CSE() {
    const location = useLocation();
    const showMainContent = location.pathname ==='/Community/BTech/CSE';
    return (<>
    {/*
    {showMainContent &&(<div className='main'> 
        <nav className='cse'>
            <div className='inArow'>
            <Link className='PPS' to='PPS'>Programming for Problem Solving</Link>
            <Link className='OOP' to='OOP'>Object Oriented Programming</Link>
            <Link className='CWS' to='CWS'>Computer Workshop-1</Link>
            </div>
            <div className='inArow'>
            <Link className='CWS2' to='CWS2' >Computer Workshop-2</Link>
            <Link className='maths1' to='Maths1'>Mathematics - I</Link>
            <Link className='maths2' to='Maths2'>Mathematics - II</Link>
            </div>
            <div className='inArow'><Link className='DS' to='DS'>Data Structures</Link></div>
            </nav>
    </div>
)}
<Routes>
    <Route path='PPS' element={<Subject subject='Programming for Problem Solving'/>}></Route>
    <Route path='OOP' element={<Subject subject='Object Oriented Programming'/>}></Route>
    <Route path='CWS' element={<Subject subject='Computer Workshop-1'/>}></Route>
    <Route path='CWS2' element={<Subject subject='Computer Workshop-2'/>}></Route>
    <Route path='Maths1' element={<Subject subject='Mathematics - I'/>}></Route>
    <Route path='Maths2' element={<Subject subject='Mathematics - II'/>}></Route>
    <Route path='DS' element={<Subject subject='Data Structures'/>}></Route>
</Routes>
    */}
    </>)};