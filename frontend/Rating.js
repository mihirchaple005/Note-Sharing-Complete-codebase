import React, { useState } from 'react';
import './Programme/Subject.css';
export default function Saved(){
    var [likes,setLikes]=useState(0);
    var[clicknoStar1,setclicknoStar1]=useState(0);
    var[clicknoStar2,setclicknoStar2]=useState(0);
    var[clicknoStar3,setclicknoStar3]=useState(0);
    var[clicknoStar4,setclicknoStar4]=useState(0);
    var[clicknoStar5,setclicknoStar5]=useState(0);
    const Liked=()=>{
        setLikes(likes+1);
    };
    const Star1=()=>{
        
        setclicknoStar1(clicknoStar1+1);
        if(clicknoStar1%2==0){
            setLikes(likes-1);
        }
        else{
            setLikes(1);
        }
    };
    const Star2=()=>{
        
        setclicknoStar2(clicknoStar2+1);
        if(clicknoStar2%2==0){
            setLikes(likes-1);
        }
        else{
            setLikes(likes+1);
            
        }
    };
 return(<>
 <div className='rate'><button className="like" onClick={Liked}>Like</button> 
            <button className="like" onClick={Liked}>Like</button> 
            <button className="like" onClick={Liked}>Like</button> 
            <button className="like" onClick={Liked}>Like</button>
            <button className="like" onClick={Liked}>Like</button></div></>)
}