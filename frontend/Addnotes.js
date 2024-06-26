import React, { useState }from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import './Programme.css'
export default function Addnotes() 
    {
        const [formData, setFormData] = useState({
            Branch: '',
            Subject: '',
            Username: '',
            Topic: '',
            'Note-file': null,
            description: ''
        });
    
        const handleChange = (e) => {
            const { name, value, files } = e.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: files ? files[0] : value
            }));
        };
    const SubmitNote=(e)=>{ 
        e.preventDefault();
        e.preventDefault();
        const Filedata = new FormData();
        for (const key in formData) {
            Filedata.append(key, formData[key]);
        }
        fetch('your-server-endpoint', {
            method: 'POST',
            body:Filedata
        })
        .then(response => response.json())
        .then(Filedata => {
            console.log('Success:', Filedata);
            // Update order state after successful POST updateOrder(productDetails); 
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };
    
    return (<>
<div className='main'> 
    
<form onSubmit={SubmitNote}>
<p className='AddNoteTitle'><center>Add Note</center></p>
<label for="Branch">Branch: </label>
<select name='Branch' value={formData.Branch} onChange={handleChange}>
<option value="Computer Science and Engineering">Computer Science and Engineering</option>
<option value="Computer Science & Engineering
                (Artificial Intelligence & Machine learning)">Computer Science & Engineering
                (Artificial Intelligence & Machine learning)</option>
<option value="Computer Science & Engineering( Data Science )">Computer Science & Engineering
( Data Science )</option>
<option value="Computer Science and Engineering ( Cyber Security )">Computer Science and Engineering ( Cyber Security )</option>
<option value="Electronics Engineering">Electronics Engineering</option>
<option value=" Electronics and Computer Science"> Electronics and Computer Science</option>
<option value="Information Technology">Information Technology</option>
<option value="Electronics and Communication">Electronics and Communication</option>
<option value="Electrical Engineering">Electrical Engineering</option>
<option value="Industrial Engineering">Industrial Engineering</option>
<option value="Mechanical Engineering">Mechanical Engineering</option>
<option value="Civil Engineering">Civil Engineering</option>
<option value="Electronics Design Tech">Electronics Design Tech</option>
</select><br></br>
<label for="Subject">Subject: </label>
<input  type='text' id='subject' name="Subject" value={formData.Subject} onChange={handleChange}></input><br></br>
<label for="Username">Username:</label>
<input type='text'id='username' name='Username'  value={formData.Username} onChange={handleChange}></input><br></br>
<label for='Topic'>Topic: </label>&nbsp;
<input type='text' id='topic' name='Topic'  value={formData.Topic} onChange={handleChange}></input><br></br>
<label for="Note-file">Notes</label>
<input type='file' id='file' name='Note-file'  onChange={handleChange}></input><br></br>
<label for='description'>Description: </label>&nbsp;
<input type='text' id='description' name="description" value={formData.description} onChange={handleChange}></input><br></br>
<button type="submit">Submit</button>
</form>

    </div>
    </>)
    
}
