import React, { useState } from 'react';
import './Registration.css'
export default function Registration(props){
    var[username,setUsername]=useState('username');
    var [branch,setBranch]=useState('Branch');
    var [college,setCollege]=useState('');
    var [semester,setSemester]=useState();
    var [contact,setContact]=useState();
    var [password,setPassword]=useState('');
    var[passwordCheck,setPasswordCheck]=useState('');
    var [email,setEmail]=useState('');
    var [userType,setUserType]=useState('');
    const ValidateUsername=(e)=>{
        setUsername(e.target.value);
        if(setUsername==''){
            alert("Enter correct username");
        }
    };
    const ValidateBranch=(e)=>{
        setBranch(e.target.value);
    };
    const ValidateCollege=(e)=>{
        setCollege(e.target.value);
    };
    const ValidateSemester=(e)=>{
        setSemester(e.target.value);
    };
    const ValidateContact=(e)=>{
        setContact(e.target.value);
    };
    const ValidatePassword=(e)=>{
        setPassword(e.target.value);
    };
    const ValidateChkPassword=(e)=>{
        setPasswordCheck(e.target.value);
    };
    const ValidateUserType=(e)=>{
        setUserType(e.target.value);
    };

    return(
        <>
        <body>
            <div className='Registration'>
                <h1 className='Regtitle'>REGISTRATION FORM</h1>
            <div className='RegBox'>
                <form className='regData'>
                <label className='LblUsername'>Username &nbsp;
                    <input type='text' className='username' placeholder='Username' onInput={ValidateUsername}></input>               
                </label><br></br>
                <label className='LblBranch'>Branch &nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' className='branch' placeholder='branch'></input>
                </label><br></br>
                <label className='LblCollege'>College &nbsp;&nbsp;&nbsp;
                <input type='text' className='College' placeholder='College'></input>
                </label><br></br>
                <label className='LblSemester'>Semester&nbsp;
                <input type='number' className='semester' placeholder='2'></input>
                </label><br></br>
                <label className='LblContact'>Contact&nbsp;&nbsp;
                <input type='number' className='contact' placeholder='91+'></input>
                </label><br></br>
                <label className='LblPassword'>Password&nbsp;
                <input type='password' className='password' placeholder='Password'></input>
                </label><br></br>
                <label className='LblChkPassword'>Check Password
                <input type='password' className='chkPassword' placeholder='re-enter Password'></input>
                </label><br></br>
                <label className='LblEmail'>Email&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='email' className='email' placeholder='Username'></input>
                </label><br></br>
                <label for="img">Select profile picture:</label><br></br>
                <input type="file" id="img" name="img" accept="image/*"></input><br></br>
                
                <label className='LblUserType'>
                <p>UserType:</p>
                <input type="radio" id="student" name="usertype" value="Student"></input>
                  <label for="student">Student</label><br></br>
                  <input type="radio" id="teacher" name="usertype" value="Teacher"></input>
                  <label for="techer">Teacher</label><br></br>
                  <input type="radio" id="admin" name="usertype" value="Admin"></input>
                  <label for="admin">Admin</label>
                </label><br></br>
                <input type="submit"></input>
                </form>
            </div>
        </div></body>
        

        </>
    )
}